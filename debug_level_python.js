let questions = [
  {
    "code": "def divide(a, b):\n    print(a / b)\n\ndivide(10, 0)",
    "question": "What error will this code raise?",
    "options": [
      "A. `TypeError`: Cannot divide integers.",
      "B. `ZeroDivisionError`: Division by zero is not allowed.",
      "C. `NameError`: `b` is not defined.",
      "D. `ValueError`: Invalid arguments for division."
    ],
    "answer": "B. `ZeroDivisionError`: Division by zero is not allowed."
  },
  {
    "code": "my_list = [1, 2, 3]\nprint(my_list[3])",
    "question": "What error will this code raise?",
    "options": [
      "A. `TypeError`: List index must be an integer.",
      "B. `ValueError`: Invalid list index.",
      "C. `IndexError`: List index out of range.",
      "D. `KeyError`: List does not contain key 3."
    ],
    "answer": "C. `IndexError`: List index out of range."
  },
  {
    "code": "my_dict = {'a': 1, 'b': 2}\nprint(my_dict['c'])",
    "question": "What error will this code raise?",
    "options": [
      "A. `AttributeError`: Dictionary has no attribute 'c'.",
      "B. `IndexError`: Dictionary index out of range.",
      "C. `ValueError`: 'c' is not a valid dictionary value.",
      "D. `KeyError`: The key 'c' does not exist in the dictionary."
    ],
    "answer": "D. `KeyError`: The key 'c' does not exist in the dictionary."
  },
  {
    "code": "x = 5\ndef modify_x():\n    x = x + 1\n    print(x)\n\nmodify_x()",
    "question": "What error will this code raise?",
    "options": [
      "A. `NameError`: `x` is not defined in `modify_x`.",
      "B. `UnboundLocalError`: Local variable `x` referenced before assignment.",
      "C. `TypeError`: Cannot add integer to None.",
      "D. No error, output will be 6."
    ],
    "answer": "B. `UnboundLocalError`: Local variable `x` referenced before assignment."
  },
  {
    "code": "class MyClass:\n    count = 0\n    def __init__(self, name):\n        self.name = name\n        self.count += 1 # Intended to count instances\n\nobj1 = MyClass('A')\nobj2 = MyClass('B')\nprint(MyClass.count)\nprint(obj1.count)",
    "question": "What is the unexpected output related to `count`, and why?",
    "options": [
      "A. `MyClass.count` will be 2, `obj1.count` will be 1. This is correct behavior.",
      "B. `MyClass.count` will be 0, `obj1.count` will be 1. `count` is only an instance variable.",
      "C. `MyClass.count` will be 2, `obj1.count` will be 2. `count` is a class variable shared by all instances, so `self.count += 1` updates the class variable directly. (Actual behavior: `obj1.count` will look up `MyClass.count` after the first assignment, leading to 2, but subsequent assignments on `self.count` will create *instance* attributes if `count` wasn't accessed as `MyClass.count`.) More accurately, it will be `2` and `2`.",
      "D. `MyClass.count` will be 0, `obj1.count` will be 0. The counter is not incremented."
    ],
    "answer": "C. `MyClass.count` will be 2, `obj1.count` will be 2. `count` is a class variable shared by all instances, so `self.count += 1` updates the class variable directly. (Actual behavior: `obj1.count` will look up `MyClass.count` after the first assignment, leading to 2, but subsequent assignments on `self.count` will create *instance* attributes if `count` wasn't accessed as `MyClass.count`.) More accurately, it will be `2` and `2`."
  },
  {
    "code": "class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        raise NotImplementedError(\"Subclasses must implement this method\")\n\nclass Dog(Animal):\n    def __init__(self, name, breed):\n        self.breed = breed\n\nd = Dog('Buddy', 'Golden Retriever')\nd.speak()",
    "question": "What error occurs when `d.speak()` is called, and what is the primary oversight in `Dog`'s `__init__` method?",
    "options": [
      "A. `AttributeError` because `name` is not set. `Dog.__init__` does not call `super().__init__(name)`.",
      "B. `NotImplementedError` because `Dog` does not override `speak()`. This is the direct cause of the error. The oversight is that `super().__init__(name)` is not called in `Dog`'s `__init__`, meaning `self.name` is never set on the `Dog` instance.",
      "C. `TypeError` because `breed` is not recognized.",
      "D. No error, but `speak()` does nothing."
    ],
    "answer": "B. `NotImplementedError` because `Dog` does not override `speak()`. This is the direct cause of the error. The oversight is that `super().__init__(name)` is not called in `Dog`'s `__init__`, meaning `self.name` is never set on the `Dog` instance."
  },
  {
    "code": "for i in range(5):\n    if i == 3:\n    print('Found 3') # Notice the indentation",
    "question": "What error will this code raise?",
    "options": [
      "A. `SyntaxError`: Invalid syntax for `if` statement.",
      "B. `IndentationError`: Expected an indented block.",
      "C. `TypeError`: `i` is not an integer.",
      "D. `NameError`: `print` is not defined."
    ],
    "answer": "B. `IndentationError`: Expected an indented block."
  },
  {
    "code": "def process_data(data, config={}): # Mutable default argument\n    config['processed'] = True\n    return config\n\nconf1 = process_data('data1')\nconf2 = process_data('data2')\nprint(conf1)\nprint(conf2)",
    "question": "What is the output of this code, and why is it problematic?",
    "options": [
      "A. Output: `{'processed': True}`, `{'processed': True}`. This is the correct and expected behavior.",
      "B. Output: `{'processed': True}`, `{'processed': True}`. Problem: `config` is a mutable default argument, created once. Both `conf1` and `conf2` refer to the *same* dictionary object, leading to shared state.",
      "C. Output: `{}`, `{}`. The dictionary is not modified.",
      "D. Output: `Error`. Default arguments cannot be dictionaries."
    ],
    "answer": "B. Output: `{'processed': True}`, `{'processed': True}`. Problem: `config` is a mutable default argument, created once. Both `conf1` and `conf2` refer to the *same* dictionary object, leading to shared state."
  },
  {
    "code": "my_tuple = (1, 2, [3, 4])\nmy_tuple[0] = 5\nprint(my_tuple)",
    "question": "What error will this code raise, and what does it imply about tuples?",
    "options": [
      "A. `IndexError`: Tuple index out of range.",
      "B. `TypeError`: 'tuple' object does not support item assignment. Tuples are immutable.",
      "C. `ValueError`: Invalid value for tuple assignment.",
      "D. No error, output will be `(5, 2, [3, 4])`."
    ],
    "answer": "B. `TypeError`: 'tuple' object does not support item assignment. Tuples are immutable."
  },
  {
    "code": "a = 0.1 + 0.1 + 0.1\nb = 0.3\nprint(a == b)\nprint(a is b)",
    "question": "What is the most likely output of this code, and why is `a == b` potentially `False`?",
    "options": [
      "A. `True`\n`True`. Floating-point comparisons are always exact.",
      "B. `False`\n`False`. Floating-point arithmetic can have precision issues, leading to `a` being slightly different from `b`. `is` checks for object identity, which is usually `False` for distinct float objects.",
      "C. `True`\n`False`. Python optimizes float values for `is` comparison.",
      "D. `True`\n`True`. Python interning always applies to floats."
    ],
    "answer": "B. `False`\n`False`. Floating-point arithmetic can have precision issues, leading to `a` being slightly different from `b`. `is` checks for object identity, which is usually `False` for distinct float objects."
  },
  {
    "code": "my_string = 'Hello, Python!'\nmy_string[0] = 'h'\nprint(my_string)",
    "question": "What error will this code raise, and why?",
    "options": [
      "A. `SyntaxError`: Invalid assignment to string.",
      "B. `TypeError`: 'str' object does not support item assignment. Strings are immutable in Python.",
      "C. `IndexError`: String index out of range.",
      "D. `ValueError`: 'h' is not a valid string character."
    ],
    "answer": "B. `TypeError`: 'str' object does not support item assignment. Strings are immutable in Python."
  },
  {
    "code": "def generate_sequence():\n    yield 1\n    yield 2\n\ngen = generate_sequence()\nprint(list(gen))\nprint(list(gen)) # Second attempt to use",
    "question": "What is the output of the second `print(list(gen))` statement, and why?",
    "options": [
      "A. `[1, 2]`. Generators can be iterated multiple times.",
      "B. `[1, 2]`. The generator resets after each conversion to a list.",
      "C. `[]`. A generator is an iterator that can only be exhausted once. After the first conversion to a list, it's empty.",
      "D. `Error`. Generators cannot be converted to lists twice."
    ],
    "answer": "C. `[]`. A generator is an iterator that can only be exhausted once. After the first conversion to a list, it's empty."
  },
  {
    "code": "import time\nimport asyncio\n\nasync def my_async_task():\n    print('Starting task...')\n    time.sleep(2) # Blocking call\n    print('Task finished.')\n\nasyncio.run(my_async_task())",
    "question": "What is the fundamental issue with `time.sleep(2)` in an `asyncio` coroutine?",
    "options": [
      "A. It raises a `TypeError` because `time.sleep` is not awaited.",
      "B. It blocks the entire event loop, preventing other coroutines from running concurrently, thus defeating the purpose of `asyncio`.",
      "C. It causes a `RecursionError` for large sleep times.",
      "D. It works correctly and is the standard way to pause in `asyncio`."
    ],
    "answer": "B. It blocks the entire event loop, preventing other coroutines from running concurrently, thus defeating the purpose of `asyncio`."
  },
  {
    "code": "data = [1, 2, 3]\nfor i in range(len(data)):\n    if data[i] == 2:\n        data.remove(data[i])\nprint(data)",
    "question": "What is the unexpected output of this code, and why?",
    "options": [
      "A. `[1, 3]`. Correctly removes the even number.",
      "B. `[1, 3]`. Incorrect because modifying a list while iterating over it using indices can lead to skipped elements or `IndexError` (in this specific case, 3 is skipped). The output will be `[1, 3]`. More accurately, `data[1]` is removed, shifting `3` to `index 1`, but the loop advances `i` to `2`.",
      "C. `Error`. Cannot remove elements during iteration.",
      "D. `[1, 2, 3]`. The list remains unchanged."
    ],
    "answer": "B. `[1, 3]`. Incorrect because modifying a list while iterating over it using indices can lead to skipped elements or `IndexError` (in this specific case, 3 is skipped). The output will be `[1, 3]`. More accurately, `data[1]` is removed, shifting `3` to `index 1`, but the loop advances `i` to `2`."
  },
  {
    "code": "def func():\n    local_var = 'I am local'\n\nprint(local_var)",
    "question": "What error will this code raise, and why?",
    "options": [
      "A. `TypeError`: `local_var` is not a string.",
      "B. `AttributeError`: `func` has no attribute `local_var`.",
      "C. `NameError`: `local_var` is defined within the function's local scope and is not accessible outside it.",
      "D. No error, output will be `I am local`."
    ],
    "answer": "C. `NameError`: `local_var` is defined within the function's local scope and is not accessible outside it."
  },
  {
    "code": "def divide(a, b):\n    return a / b\n\ntry:\n    result = divide(10, 0)\nexcept:\n    print(\"An error occurred!\")",
    "question": "What is the main problem with using a 'bare except' (`except:`) in general practice?",
    "options": [
      "A. It catches `SystemExit` and `KeyboardInterrupt`, making it difficult to gracefully exit the program or debug.",
      "B. It makes the code run slower.",
      "C. It prevents other functions from handling exceptions.",
      "D. It is syntactically incorrect in Python 3."
    ],
    "answer": "A. It catches `SystemExit` and `KeyboardInterrupt`, making it difficult to gracefully exit the program or debug."
  },
  {
    "code": "items = [('apple', 5), ('banana', 2), ('cherry', 8)]\n\nsorted_items = sorted(items, key=lambda item: item[1], reverse=True)\n\n# Now, filter items with quantity > 3\nfiltered_items = [item for item in sorted_items if item[1] > 3]\n\n# Question about scope:\n# print(item) # Would this work?",
    "question": "Regarding the commented-out `print(item)` line, why would it typically raise a `NameError` after the list comprehension?",
    "options": [
      "A. `item` is a global variable and gets overwritten.",
      "B. The variable `item` in a list comprehension has a local scope specific to the comprehension and does not 'leak' into the surrounding scope after it finishes.",
      "C. List comprehensions run in a separate thread.",
      "D. `item` is a reserved keyword in Python."
    ],
    "answer": "B. The variable `item` in a list comprehension has a local scope specific to the comprehension and does not 'leak' into the surrounding scope after it finishes."
  },
  {
    "code": "my_list = [1, 2, 'three', 4]\ntotal = sum(my_list)\nprint(total)",
    "question": "What error will this code raise, and why?",
    "options": [
      "A. `ValueError`: 'three' cannot be converted to a number.",
      "B. `TypeError`: Unsupported operand type(s) for +: 'int' and 'str'. The `sum()` function requires all elements to be numeric.",
      "C. `IndexError`: List contains a non-numeric item.",
      "D. No error, output will be `10three` (string concatenation)."
    ],
    "answer": "B. `TypeError`: Unsupported operand type(s) for +: 'int' and 'str'. The `sum()` function requires all elements to be numeric."
  },
  {
    "code": "def outer_function():\n    x = 10\n    def inner_function():\n        y = x + 5\n        x = 20 # Intent to reassign outer x\n        print(y)\n    inner_function()\n\nouter_function()",
    "question": "What error does `inner_function()` encounter, and why?",
    "options": [
      "A. `TypeError`: `x` is not an integer.",
      "B. `NameError`: `x` is not defined in `inner_function`.",
      "C. `UnboundLocalError`: Local variable `x` referenced before assignment. Python treats `x = 20` as a new local variable `x`, but `x + 5` tries to use it before it's assigned *locally*.",
      "D. No error, output will be 15, then 20."
    ],
    "answer": "C. `UnboundLocalError`: Local variable `x` referenced before assignment. Python treats `x = 20` as a new local variable `x`, but `x + 5` tries to use it before it's assigned *locally*."
  },
  {
    "code": "def factorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * factorial(n + 1) # Logical error here\n\nprint(factorial(5))",
    "question": "What kind of error will this code eventually cause, and why?",
    "options": [
      "A. `TypeError`: Invalid argument type for factorial.",
      "B. `RecursionError`: Maximum recursion depth exceeded. The recursive call `factorial(n + 1)` makes the function call itself with increasing arguments, leading to infinite recursion.",
      "C. `ZeroDivisionError`: Division by zero in the calculation.",
      "D. No error, it will calculate factorial correctly."
    ],
    "answer": "B. `RecursionError`: Maximum recursion depth exceeded. The recursive call `factorial(n + 1)` makes the function call itself with increasing arguments, leading to infinite recursion."
  },
  {
    "code": "from datetime import datetime\n\nclass MyObject:\n    def __init__(self, data):\n        self.data = data\n        self.timestamp = datetime.now() # This captures time at object creation\n\ndef log_data(obj):\n    # Simulate some processing delay\n    for _ in range(1000000):\n        pass\n    print(f'Data: {obj.data}, Logged at: {datetime.now()} (Created at: {obj.timestamp})')\n\n\nobj = MyObject('Important Info')\nlog_data(obj)",
    "question": "This code demonstrates a common pitfall. Why might the 'Logged at' and 'Created at' timestamps be different?",
    "options": [
      "A. They will always be identical because Python's `datetime.now()` is precise.",
      "B. `obj.timestamp` captures the time when the `MyObject` instance is created, while `datetime.now()` in `log_data` captures the time *after* the simulated delay, leading to a difference.",
      "C. `datetime.now()` has a random component.",
      "D. The `log_data` function modifies `obj.timestamp` internally."
    ],
    "answer": "B. `obj.timestamp` captures the time when the `MyObject` instance is created, while `datetime.now()` in `log_data` captures the time *after* the simulated delay, leading to a difference."
  },
  {
    "code": "def greet(name, greeting='Hello'):\n    print(f'{greeting}, {name}!')\n\ngreet(greeting='Hi', 'Alice') # Positional arg after keyword arg",
    "question": "What error will this code raise, and why?",
    "options": [
      "A. `SyntaxError`: Positional argument follows keyword argument.",
      "B. `TypeError`: `greeting` is already defined.",
      "C. `NameError`: `Alice` is not defined.",
      "D. No error, output will be `Hi, Alice!`."
    ],
    "answer": "A. `SyntaxError`: Positional argument follows keyword argument."
  },
  {
    "code": "my_list = [1, 2, 3]\n\nfor i in my_list:\n    my_list.append(i + 3) # Infinite loop potential\n    if len(my_list) > 10:\n        break\nprint(my_list)",
    "question": "What is the primary issue with this code's behavior?",
    "options": [
      "A. It will correctly append 3 elements and then break.",
      "B. It creates an infinite loop (or a very long one) because appending to the list while iterating over it causes the iterator to continuously find new elements, extending the loop indefinitely until a break condition is met (or memory is exhausted).",
      "C. It will raise an `IndexError` immediately.",
      "D. The `append` method does not work inside a `for` loop."
    ],
    "answer": "B. It creates an infinite loop (or a very long one) because appending to the list while iterating over it causes the iterator to continuously find new elements, extending the loop indefinitely until a break condition is met (or memory is exhausted)."
  },
  {
    "code": "def count_up_to(n):\n    i = 0\n    while i <= n:\n        yield i\n        i += 1\n\nmy_gen = count_up_to(3)\nprint(next(my_gen))\nmy_gen.close() # Closing the generator\nprint(next(my_gen))",
    "question": "What error occurs on the last line, and why?",
    "options": [
      "A. `StopIteration`: The `close()` method raises `StopIteration` within the generator, which is propagated when `next()` is called on an already closed/exhausted generator.",
      "B. `TypeError`: `next()` cannot be called after `close()`.",
      "C. `GeneratorExit`: The generator explicitly raises this error.",
      "D. No error, output will continue from where it left off."
    ],
    "answer": "A. `StopIteration`: The `close()` method raises `StopIteration` within the generator, which is propagated when `next()` is called on an already closed/exhausted generator."
  },
  {
    "code": "class Config:\n    DEBUG = True\n\nclass ProdConfig(Config):\n    DEBUG = False\n\nclass DevConfig(Config):\n    pass\n\nprint(DevConfig.DEBUG) # 1\nConfig.DEBUG = False\nprint(DevConfig.DEBUG) # 2\nprint(ProdConfig.DEBUG) # 3",
    "question": "What are the outputs of `print` statements 1, 2, and 3, and why do `DevConfig.DEBUG` and `ProdConfig.DEBUG` behave differently after `Config.DEBUG = False`?",
    "options": [
      "A. 1: `True`, 2: `True`, 3: `False`. `DevConfig` inherits its `DEBUG` from `Config` and doesn't get updated. `ProdConfig` has its own `DEBUG` attribute, shadowing `Config`'s.",
      "B. 1: `True`, 2: `False`, 3: `False`. `DevConfig` inherits from `Config` and changes with it. `ProdConfig` has its own `DEBUG`.",
      "C. 1: `True`, 2: `False`, 3: `True`. `ProdConfig` is immutable.",
      "D. 1: `False`, 2: `False`, 3: `False`. All configs will update."
    ],
    "answer": "B. 1: `True`, 2: `False`, 3: `False`. `DevConfig` inherits from `Config` and changes with it. `ProdConfig` has its own `DEBUG`."
  },
  {
    "code": "def create_multipliers():\n    return [lambda x : i * x for i in range(5)]\n\nfor multiplier in create_multipliers():\n    print(multiplier(2))",
    "question": "What is the unexpected output of this code, and why?",
    "options": [
      "A. It prints `0, 2, 4, 6, 8` as expected.",
      "B. It raises a `TypeError` because lambda functions cannot be in a list.",
      "C. It prints `8, 8, 8, 8, 8`. The variable `i` is a closure, and its value is looked up only when the lambda is called, at which point the loop has finished and `i` is 4.",
      "D. It prints `0, 0, 0, 0, 0` because `i` is not captured correctly."
    ],
    "answer": "C. It prints `8, 8, 8, 8, 8`. The variable `i` is a closure, and its value is looked up only when the lambda is called, at which point the loop has finished and `i` is 4."
  },
  {
    "code": "my_set = {1, 2, 3}\nprint(my_set[0])",
    "question": "What error does this code raise, and why?",
    "options": [
      "A. `IndexError`: Set index out of range.",
      "B. `KeyError`: The key 0 does not exist.",
      "C. `TypeError`: 'set' object is not subscriptable. Sets are unordered and do not support indexing.",
      "D. No error, it will print 1."
    ],
    "answer": "C. `TypeError`: 'set' object is not subscriptable. Sets are unordered and do not support indexing."
  },
  {
    "code": "import json\n\nmy_data = {'name': 'John', 'age': 30, 'city': None}\njson_string = json.dumps(my_data, indent=4)\n\n# What if 'city' was a tuple?\nmy_data_tuple = {'city': (34.05, -118.24)}\n# json.dumps(my_data_tuple) # What would happen?",
    "question": "What happens when you try to serialize a dictionary containing a tuple into JSON using `json.dumps()`?",
    "options": [
      "A. It raises a `TypeError` because tuples are not a valid JSON type.",
      "B. It works correctly; `json.dumps` converts the Python tuple `(34.05, -118.24)` into a JSON array `[34.05, -118.24]`.",
      "C. It converts the tuple into a string.",
      "D. It silently ignores the tuple and omits it from the JSON string."
    ],
    "answer": "B. It works correctly; `json.dumps` converts the Python tuple `(34.05, -118.24)` into a JSON array `[34.05, -118.24]`."
  },
  {
    "code": "def my_func(a, b, c):\n    print(a, b, c)\n\nargs = [1, 2, 3]\nmy_func(args)",
    "question": "What error will this code raise, and why?",
    "options": [
      "A. `ValueError`: `args` is not a valid argument.",
      "B. `TypeError`: `my_func()` missing 2 required positional arguments: 'b' and 'c'. The list `args` is passed as a single argument `a`.",
      "C. No error, it will print `1 2 3`.",
      "D. `IndexError`: The list is not unpacked correctly."
    ],
    "answer": "B. `TypeError`: `my_func()` missing 2 required positional arguments: 'b' and 'c'. The list `args` is passed as a single argument `a`."
  },
  {
    "code": "class MyClass:\n    def __init__(self):\n        self.value = 10\n\n    def get_value(self):\n        return self.value\n\ninstance = MyClass()\nprint(instance.get_value)",
    "question": "What is the output of this code, and why is it not the integer `10`?",
    "options": [
      "A. It outputs `10` as expected.",
      "B. It outputs something like `<bound method MyClass.get_value of <__main__.MyClass object at ...>>`. This is because `instance.get_value` refers to the method object itself, but doesn't call it. It should be `instance.get_value()`.",
      "C. It raises an `AttributeError` because `get_value` is private.",
      "D. It raises a `TypeError` because `get_value` requires an argument."
    ],
    "answer": "B. It outputs something like `<bound method MyClass.get_value of <__main__.MyClass object at ...>>`. This is because `instance.get_value` refers to the method object itself, but doesn't call it. It should be `instance.get_value()`."
  },
  {
    "code": "original = {'a': 1, 'b': {'x': 10, 'y': 20}}\nshallow_copy = original.copy()\n\nshallow_copy['b']['x'] = 99\n\nprint(original)",
    "question": "What is the output of this code, and what does it reveal about `dict.copy()`?",
    "options": [
      "A. `{'a': 1, 'b': {'x': 10, 'y': 20}}`. The original dictionary is unchanged.",
      "B. `{'a': 1, 'b': {'x': 99, 'y': 20}}`. `dict.copy()` performs a shallow copy. The nested dictionary `b` is a reference shared between both dictionaries, so modifying it in the copy also modifies it in the original.",
      "C. It raises a `KeyError` because 'x' cannot be modified.",
      "D. It raises a `TypeError` because nested dictionaries cannot be copied."
    ],
    "answer": "B. `{'a': 1, 'b': {'x': 99, 'y': 20}}`. `dict.copy()` performs a shallow copy. The nested dictionary `b` is a reference shared between both dictionaries, so modifying it in the copy also modifies it in the original."
  },
  {
    "code": "a = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)",
    "question": "What is the output of this code, and why?",
    "options": [
      "A. `[1, 2, 3]`. `b` is a copy of `a`, so `a` is not modified.",
      "B. `[1, 2, 3, 4]`. `b = a` does not create a copy; it makes `b` refer to the *same* list object as `a`. Modifying `b` therefore also modifies `a`.",
      "C. It raises an `AttributeError`.",
      "D. It raises a `ValueError`."
    ],
    "answer": "B. `[1, 2, 3, 4]`. `b = a` does not create a copy; it makes `b` refer to the *same* list object as `a`. Modifying `b` therefore also modifies `a`."
  },
  {
    "code": "def check_value(value):\n    if value == 1:\n        return 'One'\n    elif value == 2:\n        return 'Two'\n\nresult = check_value(3)\nprint(result)",
    "question": "What is the output of this code, and why?",
    "options": [
      "A. `Three`",
      "B. `None`. The function has no `return` statement for the case where `value` is 3, so it implicitly returns `None`.",
      "C. It raises a `ValueError` because 3 is not a valid input.",
      "D. It raises a `SyntaxError`."
    ],
    "answer": "B. `None`. The function has no `return` statement for the case where `value` is 3, so it implicitly returns `None`."
  },
  {
    "code": "my_string = '1,2,3,4,5'\nnumbers = [int(n) for n in my_string]\nprint(numbers)",
    "question": "What error will this code raise, and why?",
    "options": [
      "A. `TypeError`: `int()` cannot be used in a list comprehension.",
      "B. `ValueError`: invalid literal for int() with base 10: ','. The list comprehension iterates over each *character* of the string, including the commas, which cannot be converted to integers.",
      "C. No error, it will print `[1, 2, 3, 4, 5]`.",
      "D. `IndexError`: String index out of range."
    ],
    "answer": "B. `ValueError`: invalid literal for int() with base 10: ','. The list comprehension iterates over each *character* of the string, including the commas, which cannot be converted to integers."
  },
  {
    "code": "class A:\n    def __init__(self):\n        print('A')\n\nclass B(A):\n    def __init__(self):\n        print('B')\n\nclass C(A):\n    def __init__(self):\n        print('C')\n\nclass D(B, C):\n    def __init__(self):\n        super().__init__()\n\nD()",
    "question": "Following Python's MRO, what will be printed when an instance of `D` is created?",
    "options": [
      "A. `B`",
      "B. `A`",
      "C. `C`",
      "D. `B` and then `C`"
    ],
    "answer": "A. `B`"
  },
  {
    "code": "s = 'apple'\nprint(s.replace('p', 'b', 1))",
    "question": "What is the output of this code?",
    "options": [
      "A. `abble`",
      "B. `abple`",
      "C. `abbple`",
      "D. `apple`"
    ],
    "answer": "B. `abple`"
  },
  {
    "code": "if 'a' > 'B':\n    print('A is greater')",
    "question": "What does this code print, and why?",
    "options": [
      "A. It prints `A is greater`. In ASCII/Unicode, lowercase letters have higher ordinal values than uppercase letters.",
      "B. It prints nothing because the comparison is case-insensitive.",
      "C. It raises a `TypeError` because strings cannot be compared with `>`.",
      "D. It prints nothing because 'B' comes after 'a' alphabetically."
    ],
    "answer": "A. It prints `A is greater`. In ASCII/Unicode, lowercase letters have higher ordinal values than uppercase letters."
  },
  {
    "code": "def my_func(a, b, c):\n    print(a, b, c)\n\nparams = {'a': 1, 'c': 3}\nmy_func(**params)",
    "question": "What error will this code raise, and why?",
    "options": [
      "A. No error, it will print `1 3 None`.",
      "B. `KeyError`: The key 'b' is missing from the dictionary.",
      "C. `TypeError`: `my_func()` missing 1 required positional argument: 'b'. The dictionary unpacking provides `a` and `c`, but `b` is still missing.",
      "D. `ValueError`: Incorrect number of arguments."
    ],
    "answer": "C. `TypeError`: `my_func()` missing 1 required positional argument: 'b'. The dictionary unpacking provides `a` and `c`, but `b` is still missing."
  },
  {
    "code": "numbers = (i for i in range(3))\n\nfor num in numbers:\n    print(num)\n\nprint('Max value:', max(numbers))",
    "question": "What is the output of the final `print` statement, and why?",
    "options": [
      "A. `Max value: 2`. The `max` function can re-iterate over the generator.",
      "B. It raises a `ValueError`: `max() arg is an empty sequence`. The generator was exhausted by the `for` loop, so `max()` receives an empty iterator.",
      "C. It raises a `TypeError` because `max()` cannot be used on a generator.",
      "D. It raises a `StopIteration` error."
    ],
    "answer": "B. It raises a `ValueError`: `max() arg is an empty sequence`. The generator was exhausted by the `for` loop, so `max()` receives an empty iterator."
  },
  {
    "code": "data = [1, 2, 3]\nresult = data.append(4)\nprint(result)",
    "question": "What is the output of this code, and why?",
    "options": [
      "A. `[1, 2, 3, 4]`",
      "B. `4`",
      "C. `None`. The `list.append()` method modifies the list in-place and returns `None`.",
      "D. It raises an `AttributeError`."
    ],
    "answer": "C. `None`. The `list.append()` method modifies the list in-place and returns `None`."
  },
  {
    "code": "s = 'Hello'\n\nif s.startswith('H'):\n    s.lower()\n\nprint(s)",
    "question": "What is the output of this code, and why?",
    "options": [
      "A. `hello`",
      "B. `Hello`. The `s.lower()` method returns a new lowercase string but does not modify the original string `s` in-place, because strings are immutable.",
      "C. It raises a `TypeError`.",
      "D. It raises a `ValueError`."
    ],
    "answer": "B. `Hello`. The `s.lower()` method returns a new lowercase string but does not modify the original string `s` in-place, because strings are immutable."
  },
  {
    "code": "def func(a, b):\n    return a / b\n\ntry:\n    func(1, 0)\nfinally:\n    print('Cleanup')\nexcept ZeroDivisionError:\n    print('Error caught')",
    "question": "What error will this code raise, and why?",
    "options": [
      "A. No error, it will print `Cleanup` then `Error caught`.",
      "B. It will print `Error caught` then `Cleanup`.",
      "C. `SyntaxError`: `finally` block cannot come before `except` block.",
      "D. `ZeroDivisionError`, because the `finally` block is executed before the `except` block can handle the error."
    ],
    "answer": "C. `SyntaxError`: `finally` block cannot come before `except` block."
  },
  {
    "code": "x = 5\ndef func():\n    global x\n    y = x + 1\n    x = 10\n    return y\n\nprint(func())\nprint(x)",
    "question": "What will be the output of the two print statements?",
    "options": [
      "A. `6` and `5`",
      "B. `11` and `10`",
      "C. `6` and `10`",
      "D. `UnboundLocalError`"
    ],
    "answer": "C. `6` and `10`"
  },
  {
    "code": "my_tuple = (1, 2, [3, 4])\nmy_tuple[2].append(5)\nprint(my_tuple)",
    "question": "What is the output of this code, and why does it work?",
    "options": [
      "A. It raises a `TypeError` because tuples are immutable.",
      "B. It prints `(1, 2, [3, 4, 5])`. While the tuple itself is immutable (you can't reassign its elements), the list *inside* the tuple is a mutable object and can be modified in-place.",
      "C. It prints `(1, 2, [3, 4])` because the append operation fails silently.",
      "D. It raises an `AttributeError`."
    ],
    "answer": "B. It prints `(1, 2, [3, 4, 5])`. While the tuple itself is immutable (you can't reassign its elements), the list *inside* the tuple is a mutable object and can be modified in-place."
  },
  {
    "code": "a = [[]] * 3\na[0].append(1)\nprint(a)",
    "question": "What is the output of this code, and why?",
    "options": [
      "A. `[[1], [], []]`",
      "B. `[[1], [1], [1]]`. The `*` operator on a list containing a mutable object creates multiple references to the *same* inner list object, not independent copies.",
      "C. It raises an `IndexError`.",
      "D. It raises a `TypeError`."
    ],
    "answer": "B. `[[1], [1], [1]]`. The `*` operator on a list containing a mutable object creates multiple references to the *same* inner list object, not independent copies."
  },
  {
    "code": "def func(a, b=2, c):\n    print(a, b, c)",
    "question": "What error does this code raise, and why?",
    "options": [
      "A. No error, it's a valid function definition.",
      "B. `SyntaxError`: non-default argument follows default argument. Parameters with default values must come after parameters without default values.",
      "C. `TypeError`: `c` is not defined.",
      "D. `NameError`: `c` is not a valid parameter name."
    ],
    "answer": "B. `SyntaxError`: non-default argument follows default argument. Parameters with default values must come after parameters without default values."
  },
  {
    "code": "print(all([1, 2, True, 'hello']))\nprint(all([1, 0, True, 'hello']))",
    "question": "What is the output of these two print statements?",
    "options": [
      "A. `True` and `True`",
      "B. `True` and `False`. The `all()` function returns `False` if any element is 'falsy'. `0` is a falsy value.",
      "C. `False` and `False`",
      "D. It raises a `TypeError` because of mixed types."
    ],
    "answer": "B. `True` and `False`. The `all()` function returns `False` if any element is 'falsy'. `0` is a falsy value."
  },
  {
    "code": "my_dict = {'a': 1}\ndel my_dict['a']\nprint(my_dict['a'])",
    "question": "What error will this code raise on the last line?",
    "options": [
      "A. `IndexError`",
      "B. `ValueError`",
      "C. `KeyError`. The key 'a' was successfully deleted from the dictionary, so attempting to access it again raises a `KeyError`.",
      "D. `AttributeError`"
    ],
    "answer": "C. `KeyError`. The key 'a' was successfully deleted from the dictionary, so attempting to access it again raises a `KeyError`."
  },
  {
    "code": "try:\n    print('In try block')\nexcept:\n    print('In except block')\nelse:\n    print('In else block')",
    "question": "What is the output of this code?",
    "options": [
      "A. `In try block`",
      "B. `In try block` and `In except block`",
      "C. `In try block` and `In else block`. The `else` block executes only if the `try` block completes without raising an exception.",
      "D. `In else block`"
    ],
    "answer": "C. `In try block` and `In else block`. The `else` block executes only if the `try` block completes without raising an exception."
  },
  {
    "code": "x = (1)\ny = (1,)\nprint(type(x))\nprint(type(y))",
    "question": "What is the output of these two print statements?",
    "options": [
      "A. `<class 'tuple'>` and `<class 'tuple'>`",
      "B. `<class 'int'>` and `<class 'tuple'>`. Parentheses around a single literal are just grouping parentheses; a trailing comma is needed to create a single-element tuple.",
      "C. `<class 'int'>` and `<class 'int'>`",
      "D. It raises a `SyntaxError`."
    ],
    "answer": "B. `<class 'int'>` and `<class 'tuple'>`. Parentheses around a single literal are just grouping parentheses; a trailing comma is needed to create a single-element tuple."
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

  // ✅ Show question number and total
  document.getElementById("questionIndex").innerText = String(currentQuestion + 1).padStart(2, '0');
  document.getElementById("totalQuestions").innerText = String(questions.length).padStart(2, '0');

  // ✅ Show code + question
  document.getElementById("questionText").innerHTML = `
    <pre><code>${q.code}</code></pre>
    <p style="margin-top: 1rem;">${q.question}</p>
  `;

  // ✅ Show options
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
