//RGAPI-b4147815-084d-4df8-bd4f-3b36624d13c6
const fetch = require('node-fetch').default;


// exports.getPlayerInfo = async (req, res) => {
//     try {
//       const { summonerName } = req.params;
//       const response = await fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=RGAPI-d2dc0867-bda6-4de7-9c88-04f4659de811`);
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
      const url = `https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${summonerName}/${summonerTag}?api_key=RGAPI-b4147815-084d-4df8-bd4f-3b36624d13c6`
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
  
  
