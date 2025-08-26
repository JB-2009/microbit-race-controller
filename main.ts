input.onButtonPressed(Button.A, function () {
    radio.sendNumber(5)
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(3)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(7)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(6)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(4)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(8)
})
basic.forever(function () {
    radio.setGroup(208)
    radio.setTransmitPower(7)
})
