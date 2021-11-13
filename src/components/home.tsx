import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import { FunctionComponent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth, Authenticated } from "../context/auth";

interface IPoll {
  id: number;
  question: string;
  poll_count: number;
}

interface PollListProps {
  polls: IPoll[];
}

const PollList = ({ polls }: PollListProps) => {
  const { user } = useAuth();

  if (polls.length === 0) {
    return (
      <Flex height="65vh">
        <Heading as="h2" size="large">
          No polls
        </Heading>
      </Flex>
    );
  }
  return (
    <>
      <Heading as="h2" size="large" mb={5}>
        Welcome {user?.name}
      </Heading>
      <Box>
        <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap="5">
          {polls.map(({ id, question, poll_count }) => (
            <Link to={`/poll/${id}`}>
              <Box
                background="#f2f9e3"
                padding={3}
                borderRadius={5}
                fontWeight="bold"
              >
                <p>{question}</p>
                <p>{poll_count}</p>
              </Box>
            </Link>
          ))}
        </Grid>
      </Box>
    </>
  );
};

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [polls, setPolls] = useState<IPoll[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://tva-backend.herokuapp.com/polls");
      const data = await res.json();
      setPolls(data);
    })();
  }, []);

  return (
    <Box>
      <Authenticated
        fallback={
          <Heading as="h2" size="large">
            You must be logged in. Please{" "}
            <Link style={{ textDecoration: "underline" }} to="/login">
              Log in
            </Link>
            .
          </Heading>
        }
      >
        <PollList polls={polls} />
      </Authenticated>
    </Box>
  );
};

export default Home;
