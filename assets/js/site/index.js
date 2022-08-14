const inputName = document.getElementById("name");
const inputLastName = document.getElementById("lastName");
const inputPhone = document.getElementById("phone");
const inputAddress = document.getElementById("address");
const inputEmail = document.getElementById("email");
const inputLanguages = document.getElementById("languages");
const inputSummary = document.getElementById("summary");
const inputSkills = document.getElementById("skills");
const inputExperience = document.getElementById("experience");
const inputEducation = document.getElementById("education");
const inputCertification = document.getElementById("certification");

function CreateContactType() {
  if (Validation()) {
    const valueName = inputName.value;
    const valueLastName = inputLastName.value;
    const valuePhone = inputPhone.value;
    const valueAddress = inputAddress.value;
    const valueEmail = inputEmail.value;
    const valueLanguages = inputLanguages.value;
    const valueSummary = inputSummary.value;
    const valueSkills = inputSkills.value;
    const valueExperience = inputExperience.value;
    const valueEducation = inputEducation.value;
    const valueCertification = inputCertification.value;

    //Creando la estructura del CV mediante el DOM
    const mainContainer = document.getElementById("contact-container");

    const div2 = document.createElement("div");
  
    const divCard = document.createElement("div");
    divCard.setAttribute("class", "card");

    const divCardBody = document.createElement("div");
    divCardBody.setAttribute("class", "card-body");

    const DivRow = document.createElement("div");
    DivRow.setAttribute("class","row");

    // Creación de elementos ubicados en la izquierda
    const divCol4Left = document.createElement("div");
    divCol4Left.setAttribute("class", "col-4");
    divCol4Left.setAttribute("id", "left");

    const h2Name = document.createElement("h2");
    h2Name.setAttribute("class", "text-left fw-bold text-primary");
    h2Name.innerText = valueName; 

    const h2LastName = document.createElement("h2");
    h2LastName.setAttribute("class", "text-left fw-bold text-primary");
    h2LastName.innerText = valueLastName;

    const imgProfile = document.createElement("img");
    imgProfile.setAttribute("class", "img-thumbnail");
    imgProfile.width = "300";
    imgProfile.height = "300";
    imgProfile.src = "../../img/user.png";
    imgProfile.alt = "Perfil";

    const h4Contact = document.createElement("h4");
    h4Contact.setAttribute("class", "text-left fw-bold text-primary");
    h4Contact.innerText = "";

    const h6Address = document.createElement("h6");
    h6Address.setAttribute("class", "text-left");
    h6Address.innerText = "Address:";

    const pAddress = document.createElement("p");
    pAddress.innerText = valueAddress;

    const h6Phone = document.createElement("h6");
    h6Phone.setAttribute("class", "text-left");
    h6Phone.innerText = "Phone:";

    const pPhone = document.createElement("p");
    pPhone.innerText = valuePhone;

    const h6Email = document.createElement("h6");
    h6Email.setAttribute("class", "text-left");
    h6Email.innerText = "Email:";

    const pEmail = document.createElement("p");
    pEmail.innerText = valueEmail;

    const h4Language = document.createElement("h4");
    h4Language.setAttribute("class", "text-left fw-bold text-primary");
    h4Language.innerText = "Language";
    
    const ulLanguage = document.createElement("ul");

    var arrayLanguages = valueLanguages.split(",");
    var liLanguages = [];
    for(let i = 0; i < arrayLanguages.length; i++) {

      liLanguages[i] = document.createElement("li");
      liLanguages[i].innerText = arrayLanguages[i];

    };  

    // Creación de elementos ubicados en la derecha
    const divRight = document.createElement("div");
    divRight.setAttribute("class", "col offset-1");
    divRight.setAttribute("id", "right");

    const h4Summary = document.createElement("h4");
    h4Summary.setAttribute("class", "text-left fw-bold text-primary");
    h4Summary.innerText = "Summary:";

    const pSummary = document.createElement("p");
    pSummary.innerText = valueSummary;

    const h4Skills = document.createElement("h4");
    h4Skills.setAttribute("class", "text-left fw-bold text-primary");
    h4Skills.innerText = "Skills Highlights:";

    const ulSkills = document.createElement("ul");

    var arraySkills = valueSkills.split(",");
    var liSkill = [];
    for(let i = 0; i < arraySkills.length; i++) {

      liSkill[i] = document.createElement("li");
      liSkill[i].innerText = arraySkills[i];

    };

    const h4Experience = document.createElement("h4");
    h4Experience.setAttribute("class", "text-left fw-bold text-primary");
    h4Experience.innerText = "Experience:";

    const ulExperience = document.createElement("ul");

    var arrayExperience = valueExperience.split(",");
    var liExperience = [];
    for(let i = 0; i < arrayExperience.length; i++) {

      liExperience[i] = document.createElement("li");
      liExperience[i].innerText = arrayExperience[i];

    };

    const h4Education = document.createElement("h4");
    h4Education.setAttribute("class", "text-left fw-bold text-primary");
    h4Education.innerText = "Education:";

    const ulEducation = document.createElement("ul");

    var arrayEducation = valueEducation.split(",");
    var liEducation = [];
    for(let i = 0; i < arrayEducation.length; i++) {

      liEducation[i] = document.createElement("li");
      liEducation[i].innerText = arrayEducation[i];

    };

    const h4Certification = document.createElement("h4");
    h4Certification.setAttribute("class", "text-left fw-bold text-primary");
    h4Certification.innerText = "Certification:";

    const ulCertification = document.createElement("ul");

    var arrayCertification = valueCertification.split(",");
    var liCertification = [];
    for(let i = 0; i < arrayCertification.length; i++) {

      liCertification[i] = document.createElement("li");
      liCertification[i].innerText = arrayCertification[i];

    };

    //Segmentacion de los elementos
    divCol4Left.appendChild(h2Name);
    divCol4Left.appendChild(h2LastName);
    divCol4Left.appendChild(imgProfile);
    divCol4Left.appendChild(h4Contact);
    divCol4Left.appendChild(h6Address);
    divCol4Left.appendChild(pAddress);
    divCol4Left.appendChild(h6Phone);
    divCol4Left.appendChild(pPhone);
    divCol4Left.appendChild(h6Email);
    divCol4Left.appendChild(pEmail);
    divCol4Left.appendChild(h4Language);
    divCol4Left.appendChild(ulLanguage);
    for(let i = 0; i < liLanguages.length; i++) {

      ulLanguage.appendChild(liLanguages[i]);
    };


    divRight.appendChild(h4Summary);
    divRight.appendChild(pSummary);
    divRight.appendChild(h4Skills);
    divRight.appendChild(ulSkills);
    for(let i = 0; i < liSkill.length; i++) {

      ulSkills.appendChild(liSkill[i]);
    };
    divRight.appendChild(h4Experience);
    divRight.appendChild(ulExperience);
    for(let i = 0; i < liExperience.length; i++) {

      ulExperience.appendChild(liExperience[i]);
    };
    divRight.appendChild(h4Education);
    divRight.appendChild(ulEducation);
    for(let i = 0; i < liEducation.length; i++) {

      ulEducation.appendChild(liEducation[i]);
    };
    divRight.appendChild(h4Certification);
    divRight.appendChild(ulCertification);
    for(let i = 0; i < liCertification.length; i++) {

      ulCertification.appendChild(liCertification[i]);
    };


    DivRow.appendChild(divCol4Left);
    DivRow.appendChild(divRight);
    divCardBody.appendChild(DivRow);

    divCard.appendChild(divCardBody);

    div2.appendChild(divCard);

    mainContainer.appendChild(div2);

    Clear();

  } else {
    alert("Debe rellenar todos los campos");
  }
}

function Clear() {
  inputName.value = "";
  inputName.classList.remove("input-error");
  inputName.classList.remove("input-success");
  inputName.focus();

  inputLastName.value = "";
  inputLastName.classList.remove("input-error");
  inputLastName.classList.remove("input-success");
  inputLastName.focus();

  inputPhone.value = "";
  inputPhone.classList.remove("input-error");
  inputPhone.classList.remove("input-success");

  inputAddress.value = "";
  inputAddress.classList.remove("input-error");
  inputAddress.classList.remove("input-success");
  inputAddress.focus();

  inputEmail.value = "";
  inputEmail.classList.remove("input-error");
  inputEmail.classList.remove("input-success");
  inputEmail.focus();

  inputLanguages.value = "";
  inputLanguages.classList.remove("input-error");
  inputLanguages.classList.remove("input-success");
  inputLanguages.focus();

  inputSummary.value = "";
  inputSummary.classList.remove("input-error");
  inputSummary.classList.remove("input-success");
  inputSummary.focus();

  inputSkills.value = "";
  inputSkills.classList.remove("input-error");
  inputSkills.classList.remove("input-success");
  inputSkills.focus();

  inputExperience.value = "";
  inputExperience.classList.remove("input-error");
  inputExperience.classList.remove("input-success");
  inputExperience.focus();

  inputEducation.value = "";
  inputEducation.classList.remove("input-error");
  inputEducation.classList.remove("input-success");
  inputEducation.focus();

  inputCertification.value = "";
  inputCertification.classList.remove("input-error");
  inputCertification.classList.remove("input-success");
  inputCertification.focus();

}

function Validation() {
 let boolValidation = true;

  const valueName = inputName.value;
  const valueLastName = inputLastName.value;
  const valuePhone = inputPhone.value;
  const valueAddress = inputAddress.value;
  const valueEmail = inputEmail.value;
  const valueLanguages = inputLanguages.value;
  const valueSummary = inputSummary.value;
  const valueSkills = inputSkills.value;
  const valueExperience = inputExperience.value;
  const valueEducation = inputEducation.value;
  const valueCertification = inputCertification.value;
  

  if (valueName == "" || valueName == null || valueName == undefined) {
    boolValidation = false;
    inputName.classList.add("input-error");
    inputName.classList.remove("input-success");
  } else {
    inputName.classList.add("input-success");
    inputName.classList.remove("input-error");
  }

  if (valueLastName == "" || valueLastName == null || valueLastName == undefined) {
    boolValidation = false;
    inputLastName.classList.add("input-error");
    inputLastName.classList.remove("input-success");
  } else {
    inputLastName.classList.add("input-success");
    inputLastName.classList.remove("input-error");
  }

  if (valuePhone == "" || valuePhone == null || valuePhone == undefined) {
    boolValidation = false;
    inputPhone.classList.add("input-error");
    inputPhone.classList.remove("input-success");
  } else {
    inputPhone.classList.add("input-success");
    inputPhone.classList.remove("input-error");
  }

  if(valueAddress == "" || valueAddress == null || valueAddress == undefined) {
    boolValidation = false;
    inputAddress.classList.add("input-error");
    inputAddress.classList.remove("input-success");
  } else {
    inputAddress.classList.add("input-success");
    inputAddress.classList.remove("input-error");
  }

  if(valueEmail == "" || valueEmail == null || valueEmail == undefined) {
    boolValidation = false;
    inputEmail.classList.add("input-error");
    inputEmail.classList.remove("input-success");
  } else {
    inputEmail.classList.add("input-success");
    inputEmail.classList.remove("input-error");
  }

  if(valueLanguages == "" || valueLanguages == null || valueLanguages == undefined) {
    boolValidation = false;
    inputLanguages.classList.add("input-error");
    inputLanguages.classList.remove("input-success");
  } else {
    inputLanguages.classList.add("input-success");
    inputLanguages.classList.remove("input-error");
  }

  if(valueSummary == "" || valueSummary == null || valueSummary == undefined) {
    boolValidation = false;
    inputSummary.classList.add("input-error");
    inputSummary.classList.remove("input-success");
  } else {
    inputSummary.classList.add("input-success");
    inputSummary.classList.remove("input-error");
  }

  if(valueSkills == "" || valueSkills == null || valueSkills == undefined) {
    boolValidation = false;
    inputSkills.classList.add("input-error");
    inputSkills.classList.remove("input-success");
  } else {
    inputSkills.classList.add("input-success");
    inputSkills.classList.remove("input-error");
  }

  if(valueExperience == "" || valueExperience == null || valueExperience == undefined) {
    boolValidation = false;
    inputExperience.classList.add("input-error");
    inputExperience.classList.remove("input-success");
  } else {
    inputExperience.classList.add("input-success");
    inputExperience.classList.remove("input-error");
  }

  if(valueEducation == "" || valueEducation == null || valueEducation == undefined) {
    boolValidation = false;
    inputEducation.classList.add("input-error");
    inputEducation.classList.remove("input-success");
  } else {
    inputEducation.classList.add("input-success");
    inputEducation.classList.remove("input-error");
  }

  if(valueCertification == "" || valueCertification == null || valueCertification == undefined) {
    boolValidation = false;
    inputCertification.classList.add("input-error");
    inputCertification.classList.remove("input-success");
  } else {
    inputCertification.classList.add("input-success");
    inputCertification.classList.remove("input-error");
  }


  return boolValidation;
}
