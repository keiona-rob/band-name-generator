 const adjectives = ["Funky", "Loud", "Silent", "Electric", "Wicked", "Groovy", "Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "Black", "White", "Gray", "Colorful"];

 const nouns = ["Penguins", "Wizards", "Socks", "Robots", "Bananas", "Crows", "Colors"];


 

 function getAdjective() {

 // TODO: return a random adjective from the adjectives array

  
 }



 function getNoun() {

 // TODO: return a random noun from the nouns array

 }




 // TODO: use getAdjective() and getNoun() to build a band name

 // Format: "The Adjective Noun"

 // Then update the DOM to show the band name inside #band-name

 document.getElementById("generate-btn").addEventListener("click", generateBandName);

function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

 function generateBandName() {
  const randomAdjective = adjectives[getRandomIndex(adjectives)];
  const randomNoun = nouns[getRandomIndex(nouns)];
   return "The " + randomAdjective + " " + randomNoun;
}
 const newName = generateBandName();
console.log(newName); // Example output: "happy cat"


const generateButton = document.getElementById("generate-btn");
const nameDisplay = document.getElementById("nameDisplay");

// Add a click event listener to the button
generateButton.addEventListener("click", function() {

 const newName = generateBandName(); 

 
  band.innerHTML = newName;
});