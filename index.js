var activePage = "skills";

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

showPage(activePage);

$("#top-menu-bar").addEventListener("click", function (e) {
  var id = e.target.dataset.page;
  console.info("click on menu-bar", id);
  if (id) {
    showPage(id);
  }
});

fetch("skills.json")
  .then(function (response) {
    console.info("done?");
    return response.json();
  })
  .then(function (skills) {
    printSkills(skills);
  });

function printSkills(skills) {
  var skillsMapResult = skills.map(function (skill) {
    var cls = skill.favorite ? "favorite" : "";
    // console.info("inside map %o", cls, skill);
    return `<li class =" ${cls}">${skill.name} <span> - ${skill.endorcements}</span></li>`;
  });
  $("#skills ul").innerHTML = skillsMapResult.join("");
}

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
