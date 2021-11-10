import { Flex, Heading, Input, Button, Text } from "@chakra-ui/react";
import { FunctionComponent, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { UserContext } from "../contextFile";

interface LoginProps { }

const Login: FunctionComponent<LoginProps> = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);

  const { auth, setAuth } = useContext(UserContext);
  let navigate = useNavigate();

  function handleUsername(e: any) {
    setUsername(e.target.value);
  }
  function handlePassword(e: any) {
    setPassword(e.target.value);
  }

  async function submitPassword() {
    const userCredentials = {
      username,
      password,
    };

    const result = await fetch("https://tva-backend.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include'
    });
    const data = await result.json();

    if (data.success) {
      // localStorage.setItem(
      //   "user",
      //   JSON.stringify({
      //     loggedIn: true,
      //     userId: data.userId,
      //   })
      // );
      setAuth({ user: userCredentials.username });
      navigate("/", { replace: true });
    } else {
      setLoginFailed(true);
    }
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
        />
        <Input
          my="1rem"
          placeholder="Password"
          size="lg"
          type="password"
          onChange={handlePassword}
        />
        <Flex align="center">
          <Button
            my="1rem"
            mr="1rem"
            w="50%"
            type="submit"
            onClick={submitPassword}
          >
            Log In
          </Button>
          <Text>or</Text>
          <Button ml="1rem">
            <Link to="/signup">signup</Link>
          </Button>
        </Flex>
        {loginFailed && <Text>Login Failed</Text>}
      </Flex>
    </Flex>
  );
};

export default Login;
