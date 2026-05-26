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
    guilty: true,
    avatar: "🕴️"
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
    avatar: "🎩"
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
    guilty: false,
    avatar: "🧤"
  }
];
const suspectContainer=document.getElementById("suspects-container");
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
        <button class="suspect-card__btn">INVESTIGATE</button>
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
const cluesContainer=document.getElementById("clues-container");
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
