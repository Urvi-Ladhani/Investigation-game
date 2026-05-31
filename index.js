// ══════════════════════════════════════════════════════
// CRIMINAL CASE FILES — index.js
// ══════════════════════════════════════════════════════


// Placeholder icons when no image is provided
const icons = ["◈", "⌂", "⊞", "⊡"];

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("case-grid");

    allCases.forEach((c, i) => {
        const thumbInner = c.image
            ? `<img class="case-thumb-img" src="${c.image}" alt="${c.titleTop} ${c.titleBottom}">`
            : `<span class="case-thumb-icon">${icons[i]}</span>`;

        const card = document.createElement("div");
        card.className = "case-card";
        card.innerHTML = `
            <div class="case-thumb-wrap">
                ${thumbInner}
                <div class="case-thumb-scanline"></div>
            </div>

            <div class="case-body">
                <div class="case-header">
                    <span class="case-number">${c.number} &nbsp;<span>${c.fileNum}</span></span>
                </div>

                <h3 class="case-title">
                    <span class="case-title-top">${c.titleTop}</span>
                    <span class="case-title-bottom">${c.titleBottom}</span>
                </h3>

                <p class="case-description">${c.description}</p>

                <button class="case-btn" data-id="${c.id}">
                    BEGIN INVESTIGATION
                    <span class="case-btn-arrow">→</span>
                </button>
            </div>
        `;

        grid.appendChild(card);
    });

    // Button click handlers
    document.querySelectorAll(".case-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            localStorage.setItem("selectedCase", btn.dataset.id);
            btn.innerHTML = `ACCESSING... <span class="case-btn-arrow">⧖</span>`;
            setTimeout(() => { window.location.href = "case.html"; }, 650);
        });
    });
});