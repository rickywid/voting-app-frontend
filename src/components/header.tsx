import {
  Box,
  Button,
  Flex,
  Image,
  ListItem,
  UnorderedList,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAuth, Authenticated } from "../context/auth";

const Header = () => {
  const { signout } = useAuth();

  return (
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
        </Flex>
        <Flex alignItems="center">
          <Text
            display="inline-block"
            fontWeight="bold"
            mr="1rem"
            lineHeight="1"
          >
            <Link to={"/"}>Home</Link>
          </Text>
          <Authenticated
            fallback={
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
            }
          >
            <Link to="/new" style={{ marginRight: 10 }}>
              <Button colorScheme="linkedin" size="xs">
                new poll
              </Button>
            </Link>
            <Button size="xs" colorScheme="whatsapp" onClick={signout}>
              sign out
            </Button>
          </Authenticated>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
