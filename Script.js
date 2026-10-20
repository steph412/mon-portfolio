// PORTFOLIO D'EYENGA STEPHANE SERGE

console.log("Portfolio chargé avec succès !");

// Animation des sections au défilement
const sections = document.querySelectorAll(".section");

if ("IntersectionObserver" in window) {
    const observateur = new IntersectionObserver((entrees) => {
        entrees.forEach((entree) => {
            if (entree.isIntersecting) {
                entree.target.classList.add("visible");
                observateur.unobserve(entree.target);
            }
        });
    }, {
        threshold: 0.15
    });

    sections.forEach((section) => {
        observateur.observe(section);
    });
} else {
    sections.forEach((section) => {
        section.classList.add("visible");
    });
}
