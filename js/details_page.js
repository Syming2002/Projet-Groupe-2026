const notes = document.getElementById("notes");
let saveTimeout;

notes.addEventListener("input", () => {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
      localStorage.setItem("note", notes.value);
    });
  },
  1000,
);

window.addEventListener("load", () => {
  const note = localStorage.getItem("note");
  if (note) {
    notes.value = note;
  }
});
