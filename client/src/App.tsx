import React, { useEffect, useState } from 'react'; // Импорт необходимых зависимостей из React
import Col from 'react-bootstrap/esm/Col'; // Импорт компонента Col из React Bootstrap
import Container from 'react-bootstrap/esm/Container'; // Импорт компонента Container из React Bootstrap
import Row from 'react-bootstrap/esm/Row'; // Импорт компонента Row из React Bootstrap
import GameList from './Components/UI/GameList'; // Импорт компонента GameList
import AddForm from './Components/UI/AddForm'; // Импорт компонента AddForm
import { useGamesDispatch } from './HOCs/games/gameContext'; // Импорт useGamesDispatch из контекста games
import useGames from './CastomHooks/useGame'; // Импорт useGames из пользовательского хука useGame

function App(): JSX.Element { // Объявление компонента App
  const dispatch = useGamesDispatch(); // Использование useGamesDispatch для получения диспетчера
  const { initialLoadGames } = useGames(dispatch); // Получение функции initialLoadGames из пользовательского хука useGames
  useEffect(() => {
    void initialLoadGames(); // Вызов initialLoadGames внутри useEffect
  });
  return (
    <Container>
      <AddForm  />
      <Row className="justify-content-center m-3">
        <Col xs={10}>
          <GameList  />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
