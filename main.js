// La recuperation des elements
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const firstname = document.querySelector("#firstname");
const ageInputValue = document.querySelector("#ageInput");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const private = document.querySelector("private");


// Evenements
form.addEventListener("submit", (e) => {
  e.preventDefault();

  form_verify();
});

// Functions
function form_verify() {
  // Obtenir toutes les valeurs des inputs
  const userValue = username.value.trim();
  const firstnameValue = firstname.value.trim();
  const ageInputValue = ageInput.value;
  const emailValue = email.value.trim();
  const pwdValue = password.value.trim();
  const pwd2Value = password2.value.trim();

  // Username verify
  if (userValue === "") {
    let message = "Username ne peut pas être vide";
    setError(username, message);
  } else if (!userValue.match(/^[a-zA-Z]/)) {
    let message = "Username doit commencer par une lettre";
    setError(username, message);
  } else {
    let letterNum = userValue.length;
    if (letterNum < 3) {
      let message = "Username doit avoir au moins 3 caractères";
      setError(username, message);
    } else {
      setSuccess(username);
    }
  }
  // Firstname Verify

  if (firstnameValue === "") {
    let message = "First Name ne peut pas être vide";
    setError(firstname, message);
  } else if (!firstnameValue.match(/^[a-zA-Z]/)) {
    let message = "First Name doit commencer par une lettre";
    setError(username, message);
  } else {
    let letterNum = firstnameValue.length;
    if (letterNum < 3) {
      let message = "First Name doit avoir au moins 3 caractères";
      setError(firstname, message);
    } else {
      setSuccess(firstname);
    }
  }

  //date of brith verify
  if (ageInputValue === "") {
    let message = "vous devez renseigner votre age";
    setError(ageInput, message);
  } else {
    setSuccess(ageInput);
  }

  // Ajouter un écouteur d'événements pour le champ de date de naissance
  ageInput.addEventListener("blur", function () {
    // Récupérer la valeur de la date de naissance
    const ageInputValue = ageInput.value;

    // Calculer l'âge de l'utilisateur
    const now = new Date();
    const brithYear = new Date(ageInputValue).getFullYear();
    const age = now.getFullYear() - brithYear;

    // Vérifier si l'utilisateur a au moins 18 ans
    if (age < 18) {
      ageInput.setCustomValidity(
        "Vous devez avoir au moins 18 ans pour vous inscrire"
      );
      ageInput.reportValidity();
      return;
    }

    // Réinitialiser la validation du champ de date de naissance
    ageInput.setCustomValidity("");
    ageInput.reportValidity();
  });

  // email verify

  if (emailValue === "") {
    let message = "Email ne peut pas être vide";
    setError(email, message);
  } else if (!email_verify(emailValue)) {
    let message = "Email non valide";
    setError(email, message);
  } else {
    setSuccess(email);
  }

  // password verify
  if (pwdValue === "") {
    let message = "Le passeword ne peut pas être vide";
    setError(password, message);
  } else if (!password_verify(pwdValue)) {
    let message = "Le mot de passe est trop faible (8 à 12 caractères)";
    setError(password, message);
  } else {
    setSuccess(password);
  }
  // pwd confirm
  if (pwd2Value === "") {
    let message = "Le passeword de confirmation ne peut pas être vide";
    setError(password2, message);
  } else if (pwdValue !== pwd2Value) {
    let message = "Les mot de passes ne correspondent pas";
    setError(password2, message);
  } else {
    setSuccess(password2);
  }
}

function setError(elem, message) {
  const formControl = elem.parentElement;
  const small = formControl.querySelector("small");

  // Ajout du message d'erreur
  small.innerText = message;

  // Ajout de la classe error
  formControl.className = "form-control error";
}

function setSuccess(elem) {
  const formControl = elem.parentElement;
  formControl.className = "form-control success";
}

function email_verify(email) {
  /*
    * r_rona.22-t@gmail.com
        /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/
    */
  return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
}
function password_verify(passeword) {
  return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/.test(
    passeword
  );
}

// function addEventListener(private) {

//   if (  form_verify() == )
//    private 

// }


// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//  ;
// });

const isValid = form.checkValidity();

if (isValid = form.checkValidity()) {
  console.log('Le formulaire est entièrement validé');
} else {
  console.log('Le formulaire n\'est pas encore entièrement validé');
}




fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log);