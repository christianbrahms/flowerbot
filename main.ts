basic.forever(function () {
    serial.writeLine("" + (pins.analogReadPin(AnalogPin.C16)))
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        basic.setLedColor(0x00ff00)
        if (pins.analogReadPin(AnalogPin.C16) < 450) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(2000)
            pins.digitalWritePin(DigitalPin.P0, 0)
            basic.pause(30000)
        }
    } else {
        basic.setLedColor(0xff0000)
    }
})
