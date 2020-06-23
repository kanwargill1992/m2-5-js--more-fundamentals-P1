// Exercise 3-2
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referenceable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

const button = document.querySelector("#btn-list");
// select each id to assign color:gold
for (id = 1; id < 5; id++) {
  const buttonId2 = document.getElementById(`btn-${id}`);
  buttonId2.style.opacity = 100;
  buttonId2.style.backgroundColor = "gold";
}
// to toggle between colors using ternary operator
const toggle = (id, color) => {
  const buttonId1 = document.getElementById(id);
  const buttonColor = buttonId1.style.backgroundColor;
  buttonId1.style.backgroundColor = buttonColor === "gold" ? color : "gold";
};

const onClick = (e) => {
  const buttonId = e.target.id;
  const buttonId1 = document.getElementById(buttonId);
  switch (buttonId) {
    case "btn-1":
      buttonId1.style.opacity = buttonId1.style.opacity === "100" ? "0" : "100";
      break;
    case "btn-2":
      toggle(buttonId, "crimson");
      break;
    case "btn-3":
      toggle(buttonId, "lightblue");
      break;
    case "btn-4":
      buttonId1.classList.toggle("jitters");
      break;
    default:
      break;
  }
};

button.addEventListener("click", onClick);
