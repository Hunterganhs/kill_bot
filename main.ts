input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10000000000000; index++) {
        if (pop < 10) {
            cuteBot.motors(50, 50)
            light2.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(100)
            light2.clear()
        } else if (pop > 10) {
            cuteBot.motors(50, -50)
            light2.showColor(neopixel.colors(NeoPixelColors.Green))
            basic.pause(100)
            light2.clear()
        } else if (pop > 1) {
            cuteBot.moveTime(cuteBot.Direction.backward, 100, 1)
        }
    }
})
let pop = 0
let light2: neopixel.Strip = null
light2 = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
pop = cuteBot.ultrasonic(cuteBot.SonarUnit.Inches)
basic.forever(function () {
    basic.showNumber(2)
})
