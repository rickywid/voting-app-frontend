import { Flex, Heading, Input, Textarea, Button, Text } from "@chakra-ui/react";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contextFile";
import { BiPlus } from "react-icons/bi";
import { useForm } from "react-hook-form";

interface NewPollProps {}

const NewPoll: FunctionComponent<NewPollProps> = () => {
  const { auth } = useContext(UserContext);
  let navigate = useNavigate();
  const [numOfOptions, setNumOfOptions] = useState(["option", "option"]);
  const [question, setQuestion] = useState("");
  const [noQuestion, setNoQuestion] = useState(false);

  useEffect(() => {
    if (!auth.user) {
      navigate("/login");
    }
  });

  const { register, handleSubmit, errors } = useForm<any>();

  function handleQuestion(e: any) {
    setQuestion(e.target.value);
  }

  function addOption() {
    const newArray = [...numOfOptions, "option"];
    setNumOfOptions(newArray);
  }

  const onSubmit = handleSubmit((data) => {
    let options = [];

    for (const option of Object.values(data)) {
      options.push(option);
    }

    if (question.length === 0) {
      setNoQuestion(true);
    } else {
      setNoQuestion(false);
      submitPoll(question, options);
    }
  });

  async function submitPoll(question: any, options: any) {
    const newPoll = {
      question,
      options,
    };

    await fetch(
      "https://tva-backend.herokuapp.com/poll/create",
      {
        method: "POST",
        body: JSON.stringify(newPoll),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    navigate("/");
  }

  return (
    <Flex direction="column" align="center">
      <Heading as="h2" size="large">
        Create a new poll
      </Heading>
      <Flex direction="column" w="30rem">
        <Textarea
          my="1rem"
          placeholder="Write your question here"
          onChange={handleQuestion}
          background="white"
          _placeholder={{ color: "black", opacity: "50%" }}
        />
        {noQuestion && <Text color="red">You need a Question</Text>}
        <form onSubmit={onSubmit}>
          {numOfOptions.map((option, index) => {
            return (
              <Input
                my="1rem"
                placeholder={`Option ${index + 1}`}
                type="text"
                ref={register({ required: true })}
                name={`option ${index + 1} `}
                background="white"
                _placeholder={{ color: "black", opacity: "50%" }}
              />
            );
          })}
          {errors.option && <Text> hallo</Text>}
          <Flex justify="center" my="1rem">
            <Button
              mx="1rem"
              variant="ghost"
              leftIcon={<BiPlus />}
              onClick={addOption}
            >
              Add an option
            </Button>
            <Button mx="1rem" type="submit" colorScheme="facebook">
              Submit
            </Button>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default NewPoll;
