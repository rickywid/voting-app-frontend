import { Box, Flex, Grid, Heading } from '@chakra-ui/react';
import { FunctionComponent, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { mockPolls } from '../mock/polls';

interface PollsProps {

}

interface IPoll {
    id: number;
    question: string;
    poll_count: number;
}

const Polls: FunctionComponent<PollsProps> = () => {

    const [polls, setPolls] = useState<IPoll[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch('https://tva-backend.herokuapp.com/polls');
            const data = await res.json();
            console.log(data);
            setPolls(data);
        })();
    }, []);


    const displayPolls = () => {
        return polls.map(poll => {
            const { id, question, poll_count } = poll;

            return (
                <Link to={`/poll/${id}`}>
                    <p>{question}</p>
                    <p>{poll_count}</p>
                </Link>
            )
        })

    }

    return (
        <Box>
            <Heading as="h2" size="large">Polls list</Heading>
            <Box style={{ clear: "both" }}>
                {polls.length ?
                    <Grid
                        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
                        gap="5"
                    >
                        {displayPolls()}
                    </Grid>
                    :
                    <Flex height="65vh">
                        <Heading as="h2" size="large">No polls</Heading>
                    </Flex>
                }
            </Box>
        </Box>
    );
}

export default Polls;