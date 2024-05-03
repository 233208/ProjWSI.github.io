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
        var DProdTime = 3; // Czas produkcji deski
        var SSProdTime = 3; // Czas produkcji śrubek
        var NProdTime = 2; // Czas produkcji Nóżek

        if(ProdTime > When){
            alert("Nieprawidłowa wartość miesiąca. Proszę wprowadzić liczbę większą od czasu produkcji.");
            return;
        }
        console.log(When - ProdTime);
        if((When - ProdTime) <= 3) {  
            alert("MRP nie możliwe do obliczenia dla tych wartości. Proszę wprowadzić poprawne wartości.");
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
        var QMaterace = QNetto;
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
        var QNetto1 = QMaterace - WZM;
        Time = When1 - MProdTime;
        console.log(Time);


        // Sprawdź, czy miesiąc mieści się w zakresie od 1 do 12
        if (plannedMonth1 < 1 || plannedMonth1 > 12) {
            alert("Nieprawidłowa wartość miesiąca. Proszę wprowadzić liczbę od 1 do 12.");
            return;
        }

        var cellId = "NM" + Time + "a";
        document.getElementById(cellId).textContent = QNetto1;

        var cellId = "BM" + Time + "a";
        document.getElementById(cellId).textContent = QMaterace;

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
        QRam = QNetto;
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
        var QNetto2 = QRam - WZR;
        Time1 = When2 - RProdTime;
        // Sprawdź, czy miesiąc mieści się w zakresie od 1 do 12
        if (plannedMonth2 < 1 || plannedMonth2 > 12) {
            alert("Nieprawidłowa wartość miesiąca. Proszę wprowadzić liczbę od 1 do 12.");
            return;
        }

        var cellId = "NM" + Time1 + "b";
        document.getElementById(cellId).textContent = QNetto2;

        var cellId = "BM" + Time1 + "b";
        document.getElementById(cellId).textContent = QRam;

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
        var QNozki = QNetto2 * 4;

        // Sprawdź, czy wprowadzone wartości są poprawne
        if (isNaN(PotBrutto3) || isNaN(ProdTime3) || isNaN(When3)) {
            alert("Proszę wprowadzić poprawne wartości liczbowe.");
            return;
        }
        if (isNaN(WZN)) {
            WZN = 0;
        }

        // Oblicz, w którym miesiącu planowana jest produkcja
        var plannedMonth3 = When2 - ProdTime3;
        var QNetto3 = QNozki - WZN;
        Time2 = plannedMonth3;
        console.log(Time2);
        console.log(plannedMonth3);
        // Sprawdź, czy miesiąc mieści się w zakresie od 1 do 12
        if (plannedMonth3 < 1 || plannedMonth3 > 12) {
            alert("Nieprawidłowa wartość miesiąca. Proszę wprowadzić liczbę od 1 do 12.");
            return;
        }

        var cellId = "NM" + Before1 + "c";
        document.getElementById(cellId).textContent = QNetto3;

        var cellId = "BM" + Before1 + "c";
        document.getElementById(cellId).textContent = QNozki;

        for (var i = 1; i <= Before1; i++) {
            var cellId = "WZ" + i + "c";
            if (document.getElementById(cellId).textContent.trim() === "") {
                document.getElementById(cellId).textContent = WZN;
            }
        }


        Before2 = Before1 - 1;
        var cellId = "WP" + Before2 + "c";
        document.getElementById(cellId).textContent = QNetto3;
        
        var cellId = "ZO" + Before1 + "c";
        document.getElementById(cellId).textContent = QNetto3;
        
        //TABELA PIATA

        var PotBrutto4 = parseInt(document.getElementById("PotBrutto").value);
        var ProdTime4 = parseInt(document.getElementById("ProdTime").value);
        var When4 = parseInt(document.getElementById("When").value);
        var QStelazy = QNetto2;
        // Sprawdź, czy wprowadzone wartości są poprawne
        if (isNaN(PotBrutto4) || isNaN(ProdTime4) || isNaN(When4)) {
            alert("Proszę wprowadzić poprawne wartości liczbowe.");
            return;
        }
        if (isNaN(WZS)) {
            WZS = 0;
        }

        // Oblicz, w którym miesiącu planowana jest produkcja
        var plannedMonth4 = When2 - 4;
        var QNetto4 = QStelazy - WZS;
        Time3 = plannedMonth4;
        console.log(Time3);
        console.log(plannedMonth4);
        // Sprawdź, czy miesiąc mieści się w zakresie od 1 do 12
        if (plannedMonth4 < 1 || plannedMonth4 > 12) {
            alert("Nieprawidłowa wartość miesiąca. Proszę wprowadzić liczbę od 1 do 12.");
            return;
        }

        var cellId = "NM" + Before1 + "d";
        document.getElementById(cellId).textContent = QNetto4;

        var cellId = "BM" + Before1 + "d";
        document.getElementById(cellId).textContent = QStelazy;

        for (var i = 1; i <= Before1; i++) {
            var cellId = "WZ" + i + "d";
            if (document.getElementById(cellId).textContent.trim() === "") {
                document.getElementById(cellId).textContent = WZS;
            }
        }


        Before2 = Before1 - 1;
        var cellId = "WP" + Before2 + "d";
        document.getElementById(cellId).textContent = QNetto4;
        
        var cellId = "ZO" + Before1 + "d";
        document.getElementById(cellId).textContent = QNetto4;
        
        //TABELA SZÓSTA

        var PotBrutto5 = parseInt(document.getElementById("PotBrutto").value);
        var ProdTime5 = parseInt(document.getElementById("ProdTime").value);
        var When5 = parseInt(document.getElementById("When").value);
        var QDesek = QNetto4 * 15;
        // Sprawdź, czy wprowadzone wartości są poprawne
        if (isNaN(PotBrutto5) || isNaN(ProdTime5) || isNaN(When5)) {
            alert("Proszę wprowadzić poprawne wartości liczbowe.");
            return;
        }
        if (isNaN(WZD)) {
            WZD = 0;
        }

        // Oblicz, w którym miesiącu planowana jest produkcja
        var plannedMonth5 = When2 - 4;
        var QNetto5 = QDesek - WZD;
        Time4 = plannedMonth5;
        console.log(Time3);
        console.log(plannedMonth5);
        // Sprawdź, czy miesiąc mieści się w zakresie od 1 do 12
        if (plannedMonth5 < 1 || plannedMonth5 > 12) {
            alert("Nieprawidłowa wartość miesiąca. Proszę wprowadzić liczbę od 1 do 12.");
            return;
        }

        var cellId = "NM" + Before2 + "e";
        document.getElementById(cellId).textContent = QNetto5;

        var cellId = "BM" + Before2 + "e";
        document.getElementById(cellId).textContent = QDesek;

        for (var i = 1; i <= Before2; i++) {
            var cellId = "WZ" + i + "e";
            if (document.getElementById(cellId).textContent.trim() === "") {
                document.getElementById(cellId).textContent = WZD;
            }
        }


        Before3 = Before2 - 1;
        var cellId = "WP" + Before3 + "e";
        document.getElementById(cellId).textContent = QNetto5;
        
        var cellId = "ZO" + Before2 + "e";
        document.getElementById(cellId).textContent = QNetto5;

        //TABELA SIÓDMA

        var PotBrutto6 = parseInt(document.getElementById("PotBrutto").value);
        var ProdTime6 = parseInt(document.getElementById("ProdTime").value);
        var When6 = parseInt(document.getElementById("When").value);
        var QSSrubek = QNetto4 * 35;
        // Sprawdź, czy wprowadzone wartości są poprawne
        if (isNaN(PotBrutto6) || isNaN(ProdTime6) || isNaN(When6)) {
            alert("Proszę wprowadzić poprawne wartości liczbowe.");
            return;
        }
        if (isNaN(WZSS)) {
            WZSS = 0;
        }

        // Oblicz, w którym miesiącu planowana jest produkcja
        var plannedMonth6 = When2 - 4;
        var QNetto6 = QSSrubek - WZSS;
        Time5 = plannedMonth6;

        // Sprawdź, czy miesiąc mieści się w zakresie od 1 do 12
        if (plannedMonth6 < 1 || plannedMonth6 > 12) {
            alert("Nieprawidłowa wartość miesiąca. Proszę wprowadzić liczbę od 1 do 12.");
            return;
        }

        var cellId = "NM" + Before2 + "f";
        document.getElementById(cellId).textContent = QNetto6;

        var cellId = "BM" + Before2 + "f";
        document.getElementById(cellId).textContent = QSSrubek;

        for (var i = 1; i <= Before2; i++) {
            var cellId = "WZ" + i + "f";
            if (document.getElementById(cellId).textContent.trim() === "") {
                document.getElementById(cellId).textContent = WZSS;
            }
        }


        Before3 = Before2 - 1;
        var cellId = "WP" + Before3 + "f";
        document.getElementById(cellId).textContent = QNetto6;
        
        var cellId = "ZO" + Before2 + "f";
        document.getElementById(cellId).textContent = QNetto6;


        if(QNetto < 0 || QNetto1 < 0 || QNetto2 < 0 || QNetto3 < 0 || QNetto4 < 0 || QNetto5 < 0 || QNetto6 < 0){
            alert("Podane dane porwadzą do liczby negatywnej dla kolejnych tabeli.");
            return;

        }




        // Widocznosc tabeli

        var hiddenHeading = document.querySelector("#Table0"); // Poprawiony selektor
        hiddenHeading.style.display = "block";

        
        var hiddenHeading = document.querySelector("#Tabela1"); // Poprawiony selektor
        hiddenHeading.style.display = "block";   


        var hiddenHeading = document.querySelector("#Tabela2"); // Poprawiony selektor
        hiddenHeading.style.display = "block";   

        var hiddenHeading = document.querySelector("#Tabela3"); // Poprawiony selektor
        hiddenHeading.style.display = "block";  

        var hiddenHeading = document.querySelector("#Tabela4"); // Poprawiony selektor
        hiddenHeading.style.display = "block";  

        var hiddenHeading = document.querySelector("#Tabela5"); // Poprawiony selektor
        hiddenHeading.style.display = "block"; 

        var hiddenHeading = document.querySelector("#Tabela6"); // Poprawiony selektor
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
