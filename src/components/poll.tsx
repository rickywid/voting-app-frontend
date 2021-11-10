import { Box, Heading } from '@chakra-ui/react';
import { FunctionComponent, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contextFile';

interface PollProps {
    
}

/**
 * 
 * Display the poll if the user hasn't voted else show the poll results
 */
 
const Poll: FunctionComponent<PollProps> = () => {
    const { auth } = useContext(UserContext);
    let navigate = useNavigate();
    
    useEffect(() => {
        if(!auth.user) {
            navigate('/login')
        }
    });
    
    return ( 
        <Box>
            <Heading as="h2" size="large">View Poll</Heading>
        </Box>
     );
}
 
export default Poll;