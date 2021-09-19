import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaPaperPlane } from "react-icons/fa";

import {
  Container,
  Div,
  Form,
  Input,
  Submit,
} from "@styles/components/Selection";

import { setPlayersName } from "@store/actions/game";

const Selection = () => {
  const dispatch = useDispatch();

  const [x, setX] = useState("");
  const [o, setO] = useState("");

  const handlePlayerX = (e): void => {
    setX(e.target.value);
  };

  const handlePlayerO = (e): void => {
    setO(e.target.value);
  };

  const submitNames = (e) => {
    e.preventDefault();
    if (x?.length > 0 && o?.length > 0) {
      dispatch(setPlayersName({ X: x, O: o }));
    }
  };

  return (
    <Container>
      <Form onSubmit={submitNames}>
        <Div>
          <Input
            placeholder="Player X Name"
            value={x}
            onChange={(e) => handlePlayerX(e)}
          />
          <Input
            placeholder="Player O Name"
            value={o}
            onChange={(e) => handlePlayerO(e)}
          />
        </Div>
        <Submit type="submit">
          <FaPaperPlane />
        </Submit>
      </Form>
    </Container>
  );
};

export default Selection;
