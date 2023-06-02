
function myFunction() {
    var age;
    age = document.getElementById("age").value;
    play = (age < 7) ? "Too young":"Old enough";
    document.getElementById("result").innerHTML = play + " to play!";
}


function validate() {
   let pass = document.getElementById("password");
   let upper = document.getElementById("upper");
   let lower = document.getElementById("lower");
   let num = document.getElementById("number");


 
   if(pass.value.match(/[0-9]/)){
      num.style.color = 'green'
   }

   else{
      num.style.color = 'red'
   }

   if(pass.value.match(/[A-Z]/)){
      upper.style.color = 'green'
   }

   else{
      upper.style.color = 'red'
   }

   if(pass.value.match(/[a-z]/)){
      lower.style.color = 'green'
   }

   else{
      lower.style.color = 'red'
   }


}




     