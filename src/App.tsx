import { Link } from "react-router-dom";
import { Box, Heading } from "@chakra-ui/react";
import routes from "./routes";

function App() {
  return (
    <Box className="App">
      <nav>
        <Link to="/login">login</Link>
        <Link to="/polls">polls</Link>
        <Link to="/new">new poll</Link>
      </nav>
      <Heading as="h2" size="large">
        Root
      </Heading>
      <Box>{routes}</Box>
    </Box>
  );
}

export default App;
