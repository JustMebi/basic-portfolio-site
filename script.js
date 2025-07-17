// === INDEX.HTML ===
//Button to display message when clicked✔️
const btn = document.getElementById("welcomeBtn");
const message = document.getElementById("messageDisplay");
if (btn && message) {
  let isClicked = false;
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (!isClicked) {
      message.textContent = "Welcome to my portfolio!";
      message.style.color = "#6d1b22";
      message.style.fontWeight = "600";
      btn.textContent = "Remove Message";
    } else {
      message.textContent = "";
      btn.textContent = "Warm Welcome";
    }
    isClicked = !isClicked;
  });
}

//Heading to change color on hover✔️
const heading = document.getElementById("mainHeading");
if (heading) {
  heading.addEventListener("mouseenter", function () {
    heading.style.color = "#2A454E";
  });

  heading.addEventListener("mouseleave", function () {
    heading.style.color = "";
  });
}

// === ABOUT.HTML ===
//List Background change on hover ✔️
const listItems = document.querySelectorAll(".hover-item");
if (listItems.length > 0) {
  listItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.color = "#ffffff";
      item.style.backgroundColor = "#2A454E";
    });

    item.addEventListener("mouseleave", () => {
      item.style.backgroundColor = "";
      item.style.color = "";
    });
  });
}

//Image changes size on click ✔️
const profileImg = document.getElementById("profileImg");
if (profileImg) {
  let isLarge = false;
  profileImg.addEventListener("click", () => {
    profileImg.style.width = isLarge ? "200px" : "300px";
    profileImg.style.height = isLarge ? "200px" : "300px";
    isLarge = !isLarge;
  });
}

//Console log when hobbies section is clicke ✔️
const hobbiesSection = document.getElementById("hobbiesSection");
if (hobbiesSection) {
  hobbiesSection.addEventListener("click", () => {
    console.log("Hobbies section was clicked!");
  });
}

// === PRODUCT.HTML ===
//Display message when video is played and remove when paused ✔️
const video = document.getElementById("promoVideo");
const videoMsg = document.getElementById("videoMessage");
if (video && videoMsg) {
  video.addEventListener("play", () => {
    videoMsg.style.display = "block";
  });
  video.addEventListener("pause", () => {
    videoMsg.style.display = "none";
  });
}

//Background change on table rows on hover ✔️
const rows = document.querySelectorAll(".hover-row");
if (rows.length > 0) {
  rows.forEach((row) => {
    row.addEventListener("mouseover", () => {
      row.style.backgroundColor = "#f1dbbfff";
    });
    row.addEventListener("mouseout", () => {
      row.style.backgroundColor = "";
    });
  });
}

// === CONTACT.HTML ===
//Thank you message when submitted, error if else ✔️
const form = document.getElementById("contactForm");
const messageDisplay = document.getElementById("formMessage");

if (form && messageDisplay) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    if (name && email && phone && message) {
      messageDisplay.textContent =
        "Thank you for reaching out! I'll get back to you shortly.";
      messageDisplay.style.color = "green";
      form.reset();
    } else {
      messageDisplay.textContent =
        "Please fill out all fields before submitting.";
      messageDisplay.style.color = "red";
    }
  });

  const fields = form.querySelectorAll("input, textarea");
  fields.forEach((field) => {
    field.addEventListener("focus", () => {
      field.style.backgroundColor = "#fff8f5";
    });
    field.addEventListener("blur", () => {
      field.style.backgroundColor = "";
    });
  });
}
