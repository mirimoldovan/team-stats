const team = {
    _players: [{
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
    },
        {
        firstName: 'Simon',
        lastName: 'Bidwell',
        age: 27
    },
        {
        firstName: 'Ed',
        lastName: 'Brett',
        age: 25
    }],
    _games: [{
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
    },
        {
        opponent: 'LQC',
        teamPoints: 100,
        opponentPoints: 30
    },
        {
        opponent: 'Velociraptors QC',
        teamPoints: 70,
        opponentPoints: 50
    }],
    get players() {
        return this._players ;
    }, 
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        const player = {
            firstName,
            lastName,
            age
        }; 
        this._players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        const newGame = {
            opponent, 
            teamPoints, 
            opponentPoints
        };
        this._games.push(newGame);
    }
};
team.addPlayer("Steph", "Curry", "28");
team.addPlayer("Lisa", "Leslie", "44");
team.addPlayer("Bugs", "Bunny", "76");
console.log(team._players);

team.addGame('Nipomo', 96, 60);
team.addGame('Santa Maria', 89, 93);
team.addGame('Morro Bay', 112, 81);
console.log(team._games);