const confirmInput = document.getElementById("confirm");
const passwordInput = document.getElementById("password");

const checkImg = document.createElement("img");
checkImg.src =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=";
checkImg.className = "check-icon";

const errorImg = document.createElement("img");
errorImg.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXgiPjxwYXRoIGQ9Ik0xOCA2IDYgMTgiLz48cGF0aCBkPSJtNiA2IDEyIDEyIi8+PC9zdmc+"
errorImg.className = "check-icon";

// Fonction pour effacer les anciennes icônes
const clearIcons = () => {
  const container = document.getElementById('check-icon-container');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

// Ajouter l'événement sur le champ de confirmation
confirmInput.addEventListener("input", () => {
  // Effacer les anciennes icônes avant d'ajouter une nouvelle
  clearIcons();

  // Comparer les deux champs
  if (passwordInput.value === confirmInput.value && confirmInput.value !== "") {
    // Afficher l'icône de validation
    document.getElementById("check-icon-container").appendChild(checkImg);
    console.log("Les mots de passe correspondent");
  } else {
    // Afficher l'icône d'erreur
    document.getElementById("check-icon-container").appendChild(errorImg);
    console.log("Les mots de passe ne correspondent pas");
  }
});
