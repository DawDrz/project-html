function pokazDane(){
    var dane="Dane z wypełnionego formularza:\n";
    dane+="Imie: "+document.getElementById("imie").value+"\n";
    dane+="Nazwisko: "+document.getElementById("nazw").value+"\n";
    dane+="Wiek: "+document.getElementById("wiek").value+"\n";
    dane+="Plec: "+document.getElementById("plec").value+"\n";
    dane+="Email: "+document.getElementById("email").value+"\n";
    dane+="Preferowany sposob spedzania czasu: ";
    var pref=document.getElementsByName("pref");
    for(let i=0; i<pref.length; i++){
        if(pref[i].checked) dane+=pref[i].value+"\n";
    }
    dane+="Czas wycieczki: ";
    var czas=document.getElementsByName("czas");
    for(let i=0; i<czas.length; i++){
        if(czas[i].checked) dane+=czas[i].value+" ";
    }
    if (window.confirm(dane)) return true;
    else return false;

}

function sprawdzPole(pole_id,obiektRegex) {

    var obiektPole = document.getElementById(pole_id);
    if(!obiektRegex.test(obiektPole.value)) return false;
    else return true;
}
function sprawdz_radio(nazwa_radio){

    var obiekt=document.getElementsByName(nazwa_radio);
    for (i=0;i<obiekt.length;i++)
    { wybrany=obiekt[i].checked;
        if (wybrany) return true; }
    return false;
}
function sprawdz_box(box_id)
{
    var obiekt=document.getElementsByName(box_id);
    for (i=0;i<obiekt.length;i++)
    { wybrany=obiekt[i].checked;
        if (wybrany) return true;}
    return false;
}
function sprawdz()
{
    var ok=true;
    obiektImie = /^[a-zA-Z]{2,20}$/;
    obiektNazw = /^[a-zA-Z]{2,20}$/;
    obiektemail =
        /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
    obiektWiek=/^[1-9][0-9]{1,2}$/;

    if (!sprawdzPole("imie",obiektImie))
    { ok=false;
        document.getElementById("imie_error").innerHTML=
            "Wpisz poprawnie imie!";
    }
    else document.getElementById("imie_error").innerHTML="";
//Uzupełnij – sprawdz kolejne pola formularza
// if ...
    if (!sprawdzPole("nazw",obiektNazw))
    { ok=false;
        document.getElementById("nazw_error").innerHTML=
            "Wpisz poprawnie nazwisko!";
    }
    else document.getElementById("nazw_error").innerHTML="";
    if (!sprawdzPole("wiek",obiektWiek))
    { ok=false;
        document.getElementById("wiek_error").innerHTML="Wpisz poprawnie wiek!";
    }
    else document.getElementById("wiek_error").innerHTML="";

    if (!sprawdzPole("email",obiektemail))
    { ok=false;
        document.getElementById("email_error").innerHTML="Wpisz poprawnie email!";
    }
    else document.getElementById("email_error").innerHTML="";

    if (!sprawdz_box("pref"))
    { ok=false;
        document.getElementById("produkt_error").innerHTML="Wybierz preferowany sposób spędzania czasu!";
    }
    else document.getElementById("produkt_error").innerHTML="";

    if (!sprawdz_radio("czas"))
    { ok=false;
        document.getElementById("czas_error").innerHTML="Ustal czas trwania wycieczki!";
    }
    else document.getElementById("czas_error").innerHTML="";
    if (ok) return pokazDane();
    else return ok;
}
