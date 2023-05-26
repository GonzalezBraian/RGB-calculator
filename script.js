const valueA = document.getElementById("numberA");
const form = document.getElementById("form");
const numberA = document.getElementById("numberA");
const numberB = document.getElementById("numberB");
const alert = document.getElementById("alert");
const box = document.getElementById("box");
const A4h = 200;
const A4v = 287;
const A3h = 287;
const A3v = 410;
const SA3h = 315;
const SA3v = 465;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let resultA = numberA.value;
    let resultB = numberB.value;
    alert.innerHTML = "";

    if(resultA == ""){
      alert.innerHTML = "Ingresa un valor en A";
      return
    }if(resultB == ""){
        alert.innerHTML = "Ingresa un valor en B";
    }else{
    modified();
    validateA4();
    validateA3();
    validateSA3();
  }
  });
  const modified = () => {
    let resultA = numberA.value;
    let resultB = numberB.value;
    if(resultA > resultB){
      resultB = (resultB/resultA)*100;
      resultA = 100;
      box.style.width = (resultA) + "%";
      box.style.height = (resultB) + "%";
    }else{
      resultA = (resultA/resultB)*100;
      resultB = 100;
      box.style.width = (resultA) + "%";
      box.style.height = (resultB) + "%";
    }

  }
  const validateA4 = () => {
    const HA4value = document.getElementById("HA4value"); 
    const VA4value = document.getElementById("VA4value"); 
    let resultA = numberA.value
    let resultB = numberB.value

    let result1 = A4h /resultA ;
    let result2 = A4v /resultB ;
    let resultV = Math.floor(result1) * Math.floor(result2);
    
    let result3 = A4h /resultB ;
    let result4 = A4v /resultA ;
    let resultH = Math.floor(result3) * Math.floor(result4);

    VA4value.innerHTML = Math.floor(resultV);
    HA4value.innerHTML = Math.floor(resultH);
  }

  const validateA3 = () => {
    const HA3value = document.getElementById("HA3value"); 
    const VA3value = document.getElementById("VA3value"); 
    let resultA = numberA.value
    let resultB = numberB.value

    let result1 = A3h /resultA ;
    let result2 = A3v /resultB ;
    let resultV = Math.floor(result1) * Math.floor(result2);
    
    let result3 = A3h /resultB ;
    let result4 = A3v /resultA ;
    let resultH = Math.floor(result3) * Math.floor(result4);

    VA3value.innerHTML = Math.floor(resultV);
    HA3value.innerHTML = Math.floor(resultH);
  }

  const validateSA3 = () => {
    const HSA3value = document.getElementById("HSA3value"); 
    const VSA3value = document.getElementById("VSA3value"); 
    let resultA = numberA.value
    let resultB = numberB.value

    let result1 = SA3h /resultA ;
    let result2 = SA3v /resultB ;
    let resultV = Math.floor(result1) * Math.floor(result2);
    
    let result3 = SA3h /resultB ;
    let result4 = SA3v /resultA ;
    let resultH = Math.floor(result3) * Math.floor(result4);

    VSA3value.innerHTML = Math.floor(resultV);
    HSA3value.innerHTML = Math.floor(resultH);
  }
