document.addEventListener('DOMContentLoaded', () => {
    const ratingButtons = document.querySelectorAll('.rating-btn');
    const submitButton = document.getElementById('submit-btn');
    let selectedRating = null;

    ratingButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Désélectionner tous les boutons
            ratingButtons.forEach(btn => btn.classList.remove('selected'));
            // Sélectionner le bouton cliqué
            button.classList.add('selected');
            selectedRating = button.dataset.value;
        });
    });

    submitButton.addEventListener('click', () => {
        if (selectedRating) {
            // Rediriger vers la page de remerciement avec la note sélectionnée
            window.location.href = `/thx.html`;
        } else {
            alert('Veuillez sélectionner une note avant d\'envoyer.');
        }
    });
});
