import { Flex, Heading, Input, Button, Text } from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);
  const { signin } = useAuth();

  let navigate = useNavigate();

  function handleUsername(e: any) {
    setUsername(e.target.value);
  }
  function handlePassword(e: any) {
    setPassword(e.target.value);
  }

  async function submitPassword() {
    signin(username, password)
      .then(() => {
        navigate("/", { replace: true });
      })
      .catch(() => {
        setLoginFailed(true);
      });
  }

  return (
    <Flex w="100%" direction="column" align="center">
      <Heading as="h2" size="large">
        Login
      </Heading>

      <Flex w="50%" direction="column" align="center">
        <Input
          my="1rem"
          placeholder="Username"
          size="lg"
          onChange={handleUsername}
          background="white"
          _placeholder={{ color: "black", opacity: "50%" }}
        />
        <Input
          my="1rem"
          placeholder="Password"
          size="lg"
          type="password"
          onChange={handlePassword}
          background="white"
          _placeholder={{ color: "black", opacity: "50%" }}
        />
        <Flex align="center">
          <Button
            my="1rem"
            mr="1rem"
            w="50%"
            type="submit"
            colorScheme="whiteAlpha"
            onClick={submitPassword}
          >
            Log In
          </Button>
          <Text>or</Text>
          <Button ml="1rem" colorScheme="facebook">
            <Link to="/signup">signup</Link>
          </Button>
        </Flex>
        {loginFailed && <Text>Login Failed</Text>}
      </Flex>
    </Flex>
  );
};

export default Login;
