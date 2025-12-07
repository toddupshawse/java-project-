// ------------------------------
// Modal Setup
// ------------------------------
const modal = document.getElementById("welcomeModal");
const closeModalBtn = document.getElementById("closeModal");

// Close modal on button click
closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});

// ------------------------------
// Tooltip is already handled via CSS
// ------------------------------



// ------------------------------
// Dark Mode: Load Saved Preference
// ------------------------------
const darkToggle = document.getElementById("darkToggle");

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkToggle.checked = true;
}

// Save preference on toggle
darkToggle.addEventListener("change", () => {
    if (darkToggle.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled");
    }
});

// ------------------------------
// Contact Form Timing Interaction
// ------------------------------
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page reload

    status.textContent = "Sending message...";
    
    setTimeout(() => {
        status.textContent = "Message sent successfully!";
    }, 2500); // 2.5 second delay
});
