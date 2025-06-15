 const adjectives = ["Funky", "Loud", "Silent", "Electric", "Wicked", "Groovy"];

 const nouns = ["Penguins", "Wizards", "Socks", "Robots", "Bananas", "Crows"];


 

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


