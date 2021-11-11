import { useState, useContext } from "react";
import { Flex, Heading, Input, Button, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";

import { UserContext } from "../contextFile";

interface SignupProps {}

const Signup: FunctionComponent<SignupProps> = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signupFailed, setSignupFailed] = useState(false);

  const { auth, setAuth } = useContext(UserContext);
  let navigate = useNavigate();

  function handleUsername(e: any) {
    setUsername(e.target.value);
  }
  function handlePassword(e: any) {
    setPassword(e.target.value);
  }

  async function submitPassword() {
    if (username.length > 0 && password.length > 0) {
      const userCredentials = {
        username,
        password,
      };

      const result = await fetch("https://tva-backend.herokuapp.com/signup", {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
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
        navigate("/login", { replace: true });
      } else {
        setSignupFailed(true);
      }
    } else {
      setSignupFailed(true);
    }
  }

  return (
    <Flex w="100%" direction="column" align="center">
      <Heading as="h2" size="large">
        Signup
      </Heading>

      <Flex w="50%" direction="column" align="center" pos="relative">
        <Input
          my="1rem"
          placeholder="Username"
          size="lg"
          onChange={handleUsername}
          background="white"
          required
          _placeholder={{ color: "black", opacity: "50%" }}
        />
        <Input
          my="1rem"
          placeholder="Password"
          size="lg"
          type="password"
          background="white"
          onChange={handlePassword}
          _placeholder={{ color: "black", opacity: "50%" }}
        />
        <Flex align="center">
          <Text pos="absolute" left="0">
            <Link to="/login">Go back to Login</Link>
          </Text>
          <Button my="1rem" w="8rem" type="submit" onClick={submitPassword}>
            signup
          </Button>
        </Flex>
        {signupFailed && <Text>Signup Failed</Text>}
      </Flex>
    </Flex>
  );
};

export default Signup;
