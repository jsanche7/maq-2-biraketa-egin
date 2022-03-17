DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 103)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 25)
})
