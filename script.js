const left = document.querySelector(".left");
const right = document.querySelector(".right");
const data = document.querySelector("input");
const clearButton = document.querySelector('#clear-all')


clearButton.addEventListener('click',clearAll);

// remove all the paragraphs
function clearAll(){
  while(left.firstChild){
    left.removeChild(left.firstChild)
  }
  while(right.firstChild){
    right.removeChild(right.firstChild)
  }
}

// Adding 'Enter' key as a trigger to the input field
document.querySelector("input").addEventListener("keypress", function (event) {
  if (event.key === "Enter" && data.value != "") {
    createElement(data.value);
   
  }
});
document.getElementById("add-button").addEventListener("click", function () {
  if (data.value != "") {
    createElement(data.value);
  }
});

//Creating elements and adding them to the left container
function createElement(inputText) {
  data.value ='' // Reset the text field
  const div = document.createElement("div");
  div.setAttribute("draggable", "true");
  div.setAttribute("class", "p");

  const p = document.createElement("p");
  p.innerText = inputText;

  const btn_1 = document.createElement("button");
  btn_1.innerText = "✏️";
  btn_1.setAttribute("id", "edit");
  btn_1.setAttribute("class", "invisible");

  const btn_2 = document.createElement("button");
  btn_2.innerText = "X";
  btn_2.setAttribute("id", "edit");
  btn_2.setAttribute("class", "invisible");

  div.appendChild(p);
  div.appendChild(btn_1);
  div.appendChild(btn_2);

  div.addEventListener("mouseleave", function () {
    btn_1.classList.add("invisible");
    btn_2.classList.add("invisible");
  });

  div.addEventListener("mouseenter", function () {
    btn_1.classList.remove("invisible");
    btn_2.classList.remove("invisible");
  });

  left.appendChild(div);

  btn_2.addEventListener("click", removeElement);
  btn_1.addEventListener("click", editText);
  // draggableFunctionality(div);
}

function removeElement() {
  this.parentNode.remove();
}

function editText() {
  const doneButton = document.createElement("button");
  doneButton.innerText = "✔️";
  doneButton.classList.add("edit");
  this.parentNode.insertBefore(doneButton, this);

  this.parentNode.firstChild.setAttribute("contenteditable", "true");
  this.parentNode.firstChild.focus();

  doneButton.addEventListener("click", function () {
    this.previousSibling.removeAttribute("contenteditable");
    this.remove();
  });
}

function useLocalStorage(dataField){
  
}
// IIFE

(function draggableFunctionality() {
  let selected = null;

  left.addEventListener("dragstart", function (e) {
    selected = e.target;
  });
  left.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  left.addEventListener("drop", function () {
    if (selected !== null) {
      left.appendChild(selected);
      selected = null;
    }
    console.log("Dropped event launched");
  });

  right.addEventListener("dragstart", function (e) {
    selected = e.target;
  });
  right.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  right.addEventListener("drop", function () {
    if (selected !== null) {
      right.appendChild(selected);
      selected = null;
    }
  });
})();

// NOTE: Using the below👇️👇️ function is not a good approach because running it everytime when a element is created is not a good approach because it makes the code redundant.

// function draggableFunctionality(div) {
//     let selected = null;

//     div.addEventListener("dragstart", function (e) {
//       selected = e.target;
//     });

//     right.addEventListener("dragover", function (e) {
//       e.preventDefault();
//     });

//     right.addEventListener("drop", function () {
//       if (selected !== null) {
//         right.appendChild(selected);
//         selected = null;
//       }
//     });

//     left.addEventListener("dragover", function (e) {
//       e.preventDefault();
//     });

//     left.addEventListener("drop", function () {
//       if (selected !== null) {
//         left.appendChild(selected);
//         selected = null;
//       }
//     });
//   }

/* 

// FIXME: Below function is taken from someone else but it has some bugs do not use it, first use chatgpt for finding the issue


function draggableFunctionality(div) {

  div.addEventListener("dragstart", function (e) {
    let selected = e.target;

    right.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    right.addEventListener("drop", function () {
      right.appendChild(selected);
      selected = null;
    });
    left.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    left.addEventListener("drop", function () {
      if (selected != null) {
        left.appendChild(selected);
      }
      selected = null;
    });
  });
}
 */
