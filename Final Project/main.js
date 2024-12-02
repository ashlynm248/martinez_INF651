let asked = [];


//responsible for giving the users their answers/fortune and putting the question into the "questions asked" array
function addQuestion(){
const question = document.getElementById("userInput").value.trim();  //calls the element 'userInput'

if (question !== ""){  //if there is a text input, then the text will be pushed into the array/the user will get a fortune
   asked.push({userInput: question});  //pushes the information
   document.getElementById("userInput").value =""; 
   renderQuestions();
   const items= ["Yes", "No", "Without A Doubt", "Ask Again Later", "Outlook Good", "My Sources Say No", "It Is Certain", "Reply Hazy - Try Again", "Yes Definitely", "Don't Count On It", "Better Not Tell You Now", "Concentrate And Ask Again" ];  //all the responses the site can give
      const randomIndex=Math.floor(Math.random() * items.length);  //allows the site to pick one of the 12 items
      const randomItem= items[randomIndex]; 
      alert(randomItem);  //allows the fortune to be shown as an alert
} else{
   alert("Could Not Read Fortune. Please Enter Proper Input.")  //if there is no text inputted and the "Get A Fortune" is pressed, this alert will appear
 }
}


//lets the user remove questions from the "questions asked"
function removeQuestion (index) {
   asked.splice(index, 1);
   renderQuestions();
}


//this allows questions to be removed or added to the array
function renderQuestions(queList = asked){
   const queListElement = document.getElementById("quelist");
   queListElement.innerHTML ="";
   queList.forEach((askedd, index) => {
      const li = document.createElement("li");
      li.innerHTML = `${askedd.userInput}<button onclick=removeQuestion()>Remove</button>`;
      queListElement.appendChild(li);
   });
}; 


//form validation, ensuring contact information is valid
function formVali() {
   const firstname = document.getElementById("firstname").value; //first name variable
   const email = document.getElementById("email").value; //email variable
   const phone = document.getElementById("phone").value; //phone variable

  const firstError = document.getElementById("first!error"); //calls on the !error elements that are in HTML
  const emailError = document.getElementById("email!error"); //same^
  const phoneError = document.getElementById("phone!error"); //same^

 firstError.textContent =""; //creating the body that the error message will be in 
 emailError.textContent =""; //same^
 phoneError.textContent =""; //same^

let correctIn = true;

if (firstname=== "" || firstname.length < 2) {  //says that if the name is less than 2 characters then the name is invalid
   firstError.textContent = //creating the error message 
   "Required. Please enter proper first name."; //the error message
    correctIn = false;  //the user's input is acceptable if the above is false
}

if (email==="" || !email.includes("@")) {
   emailError.textContent =
   "Required. Please enter proper email.";
   correctIn = false;
}

if (phone=== "" || phone.length < 10) {
   phoneError.textContent =
   "Required. Please enter proper phone number."
   correctIn = false;
}

return correctIn
}