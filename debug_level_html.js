let questions = [
  {
    "code": "<p>Click here to go to <link href=\"https://google.com\">Google</link>.</p>",
    "question": "This code is intended to create a hyperlink, but it's using the wrong tag. What is the correct tag to make the word 'Google' a clickable link?",
    "options": [
      "A. The code is correct.",
      "B. `<hyperlink href=\"...\">`",
      "C. `<url href=\"...\">`",
      "D. `<a href=\"...\">`"
    ]
  },
  {
    "code": "<html>\n  <head><title>Old Page</title></head>\n  <body>Content</body>\n</html>",
    "question": "A browser renders this page in 'quirks mode', causing layout issues. What declaration is missing at the very top to enable 'standards mode' for modern HTML?",
    "options": [
      "A. `<meta charset=\"UTF-8\">`",
      "B. ``",
      "C. `<!DOCTYPE html>`",
      "D. `<?xml version=\"1.0\"?>`"
    ]
  },
  {
    "code": "<img src=\"logo.png\" description=\"Company Logo\">",
    "question": "The image isn't showing any text for screen readers. What is the correct attribute for providing alternative text for an image?",
    "options": [
      "A. `text`",
      "B. `alt`",
      "C. `alternative`",
      "D. `caption`"
    ]
  },
  {
    "code": "<list>\n  <item>First</item>\n  <item>Second</item>\n</list>",
    "question": "This code for a bulleted list is incorrect. What tags should be used instead of `<list>` and `<item>`?",
    "options": [
      "A. `<ul>` and `<li>`",
      "B. `<ol>` and `<li>`",
      "C. `<blist>` and `<bitem>`",
      "D. `<dir>` and `<option>`"
    ]
  },
  {
    "code": "<p>Important Note /* This should be hidden */</p>",
    "question": "The text 'This should be hidden' is visible on the page. What is the correct way to write a comment in HTML so it doesn't display?",
    "options": [
      "A. `// This should be hidden`",
      "B. ``",
      "C. `<? This should be hidden ?>`",
      "D. `<comment>This should be hidden</comment>`"
    ]
  },
  {
    "code": "<form>\n  Username: <textfield name=\"user\" />\n</form>",
    "question": "This form uses an invalid tag for a text field. What is the correct tag to create a single-line text input?",
    "options": [
      "A. `<text>`",
      "B. `<field type=\"text\">`",
      "C. `<input type=\"text\">`",
      "D. `<form-input type=\"text\">`"
    ]
  },
  {
    "code": "<p>This is <b>important</b> text.</p>\n<p>This is <strong>important</strong> text.</p>",
    "question": "Both tags make the text bold. From a semantic (meaning) perspective, which tag should be used to indicate strong importance rather than just for styling?",
    "options": [
      "A. `<b>`",
      "B. `<strong>`",
      "C. They are semantically identical.",
      "D. `<important>`"
    ]
  },
  {
    "code": "<p>First line.<p>Second line.</p></p>",
    "question": "This code to create a line break is incorrect and can cause validation errors. What is the correct, self-closing tag for a simple line break?",
    "options": [
      "A. `<lb>`",
      "B. `<break>`",
      "C. `<br>`",
      "D. `<newline>`"
    ]
  },
  {
    "code": "<!DOCTYPE html>\n<html>\n  <body>\n    <title>My Awesome Page</title>\n    <h1>Welcome</h1>\n  </body>\n</html>",
    "question": "The page title 'My Awesome Page' is not showing up in the browser tab. What is the structural error in this HTML?",
    "options": [
      "A. The `<h1>` should be inside the `<head>`.",
      "B. The `<title>` tag must be inside the `<head>` tag.",
      "C. The `<html>` tag is unnecessary.",
      "D. `DOCTYPE` should be lowercase."
    ]
  },
  {
    "code": "<table>\n  <tr>\n    <td>Name</td>\n    <td>John</td>\n  </tr>\n  <tr>\n    <td>Age</td>\n    <td>30</td>\n  </tr>\n</table>",
    "question": "The 'Name' and 'Age' cells should be table headers to be semantically correct. Which tag should be used for them instead of `<td>`?",
    "options": [
      "A. `<head>`",
      "B. `<th>`",
      "C. `<header>`",
      "D. `<t-head>`"
    ]
  },
  {
    "code": "\n<main>\n  <div>\n    <h2>Post 1 Title</h2>\n    <p>Summary...</p>\n  </div>\n  <div>\n    <h2>Post 2 Title</h2>\n    <p>Summary...</p>\n  </div>\n</main>",
    "question": "The `<div>` tags in this blog feed are not semantic. What is the most appropriate tag to replace each `<div>` to represent a self-contained post?",
    "options": [
      "A. `<section>`",
      "B. `<article>`",
      "C. `<blockquote>`",
      "D. `<post>`"
    ]
  },
  {
    "code": "<p>This is a paragraph.</p> <span>This is a span.</span>",
    "question": "How will these two elements render in the browser by default?",
    "options": [
      "A. They will appear on the same line.",
      "B. The `<p>` tag will start on a new line, and the `<span>` will appear on the line right after it.",
      "C. They will both start on new lines.",
      "D. This code is invalid."
    ]
  },
  {
    "code": "<table>\n  <tr>\n    <td>Cell 1</td>\n    <td rowspan=\"2\">Cell 2 (spans two rows)</td>\n  </tr>\n  <tr>\n    <td>Cell 3</td>\n    <td>Cell 4</td>\n  </tr>\n</table>",
    "question": "This table layout is broken because of the `rowspan`. What is the problem?",
    "options": [
      "A. `rowspan` must be the first cell in a row.",
      "B. The second row has an extra cell (`<td>Cell 4</td>`) which throws off the alignment.",
      "C. The value `rowspan=\"2\"` is invalid.",
      "D. Tables cannot have rows with a different number of cells."
    ]
  },
  {
    "code": "<form action=\"/submit\">\n  <input type=\"text\" name=\"username\">\n  <button type=\"submit\">Submit</button>\n</form>",
    "question": "How can you modify this code to prevent the form from being submitted if the username field is empty, using only HTML?",
    "options": [
      "A. Add `validate=\"true\"` to the `<form>` tag.",
      "B. Add the `required` attribute to the `<input>` tag.",
      "C. Add `check-empty=\"false\"` to the `<input>` tag.",
      "D. Change the button to `<button type=\"validate\">`."
    ]
  },
  {
    "code": "<video src=\"movie.mp4\">\n  Your browser does not support the video tag.\n</video>",
    "question": "The video plays, but there are no controls for play, pause, or volume. What attribute is missing from the `<video>` tag?",
    "options": [
      "A. `show-controls`",
      "B. `ui=\"true\"`",
      "C. `controls`",
      "D. `player`"
    ]
  },
  {
    "code": "<meta name=\"viewport\" content=\"width=100%\">",
    "question": "On mobile devices, this `viewport` meta tag is causing the site to be zoomed out. What is the standard value for the `content` attribute for responsive design?",
    "options": [
      "A. `\"width=device-width, initial-scale=1.0\"`",
      "B. `\"scale=1.0\"`",
      "C. `\"responsive=true\"`",
      "D. `\"mobile=true\"`"
    ]
  },
  {
    "code": "<script src=\"a.js\"></script>\n<script src=\"b.js\"></script>\n",
    "question": "This code will pause HTML parsing to fetch and execute `a.js`, delaying the page render. Which attribute can be added to the script tags to download them without blocking and execute them after the page has parsed?",
    "options": [
      "A. `defer`",
      "B. `async`",
      "C. `non-blocking`",
      "D. `post-load`"
    ]
  },
  {
    "code": "<div src=\"page.html\" width=\"600\" height=\"400\"></div>",
    "question": "This `<div>` is intended to embed `page.html` within the current document. What is the correct tag to achieve this?",
    "options": [
      "A. `<embed>`",
      "B. `<object>`",
      "C. `<include>`",
      "D. `<iframe>`"
    ]
  },
  {
    "code": "<style rel=\"stylesheet\" href=\"styles.css\"></style>",
    "question": "The external stylesheet is not being applied. What is the correct tag to link an external CSS file?",
    "options": [
      "A. The code is correct.",
      "B. `<css href=\"styles.css\">`",
      "C. `<link rel=\"stylesheet\" href=\"styles.css\">`",
      "D. `<import src=\"styles.css\">`"
    ]
  },
  {
    "code": "<img src=\"small.jpg\" srcset=\"large.jpg\" alt=\"...\">",
    "question": "This `srcset` is incomplete and won't work as intended. What is missing from the `srcset` attribute to tell the browser the size of the `large.jpg` image?",
    "options": [
      "A. A width descriptor, like `1000w`.",
      "B. A `media` query.",
      "C. A `type` attribute, like `type=\"image/jpeg\"`.",
      "D. A size attribute."
    ]
  },
  {
    "code": "<span onclick=\"doSomething()\">X</span>",
    "question": "This clickable `<span>` works for mouse users but is ignored by screen readers and keyboard navigation. What WAI-ARIA attribute should be added to make it accessible as a button?",
    "options": [
      "A. `aria-type=\"button\"`",
      "B. `role=\"button\"`",
      "C. `semantic=\"button\"`",
      "D. `access=\"button\"`"
    ]
  },
  {
    "code": "<div custom-id=\"123\">Data</div>",
    "question": "This custom attribute is not valid according to the HTML spec. What is the correct syntax for creating custom data attributes?",
    "options": [
      "A. `x-custom-id=\"123\"`",
      "B. `data-custom-id=\"123\"`",
      "C. `_custom-id=\"123\"`",
      "D. `attr-custom-id=\"123\"`"
    ]
  },
  {
    "code": "<picture>\n  <img src=\"small.jpg\" alt=\"...\">\n  <source media=\"(min-width: 800px)\" srcset=\"large.jpg\">\n</picture>",
    "question": "The large image is never shown, even on wide screens. What is the structural error in this `<picture>` element?",
    "options": [
      "A. The `<img>` tag must be the last child of the `<picture>` element.",
      "B. The `<source>` tag needs a `src` attribute.",
      "C. The `<picture>` element does not support `media` queries.",
      "D. The `<source>` tag must come after the `<img>` tag."
    ]
  },
  {
    "code": "<a href=\"/external-page\" target=\"_blank\">Visit Site</a>",
    "question": "Opening this link gives the external page potential access to the original page's `window` object, a security risk. What `rel` attribute value should be added to prevent this?",
    "options": [
      "A. `rel=\"secure\"`",
      "B. `rel=\"external\"`",
      "C. `rel=\"noopener\"`",
      "D. `rel=\"nofollow\"`"
    ]
  },
  {
    "code": "<div>\n  <template>\n    <h1>This is a template.</h1>\n  </template>\n</div>",
    "question": "What will be visible on the page when this code is rendered in the browser?",
    "options": [
      "A. The text 'This is a template.'",
      "B. An empty `<div>`.",
      "C. A validation error.",
      "D. The code will display as plain text."
    ]
  },
  {
    "code": "<svg>\n  <circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"red\" />\n</svg>",
    "question": "Unlike a `<canvas>` drawing, what is a key characteristic of the red circle created by this SVG code?",
    "options": [
      "A. It is a raster (pixel-based) image.",
      "B. It cannot be styled with CSS.",
      "C. It is part of the DOM and can be directly targeted and manipulated with JavaScript.",
      "D. It cannot be animated."
    ]
  },
  {
    "code": "\n<link rel=\"prefetch\" href=\"/styles/main.css\">",
    "question": "This code tells the browser that `main.css` might be needed for a *future* page navigation. What should `rel` be changed to if the stylesheet is critical for the *current* page view?",
    "options": [
      "A. `rel=\"stylesheet\"`",
      "B. `rel=\"preload\" as=\"style\"`",
      "C. `rel=\"critical\"`",
      "D. B or A are both correct solutions"
    ]
  },
  {
    "code": "<details open>\n  <summary>IP Settings</summary>\n  <p>IP Address: 192.168.1.1</p>\n</details>",
    "question": "What does the `open` attribute do on the `<details>` element?",
    "options": [
      "A. It prevents the user from closing the details widget.",
      "B. It causes the details to be displayed in a new window.",
      "C. It makes the details content visible by default on page load.",
      "D. It is not a valid attribute."
    ]
  },
  {
    "code": "<div itemscope itemtype=\"http://schema.org/Movie\">\n  <h1>Avatar</h1>\n  <span>Director: <span itemprop=\"director\">James Cameron</span></span>\n</div>",
    "question": "What is the primary purpose of adding the `itemscope`, `itemtype`, and `itemprop` attributes?",
    "options": [
      "A. To apply special styling without using CSS.",
      "B. To provide structured data that search engines can understand.",
      "C. To create custom, interactive elements.",
      "D. To validate the HTML against a specific schema."
    ]
  },
  {
    "code": "<label>Progress: <progress value=\"50\" max=\"100\"></progress></label>",
    "question": "This code shows a progress bar. Which tag should be used instead if you want to display a static gauge or score, like 'Disk Usage: 50%'?",
    "options": [
      "A. `<gauge>`",
      "B. `<bar>`",
      "C. `<meter>`",
      "D. The `<progress>` tag is correct for both."
    ]
  },
  {
    "code": "<form method=\"GET\" action=\"/search\">\n  <input type=\"text\" name=\"q\" value=\"html\">\n  <button>Search</button>\n</form>",
    "question": "After submitting this form, what will the URL in the browser's address bar look like?",
    "options": [
      "A. `/search`",
      "B. `/search#q=html`",
      "C. `/search?q=html`",
      "D. The URL will not change."
    ]
  },
  {
    "code": "<p>The less-than sign is: &lt;</p>",
    "question": "What would happen if you wrote `<p>The less-than sign is: <</p>` instead?",
    "options": [
      "A. The output would be the same.",
      "B. It would cause a JavaScript error.",
      "C. The browser would likely get confused and might not render the text correctly, as it expects a tag name after `<`.",
      "D. It would display `&lt;`."
    ]
  },
  {
    "code": "<select>\n  <option>Volvo</option>\n  <option>Saab</option>\n</select>",
    "question": "When this form is submitted, no value is sent for the selected option. What attribute is missing from the `<option>` tags?",
    "options": [
      "A. `name`",
      "B. `id`",
      "C. `value`",
      "D. `data-send`"
    ]
  },
  {
    "code": "<p>This text is <i>italic</i>.</p>\n<p>This text is <em>emphasized</em>.</p>",
    "question": "Both tags produce italic text. Which one should be used to indicate stress emphasis that changes the meaning of a sentence?",
    "options": [
      "A. `<i>`",
      "B. `<em>`",
      "C. They are semantically identical.",
      "D. `<italic>`"
    ]
  },
  {
    "code": "<main>\n  <p>Main content...</p>\n  <aside>\n    <p>Related links...</p>\n  </aside>\n</main>",
    "question": "What is the semantic purpose of the `<aside>` tag?",
    "options": [
      "A. It must contain navigation links.",
      "B. It is for content that is tangentially related to the main content, like a sidebar or pull quote.",
      "C. It is for hidden content.",
      "D. It is an older, deprecated version of `<div>`."
    ]
  },
  {
    "code": "<!DOCTYPE html>\n<html>\n  <meta charset=\"UTF-8\">\n  <title>My Page</title>\n  <body>\n    <h1>Welcome</h1>\n  </body>\n</html>",
    "question": "This document has a validation error. Where should the `<meta>` and `<title>` tags be placed?",
    "options": [
      "A. Directly inside the `<body>` tag.",
      "B. Inside a `<head>` tag, which should be after the opening `<html>` tag.",
      "C. At the very top, before `<!DOCTYPE html>`.",
      "D. Directly inside the `<html>` tag."
    ]
  },
  {
    "code": "<textarea>Default text</textarea>",
    "question": "The text area is very small. What attributes can be used to set its visible width and height in characters and rows?",
    "options": [
      "A. `width` and `height`",
      "B. `x` and `y`",
      "C. `cols` and `rows`",
      "D. `size` and `lines`"
    ]
  },
  {
    "code": "<table>\n  <tbody>\n    <tr><td>Data</td></tr>\n  </tbody>\n  <thead>\n    <tr><th>Header</th></tr>\n  </thead>\n</table>",
    "question": "For proper table structure and accessibility, what is the correct order for the `<thead>` and `<tbody>` elements?",
    "options": [
      "A. The order does not matter.",
      "B. `<tbody>` must always come first.",
      "C. `<thead>` must come before `<tbody>`.",
      "D. They cannot be used in the same table."
    ]
  },
  {
    "code": "<input type=\"radio\" name=\"color\" value=\"red\">\n<input type=\"radio\" name=\"color\" value=\"blue\">",
    "question": "What is the key effect of giving both radio buttons the same `name`?",
    "options": [
      "A. It allows both to be selected at the same time.",
      "B. It links them so that only one can be selected at a time.",
      "C. It's a syntax error.",
      "D. It assigns the same CSS class to both."
    ]
  },
  {
    "code": "<div>\n  <img src=\"chart.png\" alt=\"Sales chart\">\n  <p>Fig. 1: Sales have increased over the last quarter.</p>\n</div>",
    "question": "What semantic tags could replace the `<div>` and `<p>` to explicitly link the image with its caption?",
    "options": [
      "A. `<box>` and `<caption>`",
      "B. `<figure>` and `<figcaption>`",
      "C. `<image>` and `<icaption>`",
      "D. `<frame>` and `<label>`"
    ]
  },
  {
    "code": "<p>My first paragraph.</p>\n<hr>\n<p>My second paragraph.</p>",
    "question": "What is the semantic meaning of the `<hr>` tag?",
    "options": [
      "A. It just draws a horizontal line for styling.",
      "B. It represents a paragraph-level thematic break, like a scene change in a story.",
      "C. It is used to create a table row.",
      "D. It is a deprecated tag."
    ]
  },
  {
    "code": "<html>\n  <head>\n  </head>\n  <body>\n  </body>\n  ",
    "question": "This document is missing a tag that defines the document's root. What tag should wrap the entire `head` and `body` sections?",
    "options": [
      "A. The code is correct as is.",
      "B. `<html>`",
      "C. `<document>`",
      "D. `<root>`"
    ]
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
