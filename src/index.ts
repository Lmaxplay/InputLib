console.log("Hello world");

function logGamepad(event: GamepadEvent) {
    var buttonarr: Array<string> = [];
    event.gamepad.buttons.forEach((item) => {
        buttonarr.push(item.pressed.toString());
    });

    var analogarr: Array<string> = [];
    event.gamepad.axes.forEach((item) => {
        analogarr.push(item.toString());
    });
    var xinputgp = new XInputGamepad(event.gamepad);
    console.log(xinputgp.RSPushed);
    document.getElementById("controller")!.innerHTML = buttonarr.join("<br>") + "<br>" + analogarr.join("<br>");
}

window.addEventListener("gamepadupdate", logGamepad);