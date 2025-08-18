let questions = [
{
"question": "What is the extension of Java source code files?",
"options": [".java", ".class", ".txt", ".js"],
"answer": ".java"
},
{
"question": "Which method is the entry point for a Java application?",
"options": ["main()", "start()", "run()", "init()"],
"answer": "main()"
},
{
"question": "Which keyword is used to create a class in Java?",
"options": ["class", "Class", "define", "struct"],
"answer": "class"
},
{
"question": "Which of the following is used to create an object in Java?",
"options": ["allocate", "new", "create", "make"],
"answer": "new"
},
{
"question": "What is the default value of a boolean variable in Java?",
"options": ["true", "false", "null", "0"],
"answer": "false"
},
{
"question": "Which of the following is NOT a Java primitive data type?",
"options": ["int", "String", "boolean", "double"],
"answer": "String"
},
{
"question": "Which operator is used for concatenation in Java?",
"options": ["+", "-", "", "/"],
"answer": "+"
},
{
"question": "Which keyword is used to define a constant in Java?",
"options": ["const", "final", "static", "fixed"],
"answer": "final"
},
{
"question": "What does JVM stand for?",
"options": ["Java Virtual Machine", "Java Very Modern", "Join Virtual Memory", "Just Virtual Machine"],
"answer": "Java Virtual Machine"
},
{
"question": "Which of these is used for single-line comments in Java?",
"options": ["//", "/ /", "#", ""],
"answer": "//"
},
{
"question": "Which data type is used to store a single character in Java?",
"options": ["char", "String", "byte", "short"],
"answer": "char"
},
{
"question": "How do you declare an array in Java?",
"options": ["int[] myArray;", "int myArray[];", "array myArray;", "myArray int[];"],
"answer": "int[] myArray;"
},
{
"question": "Which statement is used to exit from a loop in Java?",
"options": ["break", "continue", "return", "exit"],
"answer": "break"
},
{
"question": "What is inheritance in Java?",
"options": ["A mechanism where one class acquires the properties of another class", "A way to hide data", "A type of error handling", "A method for creating threads"],
"answer": "A mechanism where one class acquires the properties of another class"
},
{
"question": "Which keyword is used to access the superclass's members from a subclass?",
"options": ["super", "this", "parent", "base"],
"answer": "super"
},
{
"question": "Which of these is not an access modifier in Java?",
"options": ["public", "private", "protected", "friend"],
"answer": "friend"
},
{
"question": "What is method overloading in Java?",
"options": ["Having multiple methods with the same name but different parameters", "Having multiple methods with different names but same parameters", "Overriding a method in a subclass", "Calling a method repeatedly"],
"answer": "Having multiple methods with the same name but different parameters"
},
{
"question": "Which class is the superclass of all classes in Java?",
"options": ["Object", "Class", "System", "Main"],
"answer": "Object"
},
{
"question": "Which of these keywords is used to handle exceptions in Java?",
"options": ["try-catch", "if-else", "for-loop", "switch-case"],
"answer": "try-catch"
},
{
"question": "What is the purpose of the 'finally' block in Java exception handling?",
"options": ["It always executes, regardless of whether an exception occurred or not", "It executes only if an exception occurs", "It executes only if no exception occurs", "It is optional and rarely used"],
"answer": "It always executes, regardless of whether an exception occurred or not"
},
{
"question": "Which collection allows duplicate elements and maintains insertion order?",
"options": ["ArrayList", "HashSet", "TreeSet", "HashMap"],
"answer": "ArrayList"
},
{
"question": "Which interface should be implemented to sort objects in a custom order?",
"options": ["Comparable", "Serializable", "Cloneable", "Iterable"],
"answer": "Comparable"
},
{
"question": "What is encapsulation in Java?",
"options": ["Bundling data and methods that operate on the data within a single unit", "Hiding the implementation details of a class", "Creating multiple objects from a single class", "Allowing a class to inherit from multiple classes"],
"answer": "Bundling data and methods that operate on the data within a single unit"
},
{
"question": "Which keyword is used to prevent a class from being subclassed?",
"options": ["final", "abstract", "static", "private"],
"answer": "final"
},
{
"question": "Which keyword is used to define an abstract class?",
"options": ["abstract", "virtual", "pure", "interface"],
"answer": "abstract"
},
{
"question": "Can a class implement multiple interfaces in Java?",
"options": ["Yes", "No", "Only if they have no common methods", "Only if they are in the same package"],
"answer": "Yes"
},
{
"question": "What is the output of 'System.out.println(10 / 3);' in Java?",
"options": ["3", "3.33", "3.0", "Error"],
"answer": "3"
},
{
"question": "Which operator is used to check for equality of two objects (reference equality)?",
"options": ["==", ".equals()", "=", "!="],
"answer": "=="
},
{
"question": "What is the purpose of the 'static' keyword in Java?",
"options": ["It makes a member belong to the class rather than to any specific object", "It makes a member final", "It makes a member accessible from anywhere", "It makes a member volatile"],
"answer": "It makes a member belong to the class rather than to any specific object"
},
{
"question": "Which package contains the Scanner class for input?",
"options": ["java.util", "java.io", "java.lang", "java.net"],
"answer": "java.util"
},
{
"question": "What is the purpose of the this keyword in Java?",
"options": ["Refers to the current object", "Refers to the superclass object", "Refers to a static variable", "Refers to a global variable"],
"answer": "Refers to the current object"
},
{
"question": "Which of the following is an example of an unchecked exception?",
"options": ["NullPointerException", "IOException", "SQLException", "ClassNotFoundException"],
"answer": "NullPointerException"
},
{
"question": "What is polymorphism in Java?",
"options": ["The ability of an object to take on many forms", "The ability to define multiple methods with the same name", "The ability to hide data", "The ability to inherit from multiple classes"],
"answer": "The ability of an object to take on many forms"
},
{
"question": "Which of these is a valid declaration for a main method?",
"options": ["public static void main(String[] args)", "public void main(String[] args)", "static void main(String args)", "public static int main(String[] args)"],
"answer": "public static void main(String[] args)"
},
{
"question": "Which loop executes a block of code at least once?",
"options": ["do-while loop", "while loop", "for loop", "for-each loop"],
"answer": "do-while loop"
},
{
"question": "What is the byte size of an 'int' data type in Java?",
"options": ["4 bytes", "2 bytes", "8 bytes", "1 byte"],
"answer": "4 bytes"
},
{
"question": "Which access modifier allows members to be accessed within the same package and by subclasses?",
"options": ["protected", "public", "private", "default"],
"answer": "protected"
},
{
"question": "What is the primary function of the garbage collector in Java?",
"options": ["To free up memory by deleting unreachable objects", "To manage network connections", "To compile Java code", "To handle user input"],
"answer": "To free up memory by deleting unreachable objects"
},
{
"question": "Which keyword is used to return a value from a method?",
"options": ["return", "exit", "yield", "break"],
"answer": "return"
},
{
"question": "What is the default value of an uninitialized reference variable in Java?",
"options": ["null", "0", "empty string", "undefined"],
"answer": "null"
},
{
"question": "Which operator is used to perform modulus (remainder) in Java?",
"options": ["%", "/", "", "+"],
"answer": "%"
},
{
"question": "Can a private method be overridden in a subclass?",
"options": ["No", "Yes", "Only if the subclass is in the same package", "Only if it's an abstract method"],
"answer": "No"
},
{
"question": "Which keyword is used to import a package or class in Java?",
"options": ["import", "include", "use", "get"],
"answer": "import"
},
{
"question": "What does JDK stand for?",
"options": ["Java Development Kit", "Java Debugging Kit", "Java Deployment Kit", "Java Design Kit"],
"answer": "Java Development Kit"
},
{
"question": "Which of these is a checked exception?",
"options": ["IOException", "ArrayIndexOutOfBoundsException", "ArithmeticException", "NullPointerException"],
"answer": "IOException"
},
{
"question": "What is the use of the super() call in a constructor?",
"options": ["To invoke the superclass's constructor", "To invoke a method in the superclass", "To create a new instance of the superclass", "To refer to the current object"],
"answer": "To invoke the superclass's constructor"
},
{
"question": "Which of the following is mutable in Java?",
"options": ["StringBuilder", "String", "Integer", "Double"],
"answer": "StringBuilder"
},
{
"question": "What is the difference between == and .equals() for objects?",
"options": ["== compares references, .equals() compares content", "== compares content, .equals() compares references", "Both compare references", "Both compare content"],
"answer": "== compares references, .equals() compares content"
},
{
"question": "Which of the following is true about interfaces in Java?",
"options": ["An interface can contain only abstract methods (before Java 8)", "An interface can have constructors", "An interface can contain static methods", "An interface can be instantiated"],
"answer": "An interface can contain only abstract methods (before Java 8)"
},
{
"question": "What is the output of System.out.println(\"Hello\" + 5 + 5);?",
"options": ["Hello55", "Hello10", "Error", "Hello 5 5"],
"answer": "Hello55"
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
