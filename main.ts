radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        xValue = value
    }
    if (name == "y") {
        yValue = value
    }
    if (name == "radlice") {
        pohyb_radlice = value
        if (pohyb_radlice == 1) {
            basic.showLeds(`
                . . # . .
                . # # # .
                . . # . .
                . . # . .
                . . . . .
                `)
        }
        if (pohyb_radlice == -1) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . . # . .
                . # # # .
                . . # . .
                `)
        }
    }
})
let pravy = 0
let levy = 0
let yValue = 0
let xValue = 0
let pohyb_radlice = 0
radio.setGroup(1)
let radlice = 10
pohyb_radlice = 0
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, radlice)
basic.forever(function () {
    levy = yValue - xValue
    pravy = yValue + xValue
    wuKong.setMotorSpeed(wuKong.MotorList.M1, Math.constrain(levy, -50, 50))
    wuKong.setMotorSpeed(wuKong.MotorList.M2, Math.constrain(pravy, -50, 50))
    if (radlice >= 0) {
        radlice = radlice + pohyb_radlice * 1
    } else {
        radlice = 0
    }
    if (radlice >= 40) {
        radlice = 40
    }
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, radlice)
})
