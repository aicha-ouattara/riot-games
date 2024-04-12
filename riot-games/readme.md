# STACK : Node js / Express /javascript / html


# Configurer le backend :

Créez un nouveau dossier nommé riot-games-app.
Allez dans ce dossier et créez un sous-dossier backend.
À l'intérieur du dossier backend, créez un fichier package.json en exécutant :

# npm init -y.
Installez les dépendances nécessaires en exécutant npm install .
Créez les dossiers controllers et routes à l'intérieur du dossier backend.
Dans le dossier backend, créez un fichier app.js.



# Configurer le frontend :

À la racine du dossier riot-games, créez un sous-dossier frontend.
À l'intérieur du dossier frontend, créez un fichier index.html et un fichier app.js.


# PROCESSUS


# 1. 
Lorsque l'utilisateur ouvre la page `index.html` dans son navigateur, le code HTML, CSS et JavaScript sont chargés et exécutés.

# 2. 
Le code JavaScript dans `app.js` écoute l'événement `submit` du formulaire de recherche de joueur. Lorsque l'utilisateur soumet le formulaire, la fonction `handleFormSubmit()` est appelée.

# 3. 
Dans la fonction `handleFormSubmit()`, le code récupère les valeurs des champs `summoner-name-input` et `summoner-tag-input` du formulaire. Ensuite, il encode les valeurs à l'aide de la fonction `encodeURIComponent()` pour les rendre sûres à utiliser dans une URL.


# 4. 
Le code envoie ensuite une requête `fetch()` à l'API Riot en utilisant l'URL `/api/players/${encodedSummonerName}/${encodedSummonerTag}`. Cette URL est une URL relative qui est résolue par rapport à l'URL de base de votre serveur backend.


# 5. 
Lorsque votre serveur backend reçoit la requête, il appelle la fonction `getPlayerInfo()` dans `playerController.js` pour récupérer les informations du joueur à partir de l'API Riot.


# 6.
Dans la fonction `getPlayerInfo()`, le code construit l'URL complète de l'API Riot en utilisant les valeurs encodées du nom et du tag du joueur. Ensuite, il envoie une requête `fetch()` à l'API Riot en utilisant l'URL complète.

# 7. 
Lorsque l'API Riot renvoie les informations du joueur, le code dans `getPlayerInfo()` les renvoie à la route `/api/players/:summonerName/:summonerTag` dans `playerRoutes.js`.


# 8.
 Dans la route `/api/players/:summonerName/:summonerTag`, le code renvoie les informations du joueur au client en utilisant la méthode `res.json()`.


# 9.
 Lorsque le client reçoit les informations du joueur, le code dans `handleFormSubmit()` les affiche dans la section `player-info` de la page `index.html`.

# START THE PROJECT

D'abord ...
# npm install

Dans Le dossier backend demarrer le server :
# node app.js

Dans le dossier frontend :
# http-server

 
