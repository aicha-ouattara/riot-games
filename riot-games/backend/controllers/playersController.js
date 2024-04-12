
const fetch = require('node-fetch').default;


// exports.getPlayerInfo = async (req, res) => {
//     try {
//       const { summonerName } = req.params;
//       const response = await fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=Your API KEY`);
//       if (!response.ok) {
//         throw new Error('Player not found');
//       }
//       const data = await response.json();
//       res.json(data);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   };
  


exports.getPlayerInfo = async (summonerName, summonerTag) => {
    try {
      const url = `https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${summonerName}/${summonerTag}?api_key=Your apikey`
      console.log(`Sending request to api riot games ${url}`);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Player not found');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Internal server error');
    }
  };
  
  
