// change the values of `flavor`, `topping`, and `vessel` to test your code
const flavor = "strawberry";
const topping = "sprinkles";
const vessel = "wafer cone";

if((flavor == "vanilla" || flavor == "chocolate") && (topping == "sprinkles" || topping == "peanuts") && (vessel == "wafer cone" || vessel == "sugar cone")){
    console.log("Great choice! Your ice cream is at the next window.")
}else{
    console.log("Please check our menu and try again.")
}
