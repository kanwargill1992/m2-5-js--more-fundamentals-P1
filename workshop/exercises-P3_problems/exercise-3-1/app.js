// Exercise 3-1
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement

const buttonList = document.getElementById("btn-list");

const onClick = (e) => {
  const buttonId = e.target.id;
  const buttonId1 = document.getElementById(buttonId);
  switch (buttonId) {
    case "btn-1":
      buttonId1.style.opacity = 0;
      break;
    case "btn-2":
      buttonId1.style.background = "red";
      break;
    case "btn-3":
      buttonId1.style.background = "yellow";
      break;
    case "btn-4":
      buttonId1.classList.add("jitters");
    default:
      break;
  }
};

buttonList.addEventListener("click", onClick);
