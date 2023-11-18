function obliczPaliwo() {
    var spalanie = document.getElementById('spalanie').value;
    var dystans = document.getElementById('dystans').value;
    var cenaZaLitr = document.getElementById('cenaZaLitr').value;

    if (spalanie === '' || dystans === '' || cenaZaLitr === '' || isNaN(spalanie) || isNaN(dystans) || isNaN(cenaZaLitr)) {
        alert("Proszę wprowadzić poprawne wartości!");
        return;
    }

    var zużycie = (spalanie / 100) * dystans;
    var koszt = zużycie * cenaZaLitr;
    document.getElementById('wynik').innerHTML = `Całkowite zużycie paliwa: ${zużycie.toFixed(2)} litrów<br>Koszt przejazdu: ${koszt.toFixed(2)} PLN`;
}
