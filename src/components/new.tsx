import { Box, Heading } from '@chakra-ui/react';
import { FunctionComponent, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contextFile';

interface NewPollProps {
    
}
 
const NewPoll: FunctionComponent<NewPollProps> = () => {
    const { auth } = useContext(UserContext);
    let navigate = useNavigate();

    useEffect(() => {
        if(!auth.user) {
            navigate('/login')
        }
    });

    return ( 
        <Box>
            <Heading as="h2" size="large">NewPoll</Heading>
        </Box>
     );
}
 
export default NewPoll;