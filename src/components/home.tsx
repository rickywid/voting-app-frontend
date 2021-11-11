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
            setPolls(data);
        })();
    }, []);

    const displayPolls = () => {
        return polls.map(poll => {
            const { id, question, poll_count } = poll;

            return (
                <Link to={`/poll/${id}`}>
                    <Box
                        background="#f2f9e3"
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

    return (
        <>
            {auth.user ? (
                <Box>
                    <Heading as="h2" size="large" mb={5}>Welcome {auth.user}</Heading>
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