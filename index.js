let activePage = "home";

function $(selector) {
  return document.querySelector(selector);
}
function hide(id) {
  $("#" + id).style.display = "none";
}

function show(id) {
  $(`#${id}`).style.display = "block";
}

function showPage(id) {
  hide(activePage);
  $(`#top-menu-bar a[data-page="${activePage}"]`).classList.remove("active");
  show(id);
  $(`#top-menu-bar a[data-page="${id}"]`).classList.add("active");
  activePage = id;
}

function initEvents() {
  $("#top-menu-bar").addEventListener("click", (e) => {
    const id = e.target.dataset.page;
    console.info("click on menu-bar", id);
    if (id) {
      showPage(id);
    }
  });
}

function loadSkills() {
  fetch("skills.json")
    .then((response) => response.json())
    .then((skills) => {
      printSkills(skills);
    });
}

function printSkills(skills) {
  skills = sortSkillsByEndorcements(skills);
  const skillsMapResult = skills.map((skill) => {
    const cls = skill.favorite ? "favorite" : "";
    // console.info("inside map %o", cls, skill);
    return `<li class =" ${cls}">${skill.name} <span> - ${skill.endorcements}</span></li>`;
  });
  $("#skills ul").innerHTML = skillsMapResult.join("");
}

function sortSkillsByEndorcements(skills) {
  return skills.sort((a, b) => b.endorcements - a.endorcements);
}
function sortSkillsByName(skills) {
  return skills.sort((a, b) => a.name.localeCompare(b.name));
}

showPage(activePage);
initEvents();
loadSkills();

// function showHomePage() {
//   hide(activePage);
//   show("home");
//   activePage = "home";
// }

// function showSkillsPage() {
//   hide(activePage);
//   show("skills");
//   activePage = "skills";
// }
// function showProjectsPage() {
//   hide(activePage);
//   show("projects");
//   activePage = "projects";
// }

// function showLanguagesPage() {
//   hide(activePage);
//   show("languages");
//   activePage = "languages";
// }

// showSkillsPage();
// var homeLink = document.querySelectorAll("#top-menu-bar a")[0];
// homeLink.addEventListener("click", showHomePage);

// var skillsLink = document.querySelectorAll("#top-menu-bar a")[1];
// skillsLink.addEventListener("click", showSkillsPage);

// var projectsLink = document.querySelectorAll("#top-menu-bar a")[2];
// projectsLink.addEventListener("click", showProjectsPage);

// var languagesLink = document.querySelectorAll("#top-menu-bar a")[3];
// languagesLink.addEventListener("click", showLanguagesPage);
