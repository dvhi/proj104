// generation of random value
var y = Math.floor(Math.random() * 10 + 1);

var guess = 1

function submit()
{
    var x = document.getElementById("guessField").value;
}

if(x == y)
{
    alert("Congrats!!!!!!"+playername+"YOU GUESSED IT RIGHT IN"+guess+"GUESS");
    guess= 1;
}

else if(x > y)
{
    guess++;
    alert("OH-OH TRY A SMALLER NUMBER");
}
else
{
guess++;
alert("OH-OH TRY A BIGGER NUMBER");
}

function playAgain()
{
    y = Math.floor(Math.random() * 10 + 1);
}