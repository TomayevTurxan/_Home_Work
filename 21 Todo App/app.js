let add = document.querySelector(".add");
let tbody = document.querySelector("tbody");
let input = document.querySelector("input");
let error = document.querySelector(".error");
let clearAll = document.querySelector(".clear-all");
let pendTaskText = document.querySelector(".app-clear span");
let count = 0;
add.addEventListener("click", () => {
  console.log(input.value);
  if (input.value.trim() == "") {
    error.classList.toggle("active");
    error.innerHTML = "Input bosdur elave ede bilmersiniz";
  } else {
    tbody.innerHTML += `
        <tr>
            <td>${input.value}</td>
            <td><button class="btn btn-danger remove"><i class="fa-solid fa-trash"></i></button></td>
            <td><button type="button" class="btn btn-outline-success done"><i class="fa-solid fa-check"></i></button></td>
        </tr>
    `;

    let removeButton = document.querySelectorAll(".remove");
    removeButton.forEach((remove) => {
      console.log(remove);
      remove.addEventListener("click", (e) => {
        if (window.confirm("are you sure to delete?")) {
          e.target.closest("tr").remove();
          count--;
          pendTask();
        }
      });
    });

    let doneButton = document.querySelectorAll(".done")
    doneButton.forEach(done => {
        done.addEventListener("click",(e)=>{
            e.target.parentElement.parentElement.parentElement.style.textDecoration = "line-through";
        })
    });

    resetInput();
  }
});

function resetInput() {
  input.value = "";
  pendTask();
}

clearAll.addEventListener("click", (e) => {
  if (tbody.innerHTML.trim() === "") {
    alert("her hansisa bir item yoxdur");
  } else {
    if (window.confirm("are you sure to delete all items?")) {
      tbody.innerHTML = "";
      pendTask();
    }
  }
});

function pendTask() {
  let itemElements = document.querySelectorAll("tbody tr");
  let count = itemElements.length;
  console.log(itemElements);
  if (count > 0) {
    pendTaskText.textContent = `You have ${count} pending task`;
  } else {
    pendTaskText.textContent = "You have not pending tasks";
  }
}
pendTask();
