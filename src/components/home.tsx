import { Box, Flex, Grid, Heading } from '@chakra-ui/react';
import { FunctionComponent, useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { UserContext } from '../contextFile';

interface HomeProps {

}

interface IPoll {
    id: number;
    question: string;
    poll_count: number;
}

const Home: FunctionComponent<HomeProps> = () => {

    const { auth } = useContext(UserContext);
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
                    <Box
                        background="#3e5177"
                        padding={3}
                        borderRadius={5}
                        fontWeight="bold"
                    >
                        <p>{question}</p>
                        <p>{poll_count}</p>
                    </Box>
                </Link>
            )
        })
    }

    console.log(auth)

    return (
        <>
            {auth.user ? (
                <Box>
                    <Heading as="h2" size="large">Welcome {auth.user}</Heading>
                    <Box>
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
            ) : (
                <Box>
                    <Heading as="h2" size="large">You must be logged in. Please <Link style={{ textDecoration: 'underline' }} to="/login">Log in</Link>.</Heading>
                </Box>
            )}
        </>
    );
}

export default Home;