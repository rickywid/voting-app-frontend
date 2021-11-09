import { Box, Heading } from '@chakra-ui/react';
import { FunctionComponent } from "react";

interface PollProps {
    
}

/**
 * 
 * Display the poll if the user hasn't voted else show the poll results
 */
 
const Poll: FunctionComponent<PollProps> = () => {
    return ( 
        <Box>
            <Heading as="h2" size="large">View Poll</Heading>
        </Box>
     );
}
 
export default Poll;