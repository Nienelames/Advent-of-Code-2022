// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const getGameData = () => {
    return fs.readFileSync('./resources/input.txt', 'utf8');
};

const getMyScore = (
    gameData: string,
    getRoundScore: (choices: string) => number
) => {
    return gameData
        .split('\n')
        .map(getRoundScore)
        .reduce((totalScore, score) => totalScore + score, 0);
};

const getRoundScoreA = (choices: string) => {
    const winBonus = 6;
    const drawBonus = 3;
    const rockScore = 1;
    const paperScore = 2;
    const scissorsScore = 3;

    const [opponentPick, myPick] = choices.split(' ');

    switch (myPick) {
        // Rock
        case 'X':
            switch (opponentPick) {
                // Rock
                case 'A':
                    return rockScore + drawBonus;
                // Paper
                case 'B':
                    return rockScore;
                // Scissors
                case 'C':
                    return rockScore + winBonus;
            }

            break;
        // Paper
        case 'Y':
            switch (opponentPick) {
                // Rock
                case 'A':
                    return paperScore + winBonus;
                // Paper
                case 'B':
                    return paperScore + drawBonus;
                // Scissors
                case 'C':
                    return paperScore;
            }

            break;
        // Scissors
        case 'Z':
            switch (opponentPick) {
                // Rock
                case 'A':
                    return scissorsScore;
                // Paper
                case 'B':
                    return scissorsScore + winBonus;
                // Scissors
                case 'C':
                    return scissorsScore + drawBonus;
            }
    }

    return 0;
};

const getRoundScoreB = (choices: string) => {
    const winBonus = 6;
    const drawBonus = 3;
    const rockScore = 1;
    const paperScore = 2;
    const scissorsScore = 3;

    const [opponentPick, myPick] = choices.split(' ');

    switch (myPick) {
        // Lose
        case 'X':
            switch (opponentPick) {
                // Rock
                case 'A':
                    return scissorsScore;
                // Paper
                case 'B':
                    return rockScore;
                // Scissors
                case 'C':
                    return paperScore;
            }

            break;
        // Draw
        case 'Y':
            switch (opponentPick) {
                // Rock
                case 'A':
                    return rockScore + drawBonus;
                // Paper
                case 'B':
                    return paperScore + drawBonus;
                // Scissors
                case 'C':
                    return scissorsScore + drawBonus;
            }

            break;
        // Win
        case 'Z':
            switch (opponentPick) {
                // Rock
                case 'A':
                    return paperScore + winBonus;
                // Paper
                case 'B':
                    return scissorsScore + winBonus;
                // Scissors
                case 'C':
                    return rockScore + winBonus;
            }
    }

    return 0;
};

console.log(getMyScore(getGameData(), getRoundScoreA));
console.log(getMyScore(getGameData(), getRoundScoreB));
