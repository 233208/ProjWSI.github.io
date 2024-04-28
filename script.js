// Zmienna globalna przechowująca poprzednią wartość 'When'

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculate").addEventListener("click", function() {
        // Pobierz wartości z pól formularza
        var PotBrutto = parseInt(document.getElementById("PotBrutto").value);
        var ProdTime = parseInt(document.getElementById("ProdTime").value);
        var When = parseInt(document.getElementById("When").value);
        var WZL = parseInt(document.getElementById("WZL").value); // Wstęny Zapas Łóżek
        var WZM = parseInt(document.getElementById("WZM").value); // Wstęny Zapas Materacy
        var WZR = parseInt(document.getElementById("WZR").value); // Wstęny Zapas Ram
        var WZS = parseInt(document.getElementById("WZS").value); // Wstęny Zapas Stelaży
        var WZD = parseInt(document.getElementById("WZD").value); // Wstęny Zapas Desek
        var WZSS = parseInt(document.getElementById("WZSS").value); // Wstęny Zapas Śrubek
        var WZN = parseInt(document.getElementById("WZN").value); // Wstęny Zapas Nóżek
        var MProdTime = 1; // Czas produkcji materaca
        var RProdTime = 1; // Czas produkcji ramy
        var SProdTime = 2; // Czas produkcji stelaża
        var DProdTime = 2; // Czas produkcji deski
        var SSProdTime = 3; // Czas produkcji śrubek
        var NProdTime = 3; // Czas produkcji Nóżek

        if(ProdTime > When){
            alert("Nieprawidłowa wartość miesiąca. Proszę wprowadzić liczbę większą od czasu produkcji.");
            return;
        }
        console.log(When - ProdTime);
        if((When - ProdTime) <= 3) {  
            alert("MRP nie możliwe do oblcizenia dla tych wartości. Proszę wprowadzić poprawne wartości.");
            return;
        }

        // Sprawdź, czy wprowadzone wartości są poprawne
        if (isNaN(PotBrutto) || isNaN(ProdTime) || isNaN(When)) {
            alert("Proszę wprowadzić poprawne wartości liczbowe.");
            return;
        }
        if (isNaN(WZL)) {
            WZL = 0;
        }
        // Oblicz, w którym miesiącu planowana jest produkcja
        var plannedMonth = When - ProdTime;
        var QNetto = PotBrutto - WZL;

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
                document.getElementById(cellId).textContent = WZL;
            }
        }

        var cellId = "WP" + plannedMonth;
        document.getElementById(cellId).textContent = QNetto;
        
        var cellId = "ZO" + When;
        document.getElementById(cellId).textContent = QNetto;
    
        // DRUGA TABELA

        var PotBrutto1 = parseInt(document.getElementById("PotBrutto").value);
        var ProdTime1 = parseInt(document.getElementById("ProdTime").value);
        var When1 = parseInt(document.getElementById("When").value);
        
        // Sprawdź, czy wprowadzone wartości są poprawne
        if (isNaN(PotBrutto1) || isNaN(ProdTime1) || isNaN(When1)) {
            alert("Proszę wprowadzić poprawne wartości liczbowe.");
            return;
        }
        if (isNaN(WZM)) {
            WZM = 0;
        }
        // Oblicz, w którym miesiącu planowana jest produkcja
        var plannedMonth1 = When1 - 2;
        var QNetto1 = PotBrutto1 - WZM;
        Time = When1 - MProdTime;
        console.log(Time);


        // Sprawdź, czy miesiąc mieści się w zakresie od 1 do 12
        if (plannedMonth1 < 1 || plannedMonth1 > 12) {
            alert("Nieprawidłowa wartość miesiąca. Proszę wprowadzić liczbę od 1 do 12.");
            return;
        }

        // Zmiana stylu dla h1 o klasie hidden na widoczny
        var hiddenHeading = document.querySelector("#Table1"); // Poprawiony selektor
        hiddenHeading.style.display = "block";

        var cellId = "NM" + Time + "a";
        document.getElementById(cellId).textContent = QNetto1;

        var cellId = "BM" + Time + "a";
        document.getElementById(cellId).textContent = PotBrutto1;

        for (var i = 1; i <= Time; i++) {
            var cellId = "WZ" + i + "a";
            if (document.getElementById(cellId).textContent.trim() === "") {
                document.getElementById(cellId).textContent = WZM;
            }
        }

        Before0 = plannedMonth - 1;

        var cellId = "WP" + Before0 + "a";
        document.getElementById(cellId).textContent = QNetto1;
        
        var cellId = "ZO" + Time + "a";
        document.getElementById(cellId).textContent = QNetto1;    
        




        // TRZECIA TABELA

        var PotBrutto2 = parseInt(document.getElementById("PotBrutto").value);
        var ProdTime2 = parseInt(document.getElementById("ProdTime").value);
        var When2 = parseInt(document.getElementById("When").value);

        // Sprawdź, czy wprowadzone wartości są poprawne
        if (isNaN(PotBrutto2) || isNaN(ProdTime2) || isNaN(When2)) {
            alert("Proszę wprowadzić poprawne wartości liczbowe.");
            return;
        }
        if (isNaN(WZR)) {
            WZR = 0;
        }
        // Oblicz, w którym miesiącu planowana jest produkcja
        var plannedMonth2 = When2 - 2;
        var QNetto2 = PotBrutto1 - WZR;
        Time1 = When2 - RProdTime;
        // Sprawdź, czy miesiąc mieści się w zakresie od 1 do 12
        if (plannedMonth2 < 1 || plannedMonth2 > 12) {
            alert("Nieprawidłowa wartość miesiąca. Proszę wprowadzić liczbę od 1 do 12.");
            return;
        }

        // Zmiana stylu dla h1 o klasie hidden na widoczny
        var hiddenHeading = document.querySelector("#Table1"); // Poprawiony selektor
        hiddenHeading.style.display = "block";

        var cellId = "NM" + Time1 + "b";
        document.getElementById(cellId).textContent = QNetto2;

        var cellId = "BM" + Time1 + "b";
        document.getElementById(cellId).textContent = PotBrutto2;

        for (var i = 1; i <= Time1; i++) {
            var cellId = "WZ" + i + "b";
            if (document.getElementById(cellId).textContent.trim() === "") {
                document.getElementById(cellId).textContent = WZR;
            }
        }
        Before1 = plannedMonth - 1;
        var cellId = "WP" + Before1 + "b";
        document.getElementById(cellId).textContent = QNetto2;
        
        var cellId = "ZO" + Time1 + "b";
        document.getElementById(cellId).textContent = QNetto2;





        //TABELA CZWARTA

        var PotBrutto3 = parseInt(document.getElementById("PotBrutto").value);
        var ProdTime3 = parseInt(document.getElementById("ProdTime").value);
        var When3 = parseInt(document.getElementById("When").value);

        // Sprawdź, czy wprowadzone wartości są poprawne
        if (isNaN(PotBrutto3) || isNaN(ProdTime3) || isNaN(When3)) {
            alert("Proszę wprowadzić poprawne wartości liczbowe.");
            return;
        }
        if (isNaN(WZR)) {
            WZS = 0;
        }
        // Oblicz, w którym miesiącu planowana jest produkcja
        var plannedMonth3 = When3 - 2;
        var QNetto3 = PotBrutto1 - WZR;
        Time1 = When3 - RProdTime;
        // Sprawdź, czy miesiąc mieści się w zakresie od 1 do 12
        if (plannedMonth2 < 1 || plannedMonth2 > 12) {
            alert("Nieprawidłowa wartość miesiąca. Proszę wprowadzić liczbę od 1 do 12.");
            return;
        }

        // Zmiana stylu dla h1 o klasie hidden na widoczny
        var hiddenHeading = document.querySelector("#Table1"); // Poprawiony selektor
        hiddenHeading.style.display = "block";

        var cellId = "NM" + Time1 + "c";
        document.getElementById(cellId).textContent = QNetto2;

        var cellId = "BM" + Time1 + "c";
        document.getElementById(cellId).textContent = PotBrutto2;

        for (var i = 1; i <= Time1; i++) {
            var cellId = "WZ" + i + "c";
            if (document.getElementById(cellId).textContent.trim() === "") {
                document.getElementById(cellId).textContent = WZR;
            }
        }

        var cellId = "WP" + plannedMonth2 + "c";
        document.getElementById(cellId).textContent = QNetto2;
        
        var cellId = "ZO" + Time1 + "c";
        document.getElementById(cellId).textContent = QNetto2;
        












        // Widocznosc tabeli

        var hiddenHeading = document.querySelector("#Table0"); // Poprawiony selektor
        hiddenHeading.style.display = "block";

        
        var hiddenHeading = document.querySelector("#Table1"); // Poprawiony selektor
        hiddenHeading.style.display = "block";   


        var hiddenHeading = document.querySelector("#Tabela2"); // Poprawiony selektor
        hiddenHeading.style.display = "block";   


    });

    
    
});


/*
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
*/