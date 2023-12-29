function generateUniqueId() {
        return Math.floor(Math.random() * 1000000) + 1;
      }

      let players = [];
module.exports = {
    createPlayer(req, res) {
      const { name, country, score } = req.body;
      const id = generateUniqueId();
      const player = { id, name, country, score };
      players.push(player);
      res.json(player);
    },
    updatePlayer(req, res) {
      const { id } = req.params;
      const { name, score } = req.body;
      const player = players.find((p) => p.id == id);
  
      if (!player) {
          return res.status(404).json({ error: 'Player not found' });
      }
  
      player.name = name;
      player.score = score;
  
      res.json(player);
    },
    deletePlayer(req, res) {
      const { id } = req.params;
      const index = players.findIndex((p) => p.id == id);
  
      if (index === -1) {
          return res.status(404).json({ error: 'Player not found' });
      }
  
      const deletedPlayer = players.splice(index, 1)[0];
      res.json(deletedPlayer);
    },
    getAllPlayers(req, res) {
      const sortedPlayers = players.sort((a, b) => b.score - a.score);
      res.json(sortedPlayers);
    },
    getRankedPlayer(req, res) {
      const { val } = req.params;
      const rank = parseInt(val, 10);
      if (isNaN(rank) || rank <= 0 || rank > players.length) {
          return res.status(400).json({ error: 'Invalid rank value' });
      }
  
      const player = players[rank - 1];
      if (!player) {
          return res.status(404).json({ error: 'Player not found' });
      }
  
      res.json(player);
    },
    getRandomPlayer(req, res) {
      if (players.length === 0) {
          return res.status(404).json({ error: 'No players available' });
      }
  
      const randomIndex = Math.floor(Math.random() * players.length);
      const randomPlayer = players[randomIndex];
      res.json(randomPlayer);
    },
  };
  