// -----------------------------
// Project Objects (3 Required)
// -----------------------------
const projects = [
    {
        title: "Weather App",
        summary: "A JavaScript weather application that fetches real-time weather data using an API.",
        image: "https://cdn-icons-png.flaticon.com/512/1163/1163624.png",
        repo: "https://github.com/DesertEagle/weather-app"
    },
    {
        title: "Task Manager",
        summary: "A fully interactive to-do list application with local storage support.",
        image: "https://cdn-icons-png.flaticon.com/512/906/906334.png",
        repo: "https://github.com/DesertEagle/task-manager"
    },
    {
        title: "Portfolio Website",
        summary: "My personal portfolio built with HTML, CSS, and JavaScript with dynamic project loading.",
        image: "https://cdn-icons-png.flaticon.com/512/1828/1828506.png",
        repo: "https://github.com/DesertEagle/portfolio"
    }
];

// ----------------------------------------------------------
// Store projects in sessionStorage ONLY if not already stored
// ----------------------------------------------------------

if (!sessionStorage.getItem("portfolioData")) {
    sessionStorage.setItem("portfolioData", JSON.stringify(projects));
}

// Retrieve and parse the stored project data
const storedProjects = JSON.parse(sessionStorage.getItem("portfolioData"));


// ----------------------------------------------------------
// Render Projects Dynamically Into the Page
// ----------------------------------------------------------

const container = document.getElementById("projectContainer");

storedProjects.forEach(project => {
    // Create card container
    const card = document.createElement("div");
    card.classList.add("project-card");

    // Create title
    const title = document.createElement("h3");
    title.textContent = project.title;

    // Create summary
    const summary = document.createElement("p");
    summary.textContent = project.summary;

    // Create image/icon
    const img = document.createElement("img");
    img.src = project.image;

    // Create link
    const link = document.createElement("a");
    link.href = project.repo;
    link.target = "_blank";
    link.textContent = "View Repository";

    // Append elements
    card.appendChild(title);
    card.appendChild(summary);
    card.appendChild(img);
    card.appendChild(link);

    container.appendChild(card);
});


// ----------------------------------------------------------
// Additional: Dynamic Skills List (Required for Rubric)
// ----------------------------------------------------------

const skills = ["JavaScript", "HTML", "CSS", "Git", "API Integration"];

const skillList = document.createElement("ul");

skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillList.appendChild(li);
});

document.body.appendChild(skillList);
