// Exercise 3-3
// ----------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// HINT:
// to remove the 'jitters' class, check the length of the classList.

const button = document.getElementById("btn-list");

const resetOn = () => {
  for (let id = 1; id < 5; id++) {
    const buttonId = document.getElementById(`btn-${id}`);
    buttonId.style.opacity = 100;
    buttonId.style.backgroundColor = "gold";

    if (id === 4 && buttonId.classList.length > 0) {
      buttonId.classList.remove("jitters");
    }
  }
};

resetOn();

const toggle = (id, color) => {
  const buttonId1 = document.getElementById(id);
  const buttoncolor = buttonId1.style.backgroundColor;
  buttonId1.style.backgroundColor = buttoncolor === "gold" ? color : "gold";
};

const onClick = (e) => {
  const buttonId = e.target.id;
  const buttonId1 = document.getElementById(buttonId);
  switch (buttonId) {
    case "btn-1":
      buttonId1.style.opacity = buttonId1.style.opacity === "100" ? "0" : "100";
      break;
    case "btn-2":
      toggle(buttonId, "red");
      break;
    case "btn-3":
      toggle(buttonId, "lightblue");
      break;
    case "btn-4":
      buttonId1.classList.add("jitters");
      break;
    case "reset":
      resetOn();
      break;
    default:
      break;
  }
};

button.addEventListener("click", onClick);
