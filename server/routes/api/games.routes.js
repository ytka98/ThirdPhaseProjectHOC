const router = require("express").Router();
const { Game } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const games = await Game.findAll();
    res.status(200).json(games);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

router.get("/:gameId", async (req, res) => {
  try {
    const { gameId } = req.params;
    const game = await Game.findOne({ where: { id: gameId } });
    res.status(200).json(game);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

router.delete("/:gameId", async (req, res) => {
  try {
    const { gameId } = req.params;
    const result = await Game.destroy({ where: { id: gameId } });
    if (result > 0) {
      res.status(200).json({ message: "success" });
      return;
    }
    throw new Error();
  } catch ({ message }) {
    res.status(400).json({ meassage });
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const { title } = req.body;
    const game = await Game.create({
      title,
    });
    res.status(201).json(game);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const game = await Game.update(
      {
        title,
      },
      { where: { id } }
    );
    const targetGame = await Game.findOne({ where: { id } });
    res.status(200).json(targetGame);
  } catch ({ message }) {
    res.status(400).json({ meassage });
  }
});

module.exports = router;
