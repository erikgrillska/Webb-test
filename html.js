document.getElementById('knapp').addEventListener('click', hit);

var colors1=0;
function hit()
{
    if(colors1==0)
    {
    document.body.style.backgroundColor="blue";
    colors1=1;
    }
    else if (colors1==1)
    {
        document.body.style.backgroundColor="red";
        colors1=2;
    }

    else
    {
        document.body.style.backgroundColor="green";
        colors1=0;
    } 
}