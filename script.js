const featuresButton = document.querySelector(`.features-button`);
const companyButton = document.querySelector(`.company-button`);
const features = document.querySelector(`.features`);
const company = document.querySelector(`.company`);

const svgDown = document.querySelector(`.svgToggleDown`);
const svgUp = document.querySelector(`.svgToggleUp`);

const svgDown1 = document.querySelector(`.svgToggleDown1`);
const svgUp1 = document.querySelector(`.svgToggleUp1`);

featuresButton.addEventListener(`click`, function () {
  features.classList.toggle(`hidedropdown`);
});

companyButton.addEventListener(`click`, function () {
  company.classList.toggle(`hidedropdown`);
});

featuresButton.addEventListener(`click`, function () {
  if (svgUp.classList.contains(`svgArrowUp`)) {
    svgDown.classList.add(`svgArrowDown`);
    svgUp.classList.remove(`svgArrowUp`);
  } else {
    svgDown.classList.remove(`svgArrowDown`);
    svgUp.classList.add(`svgArrowUp`);
  }
});

companyButton.addEventListener(`click`, function () {
  if (svgUp1.classList.contains(`svgArrowUp1`)) {
    svgDown1.classList.add(`svgArrowDown1`);
    svgUp1.classList.remove(`svgArrowUp1`);
  } else {
    svgDown1.classList.remove(`svgArrowDown1`);
    svgUp1.classList.add(`svgArrowUp1`);
  }
});

// hamburger + overlay + dropdown

const hamburgerButton = document.querySelector(`#hamburgerButton`);
const overlay = document.getElementById(`overlay`);
const sidePanel = document.querySelector(`.sidepanel`);

hamburgerButton.addEventListener(`click`, function () {
  // Hamburger button animation
  hamburgerButton.classList.toggle(`open`);
  // Overlay
  overlay.classList.toggle(`overlayDisplayNone`);
  // SidePanel
  sidePanel.classList.toggle(`sidePanelDisplayNone`);
});

// Dropdown

// Features dropdown variables
const sideButtonDrop = document.querySelector(`.sideButtonDrop`);
const sideButtonDrop1 = document.querySelector(`.sideButtonDrop1`);

const sideUp = document.querySelector(`.sideUp`);
const sideDown = document.querySelector(`.sideDown`);

// Company dropdown variables
const sideUp1 = document.querySelector(`.sideUp1`);
const sideDown1 = document.querySelector(`.sideDown1`);

// Mouseover + mouseout events
const featuresContentSelect = document.querySelector(
  `.sidePanelFeatures-content`
);

const companyContentSelect = document.querySelector(
  `.sidePanelCompany-content`
);

// Features button

sideButtonDrop.addEventListener(`mouseover`, function () {
  sideDown.classList.add(`sidePanelDropdown-Hidden`);
  sideUp.classList.remove(`sidePanelDropdown-Hidden`);
  featuresContentSelect.classList.remove(`sidePanel-Features-Hidden`);
});

sideButtonDrop.addEventListener(`mouseout`, function () {
  sideUp.classList.add(`sidePanelDropdown-Hidden`);
  sideDown.classList.remove(`sidePanelDropdown-Hidden`);
  featuresContentSelect.classList.add(`sidePanel-Features-Hidden`);
});

// Company button

sideButtonDrop1.addEventListener(`mouseover`, function () {
  sideDown1.classList.add(`sidePanelDropdown-Hidden1`);
  sideUp1.classList.remove(`sidePanelDropdown-Hidden1`);
  companyContentSelect.classList.remove(`sidePanel-Company-Hidden`);
});

sideButtonDrop1.addEventListener(`mouseout`, function () {
  sideUp1.classList.add(`sidePanelDropdown-Hidden1`);
  sideDown1.classList.remove(`sidePanelDropdown-Hidden1`);
  companyContentSelect.classList.add(`sidePanel-Company-Hidden`);
});

// ----------------------------------
