// add button
let btnplus = document.getElementsByClassName("add");
for (let i = 0; i < btnplus.length; i++) {
  btnplus[i].addEventListener("click", function () {
    btnplus[i].nextElementSibling.innerHTML++;
    somme();
  });
}

// minus button
let btnminus = document.querySelectorAll(".minus");
for (let btn of btnminus) {
  btn.addEventListener("click", function () {
    if (btn.previousElementSibling.innerHTML > 0) {
      btn.previousElementSibling.innerHTML--;
      somme();
    }
  });
}

// remove 
let trush = Array.from(document.querySelectorAll(".fa-trash-alt"));
trush.map((el) =>
  el.addEventListener("click", function () {
    el.parentNode.parentNode.remove();
    somme();
  })
);
//  fonction ajout 

function somme() {
    let price = document.getElementsByClassName("total-price");
    let qte = document.getElementsByClassName("qte");
    let sum = 0;
    for (let i = 0; i < price.length; i++) {
      sum += Number(price[i].innerHTML) *Number( qte[i].innerHTML);

      console.log(sum)
    }
    document.getElementById("totalp").innerHTML = "Shopping Bag total : $" + sum;
  }

//   change color 

  let hearts = document.getElementsByClassName("fa-heart");
for (let heart of hearts) {
  heart.addEventListener("click", function () {
    if(heart.style.color==="red"){
        heart.style.color="gray"
    }
    else heart.style.color="red"
    heart.classList.toggle("red");
  });
}