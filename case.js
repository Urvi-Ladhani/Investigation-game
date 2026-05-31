// ══════════════════════════════════════════════════════════════════
// case.js — INVESTIGATION ENGINE
// Reads the selected case from localStorage, finds it in allCases,
// then runs the exact same logic your original case.js used.
//
// CODING STYLE: same as your original — arrays, forEach, innerHTML,
// switch statements, querySelector, dataset ids, simple functions.
// ══════════════════════════════════════════════════════════════════


// ─────────────────────────────────────────────────────────────────
// STEP 1 — Load the correct case from cases.js
// ─────────────────────────────────────────────────────────────────

// Read which case the player chose on the homepage
const selectedCaseId = localStorage.getItem("selectedCase");

// Find that case object inside the allCases array (from cases.js)
// If nothing is found (e.g. direct URL visit), fall back to case-01
let currentCase = allCases.find(function(c) {
   return c.id === selectedCaseId;
});

if (!currentCase) {
   currentCase = allCases[0]; // safe fallback
}

// Pull suspects and clues OUT of the case object
// (same variable names your original code used — nothing else changes)
const suspects = currentCase.suspects;
const clues     = currentCase.clues;


// ─────────────────────────────────────────────────────────────────
// STEP 2 — Randomly pick the guilty suspect for this playthrough
// Same logic as your original — just runs on the loaded suspects
// ─────────────────────────────────────────────────────────────────

const randomIndex = Math.floor(Math.random() * suspects.length);
suspects[randomIndex].guilty = true;
console.log("Case loaded:", currentCase.caseTitle);
console.log("Guilty suspect index:", randomIndex, "→", suspects[randomIndex].name);


// ─────────────────────────────────────────────────────────────────
// STEP 3 — Fill in the hero section dynamically
// Updates the page title, description, and meta from the case data
// ─────────────────────────────────────────────────────────────────

// Page browser tab title
document.title = currentCase.caseTitle;

// The big hero title (case.html has id="hero-title" with three spans)
const heroTitleEl = document.getElementById("hero-title");
if (heroTitleEl) {
   // titleTop and titleBottom from cases.js split into the three spans
   heroTitleEl.innerHTML = `
      <span class="title-line-1">${currentCase.titleTop}</span>
      <span class="title-line-2">${currentCase.titleBottom}</span>
      <span class="title-line-3">CASE</span>
   `;
}

// The hero badge at the top of the page (e.g. "CLASSIFIED — CASE #1947")
const heroBadgeEl = document.querySelector(".hero-badge");
if (heroBadgeEl) {
   heroBadgeEl.textContent = "CLASSIFIED — " + currentCase.caseNumber;
}

// Hero description paragraph
const heroDescEl = document.getElementById("hero-description");
if (heroDescEl) {
   heroDescEl.innerHTML = currentCase.heroDescription;
}

// Hero meta items (CASE STATUS / FILED / PRIORITY)
// case.html has three .meta-value spans — we target them by order
const metaValues = document.querySelectorAll(".meta-value");
if (metaValues.length >= 3) {
   // metaValues[0] = CASE STATUS
   metaValues[1].textContent = currentCase.caseFiled;      // FILED date
   metaValues[2].textContent = currentCase.casePriority;   // PRIORITY
}

// Footer clue count
const footerClueCount = document.getElementById("footer-clue-count");
if (footerClueCount) {
   footerClueCount.textContent = clues.length;
}


// ─────────────────────────────────────────────────────────────────
// STEP 4 — Render suspects
// Exact same innerHTML loop as your original case.js
// ─────────────────────────────────────────────────────────────────

const suspectContainer = document.getElementById("suspects-container");

suspects.forEach(function(suspect) {
   suspectContainer.innerHTML += `
      <div class="suspect-card">
           <div class="suspect-card__avatar">
               ${suspect.avatar}
           </div>
           <h2 class="suspect-card__name">
               ${suspect.name}
           </h2>
           <p class="suspect-card__role">
               ${suspect.role}
           </p>
           <p class="suspect-card__desc">
               ${suspect.description}
           </p>
           <p class="suspect-card__motive-label">
               MOTIVE
           </p>
           <p class="suspect-card__motive">
               ${suspect.motive}
           </p>
           <button data-id="${suspect.id}" class="suspect-card__btn">INVESTIGATE</button>
      </div>
   `;
});


// ─────────────────────────────────────────────────────────────────
// STEP 5 — Render clues
// Exact same innerHTML loop as your original case.js
// ─────────────────────────────────────────────────────────────────

const cluesContainer = document.getElementById("clues-container");

clues.forEach(function(clue) {
   cluesContainer.innerHTML += `
      <div class="clue-card">
           <p class="clue-card__number">
               ${clue.number}
           </p>
           <h2 class="clue-card__title">
               ${clue.title}
           </h2>
           <p class="clue-card__desc">
               ${clue.description}
           </p>
           <p class="clue-card__tag">
               ${clue.tag}
           </p>
      </div>
   `;
});


// ─────────────────────────────────────────────────────────────────
// STEP 6 — Typewriter effect
// Copied exactly from your original case.js — unchanged
// ─────────────────────────────────────────────────────────────────

function typeWriterEffect(element, text, callback) {
   element.textContent = "";
   let index = 0;

   const typing = setInterval(function() {
      if (index < text.length) {
         element.textContent += text[index];
         index++;
      } else {
         clearInterval(typing);
         if (callback) {
            callback();
         }
      }
   }, 30);
}


// ─────────────────────────────────────────────────────────────────
// STEP 7 — Sound effects
// Copied exactly from your original case.js — unchanged
// ─────────────────────────────────────────────────────────────────

const clickSound    = new Audio("sounds_game/click.mp3");
const whooshSound   = new Audio("sounds_game/whoosh.mp3");
const successSound  = new Audio("sounds_game/success.mp3");
const errorSound    = new Audio("sounds_game/error.mp3");
const evidenceSound = new Audio("sounds_game/evidence.mp3");

const startBtn = document.getElementById("start-btn");
if (startBtn) {
   startBtn.addEventListener("click", function() {
      clickSound.currentTime = 0;
      clickSound.play();
   });
}


// ─────────────────────────────────────────────────────────────────
// STEP 8 — Evidence board + connection strings
// Copied exactly from your original case.js — unchanged
// ─────────────────────────────────────────────────────────────────

const pinnedEvidence = [];

function renderCaseBoard() {
   const caseBoard = document.getElementById("case-board");
   caseBoard.innerHTML = "";

   if (pinnedEvidence.length === 0) {
      caseBoard.innerHTML = `
         <div class="board-empty">NO EVIDENCE PINNED YET</div>
      `;
   } else {
      pinnedEvidence.forEach(function(evidence) {
         caseBoard.innerHTML += `
            <div class="board-card">
               <div class="board-card__top">
                  <div class="board-tag">${evidence.suspect}</div>
                  <div class="board-priority ${evidence.levelClass}">${evidence.level}</div>
               </div>
               <div class="board-text">${evidence.text}</div>
            </div>
         `;
      });
   }
}

function renderConnections() {
   const wrapper      = document.querySelector(".case-board-wrapper");
   const svgContainer = document.getElementById("board-connections");
   const cards        = document.querySelectorAll(".board-card");

   if (!svgContainer || !wrapper) return;

   const wrapperRect = wrapper.getBoundingClientRect();
   svgContainer.setAttribute("width",  wrapperRect.width);
   svgContainer.setAttribute("height", wrapperRect.height);

   let svgHTML = "";

   if (cards.length < 2) {
      svgContainer.innerHTML = "";
      return;
   }

   for (let i = 0; i < cards.length - 1; i++) {
      const currentCard = cards[i].getBoundingClientRect();
      const nextCard    = cards[i + 1].getBoundingClientRect();

      const startX = (currentCard.left - wrapperRect.left) + (currentCard.width / 2);
      const startY = (currentCard.top  - wrapperRect.top)  + 5;
      const endX   = (nextCard.left    - wrapperRect.left) + (nextCard.width / 2);
      const endY   = (nextCard.top     - wrapperRect.top)  + 5;

      svgHTML += `
         <line 
            x1="${startX}" y1="${startY}" 
            x2="${endX}"   y2="${endY}" 
            class="string-line">
         </line>
      `;
   }

   svgContainer.innerHTML = svgHTML;
}

window.addEventListener("resize", function() {
   if (pinnedEvidence.length >= 2) {
      renderConnections();
   }
});


// ─────────────────────────────────────────────────────────────────
// STEP 9 — Interrogation handler
//
// THIS is the big change from your original.
// Your original had a hardcoded switch with case "1", "2", "3"
// that manually referenced suspects[0], suspects[1], suspects[2].
//
// The new version does the SAME thing but works for ANY number of
// suspects from ANY case — it just uses the dataset id to find the
// right suspect in the array instead of hardcoding each one.
//
// Same structure: switch on clickedId, same innerHTML, same typewriter,
// same pin button — just no longer hardcoded per suspect.
// ─────────────────────────────────────────────────────────────────

const interrogationContainer = document.getElementById("interrogation-container");

// Buttons were just rendered in STEP 4, so we can query them now
const suspectButtons = document.querySelectorAll(".suspect-card__btn");

suspectButtons.forEach(function(button) {
   button.addEventListener("click", function() {

      const clickedId = button.dataset.id;  // "1", "2", or "3"

      clickSound.currentTime = 0;
      clickSound.play();
      whooshSound.currentTime = 0;
      whooshSound.play();

      // Find the suspect whose id matches the clicked button
      // (ids are numbers in the data, dataset gives us strings — parseInt fixes that)
      const suspect = suspects.find(function(s) {
         return s.id === parseInt(clickedId);
      });

      if (!suspect) return; // safety check

      // Mark as interrogated (same as your original)
      suspect.interrogated = true;

      // Pick the right evidence based on guilt (same as your original)
      const evidence = suspect.guilty ? suspect.guiltyClue : suspect.innocentClue;

      // Update accusation section (same as your original)
      renderAccusationSection();

      // Render the dialogue bubbles (same HTML structure as your original)
      interrogationContainer.innerHTML = `
         <div class="dialogue-bubble dialogue-bubble--detective">
            <div class="dialogue-speaker">Detective</div>
            <div class="dialogue-text">${suspect.question}</div>
         </div>
         <div class="dialogue-bubble dialogue-bubble--suspect">
            <div class="dialogue-speaker">${suspect.name}</div>
            <div class="dialogue-text suspect-typing"></div>
         </div>
      `;

      const typingElement = document.querySelector(".suspect-typing");

      // Run typewriter, then show evidence card (same as your original)
      typeWriterEffect(typingElement, suspect.interrogation, function() {

         evidenceSound.currentTime = 0;
         evidenceSound.play();

         interrogationContainer.innerHTML += `
            <div class="evidence-card">
               <div class="evidence-title">EVIDENCE UNLOCKED</div>
               <div class="evidence-text">${evidence}</div>
               <button class="pin-btn">📌 PIN TO CASE BOARD</button>
            </div>
         `;

         const pinBtn = document.querySelector(".pin-btn");

         pinBtn.addEventListener("click", function() {
            if (pinBtn.disabled) return;
            pinBtn.disabled  = true;
            pinBtn.innerText = "📌 PINNED";

            pinnedEvidence.push({
               suspect:    suspect.name,
               text:       evidence,
               level:      suspect.guilty ? "HIGH RISK"       : "ALIBI VERIFIED",
               levelClass: suspect.guilty ? "priority-danger" : "priority-safe"
            });

            renderCaseBoard();

            setTimeout(function() {
               renderConnections();
            }, 50);
         });
      });

      interrogationContainer.scrollIntoView({ behavior: "smooth" });
   });
});


// ─────────────────────────────────────────────────────────────────
// STEP 10 — Accusation section
//
// Same logic as your original renderAccusationSection().
// The only difference: instead of a hardcoded switch with case "1"/
// "2"/"3", we find the suspect by id — same approach as Step 9.
// This way it works with any number of suspects in any case.
// ─────────────────────────────────────────────────────────────────

function renderAccusationSection() {
   const accusationContainer = document.getElementById("accusation-container");
   accusationContainer.innerHTML = `<div class="accusation-grid"></div>`;
   const accusationGrid = document.querySelector(".accusation-grid");

   // Check if ALL suspects have been interrogated (same as your original)
   let allInterrogated = true;
   suspects.forEach(function(suspect) {
      if (suspect.interrogated === false) {
         allInterrogated = false;
      }
   });

   if (allInterrogated === true) {

      // Render one accuse button per suspect (same as your original)
      suspects.forEach(function(suspect) {
         accusationGrid.innerHTML += `
            <button class="accuse-btn" data-id="${suspect.id}">
               <div class="accuse-label">FINAL ACCUSATION</div>
               <div>${suspect.name}</div>
            </button>
         `;
      });

      // Attach click listeners after buttons are created (same as your original)
      const accuseButtons    = document.querySelectorAll(".accuse-btn");
      const resultContainer  = document.getElementById("result-container");

      accuseButtons.forEach(function(accuseButton) {
         accuseButton.addEventListener("click", function() {

            clickSound.currentTime = 0;
            clickSound.play();

            const accusedId = parseInt(accuseButton.dataset.id);

            // Find the accused suspect by id (replaces the hardcoded switch)
            const accused = suspects.find(function(s) {
               return s.id === accusedId;
            });

            if (!accused) return;

            if (accused.guilty) {
               // ✅ Correct accusation
               successSound.currentTime = 0;
               successSound.play();
               resultContainer.innerHTML = `
                  <div class="result-solved">
                     <div class="result-solved__badge">CASE SOLVED</div>
                     <p class="result-sub">${accused.name} was exposed as the criminal behind ${currentCase.caseTitle}.</p>
                  </div>
               `;
            } else {
               // ❌ Wrong accusation
               errorSound.currentTime = 0;
               errorSound.play();
               resultContainer.innerHTML = `
                  <div class="result-escaped">
                     <div class="result-escaped__badge">CRIMINAL ESCAPED</div>
                     <p class="result-sub">${accused.name} was innocent. The real criminal walked free.</p>
                  </div>
               `;
            }

            resultContainer.scrollIntoView({ behavior: "smooth" });
         });
      });

   } else {
      // Not all suspects interrogated yet (same message as your original)
      accusationGrid.innerHTML += `
         <p class="accusation-locked">
            🔒 COMPLETE ALL INTERROGATIONS
         </p>
      `;
   }
}

// Initial call — same as your original
renderAccusationSection();