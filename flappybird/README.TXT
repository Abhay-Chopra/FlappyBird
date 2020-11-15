This folder should contain the following:
-index.html file
-style.css file
-flappybird.js file
-sky.png 
-flappybird-pipe.png

I used the following new methods in replacement of CodeHs methods:
-appendChild
-setInterval
-setTimeout
-querySelector
-EventListener

-transform (CSS div method)

Added pictures into the local file for convenience and for the HTML to
load faster.

Used let and const instead of var to avoid bugs.

Known minor bugs:
collision detection with the top pipe is a tiny bit off

Pseduo-code:

Create a div element which acts as the bird and gives allusion of moving
through pipes (seperate div).
Do all styling on a seperate css file so it is easy to use js method to update
the position of divs. 
Other reasoning is explained through the comments in the Js file + css file.
