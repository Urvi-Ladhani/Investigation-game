// ══════════════════════════════════════════════════════════════════
// cases.js — MASTER CASE DATABASE
// Used by: index.js (homepage cards) + case.js (investigation page)
//
// HOMEPAGE fields (DO NOT change these — index.js depends on them):
//   id, number, fileNum, titleTop, titleBottom, description, image
//
// INVESTIGATION fields (new — case.js reads these):
//   caseTitle, caseNumber, caseFiled, casePriority, heroDescription
//   suspects[]  → each has: id, name, role, motive, description,
//                 alibi, interrogation, guiltyClue, innocentClue,
//                 avatar, guilty (always false here — case.js randomises)
//   clues[]     → each has: number, title, description, tag
// ══════════════════════════════════════════════════════════════════

const allCases = [

   // ─────────────────────────────────────────────
   // CASE 01 — THE MISSING DIAMOND
   // ─────────────────────────────────────────────
   {
      // --- Homepage fields ---
      id:          "case-01",
      number:      "CASE FILE",
      fileNum:     "#1947",
      titleTop:    "THE MISSING",
      titleBottom: "DIAMOND",
      description: "A priceless diamond vanished during a luxury gala night.",
      image:       "",

      // --- Investigation page fields ---
      caseTitle:        "THE MISSING DIAMOND CASE",
      caseNumber:       "CASE #1947",
      caseFiled:        "NOV 3, 1947",
      casePriority:     "CRITICAL",
      heroDescription:  "The Vandermeer Diamond — 84 carats, priceless, irreplaceable — vanished from the Blackwood Estate gala on the night of November 3rd. Three suspects. One truth. The city holds its breath. <em>You are the only one who can crack this case.</em>",

      suspects: [
         {
            id: 1,
            name: "Rahul Mehta",
            role: "Business Partner",
            avatar: "🕴️",
            motive: "Drowning in gambling debt",
            description: "Rahul handled financial operations for the Blackwood Estate. Recently discovered to be under massive financial pressure.",
            alibi: "Claims he was in the wine cellar during the theft.",
            interrogation: "I was checking the wine cellar inventory when the blackout happened. I heard hurried footsteps upstairs just before the alarms went off.",
            guiltyClue: "Investigators recovered Rahul's recent bank records and discovered several large gambling payments made only hours before the robbery. Further investigation revealed that Rahul had secretly borrowed huge amounts of money over the past few months and was desperately trying to clear his debts before creditors arrived at the estate.",
            innocentClue: "CCTV timestamps and security logs confirmed Rahul remained inside the wine cellar throughout the mansion blackout. Guards later verified that no movement was recorded from the cellar corridor toward the vault area during the exact time of the robbery.",
            guilty: false,
            interrogated: false,
            question: "Where were you at 9 PM, Mr. Rahul?"
         },
         {
            id: 2,
            name: "Aman Verma",
            role: "Neighbor",
            avatar: "🎩",
            motive: "Long-standing rivalry with the Blackwood family",
            description: "Aman frequently argued with the estate owner over land disputes and inheritance rumors.",
            alibi: "Says he was outside taking a phone call near the garden.",
            interrogation: "I stepped outside to answer a private phone call. When I returned, the entire mansion was already in chaos.",
            guiltyClue: "Muddy shoe prints discovered near the mansion's rear entrance matched the exact sole pattern of Aman's leather boots. During a later search, investigators also found traces of wet soil and torn fabric inside Aman's car, suggesting he may have entered the estate grounds secretly during the chaos.",
            innocentClue: "Phone tower records confirmed Aman was standing outside the mansion gates during the robbery while attending a private phone call. Several witnesses near the garden also confirmed seeing Aman away from the main hall at the exact moment the blackout happened.",
            guilty: false,
            interrogated: false,
            question: "Your story seems suspicious, Aman. Explain yourself."
         },
         {
            id: 3,
            name: "Riya Kapoor",
            role: "Roommate",
            avatar: "🧤",
            motive: "Secret jealousy and resentment",
            description: "Riya lived inside the estate and knew the security system better than anyone else.",
            alibi: "Claims she was preparing drinks for guests during the blackout.",
            interrogation: "I was serving drinks in the ballroom. The lights flickered twice before everything suddenly went dark for a few seconds.",
            guiltyClue: "Moments before the mansion cameras suddenly shut down, someone used Riya's personal security access code to enter the surveillance system. Investigators later discovered partially deleted security logs connected to her account, raising suspicion that someone inside the estate attempted to hide digital evidence.",
            innocentClue: "Multiple guests and staff members confirmed Riya was continuously serving drinks inside the ballroom throughout the blackout. Several witnesses stated she never left the crowded hall during the few critical minutes when the diamond disappeared from the vault.",
            guilty: false,
            interrogated: false,
            question: "Riya, multiple witnesses saw you near the ballroom."
         }
      ],

      clues: [
         {
            number: "CLUE #01",
            title: "Broken Watch",
            description: "A shattered pocket watch was discovered near the staircase. The hands stopped exactly at 9:07 PM.",
            tag: "TIME EVIDENCE"
         },
         {
            number: "CLUE #02",
            title: "Fingerprint",
            description: "A partial fingerprint was found on the vault handle, but it appears intentionally smudged.",
            tag: "FORENSICS"
         },
         {
            number: "CLUE #03",
            title: "Phone Logs",
            description: "A suspicious outgoing call was made minutes before the mansion blackout occurred.",
            tag: "DIGITAL TRACE"
         },
         {
            number: "CLUE #04",
            title: "Shoe Print",
            description: "Mud-covered shoe prints were discovered leading toward the estate's rear entrance.",
            tag: "CRIME SCENE"
         }
      ]
   },

   // ─────────────────────────────────────────────
   // CASE 02 — THE MANSION MURDER
   // ─────────────────────────────────────────────
   {
      // --- Homepage fields ---
      id:          "case-02",
      number:      "CASE FILE",
      fileNum:     "#2083",
      titleTop:    "THE MANSION",
      titleBottom: "MURDER",
      description: "A businessman was found dead inside his private mansion.",
      image:       "",

      // --- Investigation page fields ---
      caseTitle:        "THE MANSION MURDER CASE",
      caseNumber:       "CASE #2083",
      caseFiled:        "MAR 12, 1962",
      casePriority:     "CRITICAL",
      heroDescription:  "Billionaire Arthur Sterling was found dead in his locked study at Thornfield Manor. The will was altered the night before. Three heirs stood to gain everything. <em>Someone in that mansion is a murderer — and they are still inside.</em>",

      suspects: [
         {
            id: 1,
            name: "Victor Sterling",
            role: "Eldest Son",
            avatar: "🧥",
            motive: "Was disinherited from the will the night before",
            description: "Victor had always expected to inherit everything. Learning he was cut from the will sent him into a violent rage witnessed by two staff members.",
            alibi: "Claims he was in the library all evening reading.",
            interrogation: "I was in the library the entire night. I had no idea Father had changed the will until the lawyer arrived in the morning.",
            guiltyClue: "A handwritten note found inside the study desk drawer contained Victor's signature and referenced 'settling the matter before dawn.' The study's side door lock was found tampered with from the inside — only someone who knew the property layout could have managed it.",
            innocentClue: "The household librarian confirmed Victor requested three books at 8 PM and returned them just after midnight. His reading glasses were found at his usual chair along with a half-finished glass of brandy. No evidence places him near the study.",
            guilty: false,
            interrogated: false,
            question: "Victor, where exactly were you when your father died?"
         },
         {
            id: 2,
            name: "Eleanor Moss",
            role: "Family Lawyer",
            avatar: "⚖️",
            motive: "Was secretly named the sole beneficiary in a hidden codicil",
            description: "Eleanor drafted the new will herself and was the last person known to speak with Arthur Sterling before his death.",
            alibi: "Claims she left the estate at 9 PM after completing the paperwork.",
            interrogation: "I finalised the documents and left immediately. Whatever happened after I departed is none of my concern.",
            guiltyClue: "Gate security logs revealed Eleanor's car re-entered the estate at 11:43 PM — nearly three hours after she claims to have left. The window of Arthur's study showed fresh scratch marks consistent with a lock pick tool found later inside Eleanor's briefcase.",
            innocentClue: "Road toll records and a petrol station receipt confirmed Eleanor was 40 kilometres away from the estate when the coroner places the time of death. Her security card was not used to re-enter the main building at any point during the night.",
            guilty: false,
            interrogated: false,
            question: "Eleanor, our records show you may have returned to the estate. Explain that."
         },
         {
            id: 3,
            name: "Marcus Holt",
            role: "Head Butler",
            avatar: "🫅",
            motive: "Arthur threatened to expose his criminal past",
            description: "Marcus had served the Sterling household for 22 years and had unsupervised access to every room in the manor, including the study.",
            alibi: "Says he was overseeing the kitchen staff during dinner service.",
            interrogation: "I was managing dinner for twelve guests. I could not possibly have left the kitchen without the entire staff noticing.",
            guiltyClue: "A set of master keys normally kept in the butler's office were found inside the study fireplace, partially melted. Kitchen logs showed a 28-minute window where Marcus was unaccounted for, which aligns precisely with the estimated time of death.",
            innocentClue: "Five kitchen staff members gave consistent statements that Marcus coordinated the entire dinner service without leaving the kitchen floor. The dinner reservation ledger also confirms he signed off on each course personally throughout the evening.",
            guilty: false,
            interrogated: false,
            question: "Marcus, there is a 28-minute gap in the kitchen logs. Account for it."
         }
      ],

      clues: [
         {
            number: "CLUE #01",
            title: "Altered Will",
            description: "The official will was reprinted at 11:58 PM — hours after the lawyer claimed to have left.",
            tag: "LEGAL DOCUMENT"
         },
         {
            number: "CLUE #02",
            title: "Locked Study",
            description: "The study door was bolted from the inside, yet no suicide note or weapon was found near the body.",
            tag: "CRIME SCENE"
         },
         {
            number: "CLUE #03",
            title: "Snapped Cufflink",
            description: "A broken gold cufflink engraved with the letter 'V' was found beneath the victim's desk.",
            tag: "PHYSICAL EVIDENCE"
         },
         {
            number: "CLUE #04",
            title: "Security Log Gap",
            description: "The internal camera system shows a deliberate 31-minute blackout starting at 11:22 PM.",
            tag: "DIGITAL TRACE"
         }
      ]
   },

   // ─────────────────────────────────────────────
   // CASE 03 — THE BLACKMAIL FILES
   // ─────────────────────────────────────────────
   {
      // --- Homepage fields ---
      id:          "case-03",
      number:      "CASE FILE",
      fileNum:     "#3156",
      titleTop:    "THE BLACKMAIL",
      titleBottom: "FILES",
      description: "Confidential files disappeared after an anonymous threat.",
      image:       "",

      // --- Investigation page fields ---
      caseTitle:        "THE BLACKMAIL FILES CASE",
      caseNumber:       "CASE #3156",
      caseFiled:        "SEP 8, 1978",
      casePriority:     "CLASSIFIED",
      heroDescription:  "Senator Harlow has been receiving encrypted threats for weeks. The drop went wrong, the bagman is missing, and the contents of the photos could bring down an entire government. <em>Find the blackmailer before the files go public.</em>",

      suspects: [
         {
            id: 1,
            name: "Diane Ashford",
            role: "Press Secretary",
            avatar: "📋",
            motive: "Was passed over for a promotion and wants revenge",
            description: "Diane had direct access to all classified briefings and private correspondence sent through the Senator's office.",
            alibi: "Claims she was at an official press dinner on the night of the drop.",
            interrogation: "I attended the dinner from seven until nearly midnight. Forty journalists can confirm I was there the entire time.",
            guiltyClue: "Encrypted messages found on a burner phone recovered from Diane's apartment used the same cipher pattern as the blackmail notes. A partial receipt for a storage locker — the same facility where the missing files later turned up — was found folded inside her jacket pocket.",
            innocentClue: "Dinner attendance records, three separate photographer timestamps, and a signed menu confirm Diane was present at the press dinner throughout the entire evening. Her access card was not used inside the Senate building after 5 PM.",
            guilty: false,
            interrogated: false,
            question: "Diane, we found encrypted messages on a device connected to your address."
         },
         {
            id: 2,
            name: "Conrad Finley",
            role: "Political Rival",
            avatar: "🗂️",
            motive: "Wants the Senator destroyed before the upcoming election",
            description: "Conrad publicly despises Senator Harlow and has the resources and contacts to hire professionals for this kind of operation.",
            alibi: "Says he was at his campaign office preparing speeches.",
            interrogation: "I was writing speeches all night with my campaign manager present. I have nothing to do with stolen files.",
            guiltyClue: "Wire transfer records show three anonymous payments routed through a shell company connected to Conrad's campaign fund, each timed one week before a new blackmail note arrived. His campaign manager later admitted Conrad was alone in his private office for most of the evening.",
            innocentClue: "The campaign manager provided a sworn statement and phone logs confirming Conrad was actively on calls with donors until 1 AM. Independent financial auditors found no irregular transfers connected to Conrad's known accounts.",
            guilty: false,
            interrogated: false,
            question: "Conrad, explain these financial transfers tied to your campaign."
         },
         {
            id: 3,
            name: "Nina Salvo",
            role: "Intelligence Courier",
            avatar: "🗝️",
            motive: "Was paid to deliver the files and went rogue",
            description: "Nina was the only person authorised to transport classified documents between departments. She knew the drop location better than anyone.",
            alibi: "Claims the handoff was completed and she left the city immediately afterward.",
            interrogation: "I made the delivery as instructed and boarded a train. Whatever happened to those files afterward is above my clearance level.",
            guiltyClue: "Train manifests show Nina's ticket was purchased but never boarded. Surveillance footage from the drop location captures a figure in Nina's distinctive coat returning to the location forty minutes after the scheduled pickup. The missing bagman was later found with Nina's contact number saved under a false name.",
            innocentClue: "Border control records confirm Nina crossed the checkpoint exactly when she claimed. The train conductor independently verified her presence onboard. No surveillance footage clearly identifies her at the drop site after the handoff.",
            guilty: false,
            interrogated: false,
            question: "Nina, your train ticket was bought but our records show you never boarded."
         }
      ],

      clues: [
         {
            number: "CLUE #01",
            title: "Cipher Note",
            description: "A handwritten note using a substitution cipher was left at the drop site. The encoding matches classified internal communications.",
            tag: "CRYPTOGRAPHIC"
         },
         {
            number: "CLUE #02",
            title: "Burner Phone",
            description: "A prepaid device found in a storm drain near the Senate building. Last call made 11 minutes before the drop was scheduled.",
            tag: "DIGITAL TRACE"
         },
         {
            number: "CLUE #03",
            title: "Missing Bagman",
            description: "The courier assigned to collect the files has not been seen since the night of the exchange. His apartment was cleared out.",
            tag: "PERSONS OF INTEREST"
         },
         {
            number: "CLUE #04",
            title: "Storage Receipt",
            description: "A partial receipt for locker 14B at a private storage facility was recovered. The locker was rented under a false name.",
            tag: "PHYSICAL EVIDENCE"
         }
      ]
   },

   // ─────────────────────────────────────────────
   // CASE 04 — THE MUSEUM HEIST
   // ─────────────────────────────────────────────
   {
      // --- Homepage fields ---
      id:          "case-04",
      number:      "CASE FILE",
      fileNum:     "#4269",
      titleTop:    "THE MUSEUM",
      titleBottom: "HEIST",
      description: "A rare artifact vanished despite active security systems.",
      image:       "",

      // --- Investigation page fields ---
      caseTitle:        "THE MUSEUM HEIST CASE",
      caseNumber:       "CASE #4269",
      caseFiled:        "JUN 21, 1991",
      casePriority:     "HIGH",
      heroDescription:  "The Ptolemy Seal — a 3,000-year-old artifact worth fifty million — was swapped overnight with a flawless replica. The curator swears it never left. The security logs tell a completely different story. <em>Someone with inside knowledge executed this perfectly.</em>",

      suspects: [
         {
            id: 1,
            name: "Dr. Soren Vael",
            role: "Chief Curator",
            avatar: "🏺",
            motive: "Secretly sold the original to a private collector to cover museum debts",
            description: "Dr. Vael has run the museum for eighteen years and personally oversaw the Ptolemy Seal's installation and security protocols.",
            alibi: "Claims he was home all evening and can produce no witnesses.",
            interrogation: "I was home alone all evening. I have dedicated my career to that institution. The very idea is insulting.",
            guiltyClue: "A private auction listing for an artifact matching the Ptolemy Seal's exact specifications appeared online three days before the theft was reported. The listing was traced to an IP address registered to a property Dr. Vael owns under his wife's maiden name.",
            innocentClue: "Forensic analysis of the replica found traces of resin only available from a supplier in Eastern Europe — far outside Dr. Vael's known network. His financial records, though messy, show no deposits consistent with a private sale of that magnitude.",
            guilty: false,
            interrogated: false,
            question: "Doctor, explain this auction listing. The artifact description is exact."
         },
         {
            id: 2,
            name: "Petra Lund",
            role: "Night Security Guard",
            avatar: "🔦",
            motive: "Was bribed to disable the motion sensors for one hour",
            description: "Petra was the only guard on duty during the overnight window when the swap occurred. She had sole access to the security control panel.",
            alibi: "Says she completed her rounds without incident and saw nothing unusual.",
            interrogation: "I did my rounds exactly as scheduled. The cameras were on, the sensors were active. I don't know how this happened.",
            guiltyClue: "Security server logs show the motion sensor in Gallery 7 was manually disabled from the guard station at 2:14 AM — precisely when Petra's shift route would have placed her there. A cash deposit of twelve thousand in her bank account three days after the heist has no documented source.",
            innocentClue: "The guard station terminal showed login activity but forensic analysis found the login credentials were used remotely via a cloned access token — meaning someone could have accessed the system without Petra being present. Her patrol stamps are consistent with every checkpoint time.",
            guilty: false,
            interrogated: false,
            question: "Petra, the motion sensors were disabled from your station at 2 AM."
         },
         {
            id: 3,
            name: "Alexei Drum",
            role: "Restoration Specialist",
            avatar: "🖌️",
            motive: "Created the replica himself and orchestrated the swap",
            description: "Alexei was brought in six weeks ago to restore the display case framing. He had unsupervised access to the gallery for weeks before the theft.",
            alibi: "Claims he finished his contract work and flew home the day before the theft.",
            interrogation: "I completed my restoration contract on Friday and flew home Saturday morning. I have a boarding pass right here.",
            guiltyClue: "The replica's construction technique — particularly the aging method used on the stone — is a signature process Alexei developed and has only ever used in two documented restoration projects. Customs records show his returned luggage was 4 kilograms heavier than his outbound bags.",
            innocentClue: "Flight manifests confirm Alexei departed Saturday morning as stated. The boarding pass is legitimate and matches airport biometric records. While the replica's technique is similar to his style, three other restoration specialists use comparable methods.",
            guilty: false,
            interrogated: false,
            question: "Alexei, this replica was built using your exact technique. Explain that."
         }
      ],

      clues: [
         {
            number: "CLUE #01",
            title: "Flawless Replica",
            description: "The fake passed three initial inspections. Lab analysis confirms it was crafted using museum-grade materials unavailable to the public.",
            tag: "FORENSICS"
         },
         {
            number: "CLUE #02",
            title: "Sensor Blackout",
            description: "Motion sensors in Gallery 7 went offline for exactly 58 minutes. The blackout was manually triggered, not a system fault.",
            tag: "SECURITY LOG"
         },
         {
            number: "CLUE #03",
            title: "Unmarked Van",
            description: "A delivery van with covered plates was recorded on a street camera outside the museum's loading bay at 2:30 AM.",
            tag: "SURVEILLANCE"
         },
         {
            number: "CLUE #04",
            title: "Resin Trace",
            description: "A chemical trace of Eastern European resin was found on the display case locking mechanism. It is used in advanced replica construction.",
            tag: "FORENSIC CHEMISTRY"
         }
      ]
   }

]; // end of allCases array