const button = document.querySelector('#button');

function converter() {
  let input = parseFloat(document.querySelector("#input").value)
  let result=document.querySelector("#result")
  let startEnhet =document.querySelector("#startEnhet").value
  let slutEnhet=document.querySelector("#slutEnhet").value
  let convertedNumber = 0;
  
  if(Number.isNaN(input)){
    result.textContent="Ikke skrevet inn noe tall";
    result.style.color="red";
    return;

 }
if(startEnhet===slutEnhet){
  result.textContent="Velg to ulikemålenheter";
  result.style.color="red";
  return;
}
if(startEnhet==="MM"&& slutEnhet==="CM"){
  convertedNumber=input/10
}
else if(startEnhet==="MM"&& slutEnhet==="M"){
  convertedNumber= input/1000;
}
else if(startEnhet==="CM"&& slutEnhet==="MM"){
  convertedNumber=input*10;
}
else if(startEnhet==="CM"&& slutEnhet==="M"){
  convertedNumber=input/100;
}
else if(startEnhet==="M"&& slutEnhet==="MM"){
  convertedNumber=input*1000;
}
else if(startEnhet==="M"&& slutEnhet==="CM"){
  convertedNumber=input*100;
}
else if(startEnhet==="KM"&& slutEnhet==="MM"){
  convertedNumber=input*1000000;
}
else if(startEnhet==="KM"&& slutEnhet==="CM"){
  convertedNumber=input*100000;
}
else if(startEnhet==="KM"&& slutEnhet==="M"){
  convertedNumber=input*1000;
}


console.log(convertedNumber)
result.textContent=convertedNumber;
}
button.addEventListener('click', function (event) {
  event.preventDefault();
  converter()
  console.log('Button is clicked!');
  
});
