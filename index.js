//---------------------suspects---------------------------

const suspects = [
   {
      id: 1,
      name: "Rahul Mehta",
      role: "Business Partner",
      motive: "Drowning in gambling debt",
      description:
         "Rahul handled financial operations for the Blackwood Estate. Recently discovered to be under massive financial pressure.",
      alibi:
         "Claims he was in the wine cellar during the theft.",
      guilty: false,
      interrogated: false,
      interrogation:
         "I was checking the wine cellar inventory when the blackout happened. I heard hurried footsteps upstairs just before the alarms went off.",
      avatar: "🕴️",
      guiltyClue:
         "Investigators recovered Rahul’s recent bank records and discovered several large gambling payments made only hours before the robbery. Further investigation revealed that Rahul had secretly borrowed huge amounts of money over the past few months and was desperately trying to clear his debts before creditors arrived at the estate.",

      innocentClue:
         "CCTV timestamps and security logs confirmed Rahul remained inside the wine cellar throughout the mansion blackout. Guards later verified that no movement was recorded from the cellar corridor toward the vault area during the exact time of the robbery."
   },

   {
      id: 2,
      name: "Aman Verma",
      role: "Neighbor",
      motive: "Long-standing rivalry with the Blackwood family",
      description:
         "Aman frequently argued with the estate owner over land disputes and inheritance rumors.",
      alibi:
         "Says he was outside taking a phone call near the garden.",
      guilty: false,
      interrogated: false,
      interrogation:
         "I stepped outside to answer a private phone call. When I returned, the entire mansion was already in chaos.",

      avatar: "🎩",
      guiltyClue:
         "Muddy shoe prints discovered near the mansion’s rear entrance matched the exact sole pattern of Aman’s leather boots. During a later search, investigators also found traces of wet soil and torn fabric inside Aman’s car, suggesting he may have entered the estate grounds secretly during the chaos.",

      innocentClue:
         "Phone tower records confirmed Aman was standing outside the mansion gates during the robbery while attending a private phone call. Several witnesses near the garden also confirmed seeing Aman away from the main hall at the exact moment the blackout happened."
   },

   {
      id: 3,
      name: "Riya Kapoor",
      role: "Roommate",
      motive: "Secret jealousy and resentment",
      description:
         "Riya lived inside the estate and knew the security system better than anyone else.",
      alibi:
         "Claims she was preparing drinks for guests during the blackout.",
      interrogation:
         "I was serving drinks in the ballroom. The lights flickered twice before everything suddenly went dark for a few seconds.",
      guilty: false,
      interrogated: false,
      avatar: "🧤",
      guiltyClue:
         "Moments before the mansion cameras suddenly shut down, someone used Riya’s personal security access code to enter the surveillance system. Investigators later discovered partially deleted security logs connected to her account, raising suspicion that someone inside the estate attempted to hide digital evidence.",

      innocentClue:
         "Multiple guests and staff members confirmed Riya was continuously serving drinks inside the ballroom throughout the blackout. Several witnesses stated she never left the crowded hall during the few critical minutes when the diamond disappeared from the vault."
   }
];

//----------randomly choosing guilty---------------------

const randomIndex = Math.floor(Math.random() * suspects.length);
suspects[randomIndex].guilty = true;
console.log(randomIndex);

const suspectContainer = document.getElementById("suspects-container");
suspects.forEach((suspect) => {
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

//-------------------cluess-------------------------

const clues = [
   {
      number: "CLUE #01",
      title: "Broken Watch",
      description:
         "A shattered pocket watch was discovered near the staircase. The hands stopped exactly at 9:07 PM.",
      tag: "TIME EVIDENCE"
   },

   {
      number: "CLUE #02",
      title: "Fingerprint",
      description:
         "A partial fingerprint was found on the vault handle, but it appears intentionally smudged.",
      tag: "FORENSICS"
   },

   {
      number: "CLUE #03",
      title: "Phone Logs",
      description:
         "A suspicious outgoing call was made minutes before the mansion blackout occurred.",
      tag: "DIGITAL TRACE"
   },

   {
      number: "CLUE #04",
      title: "Shoe Print",
      description:
         "Mud-covered shoe prints were discovered leading toward the estate’s rear entrance.",
      tag: "CRIME SCENE"
   }
];
const cluesContainer = document.getElementById("clues-container");
clues.forEach((clue) => {
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

//-----------type writer effect--------------------

function typeWriterEffect(element, text, callback) {

   element.textContent = "";

   let index = 0;

   const typing = setInterval(() => {

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
//----------------sound effect-----------------------------

const clickSound = new Audio("sounds_game/click.mp3");
const whooshSound = new Audio("sounds_game/whoosh.mp3");
const successSound = new Audio("sounds_game/success.mp3");
const errorSound = new Audio("sounds_game/error.mp3");
const evidenceSound = new Audio("sounds_game/evidence.mp3");


const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", () => {

   clickSound.currentTime = 0;

   clickSound.play();

});




//---------------investigation-----------------------------
const buttons = document.querySelectorAll(".suspect-card__btn");
const interrogationContainer = document.getElementById("interrogation-container");
buttons.forEach((button) => {
   button.addEventListener("click", () => {
      console.log("clicked");
      const clickedId = button.dataset.id;
      clickSound.currentTime = 0;
      clickSound.play();
      whooshSound.currentTime = 0;
      whooshSound.play();
      switch (clickedId) {

         case "1":
            suspects[0].interrogated = true;
            let evidence1;
            if (suspects[0].guilty) {
               evidence1 = suspects[0].guiltyClue;
            } else {
               evidence1 = suspects[0].innocentClue;
            }
            renderAccusationSection();
            interrogationContainer.innerHTML = `
         <div class="dialogue-bubble dialogue-bubble--detective">
            <div class="dialogue-speaker">
               Detective
            </div>

            <div class="dialogue-text">
               Where were you at 9 PM, Mr. Rahul?
            </div>
         </div>

         <div class="dialogue-bubble dialogue-bubble--suspect">
            <div class="dialogue-speaker">
               Rahul Mehta
            </div>

            <div class="dialogue-text suspect-typing"></div>

         </div>
         
      `;
            const typingElement1 = document.querySelector(".suspect-typing");

            typeWriterEffect(
               typingElement1,
               suspects[0].interrogation,
               () => {
                  evidenceSound.currentTime = 0;
                  evidenceSound.play();
                  interrogationContainer.innerHTML += `
         <div class="evidence-card">

            <div class="evidence-title">
               EVIDENCE UNLOCKED
            </div>

            <div class="evidence-text">
               ${evidence1}
            </div>

         </div>
      `;

               }
            );
            interrogationContainer.scrollIntoView({
               behavior: "smooth"
            });
            break;


         case "2":
            suspects[1].interrogated = true;
            let evidence2;
            if (suspects[1].guilty) {
               evidence2 = suspects[1].guiltyClue;
            } else {
               evidence2 = suspects[1].innocentClue;
            }
            renderAccusationSection();
            interrogationContainer.innerHTML = `
         <div class="dialogue-bubble dialogue-bubble--detective">
            <div class="dialogue-speaker">
               Detective
            </div>

            <div class="dialogue-text">
               Your story seems suspicious, Aman. Explain yourself.
            </div>
         </div>

         <div class="dialogue-bubble dialogue-bubble--suspect">
            <div class="dialogue-speaker">
               Aman Verma
            </div>

            <div class="dialogue-text suspect-typing"></div>
         </div>
         
      `;
            const typingElement2 = document.querySelector(".suspect-typing");

            typeWriterEffect(
               typingElement2,
               suspects[1].interrogation,
               () => {
                  evidenceSound.currentTime = 0;
                  evidenceSound.play();
                  interrogationContainer.innerHTML += `
         <div class="evidence-card">

   <div class="evidence-title">
      EVIDENCE UNLOCKED
   </div>

   <div class="evidence-text">
      ${evidence2}
   </div>

</div>
      `;

               }
            );

            interrogationContainer.scrollIntoView({
               behavior: "smooth"
            });
            break;


         case "3":
            suspects[2].interrogated = true;
            let evidence3;
            if (suspects[2].guilty) {
               evidence3 = suspects[2].guiltyClue;
            } else {
               evidence3 = suspects[2].innocentClue;
            }
            renderAccusationSection();

            interrogationContainer.innerHTML = `
         <div class="dialogue-bubble dialogue-bubble--detective">
            <div class="dialogue-speaker">
               Detective
            </div>

            <div class="dialogue-text">
               Riya, multiple witnesses saw you near the ballroom.
            </div>
         </div>

         <div class="dialogue-bubble dialogue-bubble--suspect">
            <div class="dialogue-speaker">
               Riya Kapoor
            </div>

            <div class="dialogue-text suspect-typing"></div>
         </div>
         

</div>
      `;
            const typingElement3 = document.querySelector(".suspect-typing");

            typeWriterEffect(
               typingElement3,
               suspects[2].interrogation,
               () => {
                  evidenceSound.currentTime = 0;
                  evidenceSound.play();
                  interrogationContainer.innerHTML += `
         <div class="evidence-card">

   <div class="evidence-title">
      EVIDENCE UNLOCKED
   </div>

   <div class="evidence-text">
      ${evidence3}
   </div>
      `;

               }
            );
            interrogationContainer.scrollIntoView({
               behavior: "smooth"
            });
            break;
      }
   });
});


//-------------accusation-------------------

function renderAccusationSection() {

   const accusationContainer = document.getElementById("accusation-container");

   accusationContainer.innerHTML = `
      <div class="accusation-grid"></div>
   `;

   const accusationGrid = document.querySelector(".accusation-grid");



   // ---------- check interrogations ----------

   let checkInterrogated = true;

   suspects.forEach((suspect) => {

      if (suspect.interrogated === false) {
         checkInterrogated = false;
      }

   });



   // ---------- render accusation buttons ----------

   if (checkInterrogated === true) {

      suspects.forEach((suspect) => {

         accusationGrid.innerHTML += `

            <button class="accuse-btn" data-id="${suspect.id}">

               <div class="accuse-label">
                  FINAL ACCUSATION
               </div>

               <div>
                  ${suspect.name}
               </div>

            </button>

         `;

      });




      // buttons created dynamically
      // so listeners added AFTER creation

      const accusebuttons = document.querySelectorAll(".accuse-btn");
      const resultContainer = document.getElementById("result-container");
      accusebuttons.forEach((accusebutton) => {
         accusebutton.addEventListener("click", () => {
            clickSound.currentTime = 0;
            clickSound.play();
            const Id = accusebutton.dataset.id;

            switch (Id) {

               case "1":

                  if (suspects[0].guilty) {
                     successSound.currentTime = 0;
                     successSound.play();

                     resultContainer.innerHTML = `

                        <div class="result-solved">

                           <div class="result-solved__badge">
                              CASE SOLVED
                           </div>

                           <p class="result-sub">
                              Rahul Mehta was exposed as the mastermind behind the Blackwood Diamond robbery.
                           </p>

                        </div>

                     `;

                  } else {
                     errorSound.currentTime = 0;
                     errorSound.play();
                     resultContainer.innerHTML = `

                        <div class="result-escaped">

                           <div class="result-escaped__badge">
                              CRIMINAL ESCAPED
                           </div>

                           <p class="result-sub">
                              The wrong suspect was accused.
                           </p>

                        </div>

                     `;
                  }

                  break;



               case "2":

                  if (suspects[1].guilty) {
                     successSound.currentTime = 0;
                     successSound.play();
                     resultContainer.innerHTML = `

                        <div class="result-solved">

                           <div class="result-solved__badge">
                              CASE SOLVED
                           </div>

                           <p class="result-sub">
                              Aman Verma was revealed as the true criminal.
                           </p>

                        </div>

                     `;

                  } else {
                     errorSound.currentTime = 0;
                     errorSound.play();
                     resultContainer.innerHTML = `

                        <div class="result-escaped">

                           <div class="result-escaped__badge">
                              CRIMINAL ESCAPED
                           </div>

                           <p class="result-sub">
                              Aman Verma was innocent.
                           </p>

                        </div>

                     `;
                  }

                  break;



               case "3":

                  if (suspects[2].guilty) {
                     successSound.currentTime = 0;
                     successSound.play();
                     resultContainer.innerHTML = `

                        <div class="result-solved">

                           <div class="result-solved__badge">
                              CASE SOLVED
                           </div>

                           <p class="result-sub">
                              Riya Kapoor was exposed as the real thief.
                           </p>

                        </div>

                     `;

                  } else {
                     errorSound.currentTime = 0;
                     errorSound.play();

                     resultContainer.innerHTML = `

                        <div class="result-escaped">

                           <div class="result-escaped__badge">
                              CRIMINAL ESCAPED
                           </div>

                           <p class="result-sub">
                              Riya Kapoor was wrongly accused.
                           </p>

                        </div>

                     `;
                  }

                  break;
            }

         });

      });

   } else {
      accusationGrid.innerHTML += `
         <p class="accusation-locked">
            🔒 COMPLETE ALL INTERROGATIONS
         </p>
      `;
   }

}
renderAccusationSection();
