// < Less Than
// <= Less than or equal to
// >= Greater than or equal to
// = assign
// == compare
// != not equal

// + add
// += add to current value
// - subtract
// -= subtract from current value
// * multiply
// / divide

// ++ increment
// -- decrement

// && and


if (10 <= 20)
{
    console.log("10 is less than 20");
}

if (20 >= 10)
{
    console.log("20 is greater than 10");
}

if (1 == 1)
{
    console.log("One is equal to One");
}

if (10 != 1)
{
    console.log("5 is not equal to 1");
}

var apples = 10 + 5;
apples += apples;
apples - 10;
apples -= apples;
var oranges = 10 * 10;
oranges /= 5;
oranges ++;
oranges --;

if (apples >= 0 && oranges >= 2)
{
    console.log(apples);
    console.log(oranges);
}

if (apples < 0 || oranges >= 0)
{
    console.log("One statement is true");
}