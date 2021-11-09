import { Box, Heading } from '@chakra-ui/react';
import { FunctionComponent } from "react";

interface NewPollProps {
    
}
 
const NewPoll: FunctionComponent<NewPollProps> = () => {
    return ( 
        <Box>
            <Heading as="h2" size="large">NewPoll</Heading>
        </Box>
     );
}
 
export default NewPoll;