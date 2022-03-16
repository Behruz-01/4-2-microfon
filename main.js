var elBtnRec = document.querySelector(".btn-rec");
var elList = document.querySelector(".list")
var elBody = document.querySelector("body")
var record = new webkitSpeechRecognition();

record.lang = "en-US"

record.onend = function(){
  console.log("===== Aloqa tugadi =====");
}


record.onerror = function(){
  console.log("===== Xatolik yuz berdi =====");
}

record.onresult = function(evt){

  var command = evt["results"][0][0]["transcript"];

  if(command.includes("come")){
    elBtnRec.classList.add("btn")
    elBody.classList.add("car")
  }

  if(command.includes("boom")){
    elBtnRec.classList.add("btn")
    elBody.classList.add("met")
  }

  if(command.includes("mounting")){
    elBtnRec.classList.add("btn")
    elBody.classList.add("www")
  }

  if(command.includes("stage")){
    elBtnRec.classList.add("btn")
    elBody.classList.add("build")
  }
  

  if(command.includes("finish")){
    elBtnRec.classList.add("btn")
    elBody.classList.add("future")
  }

  if(command.includes("traval")){
    elBtnRec.classList.add("btn")
    elBody.classList.add("tokyo")
  }

//   if(command == "green"){
//     window.document.body.style.backgroundColor = "green";
//   }else if(command == "red"){
//     window.document.body.style.backgroundColor = "red";
//   }else if(command == "yellow"){
//     window.document.body.style.backgroundColor = "yellow";
//   }

    // var elItem = document.createElement("li");


    // elItem.textContent = command;


    // elList.appendChild(elItem);



    

}


elBtnRec.addEventListener("click", function(){
  console.log("===== Aloqa boshlandi =====");


  elBtnRec.classList.add("btn")
  record.start();
})