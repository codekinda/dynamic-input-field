//This function changes when the selected country/value changes
function populateState(){
    //Get the selected value in country
    const selectedCountry = document.getElementById("country").value;
   // console.log(selectedCountry);

   //Use the selected value of country to determine what is going to be in the state list
   let optionToAdd = [];
   if(selectedCountry === "usa"){
    optionToAdd = ["New York", "New Boston", "Texas"];
   } else if(selectedCountry === "india"){
    optionToAdd = ["Odisha", "Gujarat", "Bihar"];
   }
   else if(selectedCountry === "nigeria"){
    optionToAdd = ["Enugu", "Lagos", "kano"];
   }
   else if(selectedCountry === "ghana"){
    optionToAdd = ["Volta", "Ashanti", "Oti"];
   }

   const state = document.getElementById("state");
//Clear the options in the select list
    state.innerHTML = "";

//Add the new options to the state list
optionToAdd.forEach((optionText) => {
    const option = document.createElement("option");
    option.value = optionText;
    option.textContent = optionText;
    state.appendChild(option);
});
}
document.getElementById("country").addEventListener("change", populateState);