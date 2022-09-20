const notesEl = document.querySelector(".notes");
const addBtn = document.querySelector('[data-action="add-note"]');
const title = document.querySelector(".js-input-title");
const content = document.querySelector(".js-input-content");
const createBtn = document.querySelector(".js-create");

function createNote(title, noteDate, categoryName, content) {
  const noteEl = document.createElement("li");
  noteEl.classList.add("note");
  noteEl.innerHTML = `<div id="list-${categoryName}" class="name-wrapper">
      <div class="icon-wrapper">
        <img id="${categoryName}-icon" class="notes-icon" alt="icon" src="./images/tick.png"/>
      </div>
      <div id="note-title">${title}</div>
      <textarea id="note-title-input" class="hidden title-textarea">
${title}</textarea
      >
    </div>
    <div class="date">${noteDate}</div>
<div class="category-title js-category-title">${categoryName}</div>
    <select class="js-dropdown-input dropdown-input hidden">
      <option value="Task">Task</option>
      <option value="Random Thought">Random Thought</option>
      <option value="Idea">Idea</option>
      <option value="Quote">Quote</option>
    </select>

    <div id="note-text" class="content">${content}</div>
    <textarea id="note-textarea" class="hidden content-textarea">${content}</textarea>
    <div class="notes-list-icons">
      <img
        id="edit"
        class="notes-list-icon js-edit"
        src="./images/pen.png"
        alt="pen"
      />
      <img
        id="archive"
        class="notes-list-icon archive"
        src="./images/archieve-icon-two.png"
        alt="archive"
      />
      <img
        class="notes-list-icon js-remove"
        src="./images/bin-two.png"
        alt="bin"
      />
    </div>`;

  const editBtn = noteEl.querySelector(".js-edit");
  const deleteBtn = noteEl.querySelector(".js-remove");
  const titleEl = noteEl.querySelector("#note-title");
  const titleInputEl = noteEl.querySelector("#note-title-input");
  const textInputEl = noteEl.querySelector("#note-textarea");
  const textEl = noteEl.querySelector("#note-text");
  const categoryInputEl = noteEl.querySelector(".js-dropdown-input");
  const categoryEl = noteEl.querySelector(".js-category-title");
  const archiveBtn = noteEl.querySelector(".archive");

  function setSrc() {
    let iconEl = noteEl.querySelector(".notes-icon");

    if (categoryEl.innerText === "Quote") {
      iconEl.setAttribute("src", "./images/quotes.png");
    } else if (categoryEl.innerText === "Task") {
      iconEl.setAttribute("src", "./images/shopping.png");
    } else if (categoryEl.innerText === "Random Thought") {
      iconEl.setAttribute("src", "./images/head.png");
    } else if (categoryEl.innerText === "Idea") {
      iconEl.setAttribute("src", "./images/idea.png");
    }

    return;
  }

  editBtn.addEventListener("click", (e) => {
    titleEl.classList.toggle("hidden");
    textEl.classList.toggle("hidden");

    titleInputEl.classList.toggle("hidden");
    textInputEl.classList.toggle("hidden");

    categoryInputEl.classList.toggle("hidden");
    categoryEl.classList.toggle("hidden");

    if (categoryEl.innerText === "Task") {
      const activeElements = document.getElementById("Task-active");
      activeElements.innerText = Number(activeElements.innerText) + 1;
    } else if (categoryEl.innerText === "Random Thought") {
      const activeElements = document.getElementById("Random Thought-active");
      activeElements.innerText = Number(activeElements.innerText) + 1;
    } else if (categoryEl.innerText === "Idea") {
      const activeElements = document.getElementById("Idea-active");
      activeElements.innerText = Number(activeElements.innerText) + 1;
    } else if (categoryEl.innerText === "Quote") {
      const activeElements = document.getElementById("Quote-active");
      activeElements.innerText = Number(activeElements.innerText) + 1;
    }
  });

  deleteBtn.addEventListener("click", (e) => {
    noteEl.remove();
  });

  titleInputEl.addEventListener("input", (e) => {
    titleEl.innerText = e.target.value;
  });

  textInputEl.addEventListener("input", (e) => {
    textEl.innerText = e.target.value;
  });

  categoryInputEl.addEventListener("input", (e) => {
    categoryEl.innerText = e.target.value;
    setSrc();
  });

  archiveBtn.addEventListener("click", (e) => {
    noteEl.remove();
    if (categoryEl.innerText === "Task") {
      const elementToArchive = document.getElementById("id-Task");
      elementToArchive.innerText = Number(elementToArchive.innerText) + 1;
      const activeElements = document.getElementById("Task-active");
      activeElements.innerText = Number(activeElements.innerText) - 1;
    } else if (categoryEl.innerText === "Random Thought") {
      const elementToArchive = document.getElementById("id-Random Thought");
      elementToArchive.innerText = Number(elementToArchive.innerText) + 1;
      const activeElements = document.getElementById("Random Thought-active");
      activeElements.innerText = Number(activeElements.innerText) - 1;
    } else if (categoryEl.innerText === "Idea") {
      const elementToArchive = document.getElementById("id-Idea");
      elementToArchive.innerText = Number(elementToArchive.innerText) + 1;
      const activeElements = document.getElementById("Idea-active");
      activeElements.innerText = Number(activeElements.innerText) - 1;
    } else if (categoryEl.innerText === "Quote") {
      const elementToArchive = document.getElementById("id-Quote");
      elementToArchive.innerText = Number(elementToArchive.innerText) + 1;
      const activeElements = document.getElementById("Quote-active");
      activeElements.innerText = Number(activeElements.innerText) - 1;
    }
    return;
  });

  return noteEl;
}

createBtn.addEventListener("click", (e) => {
  let noteDate = new Date().toLocaleDateString();
  const el = createNote("Title", noteDate, "Category", "Content", "");
  notesEl.prepend(el);
});
