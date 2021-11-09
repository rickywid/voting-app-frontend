import { Box, Heading } from '@chakra-ui/react';
import { FunctionComponent } from "react";

interface HomeProps {
    
}
 
const Home: FunctionComponent<HomeProps> = () => {
    return ( 
        <Box>
            <Heading as="h2" size="large">Home</Heading>
        </Box>
     );
}
 
export default Home;