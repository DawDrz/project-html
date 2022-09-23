function zapisz()
{
    const Nazwa = document.getElementById('szczyt').value;
    const Wysokosc = document.getElementById('wysokosc').value;
    const Trudnosc = document.getElementsByName('stopien');
    localStorage.setItem(Nazwa, Wysokosc, Trudnosc);
}

function pokaz()
{
    var tresc='';
    var end_div = "</div><br>";
    var stopien = document.getElementsByName('stopien');
    for(var i=0;i<localStorage.length;i++)
    {
        var klucz = localStorage.key(i);
        var wartosc = localStorage.getItem(klucz);
        tresc=tresc+'Nazwa szczytu: '+klucz+'   '+'Wysokość: '+wartosc+' stopien trudnosci: ';
        for (let i=0; i<stopien.length; i++)
        {
            if(stopien[i].checked) tresc=tresc+stopien[i].value;
        }
        tresc=tresc+end_div;
    }
    document.getElementById('dane').innerHTML = tresc;
}

function usun()
{
    localStorage.clear();
}