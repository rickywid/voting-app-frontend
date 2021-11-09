import { Link } from "react-router-dom";
import { Box, Container, Heading } from '@chakra-ui/react';
import routes from './routes';

function App() {
  return (
    <Container maxW="container.xl">
        <nav>
          <Link to="/signup">signup</Link>
          <Link to="/login">login</Link>
          <Link to="/polls">polls</Link>
          <Link to="/new">new poll</Link>
        </nav>
        <Box>{routes}</Box>
    </Container>
  );
}

export default App;
