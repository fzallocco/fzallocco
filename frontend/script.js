import profileArray from "./components/data.js";

//declaring content function by iterating through profileArray and extracting content.
const content = profileArray.map((profile) => {

    let newProfile = document.createElement("article");
    //newProfile is a virtual tag that HTML will recognize as element
    newProfile.classList.add("profile");

    //below is the DOM tree unlocking each object element's property from the array
    newProfile.innerHTML = `
  
    <figure class="profile__image">
      <img src=${profile.image} alt="" width="300" height="300">
    </figure>
    <h1 class="Services">skills and contact info</h1>
    <ul class="freelancer_features">
      <li class="firstService">${
        profile.firstService
      }</li>
      <li class="secondService">${
        profile.secondService
      }</li>
      <li class="thirdService">${
        profile.thirdService
      }</li>
      <li class="email"><a href="mailto:info@fzallocco.com">${
        profile.email
      }</a></li>
      <li class="LinkedIn"><a href="https://www.linkedin.com/in/fzallocco/">${
        profile.linkedIn
      }</a></li>
      <li class="GitHub"><a href="https://github.com/fzallocco">${
        profile.gitHub
      }</a></li>
      /*<li class="daysOfActivity">site has been up for ${
        profile.daysOfActivity()
      } days</li>*/
    </ul>
    `;

    /*newProfile.addEventListener("click", (e) => {
      e.preventDefault();//prevents page from reloading upon clicking on it
    });*/

 return newProfile; //return properties to object to output to HTML
});

const main = document.querySelector(".maincontent"); //fetching .maincontent div to create JS object
content.forEach((profile) => {
    main.append(profile); //looping through the profileArray to append each article to .maincontent
});

console.log("JS is loaded");
