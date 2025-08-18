const selectedLanguage = localStorage.getItem("selectedLanguage");
document.getElementById("languageLabel").innerText = `Language: ${selectedLanguage?.toUpperCase() || "Unknown"}`;

const levels = [
  "Basic",
  "Middle",
  "Advanced",
  "Company Level",
  "Code MCQ (Debug Exam)"
];

const container = document.getElementById("levelContainer");

levels.forEach(level => {
  const btn = document.createElement("button");
  btn.textContent = level;
  btn.onclick = () => {
    localStorage.setItem("selectedLevel", level);

    if (level === "Code MCQ (Debug Exam)") {
      window.location.href = `debug_level_${selectedLanguage}.html`;
    } else {
      const safeName = level.toLowerCase().replace(/\s+/g, "_");
      window.location.href = `${safeName}_${selectedLanguage}.html`;
    }
  };
  container.appendChild(btn);
});

// 🌗 Mode Switcher
function cycleTheme() {
  const body = document.body;

  // Determine next theme
  let nextTheme = "light";
  if (body.classList.contains("light")) {
    nextTheme = "dark";
  } else if (body.classList.contains("dark")) {
    nextTheme = "animated";
  } else if (body.classList.contains("animated")) {
    nextTheme = "light";
  }

  // Clear existing theme classes
  body.classList.remove("light", "dark", "animated");
  body.classList.add(nextTheme);

  // Save to localStorage
  localStorage.setItem("selectedTheme", nextTheme);
}

 // Apply stored theme mode
const savedTheme = localStorage.getItem("selectedTheme") || "light";
document.body.classList.add(savedTheme);

