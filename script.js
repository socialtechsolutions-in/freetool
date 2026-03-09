const menuBtn = document.getElementById("menuBtn");
const mainNav = document.querySelector(".main-nav");

if (menuBtn && mainNav) {
  menuBtn.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

const searchInput = document.getElementById("toolSearch");
const toolCards = document.querySelectorAll("#toolCards .tool-card");

if (searchInput && toolCards.length) {
  searchInput.addEventListener("input", (event) => {
    const term = event.target.value.trim().toLowerCase();
    toolCards.forEach((card) => {
      const name = card.dataset.name.toLowerCase();
      card.style.display = name.includes(term) ? "block" : "none";
    });
  });
}

const byId = (id) => document.getElementById(id);

const wordCounter = () => {
  const input = byId("wcInput");
  const btn = byId("wcBtn");
  const result = byId("wcResult");
  if (!input || !btn || !result) return;

  btn.addEventListener("click", () => {
    const text = input.value.trim();
    const chars = text.length;
    const words = text ? text.split(/\s+/).length : 0;
    const readingTime = Math.max(1, Math.ceil(words / 200));
    result.textContent = `Words: ${words}\nCharacters: ${chars}\nEstimated Reading Time: ${readingTime} min`;
  });
};

const passwordGenerator = () => {
  const length = byId("pwLength");
  const up = byId("pwUpper");
  const num = byId("pwNumber");
  const sym = byId("pwSymbol");
  const btn = byId("pwBtn");
  const result = byId("pwResult");
  if (!length || !btn || !result || !up || !num || !sym) return;

  btn.addEventListener("click", () => {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    if (up.checked) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (num.checked) chars += "0123456789";
    if (sym.checked) chars += "!@#$%^&*()_+-={}[]<>?";

    const size = Math.min(64, Math.max(6, Number(length.value) || 12));
    let out = "";
    for (let i = 0; i < size; i += 1) {
      out += chars[Math.floor(Math.random() * chars.length)];
    }
    result.textContent = out;
  });
};

const usernameGenerator = () => {
  const name = byId("unName");
  const keyword = byId("unKeyword");
  const btn = byId("unBtn");
  const result = byId("unResult");
  if (!name || !keyword || !btn || !result) return;

  btn.addEventListener("click", () => {
    const base = (name.value || "user").toLowerCase().replace(/\s+/g, "");
    const key = (keyword.value || "hub").toLowerCase().replace(/\s+/g, "");
    const n = Math.floor(100 + Math.random() * 900);
    result.textContent = `${base}_${key}${n}`;
  });
};

const instaBioGenerator = () => {
  const niche = byId("igNiche");
  const tone = byId("igTone");
  const btn = byId("igBtn");
  const result = byId("igResult");
  if (!niche || !tone || !btn || !result) return;

  btn.addEventListener("click", () => {
    const n = niche.value || "Creator";
    const t = tone.value || "friendly";
    result.textContent = `${n} | ${t} vibes\nSharing value daily\nDM for collabs`;
  });
};

const resumeBuilder = () => {
  const name = byId("rbName");
  const role = byId("rbRole");
  const skills = byId("rbSkills");
  const exp = byId("rbExp");
  const btn = byId("rbBtn");
  const result = byId("rbResult");
  if (!name || !role || !skills || !exp || !btn || !result) return;

  btn.addEventListener("click", () => {
    result.textContent = `Name: ${name.value || "Your Name"}\nRole: ${role.value || "Professional"}\nSkills: ${skills.value || "Communication, Teamwork"}\nExperience Summary: ${exp.value || "Add your key achievements and responsibilities."}`;
  });
};

const hashtagGenerator = () => {
  const topic = byId("htTopic");
  const count = byId("htCount");
  const btn = byId("htBtn");
  const result = byId("htResult");
  if (!topic || !count || !btn || !result) return;

  btn.addEventListener("click", () => {
    const word = (topic.value || "content").replace(/\s+/g, "");
    const total = Math.min(30, Math.max(5, Number(count.value) || 10));
    const tags = [];
    for (let i = 1; i <= total; i += 1) {
      tags.push(`#${word}${i}`);
    }
    result.textContent = tags.join(" ");
  });
};

const qrGenerator = () => {
  const input = byId("qrInput");
  const btn = byId("qrBtn");
  const result = byId("qrResult");
  if (!input || !btn || !result) return;

  btn.addEventListener("click", () => {
    const value = encodeURIComponent(input.value.trim());
    if (!value) {
      result.textContent = "Enter text or URL first.";
      return;
    }
    result.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${value}" alt="Generated QR Code">`;
  });
};

const randomNumberGenerator = () => {
  const min = byId("rnMin");
  const max = byId("rnMax");
  const btn = byId("rnBtn");
  const result = byId("rnResult");
  if (!min || !max || !btn || !result) return;

  btn.addEventListener("click", () => {
    const low = Number(min.value);
    const high = Number(max.value);
    if (Number.isNaN(low) || Number.isNaN(high) || low > high) {
      result.textContent = "Please enter a valid range.";
      return;
    }
    const num = Math.floor(Math.random() * (high - low + 1)) + low;
    result.textContent = `Random Number: ${num}`;
  });
};

wordCounter();
passwordGenerator();
usernameGenerator();
instaBioGenerator();
resumeBuilder();
hashtagGenerator();
qrGenerator();
randomNumberGenerator();
