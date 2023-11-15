import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap/esm/index';
import { useGamesDispatch } from '../../HOCs/games/gameContext';
// import { AddGameHandlerType, DeleteHandlerType } from '../../types/handlers';
import type { AddGameFormType } from '../../types/game';
import useGames from '../../CastomHooks/useGame';

// type GameAddProps = {
//   addGameHandler: AddGameHandlerType ;
// };

export default function AddForm(/* { addGameHandler }: GameAddProps */): JSX.Element {
  const dispatch = useGamesDispatch();
  const { addGameHandler } = useGames(dispatch);
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.currentTarget)) as AddGameFormType;
        void addGameHandler(formData);
        e.currentTarget.reset();
      }}
    >
      <InputGroup className="mb-3">
        <InputGroup.Text>Title</InputGroup.Text>
        <Form.Control type="text" name="title" placeholder="Enter title" />
      </InputGroup>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
