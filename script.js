const button = document.getElementById("buttonForMap");

function OpenMap()
{
    const form = document.getElementById("map");

    if (form.style.display=="none")
    {
        form.style.display="flex";
        button.innerHTML="Stäng";
    }
    else{
        form.style.display="none";
        button.innerHTML="Öppna karta";
    }
}