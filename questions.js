const questions = [

    // =========================
    // JAVA BASICS
    // =========================

    {
        id: 1,
        number: 1,
        topic: "Java Basics",
        difficulty: "Easy",
        title: "Print Hello Java",
        statement: "Write a Java program that prints Hello Java.",
        explanation: "Use System.out.println() to display text on the console.",
        input: "No input.",
        output: "Print Hello Java.",
        sampleInput: "",
        sampleOutput: "Hello Java",
        constraints: "No constraints.",
        hint: "Use System.out.println()."
    },

    {
        id: 2,
        number: 2,
        topic: "Java Basics",
        difficulty: "Easy",
        title: "Print Your Name",
        statement: "Write a Java program that prints your name.",
        explanation: "A string can be printed directly using System.out.println().",
        input: "No input.",
        output: "Print your name.",
        sampleInput: "",
        sampleOutput: "Your Name",
        constraints: "No constraints.",
        hint: "Print a string."
    },

    {
        id: 3,
        number: 3,
        topic: "Java Basics",
        difficulty: "Easy",
        title: "Print Multiple Lines",
        statement: "Write a Java program that prints three different messages on three separate lines.",
        explanation: "Multiple println statements can be used to print multiple lines.",
        input: "No input.",
        output: "Print three lines.",
        sampleInput: "",
        sampleOutput: "Welcome\nTo\nJava",
        constraints: "Exactly three lines.",
        hint: "Use println three times."
    },

    // =========================
    // VARIABLES & DATA TYPES
    // =========================

    {
        id: 4,
        number: 4,
        topic: "Variables & Data Types",
        difficulty: "Easy",
        title: "Store and Print Integer",
        statement: "Read an integer and print it.",
        explanation: "Use an int variable to store the number.",
        input: "One integer N.",
        output: "Print N.",
        sampleInput: "25",
        sampleOutput: "25",
        constraints: "-1000000 ≤ N ≤ 1000000",
        hint: "Use int."
    },

    {
        id: 5,
        number: 5,
        topic: "Variables & Data Types",
        difficulty: "Easy",
        title: "Store a Decimal Number",
        statement: "Read a decimal number and print it.",
        explanation: "Use double to store decimal values.",
        input: "One decimal number.",
        output: "Print the number.",
        sampleInput: "12.5",
        sampleOutput: "12.5",
        constraints: "The value is a valid decimal number.",
        hint: "Use double."
    },

    {
        id: 6,
        number: 6,
        topic: "Variables & Data Types",
        difficulty: "Easy",
        title: "Swap Two Numbers",
        statement: "Read two integers and swap their values.",
        explanation: "A temporary variable can be used to exchange two values.",
        input: "Two integers A and B.",
        output: "Print the swapped values.",
        sampleInput: "10 20",
        sampleOutput: "20 10",
        constraints: "-1000000 ≤ A, B ≤ 1000000",
        hint: "Use a temporary variable."
    },

    // =========================
    // OPERATORS
    // =========================

    {
        id: 7,
        number: 7,
        topic: "Operators",
        difficulty: "Easy",
        title: "Add Two Numbers",
        statement: "Read two integers and print their sum.",
        explanation: "Use the + arithmetic operator.",
        input: "Two integers A and B.",
        output: "Print A + B.",
        sampleInput: "5 7",
        sampleOutput: "12",
        constraints: "-1000000 ≤ A, B ≤ 1000000",
        hint: "Use +."
    },

    {
        id: 8,
        number: 8,
        topic: "Operators",
        difficulty: "Easy",
        title: "Calculate Difference",
        statement: "Read two integers and print the difference A - B.",
        explanation: "Use the subtraction operator.",
        input: "Two integers A and B.",
        output: "Print A - B.",
        sampleInput: "20 8",
        sampleOutput: "12",
        constraints: "-1000000 ≤ A, B ≤ 1000000",
        hint: "Use -."
    },

    {
        id: 9,
        number: 9,
        topic: "Operators",
        difficulty: "Easy",
        title: "Multiply Two Numbers",
        statement: "Read two integers and print their product.",
        explanation: "Use the multiplication operator *.",
        input: "Two integers A and B.",
        output: "Print A × B.",
        sampleInput: "6 7",
        sampleOutput: "42",
        constraints: "-100000 ≤ A, B ≤ 100000",
        hint: "Use *."
    },

    {
        id: 10,
        number: 10,
        topic: "Operators",
        difficulty: "Easy",
        title: "Find Remainder",
        statement: "Read two integers and print the remainder when the first is divided by the second.",
        explanation: "The modulus operator % returns the remainder.",
        input: "Two integers A and B.",
        output: "Print A % B.",
        sampleInput: "17 5",
        sampleOutput: "2",
        constraints: "B ≠ 0",
        hint: "Use %."
    },

    // =========================
    // INPUT & OUTPUT
    // =========================

    {
        id: 11,
        number: 11,
        topic: "Input & Output",
        difficulty: "Easy",
        title: "Read and Print Two Numbers",
        statement: "Read two integers and print them in the same order.",
        explanation: "Scanner can be used to read multiple values.",
        input: "Two integers.",
        output: "Print both integers.",
        sampleInput: "4 9",
        sampleOutput: "4 9",
        constraints: "-1000000 ≤ A, B ≤ 1000000",
        hint: "Use Scanner."
    },

    {
        id: 12,
        number: 12,
        topic: "Input & Output",
        difficulty: "Easy",
        title: "Read a Word",
        statement: "Read one word and print it.",
        explanation: "Scanner.next() reads a single word.",
        input: "One word.",
        output: "Print the word.",
        sampleInput: "Java",
        sampleOutput: "Java",
        constraints: "The word contains only letters.",
        hint: "Use next()."
    },

    {
        id: 13,
        number: 13,
        topic: "Input & Output",
        difficulty: "Easy",
        title: "Read a Full Name",
        statement: "Read a full name and print it.",
        explanation: "nextLine() can read an entire line including spaces.",
        input: "One line containing a name.",
        output: "Print the name.",
        sampleInput: "John Smith",
        sampleOutput: "John Smith",
        constraints: "The name contains letters and spaces.",
        hint: "Use nextLine()."
    },

    // =========================
    // IF / ELSE
    // =========================

    {
        id: 14,
        number: 14,
        topic: "If / Else",
        difficulty: "Easy",
        title: "Even or Odd",
        statement: "Read an integer and determine whether it is even or odd.",
        explanation: "A number is even when its remainder after division by 2 is zero.",
        input: "One integer N.",
        output: "Print Even or Odd.",
        sampleInput: "8",
        sampleOutput: "Even",
        constraints: "-1000000000 ≤ N ≤ 1000000000",
        hint: "Check N % 2."
    },

    {
        id: 15,
        number: 15,
        topic: "If / Else",
        difficulty: "Easy",
        title: "Positive, Negative or Zero",
        statement: "Determine whether a number is positive, negative, or zero.",
        explanation: "Compare the number with zero using if, else if and else.",
        input: "One integer N.",
        output: "Print Positive, Negative, or Zero.",
        sampleInput: "-5",
        sampleOutput: "Negative",
        constraints: "-1000000000 ≤ N ≤ 1000000000",
        hint: "Compare N with 0."
    },

    {
        id: 16,
        number: 16,
        topic: "If / Else",
        difficulty: "Easy",
        title: "Find Larger Number",
        statement: "Read two integers and print the larger number.",
        explanation: "Use an if statement to compare the two values.",
        input: "Two integers A and B.",
        output: "Print the larger value.",
        sampleInput: "12 7",
        sampleOutput: "12",
        constraints: "-1000000 ≤ A, B ≤ 1000000",
        hint: "Compare A and B."
    },

    {
        id: 17,
        number: 17,
        topic: "If / Else",
        difficulty: "Easy",
        title: "Check Voting Eligibility",
        statement: "Given a person's age, determine whether they are eligible to vote. A person aged 18 or above is eligible.",
        explanation: "Use a comparison with 18.",
        input: "One integer age.",
        output: "Print Eligible or Not Eligible.",
        sampleInput: "20",
        sampleOutput: "Eligible",
        constraints: "0 ≤ age ≤ 150",
        hint: "Check age >= 18."
    },

    {
        id: 18,
        number: 18,
        topic: "If / Else",
        difficulty: "Medium",
        title: "Check Leap Year",
        statement: "Determine whether a given year is a leap year.",
        explanation: "A year is a leap year if it is divisible by 400, or divisible by 4 but not by 100.",
        input: "One year.",
        output: "Print Leap Year or Not Leap Year.",
        sampleInput: "2024",
        sampleOutput: "Leap Year",
        constraints: "1 ≤ year ≤ 100000",
        hint: "Use % 400, % 100 and % 4."
    },

    // =========================
    // SWITCH
    // =========================

    {
        id: 19,
        number: 19,
        topic: "Switch",
        difficulty: "Easy",
        title: "Day of the Week",
        statement: "Given a number from 1 to 7, print the corresponding day of the week.",
        explanation: "A switch statement can map each number to a day.",
        input: "An integer from 1 to 7.",
        output: "Print the corresponding day.",
        sampleInput: "2",
        sampleOutput: "Tuesday",
        constraints: "1 ≤ N ≤ 7",
        hint: "Use switch cases."
    },

    {
        id: 20,
        number: 20,
        topic: "Switch",
        difficulty: "Easy",
        title: "Simple Calculator",
        statement: "Read two numbers and an operator (+, -, *, /) and perform the operation.",
        explanation: "Use switch to select the operation.",
        input: "Two numbers followed by an operator.",
        output: "Print the result.",
        sampleInput: "10 5 +",
        sampleOutput: "15",
        constraints: "Division by zero will not occur.",
        hint: "Switch on the operator."
    },

    {
        id: 21,
        number: 21,
        topic: "Switch",
        difficulty: "Easy",
        title: "Month Name",
        statement: "Given a month number from 1 to 12, print its name.",
        explanation: "Switch can map month numbers to names.",
        input: "One integer from 1 to 12.",
        output: "Print the month name.",
        sampleInput: "8",
        sampleOutput: "August",
        constraints: "1 ≤ month ≤ 12",
        hint: "Create 12 switch cases."
    },

    // =========================
    // LOOPS
    // =========================

    {
        id: 22,
        number: 22,
        topic: "Loops",
        difficulty: "Easy",
        title: "Print 1 to N",
        statement: "Read N and print all numbers from 1 to N.",
        explanation: "A for loop can repeatedly print numbers.",
        input: "One integer N.",
        output: "Print numbers from 1 to N.",
        sampleInput: "5",
        sampleOutput: "1 2 3 4 5",
        constraints: "1 ≤ N ≤ 10000",
        hint: "Use a for loop."
    },

    {
        id: 23,
        number: 23,
        topic: "Loops",
        difficulty: "Easy",
        title: "Print N to 1",
        statement: "Read N and print numbers from N down to 1.",
        explanation: "A loop can be initialized at N and decremented.",
        input: "One integer N.",
        output: "Print N down to 1.",
        sampleInput: "5",
        sampleOutput: "5 4 3 2 1",
        constraints: "1 ≤ N ≤ 10000",
        hint: "Decrease the loop variable."
    },

    {
        id: 24,
        number: 24,
        topic: "Loops",
        difficulty: "Easy",
        title: "Sum of 1 to N",
        statement: "Read N and calculate the sum of all integers from 1 to N.",
        explanation: "Use a loop and keep adding each number to a sum variable.",
        input: "One integer N.",
        output: "Print the sum.",
        sampleInput: "5",
        sampleOutput: "15",
        constraints: "1 ≤ N ≤ 100000",
        hint: "Maintain a sum variable."
    },

    {
        id: 25,
        number: 25,
        topic: "Loops",
        difficulty: "Easy",
        title: "Multiplication Table",
        statement: "Read N and print its multiplication table from 1 to 10.",
        explanation: "Use a loop from 1 through 10.",
        input: "One integer N.",
        output: "Print N multiplied by 1 through 10.",
        sampleInput: "5",
        sampleOutput: "5\n10\n15\n20\n25\n30\n35\n40\n45\n50",
        constraints: "-1000 ≤ N ≤ 1000",
        hint: "Loop from 1 to 10."
    },

    // =========================
    // PATTERNS
    // =========================

    {
        id: 26,
        number: 26,
        topic: "Patterns",
        difficulty: "Easy",
        title: "Star Triangle",
        statement: "Given N, print a right triangle made of stars.",
        explanation: "Use nested loops. The number of stars increases with each row.",
        input: "One integer N.",
        output: "Print the pattern.",
        sampleInput: "4",
        sampleOutput: "*\n**\n***\n****",
        constraints: "1 ≤ N ≤ 50",
        hint: "Use one loop for rows and one for stars."
    },

    {
        id: 27,
        number: 27,
        topic: "Patterns",
        difficulty: "Easy",
        title: "Number Triangle",
        statement: "Print a triangle where row i contains numbers from 1 to i.",
        explanation: "Nested loops can generate the rows and columns.",
        input: "One integer N.",
        output: "Print the number triangle.",
        sampleInput: "4",
        sampleOutput: "1\n12\n123\n1234",
        constraints: "1 ≤ N ≤ 50",
        hint: "Inner loop runs from 1 to the row number."
    },

    {
        id: 28,
        number: 28,
        topic: "Patterns",
        difficulty: "Medium",
        title: "Inverted Star Triangle",
        statement: "Print an inverted right triangle of stars.",
        explanation: "Start with N stars and decrease the number of stars each row.",
        input: "One integer N.",
        output: "Print the inverted pattern.",
        sampleInput: "4",
        sampleOutput: "****\n***\n**\n*",
        constraints: "1 ≤ N ≤ 50",
        hint: "Decrease the inner loop limit."
    },

    // =========================
    // METHODS
    // =========================

    {
        id: 29,
        number: 29,
        topic: "Methods",
        difficulty: "Easy",
        title: "Create an Add Method",
        statement: "Create a method that accepts two integers and returns their sum.",
        explanation: "Methods allow reusable blocks of code.",
        input: "Two integers.",
        output: "Print their sum using the method.",
        sampleInput: "4 6",
        sampleOutput: "10",
        constraints: "-1000000 ≤ A, B ≤ 1000000",
        hint: "Create int add(int a, int b)."
    },

    {
        id: 30,
        number: 30,
        topic: "Methods",
        difficulty: "Easy",
        title: "Check Even Using Method",
        statement: "Create a method that returns true if a number is even.",
        explanation: "A boolean-returning method can perform the check.",
        input: "One integer.",
        output: "Print true or false.",
        sampleInput: "8",
        sampleOutput: "true",
        constraints: "-1000000000 ≤ N ≤ 1000000000",
        hint: "Return n % 2 == 0."
    },

    {
        id: 31,
        number: 31,
        topic: "Methods",
        difficulty: "Medium",
        title: "Find Maximum Using Method",
        statement: "Create a method that returns the larger of two integers.",
        explanation: "Pass both values to a method and return the larger one.",
        input: "Two integers.",
        output: "Print the maximum.",
        sampleInput: "15 9",
        sampleOutput: "15",
        constraints: "-1000000 ≤ A, B ≤ 1000000",
        hint: "Use an if condition inside the method."
    },

    // =========================
    // ARRAYS
    // =========================

    {
        id: 32,
        number: 32,
        topic: "Arrays",
        difficulty: "Easy",
        title: "Print Array Elements",
        statement: "Read N integers into an array and print them.",
        explanation: "Use an array and loop through its elements.",
        input: "N followed by N integers.",
        output: "Print all elements.",
        sampleInput: "5\n1 2 3 4 5",
        sampleOutput: "1 2 3 4 5",
        constraints: "1 ≤ N ≤ 1000",
        hint: "Use a for loop."
    },

    {
        id: 33,
        number: 33,
        topic: "Arrays",
        difficulty: "Easy",
        title: "Find Array Sum",
        statement: "Calculate the sum of all elements in an array.",
        explanation: "Initialize sum to zero and add each element.",
        input: "N followed by N integers.",
        output: "Print the sum.",
        sampleInput: "4\n2 4 6 8",
        sampleOutput: "20",
        constraints: "1 ≤ N ≤ 1000",
        hint: "Maintain a running sum."
    },

    {
        id: 34,
        number: 34,
        topic: "Arrays",
        difficulty: "Easy",
        title: "Find Maximum in Array",
        statement: "Find the largest element in an integer array.",
        explanation: "Keep track of the largest value while traversing the array.",
        input: "N followed by N integers.",
        output: "Print the maximum.",
        sampleInput: "5\n3 9 2 7 4",
        sampleOutput: "9",
        constraints: "1 ≤ N ≤ 1000",
        hint: "Compare each element with the current maximum."
    },

    {
        id: 35,
        number: 35,
        topic: "Arrays",
        difficulty: "Medium",
        title: "Reverse an Array",
        statement: "Read an array and print its elements in reverse order.",
        explanation: "Traverse the array from the last index to the first.",
        input: "N followed by N integers.",
        output: "Print the reversed array.",
        sampleInput: "5\n1 2 3 4 5",
        sampleOutput: "5 4 3 2 1",
        constraints: "1 ≤ N ≤ 1000",
        hint: "Start from index N - 1."
    },

    // =========================
    // 2D ARRAYS
    // =========================

    {
        id: 36,
        number: 36,
        topic: "2D Arrays",
        difficulty: "Easy",
        title: "Print Matrix",
        statement: "Read a matrix and print all its elements.",
        explanation: "Use nested loops to access rows and columns.",
        input: "Rows, columns, followed by matrix values.",
        output: "Print the matrix.",
        sampleInput: "2 2\n1 2\n3 4",
        sampleOutput: "1 2\n3 4",
        constraints: "1 ≤ rows, columns ≤ 50",
        hint: "Use two loops."
    },

    {
        id: 37,
        number: 37,
        topic: "2D Arrays",
        difficulty: "Easy",
        title: "Matrix Sum",
        statement: "Find the sum of all elements in a matrix.",
        explanation: "Traverse every cell and add its value.",
        input: "Rows, columns and matrix values.",
        output: "Print the total sum.",
        sampleInput: "2 2\n1 2\n3 4",
        sampleOutput: "10",
        constraints: "1 ≤ rows, columns ≤ 50",
        hint: "Use nested loops."
    },

    {
        id: 38,
        number: 38,
        topic: "2D Arrays",
        difficulty: "Medium",
        title: "Main Diagonal Sum",
        statement: "Find the sum of the main diagonal of a square matrix.",
        explanation: "For the main diagonal, row index and column index are equal.",
        input: "N followed by an N × N matrix.",
        output: "Print the diagonal sum.",
        sampleInput: "3\n1 2 3\n4 5 6\n7 8 9",
        sampleOutput: "15",
        constraints: "1 ≤ N ≤ 50",
        hint: "Use matrix[i][i]."
    },

    // =========================
    // STRINGS
    // =========================

    {
        id: 39,
        number: 39,
        topic: "Strings",
        difficulty: "Easy",
        title: "Find String Length",
        statement: "Read a string and print its length.",
        explanation: "String.length() returns the number of characters.",
        input: "One line of text.",
        output: "Print the length.",
        sampleInput: "Hello",
        sampleOutput: "5",
        constraints: "The string contains at most 1000 characters.",
        hint: "Use length()."
    },

    {
        id: 40,
        number: 40,
        topic: "Strings",
        difficulty: "Easy",
        title: "Reverse a String",
        statement: "Read a string and print it in reverse.",
        explanation: "Traverse characters from the last position to the first.",
        input: "One string.",
        output: "Print the reversed string.",
        sampleInput: "Java",
        sampleOutput: "avaJ",
        constraints: "Length ≤ 1000",
        hint: "Start from length - 1."
    },

    {
        id: 41,
        number: 41,
        topic: "Strings",
        difficulty: "Easy",
        title: "Count Vowels",
        statement: "Count the number of vowels in a string.",
        explanation: "Check each character against a, e, i, o and u.",
        input: "One string.",
        output: "Print the number of vowels.",
        sampleInput: "education",
        sampleOutput: "5",
        constraints: "Length ≤ 1000",
        hint: "Check both uppercase and lowercase if needed."
    },

    {
        id: 42,
        number: 42,
        topic: "Strings",
        difficulty: "Medium",
        title: "Palindrome String",
        statement: "Determine whether a string reads the same forward and backward.",
        explanation: "Compare characters from both ends.",
        input: "One string.",
        output: "Print Palindrome or Not Palindrome.",
        sampleInput: "madam",
        sampleOutput: "Palindrome",
        constraints: "Length ≤ 1000",
        hint: "Compare the string with its reverse."
    },

    // =========================
    // STRINGBUILDER
    // =========================

    {
        id: 43,
        number: 43,
        topic: "StringBuilder",
        difficulty: "Easy",
        title: "Reverse Using StringBuilder",
        statement: "Read a string and reverse it using StringBuilder.",
        explanation: "StringBuilder provides a convenient reverse() method.",
        input: "One string.",
        output: "Print the reversed string.",
        sampleInput: "Hello",
        sampleOutput: "olleH",
        constraints: "Length ≤ 1000",
        hint: "Use new StringBuilder(s).reverse()."
    },

    {
        id: 44,
        number: 44,
        topic: "StringBuilder",
        difficulty: "Easy",
        title: "Append Strings",
        statement: "Read two words and join them using StringBuilder.",
        explanation: "append() adds text to the StringBuilder.",
        input: "Two words.",
        output: "Print the combined words.",
        sampleInput: "Hello World",
        sampleOutput: "HelloWorld",
        constraints: "Each word contains letters.",
        hint: "Use append()."
    },

    // =========================
    // RECURSION
    // =========================

    {
        id: 45,
        number: 45,
        topic: "Recursion",
        difficulty: "Easy",
        title: "Recursive Countdown",
        statement: "Use recursion to print numbers from N down to 1.",
        explanation: "A recursive function calls itself with a smaller value.",
        input: "One integer N.",
        output: "Print N down to 1.",
        sampleInput: "5",
        sampleOutput: "5 4 3 2 1",
        constraints: "1 ≤ N ≤ 100",
        hint: "Base case: N == 0."
    },

    {
        id: 46,
        number: 46,
        topic: "Recursion",
        difficulty: "Medium",
        title: "Recursive Factorial",
        statement: "Calculate N! using recursion.",
        explanation: "N! = N × (N-1)! and 0! = 1.",
        input: "One integer N.",
        output: "Print N factorial.",
        sampleInput: "5",
        sampleOutput: "120",
        constraints: "0 ≤ N ≤ 20",
        hint: "factorial(n) = n * factorial(n-1)."
    },

    {
        id: 47,
        number: 47,
        topic: "Recursion",
        difficulty: "Medium",
        title: "Recursive Fibonacci",
        statement: "Find the Nth Fibonacci number using recursion.",
        explanation: "F(n) = F(n-1) + F(n-2), with F(0)=0 and F(1)=1.",
        input: "One integer N.",
        output: "Print the Nth Fibonacci number.",
        sampleInput: "7",
        sampleOutput: "13",
        constraints: "0 ≤ N ≤ 30",
        hint: "Use two base cases."
    },

    // =========================
    // OOP
    // =========================

    {
        id: 48,
        number: 48,
        topic: "OOP",
        difficulty: "Easy",
        title: "Create a Student Class",
        statement: "Create a Student class with a name and age and print their values.",
        explanation: "Classes allow related data and behavior to be grouped together.",
        input: "A name and age.",
        output: "Print both values.",
        sampleInput: "Alice 20",
        sampleOutput: "Alice 20",
        constraints: "Age is positive.",
        hint: "Create a Student object."
    },

    {
        id: 49,
        number: 49,
        topic: "OOP",
        difficulty: "Easy",
        title: "Create a Car Object",
        statement: "Create a Car class with a brand field and print the brand.",
        explanation: "Objects are instances of classes.",
        input: "One brand name.",
        output: "Print the brand.",
        sampleInput: "Toyota",
        sampleOutput: "Toyota",
        constraints: "Brand contains letters.",
        hint: "Create a Car object."
    },

    // =========================
    // CLASSES & OBJECTS
    // =========================

    {
        id: 50,
        number: 50,
        topic: "Classes & Objects",
        difficulty: "Easy",
        title: "Rectangle Area",
        statement: "Create a Rectangle class with length and width and calculate its area.",
        explanation: "An object can store dimensions and provide a method for area.",
        input: "Length and width.",
        output: "Print the area.",
        sampleInput: "5 4",
        sampleOutput: "20",
        constraints: "1 ≤ length, width ≤ 10000",
        hint: "area = length * width."
    },

    // =========================
    // CONSTRUCTORS
    // =========================

    {
        id: 51,
        number: 51,
        topic: "Constructors",
        difficulty: "Easy",
        title: "Student Constructor",
        statement: "Create a Student class whose constructor initializes name and age.",
        explanation: "A constructor runs when an object is created.",
        input: "Name and age.",
        output: "Print the initialized values.",
        sampleInput: "Rahul 21",
        sampleOutput: "Rahul 21",
        constraints: "Age is positive.",
        hint: "Create a constructor with two parameters."
    },

    {
        id: 52,
        number: 52,
        topic: "Constructors",
        difficulty: "Medium",
        title: "Parameterized Rectangle",
        statement: "Use a parameterized constructor to initialize a rectangle and calculate its area.",
        explanation: "Parameterized constructors receive values when an object is created.",
        input: "Length and width.",
        output: "Print area.",
        sampleInput: "8 3",
        sampleOutput: "24",
        constraints: "Dimensions are positive.",
        hint: "Initialize fields inside the constructor."
    },

    // =========================
    // ENCAPSULATION
    // =========================

    {
        id: 53,
        number: 53,
        topic: "Encapsulation",
        difficulty: "Medium",
        title: "Private Student Data",
        statement: "Create a Student class with private name and age fields and public getters and setters.",
        explanation: "Encapsulation protects fields by controlling access through methods.",
        input: "Name and age.",
        output: "Print values using getters.",
        sampleInput: "Sam 19",
        sampleOutput: "Sam 19",
        constraints: "Age is positive.",
        hint: "Make fields private."
    },

    {
        id: 54,
        number: 54,
        topic: "Encapsulation",
        difficulty: "Medium",
        title: "Bank Account Balance",
        statement: "Create a BankAccount class with a private balance and methods to deposit and get the balance.",
        explanation: "Private fields can be modified through controlled methods.",
        input: "Initial balance and deposit amount.",
        output: "Print final balance.",
        sampleInput: "1000 500",
        sampleOutput: "1500",
        constraints: "Amounts are non-negative.",
        hint: "Use a private balance field."
    },

    // =========================
    // INHERITANCE
    // =========================

    {
        id: 55,
        number: 55,
        topic: "Inheritance",
        difficulty: "Easy",
        title: "Animal and Dog",
        statement: "Create an Animal class and extend it with a Dog class.",
        explanation: "Inheritance allows a child class to reuse properties and methods of a parent class.",
        input: "No input.",
        output: "Print a message from the inherited structure.",
        sampleInput: "",
        sampleOutput: "Dog is an Animal",
        constraints: "Use inheritance.",
        hint: "Use extends."
    },

    {
        id: 56,
        number: 56,
        topic: "Inheritance",
        difficulty: "Medium",
        title: "Employee Manager",
        statement: "Create an Employee class and derive a Manager class from it.",
        explanation: "Manager inherits common employee information.",
        input: "Employee name and manager department.",
        output: "Print both pieces of information.",
        sampleInput: "Alex IT",
        sampleOutput: "Alex IT",
        constraints: "Use extends.",
        hint: "Manager should extend Employee."
    },

    // =========================
    // POLYMORPHISM
    // =========================

    {
        id: 57,
        number: 57,
        topic: "Polymorphism",
        difficulty: "Medium",
        title: "Method Overloading",
        statement: "Create overloaded methods to add two integers and three integers.",
        explanation: "Method overloading means multiple methods have the same name but different parameter lists.",
        input: "Three integers.",
        output: "Print the sum using the appropriate overloaded method.",
        sampleInput: "2 3 4",
        sampleOutput: "9",
        constraints: "Integers are valid.",
        hint: "Create two add() methods."
    },

    {
        id: 58,
        number: 58,
        topic: "Polymorphism",
        difficulty: "Medium",
        title: "Method Overriding",
        statement: "Create a parent Animal class and override a sound() method in a Dog class.",
        explanation: "Method overriding lets a child class provide its own implementation.",
        input: "No input.",
        output: "Print the Dog sound.",
        sampleInput: "",
        sampleOutput: "Bark",
        constraints: "Use method overriding.",
        hint: "Use @Override."
    },

    // =========================
    // ABSTRACTION
    // =========================

    {
        id: 59,
        number: 59,
        topic: "Abstraction",
        difficulty: "Medium",
        title: "Abstract Shape",
        statement: "Create an abstract Shape class with an abstract area() method and implement it for Circle.",
        explanation: "Abstract classes can define methods that subclasses must implement.",
        input: "Radius.",
        output: "Print the circle area.",
        sampleInput: "2",
        sampleOutput: "12.56",
        constraints: "Radius > 0",
        hint: "Use abstract."
    },

    {
        id: 60,
        number: 60,
        topic: "Abstraction",
        difficulty: "Medium",
        title: "Abstract Vehicle",
        statement: "Create an abstract Vehicle class with a start() method and implement it in Car.",
        explanation: "Abstraction hides implementation details and exposes required behavior.",
        input: "No input.",
        output: "Print a car start message.",
        sampleInput: "",
        sampleOutput: "Car Started",
        constraints: "Use an abstract class.",
        hint: "Implement the abstract method."
    },

    // =========================
    // INTERFACES
    // =========================

    {
        id: 61,
        number: 61,
        topic: "Interfaces",
        difficulty: "Easy",
        title: "Printable Interface",
        statement: "Create a Printable interface and implement it in a Document class.",
        explanation: "Interfaces define behavior that implementing classes must provide.",
        input: "No input.",
        output: "Print a document message.",
        sampleInput: "",
        sampleOutput: "Printing Document",
        constraints: "Use an interface.",
        hint: "Use implements."
    },

    {
        id: 62,
        number: 62,
        topic: "Interfaces",
        difficulty: "Medium",
        title: "Calculator Interface",
        statement: "Create a Calculator interface with an add method and implement it.",
        explanation: "A class implements the methods declared by an interface.",
        input: "Two integers.",
        output: "Print their sum.",
        sampleInput: "5 8",
        sampleOutput: "13",
        constraints: "Use an interface.",
        hint: "Declare add() inside the interface."
    },

    // =========================
    // EXCEPTION HANDLING
    // =========================

    {
        id: 63,
        number: 63,
        topic: "Exception Handling",
        difficulty: "Easy",
        title: "Handle Division by Zero",
        statement: "Read two integers and safely perform division using try-catch.",
        explanation: "ArithmeticException can occur when dividing by zero.",
        input: "Two integers.",
        output: "Print the result or an error message.",
        sampleInput: "10 0",
        sampleOutput: "Cannot divide by zero",
        constraints: "The divisor may be zero.",
        hint: "Catch ArithmeticException."
    },

    {
        id: 64,
        number: 64,
        topic: "Exception Handling",
        difficulty: "Medium",
        title: "Handle Invalid Array Index",
        statement: "Attempt to access an array index and handle an invalid index using try-catch.",
        explanation: "ArrayIndexOutOfBoundsException occurs when an invalid index is accessed.",
        input: "An array and an index.",
        output: "Print the value or an error message.",
        sampleInput: "3\n10 20 30\n5",
        sampleOutput: "Invalid index",
        constraints: "Index may be invalid.",
        hint: "Catch ArrayIndexOutOfBoundsException."
    },

    // =========================
    // COLLECTIONS
    // =========================

    {
        id: 65,
        number: 65,
        topic: "Collections",
        difficulty: "Easy",
        title: "Store Numbers in a Collection",
        statement: "Read numbers and store them in a Java collection, then print them.",
        explanation: "Collections provide flexible data structures for storing objects.",
        input: "N followed by N integers.",
        output: "Print the numbers.",
        sampleInput: "4\n2 4 6 8",
        sampleOutput: "2 4 6 8",
        constraints: "1 ≤ N ≤ 1000",
        hint: "Use ArrayList."
    },

    // =========================
    // LIST / ARRAYLIST / LINKEDLIST
    // =========================

    {
        id: 66,
        number: 66,
        topic: "List / ArrayList / LinkedList",
        difficulty: "Easy",
        title: "ArrayList Add and Remove",
        statement: "Create an ArrayList, add numbers, remove one number, and print the result.",
        explanation: "ArrayList supports dynamic insertion and removal.",
        input: "A list of integers.",
        output: "Print the modified list.",
        sampleInput: "4\n10 20 30 40\n30",
        sampleOutput: "10 20 40",
        constraints: "The removed value exists.",
        hint: "Use remove()."
    },

    {
        id: 67,
        number: 67,
        topic: "List / ArrayList / LinkedList",
        difficulty: "Medium",
        title: "LinkedList Queue",
        statement: "Use a LinkedList to add three values and remove the first value.",
        explanation: "LinkedList can be used to implement queue-like behavior.",
        input: "Three integers.",
        output: "Print the remaining values.",
        sampleInput: "10 20 30",
        sampleOutput: "20 30",
        constraints: "Three values are given.",
        hint: "Use removeFirst()."
    },

    // =========================
    // SET / HASHSET
    // =========================

    {
        id: 68,
        number: 68,
        topic: "Set / HashSet",
        difficulty: "Easy",
        title: "Remove Duplicates",
        statement: "Read integers and use a HashSet to remove duplicate values.",
        explanation: "A Set stores unique elements.",
        input: "N followed by N integers.",
        output: "Print the number of unique values.",
        sampleInput: "6\n1 2 2 3 3 3",
        sampleOutput: "3",
        constraints: "1 ≤ N ≤ 10000",
        hint: "Add every value to a HashSet."
    },

    {
        id: 69,
        number: 69,
        topic: "Set / HashSet",
        difficulty: "Medium",
        title: "Check Duplicate",
        statement: "Determine whether an array contains any duplicate values using HashSet.",
        explanation: "If a value is already present in the set, it is a duplicate.",
        input: "N followed by N integers.",
        output: "Print Duplicate or Unique.",
        sampleInput: "5\n1 2 3 2 5",
        sampleOutput: "Duplicate",
        constraints: "1 ≤ N ≤ 10000",
        hint: "Check contains() before add()."
    },

    // =========================
    // MAP / HASHMAP
    // =========================

    {
        id: 70,
        number: 70,
        topic: "Map / HashMap",
        difficulty: "Easy",
        title: "Store Student Marks",
        statement: "Use a HashMap to store a student's name and marks and print the marks.",
        explanation: "HashMap stores key-value pairs.",
        input: "Name and marks.",
        output: "Print the marks.",
        sampleInput: "Alice 95",
        sampleOutput: "95",
        constraints: "Marks are between 0 and 100.",
        hint: "Use put() and get()."
    },

    {
        id: 71,
        number: 71,
        topic: "Map / HashMap",
        difficulty: "Medium",
        title: "Character Frequency",
        statement: "Count the frequency of each character in a string using HashMap.",
        explanation: "A character can be used as a key and its count as the value.",
        input: "One string.",
        output: "Print character frequencies.",
        sampleInput: "aabbc",
        sampleOutput: "a=2 b=2 c=1",
        constraints: "String length ≤ 1000.",
        hint: "Update the count for every character."
    },

    // =========================
    // STACK / QUEUE
    // =========================

    {
        id: 72,
        number: 72,
        topic: "Stack / Queue",
        difficulty: "Easy",
        title: "Stack Push and Pop",
        statement: "Push three integers into a stack and pop the top element.",
        explanation: "A stack follows Last In, First Out.",
        input: "Three integers.",
        output: "Print the popped value.",
        sampleInput: "10 20 30",
        sampleOutput: "30",
        constraints: "Three values are provided.",
        hint: "Use Stack<Integer>."
    },

    {
        id: 73,
        number: 73,
        topic: "Stack / Queue",
        difficulty: "Easy",
        title: "Queue Add and Remove",
        statement: "Add three integers to a queue and remove the first element.",
        explanation: "A queue follows First In, First Out.",
        input: "Three integers.",
        output: "Print the removed value.",
        sampleInput: "10 20 30",
        sampleOutput: "10",
        constraints: "Three values are provided.",
        hint: "Use Queue and poll()."
    },

    // =========================
    // GENERICS
    // =========================

    {
        id: 74,
        number: 74,
        topic: "Generics",
        difficulty: "Medium",
        title: "Generic Box",
        statement: "Create a generic Box<T> class that stores and returns a value.",
        explanation: "Generics allow classes and methods to work with different types safely.",
        input: "One integer.",
        output: "Print the stored integer.",
        sampleInput: "42",
        sampleOutput: "42",
        constraints: "Use a generic class.",
        hint: "Create Box<T>."
    },

    {
        id: 75,
        number: 75,
        topic: "Generics",
        difficulty: "Medium",
        title: "Generic Pair",
        statement: "Create a generic Pair class that stores two values of potentially different types.",
        explanation: "Multiple generic parameters can be used in a class.",
        input: "A name and age.",
        output: "Print both values.",
        sampleInput: "Alice 20",
        sampleOutput: "Alice 20",
        constraints: "Use Pair<T, U>.",
        hint: "Use two type parameters."
    },

    // =========================
    // FILE HANDLING
    // =========================

    {
        id: 76,
        number: 76,
        topic: "File Handling",
        difficulty: "Medium",
        title: "Write Text to a File",
        statement: "Write a given line of text into a file named output.txt.",
        explanation: "Java provides FileWriter and other classes for writing files.",
        input: "One line of text.",
        output: "Create output.txt containing the text.",
        sampleInput: "Hello Java",
        sampleOutput: "File created",
        constraints: "The program has permission to create the file.",
        hint: "Use FileWriter."
    },

    {
        id: 77,
        number: 77,
        topic: "File Handling",
        difficulty: "Medium",
        title: "Read Text from a File",
        statement: "Read and print the contents of a text file.",
        explanation: "BufferedReader can read text efficiently.",
        input: "A file containing text.",
        output: "Print the file contents.",
        sampleInput: "Hello Java",
        sampleOutput: "Hello Java",
        constraints: "The file exists.",
        hint: "Use BufferedReader."
    },

    // =========================
    // MULTITHREADING
    // =========================

    {
        id: 78,
        number: 78,
        topic: "Multithreading",
        difficulty: "Medium",
        title: "Create a Thread",
        statement: "Create a thread that prints Hello from Thread.",
        explanation: "A thread can be created by extending Thread or implementing Runnable.",
        input: "No input.",
        output: "Print the thread message.",
        sampleInput: "",
        sampleOutput: "Hello from Thread",
        constraints: "Use Java Thread.",
        hint: "Override run()."
    },

    {
        id: 79,
        number: 79,
        topic: "Multithreading",
        difficulty: "Medium",
        title: "Runnable Example",
        statement: "Create a Runnable task that prints numbers from 1 to 5.",
        explanation: "Runnable represents a task that can be executed by a thread.",
        input: "No input.",
        output: "Print 1 through 5.",
        sampleInput: "",
        sampleOutput: "1 2 3 4 5",
        constraints: "Use Runnable.",
        hint: "Implement Runnable."
    },

    // =========================
    // JAVA SWING
    // =========================

    {
        id: 80,
        number: 80,
        topic: "Java Swing",
        difficulty: "Medium",
        title: "Create a Swing Window",
        statement: "Create a basic Swing window with the title Java Application.",
        explanation: "JFrame is commonly used to create a Swing window.",
        input: "No input.",
        output: "Create the window.",
        sampleInput: "",
        sampleOutput: "Window created",
        constraints: "Use JFrame.",
        hint: "Create and configure a JFrame."
    },

    {
        id: 81,
        number: 81,
        topic: "Java Swing",
        difficulty: "Medium",
        title: "Swing Button",
        statement: "Create a Swing window containing a button labeled Click Me.",
        explanation: "JButton can be added to a JFrame.",
        input: "No input.",
        output: "Create the GUI.",
        sampleInput: "",
        sampleOutput: "Button created",
        constraints: "Use JFrame and JButton.",
        hint: "Add JButton to the frame."
    },

    // =========================
    // JDBC
    // =========================

    {
        id: 82,
        number: 82,
        topic: "JDBC",
        difficulty: "Hard",
        title: "JDBC Connection Structure",
        statement: "Write the basic Java structure required to establish a JDBC database connection.",
        explanation: "JDBC allows Java applications to communicate with relational databases.",
        input: "Database connection information.",
        output: "Print Connection Successful when the connection works.",
        sampleInput: "",
        sampleOutput: "Connection Successful",
        constraints: "A JDBC driver and database are required.",
        hint: "Use DriverManager.getConnection()."
    },

    {
        id: 83,
        number: 83,
        topic: "JDBC",
        difficulty: "Hard",
        title: "Execute a JDBC Query",
        statement: "Write Java code that creates a Statement and executes a SELECT query.",
        explanation: "Statement and ResultSet are commonly used to execute and process SQL queries.",
        input: "Database connection.",
        output: "Print retrieved rows.",
        sampleInput: "",
        sampleOutput: "Query executed",
        constraints: "A database must be available.",
        hint: "Use executeQuery()."
    },

    // =========================
    // ADVANCED JAVA
    // =========================

    {
        id: 84,
        number: 84,
        topic: "Advanced Java",
        difficulty: "Hard",
        title: "Lambda Expression",
        statement: "Use a lambda expression to print a greeting.",
        explanation: "Lambda expressions provide a concise way to represent functional interfaces.",
        input: "No input.",
        output: "Print Hello Lambda.",
        sampleInput: "",
        sampleOutput: "Hello Lambda",
        constraints: "Use a lambda expression.",
        hint: "Use a functional interface."
    },

    {
        id: 85,
        number: 85,
        topic: "Advanced Java",
        difficulty: "Hard",
        title: "Stream Filter",
        statement: "Use the Java Stream API to filter even numbers from a list.",
        explanation: "Streams can process collections using operations such as filter().",
        input: "N followed by N integers.",
        output: "Print the even numbers.",
        sampleInput: "5\n1 2 3 4 5",
        sampleOutput: "2 4",
        constraints: "1 ≤ N ≤ 1000",
        hint: "Use stream().filter()."
    },

    // =========================
    // EXTRA QUESTIONS
    // =========================

    {
        id: 86,
        number: 86,
        topic: "Java Basics",
        difficulty: "Easy",
        title: "Calculate Simple Interest",
        statement: "Calculate simple interest using principal, rate and time.",
        explanation: "Simple interest = P × R × T / 100.",
        input: "P, R and T.",
        output: "Print the simple interest.",
        sampleInput: "1000 5 2",
        sampleOutput: "100",
        constraints: "Values are non-negative.",
        hint: "Apply the formula."
    },

    {
        id: 87,
        number: 87,
        topic: "Operators",
        difficulty: "Easy",
        title: "Calculate Average",
        statement: "Read three integers and print their average.",
        explanation: "Add the numbers and divide by three.",
        input: "Three integers.",
        output: "Print the average.",
        sampleInput: "10 20 30",
        sampleOutput: "20.0",
        constraints: "Integers are valid.",
        hint: "Use double for the result."
    },

    {
        id: 88,
        number: 88,
        topic: "Loops",
        difficulty: "Medium",
        title: "Count Digits",
        statement: "Count the number of digits in an integer.",
        explanation: "Repeatedly divide the number by 10 until it becomes zero.",
        input: "One integer.",
        output: "Print the number of digits.",
        sampleInput: "12345",
        sampleOutput: "5",
        constraints: "N is a valid integer.",
        hint: "Use division by 10."
    },

    {
        id: 89,
        number: 89,
        topic: "Loops",
        difficulty: "Medium",
        title: "Reverse a Number",
        statement: "Reverse the digits of an integer.",
        explanation: "Extract the last digit using % 10 and build the reversed number.",
        input: "One integer.",
        output: "Print the reversed number.",
        sampleInput: "1234",
        sampleOutput: "4321",
        constraints: "N is a valid integer.",
        hint: "Use % 10 and / 10."
    },

    {
        id: 90,
        number: 90,
        topic: "Loops",
        difficulty: "Medium",
        title: "Palindrome Number",
        statement: "Determine whether an integer is a palindrome.",
        explanation: "Reverse the number and compare it with the original.",
        input: "One integer.",
        output: "Print Palindrome or Not Palindrome.",
        sampleInput: "121",
        sampleOutput: "Palindrome",
        constraints: "N ≥ 0",
        hint: "Compare original and reversed values."
    },

    {
        id: 91,
        number: 91,
        topic: "Arrays",
        difficulty: "Medium",
        title: "Second Largest Element",
        statement: "Find the second largest distinct element in an array.",
        explanation: "Track the largest and second largest values while traversing the array.",
        input: "N followed by N integers.",
        output: "Print the second largest value.",
        sampleInput: "5\n10 5 8 20 15",
        sampleOutput: "15",
        constraints: "At least two distinct values exist.",
        hint: "Maintain two variables."
    },

    {
        id: 92,
        number: 92,
        topic: "Strings",
        difficulty: "Medium",
        title: "Count Words",
        statement: "Count the number of words in a sentence.",
        explanation: "Words can be separated using whitespace.",
        input: "One sentence.",
        output: "Print the word count.",
        sampleInput: "Java is powerful",
        sampleOutput: "3",
        constraints: "The sentence contains valid words.",
        hint: "Use split() or Scanner."
    },

    {
        id: 93,
        number: 93,
        topic: "Strings",
        difficulty: "Medium",
        title: "Remove Spaces",
        statement: "Read a string and remove all spaces from it.",
        explanation: "Replace spaces with an empty string.",
        input: "One line.",
        output: "Print the string without spaces.",
        sampleInput: "Java Programming",
        sampleOutput: "JavaProgramming",
        constraints: "Length ≤ 1000.",
        hint: "Use replace()."
    },

    {
        id: 94,
        number: 94,
        topic: "2D Arrays",
        difficulty: "Medium",
        title: "Transpose a Matrix",
        statement: "Print the transpose of a matrix.",
        explanation: "The transpose changes rows into columns.",
        input: "Rows, columns and matrix values.",
        output: "Print the transposed matrix.",
        sampleInput: "2 3\n1 2 3\n4 5 6",
        sampleOutput: "1 4\n2 5\n3 6",
        constraints: "1 ≤ rows, columns ≤ 50",
        hint: "Print matrix[j][i]."
    },

    {
        id: 95,
        number: 95,
        topic: "Collections",
        difficulty: "Medium",
        title: "Sort a List",
        statement: "Read integers into a list and sort them in ascending order.",
        explanation: "Collections.sort() can sort a List.",
        input: "N followed by N integers.",
        output: "Print the sorted list.",
        sampleInput: "5\n5 2 4 1 3",
        sampleOutput: "1 2 3 4 5",
        constraints: "1 ≤ N ≤ 10000",
        hint: "Use Collections.sort()."
    },

    {
        id: 96,
        number: 96,
        topic: "Map / HashMap",
        difficulty: "Medium",
        title: "Find Most Frequent Character",
        statement: "Find the character that appears most frequently in a string.",
        explanation: "Use a HashMap to count each character and track the largest frequency.",
        input: "One string.",
        output: "Print the most frequent character.",
        sampleInput: "banana",
        sampleOutput: "a",
        constraints: "Length ≤ 1000.",
        hint: "Count frequencies first."
    },

    {
        id: 97,
        number: 97,
        topic: "Stack / Queue",
        difficulty: "Medium",
        title: "Balanced Parentheses",
        statement: "Determine whether a string containing parentheses is balanced.",
        explanation: "A stack can keep track of opening parentheses.",
        input: "A string containing parentheses.",
        output: "Print Balanced or Not Balanced.",
        sampleInput: "(())",
        sampleOutput: "Balanced",
        constraints: "Length ≤ 10000.",
        hint: "Push '(' and pop when ')' appears."
    },

    {
        id: 98,
        number: 98,
        topic: "Generics",
        difficulty: "Medium",
        title: "Generic Maximum",
        statement: "Create a generic method that returns the larger of two comparable values.",
        explanation: "Bounded generics can restrict T to Comparable types.",
        input: "Two integers.",
        output: "Print the larger value.",
        sampleInput: "15 20",
        sampleOutput: "20",
        constraints: "Values are comparable.",
        hint: "Use <T extends Comparable<T>>."
    },

    {
        id: 99,
        number: 99,
        topic: "Multithreading",
        difficulty: "Hard",
        title: "Two Threads",
        statement: "Create two threads where each thread prints its own message.",
        explanation: "Multiple threads can execute independently.",
        input: "No input.",
        output: "Print messages from both threads.",
        sampleInput: "",
        sampleOutput: "Thread 1\nThread 2",
        constraints: "Use Thread or Runnable.",
        hint: "Create two Thread objects."
    },

    {
        id: 100,
        number: 100,
        topic: "Advanced Java",
        difficulty: "Hard",
        title: "Stream Find Maximum",
        statement: "Use the Java Stream API to find the maximum number in a list.",
        explanation: "Stream max() can be used to find the largest value.",
        input: "N followed by N integers.",
        output: "Print the maximum value.",
        sampleInput: "5\n4 9 2 7 6",
        sampleOutput: "9",
        constraints: "1 ≤ N ≤ 10000",
        hint: "Use stream().max()."
    }
];