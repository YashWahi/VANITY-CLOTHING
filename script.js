// LOGIN MODAL
const userBtn = document.getElementById("userBtn");
const modal = document.getElementById("loginModal");
const closeModal = document.querySelector(".close-modal");

userBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// TABS (Login / Sign Up)
const tabs = document.querySelectorAll(".auth-tab");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        if (tab.dataset.tab === "login") {
            loginForm.style.display = "block";
            signupForm.style.display = "none";
        } else {
            loginForm.style.display = "none";
            signupForm.style.display = "block";
        }
    });
});

// SMOOTH SCROLL FOR NAV LINKS
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        const target = this.getAttribute('href');
        if (target.startsWith("#")) {
            e.preventDefault();
            document.querySelector(target).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// OPTIONAL: Animation on Quick View Button Hover
document.querySelectorAll('.quick-view-btn').forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "translateY(-3px)";
        btn.style.transition = "transform 0.3s ease";
    });
    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translateY(0)";
    });
});
