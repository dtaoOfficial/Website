let questions = [
{
"question": "Explain the concept of 'Class Loaders' in Java and their hierarchy.",
"options": ["Responsible for loading Java classes into the JVM, following a delegation hierarchy (Bootstrap, Extension, Application)", "Used for compiling Java source code into bytecode", "A mechanism for managing memory allocation for objects", "A tool for debugging Java applications"],
"answer": "Responsible for loading Java classes into the JVM, following a delegation hierarchy (Bootstrap, Extension, Application)"
},
{
"question": "What is the difference between CompletableFuture and Future in Java concurrency?",
"options": ["CompletableFuture supports chaining, combining, and error handling, while Future is basic and blocking", "Future is more efficient for asynchronous operations", "CompletableFuture is only for single-threaded applications", "There is no functional difference; they are just different names"],
"answer": "CompletableFuture supports chaining, combining, and error handling, while Future is basic and blocking"
},
{
"question": "Describe the Java Memory Model (JMM) and its implications for concurrent programming.",
"options": ["Defines how threads interact with memory (visibility, ordering), crucial for preventing data races and ensuring correctness in concurrent code", "A specification for how garbage collection works in Java", "A set of rules for how to write efficient Java code", "A framework for managing distributed transactions"],
"answer": "Defines how threads interact with memory (visibility, ordering), crucial for preventing data races and ensuring correctness in concurrent code"
},
{
"question": "What are 'Stale Objects' in the context of garbage collection, and how do they occur?",
"options": ["Objects that are no longer referenced by any active part of the program but haven't been garbage collected yet, leading to memory leaks if not handled", "Objects that have been explicitly deleted by the programmer", "Objects that are too large to fit in memory", "Objects that are actively being used by a thread"],
"answer": "Objects that are no longer referenced by any active part of the program but haven't been garbage collected yet, leading to memory leaks if not handled"
},
{
"question": "Explain the concept of 'Type Erasure' in Java Generics.",
"options": ["Generics information is only present at compile time and is removed (erased) during compilation, so it's not available at runtime", "The process of converting generic types to specific types at runtime", "A mechanism for ensuring type safety during runtime", "A way to automatically infer the types of generic parameters"],
"answer": "Generics information is only present at compile time and is removed (erased) during compilation, so it's not available at runtime"
},
{
"question": "What is the purpose of the Unsafe class in Java, and why is its use generally discouraged?",
"options": ["Provides low-level operations (e.g., direct memory access) that bypass Java's safety checks; discouraged due to potential for memory corruption and platform dependence", "A utility class for safely handling concurrency issues", "Used for securely encrypting data in Java applications", "A class for performing network operations more efficiently"],
"answer": "Provides low-level operations (e.g., direct memory access) that bypass Java's safety checks; discouraged due to potential for memory corruption and platform dependence"
},
{
"question": "Differentiate between ConcurrentHashMap and Collections.synchronizedMap().",
"options": ["ConcurrentHashMap provides better concurrency by segmenting the map and allowing concurrent reads/writes on different segments, while synchronizedMap() uses a single lock for the entire map", "synchronizedMap() is generally faster for high concurrency scenarios", "ConcurrentHashMap is only suitable for single-threaded environments", "They are essentially the same, just different API names"],
"answer": "ConcurrentHashMap provides better concurrency by segmenting the map and allowing concurrent reads/writes on different segments, while synchronizedMap() uses a single lock for the entire map"
},
{
"question": "Explain the concept of 'Lambda Expressions' in Java 8 and their benefits.",
"options": ["Provide a concise way to represent anonymous functions, improving code readability and enabling functional programming paradigms", "A new syntax for declaring variables in Java", "A mechanism for defining classes dynamically at runtime", "Used for creating new threads more efficiently"],
"answer": "Provide a concise way to represent anonymous functions, improving code readability and enabling functional programming paradigms"
},
{
"question": "What are 'Streams' in Java 8, and how do they differ from Collections?",
"options": ["Sequences of elements that support aggregate operations and are processed declaratively, unlike Collections which are data structures themselves and are typically iterated imperatively", "Streams are only for network I/O, Collections are for in-memory data", "Streams are mutable, Collections are immutable", "Streams are a replacement for arrays"],
"answer": "Sequences of elements that support aggregate operations and are processed declaratively, unlike Collections which are data structures themselves and are typically iterated imperatively"
},
{
"question": "Describe the 'Fork/Join Framework' in Java and its typical use cases.",
"options": ["A framework for parallelizing tasks that can be broken down into smaller subtasks, using a work-stealing algorithm (e.g., recursive algorithms)", "Used for managing database connections efficiently", "A framework for building graphical user interfaces", "A mechanism for inter-process communication"],
"answer": "A framework for parallelizing tasks that can be broken down into smaller subtasks, using a work-stealing algorithm (e.g., recursive algorithms)"
},
{
"question": "Explain 'NIO.2' (New I/O API for Java) and its advantages over classic I/O.",
"options": ["Introduces non-blocking I/O, asynchronous I/O, and improved file system access (e.g., Path, Files classes), offering better performance and scalability for I/O operations", "A legacy I/O API that is no longer recommended", "Only used for network programming, not file operations", "Primarily focused on object serialization"],
"answer": "Introduces non-blocking I/O, asynchronous I/O, and improved file system access (e.g., Path, Files classes), offering better performance and scalability for I/O operations"
},
{
"question": "What is the 'Service Provider Interface (SPI)' in Java, and give an example.",
"options": ["A mechanism for providing extensible functionality, where an interface is defined and implementations can be discovered and loaded at runtime (e.g., JDBC drivers, logging frameworks)", "A way to define abstract classes", "An interface for defining microservices", "A protocol for inter-application communication"],
"answer": "A mechanism for providing extensible functionality, where an interface is defined and implementations can be discovered and loaded at runtime (e.g., JDBC drivers, logging frameworks)"
},
{
"question": "Discuss the 'PermGen' space vs. 'Metaspace' in JVM memory management.",
"options": ["PermGen (Java 7 and earlier) stored metadata for classes/methods and was prone to OutOfMemoryError; Metaspace (Java 8+) stores this data natively and resizes dynamically, reducing OOM issues", "PermGen and Metaspace are the same thing with different names", "Metaspace is only used for storing primitive data types", "PermGen is where application code resides"],
"answer": "PermGen (Java 7 and earlier) stored metadata for classes/methods and was prone to OutOfMemoryError; Metaspace (Java 8+) stores this data natively and resizes dynamically, reducing OOM issues"
},
{
"question": "Explain 'Varargs' in Java and their usage.",
"options": ["Allow a method to accept a variable number of arguments of a specified type, represented by an ellipsis (...) after the type", "A way to declare variables with an unknown type", "Used for creating generic arrays", "A feature for defining optional parameters in a method signature"],
"answer": "Allow a method to accept a variable number of arguments of a specified type, represented by an ellipsis (...) after the type"
},
{
"question": "What is 'JIT Compiler' (Just-In-Time Compiler) in JVM?",
"options": ["A component of the JVM that compiles Java bytecode into native machine code at runtime, optimizing performance for frequently executed code", "A tool for compiling Java source code before execution", "A mechanism for managing network connections", "A type of garbage collector"],
"answer": "A component of the JVM that compiles Java bytecode into native machine code at runtime, optimizing performance for frequently executed code"
},
{
"question": "Differentiate between 'early binding' (static polymorphism) and 'late binding' (dynamic polymorphism) in Java.",
"options": ["Early binding (method overloading) occurs at compile time; Late binding (method overriding) occurs at runtime based on the actual object type", "Early binding is always slower than late binding", "Late binding is only possible with final methods", "Both refer to the same concept in Java"],
"answer": "Early binding (method overloading) occurs at compile time; Late binding (method overriding) occurs at runtime based on the actual object type"
},
{
"question": "Explain the concept of 'Memory Leaks' in Java and common causes.",
"options": ["Situations where objects that are no longer needed by the application are still being referenced, preventing the garbage collector from reclaiming their memory (e.g., forgotten listeners, static collections)", "Excessive use of primitive data types", "Errors in network communication", "When the heap size is set too small"],
"answer": "Situations where objects that are no longer needed by the application are still being referenced, preventing the garbage collector from reclaiming their memory (e.g., forgotten listeners, static collections)"
},
{
"question": "What are 'Weak References', 'Soft References', and 'Phantom References' in Java?",
"options": ["Types of references that interact differently with the garbage collector, influencing when objects are eligible for collection, used for caching and resource management", "Different ways to declare variables in Java", "Mechanisms for enforcing strict access control to objects", "Techniques for optimizing method calls"],
"answer": "Types of references that interact differently with the garbage collector, influencing when objects are eligible for collection, used for caching and resource management"
},
{
"question": "How do you handle 'circular dependencies' between classes in Java?",
"options": ["Often broken by introducing interfaces, using dependency injection frameworks, or refactoring code to reduce tight coupling", "By making all involved classes static", "By ensuring all methods are final", "Circular dependencies are not possible in Java"],
"answer": "Often broken by introducing interfaces, using dependency injection frameworks, or refactoring code to reduce tight coupling"
},
{
"question": "Explain the 'Class.forName()' method and its common use cases.",
"options": ["Dynamically loads a class at runtime, commonly used in JDBC to load drivers or for reflection to create instances of classes by name", "Used for creating new objects at compile time", "A method for checking if a class exists in the classpath", "Converts a string to a class name"],
"answer": "Dynamically loads a class at runtime, commonly used in JDBC to load drivers or for reflection to create instances of classes by name"
},
{
"question": "What is the 'Reflection API' in Java, and what are its capabilities?",
"options": ["Allows a Java program to inspect and manipulate classes, interfaces, fields, and methods at runtime (e.g., creating objects, invoking methods dynamically)", "Used for encrypting data in Java applications", "A tool for debugging memory leaks", "A framework for building network applications"],
"answer": "Allows a Java program to inspect and manipulate classes, interfaces, fields, and methods at runtime (e.g., creating objects, invoking methods dynamically)"
},
{
"question": "Discuss the 'StampedLock' in Java and its advantages over ReadWriteLock.",
"options": ["Provides optimistic read locking and pessimistic read/write locking with better performance for read-heavy workloads compared to ReadWriteLock", "StampedLock is a legacy class, ReadWriteLock is preferred", "StampedLock is only for single-threaded scenarios", "There is no performance difference between them"],
"answer": "Provides optimistic read locking and pessimistic read/write locking with better performance for read-heavy workloads compared to ReadWriteLock"
},
{
"question": "Explain 'Externalization' in Java and its benefits over default serialization.",
"options": ["A custom serialization mechanism where the class explicitly controls its own serialization/deserialization, offering better performance, flexibility, and control over security issues compared to default serialization", "A way to make objects non-serializable", "Used for compressing serialized data automatically", "A method for encrypting data before serialization"],
"answer": "A custom serialization mechanism where the class explicitly controls its own serialization/deserialization, offering better performance, flexibility, and control over security issues compared to default serialization"
},
{
"question": "What are 'JVM Arguments' and how are they used for performance tuning?",
"options": ["Parameters passed to the JVM at startup to control various aspects like heap size (-Xms, -Xmx), garbage collector type, and debugging options for performance optimization", "Arguments passed to the main method of a Java application", "Used for defining environment variables for Java applications", "Commands for compiling Java code"],
"answer": "Parameters passed to the JVM at startup to control various aspects like heap size (-Xms, -Xmx), garbage collector type, and debugging options for performance optimization"
},
{
"question": "Differentiate between 'Fail-fast' and 'Fail-safe' iterators in Java Collections.",
"options": ["Fail-fast iterators immediately throw a ConcurrentModificationException if the collection is structurally modified during iteration; Fail-safe iterators work on a copy of the collection and don't throw this exception", "Fail-fast iterators are generally slower than fail-safe iterators", "Fail-safe iterators are only available for List implementations", "Both always throw exceptions on modification"],
"answer": "Fail-fast iterators immediately throw a ConcurrentModificationException if the collection is structurally modified during iteration; Fail-safe iterators work on a copy of the collection and don't throw this exception"
},
{
"question": "Explain 'Class Loading Delegation Model' in Java.",
"options": ["A hierarchical model where a class loader delegates the task of loading a class to its parent class loader first before attempting to load it itself", "A model for distributing classes across a network", "A security mechanism to prevent unauthorized class loading", "A way to prioritize certain classes over others"],
"answer": "A hierarchical model where a class loader delegates the task of loading a class to its parent class loader first before attempting to load it itself"
},
{
"question": "What is the significance of the transient keyword during serialization?",
"options": ["It marks a field as not to be serialized when an object is written to a persistent storage; its value will be null or default upon deserialization", "It makes a field immutable", "It ensures a field is always in memory and never written to disk", "It makes a field accessible only within the same package"],
"answer": "It marks a field as not to be serialized when an object is written to a persistent storage; its value will be null or default upon deserialization"
},
{
"question": "Describe 'Double-Checked Locking' and why it's used with volatile for singletons.",
"options": ["A design pattern for thread-safe lazy initialization of singletons, requiring volatile for the instance variable to ensure visibility and prevent reordering issues during object construction", "A locking mechanism used for database transactions", "A technique for optimizing loop performance", "A way to prevent deadlocks in multi-threaded applications"],
"answer": "A design pattern for thread-safe lazy initialization of singletons, requiring volatile for the instance variable to ensure visibility and prevent reordering issues during object construction"
},
{
"question": "What are 'Thread Local' variables in Java and their use cases?",
"options": ["Variables that provide separate copies of a variable for each thread accessing it, ensuring thread isolation (e.g., managing database connections per thread)", "Variables that are shared among all threads", "Variables that are only accessible within a specific method", "Variables that are part of the thread's stack"],
"answer": "Variables that provide separate copies of a variable for each thread accessing it, ensuring thread isolation (e.g., managing database connections per thread)"
},
{
"question": "Explain 'Method Handles' in Java and their relation to Reflection.",
"options": ["A more performant and type-safe alternative to Reflection for invoking methods and accessing fields dynamically, providing direct access to the underlying bytecode", "A tool for generating bytecode at runtime", "Used for creating new classes dynamically", "A mechanism for intercepting method calls"],
"answer": "A more performant and type-safe alternative to Reflection for invoking methods and accessing fields dynamically, providing direct access to the underlying bytecode"
},
{
"question": "What is 'JMX' (Java Management Extensions) and its purpose?",
"options": ["A technology for monitoring and managing applications, devices, and service-oriented networks in Java (e.g., exposing MBeans for performance metrics)", "A framework for building web services in Java", "Used for debugging memory leaks in production environments", "A security framework for Java applications"],
"answer": "A technology for monitoring and managing applications, devices, and service-oriented networks in Java (e.g., exposing MBeans for performance metrics)"
},
{
"question": "Discuss 'Completable Futures' and their role in asynchronous programming.",
"options": ["Represent a stage in an asynchronous computation, allowing for non-blocking execution, chaining of operations, and handling of results/exceptions when available", "Used for blocking I/O operations", "A way to define fixed-size thread pools", "A mechanism for distributed computing"],
"answer": "Represent a stage in an asynchronous computation, allowing for non-blocking execution, chaining of operations, and handling of results/exceptions when available"
},
{
"question": "Explain 'Type Inference' in Java 8 (e.g., with Lambda Expressions and Generics).",
"options": ["The compiler's ability to deduce the types of expressions, reducing boilerplate code (e.g., var keyword, ArrayList<>() empty diamond operator)", "A mechanism for enforcing strict type checking at runtime", "A way to dynamically change the type of a variable", "The process of explicitly specifying all types in code"],
"answer": "The compiler's ability to deduce the types of expressions, reducing boilerplate code (e.g., var keyword, ArrayList<>() empty diamond operator)"
},
{
"question": "What is 'JVMTI' (JVM Tool Interface) and its applications?",
"options": ["A programming interface used by tools to inspect the state and control the execution of applications running in the JVM (e.g., debuggers, profilers)", "A tool for converting Java code to native executables", "Used for optimizing bytecode at runtime", "A framework for building high-performance networking applications"],
"answer": "A programming interface used by tools to inspect the state and control the execution of applications running in the JVM (e.g., debuggers, profilers)"
},
{
"question": "Differentiate between 'Serialization Proxy Pattern' and 'readObject/writeObject' for custom serialization.",
"options": ["Serialization Proxy uses an inner static class to represent the serializable form, ensuring immutability and preventing attacks; readObject/writeObject allows direct custom serialization logic", "Serialization Proxy is only for remote method invocation", "Both methods offer the same level of security and control", "readObject/writeObject is less performant than the proxy pattern"],
"answer": "Serialization Proxy uses an inner static class to represent the serializable form, ensuring immutability and preventing attacks; readObject/writeObject allows direct custom serialization logic"
},
{
"question": "Explain 'Permutation Iterators' and their use in algorithms.",
"options": ["Iterators that generate all possible orderings (permutations) of a set of elements, often used in combinatorial algorithms or testing scenarios", "Iterators that allow modification of the underlying collection during iteration", "Iterators that only visit unique elements in a collection", "Iterators that work in reverse order"],
"answer": "Iterators that generate all possible orderings (permutations) of a set of elements, often used in combinatorial algorithms or testing scenarios"
},
{
"question": "What is 'JMH' (Java Microbenchmark Harness) and its significance?",
"options": ["A powerful toolkit for building, running, and analyzing nano/micro/milli benchmarks in Java, helping to accurately measure code performance", "A framework for developing RESTful APIs in Java", "A tool for static code analysis", "Used for generating random test data"],
"answer": "A powerful toolkit for building, running, and analyzing nano/micro/milli benchmarks in Java, helping to accurately measure code performance"
},
{
"question": "Discuss 'Project Loom' (Virtual Threads) and its potential impact on Java concurrency.",
"options": ["Aims to introduce lightweight 'virtual threads' (fibers) managed by the JVM, significantly reducing the cost of context switching and enabling higher concurrency for I/O-bound applications", "A project to improve garbage collection performance", "A new framework for distributed computing", "A method for automatically parallelizing sequential code"],
"answer": "Aims to introduce lightweight 'virtual threads' (fibers) managed by the JVM, significantly reducing the cost of context switching and enabling higher concurrency for I/O-bound applications"
},
{
"question": "What is the 'Module System' (Jigsaw) in Java 9, and what problem does it solve?",
"options": ["Introduced modularity to Java, enabling better encapsulation, reliability, and performance by breaking down the JDK and applications into explicit modules, solving the 'JAR hell' problem and improving maintainability", "A system for managing external dependencies in Java projects", "A tool for generating documentation from Java source code", "A new way to compile Java code"],
"answer": "Introduced modularity to Java, enabling better encapsulation, reliability, and performance by breaking down the JDK and applications into explicit modules, solving the 'JAR hell' problem and improving maintainability"
},
{
"question": "Explain 'Record Classes' in Java and their benefits.",
"options": ["Compact syntax for declaring immutable data classes, automatically generating boilerplate like equals(), hashCode(), toString(), and accessors, improving code conciseness for data carriers", "Used for defining database tables in Java", "A new type of interface with built-in methods", "A way to create mutable objects more easily"],
"answer": "Compact syntax for declaring immutable data classes, automatically generating boilerplate like equals(), hashCode(), toString(), and accessors, improving code conciseness for data carriers"
},
{
"question": "What is 'Pattern Matching for instanceof' in Java and its advantages?",
"options": ["Simplifies the instanceof operator by allowing the declaration of a pattern variable directly in the if condition, reducing explicit casting and improving readability", "A new way to define regular expressions in Java", "Used for matching patterns in strings", "A feature for comparing object structures"],
"answer": "Simplifies the instanceof operator by allowing the declaration of a pattern variable directly in the if condition, reducing explicit casting and improving readability"
},
{
"question": "Describe 'Sealed Classes' in Java and their purpose.",
"options": ["Allow a class or interface to restrict which other classes or interfaces can extend or implement it, providing more control over inheritance hierarchies and enhancing expressiveness", "Used for preventing classes from being serialized", "A way to make all methods in a class final", "Classes that cannot be instantiated directly"],
"answer": "Allow a class or interface to restrict which other classes or interfaces can extend or implement it, providing more control over inheritance hierarchies and enhancing expressiveness"
},
{
"question": "What is 'Garbage Collector Ergonomics' in JVM?",
"options": ["The process by which the JVM automatically selects the most appropriate garbage collector algorithm and tunes its parameters based on the system's hardware and application's needs", "A type of garbage collector that runs only when memory is low", "The process of manually configuring garbage collection settings", "A tool for visualizing garbage collection activity"],
"answer": "The process by which the JVM automatically selects the most appropriate garbage collector algorithm and tunes its parameters based on the system's hardware and application's needs"
},
{
"question": "Explain 'Memory Barriers' (or Memory Fences) in concurrent programming.",
"options": ["Instructions that enforce a happens-before relationship between memory operations, preventing reordering by the compiler or CPU to ensure visibility and ordering guarantees across threads", "A mechanism for preventing memory leaks", "Used for dividing memory into different regions", "A technique for compressing memory usage"],
"answer": "Instructions that enforce a happens-before relationship between memory operations, preventing reordering by the compiler or CPU to ensure visibility and ordering guarantees across threads"
},
{
"question": "How do you achieve 'Inter-Process Communication (IPC)' in Java?",
"options": ["Through mechanisms like Sockets, RMI (Remote Method Invocation), Files, Pipes, or shared memory (via external libraries), enabling communication between separate Java processes", "By using Thread.join()", "By making all data static", "IPC is not possible in pure Java"],
"answer": "Through mechanisms like Sockets, RMI (Remote Method Invocation), Files, Pipes, or shared memory (via external libraries), enabling communication between separate Java processes"
},
{
"question": "What are 'JEPs' (JDK Enhancement Proposals) and their role in Java development?",
"options": ["Proposals for enhancements to the JDK, used to guide the evolution of the Java platform through a community-driven process", "Java Exception Patterns, for consistent exception handling", "Java Enterprise Process, for large-scale application development", "Java Environment Parameters, for JVM configuration"],
"answer": "Proposals for enhancements to the JDK, used to guide the evolution of the Java platform through a community-driven process"
},
{
"question": "Discuss 'Reactive Programming' in Java (e.g., RxJava, Project Reactor).",
"options": ["A programming paradigm oriented around data streams and the propagation of change, enabling more responsive and resilient applications, especially in asynchronous and event-driven contexts", "A technique for writing highly optimized database queries", "A method for automatically generating user interfaces", "A framework for building desktop applications"],
"answer": "A programming paradigm oriented around data streams and the propagation of change, enabling more responsive and resilient applications, especially in asynchronous and event-driven contexts"
},
{
"question": "Explain 'Project Panama' and its goals.",
"options": ["Aims to improve the interoperability between the JVM and native code by providing a more ergonomic and efficient API for calling native functions and accessing native memory", "A project to improve Java's garbage collection algorithms", "A framework for building highly scalable network services", "A new language for writing Java applications"],
"answer": "Aims to improve the interoperability between the JVM and native code by providing a more ergonomic and efficient API for calling native functions and accessing native memory"
},
{
"question": "What is the concept of 'Metaprogramming' in Java and how can it be achieved?",
"options": ["Writing programs that manipulate other programs (or themselves), achieved through Reflection, Annotation Processors, Bytecode Manipulation (e.g., ASM, ByteBuddy), or Code Generation", "Programming in a meta-language to generate Java code", "Using a debugger to modify code at runtime", "A technique for writing self-modifying code"],
"answer": "Writing programs that manipulate other programs (or themselves), achieved through Reflection, Annotation Processors, Bytecode Manipulation (e.g., ASM, ByteBuddy), or Code Generation"
},
{
"question": "Describe 'Value Types' (Project Valhalla) and their potential impact.",
"options": ["Aims to introduce new types (e.g., inline classes) that store data directly within objects or arrays, reducing memory footprint and improving performance by avoiding object headers and pointers", "A new primitive data type for very large numbers", "A mechanism for ensuring data integrity in distributed systems", "A way to automatically generate equals and hashCode methods"],
"answer": "Aims to introduce new types (e.g., inline classes) that store data directly within objects or arrays, reducing memory footprint and improving performance by avoiding object headers and pointers"
},
{
"question": "What are 'GraalVM' and its key features/benefits?",
"options": ["A universal virtual machine that can run programs written in Java, JavaScript, Python, and other languages, offering ahead-of-time (AOT) compilation for faster startup and lower memory footprint, and native image generation", "A new garbage collector for the JVM", "A tool for debugging multi-threaded applications", "A framework for building cloud-native applications"],
"answer": "A universal virtual machine that can run programs written in Java, JavaScript, Python, and other languages, offering ahead-of-time (AOT) compilation for faster startup and lower memory footprint, and native image generation"
},
{
"question": "Explain 'BiConsumer', 'BiFunction', and 'BiPredicate' in Java 8 functional interfaces.",
"options": ["Functional interfaces that take two arguments: BiConsumer performs an operation, BiFunction produces a result, and BiPredicate returns a boolean, useful for operations on pairs of data", "Interfaces used for binary file I/O operations", "Interfaces for defining binary trees", "Functional interfaces that only take one argument"],
"answer": "Functional interfaces that take two arguments: BiConsumer performs an operation, BiFunction produces a result, and BiPredicate returns a boolean, useful for operations on pairs of data"
},
{
"question": "What is 'JLink' in Java 9 and its use case?",
"options": ["A tool for creating custom runtime images that contain only the necessary modules for an application, reducing the size of the JVM and application distribution", "A tool for linking native libraries to Java applications", "Used for creating Java web applications", "A new build automation tool for Java"],
"answer": "A tool for creating custom runtime images that contain only the necessary modules for an application, reducing the size of the JVM and application distribution"
}
]

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
