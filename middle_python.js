let questions = [
  {
    "question": "What is the difference between 'is' and '==' in Python?",
    "options": ["'is' checks value, '==' checks identity", "'is' checks identity, '==' checks value", "Both are the same", "'is' checks type only"],
    "answer": "'is' checks identity, '==' checks value"
  },
  {
    "question": "What is a lambda function in Python?",
    "options": ["A function with no name", "A function that runs only once", "A function defined using def", "A recursive function"],
    "answer": "A function with no name"
  },
  {
    "question": "Which method is used to get keys from a dictionary?",
    "options": ["getkeys()", "keys()", "allkeys()", "fetchkeys()"],
    "answer": "keys()"
  },
  {
    "question": "How do you handle exceptions in Python?",
    "options": ["try-catch", "try-handle", "try-except", "catch-throw"],
    "answer": "try-except"
  },
  {
    "question": "What is the output of: list(range(0, 10, 2))?",
    "options": ["[0, 2, 4, 6, 8]", "[1, 3, 5, 7, 9]", "[0, 2, 3, 6, 8]", "Error"],
    "answer": "[0, 2, 4, 6, 8]"
  },
  {
    "question": "What does the strip() method do?",
    "options": ["Removes spaces only from start", "Removes spaces only from end", "Removes spaces from both ends", "Removes all characters"],
    "answer": "Removes spaces from both ends"
  },
  {
    "question": "What will be the output of: bool('False')?",
    "options": ["False", "True", "None", "Error"],
    "answer": "True"
  },
  {
    "question": "What does the pop() method do in a list?",
    "options": ["Adds an element", "Removes last element", "Reverses list", "Removes all elements"],
    "answer": "Removes last element"
  },
  {
    "question": "Which keyword is used to define an anonymous function?",
    "options": ["lambda", "anon", "def", "func"],
    "answer": "lambda"
  },
  {
    "question": "What is the output of: [1,2,3] * 2?",
    "options": ["[2,4,6]", "[1,2,3,1,2,3]", "[1,2,3,2]", "Error"],
    "answer": "[1,2,3,1,2,3]"
  },
  {
    "question": "How do you import a module in Python?",
    "options": ["use module", "import module", "include module", "attach module"],
    "answer": "import module"
  },
  {
    "question": "What is the use of 'pass' in Python?",
    "options": ["To skip iteration", "To end loop", "To do nothing", "To throw error"],
    "answer": "To do nothing"
  },
  {
    "question": "What does the enumerate() function return?",
    "options": ["Only values", "Only indexes", "Tuple of index and value", "List"],
    "answer": "Tuple of index and value"
  },
  {
    "question": "Which of these types is unordered?",
    "options": ["List", "Tuple", "Set", "String"],
    "answer": "Set"
  },
  {
    "question": "Which operator is used for floor division?",
    "options": ["/", "//", "%", "**"],
    "answer": "//"
  },
  {
    "question": "What is the difference between list and tuple?",
    "options": ["Lists are immutable, tuples are mutable", "Both are same", "Tuples are immutable, lists are mutable", "Tuples allow duplicates"],
    "answer": "Tuples are immutable, lists are mutable"
  },
  {
    "question": "How do you create a set?",
    "options": ["[]", "()", "{}", "set()"],
    "answer": "set()"
  },
  {
    "question": "Which method returns number of times an item appears in list?",
    "options": ["count()", "find()", "match()", "index()"],
    "answer": "count()"
  },
  {
    "question": "What does zip() do?",
    "options": ["Sorts lists", "Combines elements", "Duplicates list", "Reverses list"],
    "answer": "Combines elements"
  },
  {
    "question": "How can you convert a list to a set?",
    "options": ["list(set)", "set(list)", "convert(list)", "make_set(list)"],
    "answer": "set(list)"
  },
  {
    "question": "Which statement is used to define an abstract method in Python?",
    "options": ["abstract()", "def", "@abstractmethod", "pass"],
    "answer": "@abstractmethod"
  },
  {
    "question": "What is the purpose of __init__ in Python?",
    "options": ["Initialize the module", "Initialize class object", "Start main function", "It is a keyword"],
    "answer": "Initialize class object"
  },
  {
    "question": "Which library is used for data analysis in Python?",
    "options": ["matplotlib", "numpy", "pandas", "scipy"],
    "answer": "pandas"
  },
  {
    "question": "What will len(set([1,2,2,3,4])) return?",
    "options": ["5", "4", "3", "2"],
    "answer": "4"
  },
  {
    "question": "What is the result of [1,2,3].index(2)?",
    "options": ["0", "1", "2", "3"],
    "answer": "1"
  },
  {
    "question": "Which method adds an element at a specific position in a list?",
    "options": ["append()", "insert()", "add()", "push()"],
    "answer": "insert()"
  },
  {
    "question": "Which of the following is a valid way to open a file?",
    "options": ["file.open()", "openfile()", "open()", "read()"],
    "answer": "open()"
  },
  {
    "question": "What does the 'finally' block do?",
    "options": ["Executes only if there's no error", "Executes if there's an error", "Always executes", "Never executes"],
    "answer": "Always executes"
  },
  {
    "question": "What is a list comprehension?",
    "options": ["Loop for lists", "Short syntax for creating lists", "A list of loops", "A function"],
    "answer": "Short syntax for creating lists"
  },
  {
    "question": "What is the result of type([])?",
    "options": ["<class 'tuple'>", "<class 'list'>", "<class 'set'>", "<class 'dict'>"],
    "answer": "<class 'list'>"
  },
  {
    "question": "Which keyword is used to create a generator in Python?",
    "options": ["yield", "return", "gen", "generate"],
    "answer": "yield"
  },
  {
    "question": "What does isinstance(obj, cls) do?",
    "options": ["Checks if obj is a class", "Checks type of obj", "Checks if obj is instance of class", "None"],
    "answer": "Checks if obj is instance of class"
  },
  {
    "question": "Which of the following is not a valid Python datatype?",
    "options": ["list", "float", "real", "set"],
    "answer": "real"
  },
  {
    "question": "How do you install packages in Python?",
    "options": ["python install", "pip install", "install python", "package install"],
    "answer": "pip install"
  },
  {
    "question": "What is the result of type(lambda x: x)?",
    "options": ["function", "<class 'lambda'>", "<class 'function'>", "method"],
    "answer": "<class 'function'>"
  },
  {
    "question": "What does slicing [1:3] return from [0,1,2,3,4]?",
    "options": ["[1, 2, 3]", "[1, 2]", "[2, 3]", "[0,1,2]"],
    "answer": "[1, 2]"
  },
  {
    "question": "How do you delete a key from a dictionary?",
    "options": ["del dict[key]", "remove dict[key]", "delete dict.key", "pop dict[key]"],
    "answer": "del dict[key]"
  },
  {
    "question": "What is recursion?",
    "options": ["Calling function from another", "Looping a function", "Function calling itself", "Nested function"],
    "answer": "Function calling itself"
  },
  {
    "question": "Which function is used to get input from user?",
    "options": ["scan()", "input()", "get()", "readline()"],
    "answer": "input()"
  },
  {
    "question": "How do you write multiple conditions in if?",
    "options": ["if (x and y):", "if x, y:", "if x or y:", "if (x; y):"],
    "answer": "if (x and y):"
  },
  {
    "question": "What does int('10') return?",
    "options": ["'10'", "10", "Error", "None"],
    "answer": "10"
  },
  {
    "question": "Which method returns index of first occurrence of an item?",
    "options": ["find()", "index()", "locate()", "match()"],
    "answer": "index()"
  },
  {
    "question": "What will be the result of round(3.14159, 2)?",
    "options": ["3.14", "3.1", "3", "3.141"],
    "answer": "3.14"
  },
  {
    "question": "Which function converts object to string?",
    "options": ["toStr()", "str()", "string()", "convert()"],
    "answer": "str()"
  },
  {
    "question": "What does chr(65) return?",
    "options": ["'A'", "'a'", "65", "Error"],
    "answer": "'A'"
  },
  {
    "question": "What is a decorator in Python?",
    "options": ["A string formatter", "A design pattern", "Function that modifies another", "Loop wrapper"],
    "answer": "Function that modifies another"
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
