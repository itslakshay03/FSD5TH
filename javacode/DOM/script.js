// const container = document.getElementsByClassName("container");

// const h2 = document.createElement("h2");
// h2.innerText = "ABES Engineering College";
// h2.style.color = "white";
// h2.style.backgroundColor = "brown";
// console.log(h2);
// container[0].appendChild(h2);

// const button = document.getElementById("btn");
// console.log(button);

// function msg() {
//     container[0].innerHTML = "";

//     const loadingMsg = document.createElement('p');
//     loadingMsg.innerText = "Loading...";
//     loadingMsg.style.color = "blue";
//     loadingMsg.style.fontSize = "20px";
//     container[0].appendChild(loadingMsg);

//     setTimeout(() => {
//         container[0].innerHTML = "";

//         const img = document.createElement('img');
//         img.src = "download.jpg";
//         img.setAttribute("height", "200px");
//         img.setAttribute("width","200px");
//         console.log(img);
//         container[0].appendChild(img);

//         const h3 = document.createElement('h3');
//         h3.innerText = "Welcome to ABES ENGINEERING COLLEGE";
//         h3.style.color = "yellow";
//         h3.style.backgroundColor = "red";
//         container[0].appendChild(h3);
//     }, 3000); 
// }

// button.addEventListener("click", msg);

// const button = document.getElementById("bin");
// function longData(){
//     console.log("Start");
//     for(i=0;i<100000000;i++){
//         console.log(i)
//     }
//     console.log("End");
// }
// button.addEventListener("click", longData);

// function greetmsg(){
//     return "Welcome to ABES College"
// }

// function msgHandler(msg, clbk){
//     console.log(msg);
//     const data = clbk(msg);
//     return data;
// }
// const completemsg = msgHandler("Hii", greetmsg);
// console.log(completemsg)

// const student = ["Rahul", "Aman", "Vansh"]
// student.forEach((name))>>{
//     console.log(msgHandler(name, greetmsg)
// })

// const mypromise = new Promise((reslove, reject))=>{
//     const password = "7868gh#$";
//     if(password.length > 8){f
//         resolve("Password length is ok");
//     }
//     else{
//         reject("Password length is not per as per our policy");
//     }
// };

// mypromise.then((result)) =>(console.log(result))
// .catch((err)=>{console.log})

// async function handleData(){
//     const data = await mypromise;
//     console.log(data)
// }
// handleData();

const button=document.getElementById('btn');
const disp=document.getElementById('disp');
let table='<table border=1>';
async function fetchData(){
  disp.innerHTML='Data is loading...'
    const response=await fetch('https://dummyjson.com/recipes');
    const jsonData=await response.json();
    console.log(jsonData.recipes);
    // disp.innerHTML=<h2>$(json.recipes [0].name)</h2>
jsonData.recipes.forEach(element => {
  table+=`<tr>
  <td><img src=${element.image} height=200 width=200 alt='image'></td>
  <td>${element.id}</td>
  <td>${element.name}</td>
  <td>${element.ingredients}</td>
  </tr>`
});
    table+='</table>';
    disp.innerHTML=table;
}
button.addEventListener('click',fetchData);