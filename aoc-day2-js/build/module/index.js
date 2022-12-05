// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const getGameData = () => {
    return fs.readFileSync('./resources/input.txt', 'utf8');
};

const getMyScore = (gameData) => {
    return gameData
        .split('\n')
        .map(getRoundScore)
        .reduce((totalScore, score) => totalScore + score, 0);
};

// const getRoundScore = (choices) => {
//     const winBonus = 6
//     const drawBonus = 3
//     const rockScore = 1
//     const paperScore = 2
//     const scissorsScore = 3

//     const [opponentPick, myPick] = choices.split(' ');

//     switch (myPick) {
//         // Rock
//         case 'X':
//             switch (opponentPick) {
//                 // Rock
//                 case 'A':
//                     return rockScore + drawBonus;
//                 // Paper
//                 case 'B':
//                     return rockScore;
//                 // Scissors
//                 case 'C':
//                     return rockScore + winBonus;
//             }

//             break;
//         // Paper
//         case 'Y':
//             switch (opponentPick) {
//                 // Rock
//                 case 'A':
//                     return paperScore + winBonus;
//                 // Paper
//                 case 'B':
//                     return paperScore + drawBonus;
//                 // Scissors
//                 case 'C':
//                     return paperScore;
//             }

//             break;
//         // Scissors
//         case 'Z':
//             switch (opponentPick) {
//                 // Rock
//                 case 'A':
//                     return scissorsScore;
//                 // Paper
//                 case 'B':
//                     return scissorsScore + winBonus;
//                 // Scissors
//                 case 'C':
//                     return scissorsScore + drawBonus;
//             }
//     }

//     return 0;
// };

const getRoundScore = (choices) => {
    const winBonus = 6
    const drawBonus = 3
    const rockScore = 1
    const paperScore = 2
    const scissorsScore = 3

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

console.log(getMyScore(getGameData()));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOERBQThEO0FBQzlELE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUV6QixNQUFNLFdBQVcsR0FBRyxHQUFHLEVBQUU7SUFDdkIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLHVCQUF1QixFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzFELENBQUMsQ0FBQztBQUVGLE1BQU0sWUFBWSxHQUFHLENBQUMsUUFBZ0IsRUFBRSxFQUFFO0lBQ3hDLE9BQU8sUUFBUTtTQUNaLEtBQUssQ0FBQyxJQUFJLENBQUM7U0FDWCxHQUFHLENBQUMsVUFBVSxDQUFDO1NBQ2YsTUFBTSxDQUFDLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsVUFBVSxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMxRCxDQUFDLENBQUM7QUFFRixNQUFNLFVBQVUsR0FBRyxDQUFDLE9BQWUsRUFBRSxFQUFFO0lBQ3JDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVsRCxRQUFRLE1BQU0sRUFBRTtRQUNkLE9BQU87UUFDUCxLQUFLLEdBQUc7WUFDTixRQUFRLFlBQVksRUFBRTtnQkFDcEIsT0FBTztnQkFDUCxLQUFLLEdBQUc7b0JBQ04sT0FBTyxDQUFDLENBQUM7Z0JBQ1gsUUFBUTtnQkFDUixLQUFLLEdBQUc7b0JBQ04sT0FBTyxDQUFDLENBQUM7YUFDWjtZQUVELE1BQU07UUFDUixRQUFRO1FBQ1IsS0FBSyxHQUFHO1lBQ04sUUFBUSxZQUFZLEVBQUU7Z0JBQ3BCLFFBQVE7Z0JBQ1IsS0FBSyxHQUFHO29CQUNOLE9BQU8sQ0FBQyxDQUFDO2dCQUNYLFdBQVc7Z0JBQ1gsS0FBSyxHQUFHO29CQUNOLE9BQU8sQ0FBQyxDQUFDO2FBQ1o7WUFFRCxNQUFNO1FBQ1IsV0FBVztRQUNYLEtBQUssR0FBRztZQUNOLFFBQVEsWUFBWSxFQUFFO2dCQUNwQixXQUFXO2dCQUNYLEtBQUssR0FBRztvQkFDTixPQUFPLENBQUMsQ0FBQztnQkFDWCxPQUFPO2dCQUNQLEtBQUssR0FBRztvQkFDTixPQUFPLENBQUMsQ0FBQzthQUNaO0tBQ0o7SUFFRCxPQUFPLENBQUMsQ0FBQztBQUNYLENBQUMsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMifQ==