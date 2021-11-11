import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  ListItem,
  UnorderedList,
  Text,
} from "@chakra-ui/react";
import routes from "./routes";
import { UserContext } from "./contextFile";

function App() {
  const [auth, setAuth] = useState({ user: null });
  let navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);

  /**
   * Make a request to /auth endpoint to check if the user is authenticated
   */
  useEffect(() => {
    // /auth route will return the authenticated user's name
    (async () => {
      const res = await fetch("https://tva-backend.herokuapp.com/auth", {
        credentials: "include",
      });
      const user = await res.json();
      setAuth(user);
      setLoading(false);
    })();
  }, []);

  const handleSignout = () => {
    (async () => {
      const res = await fetch("https://tva-backend.herokuapp.com/signout", {
        credentials: "include",
        method: "POST",
        body: JSON.stringify({}),
      });
      const user = await res.json();
      setAuth({ user: null });
    })();
    navigate("/");
  };

  return (
    <>
      {loading ? (
        <Box></Box>
      ) : (
        <Container maxW="container.xl">
          <Box paddingTop={5} paddingBottom={5}>
            <Flex
              justifyContent="space-between"
              background="#7b8e93"
              padding="10px 20px"
              borderRadius="10px"
              alignItems="center"
            >
              <Flex align="center">
                <Link to={"/"} style={{ fontWeight: "bold" }}>
                  <Image
                    src="https://emojis.slackmojis.com/emojis/images/1534453840/4524/zlatan_ibrahimovic.png?1534453840"
                    display="inline-block"
                    height={10}
                  />
                  Zultan's Voting App
                </Link>
                <Text fontSize="1.5rem" fontWeight="bold" ml="2rem">
                  <Link to={"/"}>Home</Link>
                </Text>
              </Flex>
              <Box>
                {auth.user ? (
                  <>
                    <Link to="/new" style={{ marginRight: 10 }}>
                      <Button colorScheme="linkedin" size="xs">
                        new poll
                      </Button>
                    </Link>
                    <Button
                      size="xs"
                      colorScheme="whatsapp"
                      onClick={handleSignout}
                    >
                      sign out
                    </Button>
                  </>
                ) : (
                  <UnorderedList>
                    <ListItem mr={4} listStyleType="none" display="inline">
                      <Link to="/login">
                        <Button size="xs" colorScheme="whatsapp">
                          login
                        </Button>
                      </Link>
                    </ListItem>
                    <ListItem listStyleType="none" display="inline">
                      <Link to="/signup">
                        <Button colorScheme="linkedin" size="xs">
                          sign up
                        </Button>
                      </Link>
                    </ListItem>
                  </UnorderedList>
                )}
              </Box>
            </Flex>
          </Box>
          <UserContext.Provider value={{ auth, setAuth }}>
            <Box mt={100}>{routes}</Box>
          </UserContext.Provider>
        </Container>
      )}
    </>
  );
}

export default App;
