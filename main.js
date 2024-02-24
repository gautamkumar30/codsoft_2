window.addEventListener("scroll", () => {
  const header = document.getElementById("home");
  const about = document.getElementById("about");
  const skills = document.getElementById("skills");
  const projects = document.getElementById("projects");
  const contact = document.getElementById("contact");

  const link_home = document.getElementById("link-home");
  const link_about = document.getElementById("link-about");
  const link_skills = document.getElementById("link-skills");
  const link_projects = document.getElementById("link-projects");
  const link_contact = document.getElementById("link-contact");

  function removeCurrentView() {
    const links = [
      link_home,
      link_about,
      link_skills,
      link_projects,
      link_contact,
    ];

    links.forEach((link) => {
      link.style.backgroundColor = "transparent";
      link.style.color = "white";
    });
  }

  function setCurrentView(link) {
    link.style.backgroundColor = "white";
    link.style.color = "#5099f4";
    link.style.borderRadius = "10px";
  }

  if (window.scrollY > 0) {
    removeCurrentView();
    setCurrentView(link_home);
  }
  if (window.scrollY > header.scrollHeight) {
    removeCurrentView();
    setCurrentView(link_about);
  }
  if (window.scrollY > header.scrollHeight + about.scrollHeight) {
    removeCurrentView();
    setCurrentView(link_skills);
  }
  if (
    window.scrollY >
    header.scrollHeight + about.scrollHeight + skills.scrollHeight
  ) {
    removeCurrentView();
    setCurrentView(link_projects);
  }
  if (
    window.scrollY >
    header.scrollHeight +
      about.scrollHeight +
      skills.scrollHeight +
      projects.scrollHeight
  ) {
    removeCurrentView();
    setCurrentView(link_contact);
  }
  if (
    window.scrollY >
    header.scrollHeight +
      about.scrollHeight +
      skills.scrollHeight +
      projects.scrollHeight +
      contact.scrollHeight
  ) {
    removeCurrentView();
  }
});
