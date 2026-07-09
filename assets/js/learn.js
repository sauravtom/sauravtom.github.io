(() => {
  const body = document.body;
  const languageButtons = [...document.querySelectorAll("[data-language-choice]")];
  const translatedElements = [...document.querySelectorAll("[data-en][data-hi]")];
  const checklistInputs = [...document.querySelectorAll("[data-check]")];
  const progressCount = document.querySelector("#progress-count");
  const progressBar = document.querySelector("#progress-bar");
  const toast = document.querySelector(".toast");
  const storageKeys = {
    language: "agent-skills-language",
    checklist: "agent-skills-checklist"
  };
  let toastTimer;

  const safeStorage = {
    get(key) {
      try {
        return window.localStorage.getItem(key);
      } catch (_error) {
        return null;
      }
    },
    set(key, value) {
      try {
        window.localStorage.setItem(key, value);
      } catch (_error) {
        // The page remains fully usable when storage is unavailable.
      }
    }
  };

  function showToast(message) {
    if (!toast) return;
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("is-visible");
    toastTimer = window.setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 1800);
  }

  function setLanguage(language, persist = true) {
    const selected = language === "hi" ? "hi" : "en";

    document.documentElement.lang = selected;
    body.dataset.language = selected;
    translatedElements.forEach((element) => {
      element.textContent = element.dataset[selected];
    });
    languageButtons.forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.languageChoice === selected)
      );
    });

    const languageSwitch = document.querySelector(".language-switch");
    if (languageSwitch) {
      languageSwitch.setAttribute(
        "aria-label",
        selected === "hi" ? "भाषा चुनें" : "Choose language"
      );
    }

    document.title = selected === "hi"
      ? "Codex के लिए Agent Skills सीखें — हिन्दी और English"
      : "Learn Agent Skills for Codex — English & Hindi";

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.content = selected === "hi"
        ? "भारतीय developers के लिए Codex Agent Skills समझने, बनाने और test करने की practical bilingual guide।"
        : "A practical bilingual field guide for Indian developers to understand, create, test, and improve Agent Skills for Codex.";
    }

    if (persist) safeStorage.set(storageKeys.language, selected);
  }

  function loadChecklist() {
    let saved = {};
    try {
      saved = JSON.parse(safeStorage.get(storageKeys.checklist) || "{}");
    } catch (_error) {
      saved = {};
    }

    checklistInputs.forEach((input) => {
      input.checked = Boolean(saved[input.dataset.check]);
    });
    updateProgress(false);
  }

  function updateProgress(persist = true) {
    const state = {};
    checklistInputs.forEach((input) => {
      state[input.dataset.check] = input.checked;
    });

    const completed = Object.values(state).filter(Boolean).length;
    const total = checklistInputs.length;
    const percentage = total ? (completed / total) * 100 : 0;

    if (progressCount) progressCount.textContent = `${completed} / ${total}`;
    if (progressBar) progressBar.style.width = `${percentage}%`;
    if (persist) safeStorage.set(storageKeys.checklist, JSON.stringify(state));

    if (completed === total && total > 0) {
      showToast(body.dataset.language === "hi" ? "Skill ship करने के लिए तैयार है!" : "Your skill is ready to ship!");
    }
  }

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.languageChoice);
    });
  });

  checklistInputs.forEach((input) => {
    input.addEventListener("change", () => updateProgress());
  });

  document.querySelectorAll("[data-copy-target]").forEach((button) => {
    button.addEventListener("click", async () => {
      const target = document.getElementById(button.dataset.copyTarget);
      if (!target) return;

      try {
        await copyText(target.textContent.trim());
        showToast(body.dataset.language === "hi" ? "Code copy हो गया" : "Code copied");
      } catch (_error) {
        showToast(body.dataset.language === "hi" ? "Copy नहीं हुआ" : "Could not copy");
      }
    });
  });

  const savedLanguage = safeStorage.get(storageKeys.language);
  const browserLanguage = navigator.language.toLowerCase().startsWith("hi") ? "hi" : "en";
  setLanguage(savedLanguage || browserLanguage, false);
  loadChecklist();
})();
