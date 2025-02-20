function validateForm() {
    const email = document.querySelector('input[placeholder="Enter your email"]').value;
    if (!email.includes("@")) {
        alert("Ingrese un email válido.");
        return false;
    }
    saveFormData();
}