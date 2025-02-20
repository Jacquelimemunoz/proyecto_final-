function loadJobData() {
    fetch("data/jobs.json")
        .then(response => response.json())
        .then(data => {
            console.log("Trabajos disponibles:", data);
        })
        .catch(error => console.error("Error al cargar datos:", error));
}