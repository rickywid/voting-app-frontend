import { Box, Button, Heading, Radio, RadioGroup, Select, Stack } from '@chakra-ui/react';
import { FunctionComponent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../contextFile';

interface PollProps {

}

export interface IPoll {
    id: number;
    options: string;
    options_weight: number[];
    question: string;
    total_count: number;
}

/**
 * 
 * Display the poll if the user hasn't voted else show the poll results
 *
        
        Get poll
        /poll/:id

        When submitting poll vote, call:
        - /poll/:id/submit 
        - /poll/:id/submit-user

        After the poll submits, show the updated results by calling:
        - /poll/:id/results
 */

const Poll: FunctionComponent<PollProps> = () => {
    const { auth } = useContext(UserContext);
    let { id } = useParams();
    let navigate = useNavigate();
    const [poll, setPoll] = useState<IPoll>();
    const [loading, setLoading] = useState<boolean>(true);
    const [voteSelected, setSelectedVote] = useState<number>();

    useEffect(() => {
        if (!auth.user) {
            navigate('/login')
        }

        (async () => {
            const res = await fetch(`https://tva-backend.herokuapp.com/poll/${id}`);
            const data = await res.json();
            setPoll(data[0]);
            setLoading(false);
        })();
    }, []);

    const handleSelect = (e: string) => {
        setSelectedVote(parseInt(e));
    }

    const handleSubmit = () => {
        (async () => {
            const res1 = await fetch(`https://tva-backend.herokuapp.com/poll/${id}/submit`, {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify({
                    choice: voteSelected,
                    pollCount: poll?.total_count, 
                    optionsWeight: poll?.options_weight 
                })
            });
            const res2 = await fetch(`https://tva-backend.herokuapp.com/poll/${id}/submit-user`, {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify({
                    userId: auth.userId
                })
            });
            const data1 = await res1.json();
            const data2 = await res2.json();

            console.log(data1, data2);
        })();
    }

    return (
        <>
            {loading ? "" :
                <Box>
                    <Heading as="h2" size="3xl">{poll!.question}</Heading>
                    <RadioGroup onChange={(e)=>handleSelect(e)} value={voteSelected}>
                        <Stack>
                            {JSON.parse(poll!.options).map((option: string, index: string) => {
                                return (
                                    <Radio size="lg"colorScheme="red" value={index}>
                                        {option}
                                    </Radio>
                                )
                            })}
                        </Stack>
                    </RadioGroup>
                    <Button onClick={handleSubmit} colorScheme="yellow">Vote</Button>
                </Box>
            }
        </>
    );
}

export default Poll;