// const div = document.getElementsByTagName("div");
// console.log(div)
// div[0].innerText = "Hello World";
// div[0].style.color = "red";
// div[0].style.background = "cyan";
// console.log(div);

  const container = document.getElementsByClassName("container");
    container[0].innerHTML = '<h2 style="color:red"> Hello World </h2>';
    console.dir(container);

    // Create H2
    const h2 = document.createElement("h2");
    h2.innerText = "YO YO HONEY SINGH....";
    h2.style.color = "maroon";
    h2.style.backgroundColor = "yellow";
    console.log(h2);
    container[0].appendChild(h2);

    // Create Image
    const img = document.createElement("img");
    img.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDr0KAzC-OTkq3-N4MMDAEDg01nkHexGuCNv8QuCcEMIJmOE4HrvANeoUO74r_jVSKEFkwEEvId-l-pZMl7FaJYwU3gVRCbIBV4boJ9JA";
    img.setAttribute("height", "200px");
    img.setAttribute("width", "300px");
    console.log(img);
    container[0].appendChild(img);

    // Button + Function
    const button = document.getElementById("btn");
    console.log(button);

    function msg() {
      const h3 = document.createElement('h3');
h3.innerText = "Welcome to ABES ENGINEERING COLLEGE";
h3.style.color = "yellow";
h3.style.backgroundColor = "maroon";
container[0].appendChild(h3);
    }
    button.addEventListener("click", msg);
