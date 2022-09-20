import data from "./../data/notes.js";

const handleDelete = (e) => {
  const el = e.currentTarget.getAttribute("name");
  const itemToRemove = document.getElementById(`list-${el}`);
  itemToRemove.remove();
};

const handleArchive = (e) => {
  const el = e.currentTarget.getAttribute("name");
  const itemToArchive = document.getElementById(`list-${el}`);
  const categoryEl = itemToArchive.querySelector(".js-category-title");
  itemToArchive.remove();
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
};

const handleEdit = (e) => {
  const el = e.currentTarget.getAttribute("name");
  const itemToEdit = document.getElementById(`list-${el}`);
  const titleEl = itemToEdit.querySelector("#note-title");
  const textEl = itemToEdit.querySelector("#note-text");
  const titleInputEl = itemToEdit.querySelector("#note-title-input");
  const textInputEl = itemToEdit.querySelector("#note-textarea");
  const categoryInputEl = itemToEdit.querySelector(".js-dropdown-input");
  const categoryEl = itemToEdit.querySelector(".js-category-title");

  function setSrc() {
    let iconEl = itemToEdit.querySelector(".notes-icon");

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

  titleEl.classList.toggle("hidden");
  textEl.classList.toggle("hidden");

  titleInputEl.classList.toggle("hidden");
  textInputEl.classList.toggle("hidden");

  categoryInputEl.classList.toggle("hidden");
  categoryEl.classList.toggle("hidden");

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
};

const makeNoteMarkup = ({ type, name, date, category, content }) => {
  const note = `<li class="note js-note" id="list-${name}">
                <div class="name-wrapper">
                  <div class="icon-wrapper">
                    <img
                      class="notes-icon"
                      src=${type}
                      alt="icon"
                    />
                  </div>
                  <div id="note-title">${name}</div>
                   <textarea id="note-title-input" class="hidden title-textarea">${name}</textarea>
                </div>
                <div class="date">${date}</div>
                <div class="category js-category-title"">${category}</div>
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
                    name="${name}"
                  />
                  <img
                  id="archive"
                    class="notes-list-icon archive"
                    src="./images/archieve-icon-two.png"
                    alt="archive"
                    name="${name}"
                  />
                  <img
                  id="remove js-remove"
                    class="notes-list-icon js-remove"
                    src="./images/bin-two.png"
                    alt="bin"
                    name="${name}"
                    
                  />
                </div>
              </li>`;

  return note;
};

const listEl = document.querySelector(".js-notes-list");

const makeNotesList = data.map(makeNoteMarkup).join("");
listEl.insertAdjacentHTML("beforeend", makeNotesList);

var elements = document.getElementsByClassName("js-remove");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", handleDelete, false);
}

var elements2 = document.getElementsByClassName("archive");
for (var i = 0; i < elements.length; i++) {
  elements2[i].addEventListener("click", handleArchive, false);
}

var elements3 = document.getElementsByClassName("js-edit");
for (var i = 0; i < elements.length; i++) {
  elements3[i].addEventListener("click", handleEdit, false);
}
