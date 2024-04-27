// Zmienna globalna przechowująca poprzednią wartość 'When'

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculate").addEventListener("click", function() {
        // Pobierz wartości z pól formularza
        var PotBrutto = parseInt(document.getElementById("PotBrutto").value);
        var Reserv = parseInt(document.getElementById("Reserv").value);
        var ProdTime = parseInt(document.getElementById("ProdTime").value);
        var When = parseInt(document.getElementById("When").value);
        
        // Sprawdź, czy wprowadzone wartości są poprawne
        if (isNaN(PotBrutto) || isNaN(Reserv) || isNaN(ProdTime) || isNaN(When)) {
            alert("Proszę wprowadzić poprawne wartości liczbowe.");
            return;
        }

        // Oblicz, w którym miesiącu planowana jest produkcja
        var plannedMonth = When - ProdTime;
        var QNetto = PotBrutto - Reserv;

        // Sprawdź, czy miesiąc mieści się w zakresie od 1 do 12
        if (plannedMonth < 1 || plannedMonth > 12) {
            alert("Nieprawidłowa wartość miesiąca. Proszę wprowadzić liczbę od 1 do 12.");
            return;
        }

        // Umieść ilość sztuk w odpowiedniej komórce tabeli
        var cellId = "NM" + When;
        document.getElementById(cellId).textContent = QNetto;

        var cellId = "BM" + When;
        document.getElementById(cellId).textContent = PotBrutto;

        for (var i = 1; i <= When; i++) {
            var cellId = "WZ" + i;
            if (document.getElementById(cellId).textContent.trim() === "") {
                document.getElementById(cellId).textContent = Reserv;
            }
        }

        var cellId = "WP" + plannedMonth;
        document.getElementById(cellId).textContent = QNetto;
        
        var cellId = "ZO" + When;
        document.getElementById(cellId).textContent = QNetto;

        // Aktualizacja zmiennej poprzedniWhen
        poprzedniWhen = When;
    });
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculate1").addEventListener("click", function() {
        // Pobierz wartości z pól formularza
        var PotBrutto1 = parseInt(document.getElementById("PotBrutto1").value);
        var Reserv1 = parseInt(document.getElementById("Reserv1").value);
        var ProdTime1 = parseInt(document.getElementById("ProdTime1").value);
        var When1 = parseInt(document.getElementById("When1").value);
        
        // Sprawdź, czy wprowadzone wartości są poprawne
        if (isNaN(PotBrutto1) || isNaN(Reserv1) || isNaN(ProdTime1) || isNaN(When1)) {
            alert("Proszę wprowadzić poprawne wartości liczbowe.");
            console.log(When1);
            console.log(PotBrutto1);
            console.log(ProdTime1);
            console.log("WZ" + When1 + "1");
            return;
        }

        // Oblicz, w którym miesiącu planowana jest produkcja
        var plannedMonth1 = When1 - ProdTime1;
        var QNetto1 = PotBrutto1 - Reserv1;

        // Sprawdź, czy miesiąc mieści się w zakresie od 1 do 12
        if (plannedMonth1 < 1 || plannedMonth1 > 12) {
            alert("Nieprawidłowa wartość miesiąca. Proszę wprowadzić liczbę od 1 do 12.");
            return;
        }

        // Umieść ilość sztuk w odpowiedniej komórce tabeli
        var cellId = "NM" + When1 + "1";
        document.getElementById(cellId).textContent = QNetto1;

        var cellId = "BM" + When1 + "1";
        document.getElementById(cellId).textContent = PotBrutto1;

        for (var i = 1; i <= When1; i++) {
            var cellId = "WZ" + i + "a"; 
            if (document.getElementById(cellId).textContent.trim() === "") {
                document.getElementById(cellId).textContent = Reserv1;
            }
        }
        

        var cellId = "WP" + plannedMonth1 + "1";
        document.getElementById(cellId).textContent = QNetto1;
        
        var cellId = "ZO" + When1 + "1";
        document.getElementById(cellId).textContent = QNetto1;

        
    });
});
