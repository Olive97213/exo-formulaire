/*Appel élément html*/

const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const ageInput = document.querySelector("#age");
const emailInput = document.querySelector("#email");
const button = document.querySelector("#button");



/*Evenement*/


// Ajouter un événement de soumission de formulaire pour vérifier le nom d'utilisateur
document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Empêcher le formulaire de se soumettre

  // Récupérer la valeur du firstname
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();


  // Vérifier si le firstname est vide ou contient moins de trois lettres
  if (firstNameValue === "" || lastNameValue === "" ) {
    alert("Les emplacements ne peuvent pas etre vide. Veuillez saisir un nom ou un prénom d'au moins trois lettres.");
  } else if (firstNameValue.length < 3 || lastNameValue.length < 3 ) {
    alert("Entrez trois lettres minimum");
  } 
    else if (!/^[a-zA-Z]+$/.test(firstNameValue)||!/^[a-zA-Z]+$/.test(lastNameValue)) {
    alert("Le  nom et prénom ne peuvent pas contenir de chiffre.");
   }
   else {
    
    // Soumettre le formulaire si le nom d'utilisateur est valide
    document.getElementById("form").submit();
  }
  

  
});

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const ageValue = new Date(ageInput.value);

  // Calculer l'âge de l'utilisateur en années
  const age = (new Date()).getFullYear() - ageValue.getFullYear();

  // Vérifier si l'utilisateur est âgé de 18 ans ou plus
  if (age < 18) {
    alert("Vous devez avoir 18 ans ou plus pour vous inscrire.");
  } else {
    
    // Soumettre le formulaire si l'utilisateur est âgé de 18 ans ou plus
    document.getElementById("form").submit();
  }


}); 

//vérification email

function isValidEmail(email) {
    // Utiliser une expression régulière pour vérifier le format de l'e-mail
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  // Utilisation de la fonction isValidEmail() pour vérifier l'adresse e-mail saisie par l'utilisateur
  
  
  const emailValue = emailInput.value;
  if (!isValidEmail(emailValue)) {
    alert("L'adresse e-mail saisie n'est pas valide.");
  } else {
    alert("L'adresse e-mail saisie est valide !");
    
  }
  


  
    

  