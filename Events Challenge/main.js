
//displays welcome/error message - turns outputDiv to green/red text for error
document.getElementById('submitButton').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput').value;
    const output = document.getElementById("outputDiv");


    if (nameInput !=="") {
        output.textContent = `Welcome, ${nameInput}!`; //uses the users input to welcome them
        output.style.backgroundColor='green'; //turns background green when submit/enter key is clicked
        output.style.color='black'; //makes text black
    } else {
        output.textContent = "Error: Please enter a name.";
        output.style.color='red'; //allows text to be red
        output.style.backgroundColor='white'; //easier to see red text with white background
    }
});



//allows enter key to be pressed/prevents submission (shows error message) if field is empty
const nameinput = document.getElementById('nameInput');
    nameinput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') { //allows the Enter key to be specified as an event key
            document.getElementById('submitButton').click(); //with Enter key hit, it will act as if the Submit button was pushed
        }
    });



//mouse event/coordinates
const mousetracker = document.getElementById('mouseTracker');
const coordinates = document.getElementById('coordinates');
function mouseTracker(event) {
    const x = event.clientX; //code allows the x coordinate to be found
    const y = event.clientY; //code allows the y coordinate to be found
    coordinates.textContent = (`Mouse Coordinates X: ${x}, Y: ${y}`); //gives the coordinates a place to present themselves to a user
}

document.addEventListener('mousemove', mouseTracker); //if the mouse moves, the coordinates will be shown/found 
