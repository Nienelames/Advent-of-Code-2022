Console.WriteLine(CaloreiesCalculator.getMaxCalories(System.IO.File.ReadAllText(@"C:\Users\Ponas Amungas\Downloads\input.txt")));
Console.WriteLine(CaloreiesCalculator.getTopThreeMaxCalories(System.IO.File.ReadAllText(@"C:\Users\Ponas Amungas\Downloads\input.txt")));

public class CaloreiesCalculator
{
   public static int getMaxCalories(string caloriesData)
    {
        return caloriesData
            .Split("\n\n")
            .Select(row =>
                row.Split("\n")
                   .Select(calories => int.Parse(row))
                   .Sum()
            )
            .Max();
    }

    public static int getTopThreeMaxCalories(string caloriesData)
    {
        return caloriesData
            .Split("\n\n")
            .Select(row =>
                row.Split("\n")
                   .Select(calories => int.Parse(calories))
                   .Sum()
            )
            .OrderByDescending(i => i)
            .Take(3)
            .Sum();
    }
}
