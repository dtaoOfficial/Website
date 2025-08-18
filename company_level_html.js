let questions = [
  {
    "question": "What is the difference between `HashMap` and `ConcurrentHashMap` in Java?",
    "options": ["`HashMap` is synchronized, while `ConcurrentHashMap` is not.", "`ConcurrentHashMap` provides better concurrency by segmenting the map and allowing concurrent reads/writes on different segments, while `HashMap` is not thread-safe.", "`HashMap` is faster for high-concurrency scenarios.", "There is no functional difference; they are just different names."],
    "answer": "`ConcurrentHashMap` provides better concurrency by segmenting the map and allowing concurrent reads/writes on different segments, while `HashMap` is not thread-safe."
  },
  {
    "question": "Explain the concept of 'Class Loaders' in Java and their hierarchy.",
    "options": ["Responsible for loading Java classes into the JVM, following a delegation hierarchy (Bootstrap, Extension, Application)", "Used for compiling Java source code into bytecode", "A mechanism for managing memory allocation for objects", "A tool for debugging Java applications"],
    "answer": "Responsible for loading Java classes into the JVM, following a delegation hierarchy (Bootstrap, Extension, Application)"
  },
  {
    "question": "What is the difference between `CompletableFuture` and `Future` in Java concurrency?",
    "options": ["`CompletableFuture` supports chaining, combining, and error handling, while `Future` is basic and blocking", "`Future` is more efficient for asynchronous operations", "`CompletableFuture` is only for single-threaded applications", "There is no functional difference; they are just different names"],
    "answer": "`CompletableFuture` supports chaining, combining, and error handling, while `Future` is basic and blocking"
  },
  {
    "question": "Describe the Java Memory Model (JMM) and its implications for concurrent programming.",
    "options": ["Defines how threads interact with memory (visibility, ordering), crucial for preventing data races and ensuring correctness in concurrent code", "A specification for how garbage collection works in Java", "A set of rules for how to write efficient Java code", "A framework for managing distributed transactions"],
    "answer": "Defines how threads interact with memory (visibility, ordering), crucial for preventing data races and ensuring correctness in concurrent code"
  },
  {
    "question": "What is the purpose of the `transient` keyword in Java?",
    "options": ["It marks a field as not to be serialized when an object is written to a persistent storage; its value will be null or default upon deserialization", "It makes a field immutable", "It ensures a field is always in memory and never written to disk", "It makes a field accessible only within the same package"],
    "answer": "It marks a field as not to be serialized when an object is written to a persistent storage; its value will be null or default upon deserialization"
  },
  {
    "question": "Explain the concept of 'Type Erasure' in Java Generics.",
    "options": ["Generics information is only present at compile time and is removed (erased) during compilation, so it's not available at runtime", "The process of converting generic types to specific types at runtime", "A mechanism for ensuring type safety during runtime", "A way to automatically infer the types of generic parameters"],
    "answer": "Generics information is only present at compile time and is removed (erased) during compilation, so it's not available at runtime"
  },
  {
    "question": "Differentiate between `final`, `finally`, and `finalize` in Java.",
    "options": ["`final` is an access modifier, `finally` is a keyword for exception handling, `finalize` is a method called by the Garbage Collector.", "They are all keywords for object-oriented programming.", "`final` and `finally` are related to inheritance, while `finalize` is for memory management.", "There is no difference between them."],
    "answer": "`final` is an access modifier, `finally` is a keyword for exception handling, `finalize` is a method called by the Garbage Collector."
  },
  {
    "question": "Explain the concept of 'Memory Leaks' in Java and common causes.",
    "options": ["Situations where objects that are no longer needed by the application are still being referenced, preventing the garbage collector from reclaiming their memory (e.g., forgotten listeners, static collections)", "Excessive use of primitive data types", "Errors in network communication", "When the heap size is set too small"],
    "answer": "Situations where objects that are no longer needed by the application are still being referenced, preventing the garbage collector from reclaiming their memory (e.g., forgotten listeners, static collections)"
  },
  {
    "question": "What is the purpose of the `volatile` keyword in Java?",
    "options": ["It prevents a variable from being serialized.", "It ensures that a variable's value is always read from main memory and not from a thread's cache, guaranteeing visibility across threads.", "It makes a variable immutable.", "It makes a variable accessible only within a single thread."],
    "answer": "It ensures that a variable's value is always read from main memory and not from a thread's cache, guaranteeing visibility across threads."
  },
  {
    "question": "What is the difference between `fail-fast` and `fail-safe` iterators?",
    "options": ["`fail-fast` iterators immediately throw a `ConcurrentModificationException` if the collection is structurally modified during iteration; `fail-safe` iterators work on a copy of the collection and don't throw this exception.", "`fail-fast` iterators are generally slower than `fail-safe` iterators.", "`fail-safe` iterators are only available for `List` implementations.", "Both always throw exceptions on modification."],
    "answer": "`fail-fast` iterators immediately throw a `ConcurrentModificationException` if the collection is structurally modified during iteration; `fail-safe` iterators work on a copy of the collection and don't throw this exception."
  },
  {
    "question": "Explain 'Polymorphism' in Java with an example.",
    "options": ["The ability of an object to take on many forms (e.g., method overloading and overriding).", "The process of inheriting properties from a parent class.", "A mechanism for hiding the implementation details of a class.", "The process of converting a primitive data type to an object."],
    "answer": "The ability of an object to take on many forms (e.g., method overloading and overriding)."
  },
  {
    "question": "What is the Java Virtual Machine (JVM)?",
    "options": ["A physical machine that runs Java code.", "A compiler that translates Java source code to bytecode.", "A virtual machine that provides a runtime environment for executing Java bytecode.", "A tool for debugging Java applications."],
    "answer": "A virtual machine that provides a runtime environment for executing Java bytecode."
  },
  {
    "question": "What are 'Thread Local' variables in Java and their use cases?",
    "options": ["Variables that are shared among all threads.", "Variables that provide separate copies of a variable for each thread accessing it, ensuring thread isolation (e.g., managing database connections per thread).", "Variables that are only accessible within a specific method.", "Variables that are part of the thread's stack."],
    "answer": "Variables that provide separate copies of a variable for each thread accessing it, ensuring thread isolation (e.g., managing database connections per thread)."
  },
  {
    "question": "Differentiate between Checked and Unchecked Exceptions.",
    "options": ["Checked exceptions must be handled or declared at compile time; Unchecked exceptions do not need to be.", "Checked exceptions are for programmer errors; Unchecked exceptions are for external errors.", "Checked exceptions are part of the `RuntimeException` class hierarchy, while Unchecked exceptions are not.", "There is no functional difference between them."],
    "answer": "Checked exceptions must be handled or declared at compile time; Unchecked exceptions do not need to be."
  },
  {
    "question": "What are 'Streams' in Java 8, and how do they differ from Collections?",
    "options": ["Sequences of elements that support aggregate operations and are processed declaratively, unlike Collections which are data structures themselves and are typically iterated imperatively.", "Streams are only for network I/O, Collections are for in-memory data.", "Streams are mutable, Collections are immutable.", "Streams are a replacement for arrays."],
    "answer": "Sequences of elements that support aggregate operations and are processed declaratively, unlike Collections which are data structures themselves and are typically iterated imperatively."
  },
  {
    "question": "What is the 'JIT Compiler' (Just-In-Time Compiler) in JVM?",
    "options": ["A component of the JVM that compiles Java bytecode into native machine code at runtime, optimizing performance for frequently executed code.", "A tool for compiling Java source code before execution.", "A mechanism for managing network connections.", "A type of garbage collector."],
    "answer": "A component of the JVM that compiles Java bytecode into native machine code at runtime, optimizing performance for frequently executed code."
  },
  {
    "question": "What are 'Weak References', 'Soft References', and 'Phantom References' in Java?",
    "options": ["Types of references that interact differently with the garbage collector, influencing when objects are eligible for collection, used for caching and resource management.", "Different ways to declare variables in Java.", "Mechanisms for enforcing strict access control to objects.", "Techniques for optimizing method calls."],
    "answer": "Types of references that interact differently with the garbage collector, influencing when objects are eligible for collection, used for caching and resource management."
  },
  {
    "question": "Explain 'Method Handles' in Java and their relation to Reflection.",
    "options": ["A more performant and type-safe alternative to Reflection for invoking methods and accessing fields dynamically, providing direct access to the underlying bytecode.", "A tool for generating bytecode at runtime.", "Used for creating new classes dynamically.", "A mechanism for intercepting method calls."],
    "answer": "A more performant and type-safe alternative to Reflection for invoking methods and accessing fields dynamically, providing direct access to the underlying bytecode."
  },
  {
    "question": "Describe 'Double-Checked Locking' and why it's used with `volatile` for singletons.",
    "options": ["A design pattern for thread-safe lazy initialization of singletons, requiring `volatile` for the instance variable to ensure visibility and prevent reordering issues during object construction.", "A locking mechanism used for database transactions.", "A technique for optimizing loop performance.", "A way to prevent deadlocks in multi-threaded applications."],
    "answer": "A design pattern for thread-safe lazy initialization of singletons, requiring `volatile` for the instance variable to ensure visibility and prevent reordering issues during object construction."
  },
  {
    "question": "What is the purpose of the `Unsafe` class in Java, and why is its use generally discouraged?",
    "options": ["Provides low-level operations (e.g., direct memory access) that bypass Java's safety checks; discouraged due to potential for memory corruption and platform dependence.", "A utility class for safely handling concurrency issues.", "Used for securely encrypting data in Java applications.", "A class for performing network operations more efficiently."],
    "answer": "Provides low-level operations (e.g., direct memory access) that bypass Java's safety checks; discouraged due to potential for memory corruption and platform dependence."
  },
  {
    "question": "How do you achieve 'Inter-Process Communication (IPC)' in Java?",
    "options": ["Through mechanisms like Sockets, RMI (Remote Method Invocation), Files, Pipes, or shared memory (via external libraries), enabling communication between separate Java processes.", "By using `Thread.join()`.", "By making all data static.", "IPC is not possible in pure Java."],
    "answer": "Through mechanisms like Sockets, RMI (Remote Method Invocation), Files, Pipes, or shared memory (via external libraries), enabling communication between separate Java processes."
  },
  {
    "question": "Discuss 'Project Loom' (Virtual Threads) and its potential impact on Java concurrency.",
    "options": ["Aims to introduce lightweight 'virtual threads' (fibers) managed by the JVM, significantly reducing the cost of context switching and enabling higher concurrency for I/O-bound applications.", "A project to improve garbage collection performance.", "A new framework for distributed computing.", "A method for automatically parallelizing sequential code."],
    "answer": "Aims to introduce lightweight 'virtual threads' (fibers) managed by the JVM, significantly reducing the cost of context switching and enabling higher concurrency for I/O-bound applications."
  },
  {
    "question": "Explain 'Garbage Collector Ergonomics' in JVM?",
    "options": ["The process by which the JVM automatically selects the most appropriate garbage collector algorithm and tunes its parameters based on the system's hardware and application's needs.", "A type of garbage collector that runs only when memory is low.", "The process of manually configuring garbage collection settings.", "A tool for visualizing garbage collection activity."],
    "answer": "The process by which the JVM automatically selects the most appropriate garbage collector algorithm and tunes its parameters based on the system's hardware and application's needs."
  },
  {
    "question": "What is the 'Module System' (Jigsaw) in Java 9, and what problem does it solve?",
    "options": ["Introduced modularity to Java, enabling better encapsulation, reliability, and performance by breaking down the JDK and applications into explicit modules, solving the 'JAR hell' problem and improving maintainability.", "A system for managing external dependencies in Java projects.", "A tool for generating documentation from Java source code.", "A new way to compile Java code."],
    "answer": "Introduced modularity to Java, enabling better encapsulation, reliability, and performance by breaking down the JDK and applications into explicit modules, solving the 'JAR hell' problem and improving maintainability."
  },
  {
    "question": "Explain 'Record Classes' in Java and their benefits.",
    "options": ["Compact syntax for declaring immutable data classes, automatically generating boilerplate like `equals()`, `hashCode()`, `toString()`, and accessors, improving code conciseness for data carriers.", "Used for defining database tables in Java.", "A new type of interface with built-in methods.", "A way to create mutable objects more easily."],
    "answer": "Compact syntax for declaring immutable data classes, automatically generating boilerplate like `equals()`, `hashCode()`, `toString()`, and accessors, improving code conciseness for data carriers."
  },
  {
    "question": "What is 'JMH' (Java Microbenchmark Harness) and its significance?",
    "options": ["A powerful toolkit for building, running, and analyzing nano/micro/milli benchmarks in Java, helping to accurately measure code performance.", "A framework for developing RESTful APIs in Java.", "A tool for static code analysis.", "Used for generating random test data."],
    "answer": "A powerful toolkit for building, running, and analyzing nano/micro/milli benchmarks in Java, helping to accurately measure code performance."
  },
  {
    "question": "What is the concept of 'Metaprogramming' in Java and how can it be achieved?",
    "options": ["Writing programs that manipulate other programs (or themselves), achieved through Reflection, Annotation Processors, Bytecode Manipulation (e.g., ASM, ByteBuddy), or Code Generation.", "Programming in a meta-language to generate Java code.", "Using a debugger to modify code at runtime.", "A technique for writing self-modifying code."],
    "answer": "Writing programs that manipulate other programs (or themselves), achieved through Reflection, Annotation Processors, Bytecode Manipulation (e.g., ASM, ByteBuddy), or Code Generation."
  },
  {
    "question": "Differentiate between `ConcurrentHashMap` and `Collections.synchronizedMap()`.",
    "options": ["`ConcurrentHashMap` provides better concurrency by segmenting the map and allowing concurrent reads/writes on different segments, while `synchronizedMap()` uses a single lock for the entire map", "`synchronizedMap()` is generally faster for high concurrency scenarios", "`ConcurrentHashMap` is only suitable for single-threaded environments", "They are essentially the same, just different API names"],
    "answer": "`ConcurrentHashMap` provides better concurrency by segmenting the map and allowing concurrent reads/writes on different segments, while `synchronizedMap()` uses a single lock for the entire map"
  },
  {
    "question": "What is the purpose of `sealed` classes in Java?",
    "options": ["To prevent a class from being inherited.", "To allow a class or interface to restrict which other classes can extend or implement it.", "To ensure a class is always serialized.", "To make a class's methods final."],
    "answer": "To allow a class or interface to restrict which other classes can extend or implement it."
  },
  {
    "question": "Explain `Double.MIN_VALUE` and why it is not the smallest negative number.",
    "options": ["It is the smallest non-zero positive value a double can hold.", "It is the largest negative value a double can hold.", "It is equal to `Double.MAX_VALUE`.", "It is the smallest negative value a double can hold."],
    "answer": "It is the smallest non-zero positive value a double can hold."
  },
  {
    "question": "What is the purpose of the `transient` keyword in Java?",
    "options": ["It marks a field as not to be serialized when an object is written to a persistent storage.", "It ensures a field is always in memory and never written to disk.", "It makes a field immutable.", "It makes a field accessible only within the same package."],
    "answer": "It marks a field as not to be serialized when an object is written to a persistent storage."
  },
  {
    "question": "Explain the concept of 'Lambda Expressions' in Java 8 and their benefits.",
    "options": ["Provide a concise way to represent anonymous functions, improving code readability and enabling functional programming paradigms", "A new syntax for declaring variables in Java", "A mechanism for defining classes dynamically at runtime", "Used for creating new threads more efficiently"],
    "answer": "Provide a concise way to represent anonymous functions, improving code readability and enabling functional programming paradigms"
  },
  {
    "question": "What is the difference between `interface` and `abstract class` in Java?",
    "options": ["`interface` can have method implementations, `abstract class` cannot.", "`abstract class` can have constructors, `interface` cannot.", "`abstract class` can inherit from another class, `interface` can only inherit from another `interface`.", "There is no difference between them."],
    "answer": "`abstract class` can have constructors, `interface` cannot."
  },
  {
    "question": "What is a 'Checked Exception' and provide an example.",
    "options": ["An exception that must be handled or declared at compile time (e.g., `IOException`).", "An exception that is for programmer errors (e.g., `NullPointerException`).", "An exception that is for external errors (e.g., `ArrayIndexOutOfBoundsException`).", "An exception that is not part of the `RuntimeException` class hierarchy."],
    "answer": "An exception that must be handled or declared at compile time (e.g., `IOException`)."
  },
  {
    "question": "Explain the concept of 'Type Inference' in Java 8.",
    "options": ["The compiler's ability to deduce the types of expressions, reducing boilerplate code (e.g., `var` keyword, `ArrayList<>()` empty diamond operator).", "A mechanism for enforcing strict type checking at runtime.", "A way to dynamically change the type of a variable.", "The process of explicitly specifying all types in code."],
    "answer": "The compiler's ability to deduce the types of expressions, reducing boilerplate code (e.g., `var` keyword, `ArrayList<>()` empty diamond operator)."
  },
  {
    "question": "What is the 'Reflection API' in Java, and what are its capabilities?",
    "options": ["Allows a Java program to inspect and manipulate classes, interfaces, fields, and methods at runtime (e.g., creating objects, invoking methods dynamically).", "Used for encrypting data in Java applications.", "A tool for debugging memory leaks.", "A framework for building network applications."],
    "answer": "Allows a Java program to inspect and manipulate classes, interfaces, fields, and methods at runtime (e.g., creating objects, invoking methods dynamically)."
  },
  {
    "question": "Differentiate between `String`, `StringBuilder`, and `StringBuffer`.",
    "options": ["`String` is mutable, while `StringBuilder` and `StringBuffer` are immutable.", "`String` and `StringBuilder` are thread-safe, while `StringBuffer` is not.", "`String` is immutable, `StringBuilder` is mutable and not synchronized, `StringBuffer` is mutable and synchronized.", "`StringBuilder` is faster than `StringBuffer` for multi-threaded applications."],
    "answer": "`String` is immutable, `StringBuilder` is mutable and not synchronized, `StringBuffer` is mutable and synchronized."
  },
  {
    "question": "What is the difference between `stack` and `heap` memory in Java?",
    "options": ["`stack` stores local variables and method calls, `heap` stores all objects and their instance variables.", "`stack` is where primitive data types are stored, `heap` is where arrays are stored.", "`stack` is for global variables, `heap` is for local variables.", "There is no difference; they are the same memory space."],
    "answer": "`stack` stores local variables and method calls, `heap` stores all objects and their instance variables."
  },
  {
    "question": "Explain 'Serialization' and 'Deserialization' in Java.",
    "options": ["Serialization is the process of writing an object's state to a byte stream, and deserialization is the process of recreating the object from that byte stream.", "Serialization is the process of converting an object to a string, and deserialization is the process of converting a string to an object.", "Serialization is only for network communication, while deserialization is only for file I/O.", "They are used for managing memory allocation for objects."],
    "answer": "Serialization is the process of writing an object's state to a byte stream, and deserialization is the process of recreating the object from that byte stream."
  },
  {
    "question": "How can you achieve thread safety in Java?",
    "options": ["By using the `synchronized` keyword, `Lock` objects, and thread-safe collections like `ConcurrentHashMap`.", "By using only primitive data types.", "By avoiding the use of multiple threads.", "By making all variables `final`."],
    "answer": "By using the `synchronized` keyword, `Lock` objects, and thread-safe collections like `ConcurrentHashMap`."
  },
  {
    "question": "What is the difference between `throw` and `throws` in Java?",
    "options": ["`throw` is used to declare an exception, `throws` is used to throw an exception.", "`throw` is used to create a new exception, `throws` is used to rethrow an exception.", "`throw` is used to explicitly throw a single exception, `throws` is used in a method signature to declare which exceptions the method can throw.", "`throws` is a keyword for a method, while `throw` is a keyword for a class."],
    "answer": "`throw` is used to explicitly throw a single exception, `throws` is used in a method signature to declare which exceptions the method can throw."
  },
  {
    "question": "What is the `main` method in Java, and why is it `public static void`?",
    "options": ["It is the entry point for the JVM to start execution, and it must be `public` to be accessible, `static` to be called without an instance, and `void` because it doesn't return a value.", "It is a method for handling exceptions.", "It is a method for defining global variables.", "It is a constructor for the main class."],
    "answer": "It is the entry point for the JVM to start execution, and it must be `public` to be accessible, `static` to be called without an instance, and `void` because it doesn't return a value."
  },
  {
    "question": "Explain the concept of 'Method Overloading' and 'Method Overriding'.",
    "options": ["Overloading is when methods have the same name but different parameters; Overriding is when a subclass provides its own implementation of a method already defined in its parent class.", "Overloading and Overriding are the same thing.", "Overloading is for inheritance, Overriding is for polymorphism.", "Overloading is at runtime, Overriding is at compile time."],
    "answer": "Overloading is when methods have the same name but different parameters; Overriding is when a subclass provides its own implementation of a method already defined in its parent class."
  },
  {
    "question": "What is 'Autoboxing' and 'Unboxing' in Java?",
    "options": ["Autoboxing is the automatic conversion of a primitive data type to its corresponding wrapper class, and unboxing is the reverse process.", "Autoboxing is the manual conversion of a primitive data type to its corresponding wrapper class, and unboxing is the reverse process.", "Autoboxing is the process of creating a new object, while unboxing is the process of deleting an object.", "They are used for managing network connections."],
    "answer": "Autoboxing is the automatic conversion of a primitive data type to its corresponding wrapper class, and unboxing is the reverse process."
  },
  {
    "question": "Explain the purpose of the `super` keyword.",
    "options": ["It is used to refer to a superclass object.", "It is used to call the superclass's constructor or a method that is overridden by the subclass.", "It is used to refer to a subclass object.", "It is used to create a new object."],
    "answer": "It is used to call the superclass's constructor or a method that is overridden by the subclass."
  },
  {
    "question": "What is the difference between `Exception` and `Error` in Java?",
    "options": ["`Exception`s can be handled by the program, while `Error`s are fatal and cannot be handled (e.g., `OutOfMemoryError`).", "`Error`s can be handled by the program, while `Exception`s are fatal and cannot be handled.", "`Exception`s are for external errors, `Error`s are for programmer errors.", "There is no difference; they are both the same."],
    "answer": "`Exception`s can be handled by the program, while `Error`s are fatal and cannot be handled (e.g., `OutOfMemoryError`)."
  },
  {
    "question": "What is the 'Singleton Design Pattern' and how is it implemented?",
    "options": ["A design pattern that restricts the instantiation of a class to one object, typically implemented with a private constructor and a static method that returns the instance.", "A design pattern that allows a class to have multiple objects.", "A design pattern that is used for network communication.", "A design pattern that is used for database transactions."],
    "answer": "A design pattern that restricts the instantiation of a class to one object, typically implemented with a private constructor and a static method that returns the instance."
  },
  {
    "question": "Explain the 'Builder Design Pattern'.",
    "options": ["A design pattern that provides a step-by-step approach to create a complex object, allowing for a clearer, more readable way to build objects with many optional parameters.", "A design pattern for creating single objects.", "A design pattern for creating immutable objects.", "A design pattern for creating multiple objects."],
    "answer": "A design pattern that provides a step-by-step approach to create a complex object, allowing for a clearer, more readable way to build objects with many optional parameters."
  },
  {
    "question": "What is the purpose of `sealed` classes?",
    "options": ["They allow a class or interface to restrict which other classes or interfaces can extend or implement it.", "They prevent a class from being inherited.", "They ensure a class is always serialized.", "They make a class's methods final."],
    "answer": "They allow a class or interface to restrict which other classes or interfaces can extend or implement it."
  },
  {
    "question": "What is a 'Daemon Thread'?",
    "options": ["A thread that is independent of other threads.", "A thread that runs in the background and is terminated by the JVM when all user threads are finished.", "A thread that is used for network communication.", "A thread that is used for database transactions."],
    "answer": "A thread that runs in the background and is terminated by the JVM when all user threads are finished."
  },
  {
    "question": "What is the difference between `Path` and `File` in Java NIO.2?",
    "options": ["`Path` is for abstract paths that are not necessarily tied to a file system, while `File` is for a concrete file in the file system.", "There is no difference between them.", "`Path` is for file I/O, `File` is for network I/O.", "`File` is for abstract paths that are not necessarily tied to a file system, while `Path` is for a concrete file in the file system."],
    "answer": "`Path` is for abstract paths that are not necessarily tied to a file system, while `File` is for a concrete file in the file system."
  },
  {
    "question": "What is the purpose of the 'Service Provider Interface (SPI)' in Java, and give an example.",
    "options": ["A mechanism for providing extensible functionality, where an interface is defined and implementations can be discovered and loaded at runtime (e.g., JDBC drivers, logging frameworks)", "A way to define abstract classes", "An interface for defining microservices", "A protocol for inter-application communication"],
    "answer": "A mechanism for providing extensible functionality, where an interface is defined and implementations can be discovered and loaded at runtime (e.g., JDBC drivers, logging frameworks)"
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
  },
  {
    "question": "What is the difference between `==` and `.equals()`?",
    "options": ["`==` compares object references, while `.equals()` compares the content of the objects.", "`==` and `.equals()` are the same for all objects.", "`==` compares the content of the objects, while `.equals()` compares object references.", "`equals()` is used for primitive types, while `==` is used for objects."],
    "answer": "`==` compares object references, while `.equals()` compares the content of the objects."
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
