import { validateForm } from "./validation.js";
import { saveFormData, showUsers } from "./dataHandler.js";
import { loadJobData } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".nextBtn");
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (validateForm()) {
            saveFormData();
            showUsers();
            loadJobData();
        }
    });
});

