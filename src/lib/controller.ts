class XInputGamepad {
    gamepad: Gamepad;

    get A() {
        return this.gamepad.buttons[0].pressed;
    };

    get B() {
        return this.gamepad.buttons[1].pressed;
    };

    get X() {
        return this.gamepad.buttons[2].pressed;
    };

    get Y() {
        return this.gamepad.buttons[3].pressed;
    };

    get LB() {
        return this.gamepad.buttons[4].pressed;
    };

    get RB() {
        return this.gamepad.buttons[5].pressed;
    };

    get LT() {
        return this.gamepad.buttons[6].pressed;
    };

    get RT() {
        return this.gamepad.buttons[7].pressed;
    };

    get Select() {
        return this.gamepad.buttons[8].pressed;
    };

    get Start() {
        return this.gamepad.buttons[9].pressed;
    };

    get LSPushed() {
        return this.gamepad.buttons[10].pressed;
    };

    get RSPushed() {
        return this.gamepad.buttons[11].pressed;
    };

    get LS() {
        return this.gamepad.axes[4];
    };

    constructor(gamepad: Gamepad) {
        this.gamepad = gamepad;
    }
}

class Moga5XPlusGamepad extends XInputGamepad {
    gamepad: Gamepad;

    get A() {
        return this.gamepad.buttons[0].pressed;
    };

    get B() {
        return this.gamepad.buttons[1].pressed;
    };

    get X() {
        return this.gamepad.buttons[3].pressed;
    };

    get Y() {
        return this.gamepad.buttons[4].pressed;
    };

    get LB() {
        return this.gamepad.buttons[6].pressed;
    };

    get RB() {
        return this.gamepad.buttons[7].pressed;
    };

    get LT() {
        return this.gamepad.buttons[8].pressed;
    };

    get RT() {
        return this.gamepad.buttons[9].pressed;
    };

    get Select() {
        return this.gamepad.buttons[10].pressed;
    };

    get Start() {
        return this.gamepad.buttons[11].pressed;
    };

    get LSPushed() {
        return this.gamepad.buttons[13].pressed;
    };

    get RSPushed() {
        return this.gamepad.buttons[14].pressed;
    };

    get LT_Analog() {
        return this.gamepad.axes[3];
    };

    get RT_Analog() {
        return this.gamepad.axes[4];
    };

    get LS() {
        return this.gamepad.axes[4];
    };

    constructor(gamepad: Gamepad) {
        super(gamepad);
        super.gamepad = gamepad;
    }
}

var gamepads: Array<Gamepad> = [];

async function gamepadConnector(event: GamepadEvent) {
    gamepads[event.gamepad.index] = event.gamepad;
    console.log("Gamepad connected:", event.gamepad.id.split(" (")[0], "with ID", event.gamepad.index);
}

async function gamepadDisconnector(event: GamepadEvent) {
    gamepads[event.gamepad.index] = event.gamepad;
    console.log("Gamepad disconnected:", event.gamepad.id.split(" (")[0], "with ID", event.gamepad.index);
}

async function gamepadLoop() {
    gamepads = navigator.getGamepads();
    const gamepadUpdateEvent = new GamepadEvent('gamepadupdate', {"gamepad": navigator.getGamepads()[0]});
    window.dispatchEvent(gamepadUpdateEvent);
}

window.addEventListener("gamepadconnected", gamepadConnector);
window.addEventListener("gamepaddisconnected", gamepadDisconnector);

var gamepadLoopID = setInterval(gamepadLoop, 1);
