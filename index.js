let pricenumbers = [5, 10, 15, 25, 50];

for (i = 0; i < pricenumbers.length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    let bill = document.getElementById("price").value;
    let invalidZero = "0.00";
    let numberOfPeople = document.getElementById("people").value;
    let amountPerPerson = parseFloat(bill / numberOfPeople).toFixed(2);
    if (isNaN(amountPerPerson)) {
      alert("Please Enter a Valid Number");
      amountPerPerson = invalidZero;
    }
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
  document.getElementById("custom").value = "";
});

//Adding functionality to the enter key
const custom = document.getElementById("custom");
custom.addEventListener("keydown", function (e) {
  let customNumber = this.value;
  if (e.key === "Enter") {
    if (customNumber > 0 && customNumber < 100) {
      let customAmount = parseFloat(
        document.getElementById("price").value /
          document.getElementById("people").value
      ).toFixed(2);
      document.querySelector("#total-per-person").innerHTML =
        "$" + customAmount;
      let customTip = parseFloat(
        (customNumber / 100) * document.getElementById("price").value
      ).toFixed(2);
      document.querySelector("#tip-per-person").innerHTML = "$" + customTip;
    }
  }
});
