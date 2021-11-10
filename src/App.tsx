import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import routes from "./routes";
import { UserContext } from "./contextFile";

function App() {
  const [auth, setAuth] = useState({user: null});
  let navigate = useNavigate();

  /**
   * Make a request to /auth endpoint to check if the user is authenticated
   */
  useEffect(() => {
    // /auth route will return the authenticated user's name 
    (async () => {
      const res = await fetch('https://tva-backend.herokuapp.com/auth', {
        credentials: 'include'
      });
      const user = await res.json();
      setAuth(user);
    })();
  }, []);

  const handleSignout = () => {
    (async () => {
      const res = await fetch('https://tva-backend.herokuapp.com/signout', {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify({})
      });
      const user = await res.json();
      setAuth({user: null});
    })();
    navigate('/');
  }

  console.log(auth.user)

  return (
    <Container maxW="container.xl">
      <nav>
        <Flex
          justifyContent="space-between"
        >
          <Box>Voting App</Box>
          <Box>
            {auth.user ? (
              <Button 
                size="xs" 
                colorScheme="whatsapp"
                onClick={handleSignout}
              >sign out</Button>
            ) : (
              <ul>
                <li><Link to="/signup">signup</Link></li>
                <li><Link to="/login">login</Link></li>
                <li><Link to="/new">new poll</Link></li>
              </ul>
            )}
          </Box>
        </Flex>
      </nav>
      <UserContext.Provider value={{ auth, setAuth }}>
        <Box>{routes}</Box>
      </UserContext.Provider>
    </Container>
  );
}

export default App;
