let km = prompt("Inserire il numero di chilometri:");
while(isNaN(km)){
    alert("Devi inserire un numero");
    km = prompt("Inserire il numero di chilometri:");
}

let eta = prompt("Inserire la propria età:");
while (isNaN(eta)) {
    alert("Devi inserire un numero");
    eta = prompt("Inserire la propria età:");
}

let price = km * 0.21;


if(eta <= 18){
    price = price - (price * 0.2);
    console.log(price.toFixed(2));
    document.getElementById("final_price").innerHTML = price.toFixed(2);
} else if(eta >= 65){
    price = price - (price * 0.4);
    console.log(price.toFixed(2));
    document.getElementById("final_price").innerHTML = price.toFixed(2);
} else {
    console.log(price);
    document.getElementById("final_price").innerHTML = price;
}