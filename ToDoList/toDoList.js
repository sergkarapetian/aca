let header = document.getElementById("header");

let input = document.createElement("input");
input.classList.add("input");
header.append(input);

let reset = document.createElement("input");
reset.setAttribute("type", "reset");

let submit = document.createElement("input");
submit.setAttribute("type", "submit");
submit.classList.add("submit");
header.append(submit);
submit.disabled = true;

let mainDiv = document.getElementById("mainDiv");
let table = document.createElement("table");

input.addEventListener("input", () => {
  if (input.value.trim().length > 0) {
    submit.disabled = false;
    submit.style.display = "block"
    submit.addEventListener("click", () => {
      if (input.value.length > 0 || input.value !== "") {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let remove = document.createElement("button");
        let edit = document.createElement("button");

        remove.innerText = "Remove";
        edit.innerText = "Edit";

        remove.classList.toggle("remove");
        edit.classList.toggle("edit");
        edit.classList.toggle("accept");

        td.innerText = input.value;
        tr.append(td, remove, edit);
        table.append(tr);
        mainDiv.append(table);
        input.value = "";
        submit.disabled = true;
        submit.style.display = "none"

        remove.addEventListener("click", () => {
          remove.parentElement.remove();
        });

        edit.addEventListener("click", () => {
          edit.innerText = "Accept";
          td.setAttribute("contenteditable", "true");

          edit.addEventListener("click", () => {
            td.setAttribute("contenteditable", "false");
            edit.innerText = "Edit";
          });
        });
      }
    });
  } else {
    submit.disabled = true;
    submit.style.display = "none"
  }
});
