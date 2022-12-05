// See https://aka.ms/new-console-template for more information
Console.WriteLine(Assignments.getAnyOverlappingAssignmentCount(System.IO.File.ReadAllText(@"input.txt")));

class Task
{
    private int start;
    private int end;

    public Task(int start, int end)
    {
        this.start = start;
        this.end = end;
    }

    public bool containsSome(Task other)
    {
        return this.start <= other.start && this.end >= other.end ||
            this.end >= other.end && this.start <= other.start;
    }

    public bool containsAll(Task other)
    {
        return this.start <= other.start && this.end >= other.end;
    }
}

class TaskPair
{
    private Task left;
    private Task right;

    public TaskPair(Task left, Task right)
    {
        this.left = left;
        this.right = right;
    }

    public bool containsSomeOfOther()
    {
        return this.left.containsSome(this.right) ||
            this.right.containsSome(this.left);
    }

    public bool containsAllOfOther()
    {
        return this.left.containsAll(this.right) ||
            this.right.containsAll(this.left);
    }

    public static TaskPair fromString(string taskPairString)
    {
        return new TaskPair(
            new Task(int.Parse(taskPairString.Split(",")[0].Split("-")[0]), int.Parse(taskPairString.Split(",")[0].Split("-")[1])),
            new Task(int.Parse(taskPairString.Split(",")[1].Split("-")[0]), int.Parse(taskPairString.Split(",")[1].Split("-")[1]))
        );
    }
}

public class Assignments
{
    public static int getOverlappingAssignmentCount(string assignmentData)
    {
        return assignmentData
            .Split("\n")
            .Select(taskPairString => TaskPair.fromString(taskPairString))
            .Where(taskPair => taskPair.containsSomeOfOther())
            .Count();
    }

    public static int getAnyOverlappingAssignmentCount(string assignmentData)
    {
        return assignmentData
            .Split("\n")
            .Select(taskPairString => TaskPair.fromString(taskPairString))
            .Where(taskPair => taskPair.containsAllOfOther())
            .Count();
    }
}