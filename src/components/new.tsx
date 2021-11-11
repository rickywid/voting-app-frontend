import {
  Flex,
  Heading,
  Input,
  Textarea,
  Button,
  FormControl,
} from "@chakra-ui/react";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contextFile";
import { BiPlus } from "react-icons/bi";
import { useForm, SubmitHandler } from "react-hook-form";

interface NewPollProps {}

type Options = {
  question: string;
  option: string;
};

const NewPoll: FunctionComponent<NewPollProps> = () => {
  const { auth } = useContext(UserContext);
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm<Options>();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    alert(JSON.stringify(data));
  });

  const [numOfOptions, setNumOfOptions] = useState(["option", "option"]);
  const [options, setOptions] = useState(null);

  useEffect(() => {
    if (!auth.user) {
      navigate("/login");
    }
  });

  function addOption() {
    console.log("new option");

    const newArray = [...numOfOptions, "option"];

    setNumOfOptions(newArray);
  }

  function handleOptionText(e: any) {
    console.log(e.target.value);
    console.log("hi");
  }

  return (
    <Flex direction="column" align="center">
      <Heading as="h2" size="large">
        Create a new poll
      </Heading>
      <Flex direction="column" w="30rem">
        <form onSubmit={onSubmit}>
          <Textarea
            my="1rem"
            placeholder="Write your question here"
            name="question"
          />
          {numOfOptions.map((option, index) => {
            return (
              <Input
                my="1rem"
                placeholder={`Option ${index + 1}`}
                onchange={handleOptionText}
                type="text"
                ref={register}
                name={`option ${index}`}
              />
            );
          })}
          <Flex justify="center" my="1rem">
            <Button
              mx="1rem"
              variant="ghost"
              leftIcon={<BiPlus />}
              onClick={addOption}
            >
              Add an option
            </Button>
            <Button mx="1rem" type="submit">
              Submit
            </Button>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default NewPoll;
