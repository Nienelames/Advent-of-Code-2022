// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
const getGameData = () => {
    return fs.readFileSync('./resources/input.txt', 'utf8');
};
const getMyScore = (gameData, getRoundScore) => {
    return gameData
        .split('\n')
        .map(getRoundScore)
        .reduce((totalScore, score) => totalScore + score, 0);
};
const getRoundScoreA = (choices) => {
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
const getRoundScoreB = (choices) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOERBQThEO0FBQzlELE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUV6QixNQUFNLFdBQVcsR0FBRyxHQUFHLEVBQUU7SUFDckIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLHVCQUF1QixFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzVELENBQUMsQ0FBQztBQUVGLE1BQU0sVUFBVSxHQUFHLENBQ2YsUUFBZ0IsRUFDaEIsYUFBMEMsRUFDNUMsRUFBRTtJQUNBLE9BQU8sUUFBUTtTQUNWLEtBQUssQ0FBQyxJQUFJLENBQUM7U0FDWCxHQUFHLENBQUMsYUFBYSxDQUFDO1NBQ2xCLE1BQU0sQ0FBQyxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLFVBQVUsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDOUQsQ0FBQyxDQUFDO0FBRUYsTUFBTSxjQUFjLEdBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBRTtJQUN2QyxNQUFNLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDbkIsTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNwQixNQUFNLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDckIsTUFBTSxhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBRXhCLE1BQU0sQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVsRCxRQUFRLE1BQU0sRUFBRTtRQUNaLE9BQU87UUFDUCxLQUFLLEdBQUc7WUFDSixRQUFRLFlBQVksRUFBRTtnQkFDbEIsT0FBTztnQkFDUCxLQUFLLEdBQUc7b0JBQ0osT0FBTyxTQUFTLEdBQUcsU0FBUyxDQUFDO2dCQUNqQyxRQUFRO2dCQUNS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