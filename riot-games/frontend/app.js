document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('player-search-form');
    const input = document.getElementById('summoner-name-input');
    const playerInfoContainer = document.getElementById('player-info');
  
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const summonerName = input.value.trim();
        if (summonerName === '') return;
      
        const summonerParts = summonerName.split('#');
        const summonerNamePart = summonerParts[0];
        const summonerTagPart = summonerParts[1];
      
        try {
          const response = await fetch(`http://localhost:5000/api/players/${encodeURIComponent(summonerNamePart)}/${encodeURIComponent(summonerTagPart)}`);
          if (!response.ok) {
            throw new Error('Player not found');
          }
          const data = await response.json();
          console.log(data);
          displayPlayerInfo(data);
        } catch (error) {
          console.error(error);
          playerInfoContainer.innerHTML = `<p>Error: ${error.message}</p>`;
        }
      });
      
      
  
    function displayPlayerInfo(playerData) {
      const playerInfoHTML = `
        <h2>Player Info</h2>
        <p>Summoner Name: ${playerData.gameName}</p>
        <p>Puuid: ${playerData.puuid}</p>
      `;
      playerInfoContainer.innerHTML = playerInfoHTML;
    }
  });
  
