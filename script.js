const button = document.getElementById("buttonForMap");

function OpenMap()
{
    const form = document.getElementById("map");

    if (form.style.display=="flex")
    {
        form.style.display="none";
        button.innerHTML="Öppna karta";
    }
    else{
        form.style.display="flex";
        button.innerHTML="Stäng";
    }
}