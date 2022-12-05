// See https://aka.ms/new-console-template for more information

Console.WriteLine(Rucksack.getCommonItemScore(System.IO.File.ReadAllText(@"C:\Users\Ponas Amungas\source\repos\Advent of Code\Advent of Code - Day 1\Advent of Code - Day 1\input.txt")));

public class Rucksack
{
    public static int getDuplicatesScore(string RucksackData)
    {
        return RucksackData.Split("\n").Select(rucksack =>
        {
            char[] firstHalf = rucksack.Substring(0, (rucksack.Length / 2)).ToCharArray();
            char[] secondHalf = rucksack.Substring((rucksack.Length / 2), (rucksack.Length / 2)).ToCharArray();
            char duplicateItem = firstHalf.Intersect(secondHalf).First();

            if (char.IsUpper(duplicateItem))
            {
                return (int)duplicateItem - 'A' + 27;
            }

            if (char.IsLower(duplicateItem))
            {
                return (int)duplicateItem - 'a' + 1;
            }

            return 0;
        }).Sum();
    }

    public static int getCommonItemScore(string RucksackData)
    {
        string[] rucksacks = RucksackData.Split("\n");
        int score = 0;

        for (int rucksackIndex = 0; rucksackIndex < rucksacks.Length; rucksackIndex += 3)
        {
            char[] firstRucksack = rucksacks[rucksackIndex].ToCharArray();
            char[] secondRucksack = rucksacks[rucksackIndex + 1].ToCharArray();
            char[] thirdRucksack = rucksacks[rucksackIndex + 2].ToCharArray();
            char commonItem = firstRucksack.Intersect(secondRucksack).Intersect(thirdRucksack).First();

            if (char.IsUpper(commonItem))
            {
                score += commonItem - 'A' + 27;
            }

            if (char.IsLower(commonItem))
            {
                score += commonItem - 'a' + 1;
            }
        }

        return score;
    }
}