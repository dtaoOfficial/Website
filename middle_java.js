let questions = [
{
"question": "What is the primary difference between an ArrayList and a LinkedList in terms of performance for random access?",
"options": ["ArrayList is faster for random access", "LinkedList is faster for random access", "Both have similar performance for random access", "Neither supports random access"],
"answer": "ArrayList is faster for random access"
},
{
"question": "Which of the following is true about checked exceptions in Java?",
"options": ["They must be caught or declared in the method signature", "They are subclasses of RuntimeException", "They can be ignored by the compiler", "They only occur during runtime"],
"answer": "They must be caught or declared in the method signature"
},
{
"question": "What is the purpose of the volatile keyword in Java?",
"options": ["Ensures that a variable's value is always read from main memory and not from CPU cache", "Prevents a variable from being modified", "Makes a variable accessible from any thread", "Allows a variable to store different data types"],
"answer": "Ensures that a variable's value is always read from main memory and not from CPU cache"
},
{
"question": "Which of these is a correct way to ensure that a method is synchronized?",
"options": ["Using the synchronized keyword in the method signature", "Using the volatile keyword on the method", "Using the final keyword on the method", "Using the static keyword on the method"],
"answer": "Using the synchronized keyword in the method signature"
},
{
"question": "What is the effect of making a class's constructor private?",
"options": ["The class cannot be instantiated directly from outside the class", "The class can only be extended by other classes", "The class becomes a singleton", "The class cannot have any static members"],
"answer": "The class cannot be instantiated directly from outside the class"
},
{
"question": "How do you prevent a method from being overridden in a subclass?",
"options": ["Declare the method as final", "Declare the method as static", "Declare the method as private", "Declare the method as abstract"],
"answer": "Declare the method as final"
},
{
"question": "Which of the following is used to perform type casting in Java?",
"options": ["Explicitly specifying the target type in parentheses", "Using the convert keyword", "Using the cast method", "Using the changeType operator"],
"answer": "Explicitly specifying the target type in parentheses"
},
{
"question": "What is the purpose of a Set in Java Collections?",
"options": ["Stores unique elements and does not guarantee order", "Stores elements in insertion order and allows duplicates", "Stores key-value pairs", "Stores elements in sorted order"],
"answer": "Stores unique elements and does not guarantee order"
},
{
"question": "Which of these interfaces provides methods for iterating over a collection?",
"options": ["Iterator", "Collection", "List", "Map"],
"answer": "Iterator"
},
{
"question": "What is the function of the hashCode() method in Java?",
"options": ["Returns a hash code value for the object, used primarily in hash-based collections", "Compares two objects for equality", "Converts an object to a string representation", "Calculates the memory address of an object"],
"answer": "Returns a hash code value for the object, used primarily in hash-based collections"
},
{
"question": "When overriding the equals() method, which other method should also be overridden?",
"options": ["hashCode()", "toString()", "clone()", "finalize()"],
"answer": "hashCode()"
},
{
"question": "What is the purpose of the transient keyword in Java?",
"options": ["Marks a field to not be serialized when an object is written to a persistent storage", "Makes a field constant", "Makes a field accessible only within the same package", "Indicates that a field can be null"],
"answer": "Marks a field to not be serialized when an object is written to a persistent storage"
},
{
"question": "Which class is used to create threads in Java?",
"options": ["Thread", "Runnable", "Process", "Task"],
"answer": "Thread"
},
{
"question": "Which interface should be implemented to define the task that a thread will execute?",
"options": ["Runnable", "Callable", "Thread", "Executor"],
"answer": "Runnable"
},
{
"question": "What is a Daemon Thread in Java?",
"options": ["A thread that runs in the background and is automatically terminated when all non-daemon threads finish", "A thread that has higher priority than other threads", "A thread that can only be started by the JVM", "A thread that can never be stopped"],
"answer": "A thread that runs in the background and is automatically terminated when all non-daemon threads finish"
},
{
"question": "Which method is used to start a thread?",
"options": ["start()", "run()", "execute()", "begin()"],
"answer": "start()"
},
{
"question": "What is a  Deadlock in multi-threading?",
"options": ["A situation where two or more threads are blocked indefinitely, waiting for each other", "An error that occurs when a thread tries to access a non-existent resource", "A condition where a thread runs endlessly", "A problem related to thread priority"],
"answer": "A situation where two or more threads are blocked indefinitely, waiting for each other"
},
{
"question": "What is the purpose of wait(), notify(), and notifyAll() methods?",
"options": ["Inter-thread communication and synchronization", "Exception handling", "Object creation", "File I/O operations"],
"answer": "Inter-thread communication and synchronization"
},
{
"question": "Which of these is a way to achieve abstraction in Java?",
"options": ["Abstract classes and Interfaces", "Encapsulation and Inheritance", "Polymorphism and Method Overloading", "Constructors and Destructors"],
"answer": "Abstract classes and Interfaces"
},
{
"question": "Can an abstract class have a constructor?",
"options": ["Yes, it can have a constructor, but it cannot be instantiated directly", "No, abstract classes cannot have constructors", "Yes, but only a default constructor", "Yes, but only a private constructor"],
"answer": "Yes, it can have a constructor, but it cannot be instantiated directly"
},
{
"question": "What is a functional interface in Java 8?",
"options": ["An interface with exactly one abstract method", "An interface with no methods", "An interface with only default methods", "An interface with only static methods"],
"answer": "An interface with exactly one abstract method"
},
{
"question": "Which annotation is used to mark a functional interface?",
"options": ["@FunctionalInterface", "@Override", "@Deprecated", "@Interface"],
"answer": "@FunctionalInterface"
},
{
"question": "What is the primary benefit of using try-with-resources in Java 7 and later?",
"options": ["Automatically closes resources (like files, streams) after use", "Allows multiple catch blocks for the same exception", "Improves performance of exception handling", "Enables chained exceptions"],
"answer": "Automatically closes resources (like files, streams) after use"
},
{
"question": "Which of the following is true about generics in Java?",
"options": ["They provide type safety at compile time and eliminate the need for explicit casting", "They are only used for collections", "They reduce the performance of the application", "They are a feature of Java 5 but are no longer recommended"],
"answer": "They provide type safety at compile time and eliminate the need for explicit casting"
},
{
"question": "What is a Checked Exception?",
"options": ["An exception that the compiler forces you to handle (catch or declare)", "An exception that indicates a programming error", "An exception that occurs only during I/O operations", "An exception that is always thrown by the JVM"],
"answer": "An exception that the compiler forces you to handle (catch or declare)"
},
{
"question": "What is the role of java.io.Serializable interface?",
"options": ["It marks a class as eligible for serialization (converting an object into a byte stream)", "It makes a class immutable", "It allows a class to be used in concurrent programming", "It defines methods for comparison"],
"answer": "It marks a class as eligible for serialization (converting an object into a byte stream)"
},
{
"question": "Which Stream API terminal operation returns an Optional?",
"options": ["findFirst()", "forEach()", "collect()", "count()"],
"answer": "findFirst()"
},
{
"question": "What is the purpose of the Optional class introduced in Java 8?",
"options": ["To avoid NullPointerException by providing a container that may or may not contain a non-null value", "To make method parameters optional", "To allow multiple return values from a method", "To define optional arguments for constructors"],
"answer": "To avoid NullPointerException by providing a container that may or may not contain a non-null value"
},
{
"question": "Which collection class guarantees insertion order?",
"options": ["LinkedHashSet", "HashMap", "TreeSet", "HashSet"],
"answer": "LinkedHashSet"
},
{
"question": "Which of these is true about String in Java?",
"options": ["String objects are immutable", "String objects are mutable", "String is a primitive data type", "String objects are always stored on the stack"],
"answer": "String objects are immutable"
},
{
"question": "What is the key difference between Error and Exception in Java?",
"options": ["Error indicates serious problems that an application should not try to catch, while Exception indicates conditions that an application might want to catch", "Error can be caught, Exception cannot", "Error is a subclass of RuntimeException, Exception is not", "There is no difference"],
"answer": "Error indicates serious problems that an application should not try to catch, while Exception indicates conditions that an application might want to catch"
},
{
"question": "Which annotation is used to indicate that a method in a subclass is intended to override a method in its superclass?",
"options": ["@Override", "@Inherit", "@Super", "@Implement"],
"answer": "@Override"
},
{
"question": "What is the purpose of static import in Java?",
"options": ["Allows you to import static members (fields and methods) of a class directly", "Imports all static classes in a package", "Imports only static fields from a class", "Imports only static methods from a class"],
"answer": "Allows you to import static members (fields and methods) of a class directly"
},
{
"question": "Which of the following is NOT a valid access modifier in Java?",
"options": ["internal", "public", "private", "protected"],
"answer": "internal"
},
{
"question": "What is autoboxing in Java?",
"options": ["The automatic conversion between primitive types and their corresponding wrapper classes", "Automatically converting String to int", "Automatically converting int to String", "Converting a primitive type to a boolean"],
"answer": "The automatic conversion between primitive types and their corresponding wrapper classes"
},
{
"question": "Which method is used to compare the content of two String objects?",
"options": ["equals()", "==", "compare()", "isEqual()"],
"answer": "equals()"
},
{
"question": "What is the use of super keyword in Java?",
"options": ["To call methods or constructors of the superclass", "To create a new instance of the superclass", "To refer to the current object's superclass", "To define a static method in the superclass"],
"answer": "To call methods or constructors of the superclass"
},
{
"question": "Can a static method access non-static members of a class?",
"options": ["No, directly accessing non-static members from a static method is not allowed", "Yes, by using the this keyword", "Yes, by creating an instance of the class inside the static method", "Only if the non-static member is declared public"],
"answer": "No, directly accessing non-static members from a static method is not allowed"
},
{
"question": "Which of these is a correct way to define an anonymous inner class?",
"options": ["new MyInterface() { ... }", "class MyClass extends MyInterface { ... }", "public class MyClass implements MyInterface { ... }", "MyInterface obj = (args) -> { ... };"],
"answer": "new MyInterface() { ... }"
},
{
"question": "What is the main advantage of using interface over abstract class for achieving full abstraction?",
"options": ["A class can implement multiple interfaces but can only extend one abstract class", "Interfaces can have constructors, abstract classes cannot", "Interfaces can have non-abstract methods", "Abstract classes are slower than interfaces"],
"answer": "A class can implement multiple interfaces but can only extend one abstract class"
},
{
"question": "What is the purpose of the ExecutorService framework in Java concurrency?",
"options": ["Provides a higher-level API for managing and executing threads", "Automatically creates new threads for every task", "Handles all synchronization automatically", "Is used for basic thread creation only"],
"answer": "Provides a higher-level API for managing and executing threads"
},
{
"question": "Which class is used for reading character streams from files?",
"options": ["FileReader", "FileInputStream", "BufferedReader", "Scanner"],
"answer": "FileReader"
},
{
"question": "What is the difference between throw and throws keywords in Java?",
"options": ["throw is used to explicitly throw an exception, throws is used to declare that a method might throw an exception", "throw declares an exception, throws throws an exception", "Both are used for throwing exceptions", "Both are used for declaring exceptions"],
"answer": "throw is used to explicitly throw an exception, throws is used to declare that a method might throw an exception"
},
{
"question": "What is the purpose of the assert keyword in Java?",
"options": ["To test assumptions about the program's state, primarily for debugging", "To declare a new variable", "To create a constant", "To handle exceptions"],
"answer": "To test assumptions about the program's state, primarily for debugging"
},
{
"question": "Which of the following is true about switch statements in Java?",
"options": ["switch can work with String types from Java 7 onwards", "switch can work with double types", "switch requires a default case", "switch is faster than if-else if ladders in all scenarios"],
"answer": "switch can work with String types from Java 7 onwards"
},
{
"question": "What is the purpose of the java.time package in Java 8?",
"options": ["Provides a new and improved Date and Time API", "Manages time zones and daylight saving", "Handles calendar conversions", "All of the above"],
"answer": "All of the above"
},
{
"question": "What is the difference between a class and an object?",
"options": ["A class is a blueprint, an object is an instance of the class", "A class is an instance, an object is a blueprint", "They are interchangeable terms", "A class is a static entity, an object is a dynamic entity"],
"answer": "A class is a blueprint, an object is an instance of the class"
},
{
"question": "Which keyword is used to explicitly call the garbage collector?",
"options": ["System.gc()", "Runtime.gc()", "Object.collect()", "There is no direct way to force garbage collection"],
"answer": "System.gc()"
},
{
"question": "Can you define static methods in an interface (from Java 8 onwards)?",
"options": ["Yes, from Java 8 onwards", "No, static methods are only allowed in classes", "Only if the interface is also abstract", "Only if the method returns void"],
"answer": "Yes, from Java 8 onwards"
},
{
"question": "What is downcasting in Java?",
"options": ["Converting a superclass reference to a subclass reference", "Converting a subclass reference to a superclass reference", "Converting a primitive type to an object", "Converting an object to a primitive type"],
"answer": "Converting a superclass reference to a subclass reference"
}
];

// 🎲 Shuffle the questions randomly
questions = questions.sort(() => Math.random() - 0.5);

let currentQuestion = 0;
let score = 0;

function startExam() {
  const name = document.getElementById("userName").value.trim();
  if (name === "") return alert("Please enter your name!");

  localStorage.setItem("userName", name);
  document.getElementById("namePrompt").style.display = "none";
  document.getElementById("questionBox").style.display = "block";

  // ✅ Shuffle freshly every time user enters
  questions = questions.sort(() => Math.random() - 0.5);

  // ✅ Set total questions dynamically
  document.getElementById("totalQuestions").innerText = String(questions.length).padStart(2, '0');

  loadQuestion();
}


function loadQuestion() {
  const q = questions[currentQuestion];

  // Update current question number
  document.getElementById("questionIndex").innerText = String(currentQuestion + 1).padStart(2, '0');
  document.getElementById("questionText").innerText = q.question;

  const container = document.getElementById("optionsContainer");
  container.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      if (opt === q.answer) score++;
      nextQuestion();
    };
    container.appendChild(btn);
  });
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    endExam();
  }
}

function endExam() {
  const box = document.getElementById("questionBox");
  box.innerHTML = `
    <div class="finished-animate">
      <h2>🎉 Exam Finished!</h2>
      <p>Your Score: <strong>${score}/${questions.length}</strong></p>
    </div>
  `;
}
