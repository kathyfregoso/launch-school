let x = "5";
x = x + 1;      // returns "51"

// What gets returned by y++ in the snippet below? Why?

let y = "5";
y++;

// returns the numeric value 5
// adding ++ to a string means that JS will coerce it into a number
// it then increments the value to 6, however the return value is 5 since the post-increment operator returns the original value of y