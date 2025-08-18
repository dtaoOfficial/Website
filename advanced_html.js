let questions = [
  {
    "question": "What is the primary purpose of the `aria-label` attribute in HTML?",
    "options": [
      "To provide a tooltip for an element.",
      "To specify an alternative text for an image.",
      "To provide a label for an element when no visible label exists, for accessibility purposes.",
      "To define a unique ID for an element."
    ],
    "answer": "To provide a label for an element when no visible label exists, for accessibility purposes."
  },
  {
    "question": "Explain the difference between `localStorage` and `sessionStorage` in Web Storage.",
    "options": [
      "`localStorage` is for data that expires after a session, `sessionStorage` is for persistent data.",
      "`localStorage` data persists even after the browser is closed, while `sessionStorage` data is cleared when the tab is closed.",
      "`localStorage` is more secure than `sessionStorage`.",
      "`sessionStorage` can store more data than `localStorage`."
    ],
    "answer": "`localStorage` data persists even after the browser is closed, while `sessionStorage` data is cleared when the tab is closed."
  },
  {
    "question": "What is the function of the `defer` attribute in a `<script>` tag?",
    "options": [
      "The script will be downloaded and executed asynchronously, as soon as it's ready.",
      "The script will be downloaded in parallel to parsing, but executed only after the HTML document has been fully parsed.",
      "The script will be ignored by the browser.",
      "The script will be executed immediately, pausing the HTML parsing."
    ],
    "answer": "The script will be downloaded in parallel to parsing, but executed only after the HTML document has been fully parsed."
  },
  {
    "question": "What is the purpose of the `async` attribute in a `<script>` tag?",
    "options": [
      "The script will be executed only after the HTML document has been fully parsed.",
      "The script's execution will be blocked until a specific event occurs.",
      "The script will be downloaded and executed asynchronously, as soon as it's ready, without blocking the parser.",
      "The script will be loaded but not executed until explicitly called by another script."
    ],
    "answer": "The script will be downloaded and executed asynchronously, as soon as it's ready, without blocking the parser."
  },
  {
    "question": "What is the primary use case for the `<template>` tag in HTML5?",
    "options": [
      "To define a custom element's structure and styling.",
      "To create a client-side template that contains content hidden from the user until activated by a script.",
      "To provide a template for server-side rendering.",
      "To create a boilerplate HTML document structure."
    ],
    "answer": "To create a client-side template that contains content hidden from the user until activated by a script."
  },
  {
    "question": "Which HTML5 API allows a user to share files, text, or URLs from a web app to other apps on their device?",
    "options": [
      "The Filesystem API",
      "The Web Share API",
      "The Drag and Drop API",
      "The Notifications API"
    ],
    "answer": "The Web Share API"
  },
  {
    "question": "In the context of `<input>`, what does the `pattern` attribute do?",
    "options": [
      "It specifies a CSS pattern to style the input.",
      "It provides a regular expression that the input's value must match to be valid.",
      "It defines a pattern for the placeholder text.",
      "It sets a default value for the input based on a pattern."
    ],
    "answer": "It provides a regular expression that the input's value must match to be valid."
  },
  {
    "question": "What is the purpose of the `crossorigin` attribute in a `<script>` or `<img>` tag?",
    "options": [
      "To prevent cross-site scripting (XSS) attacks.",
      "To enable sharing resources from a different domain with CORS (Cross-Origin Resource Sharing) headers.",
      "To disable resource loading from other domains.",
      "To specify a different security policy for the resource."
    ],
    "answer": "To enable sharing resources from a different domain with CORS (Cross-Origin Resource Sharing) headers."
  },
  {
    "question": "Which HTML element is used to define a container for an SVG graphic?",
    "options": [
      "`<picture>`",
      "`<svg>`",
      "`<img>` with `type=\"svg\"`",
      "`<canvas>`"
    ],
    "answer": "`<svg>`"
  },
  {
    "question": "What is the purpose of the `sandbox` attribute in an `<iframe>`?",
    "options": [
      "To prevent the `<iframe>` from loading.",
      "To enable full permissions for the `<iframe>`.",
      "To apply a set of restrictions to the content within the `<iframe>` for security purposes.",
      "To make the `<iframe>` content read-only."
    ],
    "answer": "To apply a set of restrictions to the content within the `<iframe>` for security purposes."
  },
  {
    "question": "Which HTML tag is specifically designed to display a progress bar for a task?",
    "options": [
      "`<gauge>`",
      "`<meter>`",
      "`<bar>`",
      "`<progress>`"
    ],
    "answer": "`<progress>`"
  },
  {
    "question": "What is the purpose of the `preload` attribute in a `<video>` or `<audio>` tag?",
    "options": [
      "To specify that the media should not be loaded at all.",
      "To provide a hint to the browser about how to load the media file when the page loads.",
      "To start playing the media automatically.",
      "To preload the first frame of the video for a preview."
    ],
    "answer": "To provide a hint to the browser about how to load the media file when the page loads."
  },
  {
    "question": "What is the correct HTML5 input type for a numeric input with a specific range?",
    "options": [
      "`type=\"number\"`",
      "`type=\"range\"`",
      "`type=\"float\"`",
      "`type=\"integer\"`"
    ],
    "answer": "`type=\"range\"`"
  },
  {
    "question": "Which HTML element provides a container for interactive widgets that can be expanded or collapsed?",
    "options": [
      "`<details>`",
      "`<summary>`",
      "`<dialog>`",
      "`<section>`"
    ],
    "answer": "`<details>`"
  },
  {
    "question": "What is the purpose of the `manifest` attribute in the `<html>` tag?",
    "options": [
      "To define a JSON manifest for a web app.",
      "To specify the page's character encoding.",
      "To link to a manifest file for the browser's cache.",
      "To declare the page's language."
    ],
    "answer": "To link to a manifest file for the browser's cache."
  },
  {
    "question": "Which HTML element is used to display a scalar measurement within a known range?",
    "options": [
      "`<progress>`",
      "`<gauge>`",
      "`<meter>`",
      "`<bar>`"
    ],
    "answer": "`<meter>`"
  },
  {
    "question": "What is a major advantage of using the `<picture>` element over a single `<img>` tag with CSS for responsive images?",
    "options": [
      "It's easier to style with CSS.",
      "It downloads all image sources for all screen sizes.",
      "It allows the browser to choose the most appropriate image source to download, saving bandwidth.",
      "It is only supported by modern browsers."
    ],
    "answer": "It allows the browser to choose the most appropriate image source to download, saving bandwidth."
  },
  {
    "question": "What is the purpose of the `loading` attribute with the value `lazy` on an `<img>` tag?",
    "options": [
      "It forces the browser to load the image immediately.",
      "It tells the browser to defer loading the image until it is close to the viewport.",
      "It prevents the browser from loading the image.",
      "It provides a low-quality placeholder image while the full image loads."
    ],
    "answer": "It tells the browser to defer loading the image until it is close to the viewport."
  },
  {
    "question": "How do you specify a fallback image for the `<picture>` element if no `<source>` elements match?",
    "options": [
      "By placing a fallback `<img>` tag as the last child of the `<picture>` element.",
      "By using a `fallback` attribute on the `<picture>` tag.",
      "By using a fallback `src` on a `<source>` tag.",
      "It's not possible to specify a fallback."
    ],
    "answer": "By placing a fallback `<img>` tag as the last child of the `<picture>` element."
  },
  {
    "question": "Which HTML element is used to mark up a block of preformatted text where all spaces and line breaks are preserved?",
    "options": [
      "`<code>`",
      "`<pre>`",
      "`<samp>`",
      "`<kbd>`"
    ],
    "answer": "`<pre>`"
  },
  {
    "question": "What is the role of the `noopener` value in the `rel` attribute of an `<a>` tag?",
    "options": [
      "It prevents the new page from accessing the original page's window object.",
      "It prevents the new page from opening at all.",
      "It forces the new page to open in the same tab.",
      "It ensures the new page has access to all security features."
    ],
    "answer": "It prevents the new page from accessing the original page's window object."
  },
  {
    "question": "Which HTML element should be used to display a client-side warning, error, or success message?",
    "options": [
      "`<alert>`",
      "`<message>`",
      "`<dialog>`",
      "`<output>`"
    ],
    "answer": "`<output>`"
  },
  {
    "question": "In Web Components, what is the role of the `Shadow DOM`?",
    "options": [
      "To create a separate, accessible DOM for screen readers.",
      "To provide a way to inject content into a component from the outside.",
      "To encapsulate a component's internal structure, styles, and behavior from the rest of the page.",
      "To create a lightweight version of the main DOM for faster rendering."
    ],
    "answer": "To encapsulate a component's internal structure, styles, and behavior from the rest of the page."
  },
  {
    "question": "What is the purpose of the `srcset` attribute on the `<img>` tag?",
    "options": [
      "To specify an image's source for high-resolution displays.",
      "To provide a list of image source URLs and their descriptors to the browser.",
      "To define the size of the image.",
      "To specify the image's format."
    ],
    "answer": "To provide a list of image source URLs and their descriptors to the browser."
  },
  {
    "question": "Which HTML attribute for an `<input>` element allows a user to select multiple files?",
    "options": [
      "`multiple`",
      "`files`",
      "`many`",
      "`type=\"files\"`"
    ],
    "answer": "`multiple`"
  },
  {
    "question": "What is the primary function of the HTML `track` element in a `<video>` tag?",
    "options": [
      "To provide alternative video sources.",
      "To specify a different video size.",
      "To provide synchronized text tracks like subtitles or captions.",
      "To track user interactions with the video."
    ],
    "answer": "To provide synchronized text tracks like subtitles or captions."
  },
  {
    "question": "Which HTML element represents an independent piece of content, often with a `<figcaption>` and can be referenced from the main flow of a document?",
    "options": [
      "`<article>`",
      "`<section>`",
      "`<figure>`",
      "`<aside>`"
    ],
    "answer": "`<figure>`"
  },
  {
    "question": "What is the purpose of the `download` attribute on an `<a>` tag?",
    "options": [
      "It forces the browser to download the linked URL instead of navigating to it.",
      "It prevents the user from downloading the linked file.",
      "It specifies the file's size.",
      "It automatically uploads the user's file to the server."
    ],
    "answer": "It forces the browser to download the linked URL instead of navigating to it."
  },
  {
    "question": "What is the role of the `nonce` attribute in a `<script>` or `<style>` tag?",
    "options": [
      "It prevents the script from being executed.",
      "It is a cryptographic nonce used to bypass Content Security Policy (CSP) restrictions for a specific element.",
      "It specifies the time of execution.",
      "It provides a unique name for the script."
    ],
    "answer": "It is a cryptographic nonce used to bypass Content Security Policy (CSP) restrictions for a specific element."
  },
  {
    "question": "Which HTML5 element is used to represent the result of a calculation?",
    "options": [
      "`<calc>`",
      "`<output>`",
      "`<result>`",
      "`<solution>`"
    ],
    "answer": "`<output>`"
  },
  {
    "question": "What does the `<dialog>` HTML element represent?",
    "options": [
      "A section for user comments.",
      "A pop-up box or dialog window.",
      "An image gallery.",
      "A container for forms."
    ],
    "answer": "A pop-up box or dialog window."
  },
  {
    "question": "In the context of Web Components, what is the role of the `<slot>` element?",
    "options": [
      "To define a placeholder for content to be injected into a component's Shadow DOM from its parent.",
      "To create a link to an external resource.",
      "To define a button within a component.",
      "To create a new, reusable HTML element."
    ],
    "answer": "To define a placeholder for content to be injected into a component's Shadow DOM from its parent."
  },
  {
    "question": "What is the purpose of the `autocapitalize` attribute on an `<input>` element?",
    "options": [
      "It automatically capitalizes the first letter of every word entered.",
      "It suggests the browser to automatically capitalize user input, typically for mobile keyboards.",
      "It makes the entire input field capitalized.",
      "It prevents capitalization in the input field."
    ],
    "answer": "It suggests the browser to automatically capitalize user input, typically for mobile keyboards."
  },
  {
    "question": "Which HTML tag is used to define a container for form controls when the user can choose from a menu or drop-down list?",
    "options": [
      "`<select>`",
      "`<menu>`",
      "`<datalist>`",
      "`<options>`"
    ],
    "answer": "`<datalist>`"
  },
  {
    "question": "What is the function of the `rel` attribute with the value `noreferrer`?",
    "options": [
      "It prevents the browser from sending the `Referer` header to the new page.",
      "It tells the browser not to open the link in a new tab.",
      "It prevents search engines from indexing the linked page.",
      "It forces the browser to reload the page before navigating."
    ],
    "answer": "It prevents the browser from sending the `Referer` header to the new page."
  },
  {
    "question": "Which HTML element is used to define a term in a description list?",
    "options": [
      "`<dt>`",
      "`<dd>`",
      "`<dl>`",
      "`<term>`"
    ],
    "answer": "`<dt>`"
  },
  {
    "question": "What is the purpose of `type=\"module\"` on a `<script>` tag?",
    "options": [
      "It tells the browser to treat the script as a module, enabling the use of `import` and `export` statements.",
      "It specifies that the script is for a mobile device.",
      "It makes the script load faster.",
      "It prevents the script from being executed."
    ],
    "answer": "It tells the browser to treat the script as a module, enabling the use of `import` and `export` statements."
  },
  {
    "question": "Which HTML attribute specifies a keyboard shortcut for an element?",
    "options": [
      "`shortcut`",
      "`accesskey`",
      "`hotkey`",
      "`key`"
    ],
    "answer": "`accesskey`"
  },
  {
    "question": "In the context of Web Components, what is the purpose of a Custom Element?",
    "options": [
      "To extend an existing HTML element's functionality.",
      "To create new, reusable, custom HTML tags with their own functionality.",
      "To define a custom CSS class.",
      "To create a new, non-standard attribute."
    ],
    "answer": "To create new, reusable, custom HTML tags with their own functionality."
  },
  {
    "question": "What is the purpose of the `<meter>` tag's `low`, `high`, and `optimum` attributes?",
    "options": [
      "They define the colors of the meter.",
      "They specify the acceptable ranges and the ideal value for the meter.",
      "They are used for client-side form validation.",
      "They are only used by screen readers for accessibility."
    ],
    "answer": "They specify the acceptable ranges and the ideal value for the meter."
  },
  {
    "question": "Which HTML5 API provides access to a user's geographical position?",
    "options": [
      "The Geolocation API",
      "The Location API",
      "The GPS API",
      "The Device API"
    ],
    "answer": "The Geolocation API"
  },
  {
    "question": "What is the purpose of the `sizes` attribute on an `<img>` tag when used with `srcset`?",
    "options": [
      "It specifies the intrinsic size of the image.",
      "It provides the browser with a hint about the intended display size of the image in the layout.",
      "It defines the maximum file size for the image.",
      "It is a fallback for browsers that don't support `srcset`."
    ],
    "answer": "It provides the browser with a hint about the intended display size of the image in the layout."
  },
  {
    "question": "What is the primary function of the `<canvas>` tag?",
    "options": [
      "To display static images.",
      "To provide a container for drawing graphics via scripting (usually JavaScript).",
      "To play video files.",
      "To create animated GIFs."
    ],
    "answer": "To provide a container for drawing graphics via scripting (usually JavaScript)."
  },
  {
    "question": "Which HTML attribute for an `<input>` element allows a user to select a color?",
    "options": [
      "`type=\"color\"`",
      "`type=\"hex\"`",
      "`type=\"rgb\"`",
      "`type=\"palette\"`"
    ],
    "answer": "`type=\"color\"`"
  },
  {
    "question": "What is the primary purpose of the `role` attribute in a form?",
    "options": [
      "To define the form's submission behavior.",
      "To specify the purpose of an element for assistive technologies and improve accessibility.",
      "To apply a custom style to the form.",
      "To define the form's name for scripting."
    ],
    "answer": "To specify the purpose of an element for assistive technologies and improve accessibility."
  },
  {
    "question": "In a `<form>`, which HTML attribute should be used for client-side validation, ensuring that the input is a valid email address?",
    "options": [
      "`validate=\"email\"`",
      "`type=\"email\"`",
      "`pattern=\"email\"`",
      "`format=\"email\"`"
    ],
    "answer": "`type=\"email\"`"
  },
  {
    "question": "Which HTML element is used to define a container for key-value pairs of document-level metadata?",
    "options": [
      "`<data>`",
      "`<item>`",
      "`<dl>`",
      "`<meta>`"
    ],
    "answer": "`<meta>`"
  },
  {
    "question": "What is the purpose of the `autocomplete` attribute on a form or input element?",
    "options": [
      "It automatically submits the form.",
      "It suggests the browser to either enable or disable form auto-filling for that element.",
      "It automatically capitalizes the user's input.",
      "It prevents the user from typing in the field."
    ],
    "answer": "It suggests the browser to either enable or disable form auto-filling for that element."
  },
  {
    "question": "What is the purpose of the `contenteditable` attribute?",
    "options": [
      "It specifies that the content of an element is read-only.",
      "It makes the content of an element editable by the user.",
      "It's used to hide an element from the user.",
      "It defines a unique ID for the element."
    ],
    "answer": "It makes the content of an element editable by the user."
  },
  {
    "question": "Which HTML element is used to represent the hierarchical structure of headings in a document?",
    "options": [
      "`<nav>`",
      "`<header>`",
      "`<hgroup>`",
      "`<section>`"
    ],
    "answer": "`<hgroup>`"
  },
  {
    "question": "What is the role of the `ping` attribute on an `<a>` tag?",
    "options": [
      "It sends a notification to the server when the user clicks the link.",
      "It provides a fallback URL if the primary link is broken.",
      "It sends a POST request to the URL(s) specified in its value when the link is followed.",
      "It measures the network latency for the link."
    ],
    "answer": "It sends a POST request to the URL(s) specified in its value when the link is followed."
  },
  {
    "question": "What is the purpose of the `spellcheck` attribute on an input field?",
    "options": [
      "It automatically corrects the user's spelling.",
      "It enables or disables the browser's spell-checking for the element.",
      "It requires a specific format for the input.",
      "It provides a list of suggested words."
    ],
    "answer": "It enables or disables the browser's spell-checking for the element."
  },
  {
    "question": "Which HTML element is a part of Web Components and defines the structure and style of a custom element?",
    "options": [
      "`<template>`",
      "`<shadowroot>`",
      "`<style>`",
      "`<custom>`"
    ],
    "answer": "`<template>`"
  },
  {
    "question": "What does the `itemscope` attribute, when used with `itemtype`, do?",
    "options": [
      "It specifies the URL of the item.",
      "It defines a new vocabulary for the item.",
      "It creates an item and defines the scope of a new vocabulary item.",
      "It is a CSS styling attribute."
    ],
    "answer": "It creates an an item and defines the scope of a new vocabulary item."
  },
  {
    "question": "Which HTML attribute specifies the character encoding of the document in the `<meta>` tag?",
    "options": [
      "`type`",
      "`charset`",
      "`encoding`",
      "`lang`"
    ],
    "answer": "`charset`"
  },
  {
    "question": "Which HTML element is specifically designed for defining a term and its corresponding definition?",
    "options": [
      "`<def>`",
      "`<dl>`",
      "`<dt>`",
      "`<dd>`"
    ],
    "answer": "`<dl>`"
  },
  {
    "question": "What is the purpose of the `sizes` attribute in a `<link>` tag for an icon?",
    "options": [
      "It specifies the size of the icon on the page.",
      "It provides a hint to the browser about the size of the linked icon file.",
      "It defines the maximum file size for the icon.",
      "It is a styling attribute."
    ],
    "answer": "It provides a hint to the browser about the size of the linked icon file."
  },
  {
    "question": "Which HTML element is used to define a list of commands for a menu?",
    "options": [
      "`<menu>`",
      "`<list>`",
      "`<commands>`",
      "`<options>`"
    ],
    "answer": "`<menu>`"
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
