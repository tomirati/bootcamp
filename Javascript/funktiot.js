//klassinen tapa
function laskeSumma(a,b){
    return a+b;
}

let summa = laskeSumma(1,2);
console.log(summa);

//muuttujaan sijoitus

let summafunktio = function(a,b){
    return a + b;
}

summa = summafunktio(2,3);
console.log(summa);


//arrow funtioita

//returnin kanssa
let summafunktio2 = (a,b) => {
    return a + b;
}

summa = summafunktio2(4,5);
console.log(summa);

//kompakti tapa ilman alkuperäistä returnia
let summafunktio3 = (a,b) => a + b;

summa = summafunktio3(6,7);
console.log(summa);