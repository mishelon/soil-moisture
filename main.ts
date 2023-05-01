let reading = 0
led.setBrightness(64)
let ajuste = 650
basic.forever(function () {
    basic.pause(2000)
    pins.analogWritePin(AnalogPin.P2, 1023)
    basic.pause(500)
    reading = pins.analogReadPin(AnalogPin.P0)
    basic.pause(500)
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(500)
    led.plotBarGraph(
    reading - ajuste,
    1023 - ajuste
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
    }
})
