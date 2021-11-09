import { Box, Heading } from '@chakra-ui/react';
import { FunctionComponent } from "react";

interface SignupProps {
    
}
 
const Signup: FunctionComponent<SignupProps> = () => {
    return ( 
        <Box>
            <Heading as="h2" size="large">Signup</Heading>
        </Box>
     );
}
 
export default Signup;