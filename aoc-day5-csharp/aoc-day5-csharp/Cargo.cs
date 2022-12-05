using System.Text.RegularExpressions;

namespace Cargo
{
    internal class Move
    {
        public int FromIndex { get; }
        public int ToIndex { get; }
        public int Quantity { get; }

        internal Move(int fromIndex, int toIndex, int quantity)
        {
            this.FromIndex = fromIndex;
            this.ToIndex = toIndex;
            this.Quantity = quantity;
        }

        internal static Move FromString(string commandsString)
        {
            int[] commands = Regex
                .Matches(commandsString, @"\d+")
                .Select(match =>
                    int.Parse(match.Value)
                )
                .ToArray();

            int quantity = commands[0];
            int fromIndex = commands[1] - 1;
            int toIndex = commands[2] - 1;

            return new Move(fromIndex, toIndex, quantity);
        }
    }

    internal class Ship
    {
        private readonly List<Stack<char>> Crates;

        internal Ship(List<Stack<char>> crates)
        {
            this.Crates = crates;
        }

        internal void MoveCrates(Move move)
        {
            for (int moveIndex = 0; moveIndex < move.Quantity; moveIndex++)
            {
                this.Crates[move.ToIndex].Push(this.Crates[move.FromIndex].Pop());
            }
        }
        internal void MoveCratesByBunch(Move move)
        {
            List<char> pickedUpCrates = new(move.Quantity);

            for (int moveIndex = 0; moveIndex < move.Quantity; moveIndex++)
            {
                pickedUpCrates.Add(this.Crates[move.FromIndex].Pop());
            }

            pickedUpCrates.Reverse();
            pickedUpCrates.ForEach(crate =>
                this.Crates[move.ToIndex].Push(crate)
            );
        }

        internal string GetCeiling()
        {
            return this.Crates
                .Select(crateStack =>
                    crateStack.TryPeek(out char crate) ?
                    crate.ToString() :
                    ""
                )
                .Aggregate(
                    (prevCrate, nextCrate) =>
                    prevCrate + nextCrate
                );
        }

        internal static Ship FromString(string cratesString)
        {
            List<Stack<char>> crates = cratesString
                .Split("\n\n")
                .First()
                .Split("\n")
                .Last()
                .Replace(" ", "")
                .Select(crateNumber =>
                    new Stack<char>()
                )
                .ToList();

            foreach (string row in cratesString.Split("\n\n").First().Split("\n").SkipLast(1).Reverse())
            {
                for (int crateIndex = 3; crateIndex < row.Length + 1; crateIndex += 4)
                {
                    if (row[crateIndex - 2] != ' ')
                    {
                        crates[crateIndex / 4].Push(row[crateIndex - 2]);
                    }
                }
            }

            return new Ship(crates);
        }

    }

    public static class Cargo
    {
        public static void Main()
        {
            string cargoData = System.IO.File.ReadAllText(@"input.txt");

            // Part A
            Ship oldShip = Ship.FromString(cargoData);
            cargoData
                .Split("\n\n")[1]
                .Split("\n")
                .ToList()
                .ForEach(commands =>
                   oldShip.MoveCrates(Move.FromString(commands))
                );

            Console.WriteLine(oldShip.GetCeiling());

            // Part B
            Ship newShip = Ship.FromString(cargoData);
            cargoData
                .Split("\n\n")[1]
                .Split("\n")
                .ToList()
                .ForEach(commands =>
                   newShip.MoveCratesByBunch(Move.FromString(commands))
                );

            Console.WriteLine(newShip.GetCeiling());
        }
    }
}


