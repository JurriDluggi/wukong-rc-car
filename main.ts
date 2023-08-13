radio.onReceivedValue(function (name, value) {
    // X Y is the rocker value 
    if (name == "x") {
        direction = value
    }
    if (name == "y") {
        speed = value
    }
})
let speed = 0
let direction = 0
radio.setGroup(1)
direction = 0
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, Math.constrain(direction, -10, 10))
music.setVolume(255)
music.play(music.stringPlayable("C F C F C F C F ", 180), music.PlaybackMode.InBackground)
basic.forever(function () {
    let radlice = 0
    wuKong.setMotorSpeed(wuKong.MotorList.M1, Math.constrain(speed, -100, 100))
    wuKong.setMotorSpeed(wuKong.MotorList.M2, Math.constrain(direction, -10, 10))
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, radlice)
    if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P0) < 5) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 0)
    }
})
