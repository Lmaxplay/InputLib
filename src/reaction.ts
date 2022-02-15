console.log("Hello world");

var needsToReact: boolean = false;
var startTime = 0;
var faults = 0;
var pressedprev = false;
var highscore = Infinity;

document.getElementById("responsetime").innerHTML = "You haven't responded yet";
document.getElementById("highscore").innerHTML = "Highscore: " + highscore + " ms";

async function reactionUpdate(event: GamepadEvent) {
    var responsetime = (Date.now() - startTime);

    var xinputgp = new Moga5XPlusGamepad(event.gamepad);

    var rand = Math.random();
    if(rand <= 0.001 && needsToReact == false && xinputgp.RB == false) {
        needsToReact = true;
        startTime = Date.now();
    }
    
    if (xinputgp.RB == false) {
        pressedprev = false;
    }
    if (!needsToReact && xinputgp.RB == true && !pressedprev) {
        faults++;
        pressedprev = true;
    } else if (xinputgp.RB == true && !pressedprev) {
        pressedprev = true;
    }

    if(needsToReact && xinputgp.RB == false) {
        document.body.style.background = "red";
    } else if (needsToReact && xinputgp.RB == true) {
        if (responsetime <= 0) {
            responsetime = Infinity;
        }

        if (faults >= 30) {
            responsetime = Infinity;
            faults = 0;
        }

        faults = 0;

        if (highscore >= responsetime) {
            highscore = responsetime;
        }

        document.body.style.background = "white";
        if (responsetime != Infinity) {
            document.getElementById("responsetime").innerHTML = "You responded in " + responsetime + " ms";
        } else {
            document.getElementById("responsetime").innerHTML = "You may have tried to cheat cheated by trying to spam, please don't ";
        }
        document.getElementById("highscore").innerHTML = "Highscore: " + highscore + " ms";
        needsToReact = false;
    }
    document.getElementById("faults").innerHTML = "Faults: " + faults;
}

window.addEventListener("gamepadupdate", reactionUpdate);