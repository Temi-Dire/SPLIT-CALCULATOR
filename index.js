let pricenumbers = [5, 10, 15, 25, 50];

for (i = 0; i < pricenumbers.length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    let bill = document.getElementById("price").value;
    let numberOfPeople = document.getElementById("people").value;
    let amountPerPerson = parseFloat(bill / numberOfPeople).toFixed(2);
    document.querySelector("#total-per-person").innerHTML =
      "$" + amountPerPerson;
    let currentNumber = Number(this.innerHTML);
    let tip = parseFloat((currentNumber / 100) * bill).toFixed(2);
    document.querySelector("#tip-per-person").innerHTML = "$" + tip;
  });
}

// let number = pricenumbers[i];
// let tip = number/100 * bill;
// alert(tip)
// // document.querySelector('#tipPerPerson').innerHTML = '$'+ tip;

let zero = "$0.00";

document.querySelectorAll("button")[5].addEventListener("click", function () {
  document.querySelector("#tip-per-person").innerHTML = zero;
  document.querySelector("#total-per-person").innerHTML = zero;
  document.getElementById("price").value = 0;
  document.getElementById("people").value = 0;
});
