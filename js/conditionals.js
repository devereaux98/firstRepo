//This is a boolean var
var levelLocked = true;
//Number of attempts
var attempts = 5;
//Declares the function
function passwordPrompt()
{
    //This is a string var
    var myPassword = prompt("Enter password");
    if(myPassword == "ou812")
    {
        //If true this changes the bool to false
        levelLocked = false;
    }
    else
    {
        //decreases the attempts
        if (attempts > 0)
        {
            attempts --;
            passwordPrompt();
        }
    }
}
//Calls the function
passwordPrompt();

//This will text if levelLocked is true or false
if(levelLocked)
{
    alert("This level is locked");
}
else
{
    alert("The level is unlocked");
}