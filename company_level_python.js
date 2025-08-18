let questions = [
  {
    "question": "Basic Theory: What are the key differences between a list and a tuple in Python?",
    "options": [
      "Lists are immutable, tuples are mutable.",
      "Lists are ordered and mutable, tuples are ordered and immutable.",
      "Lists can store only homogeneous data, tuples can store heterogeneous data.",
      "Tuples are dynamically sized, lists are fixed size."
    ],
    "answer": "Lists are ordered and mutable, tuples are ordered and immutable."
  },
  {
    "question": "Basic Coding: What will be the output of the following code?\n\nmy_list = [1, 2, 3]\nmy_list.append([4, 5])\nprint(len(my_list))",
    "options": ["3", "4", "5", "Error"],
    "answer": "4"
  },
  {
    "question": "Intermediate Theory: Explain what a decorator is in Python and provide a simple use case.",
    "options": [
      "A decorator is a function that creates new classes dynamically.",
      "A decorator is a function that takes another function as an argument, adds some functionality, and returns a new function without modifying the original function's code. Use case: logging function calls.",
      "A decorator is a special keyword used for looping.",
      "A decorator is a type of variable that holds multiple values."
    ],
    "answer": "A decorator is a function that takes another function as an argument, adds some functionality, and returns a new function without modifying the original function's code. Use case: logging function calls."
  },
  {
    "question": "Intermediate Coding: Write a list comprehension to create a new list containing squares of only the even numbers from 0 to 9.",
    "options": [
      "`[x**2 for x in range(10) if x % 2 == 0]`",
      "`[x**2 for x in range(10)]`",
      "`[x for x in range(10) if x % 2 == 0]`",
      "`[x*2 for x in range(10) if x % 2 != 0]`"
    ],
    "answer": "`[x**2 for x in range(10) if x % 2 == 0]`"
  },
  {
    "question": "Advanced Theory: Explain the Python Global Interpreter Lock (GIL). How does it affect concurrency in Python, and what are common ways to work around its limitations?",
    "options": [
      "The GIL ensures true parallel execution of Python bytecode across multiple CPU cores. It does not affect concurrency.",
      "The GIL is a mutex that protects access to Python objects, preventing multiple native threads from executing Python bytecodes simultaneously. It limits true parallelism for CPU-bound tasks. Workarounds include `multiprocessing` for CPU-bound tasks and `asyncio` for I/O-bound tasks.",
      "The GIL is a security feature that prevents unauthorized code execution in multi-threaded applications.",
      "The GIL is only relevant for Python 2; it has been removed in Python 3."
    ],
    "answer": "The GIL is a mutex that protects access to Python objects, preventing multiple native threads from executing Python bytecodes simultaneously. It limits true parallelism for CPU-bound tasks. Workarounds include `multiprocessing` for CPU-bound tasks and `asyncio` for I/O-bound tasks."
  },
  {
    "question": "Advanced Coding: Implement an asynchronous function `fetch_url(url)` that simulates fetching a URL with a delay and returns its content (just a string 'Content from [URL]').",
    "options": [
      "import requests\ndef fetch_url(url):\n    return requests.get(url).text",
      "import asyncio\nasync def fetch_url(url):\n    print(f'Fetching {url}...')\n    await asyncio.sleep(0.1) # Simulate network delay\n    return f'Content from {url}'",
      "import threading\ndef fetch_url(url):\n    thread = threading.Thread(target=lambda: f'Content from {url}')\n    thread.start()\n    return 'Started fetching'",
      "async def fetch_url(url):\n    return f'Content from {url}'"
    ],
    "answer": "import asyncio\nasync def fetch_url(url):\n    print(f'Fetching {url}...')\n    await asyncio.sleep(0.1) # Simulate network delay\n    return f'Content from {url}'"
  },
  {
    "question": "Basic Theory: What is the purpose of the `if __name__ == \"__main__\":` block in Python?",
    "options": [
      "It checks if the Python interpreter is running in debug mode.",
      "It indicates that the enclosed code should only run when the script is executed directly, not when imported as a module.",
      "It's used for defining global variables that are only accessible within the main function.",
      "It's a mandatory part of every Python program."
    ],
    "answer": "It indicates that the enclosed code should only run when the script is executed directly, not when imported as a module."
  },
  {
    "question": "Basic Coding: What is the output of `print(type([]))` and `print(type({}))`?",
    "options": [
      "`<class 'list'>`\n`<class 'dict'>`",
      "`<class 'array'>`\n`<class 'object'>`",
      "`<class 'tuple'>`\n`<class 'set'>`",
      "`list`\n`dict`"
    ],
    "answer": "`<class 'list'>`\n`<class 'dict'>`"
  },
  {
    "question": "Intermediate Theory: Describe the concept of 'duck typing' in Python.",
    "options": [
      "It's a strong, static type system where types are strictly enforced at compile-time.",
      "It's a dynamic typing philosophy where an object's suitability for a role is determined by its methods and properties, rather than by its explicit type or class inheritance (If it walks like a duck and quacks like a duck, it's a duck).",
      "It refers to automatically converting one data type to another.",
      "It's a method for optimizing function calls by avoiding unnecessary type checks."
    ],
    "answer": "It's a dynamic typing philosophy where an object's suitability for a role is determined by its methods and properties, rather than by its explicit type or class inheritance (If it walks like a duck and quacks like a duck, it's a duck)."
  },
  {
    "question": "Intermediate Coding: Write a function `reverse_string(s)` that reverses a string without using slicing `[::-1]`.",
    "options": [
      "def reverse_string(s):\n    return ''.join(reversed(s))",
      "def reverse_string(s):\n    return s[::-1]",
      "def reverse_string(s):\n    reversed_s = ''\n    for char in s:\n        reversed_s = char + reversed_s\n    return reversed_s",
      "def reverse_string(s):\n    return s.reverse()"
    ],
    "answer": "def reverse_string(s):\n    return ''.join(reversed(s))"
  },
  {
    "question": "Advanced Theory: What is a metaclass in Python, and provide a practical example of its usage beyond singleton patterns.",
    "options": [
      "A metaclass is a class that defines abstract methods for other classes.",
      "A metaclass is a class whose instances are classes. It allows you to customize class creation. Practical use: automatically registering classes in a registry, adding common methods to all classes in a module, or enforcing specific class attributes/methods (e.g., ORM models).",
      "A metaclass is a special type of decorator that modifies class behavior at runtime.",
      "A metaclass is a security feature to prevent unauthorized class instantiation."
    ],
    "answer": "A metaclass is a class whose instances are classes. It allows you to customize class creation. Practical use: automatically registering classes in a registry, adding common methods to all classes in a module, or enforcing specific class attributes/methods (e.g., ORM models)."
  },
  {
    "question": "Advanced Coding: Implement a simple LRU (Least Recently Used) cache class `LRUCache` with `get` and `put` methods, using `collections.OrderedDict`.",
    "options": [
      "from collections import OrderedDict\nclass LRUCache:\n    def __init__(self, capacity):\n        self.cache = OrderedDict()\n        self.capacity = capacity\n    def get(self, key):\n        if key not in self.cache: return -1\n        self.cache.move_to_end(key)\n        return self.cache[key]\n    def put(self, key, value):\n        self.cache[key] = value\n        self.cache.move_to_end(key)\n        if len(self.cache) > self.capacity:\n            self.cache.popitem(last=False)",
      "class LRUCache:\n    def __init__(self, capacity):\n        self.cache = {}\n        self.capacity = capacity\n    def get(self, key):\n        return self.cache.get(key)",
      "from collections import deque\nclass LRUCache:\n    def __init__(self, capacity):\n        self.cache = deque(maxlen=capacity)",
      "class LRUCache:\n    def __init__(self, capacity):\n        self.cache = []\n        self.capacity = capacity\n    def get(self, key):\n        pass"
    ],
    "answer": "from collections import OrderedDict\nclass LRUCache:\n    def __init__(self, capacity):\n        self.cache = OrderedDict()\n        self.capacity = capacity\n    def get(self, key):\n        if key not in self.cache: return -1\n        self.cache.move_to_end(key)\n        return self.cache[key]\n    def put(self, key, value):\n        self.cache[key] = value\n        self.cache.move_to_end(key)\n        if len(self.cache) > self.capacity:\n            self.cache.popitem(last=False)"
  },
  {
    "question": "Basic Theory: What is the output of `2 + 3 * 4` in Python?",
    "options": ["20", "14", "24", "Error"],
    "answer": "14"
  },
  {
    "question": "Basic Coding: How do you create an empty dictionary and add a key-value pair to it?",
    "options": [
      "`my_dict = {}; my_dict['key'] = 'value'`",
      "`my_dict = []; my_dict.add('key', 'value')`",
      "`my_dict = (); my_dict.insert('key', 'value')`",
      "`my_dict = new dict(); my_dict.set('key', 'value')`"
    ],
    "answer": "`my_dict = {}; my_dict['key'] = 'value'`"
  },
  {
    "question": "Intermediate Theory: What is the purpose of the `__init__.py` file in a Python package?",
    "options": [
      "It defines the main entry point for the package's execution.",
      "It marks a directory as a Python package, allowing its modules to be imported. It can also contain package-level initialization code.",
      "It's a configuration file for package dependencies.",
      "It serves no functional purpose; it's just a placeholder."
    ],
    "answer": "It marks a directory as a Python package, allowing its modules to be imported. It can also contain package-level initialization code."
  },
  {
    "question": "Intermediate Coding: Write a function `count_words(text)` that takes a string and returns a dictionary with word counts (case-insensitive).",
    "options": [
      "def count_words(text):\n    words = text.lower().split()\n    word_counts = {}\n    for word in words:\n        word_counts[word] = word_counts.get(word, 0) + 1\n    return word_counts",
      "def count_words(text):\n    return {word.lower(): text.lower().count(word) for word in text.split()}",
      "def count_words(text):\n    return {text: len(text.split())}",
      "def count_words(text):\n    return {}"
    ],
    "answer": "def count_words(text):\n    words = text.lower().split()\n    word_counts = {}\n    for word in words:\n        word_counts[word] = word_counts.get(word, 0) + 1\n    return word_counts"
  },
  {
    "question": "Advanced Theory: Differentiate between a 'bound method' and an 'unbound method' in Python 3 (or how class methods are now referred to).",
    "options": [
      "Bound methods are associated with a class; unbound methods are associated with an instance.",
      "In Python 3, all functions are technically 'unbound' until called on an instance. When called on an instance, they become 'bound' methods, meaning `self` is automatically passed as the first argument. Class methods (`@classmethod`) are bound to the class (`cls`) rather than the instance.",
      "Bound methods can be overridden; unbound methods cannot.",
      "Unbound methods are methods that have not yet been defined."
    ],
    "answer": "In Python 3, all functions are technically 'unbound' until called on an instance. When called on an instance, they become 'bound' methods, meaning `self` is automatically passed as the first argument. Class methods (`@classmethod`) are bound to the class (`cls`) rather than the instance."
  },
  {
    "question": "Advanced Coding: Write a decorator `@timer` that measures the execution time of a function and prints it.",
    "options": [
      "import time\ndef timer(func):\n    def wrapper(*args, **kwargs):\n        start = time.perf_counter()\n        result = func(*args, **kwargs)\n        end = time.perf_counter()\n        print(f'Function {func.__name__} took {end - start:.4f} seconds.')\n        return result\n    return wrapper",
      "import time\n@timer\ndef my_func(): pass",
      "def timer(func):\n    return func",
      "import time\nclass timer:\n    def __init__(self, func): self.func = func\n    def __call__(self, *args, **kwargs):\n        start = time.perf_counter()\n        result = self.func(*args, **kwargs)\n        print(f'Time: {time.perf_counter() - start}')\n        return result"
    ],
    "answer": "import time\ndef timer(func):\n    def wrapper(*args, **kwargs):\n        start = time.perf_counter()\n        result = func(*args, **kwargs)\n        end = time.perf_counter()\n        print(f'Function {func.__name__} took {end - start:.4f} seconds.')\n        return result\n    return wrapper"
  },
  {
    "question": "Basic Theory: What is the difference between `break` and `continue` statements in loops?",
    "options": [
      "`break` exits the loop; `continue` skips the current iteration and moves to the next.",
      "`break` skips the current iteration; `continue` exits the loop.",
      "Both `break` and `continue` exit the loop.",
      "Both `break` and `continue` skip the current iteration."
    ],
    "answer": "`break` exits the loop; `continue` skips the current iteration and moves to the next."
  },
  {
    "question": "Basic Coding: How do you open a file named `data.txt` for writing and write 'Hello, World!' to it?",
    "options": [
      "`file = open('data.txt', 'w'); file.write('Hello, World!'); file.close()`",
      "`with open('data.txt', 'w') as file: file.write('Hello, World!')`",
      "`open('data.txt').write('Hello, World!')`",
      "`file = write('data.txt', 'Hello, World!')`"
    ],
    "answer": "`with open('data.txt', 'w') as file: file.write('Hello, World!')`"
  },
  {
    "question": "Intermediate Theory: What is the purpose of `self` in Python class methods?",
    "options": [
      "`self` refers to the class itself, allowing access to class-level attributes.",
      "`self` refers to the instance of the class, allowing access to instance attributes and methods.",
      "`self` is a reserved keyword for private methods.",
      "`self` is an optional parameter and can be named anything else."
    ],
    "answer": "`self` refers to the instance of the class, allowing access to instance attributes and methods."
  },
  {
    "question": "Intermediate Coding: Write a generator function `fibonacci_sequence(n)` that yields the first `n` Fibonacci numbers.",
    "options": [
      "def fibonacci_sequence(n):\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b",
      "def fibonacci_sequence(n):\n    return [0, 1, 1, 2, 3][:n]",
      "def fibonacci_sequence(n):\n    if n <= 1: return n\n    return fibonacci_sequence(n-1) + fibonacci_sequence(n-2)",
      "def fibonacci_sequence(n):\n    yield 0\n    yield 1"
    ],
    "answer": "def fibonacci_sequence(n):\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b"
  },
  {
    "question": "Advanced Theory: Explain the concept of 'descriptors' in Python and how `@property` is an example of a descriptor.",
    "options": [
      "Descriptors are special attributes that cannot be changed after creation.",
      "Descriptors are objects that implement a protocol (`__get__`, `__set__`, `__delete__`) to customize attribute access for other objects. `@property` is a built-in descriptor that allows you to define methods as attributes, providing controlled access (getters, setters, deleters).",
      "Descriptors are a form of inheritance that applies to methods only.",
      "Descriptors are used to define abstract properties in abstract base classes."
    ],
    "answer": "Descriptors are objects that implement a protocol (`__get__`, `__set__`, `__delete__`) to customize attribute access for other objects. `@property` is a built-in descriptor that allows you to define methods as attributes, providing controlled access (getters, setters, deleters)."
  },
  {
    "question": "Advanced Coding: How would you use `concurrent.futures.ThreadPoolExecutor` to run a list of CPU-bound tasks in parallel (conceptually, not true parallelism due to GIL)?",
    "options": [
      "import concurrent.futures\nwith concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:\n    results = [executor.submit(my_cpu_task, arg) for arg in args_list]\n    for future in concurrent.futures.as_completed(results):\n        print(future.result())",
      "import concurrent.futures\nresults = [my_cpu_task(arg) for arg in args_list]",
      "import concurrent.futures\nwith concurrent.futures.ProcessPoolExecutor(max_workers=4) as executor:\n    results = [executor.submit(my_cpu_task, arg) for arg in args_list]",
      "import threading\nthreads = [threading.Thread(target=my_cpu_task, args=(arg,)) for arg in args_list]\nfor t in threads: t.start(); t.join()"
    ],
    "answer": "import concurrent.futures\nwith concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:\n    results = [executor.submit(my_cpu_task, arg) for arg in args_list]\n    for future in concurrent.futures.as_completed(results):\n        print(future.result())"
  },
  {
    "question": "Basic Theory: What is the correct way to define a function that takes two arguments and returns their sum?",
    "options": [
      "`def add(a, b): return a + b`",
      "`function add(a, b): return a + b`",
      "`add(a, b) => a + b`",
      "`define add(a, b): return a + b`"
    ],
    "answer": "`def add(a, b): return a + b`"
  },
  {
    "question": "Basic Coding: What is the output of `[1, 2, 3] + [4, 5]`?",
    "options": ["`[1, 2, 3, 4, 5]`", "`[1, 2, 3], [4, 5]`", "`Error`", "`9`"],
    "answer": "`[1, 2, 3, 4, 5]`"
  },
  {
    "question": "Intermediate Theory: Explain the difference between `is` and `==` operators in Python.",
    "options": [
      "`is` checks for value equality; `==` checks for object identity.",
      "`is` checks for object identity (same memory location); `==` checks for value equality.",
      "They are interchangeable and always produce the same result.",
      "`is` is used for numbers; `==` is used for strings."
    ],
    "answer": "`is` checks for object identity (same memory location); `==` checks for value equality."
  },
  {
    "question": "Intermediate Coding: Write a function `remove_duplicates(lst)` that removes duplicates from a list while preserving the original order of the remaining elements.",
    "options": [
      "def remove_duplicates(lst):\n    return list(set(lst))",
      "def remove_duplicates(lst):\n    seen = set()\n    result = []\n    for item in lst:\n        if item not in seen:\n            seen.add(item)\n            result.append(item)\n    return result",
      "def remove_duplicates(lst):\n    return sorted(list(set(lst)))",
      "def remove_duplicates(lst):\n    return [item for item in lst if lst.count(item) == 1]"
    ],
    "answer": "def remove_duplicates(lst):\n    seen = set()\n    result = []\n    for item in lst:\n        if item not in seen:\n            seen.add(item)\n            result.append(item)\n    return result"
  },
  {
    "question": "Advanced Theory: What are 'type hints' (PEP 484) in Python? What benefits do they offer, and what is their runtime impact?",
    "options": [
      "Type hints enforce strict type checking at runtime, causing errors if types don't match.",
      "Type hints are annotations for variables, function parameters, and return values, used for static analysis (e.g., by linters and IDEs) to improve code readability, maintainability, and catch potential bugs *before* runtime. They have virtually no runtime impact.",
      "Type hints are a way to dynamically change variable types during execution.",
      "Type hints are used only for generating API documentation and have no other functional use."
    ],
    "answer": "Type hints are annotations for variables, function parameters, and return values, used for static analysis (e.g., by linters and IDEs) to improve code readability, maintainability, and catch potential bugs *before* runtime. They have virtually no runtime impact."
  },
  {
    "question": "Advanced Coding: Given a nested dictionary, write a function `get_nested_value(d, keys, default=None)` that retrieves a value based on a list of keys, returning `default` if any key is not found.",
    "options": [
      "def get_nested_value(d, keys, default=None):\n    current = d\n    for key in keys:\n        if isinstance(current, dict) and key in current:\n            current = current[key]\n        else:\n            return default\n    return current",
      "def get_nested_value(d, keys, default=None):\n    return d[keys]",
      "def get_nested_value(d, keys, default=None):\n    try:\n        for key in keys:\n            d = d[key]\n        return d\n    except KeyError: return default",
      "def get_nested_value(d, keys, default=None):\n    current = d\n    for key in keys:\n        current = current.get(key, default)"
    ],
    "answer": "def get_nested_value(d, keys, default=None):\n    current = d\n    for key in keys:\n        if isinstance(current, dict) and key in current:\n            current = current[key]\n        else:\n            return default\n    return current"
  },
  {
    "question": "Basic Theory: How do you comment a single line and multiple lines in Python?",
    "options": [
      "Single: `// comment`; Multi: `/* comment */`",
      "Single: `# comment`; Multi: `\"\"\"comment\"\"\"` or `'''comment'''` (docstrings)",
      "Single: `-- comment`; Multi: ``",
      "Single: `' comment'`; Multi: `## comment ##`"
    ],
    "answer": "Single: `# comment`; Multi: `\"\"\"comment\"\"\"` or `'''comment'''` (docstrings)"
  },
  {
    "question": "Basic Coding: What is the output of `'hello'.upper()`?",
    "options": ["`HELLO`", "`hello`", "`Hello`", "`Error`"],
    "answer": "`HELLO`"
  },
  {
    "question": "Intermediate Theory: Explain `try`, `except`, `else`, and `finally` blocks in Python's exception handling.",
    "options": [
      "`try` runs code; `except` catches errors; `else` runs if no error in `try`; `finally` always runs (cleanup).",
      "`try` is optional; `except` is mandatory.",
      "`else` runs if an exception occurs; `finally` runs before `except`.",
      "`finally` only runs if an exception occurs."
    ],
    "answer": "`try` runs code; `except` catches errors; `else` runs if no error in `try`; `finally` always runs (cleanup)."
  },
  {
    "question": "Intermediate Coding: Write a function `is_palindrome(s)` that checks if a string is a palindrome (reads the same forwards and backwards, ignoring case and non-alphanumeric characters).",
    "options": [
      "import re\ndef is_palindrome(s):\n    s = re.sub(r'[^a-zA-Z0-9]', '', s).lower()\n    return s == s[::-1]",
      "def is_palindrome(s):\n    return s == s[::-1]",
      "def is_palindrome(s):\n    return s.lower() == s.lower().reverse()",
      "def is_palindrome(s):\n    return False"
    ],
    "answer": "import re\ndef is_palindrome(s):\n    s = re.sub(r'[^a-zA-Z0-9]', '', s).lower()\n    return s == s[::-1]"
  },
  {
    "question": "Advanced Theory: How does Python's garbage collection handle cyclic references?",
    "options": [
      "Reference counting alone handles all garbage collection, including cycles.",
      "Python's primary garbage collection is reference counting, but a separate cyclic garbage collector runs periodically to detect and break unreachable cycles that reference counting alone cannot reclaim.",
      "Python automatically converts cyclic references into weak references.",
      "Users must manually break all cyclic references to prevent memory leaks."
    ],
    "answer": "Python's primary garbage collection is reference counting, but a separate cyclic garbage collector runs periodically to detect and break unreachable cycles that reference counting alone cannot reclaim."
  },
  {
    "question": "Advanced Coding: Create a class `CallCounter` that acts as a decorator to count how many times a function is called. The count should be accessible via an attribute of the decorated function.",
    "options": [
      "from functools import wraps\nclass CallCounter:\n    def __init__(self, func):\n        self.func = func\n        self.calls = 0\n        wraps(func)(self) # Preserve func metadata\n    def __call__(self, *args, **kwargs):\n        self.calls += 1\n        return self.func(*args, **kwargs)",
      "def CallCounter(func):\n    func.calls = 0\n    return func",
      "class CallCounter:\n    def __init__(self, func): self.func = func",
      "from functools import wraps\ndef CallCounter(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        if not hasattr(wrapper, 'calls'): wrapper.calls = 0\n        wrapper.calls += 1\n        return func(*args, **kwargs)\n    return wrapper"
    ],
    "answer": "from functools import wraps\nclass CallCounter:\n    def __init__(self, func):\n        self.func = func\n        self.calls = 0\n        wraps(func)(self) # Preserve func metadata\n    def __call__(self, *args, **kwargs):\n        self.calls += 1\n        return self.func(*args, **kwargs)"
  },
  {
    "question": "Basic Theory: What is the output of `True and False` and `True or False`?",
    "options": [
      "`True`\n`True`",
      "`False`\n`False`",
      "`False`\n`True`",
      "`True`\n`False`"
    ],
    "answer": "`False`\n`True`"
  },
  {
    "question": "Basic Coding: Write a simple `for` loop that prints numbers from 5 down to 1.",
    "options": [
      "for i in range(5, 0, -1):\n    print(i)",
      "for i in range(1, 6):\n    print(i)",
      "for i in range(5):\n    print(i)",
      "for i in reverse(range(1, 6)):\n    print(i)"
    ],
    "answer": "for i in range(5, 0, -1):\n    print(i)"
  },
  {
    "question": "Intermediate Theory: Explain the difference between `__new__` and `__init__` methods in Python classes.",
    "options": [
      "`__new__` is called after the instance is created; `__init__` creates the instance.",
      "`__new__` is a class method that creates and returns a new instance of the class; `__init__` is an instance method that initializes the newly created instance.",
      "Both are for initialization, but `__new__` is for abstract classes.",
      "`__new__` is only for built-in types; `__init__` for custom classes."
    ],
    "answer": "`__new__` is a class method that creates and returns a new instance of the class; `__init__` is an instance method that initializes the newly created instance."
  },
  {
    "question": "Intermediate Coding: Write a function `merge_dicts(*dicts)` that merges multiple dictionaries into a single new dictionary. Later dictionaries' values overwrite earlier ones for common keys.",
    "options": [
      "def merge_dicts(*dicts):\n    merged = {}\n    for d in dicts:\n        merged.update(d)\n    return merged",
      "def merge_dicts(*dicts):\n    return dicts[0].update(dicts[1:])",
      "def merge_dicts(*dicts):\n    return {**dicts}",
      "def merge_dicts(*dicts):\n    return dicts"
    ],
    "answer": "def merge_dicts(*dicts):\n    merged = {}\n    for d in dicts:\n        merged.update(d)\n    return merged"
  },
  {
    "question": "Advanced Theory: What are weak references in Python, and when would you use them?",
    "options": [
      "Weak references are references that encrypt data for security purposes.",
      "Weak references do not increase the reference count of an object, meaning they don't prevent the object from being garbage collected. They are useful for implementing caches, observer patterns, or circular data structures to avoid memory leaks.",
      "Weak references are used to create immutable copies of objects.",
      "Weak references are a deprecated feature in modern Python."
    ],
    "answer": "Weak references do not increase the reference count of an object, meaning they don't prevent the object from being garbage collected. They are useful for implementing caches, observer patterns, or circular data structures to avoid memory leaks."
  },
  {
    "question": "Advanced Coding: Using `asyncio`, write two coroutines `task_a()` and `task_b()` that print messages with different delays, and then run them concurrently using `asyncio.gather`.",
    "options": [
      "import asyncio\nasync def task_a():\n    await asyncio.sleep(0.5); print('Task A')",
      "import asyncio\nasync def task_a():\n    print('Task A'); await asyncio.sleep(0.5)\nasync def task_b():\n    print('Task B'); await asyncio.sleep(0.2)\nasync def main():\n    await asyncio.gather(task_a(), task_b())\nasyncio.run(main())",
      "import asyncio\ndef task_a(): pass\ndef task_b(): pass\nasyncio.run(task_a(), task_b())",
      "import asyncio\nasync def task_a():\n    await asyncio.sleep(0.5); print('Task A')\nasync def task_b():\n    await asyncio.sleep(0.2); print('Task B')\nloop = asyncio.get_event_loop()\nloop.run_until_complete(task_a())\nloop.run_until_complete(task_b())"
    ],
    "answer": "import asyncio\nasync def task_a():\n    print('Task A'); await asyncio.sleep(0.5)\nasync def task_b():\n    print('Task B'); await asyncio.sleep(0.2)\nasync def main():\n    await asyncio.gather(task_a(), task_b())\nasyncio.run(main())"
  },
  {
    "question": "Basic Theory: What is a variable in Python?",
    "options": [
      "A fixed memory location that stores data.",
      "A name that refers to a value stored in memory.",
      "A keyword used for defining functions.",
      "A container for multiple values of different types."
    ],
    "answer": "A name that refers to a value stored in memory."
  },
  {
    "question": "Basic Coding: What is the result of `10 / 3` in Python 3?",
    "options": ["3", "3.3333333333333335", "3.0", "Error"],
    "answer": "3.3333333333333335"
  },
  {
    "question": "Intermediate Theory: What is the difference between a module and a package in Python?",
    "options": [
      "A module is a single Python file (`.py`); a package is a directory containing multiple modules and an `__init__.py` file.",
      "Modules contain classes; packages contain functions.",
      "Packages are executable; modules are not.",
      "There is no difference; the terms are interchangeable."
    ],
    "answer": "A module is a single Python file (`.py`); a package is a directory containing multiple modules and an `__init__.py` file."
  },
  {
    "question": "Intermediate Coding: Write a function `sort_by_length(words)` that sorts a list of strings by their length in ascending order.",
    "options": [
      "def sort_by_length(words):\n    return sorted(words, key=len)",
      "def sort_by_length(words):\n    return words.sort()",
      "def sort_by_length(words):\n    return [len(w) for w in words]",
      "def sort_by_length(words):\n    return words.sort(key=lambda x: x)"
    ],
    "answer": "def sort_by_length(words):\n    return sorted(words, key=len)"
  },
  {
    "question": "Advanced Theory: Explain the concept of 'cooperative multitasking' in `asyncio`.",
    "options": [
      "It means tasks automatically run in parallel on multiple CPU cores.",
      "It means tasks voluntarily yield control to the event loop using `await`, allowing other tasks to run without preemption, enabling concurrency on a single thread.",
      "It means multiple processes share the same memory space.",
      "It refers to tasks being managed by the operating system's scheduler."
    ],
    "answer": "It means tasks voluntarily yield control to the event loop using `await`, allowing other tasks to run without preemption, enabling concurrency on a single thread."
  },
  {
    "question": "Advanced Coding: Implement a simple context manager `FileLock` that acquires and releases a file lock (e.g., using `fcntl` for Unix-like systems, or conceptual).",
    "options": [
      "import fcntl # Conceptual for example\nclass FileLock:\n    def __init__(self, filename):\n        self.filename = filename\n        self.fd = None\n    def __enter__(self):\n        self.fd = open(self.filename, 'w')\n        fcntl.flock(self.fd, fcntl.LOCK_EX | fcntl.LOCK_NB) # Conceptual lock\n        print(f'Lock acquired on {self.filename}')\n        return self\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        if self.fd:\n            fcntl.flock(self.fd, fcntl.LOCK_UN) # Conceptual unlock\n            self.fd.close()\n            print(f'Lock released on {self.filename}')",
      "class FileLock:\n    def __enter__(self): pass\n    def __exit__(self, *args): pass",
      "def FileLock(filename): pass",
      "import fcntl\nwith FileLock('my_file.txt'): pass"
    ],
    "answer": "import fcntl # Conceptual for example\nclass FileLock:\n    def __init__(self, filename):\n        self.filename = filename\n        self.fd = None\n    def __enter__(self):\n        self.fd = open(self.filename, 'w')\n        fcntl.flock(self.fd, fcntl.LOCK_EX | fcntl.LOCK_NB) # Conceptual lock\n        print(f'Lock acquired on {self.filename}')\n        return self\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        if self.fd:\n            fcntl.flock(self.fd, fcntl.LOCK_UN) # Conceptual unlock\n            self.fd.close()\n            print(f'Lock released on {self.filename}')"
  },
  {
    "question": "Basic Theory: What is the purpose of `print()` function?",
    "options": [
      "To read input from the user.",
      "To perform mathematical calculations.",
      "To display output to the console.",
      "To define variables."
    ],
    "answer": "To display output to the console."
  },
  {
    "question": "Basic Coding: What is the output of `len('Python')`?",
    "options": ["6", "5", "7", "Error"],
    "answer": "6"
  },
  {
    "question": "Intermediate Theory: What are Python generators, and when would you use them over lists?",
    "options": [
      "Generators are functions that always return a list.",
      "Generators are iterators that generate values on the fly using `yield`, instead of storing them all in memory. Use them for large or infinite sequences, or when values are computed expensively, to save memory and improve performance.",
      "Generators are used for creating new threads.",
      "Generators are a way to define constant values in a program."
    ],
    "answer": "Generators are iterators that generate values on the fly using `yield`, instead of storing them all in memory. Use them for large or infinite sequences, or when values are computed expensively, to save memory and improve performance."
  },
  {
    "question": "Intermediate Coding: Implement a function `flatten_list(nested_list)` that flattens a given list of lists into a single list.",
    "options": [
      "def flatten_list(nested_list):\n    flat = []\n    for sublist in nested_list:\n        for item in sublist:\n            flat.append(item)\n    return flat",
      "def flatten_list(nested_list):\n    return [item for sublist in nested_list for item in sublist]",
      "def flatten_list(nested_list):\n    return sum(nested_list, [])",
      "All of the above (correct for simple 2-level nesting)"
    ],
    "answer": "All of the above (correct for simple 2-level nesting)"
  },
  {
    "question": "Advanced Theory: Discuss the 'diamond problem' in multiple inheritance and how Python's MRO (Method Resolution Order) addresses it.",
    "options": [
      "The diamond problem occurs when a class inherits from two classes that have a common ancestor, leading to ambiguity. Python resolves this using the C3 linearization algorithm to determine a consistent and predictable MRO, ensuring methods are called in a specific, well-defined order.",
      "The diamond problem is a bug in Python's inheritance system that prevents multiple inheritance.",
      "Python avoids the diamond problem by only allowing single inheritance.",
      "The diamond problem only occurs if methods are named differently in parent classes."
    ],
    "answer": "The diamond problem occurs when a class inherits from two classes that have a common ancestor, leading to ambiguity. Python resolves this using the C3 linearization algorithm to determine a consistent and predictable MRO, ensuring methods are called in a specific, well-defined order."
  },
  {
    "question": "Advanced Coding: Write a Python function `safe_divide(numerator, denominator)` that returns the result of division, handling `ZeroDivisionError` gracefully by returning `None`.",
    "options": [
      "def safe_divide(numerator, denominator):\n    try:\n        return numerator / denominator\n    except ZeroDivisionError:\n        return None",
      "def safe_divide(numerator, denominator):\n    if denominator == 0: return None\n    return numerator / denominator",
      "def safe_divide(numerator, denominator):\n    return numerator / denominator if denominator != 0 else None",
      "All of the above are functionally correct for this specific problem, but the `try-except` is generally preferred for anticipated errors."
    ],
    "answer": "All of the above are functionally correct for this specific problem, but the `try-except` is generally preferred for anticipated errors."
  },
  {
    "question": "Basic Theory: What is an 'immutable' object in Python?",
    "options": [
      "An object whose value can be changed after it is created.",
      "An object whose value cannot be changed after it is created.",
      "An object that can only store numeric data.",
      "An object that is accessible from anywhere in the program."
    ],
    "answer": "An object whose value cannot be changed after it is created."
  },
  {
    "question": "Basic Coding: Given `s = 'Python'`, what is `s[1:4]`?",
    "options": ["`Pyt`", "`yth`", "`ytho`", "`ython`"],
    "answer": "`yth`"
  },
  {
    "question": "Intermediate Theory: What are `*args` and `**kwargs` used for in function definitions?",
    "options": [
      "`*args` is for positional arguments; `**kwargs` is for keyword arguments.",
      "`*args` collects an arbitrary number of positional arguments into a tuple; `**kwargs` collects an arbitrary number of keyword arguments into a dictionary.",
      "`*args` and `**kwargs` are used for mandatory arguments only.",
      "They are only used for passing arguments between different functions in a module."
    ],
    "answer": "`*args` collects an arbitrary number of positional arguments into a tuple; `**kwargs` collects an arbitrary number of keyword arguments into a dictionary."
  },
  {
    "question": "Intermediate Coding: Write a Python program to find the factorial of a number using recursion.",
    "options": [
      "def factorial(n):\n    if n == 0: return 1\n    return n * factorial(n-1)",
      "def factorial(n):\n    result = 1\n    for i in range(1, n + 1): result *= i\n    return result",
      "def factorial(n):\n    return 0",
      "def factorial(n):\n    if n < 0: return 'Error'"
    ],
    "answer": "def factorial(n):\n    if n == 0: return 1\n    return n * factorial(n-1)"
  },
  {
    "question": "Advanced Theory: Explain the difference between `threading.Lock` and `threading.RLock`.",
    "options": [
      "`Lock` can be acquired multiple times by the same thread; `RLock` cannot.",
      "`Lock` can only be acquired once by a thread until released; `RLock` (reentrant lock) can be acquired multiple times by the *same* thread, but must be released an equal number of times. `RLock` is used when a thread needs to acquire the same lock multiple times (e.g., in recursive functions).",
      "`Lock` is for inter-process communication; `RLock` for inter-thread.",
      "There is no practical difference between them."
    ],
    "answer": "`Lock` can only be acquired once by a thread until released; `RLock` (reentrant lock) can be acquired multiple times by the *same* thread, but must be released an equal number of times. `RLock` is used when a thread needs to acquire the same lock multiple times (e.g., in recursive functions)."
  },
  {
    "question": "Advanced Coding: Write a function `chunk_list(lst, n)` that divides a list into `n`-sized chunks (sublists).",
    "options": [
      "def chunk_list(lst, n):\n    return [lst[i:i + n] for i in range(0, len(lst), n)]",
      "def chunk_list(lst, n):\n    chunks = []\n    for i in range(n):\n        chunks.append(lst[i::n])\n    return chunks",
      "def chunk_list(lst, n):\n    return lst.split(n)",
      "def chunk_list(lst, n):\n    return [lst for _ in range(n)]"
    ],
    "answer": "def chunk_list(lst, n):\n    return [lst[i:i + n] for i in range(0, len(lst), n)]"
  },
  {
    "question": "Basic Theory: How do you define a constant in Python?",
    "options": [
      "Using the `const` keyword.",
      "By convention, using ALL_CAPS variable names. Python does not have built-in strict constants.",
      "Constants are defined using the `final` keyword.",
      "Constants are created using a special `Immutable` class."
    ],
    "answer": "By convention, using ALL_CAPS variable names. Python does not have built-in strict constants."
  },
  {
    "question": "Basic Coding: What is the output of `{'a': 1, 'b': 2}.keys()`?",
    "options": [
      "`dict_keys(['a', 'b'])`",
      "`['a', 'b']`",
      "`('a', 'b')`",
      "`{'a', 'b'}`"
    ],
    "answer": "`dict_keys(['a', 'b'])`"
  },
  {
    "question": "Intermediate Theory: What is the difference between `staticmethod` and `classmethod` decorators?",
    "options": [
      "`staticmethod` receives the instance (`self`); `classmethod` receives the class (`cls`).",
      "`staticmethod` takes no implicit first argument and can't access class/instance state; `classmethod` takes the class (`cls`) as its first argument and can modify class state but not instance state.",
      "`staticmethod` can only be called from an instance; `classmethod` can only be called from the class.",
      "There is no difference; they are aliases."
    ],
    "answer": "`staticmethod` takes no implicit first argument and can't access class/instance state; `classmethod` takes the class (`cls`) as its first argument and can modify class state but not instance state."
  },
  {
    "question": "Intermediate Coding: Write a function `calculate_average(*numbers)` that takes an arbitrary number of numerical arguments and returns their average.",
    "options": [
      "def calculate_average(*numbers):\n    if not numbers: return 0\n    return sum(numbers) / len(numbers)",
      "def calculate_average(*numbers):\n    return sum(numbers) / len(numbers) if len(numbers) > 0 else 0",
      "def calculate_average(numbers):\n    return sum(numbers) / len(numbers)",
      "def calculate_average(*numbers):\n    return sum(numbers) / len(numbers) if numbers else 0"
    ],
    "answer": "def calculate_average(*numbers):\n    if not numbers: return 0\n    return sum(numbers) / len(numbers)"
  },
  {
    "question": "Advanced Theory: When would you choose `asyncio` over `multiprocessing` for concurrent programming?",
    "options": [
      "Always, `asyncio` is the most performant option for all tasks.",
      "Choose `asyncio` for I/O-bound tasks (e.g., network requests, file I/O) where tasks frequently wait for external operations, as it excels at managing many concurrent operations on a single thread. Choose `multiprocessing` for CPU-bound tasks.",
      "Choose `asyncio` when you need true parallel execution on multiple CPU cores.",
      "Choose `asyncio` when you need to share complex data structures directly between concurrent units."
    ],
    "answer": "Choose `asyncio` for I/O-bound tasks (e.g., network requests, file I/O) where tasks frequently wait for external operations, as it excels at managing many concurrent operations on a single thread. Choose `multiprocessing` for CPU-bound tasks."
  },
  {
    "question": "Advanced Coding: Write a function `debounce(delay)` that returns a decorator. The decorated function should only execute if `delay` seconds have passed since the last time it was called.",
    "options": [
      "import time\ndef debounce(delay):\n    def decorator(func):\n        last_call = [0]\n        def wrapper(*args, **kwargs):\n            if time.time() - last_call[0] > delay:\n                last_call[0] = time.time()\n                return func(*args, **kwargs)\n        return wrapper\n    return decorator",
      "def debounce(delay):\n    return lambda func: func",
      "import time\n@debounce(1)\ndef my_func(): pass",
      "import time\nclass Debounce:\n    def __init__(self, delay): self.delay = delay"
    ],
    "answer": "import time\ndef debounce(delay):\n    def decorator(func):\n        last_call = [0]\n        def wrapper(*args, **kwargs):\n            if time.time() - last_call[0] > delay:\n                last_call[0] = time.time()\n                return func(*args, **kwargs)\n        return wrapper\n    return decorator"
  },
  {
    "question": "Basic Theory: What is `None` in Python?",
    "options": [
      "A boolean value representing false.",
      "A numeric value representing zero.",
      "A special constant representing the absence of a value or a null value.",
      "A string representing an empty space."
    ],
    "answer": "A special constant representing the absence of a value or a null value."
  },
  {
    "question": "Basic Coding: What is the output of `print('Python' * 2)`?",
    "options": ["`PythonPython`", "`Python 2`", "`Python`", "`Error`"],
    "answer": "`PythonPython`"
  },
  {
    "question": "Intermediate Theory: Explain how Python manages memory, specifically touching on reference counting and garbage collection.",
    "options": [
      "Python relies solely on manual memory management by the programmer.",
      "Python uses a combination of reference counting (to immediately deallocate objects when their reference count drops to zero) and a cyclic garbage collector (to reclaim memory from objects involved in reference cycles).",
      "Python uses Java's garbage collection algorithm.",
      "Memory management is handled entirely by the operating system, not Python itself."
    ],
    "answer": "Python uses a combination of reference counting (to immediately deallocate objects when their reference count drops to zero) and a cyclic garbage collector (to reclaim memory from objects involved in reference cycles)."
  },
  {
    "question": "Intermediate Coding: Write a function `find_common_elements(list1, list2)` that returns a set of common elements between two lists.",
    "options": [
      "def find_common_elements(list1, list2):\n    return set(list1) & set(list2)",
      "def find_common_elements(list1, list2):\n    return list1 + list2",
      "def find_common_elements(list1, list2):\n    return [item for item in list1 if item in list2]",
      "def find_common_elements(list1, list2):\n    return set(list1).union(set(list2))"
    ],
    "answer": "def find_common_elements(list1, list2):\n    return set(list1) & set(list2)"
  },
  {
    "question": "Advanced Theory: What is the purpose of `__slots__` in a class definition, and when would you use it?",
    "options": [
      "To restrict the methods that can be defined in a class.",
      "To explicitly declare expected instance attributes, which can reduce memory consumption and speed up attribute access by preventing the creation of a `__dict__` for each instance. Used for classes with many instances, especially in memory-sensitive applications.",
      "To mark attributes as private and inaccessible from outside the class.",
      "To pre-allocate space for all possible attributes, regardless of whether they are used."
    ],
    "answer": "To explicitly declare expected instance attributes, which can reduce memory consumption and speed up attribute access by preventing the creation of a `__dict__` for each instance. Used for classes with many instances, especially in memory-sensitive applications."
  },
  {
    "question": "Advanced Coding: Implement a class `PropertyDescriptor` that acts as a descriptor to manage access to a private instance variable `_value` (getter and setter).",
    "options": [
      "class PropertyDescriptor:\n    def __init__(self, name):\n        self.name = '_' + name\n    def __get__(self, instance, owner):\n        return getattr(instance, self.name)\n    def __set__(self, instance, value):\n        setattr(instance, self.name, value)",
      "class PropertyDescriptor:\n    def __get__(self, instance, owner): return instance.value\n    def __set__(self, instance, value): instance.value = value",
      "class PropertyDescriptor:\n    def __init__(self, name): pass",
      "class PropertyDescriptor:\n    def get_value(self): pass\n    def set_value(self, value): pass"
    ],
    "answer": "class PropertyDescriptor:\n    def __init__(self, name):\n        self.name = '_' + name\n    def __get__(self, instance, owner):\n        return getattr(instance, self.name)\n    def __set__(self, instance, value):\n        setattr(instance, self.name, value)"
  },
  {
    "question": "Basic Theory: What is the primary difference between `==` and `is` in Python?",
    "options": [
      "`==` checks for value equality, `is` checks for object identity (same memory address).",
      "`==` checks for object identity, `is` checks for value equality.",
      "They are interchangeable.",
      "`is` is faster for all comparisons."
    ],
    "answer": "`==` checks for value equality, `is` checks for object identity (same memory address)."
  },
  {
    "question": "Basic Coding: How do you add an element to a Python set?",
    "options": [
      "`my_set.add(element)`",
      "`my_set.append(element)`",
      "`my_set.insert(element)`",
      "`my_set.push(element)`"
    ],
    "answer": "`my_set.add(element)`"
  },
  {
    "question": "Intermediate Theory: What are 'closures' in Python, and provide a simple example.",
    "options": [
      "A closure is a function that has been closed to further modification.",
      "A closure is a nested function that remembers and accesses variables from its enclosing scope, even after the outer function has finished executing. Example: A function factory that returns a custom multiplier function.",
      "A closure is a built-in method for file handling.",
      "A closure refers to a function that calls itself recursively."
    ],
    "answer": "A closure is a nested function that remembers and accesses variables from its enclosing scope, even after the outer function has finished executing. Example: A function factory that returns a custom multiplier function."
  },
  {
    "question": "Intermediate Coding: Write a function `first_non_repeating_char(s)` that finds the first non-repeating character in a string. If no such character exists, return `None`.",
    "options": [
      "def first_non_repeating_char(s):\n    char_counts = {}\n    for char in s:\n        char_counts[char] = char_counts.get(char, 0) + 1\n    for char in s:\n        if char_counts[char] == 1:\n            return char\n    return None",
      "def first_non_repeating_char(s):\n    for char in s: if s.count(char) == 1: return char\n    return None",
      "def first_non_repeating_char(s):\n    return s[0]",
      "def first_non_repeating_char(s):\n    return None"
    ],
    "answer": "def first_non_repeating_char(s):\n    char_counts = {}\n    for char in s:\n        char_counts[char] = char_counts.get(char, 0) + 1\n    for char in s:\n        if char_counts[char] == 1:\n            return char\n    return None"
  },
  {
    "question": "Advanced Theory: Explain the difference between 'mutable' and 'immutable' objects in Python, and provide examples of each.",
    "options": [
      "Mutable objects can be changed after creation (e.g., lists, dictionaries); immutable objects cannot (e.g., integers, strings, tuples). Changes to mutable objects are in-place, while operations on immutable objects create new objects.",
      "Mutable objects are faster than immutable objects.",
      "All objects in Python are mutable by default.",
      "Immutable objects can be modified, but only by specific methods."
    ],
    "answer": "Mutable objects can be changed after creation (e.g., lists, dictionaries); immutable objects cannot (e.g., integers, strings, tuples). Changes to mutable objects are in-place, while operations on immutable objects create new objects."
  },
  {
    "question": "Advanced Coding: Write a class `ContextManagerExample` that prints 'Entering context' on `__enter__` and 'Exiting context' on `__exit__`, and demonstrates its use with `with` statement.",
    "options": [
      "class ContextManagerExample:\n    def __enter__(self):\n        print('Entering context')\n        return self\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print('Exiting context')\n\nwith ContextManagerExample():\n    print('Inside context')",
      "def ContextManagerExample(): pass",
      "class ContextManagerExample: pass",
      "with ContextManagerExample() as cm: print('Inside')"
    ],
    "answer": "class ContextManagerExample:\n    def __enter__(self):\n        print('Entering context')\n        return self\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print('Exiting context')\n\nwith ContextManagerExample():\n    print('Inside context')"
  },
  {
    "question": "Basic Theory: How do you convert a string to an integer in Python?",
    "options": [
      "`str_to_int('123')`",
      "`int('123')`",
      "`'123'.to_int()`",
      "`convert_to_int('123')`"
    ],
    "answer": "`int('123')`"
  },
  {
    "question": "Basic Coding: What is the output of `5 > 3 and 10 < 20`?",
    "options": ["`True`", "`False`", "`Error`", "`None`"],
    "answer": "`True`"
  },
  {
    "question": "Intermediate Theory: What is `yield` keyword used for in Python?",
    "options": [
      "To return a value from a function and immediately terminate it.",
      "To create a generator function, which yields values one by one, pausing execution and resuming from where it left off on next call.",
      "To raise an exception within a function.",
      "To import a module into the current scope."
    ],
    "answer": "To create a generator function, which yields values one by one, pausing execution and resuming from where it left off on next call."
  },
  {
    "question": "Intermediate Coding: Write a function `find_max_occurrence(lst)` that finds the element with the maximum number of occurrences in a list.",
    "options": [
      "from collections import Counter\ndef find_max_occurrence(lst):\n    if not lst: return None\n    counts = Counter(lst)\n    return counts.most_common(1)[0][0]",
      "def find_max_occurrence(lst):\n    return max(set(lst), key=lst.count)",
      "def find_max_occurrence(lst):\n    return max(lst)",
      "def find_max_occurrence(lst):\n    return lst[0]"
    ],
    "answer": "from collections import Counter\ndef find_max_occurrence(lst):\n    if not lst: return None\n    counts = Counter(lst)\n    return counts.most_common(1)[0][0]"
  },
  {
    "question": "Advanced Theory: Explain the purpose of `functools.lru_cache` and how it helps optimize performance.",
    "options": [
      "It's a decorator for encrypting function arguments.",
      "It's a decorator that memoizes (caches) the results of function calls. If the function is called again with the same arguments, the cached result is returned instead of re-executing the function, which is useful for expensive or frequently called functions with repeatable inputs.",
      "It allows functions to run on the Least Recently Used CPU core.",
      "It automatically converts a function into an asynchronous coroutine."
    ],
    "answer": "It's a decorator that memoizes (caches) the results of function calls. If the function is called again with the same arguments, the cached result is returned instead of re-executing the function, which is useful for expensive or frequently called functions with repeatable inputs."
  },
  {
    "question": "Advanced Coding: Implement a function `get_cpu_count()` that returns the number of CPU cores available to the current process, using `os` module.",
    "options": [
      "import os\ndef get_cpu_count():\n    return os.cpu_count()",
      "import multiprocessing\ndef get_cpu_count():\n    return multiprocessing.cpu_count()",
      "def get_cpu_count():\n    return 1",
      "import platform\ndef get_cpu_count():\n    return platform.processor()"
    ],
    "answer": "import os\ndef get_cpu_count():\n    return os.cpu_count()"
  },
  {
    "question": "Basic Theory: What is the output of `3 % 2`?",
    "options": ["1", "0", "1.5", "Error"],
    "answer": "1"
  },
  {
    "question": "Basic Coding: What is the output of `my_tuple = (1, 2, 3); print(my_tuple[0])`?",
    "options": ["1", "2", "3", "Error"],
    "answer": "1"
  },
  {
    "question": "Intermediate Theory: What is 'polymorphism' in Python OOP?",
    "options": [
      "It means a class can have multiple constructors.",
      "It allows objects of different classes to be treated as objects of a common type (e.g., a base class or an interface), enabling a single interface to represent different underlying forms (many forms).",
      "It is a technique for securely hiding data within an object.",
      "It refers to the ability of a function to accept different numbers of arguments."
    ],
    "answer": "It allows objects of different classes to be treated as objects of a common type (e.g., a base class or an interface), enabling a single interface to represent different underlying forms (many forms)."
  },
  {
    "question": "Intermediate Coding: Write a function `filter_dict(d, condition)` that filters a dictionary based on a lambda condition applied to its values.",
    "options": [
      "def filter_dict(d, condition):\n    return {k: v for k, v in d.items() if condition(v)}",
      "def filter_dict(d, condition):\n    filtered = {}\n    for k, v in d.items():\n        if condition(v):\n            filtered[k] = v\n    return filtered",
      "def filter_dict(d, condition):\n    return d",
      "def filter_dict(d, condition):\n    return {k: v for k, v in d.items()}"
    ],
    "answer": "def filter_dict(d, condition):\n    return {k: v for k, v in d.items() if condition(v)}"
  },
  {
    "question": "Advanced Theory: Explain the purpose of `super()` in Python's multiple inheritance.",
    "options": [
      "`super()` always calls the method of the immediate parent class listed in the inheritance.",
      "`super()` provides a way to refer to parent classes in a flexible and cooperative manner, following the Method Resolution Order (MRO) to correctly call the next method in the inheritance chain, regardless of the direct parent.",
      "`super()` is used for private method access only.",
      "`super()` is a keyword for creating abstract classes."
    ],
    "answer": "`super()` provides a way to refer to parent classes in a flexible and cooperative manner, following the Method Resolution Order (MRO) to correctly call the next method in the inheritance chain, regardless of the direct parent."
  },
  {
    "question": "Advanced Coding: Write a function `read_large_file_line_by_line(filepath)` that reads a large text file line by line efficiently (using a generator).",
    "options": [
      "def read_large_file_line_by_line(filepath):\n    with open(filepath, 'r') as f:\n        for line in f:\n            yield line.strip()",
      "def read_large_file_line_by_line(filepath):\n    return open(filepath, 'r').readlines()",
      "def read_large_file_line_by_line(filepath):\n    return open(filepath, 'r').read().splitlines()",
      "def read_large_file_line_by_line(filepath):\n    yield open(filepath, 'r').read()"
    ],
    "answer": "def read_large_file_line_by_line(filepath):\n    with open(filepath, 'r') as f:\n        for line in f:\n            yield line.strip()"
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
