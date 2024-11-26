const result = document.getElementById("result");
const findData = [];
let data = [];
let dataId = "";
const pendingTask = document.getElementById("pendingTask")
const alertData = document.getElementById("alertData")

if (JSON.parse(localStorage.getItem("data")) != null) {
    data = JSON.parse(localStorage.getItem("data"))
}

function deletUser(x) {
    console.log("hi")
    data.splice(x, 1);
    localStorage.setItem("data", JSON.stringify(data));
    result.innerHTML = "";
    data.map(
        (x, id) =>
        (result.innerHTML += `
    <div  class="d-flex justify-content-center align-items-center gap-2 perentDiv">
    <p class="p-0 m-0">${x}</p>
    <button class="border-0 bg-transparent  btn1 "> <i class="fa-solid fa-circle-xmark  text-danger"></i></button>
    <button class="border-0 bg-transparent btn2" onclick=" updateData(${x}) "><i class= "fa-solid fa-pen-to-square text-warning"></i></button>
</div>

        `)
    )
    if(data.length >0 ){
        pendingTask.innerText=`You have  ${data.length} pending tasks`
    }else{
        pendingTask.innerText=`empty` 
    }
}


additem.addEventListener("click", () => {
    if (dataentry.value == "") {
        
    }
    else {
        
        data.push(dataentry.value);
        localStorage.setItem("data", JSON.stringify(data));
        dataentry.value = "";
        result.innerHTML = "";
        data.map((x,id) =>
        (result.innerHTML += `
    <div  class="d-flex justify-content-center align-items-center gap-2  perentDiv ">
    <p class="p-0 m-0">${x}</p>
    <button class="border-0 bg-transparent    btn1"  onclick="deletUser(${id})"><i class="fa-solid fa-circle-xmark  text-danger"></i></button>
<button class="border-0 bg-transparent btn2" onclick=" updateData('${x}',${id}) "><i class= "fa-solid fa-pen-to-square text-warning"></i></button>
     </div>   `)
        );
    }
    if(data.length >0 ){
        pendingTask.innerText=`You have  ${data.length} pending tasks`
    }else{
        pendingTask.innerText=`empty` 
    }
});

window.addEventListener("load", () => {
    result.innerHTML = ''
    data.map(
        (x, id) =>
        (result.innerHTML += `
    <div class="d-flex justify-content-center align-items-center gap-2 perentDiv">
    <p class="p-0 m-0">${x}</p>
    <button class="border-0 bg-transparent  btn1 " onclick="deletUser(${id})"><i class="fa-solid fa-circle-xmark  text-danger"></i></button>
<button class="border-0 bg-transparent btn2" onclick=" updateData('${x}',${id}) "><i class= "fa-solid fa-pen-to-square text-warning"></i></button>
       </div> `)
    );

    if(data.length >0 ){
        pendingTask.innerText=`You have  ${data.length} pending tasks`
    }else{
        pendingTask.innerText=`empty` 
    }
})

updateitem.addEventListener("click", () => {
 if(dataentry.value!=''&&dataId!=''){
    console.log(dataId,'dataId')
    data.splice(dataId, 1, dataentry.value);
    localStorage.setItem("data", JSON.stringify(data));
    result.innerHTML = '';
     data.map(
          (x, id) =>
          (result.innerHTML += `
      <div class="d-flex justify-content-center align-items-center gap-2 perentDiv">
      <p class="p-0 m-0">${x}</p>
      <button class="border-0 bg-transparent   btn1" onclick="deletUser(${id})"><i class="fa-solid fa-circle-xmark  text-danger"></i></button>
  <button class="border-0 bg-transparent  btn2" onclick=" updateData('${x}',${id}) "><i class= "fa-solid fa-pen-to-square text-warning"></i></button>
         </div> `)
      );
      dataentry.value = "";
      datald = "";
      if(data.length >0 ){
          pendingTask.innerText=`You have  ${data.length} pending tasks`
      }else{
          pendingTask.innerText=`empty` 
      }
 }
});
function updateData(x,id) {
  updateitem.style.display = 'flex';
  dataentry.value = x;
  dataId = id;
  console.log(dataId,'dataId')
}

cleardatabtn.addEventListener('click', ()=>{
    localStorage.removeItem('data')
    data = []
    localStorage.setItem("data", JSON.stringify(data));
    result.innerHTML = "";
    data.map(
        (x, id) =>
        (result.innerHTML += `
    <div  class="d-flex justify-content-center align-items-center gap-2 perentDiv">
    <p class="p-0 m-0">${x}</p>
    <button class="border-0 bg-transparent  btn1 "> <i class="fa-solid fa-circle-xmark  text-danger"></i></button>
    <button class="border-0 bg-transparent btn2" onclick=" updateData(${x}) "><i class= "fa-solid fa-pen-to-square text-warning"></i></button>
</div>

        `)
    )
    if(data.length >0 ){
        pendingTask.innerText=`You have  ${data.length} pending tasks`
    }else{
        pendingTask.innerText=`empty` 
    }
    
})
