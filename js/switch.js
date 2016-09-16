var gameLevel = 1;

var password = "mellon";

var userName = prompt("Enter your name");
var passwordCheck;

function CheckPassword()
{
    switch (gameLevel) 
    {
        case 1:
            passwordCheck = prompt(userName + "speak friend and enter.");
            if (password == passwordCheck) 
            {
                gameLevel = 2;
            }
            CheckPassword();
            break;

        case 2:
            alert(gameLevel);
            break;

        case 3:

            break;

        default:
            break;
    }
}

CheckPassword();