let add = [];
const saveBtn = document.getElementById("save");
const userInput = document.getElementById("input");
const list = document.getElementById("list");
const delBtn = document.getElementById("delete");
const tabBtn = document.getElementById("tab");
const addlocal = JSON.parse(localStorage.getItem("info"));
if (addlocal) {
  add = addlocal;
  renderAll();
  addEventtoSpan();
}
saveBtn.addEventListener("click", function () {
  add.push(userInput.value);
  userInput.value = "";
  localStorage.setItem("info", JSON.stringify(add));
  render();
  addEventtoSpan();
});
tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    add.push(tabs[0].url);
    localStorage.setItem("info", JSON.stringify(add));
    render();
    addEventtoSpan();
  });
});
delBtn.addEventListener("click", function () {
  localStorage.clear();
  add = [];
  list.innerHTML = "";
});
function render() {
  let listItem = document.createElement("li");
  listItem.classList.add("animate__animated", "animate__lightSpeedInLeft");
  listItem.innerHTML = `
    <a href='${add[add.length - 1]}' target="_blank">
    ${add[add.length - 1]}
    </a>
    <span class="material-icons-outlined md">delete</span>
     `;
  list.append(listItem);
}
function renderAll() {
  for (let i = 0; i < add.length; i++) {
    list.innerHTML += `
    <li>
    <a href='${add[i]}' target="_blank">${add[i]}</a>
    <span class="material-icons-outlined md" >delete</span>
    </li>
     `;
  }
}
function addEventtoSpan() {
  for (let i = 0; i < add.length; i++) {
    document
      .getElementsByTagName("span")
      [i].addEventListener("click", deleteItem);
  }
}
function deleteItem(event) {
  const parent = event.target.parentNode;
  const child = parent.firstElementChild.innerText;
  // parent.innerHTML = `
  // <li><a><del> ${child}</del></a>
  // </li>
  // `;
  parent.className = "animate__animated animate__backOutRight";
  const index = add.indexOf(child);
  add.splice(index, 1);
  localStorage.setItem("info", JSON.stringify(add));
  setTimeout(finalRemove, 800, parent);
}
function finalRemove(toRemove) {
  toRemove.remove();
}
