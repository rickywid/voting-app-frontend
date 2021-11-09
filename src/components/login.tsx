import { Box, Heading } from '@chakra-ui/react';
import { FunctionComponent } from "react";

interface LoginProps {
    
}
 
const Login: FunctionComponent<LoginProps> = () => {
    return ( 
        <Box>
            <Heading as="h2" size="large">Login</Heading>
        </Box>
     );
}
 
export default Login;