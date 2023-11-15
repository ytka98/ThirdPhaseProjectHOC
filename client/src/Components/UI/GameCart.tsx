import React, { useState } from 'react';
import { Button, Card, Form, InputGroup } from '../../../node_modules/react-bootstrap/esm/index';
import { AddGameFormType, GameType } from '../../types/game';
import { useGamesDispatch } from '../../HOCs/games/gameContext';
import useGames from '../../CastomHooks/useGame';
// import { DeleteHandlerType } from '../../types/handlers';

type GameCardProps = {
  game: GameType;
  // deleteGameHandler: DeleteHandlerType;
};

function GameCart({ game /*deleteGameHandler */ }: GameCardProps): JSX.Element {
  const dispatch = useGamesDispatch();
  const { deleteGameHandler, editGameHandler } = useGames(dispatch);
  const [isEditing, setEditing] = useState(false);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`http://localhost:3000/${game.image}`} />
      {isEditing ? (
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = Object.fromEntries(new FormData(e.currentTarget)) as AddGameFormType;
            editGameHandler(formData, game.id);
            setEditing(false);
            e.currentTarget.reset();
          }}
        >
          <InputGroup className="mb-3">
            <InputGroup.Text>Title</InputGroup.Text>
            <Form.Control
              type="text"
              name="title"
              placeholder="Enter title"
              defaultValue={game.title}
            />
          </InputGroup>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      ) : (
        <Card.Body>
          <Card.Title>{game.title}</Card.Title>
          <Card.Text>{game.description}</Card.Text>
          <Button
            onClick={() => {
              void deleteGameHandler(game.id);
            }}
            variant="danger"
          >
            Delete
          </Button>
          <Button
            onClick={() => {
              setEditing(true);
            }}
            variant="primary"
          >
            Edit
          </Button>
        </Card.Body>
      )}
    </Card>
  );
}

export default React.memo(GameCart);
