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
    clear();
    validateA4();
    validateA3();
    validateSA3();
  }
  });

  const modified = () => {
    let resultA = numberA.value;
    let resultB = numberB.value;

    if(Number(resultA) > Number(resultB)){
      let resultC = parseInt((resultB/resultA)*100);
      resultA = 100;
      box.style.height = (resultA) + "%";
      box.style.height = (resultC) + "%";
    }else{
      resultA = (resultA/resultB)*100;
      console.log("entra en B mayor que A")
      console.log("-------")
      console.log(resultA)
    console.log(resultB)

      resultB = 100;
      box.style.width = (resultA) + "%";
      console.log(box.style.width)
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

    const mountH = document.createElement("div");
    const mountV = document.createElement("div");
    mountH.classList.add('newdiv');
    mountV.classList.add('newdiv');
    HA4value.appendChild(mountH)
    VA4value.appendChild(mountV)
    mountH.innerHTML = Math.floor(resultH);
    mountV.innerHTML = Math.floor(resultV);

    resultB = (resultB/A4h)*70;
    resultA = (resultA/A4v)*110;

    for (let i = 0; i < resultV; i++) {
      const cuts = document.createElement("div");
      cuts.classList.add('paper');
      cuts.style.width = (resultA) + "px";
      cuts.style.height = (resultB) + "px";
      VA4value.appendChild(cuts)
    }  

    for (let i = 0; i < resultH; i++) {
      const cuts = document.createElement("div");
      cuts.classList.add('paper');
      cuts.style.width = (resultA) + "px";
      cuts.style.height = (resultB) + "px";
      HA4value.appendChild(cuts)
    }   
    
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

    const mountH = document.createElement("div");
    const mountV = document.createElement("div");
    mountH.classList.add('newdiv');
    mountV.classList.add('newdiv');
    HA3value.appendChild(mountH)
    VA3value.appendChild(mountV)
    mountH.innerHTML = Math.floor(resultH);
    mountV.innerHTML = Math.floor(resultV);

    resultB = (resultB/A3h)*70;
    resultA = (resultA/A3v)*110;

    for (let i = 0; i < resultV; i++) {
      const cuts = document.createElement("div");
      cuts.classList.add('paper');
      cuts.style.width = (resultA) + "px";
      cuts.style.height = (resultB) + "px";
      VA3value.appendChild(cuts)
    }  

    for (let i = 0; i < resultH; i++) {
      const cuts = document.createElement("div");
      cuts.classList.add('paper');
      cuts.style.width = (resultA) + "px";
      cuts.style.height = (resultB) + "px";
      HA3value.appendChild(cuts)
    }   
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
 
    const mountH = document.createElement("div");
    const mountV = document.createElement("div");
    mountH.classList.add('newdiv');
    mountV.classList.add('newdiv');
    HSA3value.appendChild(mountH)
    VSA3value.appendChild(mountV)
    mountH.innerHTML = Math.floor(resultH);
    mountV.innerHTML = Math.floor(resultV);

    resultB = (resultB/SA3h)*70;
    resultA = (resultA/SA3v)*110;

    for (let i = 0; i < resultV; i++) {
      const cuts = document.createElement("div");
      cuts.classList.add('paper');
      cuts.style.width = (resultA) + "px";
      cuts.style.height = (resultB) + "px";
      VSA3value.appendChild(cuts)
    }  

    for (let i = 0; i < resultH; i++) {
      const cuts = document.createElement("div");
      cuts.classList.add('paper');
      cuts.style.width = (resultA) + "px";
      cuts.style.height = (resultB) + "px";
      HSA3value.appendChild(cuts)
    }      

  }

  const clear = () => {
    while (HSA3value.firstChild) {
      HSA3value.removeChild(HSA3value.firstChild);
    }
    while (VSA3value.firstChild) {
      VSA3value.removeChild(VSA3value.firstChild);
    }
    while (HA3value.firstChild) {
      HA3value.removeChild(HA3value.firstChild);
    }
    while (VA3value.firstChild) {
      VA3value.removeChild(VA3value.firstChild);
    }
    while (HA4value.firstChild) {
      HA4value.removeChild(HA4value.firstChild);
    }
    while (VA4value.firstChild) {
      VA4value.removeChild(VA4value.firstChild);
    }
  }
