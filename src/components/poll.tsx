import {
  Box,
  Button,
  Heading,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../contextFile";
import { Bar } from "react-chartjs-2";
import { Authenticated, useAuth } from "../context/auth";
import { post } from "../api";

interface PollProps { }

export interface IPoll {
  id: number;
  options: string;
  options_weight: any;
  question: string;
  total_count: number;
}

const Poll: FunctionComponent<PollProps> = () => {
  // const { auth } = useContext(UserContext);
  let { id } = useParams();
  // let navigate = useNavigate();
  const { user } = useAuth();

  const [poll, setPoll] = useState<IPoll>();
  const [loading, setLoading] = useState<boolean>(true);
  const [voteSelected, setSelectedVote] = useState<number>();
  const [showResults, setShowResults] = useState<boolean>(false);
  const [pollResults, setPollResults] = useState<any>();

  useEffect(() => {
    // if (!auth.user) {
    //   navigate("/login");
    // }

    (async () => {
      const res = await fetch(`https://tva-backend.herokuapp.com/poll/${id}`);
      const res2 = await fetch(
        `https://tva-backend.herokuapp.com/poll/${id}/voted`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ userId: user?.id }),
        }
      );

      const data = await res.json();
      const data2 = await res2.json();
      if (data2.success) {
        setShowResults(true);
      }

      if (data) setPoll(data[0]);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    const fetchReq = async () => {
      const res3 = await fetch(
        `https://tva-backend.herokuapp.com/poll/${id}/results`,
        {
          credentials: "include",
        }
      );
      const data3 = await res3.json();
      setPollResults(data3);
    };

    fetchReq();
  }, [showResults, setShowResults]);

  const handleSelect = (e: string) => {
    setSelectedVote(parseInt(e));
  };

  const handleSubmit = () => {
    (async () => {
      if (poll) {
        const optionsWeight = JSON.parse(poll.options_weight);

        const bodyTest = {
          choice: voteSelected,
          pollCount: poll?.total_count,
          optionsWeight,
        };

        post(
          `https://tva-backend.herokuapp.com/poll/${id}/submit`,
          {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(bodyTest),
            headers: {
              "Content-Type": "application/json",
            }
          }
        )

        post(
          `https://tva-backend.herokuapp.com/poll/${id}/submit-user`,
          {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({
              userId: user?.id,
            }),
            headers: {
              "Content-Type": "application/json",
            }
          }
        )
        setShowResults(true);
      }
    })();
  };

  const displayChart = () => {
    const labels = JSON.parse(poll!.options);
    const d = {
      label: "# of votes",
      data: JSON.parse(pollResults[0].options_weight),
    };

    const options = {
      indexAxis: "y",
      // Elements options apply to all of the options unless overridden in a dataset
      // In this case, we are setting the border of each horizontal bar to be 2px wide
    };

    const data = {
      labels,
      datasets: [
        {
          ...d,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
    // @ts-ignore: Unreachable code error
    return <Bar data={data} options={options} />;
  };

  return (
    <>
      {
        loading ? <></> :
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
            <Box>
              <Heading as="h2" size="3xl" mb={10} textAlign="center">
                {poll!.question}
              </Heading>
              {showResults ? (
                <>
                  <Box
                    mb={10}
                    background="#b7d2d9"
                    padding="71px"
                    borderRadius="10px"
                  >
                    {displayChart()}
                  </Box>
                  <Box textAlign="right">
                    <Link to="/">
                      <Button colorScheme="yellow">Back</Button>
                    </Link>
                  </Box>
                </>
              ) : (
                <>
                  <RadioGroup
                    onChange={(e) => handleSelect(e)}
                    value={voteSelected}
                    mb={10}
                  >
                    <Stack>
                      {JSON.parse(poll!.options).map(
                        (option: string, index: string) => {
                          return (
                            <Radio size="lg" colorScheme="yellow" value={index}>
                              {option}
                            </Radio>
                          );
                        }
                      )}
                    </Stack>
                  </RadioGroup>
                  <Button onClick={handleSubmit} colorScheme="yellow">
                    Vote
                  </Button>
                </>
              )}
            </Box>
          </Authenticated>
      }
    </>

  );
};

export default Poll;
