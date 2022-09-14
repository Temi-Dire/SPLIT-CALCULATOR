let pricenumbers = [5, 10, 15, 25, 50];

for (i = 0; i < pricenumbers.length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    let bill = document.getElementById("price").value;
    let numberOfPeople = document.getElementById("people").value;
    let amountPerPerson = bill / numberOfPeople;
    document.querySelector("#total-per-person").innerHTML =
      "$" + amountPerPerson;
  });
}

// let number = pricenumbers[i];
// let tip = number/100 * bill;
// alert(tip)
// // document.querySelector('#tipPerPerson').innerHTML = '$'+ tip;
