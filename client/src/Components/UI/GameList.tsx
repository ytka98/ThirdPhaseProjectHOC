import React from 'react';
import Col from '../../../node_modules/react-bootstrap/esm/Col';
import Row from '../../../node_modules/react-bootstrap/esm/Row';
import { GameType } from '../../types/game';
import GameCart from './GameCart';
import { useGamesContext } from '../../HOCs/games/gameContext';
// import { DeleteHandlerType } from '../../types/handlers';

// type GameListProps = {
//   games: GameType[];
//   deleteGameHandler: DeleteHandlerType;
// };

export default function GameList(/*{ games , deleteGameHandler }: GameListProps*/): JSX.Element {
  const {games} = useGamesContext();
  return (
    <Row className="justify-content-center">
      {games.map((game) => (
        <Col xs={4} key={game.id}>
          <GameCart game={game}/* deleteGameHandler={deleteGameHandler}*/ />
        </Col>
      ))}
    </Row>
  );
}
