
function calculateBmi() {
var weight = document.bmiForm.weight.value
var height = document.bmiForm.height.value
if(weight > 0 && height > 0){
var finalBmi = ((703*weight)/(height*height))
document.bmiForm.bmi.value = finalBmi
if(finalBmi < 18.5){
document.bmiForm.meaning.value = "You are underweight."
}
if(finalBmi > 18.5 && finalBmi < 25){
document.bmiForm.meaning.value = "Your weight is normal."
}
if(finalBmi > 25 && finalBmi < 30){
document.bmiForm.meaning.value = "You are overweight."
}
if(finalBmi > 30){
document.bmiForm.meaning.value = "You are obese."
}
}
else{
alert("Please Fill in everything correctly")
}
}

let somatotypeInfo = document.querySelectorAll('.somatotype_info');
let type = document.querySelectorAll('.type');

function hideAll () {
  somatotypeInfo.forEach(function(el){
    el.style.display = 'none';
  });
}

hideAll();

type.forEach(function(el) {
  el.onclick = (e) => {

    hideAll();

    switch (e.target.getAttribute('id')) {
     case 'ectomorph':
       document.querySelector('#ectomorph_stuff')
         .style.display = 'block';
       break;
     case 'mesomorph':
       document.querySelector('#mesomorph_stuff')
         .style.display = 'block';
       break;
     case 'endomorph':
       document.querySelector('#endomorph_stuff')
       .style.display = 'block';
       break;
       default:
       document.querySelectorAll('somatotype_info')
       .style.display = "none";
       break;
   }
 }
});
