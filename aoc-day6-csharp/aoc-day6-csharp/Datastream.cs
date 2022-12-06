namespace Datastream
{
    public static class Datastream
    {
        public static void Main()
        {
            string datastream = System.IO.File.ReadAllText(@"input.txt");

            Console.WriteLine($"Start of Marker: {GetStartOfMarker(datastream)}");
            Console.WriteLine($"Start of Message: {GetStartOfMessage(datastream)}");
        }

        private static int GetStartOfMarker(string datastream)
        {
            for (int charIndex = 0; charIndex < datastream.Length - 4; charIndex++)
            {
                if (datastream.Substring(charIndex, 4).Distinct().Count() == 4)
                {
                    return charIndex + 4;
                }
            }

            return 0;
        }

        private static int GetStartOfMessage(string datastream)
        {
            for (int charIndex = 0; charIndex < datastream.Length - 14; charIndex++)
            {
                if (datastream.Substring(charIndex, 14).Distinct().Count() == 14)
                {
                    return charIndex + 14;
                }
            }

            return 0;
        }
    }
}