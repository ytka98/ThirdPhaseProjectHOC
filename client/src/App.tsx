import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import GameList from './Components/UI/GameList';
// import { GameType } fro m './types/game';
import AddForm from './Components/UI/AddForm';
import { useGamesDispatch } from './HOCs/games/gameContext';
import useGames from './CastomHooks/useGame';

function App(): JSX.Element {
  // const { games, addGameHandler, deleteGameHandler  } = useGames()
  const dispatch = useGamesDispatch();
  const { initialLoadGames } = useGames(dispatch);
  useEffect(() => {
    void initialLoadGames();
  });
  return (
    <Container>
      <AddForm /* addGameHandler={addGameHandler} */ />
      <Row className="justify-content-center m-3">
        <Col xs={10}>
          <GameList /* games={games} deleteGameHandler={deleteGameHandler} */ />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
