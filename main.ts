radio.onReceivedNumber(function (receivedNumber) {
    outdoortemp = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.temperature()))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (outdoortemp))
})
let outdoortemp = 0
radio.setGroup(23)
basic.forever(function () {
    radio.sendNumber(input.temperature())
})
