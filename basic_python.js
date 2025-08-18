let questions = [
  {
    "question": "What is the correct file extension for Python files?",
    "options": [".pyth", ".pt", ".py", ".pyt"],
    "answer": ".py"
  },
  {
    "question": "Which keyword is used to define a function in Python?",
    "options": ["func", "define", "def", "function"],
    "answer": "def"
  },
  {
    "question": "What data type is the result of: 3 / 2 in Python?",
    "options": ["int", "float", "double", "decimal"],
    "answer": "float"
  },
  {
    "question": "Which of the following is a mutable data type?",
    "options": ["tuple", "list", "int", "str"],
    "answer": "list"
  },
  {
    "question": "Which symbol is used to comment a line in Python?",
    "options": ["//", "#", "/*", "--"],
    "answer": "#"
  },
  {
    "question": "How do you start a Python comment?",
    "options": ["//", "#", "<!--", "--"],
    "answer": "#"
  },
  {
    "question": "Which function is used to display output in Python?",
    "options": ["echo()", "print()", "write()", "show()"],
    "answer": "print()"
  },
  {
    "question": "Which keyword is used to define a variable?",
    "options": ["let", "var", "define", "None of these"],
    "answer": "None of these"
  },
  {
  "question": "What is the keyword used to define a loop that continues while a condition is true?",
  "options": ["for", "repeat", "while", "loop"],
  "answer": "while"
},
{
  "question": "Which method is used to remove a specific item from a list?",
  "options": ["delete()", "pop()", "remove()", "discard()"],
  "answer": "remove()"
},
  {
    "question": "What is the correct way to create a variable in Python?",
    "options": ["x = 5", "int x = 5", "var x = 5", "x := 5"],
    "answer": "x = 5"
  },
  {
    "question": "Which data type is used to store True or False values?",
    "options": ["int", "bool", "float", "string"],
    "answer": "bool"
  },
  {
    "question": "How do you create a list in Python?",
    "options": ["{}", "[]", "()", "<>"],
    "answer": "[]"
  },
  {
    "question": "Which method adds an item to the end of a list?",
    "options": ["add()", "append()", "push()", "insert()"],
    "answer": "append()"
  },
  {
    "question": "Which keyword is used to check a condition?",
    "options": ["if", "when", "for", "check"],
    "answer": "if"
  },
  {
    "question": "What is the result of 2 ** 3?",
    "options": ["6", "8", "9", "5"],
    "answer": "8"
  },
  {
    "question": "What is the result of: 10 % 3?",
    "options": ["0", "3", "1", "2"],
    "answer": "1"
  },
  {
    "question": "Which function is used to get the length of a list?",
    "options": ["count()", "size()", "length()", "len()"],
    "answer": "len()"
  },
  {
    "question": "What is the output of len('Hello')?",
    "options": ["4", "5", "6", "Error"],
    "answer": "5"
  },
  {
    "question": "What is the correct way to start a 'for' loop?",
    "options": ["for x to y:", "for x in y:", "foreach x y:", "loop x in y:"],
    "answer": "for x in y:"
  },
  {
    "question": "Which statement is used to skip an iteration in a loop?",
    "options": ["pass", "skip", "continue", "break"],
    "answer": "continue"
  },
  {
    "question": "Which statement is used to stop a loop?",
    "options": ["exit", "quit", "stop", "break"],
    "answer": "break"
  },
  {
    "question": "Which operator is used to compare two values?",
    "options": ["=", "==", "===", "equals"],
    "answer": "=="
  },
  {
    "question": "What is the output of: type(10)?",
    "options": ["<class 'int'>", "int", "number", "integer"],
    "answer": "<class 'int'>"
  },
  {
    "question": "How do you start defining a class in Python?",
    "options": ["def class:", "start class:", "class MyClass:", "MyClass class:"],
    "answer": "class MyClass:"
  },
  {
    "question": "What is the correct way to create a dictionary?",
    "options": ["[]", "()", "<>", "{}"],
    "answer": "{}"
  },
  {
    "question": "What will be the output of: 'Hello'.lower()?",
    "options": ["hello", "HELLO", "Hello", "error"],
    "answer": "hello"
  },
  {
    "question": "Which function is used to convert a string to an integer?",
    "options": ["int()", "str()", "float()", "input()"],
    "answer": "int()"
  },
  {
    "question": "How do you take input from a user in Python?",
    "options": ["read()", "input()", "scan()", "get()"],
    "answer": "input()"
  },
  {
    "question": "Which function is used to round a number?",
    "options": ["round()", "ceil()", "floor()", "cut()"],
    "answer": "round()"
  },
  {
    "question": "Which of these is a valid boolean value in Python?",
    "options": ["yes", "no", "True", "On"],
    "answer": "True"
  },
  {
    "question": "What is the default value of a variable that is not initialized?",
    "options": ["0", "null", "None", "undefined"],
    "answer": "None"
  },
  {
    "question": "Which of the following is not a Python data type?",
    "options": ["list", "set", "map", "tuple"],
    "answer": "map"
  },
  {
    "question": "What is the index of the first element in a list?",
    "options": ["0", "1", "-1", "first"],
    "answer": "0"
  },
  {
    "question": "Which keyword is used to create a loop?",
    "options": ["repeat", "loop", "for", "iterate"],
    "answer": "for"
  },
  {
    "question": "Which function returns the largest item in an iterable?",
    "options": ["biggest()", "max()", "high()", "top()"],
    "answer": "max()"
  },
  {
    "question": "Which keyword is used for conditional branching?",
    "options": ["switch", "if", "select", "case"],
    "answer": "if"
  },
  {
    "question": "What symbol is used for assignment?",
    "options": ["==", "=", ":=", "::"],
    "answer": "="
  },
  {
    "question": "What is the result of 5 // 2?",
    "options": ["2.5", "2", "3", "Error"],
    "answer": "2"
  },
  {
    "question": "How do you check the type of a variable?",
    "options": ["typeof()", "type()", "checktype()", "instance()"],
    "answer": "type()"
  },
  {
    "question": "Which function is used to sort a list?",
    "options": ["sort()", "arrange()", "order()", "sequence()"],
    "answer": "sort()"
  },
  {
    "question": "What is the keyword to define a constant in Python?",
    "options": ["const", "define", "final", "None of these"],
    "answer": "None of these"
  },
  {
    "question": "Which symbol is used for logical AND?",
    "options": ["&&", "&", "and", "AND"],
    "answer": "and"
  },
  {
    "question": "How do you define a multi-line string?",
    "options": ["'''text'''", "\"text\"", "‘text’", "`text`"],
    "answer": "'''text'''"
  },
  {
    "question": "What does the len() function return for an empty list?",
    "options": ["null", "undefined", "0", "None"],
    "answer": "0"
  },
  {
    "question": "Which function is used to convert a number to a string?",
    "options": ["int()", "str()", "string()", "chr()"],
    "answer": "str()"
  },
  {
    "question": "Which method removes all items from a list?",
    "options": ["clear()", "delete()", "remove()", "pop()"],
    "answer": "clear()"
  },
  {
    "question": "What is the output of: '5' + '5'?",
    "options": ["10", "55", "Error", "5 5"],
    "answer": "55"
  },
  {
    "question": "Which operator is used for logical OR?",
    "options": ["||", "or", "|", "OR"],
    "answer": "or"
  },
  {
    "question": "What is the output of bool([])?",
    "options": ["True", "False", "None", "Error"],
    "answer": "False"
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
