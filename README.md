README

List of technologies used:
  html
    -link to font via google fonts
    -head tag to hold metadata
    -body to hold content of the page
    -nav bar in which the buttons for starting game and ------retrieving number of games played reside
    -used headers to differentiate between different sections of page
    -used divs to hold large portion of the content
    -hide sections of page to be used at later times
    -created input fields for user to enter information
    -used bootstrap classes to help format content
  css
    -activated font format taken from google fonts
    -used images via url's in order to display said pictures
    -modified size and presentation of images
    -modified content of elements within html using -properties typically used in css
    -used background colors to modify appearance of page
    -modified transparency of certain elements
  javascript
    -used hide function to make elements of html disappear for future use in code
    -used show function to allow hidden elements to appear in order for user to have a more linear interaction
    -activated event handlers in order to facilitate page interactivity
    -assigned predetermined functions to event handlers
    -imported and exported functions between multiple files
    -activated functions through the use of responses received from api
    -reset content of elements in order to allow for repeated use without having to reload page
    -stored information received from api for use at later time
    -created messages whenever an event happens to allow user to know what is happening as well as let user know what they should do
    -added text to html elements to facilitate ease of use
    -created custom arrays for use in game logic as well as storage of information
    -created function in order to evaluate game board based on predetermined set of values assigned to each individual box within the html page
    -used booleans to evalutate gamestate
    -created event functions that will trigger upon activation of event handlers from app.js
    -send data to api when event functions are called upon which, will in turn activate functions stored in ui.js
    used event.target to specify element in which event is targeting
    -use store.js file to temporarily store data for use at later times
    -display information received from api to user
    -change appearance of blocks whenever user hovers over -them to let user know what element they are currently at
    -switch between players each turn
    -stop functions from reloading page everytime they are run
    -add text to elements within html whenever a function is called
    -add values to preset arrays for later evaluation
    -increase turns everytime a click is activated
    -create function to evaluate game board and run game over functions if endgame scenarios are met
    -format data to api specifications
  api
    -communicate with api using ajax
    -recieve and evaluate data from api
    -send data written in specific format to api


Planning
  During the planning phase of the project, I had planned on writing the bulk of my program first. This step would be primarily done during or after the first day.  After writing a vague outline of my code, I wouldthen start to dynamically fix bugs that exist from this vague outline of my code.  My second day would be primarily dedicated to solving and fixing these bugs.  The third day would then be used to set up the api and allow for communication between the api and the local machine.  The fourth and final day would be dedicated to refining and preparing the final code for deployment as well as documentation of code.  During the development process of this project, I had hit many different problems with the api, primarily the specific format of data that the api wanted.  During this problem, I first turned to my colleagues in order to listen to their advice as well as garner any kind of help that I could possibly receive.  After this event, the problem with the data format would be solved by reformatting the data sent to the api as well as calling different functions used to populate that data.

Unsolved problems to be fixed in future iteractions
  some unsolved problems to be fixed in future iterations would be that I was unable to create an ai as well as a multiplayer mode for the game within the time restraint.  I would love to revisit this project at a later date to rectify these regrets.  I would also like to make the page more presentable and clean.

wireframes and user stories
  user stories
-as a developer, I want to be able to keep count of a players game records to track their elo
-as a spectator, I want to be able to watch a game so that i can improve
-when user first visits page, show sign in or sign up forms….both forms should b on either left or right side via blocks
-after sign in and sign up, change to main menu
-main menu should have a start game button
-there should be a nav bar at the top of the page with players games(games in total, game won, games lost)
-nav bar should also have a start new game button
-the game board should be 9 smaller blocks within one large block(the 9 blocks should be within an array)
-with the game board, the game board should be a total of 9 different div blocks each taking up 1/3 of the total board
-when the game starts, the default player should be an x
-when the player clicks on a block, the block should show the current players sign(x or o)
-after the player clicks on a block, the player(variable) should change(x or o should be tied to the player variable)
-create a condition in which the game ends(worse case scenario, map out each individual possible result)
-?search for adjacent blocks with same player sign
-?map out every win conditional
-use array [2, 7, 6, 9, 5, 1, 4, 3, 8] to create a tictactoe board
  -using this array will ensure that any winning combination will always be equal to 15
  -only the winning combinations in tictactoe will equal 15, any other combination will 			not be be equal to 15
-have turn counter which adds 1 after every click
-communicate with api after every turn
-turns will be populated within the store function on the local machine
-when game ends, turn will then be sent to api to be stored along with user information
-user information will consist of name, password, games won and lost(within games, there will also be an object for each game played with a value of won or lost(this will be a boolean value) as well as the number of turns taken in that match
-use .then and .catch for conditionals
-as a player, I want to be able to display a catch phrase so that my opponent knows i mean business
-As a player, I want to be able to change the board skin so that i can customize the appearance of the game
