let reading = 0
let min = 0
led.setBrightness(122)
basic.forever(function () {
    min = 660
    pins.analogWritePin(AnalogPin.P2, 1023)
    basic.pause(500)
    reading = pins.analogReadPin(AnalogPin.P0)
    basic.pause(500)
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(500)
    led.plotBarGraph(
    reading - min,
    1023 - min
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
    }
    basic.pause(2000)
})
