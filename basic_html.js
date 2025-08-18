let questions = [
  {
    "question": "What does HTML stand for?",
    "options": ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyperlinking Text Management Language"],
    "answer": "Hyper Text Markup Language"
  },
  {
    "question": "Which HTML tag is used to define the root of an HTML document?",
    "options": ["`<head>`", "`<body>`", "`<html>`", "`<title>`"],
    "answer": "`<html>`"
  },
  {
    "question": "Which HTML tag is used to define the title of a document?",
    "options": ["`<meta>`", "`<title>`", "`<head>`", "`<h1>`"],
    "answer": "`<title>`"
  },
  {
    "question": "Which HTML tag is used for creating a paragraph?",
    "options": ["`<para>`", "`<p>`", "`<text>`", "`<line>`"],
    "answer": "`<p>`"
  },
  {
    "question": "Which HTML tag is used to create a hyperlink?",
    "options": ["`<link>`", "`<a>`", "`<href>`", "`<url>`"],
    "answer": "`<a>`"
  },
  {
    "question": "Which attribute is used to specify the URL of a link in the `<a>` tag?",
    "options": ["`src`", "`link`", "`href`", "`url`"],
    "answer": "`href`"
  },
  {
    "question": "Which HTML tag is used to insert an image?",
    "options": ["`<picture>`", "`<img>`", "`<image>`", "`<photo>`"],
    "answer": "`<img>`"
  },
  {
    "question": "Which attribute is used to specify the URL of an image in the `<img>` tag?",
    "options": ["`link`", "`source`", "`url`", "`src`"],
    "answer": "`src`"
  },
  {
    "question": "Which HTML tag is used to define a heading?",
    "options": ["`<header>`", "`<heading>`", "`<h1>` to `<h6>`", "`<head>`"],
    "answer": "`<h1>` to `<h6>`"
  },
  {
    "question": "Which HTML tag is used to make text bold?",
    "options": ["`<bold>`", "`<b>`", "`<stronger>`", "`<fat>`"],
    "answer": "`<b>`"
  },
  {
    "question": "Which HTML tag is used to make text italic?",
    "options": ["`<italic>`", "`<i>`", "`<slanted>`", "`<emph>`"],
    "answer": "`<i>`"
  },
  {
    "question": "Which HTML tag is used to define an unordered list?",
    "options": ["`<list>`", "`<ol>`", "`<ul>`", "`<li>`"],
    "answer": "`<ul>`"
  },
  {
    "question": "Which HTML tag is used to define an ordered list?",
    "options": ["`<list>`", "`<ol>`", "`<ul>`", "`<li>`"],
    "answer": "`<ol>`"
  },
  {
    "question": "Which HTML tag is used to define a list item?",
    "options": ["`<item>`", "`<li_item>`", "`<listitem>`", "`<li>`"],
    "answer": "`<li>`"
  },
  {
    "question": "Which HTML element is used for providing a line break?",
    "options": ["`<lb>`", "`<break>`", "`<br>`", "`<newline>`"],
    "answer": "`<br>`"
  },
  {
    "question": "Which HTML tag is used to define a division or a section in an HTML document?",
    "options": ["`<section>`", "`<part>`", "`<div>`", "`<area>`"],
    "answer": "`<div>`"
  },
  {
    "question": "Which HTML tag is used to define a small section of text or a phrase?",
    "options": ["`<text>`", "`<phrase>`", "`<span>`", "`<word>`"],
    "answer": "`<span>`"
  },
  {
    "question": "Which HTML tag is used to create an input field for text?",
    "options": ["`<textinput>`", "`<field>`", "`<input type=\"text\">`", "`<textbox>`"],
    "answer": "`<input type=\"text\">`"
  },
  {
    "question": "Which attribute is used to define the type of an input field?",
    "options": ["`format`", "`kind`", "`type`", "`input_type`"],
    "answer": "`type`"
  },
  {
    "question": "Which HTML tag is used to create a button?",
    "options": ["`<click>`", "`<button>`", "`<btn>`", "`<input type=\"button\">`"],
    "answer": "`<button>`"
  },
  {
    "question": "Which HTML tag defines an HTML table?",
    "options": ["`<table>`", "`<tab>`", "`<tb>`", "`<tr>`"],
    "answer": "`<table>`"
  },
  {
    "question": "Which HTML tag defines a table row?",
    "options": ["`<td>`", "`<th>`", "`<row>`", "`<tr>`"],
    "answer": "`<tr>`"
  },
  {
    "question": "Which HTML tag defines a table header cell?",
    "options": ["`<td>`", "`<th>`", "`<headcell>`", "`<tr>`"],
    "answer": "`<th>`"
  },
  {
    "question": "Which HTML tag defines a standard table data cell?",
    "options": ["`<th>`", "`<tr>`", "`<data>`", "`<td>`"],
    "answer": "`<td>`"
  },
  {
    "question": "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    "options": ["`title`", "`description`", "`alt`", "`text`"],
    "answer": "`alt`"
  },
  {
    "question": "Which HTML tag is used to embed a video in an HTML document?",
    "options": ["`<media>`", "`<movie>`", "`<video>`", "`<srcvideo>`"],
    "answer": "`<video>`"
  },
  {
    "question": "Which HTML tag is used to embed an audio file in an HTML document?",
    "options": ["`<sound>`", "`<mp3>`", "`<audio>`", "`<srcaudio>`"],
    "answer": "`<audio>`"
  },
  {
    "question": "What is the correct HTML element for inserting a line break?",
    "options": ["`<break>`", "`<br>`", "`<lb>`", "`<newline>`"],
    "answer": "`<br>`"
  },
  {
    "question": "What is the correct HTML for adding a background color?",
    "options": ["`<body bg=\"yellow\">`", "`<background>yellow</background>`", "`<body style=\"background-color:yellow;\">`", "`<bgcolor>yellow</bgcolor>`"],
    "answer": "`<body style=\"background-color:yellow;\">`"
  },
  {
    "question": "Choose the correct HTML element to define important text.",
    "options": ["`<b>`", "`<i>`", "`<important>`", "`<strong>`"],
    "answer": "`<strong>`"
  },
  {
    "question": "Which character is used to indicate an end tag?",
    "options": ["`<`", "`^`", "`/`", "`*`"],
    "answer": "`/`"
  },
  {
    "question": "How can you open a link in a new tab/browser window?",
    "options": ["`<a href=\"url\" new>`", "`<a href=\"url\" target=\"_blank\">`", "`<a href=\"url\" target=\"new\">`", "`<a href=\"url\" opennew>`"],
    "answer": "`<a href=\"url\" target=\"_blank\">`"
  },
  {
    "question": "What is the HTML element for a horizontal rule?",
    "options": ["`<hr>`", "`<line>`", "`<rule>`", "`<hrule>`"],
    "answer": "`<hr>`"
  },
  {
    "question": "Which HTML element is used to specify a footer for a document or section?",
    "options": ["`<bottom>`", "`<footer>`", "`<end>`", "`<section bottom>`"],
    "answer": "`<footer>`"
  },
  {
    "question": "Which HTML element is used for comments?",
    "options": ["`// This is a comment`", "``", "`/* This is a comment */`", "`<comment> This is a comment </comment>`"],
    "answer": "``"
  },
  {
    "question": "Which HTML element is used to define a navigation link?",
    "options": ["`<nav>`", "`<navigate>`", "`<navigation>`", "`<menu>`"],
    "answer": "`<nav>`"
  },
  {
    "question": "Which HTML element is used for marking text that has a slight difference from the surrounding text (e.g., for technical terms)?",
    "options": ["`<b>`", "`<i>`", "`<em>`", "`<cite>`"],
    "answer": "`<em>`"
  },
  {
    "question": "Which HTML element defines preformatted text?",
    "options": ["`<pre>`", "`<format>`", "`<text>`", "`<codeblock>`"],
    "answer": "`<pre>`"
  },
  {
    "question": "Which HTML attribute is used to provide an advisory text for an element or its contents?",
    "options": ["`info`", "`tip`", "`hint`", "`title`"],
    "answer": "`title`"
  },
  {
    "question": "Which HTML element is used to group related elements in a form?",
    "options": ["`<group>`", "`<fieldset>`", "`<formgroup>`", "`<section>`"],
    "answer": "`<fieldset>`"
  },
  {
    "question": "Which HTML tag is used to create a dropdown list (select box)?",
    "options": ["`<list>`", "`<dropdown>`", "`<select>`", "`<option>`"],
    "answer": "`<select>`"
  },
  {
    "question": "Which HTML tag is used to define an option in a dropdown list?",
    "options": ["`<item>`", "`<selectitem>`", "`<option>`", "`<listitem>`"],
    "answer": "`<option>`"
  },
  {
    "question": "Which HTML element is used to provide metadata about the HTML document?",
    "options": ["`<data>`", "`<head>`", "`<info>`", "`<meta>`"],
    "answer": "`<meta>`"
  },
  {
    "question": "Which HTML attribute specifies a unique ID for an HTML element?",
    "options": ["`class`", "`name`", "`tag`", "`id`"],
    "answer": "`id`"
  },
  {
    "question": "Which HTML attribute is used to specify a CSS class for an HTML element?",
    "options": ["`id`", "`style`", "`name`", "`class`"],
    "answer": "`class`"
  },
  {
    "question": "Which HTML tag is used to link an external stylesheet?",
    "options": ["`<style>`", "`<css>`", "`<link rel=\"stylesheet\">`", "`<stylesheet>`"],
    "answer": "`<link rel=\"stylesheet\">`"
  },
  {
    "question": "Which HTML element contains all the visible content of an HTML document?",
    "options": ["`<head>`", "`<html>`", "`<body>`", "`<main>`"],
    "answer": "`<body>`"
  },
  {
    "question": "What is the purpose of the `<!DOCTYPE html>` declaration?",
    "options": ["It defines the HTML version being used.", "It's a comment.", "It defines the character set.", "It links an external document type definition."],
    "answer": "It defines the HTML version being used."
  },
  {
    "question": "Which HTML attribute is used to specify the language of the document?",
    "options": ["`lang`", "`language`", "`charset`", "`xml:lang`"],
    "answer": "`lang`"
  },
  {
    "question": "Which HTML element is used to define a client-side script (JavaScript)?",
    "options": ["`<js>`", "`<script>`", "`<javascript>`", "`<code>`"],
    "answer": "`<script>`"
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
