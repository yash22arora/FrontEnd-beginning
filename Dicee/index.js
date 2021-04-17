function diceroll()
{

    var p1=Math.floor(Math.random()*6)+1;
    var p2=Math.floor(Math.random()*6)+1;

    document.querySelector("img.img1").setAttribute("src","images/dice"+p1+".png");
    document.querySelector("img.img2").setAttribute("src","images/dice"+p2+".png");

    document.querySelector(".container h1").classList.add("result");

    if(p1>p2)
    {
        document.querySelector(".container h1").textContent="🚩 Player 1 wins!";
    }
    else if(p2>p1)
    {
        document.querySelector(".container h1").textContent="🚩 Player 2 wins!";

    }
    else
    document.querySelector(".container h1").textContent="🚩 Its a tie!";

}

