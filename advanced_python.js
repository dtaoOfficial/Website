let questions = [
  {
    "question": "What is the output of this Python code? \n\ndef outer_function(x):\n    def inner_function(y):\n        return x + y\n    return inner_function\n\nclosure = outer_function(10)\nprint(closure(5))\n",
    "options": ["10", "5", "15", "Error"],
    "answer": "15"
  },
  {
    "question": "Which of the following correctly defines a class-based decorator `log_calls` that prints arguments and return value of the decorated function?",
    "options": [
      "class log_calls: \n    def __init__(self, func): self.func = func \n    def __call__(self, *args, **kwargs): print(f'Calling {self.func.__name__} with {args}'); result = self.func(*args, **kwargs); print(f'{self.func.__name__} returned {result}'); return result",
      "def log_calls(func): return func",
      "class log_calls: \n    def decorate(self, func): return func",
      "def log_calls(func): @wraps(func) def wrapper(*args, **kwargs): ... return wrapper"
    ],
    "answer": "class log_calls: \n    def __init__(self, func): self.func = func \n    def __call__(self, *args, **kwargs): print(f'Calling {self.func.__name__} with {args}'); result = self.func(*args, **kwargs); print(f'{self.func.__name__} returned {result}'); return result"
  },
  {
    "question": "What is the primary benefit of using `functools.lru_cache`?",
    "options": [
      "Encrypting function parameters.",
      "Automatically optimizing code for parallel execution.",
      "Memoizing (caching) results of expensive function calls to improve performance.",
      "Enforcing strict type checking for function arguments."
    ],
    "answer": "Memoizing (caching) results of expensive function calls to improve performance."
  },
  {
    "question": "Consider the following code: \n\nclass MyContext:\n    def __enter__(self):\n        print('Entering')\n        return self\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print('Exiting')\n\nwith MyContext():\n    print('Inside')\n\nWhat is the output?",
    "options": ["Entering\nInside\nExiting", "Entering\nExiting\nInside", "Inside\nEntering\nExiting", "Error"],
    "answer": "Entering\nInside\nExiting"
  },
  {
    "question": "Which Python module is typically used for defining Abstract Base Classes (ABCs)?",
    "options": ["`collections`", "`types`", "`abc`", "`functools`"],
    "answer": "`abc`"
  },
  {
    "question": "What is the output of this code? \n\ndef fibonacci_generator():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\ngen = fibonacci_generator()\nprint(next(gen))\nprint(next(gen))\nprint(next(gen))\n",
    "options": ["0\n1\n1", "0\n1\n2", "1\n1\n2", "Error"],
    "answer": "0\n1\n1"
  },
  {
    "question": "What does `asyncio.sleep(0)` do in an `asyncio` program?",
    "options": [
      "Pauses execution for 0 seconds (effectively doing nothing).",
      "Immediately switches control to another runnable coroutine in the event loop.",
      "Raises an error because sleep time cannot be zero.",
      "Exits the program if no other coroutines are waiting."
    ],
    "answer": "Immediately switches control to another runnable coroutine in the event loop."
  },
  {
    "question": "Which of the following correctly uses a generator expression to sum even numbers up to 100?",
    "options": [
      "sum(x for x in range(101) if x % 2 == 0)",
      "sum([x for x in range(101) if x % 2 == 0])",
      "sum(x for x in range(101) even x)",
      "sum(lambda x: x % 2 == 0, range(101))"
    ],
    "answer": "sum(x for x in range(101) if x % 2 == 0)"
  },
  {
    "question": "What is the purpose of `WeakRef` objects in Python?",
    "options": [
      "To create encrypted references for security.",
      "To ensure an object is never garbage collected.",
      "To reference an object without preventing its garbage collection, useful for caches.",
      "To create copies of objects with modified behavior."
    ],
    "answer": "To reference an object without preventing its garbage collection, useful for caches or observers."
  },
  {
    "question": "Given the class `class MyClass: pass`, what is the output of `type(MyClass)`?",
    "options": ["`MyClass`", "`<class 'type'>`", "`<class 'object'>`", "`None`"],
    "answer": "`<class 'type'>`"
  },
  {
    "question": "What is the output of the following code? \n\nclass A:\n    def method(self):\n        print('A method')\n\nclass B(A):\n    def method(self):\n        print('B method')\n\nclass C(A):\n    def method(self):\n        print('C method')\n\nclass D(B, C):\n    pass\n\nd = D()\nd.method()\n",
    "options": ["A method", "B method", "C method", "Error"],
    "answer": "B method"
  },
  {
    "question": "Which module in Python is typically used for high-performance array operations?",
    "options": ["`array`", "`numpy`", "`list_ops`", "`fast_array`"],
    "answer": "`numpy`"
  },
  {
    "question": "What is the output of this code snippet? \n\nimport asyncio\n\nasync def my_coroutine():\n    print('Hello')\n    await asyncio.sleep(0.1)\n    print('World')\n\nasyncio.run(my_coroutine())\n",
    "options": ["Hello\nWorld", "World\nHello", "Hello", "Error"],
    "answer": "Hello\nWorld"
  },
  {
    "question": "What does `super().__init__()` typically do in a child class's `__init__` method in multiple inheritance?",
    "options": [
      "Calls the `__init__` method of all parent classes in an arbitrary order.",
      "Calls the `__init__` method of the first parent listed in the class definition.",
      "Calls the `__init__` method of the next parent class in the MRO (Method Resolution Order).",
      "Initializes the current instance without calling any parent constructors."
    ],
    "answer": "Calls the `__init__` method of the next parent class in the MRO (Method Resolution Order)."
  },
  {
    "question": "What is a 'slot' in `__slots__` of a Python class?",
    "options": [
      "A reserved memory block for the class itself.",
      "A predefined attribute name for instances that bypasses the instance `__dict__`.",
      "A placeholder for a method that needs to be implemented by subclasses.",
      "A way to define global variables within a class."
    ],
    "answer": "A predefined attribute name for instances that bypasses the instance `__dict__`."
  },
  {
    "question": "What is the output of `issubclass(bool, int)`?",
    "options": ["True", "False", "Error", "None"],
    "answer": "True"
  },
  {
    "question": "Which of these is generally more memory-efficient for very large sequences?",
    "options": ["A list comprehension `[x for x in data]`", "A generator expression `(x for x in data)`", "A set comprehension `{x for x in data}`", "A dictionary comprehension `{k:v for k,v in data}`"],
    "answer": "A generator expression `(x for x in data)`"
  },
  {
    "question": "What is the purpose of `typing.Protocol` in Python?",
    "options": [
      "To enforce strict runtime type checking.",
      "To define informal interfaces or 'structural subtyping' for type checkers.",
      "To declare abstract methods that must be overridden.",
      "To create new built-in data types."
    ],
    "answer": "To define informal interfaces or 'structural subtyping' for type checkers."
  },
  {
    "question": "What is the result of `type(None)`?",
    "options": ["`NoneType`", "`<class 'NoneType'>`", "`Null`", "`object`"],
    "answer": "`<class 'NoneType'>`"
  },
  {
    "question": "What does `asyncio.gather(*coros)` do?",
    "options": [
      "Executes coroutines sequentially and returns the result of the last one.",
      "Runs coroutines concurrently and waits for all of them to complete, returning their results in order.",
      "Creates a new thread for each coroutine.",
      "Raises an error if coroutines are not ready."
    ],
    "answer": "Runs coroutines concurrently and waits for all of them to complete, returning their results in order."
  },
  {
    "question": "What is a 'mixin' class in Python, and how is it used?",
    "options": [
      "A class that must be instantiated directly.",
      "A class designed to provide specific functionality to other classes via multiple inheritance, without being a standalone entity.",
      "A class used for creating database schemas.",
      "A class that defines global constants."
    ],
    "answer": "A class designed to provide specific functionality to other classes via multiple inheritance, without being a standalone entity."
  },
  {
    "question": "Which standard library module is typically used for persistent storage of Python objects (serialization/deserialization)?",
    "options": ["`json`", "`csv`", "`xml`", "`pickle`"],
    "answer": "`pickle`"
  },
  {
    "question": "What is the main limitation of using `threading` for CPU-bound tasks in CPython?",
    "options": [
      "Threads are much slower than processes.",
      "Lack of support for thread synchronization primitives.",
      "The Global Interpreter Lock (GIL) prevents true parallel execution of Python bytecode.",
      "Difficulty in sharing data between threads."
    ],
    "answer": "The Global Interpreter Lock (GIL) prevents true parallel execution of Python bytecode."
  },
  {
    "question": "What is the primary benefit of using Python's `set` type over a `list` when checking for membership (e.g., `item in collection`)?",
    "options": [
      "Sets preserve insertion order, making lookups faster.",
      "Sets store duplicate elements, improving lookup efficiency.",
      "Sets provide O(1) average-case time complexity for membership testing due to hashing.",
      "Lists automatically sort elements, speeding up searches."
    ],
    "answer": "Sets provide O(1) average-case time complexity for membership testing due to hashing."
  },
  {
    "question": "How can you prevent a class from being inherited in Python?",
    "options": [
      "By adding `final` keyword before class name.",
      "By overriding `__subclasshook__` to always return `False` and using `metaclass=abc.ABCMeta`.",
      "By making all methods static.",
      "Python does not provide a direct mechanism to prevent inheritance."
    ],
    "answer": "Python does not provide a direct mechanism to prevent inheritance."
  },
  {
    "question": "What is the purpose of `pdb` in Python?",
    "options": [
      "A module for creating PDF documents.",
      "A built-in debugger for interactive debugging of Python programs.",
      "A database connection library.",
      "A package distribution utility."
    ],
    "answer": "A built-in debugger for interactive debugging of Python programs."
  },
  {
    "question": "What does the `yield from` expression do in a generator?",
    "options": [
      "It raises an exception if the generator is exhausted.",
      "It delegates iteration to a subgenerator or iterable.",
      "It returns a list of all items from the generator.",
      "It pauses the current generator indefinitely."
    ],
    "answer": "It delegates iteration to a subgenerator or iterable."
  },
  {
    "question": "Which of these is NOT a common way to achieve concurrency in Python?",
    "options": ["`threading`", "`multiprocessing`", "`asyncio`", "`subprocess`"],
    "answer": "`subprocess`"
  },
  {
    "question": "How does `sys.path` influence Python's module import mechanism?",
    "options": [
      "It is a list of directories where Python searches for modules and packages.",
      "It contains the names of all currently loaded modules.",
      "It defines the order in which functions are executed within a script.",
      "It specifies the version of the Python interpreter to use."
    ],
    "answer": "It is a list of directories where Python searches for modules and packages."
  },
  {
    "question": "What is a 'dunder' method (`__method__`) primarily used for?",
    "options": [
      "To define private methods that cannot be accessed externally.",
      "To implement special behaviors that allow Python objects to interact with built-in functions and operators (e.g., `__len__`, `__add__`).",
      "To create abstract methods that must be overridden.",
      "To store metadata about a class."
    ],
    "answer": "To implement special behaviors that allow Python objects to interact with built-in functions and operators (e.g., `__len__`, `__add__`)."
  },
  {
    "question": "What is a 'closure' in Python?",
    "options": [
      "A function that automatically closes external file handles.",
      "A nested function that retains access to variables from its enclosing lexical scope even after the outer function has finished executing.",
      "A function that is only called once per program execution.",
      "A method for securing data within a function."
    ],
    "answer": "A nested function that retains access to variables from its enclosing lexical scope even after the outer function has finished executing."
  },
  {
    "question": "When would you prefer `asyncio` over `threading` for a networking application?",
    "options": [
      "When the application is CPU-bound.",
      "When the application is I/O-bound and benefits from non-blocking operations and single-threaded concurrency.",
      "When true parallelism across multiple CPU cores is required.",
      "When dealing with very few, long-running network requests."
    ],
    "answer": "When the application is I/O-bound and benefits from non-blocking operations and single-threaded concurrency."
  },
  {
    "question": "What is the main advantage of using `collections.deque` over a standard list for operations like `append` and `pop` from both ends?",
    "options": [
      "It has a fixed capacity.",
      "It is mutable, unlike lists.",
      "It provides O(1) time complexity for appends and pops from both ends, while lists are O(N) for operations at the beginning.",
      "It automatically sorts elements during insertion."
    ],
    "answer": "It provides O(1) time complexity for appends and pops from both ends, while lists are O(N) for operations at the beginning."
  },
  {
    "question": "Which built-in function returns an iterator from an iterable?",
    "options": ["`list()`", "`iter()`", "`next()`", "`enumerate()`"],
    "answer": "`iter()`"
  },
  {
    "question": "What is the purpose of `__slots__` in a Python class?",
    "options": [
      "To define methods that cannot be overridden.",
      "To pre-allocate memory for attributes, potentially reducing memory consumption and speeding up attribute access.",
      "To make a class immutable after initialization.",
      "To enable lazy loading of attributes."
    ],
    "answer": "To pre-allocate memory for attributes, potentially reducing memory consumption and speeding up attribute access."
  },
  {
    "question": "Explain 'duck typing' in Python with a brief example.",
    "options": [
      "A strict type-checking mechanism where types are explicitly defined.",
      "If an object walks like a duck and quacks like a duck, then it is a duck (focus on behavior rather than explicit type hierarchy).",
      "A process of converting one object type to another.",
      "A method for dynamically generating new classes at runtime."
    ],
    "answer": "If an object walks like a duck and quacks like a duck, then it is a duck (focus on behavior rather than explicit type hierarchy)."
  },
  {
    "question": "What is the difference between `is` and `==` in Python?",
    "options": [
      "`is` checks for value equality; `==` checks for object identity.",
      "`is` checks for object identity (same memory address); `==` checks for value equality.",
      "They are interchangeable for all data types.",
      "`is` is used for comparing only primitive types, `==` for complex objects."
    ],
    "answer": "`is` checks for object identity (same memory address); `==` checks for value equality."
  },
  {
    "question": "How can you debug a Python program interactively from the command line?",
    "options": ["Using `print()` statements extensively.", "Using the `logging` module.", "Using `pdb` (Python Debugger).", "By rewriting the code in C++."],
    "answer": "Using `pdb` (Python Debugger)."
  },
  {
    "question": "What is the main security concern when using `pickle.load()` on untrusted data?",
    "options": [
      "Data corruption due to incorrect formatting.",
      "Slow performance leading to denial of service.",
      "Possibility of arbitrary code execution due to malicious serialized objects.",
      "Memory leaks from improperly unpickled objects."
    ],
    "answer": "Possibility of arbitrary code execution due to malicious serialized objects."
  },
  {
    "question": "What does `type('hello')` return?",
    "options": ["`string`", "`<class 'str'>`", "`char`", "`text`"],
    "answer": "`<class 'str'>`"
  },
  {
    "question": "Which of these Python data structures guarantees element uniqueness and is unordered?",
    "options": ["`list`", "`tuple`", "`set`", "`dict`"],
    "answer": "`set`"
  },
  {
    "question": "What is a 'f-string'?",
    "options": [
      "A fixed-length string that cannot be modified.",
      "A formatted string literal allowing embedded expressions for concise string interpolation.",
      "A string used exclusively for file paths.",
      "A string that is automatically compressed."
    ],
    "answer": "A formatted string literal allowing embedded expressions for concise string interpolation."
  },
  {
    "question": "How does `multiprocessing` overcome the GIL's limitation for CPU-bound tasks?",
    "options": [
      "It disables the GIL for all processes.",
      "It uses threads more efficiently within a single process.",
      "It launches separate Python interpreter processes, each with its own GIL, allowing true parallelism.",
      "It converts Python code directly to machine code."
    ],
    "answer": "It launches separate Python interpreter processes, each with its own GIL, allowing true parallelism."
  },
  {
    "question": "What is the primary use case for `collections.namedtuple`?",
    "options": [
      "Creating immutable lists of fixed size.",
      "Defining custom exceptions for error handling.",
      "Creating tuple-like objects with named fields for improved readability and self-documentation.",
      "Implementing custom descriptors for attribute access."
    ],
    "answer": "Creating tuple-like objects with named fields for improved readability and self-documentation."
  },
  {
    "question": "What is the difference between `range()` and `xrange()` (in Python 2, conceptually similar to generators in Python 3)?",
    "options": [
      "`range()` returns an iterator, `xrange()` returns a list.",
      "`range()` returns a list, `xrange()` returns a generator (iterator).",
      "They are identical in Python 3.",
      "`xrange()` is more memory-intensive."
    ],
    "answer": "`range()` returns a list, `xrange()` returns a generator (iterator)."
  },
  {
    "question": "What is the output of the following code regarding `mro`? \n\nclass A: pass\nclass B(A): pass\nclass C(A): pass\nclass D(B, C): pass\nprint(D.__mro__)\n",
    "options": [
      "(`D`, `B`, `C`, `A`, `object`)",
      "(`D`, `C`, `B`, `A`, `object`)",
      "(`D`, `B`, `A`, `C`, `object`)",
      "Error"
    ],
    "answer": "(`D`, `B`, `C`, `A`, `object`)"
  },
  {
    "question": "What is 'reflection' or 'introspection' in Python?",
    "options": [
      "The ability of a program to execute code in parallel.",
      "The ability of a program to encrypt and decrypt data.",
      "The ability of a program to examine and modify its own structure and behavior at runtime.",
      "The process of converting Python code to machine code."
    ],
    "answer": "The ability of a program to examine and modify its own structure and behavior at runtime."
  },
  {
    "question": "Which of these is a Python decorator often used for access control or authentication in web frameworks?",
    "options": ["`@staticmethod`", "`@classmethod`", "`@login_required` (conceptual)", "`@property`"],
    "answer": "`@login_required` (conceptual)"
  },
  {
    "question": "What is the primary role of `pip` in the Python ecosystem?",
    "options": [
      "To build Python packages from source code.",
      "To create virtual environments for Python projects.",
      "To install and manage Python packages from PyPI and other sources.",
      "To convert Python scripts into executable applications."
    ],
    "answer": "To install and manage Python packages from PyPI and other sources."
  },
  {
    "question": "What is `sys.getrefcount(obj)` useful for?",
    "options": [
      "Getting the size of an object in memory.",
      "Determining the number of references to an object, useful for debugging memory leaks.",
      "Counting the number of methods in an object.",
      "Getting the current value of an object."
    ],
    "answer": "Determining the number of references to an object, useful for debugging memory leaks."
  },
  {
    "question": "What is the purpose of `__slots__` in optimizing memory usage for many instances of a class?",
    "options": [
      "It adds a `__dict__` to each instance for faster attribute access.",
      "It prevents the creation of an instance `__dict__`, storing attributes directly in the instance's fixed-size array.",
      "It forces all instances to share the same attributes.",
      "It enables lazy loading of attributes, reducing initial memory overhead."
    ],
    "answer": "It prevents the creation of an instance `__dict__`, storing attributes directly in the instance's fixed-size array."
  },
  {
    "question": "What is a 'type hint' in Python?",
    "options": [
      "A mandatory declaration of a variable's type that is enforced at runtime.",
      "An annotation indicating the expected type of a variable, function parameter, or return value, primarily for static analysis and readability.",
      "A mechanism to create new custom data types.",
      "A way to cast variables to different types."
    ],
    "answer": "An annotation indicating the expected type of a variable, function parameter, or return value, primarily for static analysis and readability."
  },
  {
    "question": "Which module would you typically use for logging messages in a structured way in a large Python application?",
    "options": ["`print()`", "`sys.stdout`", "`logging`", "`debug_messages`"],
    "answer": "`logging`"
  },
  {
    "question": "What is the concept of 'lazy evaluation' in Python, often associated with generators?",
    "options": [
      "Executing all operations on a dataset upfront for faster access.",
      "Evaluating expressions only when their value is actually needed, saving computation and memory.",
      "Delaying program startup until all modules are loaded.",
      "Performing computations in the background on a separate thread."
    ],
    "answer": "Evaluating expressions only when their value is actually needed, saving computation and memory."
  },
  {
    "question": "How do you define a custom exception class in Python?",
    "options": [
      "By using the `raise` keyword.",
      "By inheriting from the built-in `Exception` class or its subclasses.",
      "By using the `try-except` block.",
      "Custom exceptions are not supported in Python."
    ],
    "answer": "By inheriting from the built-in `Exception` class or its subclasses."
  },
  {
    "question": "What is the key benefit of using `f-strings` over older string formatting methods (e.g., `%` operator or `str.format()`)?",
    "options": [
      "They are always immutable.",
      "They provide more concise, readable, and often faster string interpolation.",
      "They are compatible with Python 2.",
      "They automatically handle internationalization."
    ],
    "answer": "They provide more concise, readable, and often faster string interpolation."
  },
  {
    "question": "What is the purpose of the `collections.Counter` class?",
    "options": [
      "To count occurrences of items in an iterable, returning a dictionary-like object.",
      "To perform mathematical operations on numbers.",
      "To manage concurrent access to shared resources.",
      "To create unique identifiers for objects."
    ],
    "answer": "To count occurrences of items in an iterable, returning a dictionary-like object."
  },
  {
    "question": "Which of these is a common pattern for managing shared resources safely in a multithreaded application?",
    "options": [
      "Using global variables without any synchronization.",
      "Employing `threading.Lock` or `threading.Semaphore` to protect critical sections.",
      "Relying on the GIL to prevent race conditions.",
      "Duplicating resources for each thread."
    ],
    "answer": "Employing `threading.Lock` or `threading.Semaphore` to protect critical sections."
  },
  {
    "question": "What does the `pass` statement do in Python?",
    "options": ["It acts as a placeholder, doing nothing.", "It raises an exception.", "It terminates the program.", "It skips the current iteration of a loop."],
    "answer": "It acts as a placeholder, doing nothing."
  },
  {
    "question": "What is a 'Decorator Factory' in Python?",
    "options": [
      "A decorator that manufactures new instances of a class.",
      "A function that returns a decorator, allowing the decorator to accept arguments.",
      "A design pattern for creating multiple decorators from a single base.",
      "A built-in Python function for creating decorators."
    ],
    "answer": "A function that returns a decorator, allowing the decorator to accept arguments."
  },
  {
    "question": "What is the purpose of `pip install -e .` from a project directory?",
    "options": [
      "It installs the package in 'editable' mode, linking the source directory so changes are immediately reflected without reinstallation.",
      "It uninstalls the package from the current environment.",
      "It compiles the package into an executable file.",
      "It installs only the core dependencies of the package."
    ],
    "answer": "It installs the package in 'editable' mode, linking the source directory so changes are immediately reflected without reinstallation."
  },
  {
    "question": "What is the difference between a `staticmethod` and a `classmethod`?",
    "options": [
      "`staticmethod` receives `self`, `classmethod` receives `cls`.",
      "`staticmethod` takes no implicit first argument, `classmethod` takes the class itself (`cls`).",
      "`staticmethod` can access instance attributes, `classmethod` cannot.",
      "There is no functional difference."
    ],
    "answer": "`staticmethod` takes no implicit first argument, `classmethod` takes the class itself (`cls`)."
  },
  {
    "question": "What is the output of this dictionary comprehension? \n\nmy_dict = {k: v*2 for k, v in {'a': 1, 'b': 2}.items()}\nprint(my_dict)\n",
    "options": ["`{'a': 1, 'b': 2}`", "`{'a': 2, 'b': 4}`", "`{1: 'a', 2: 'b'}`", "Error"],
    "answer": "`{'a': 2, 'b': 4}`"
  },
  {
    "question": "When would you use `__getattr__` vs `__getattribute__` for attribute access customization?",
    "options": [
      "`__getattr__` is called for *all* attribute access; `__getattribute__` only for non-existent ones.",
      "`__getattr__` is called only for non-existent attributes; `__getattribute__` is called for *all* attribute access.",
      "They are identical and interchangeable.",
      "`__getattr__` is for class attributes; `__getattribute__` for instance attributes."
    ],
    "answer": "`__getattr__` is called only for non-existent attributes; `__getattribute__` is called for *all* attribute access."
  },
  {
    "question": "Which Python module provides tools for working with complex numbers?",
    "options": ["`math`", "`cmath`", "`complex_ops`", "`numpy`"],
    "answer": "`cmath`"
  },
  {
    "question": "What is the purpose of `contextvars` (Context Variables, PEP 567) in Python?",
    "options": [
      "To define global constants that cannot be changed.",
      "To store thread-local data that automatically propagates across asynchronous execution contexts (e.g., coroutines).",
      "To manage persistent storage for application settings.",
      "To create temporary variables for function calls."
    ],
    "answer": "To store thread-local data that automatically propagates across asynchronous execution contexts (e.g., coroutines)."
  },
  {
    "question": "What is the result of `('python') * 3`?",
    "options": ["`pythonpythonpython`", "`('python', 'python', 'python')`", "`Error`", "`python * 3`"],
    "answer": "`pythonpythonpython`"
  },
  {
    "question": "Which of these is the most appropriate way to handle a file that might or might not exist?",
    "options": [
      "Using a `try-except FileNotFoundError` block around `open()` and `read()`.",
      "Always assuming the file exists.",
      "Using `if os.path.exists()` before `open()` without `try-except`.",
      "Ignoring file errors completely."
    ],
    "answer": "Using a `try-except FileNotFoundError` block around `open()` and `read()`."
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
