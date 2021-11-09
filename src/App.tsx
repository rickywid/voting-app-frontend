import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Box, Container, Heading } from "@chakra-ui/react";
import routes from "./routes";
import { UserContext } from "./contextFile";

function App() {
  const [user, setUser] = useState(null);

  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Container maxW="container.xl">
      <nav>
        <Link to="/signup">signup</Link>
        <Link to="/login">login</Link>
        <Link to="/polls">polls</Link>
        <Link to="/new">new poll</Link>
      </nav>
      <UserContext.Provider value={providerValue}>
        <Box>{routes}</Box>
      </UserContext.Provider>
    </Container>
  );
}

export default App;
