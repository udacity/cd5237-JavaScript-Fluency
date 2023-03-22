/*
Practice: One Awesome Message
 */

/*
Code REQUIREMENTS
1. Create the following variables:
 - firstName
 - hobby
2. Create awesomeMessage variable, and set it to a message using string concatenation and the variables above. The awesomeMessage variable should use firstName and hobby.

3. The awesomeMessage variable should have the correct format, as shown below:
 - "Hi, my name is _. In my spare time, I like to __."

4. Print awesomeMessage variable to the console using log() method.

 */
 
 /*
Example:
 - Assuming, firstName would have been assigned to "Julia" and hobby would be assigned "play video games". It should 
   produce the following message:

   Hi, my name is Julia. In my spare time, I like to play video games.

 Be sure to include spaces and periods where necessary!
 */
 
 
const firstName = "Julia";
const hobby = "play video games"
let awesomeMessage = "Hi, my name is "+firstName+". In my spare time, I like to "+hobby+".";

console.log(awesomeMessage);
