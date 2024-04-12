const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playersController');

router.get('/:summonerName/:summonerTag', async (req, res) => {
    try {
      const { summonerName, summonerTag } = req.params;
      const decodedSummonerName = decodeURIComponent(summonerName);
      const decodedSummonerTag = decodeURIComponent(summonerTag);
      const playerInfo = await playerController.getPlayerInfo(decodedSummonerName, decodedSummonerTag);
      res.json(playerInfo);
      console.log(JSON.stringify(playerInfo));
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
module.exports = router;
