const function821 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function () {
        function t() {}
        return t.getObj = function (t) {
            switch (t) {
                case 591:
                    return [{
                        x: -1300,
                        y: -1750,
                        scale: 2
                    }, {
                        x: -900,
                        y: -1700,
                        scale: 1
                    }, {
                        x: -1830,
                        y: -1270,
                        scale: 2
                    }, {
                        x: -600,
                        y: -900,
                        scale: 1.6
                    }, {
                        x: -740,
                        y: -235,
                        scale: 1.2
                    }];
                case 594:
                    return [{
                        x: -1250,
                        y: -2422,
                        scale: 2.56
                    }, {
                        x: -1379,
                        y: -2201,
                        scale: 1.37
                    }, {
                        x: -1948,
                        y: -677,
                        scale: 3.36
                    }, {
                        x: -1307,
                        y: -390,
                        scale: 1.68
                    }, {
                        x: -784,
                        y: -270,
                        scale: 1.77
                    }];
                case 599:
                    return [{
                        x: 400,
                        y: -3200,
                        scale: 2.4
                    }, {
                        x: -550,
                        y: -450,
                        scale: 2
                    }, {
                        x: -700,
                        y: -950,
                        scale: 1.6
                    }, {
                        x: -600,
                        y: -1250,
                        scale: 1.2
                    }, {
                        x: -600,
                        y: -260,
                        scale: 1.4
                    }];
                default:
                    return null
            }
        }, t.getObject = function (t, e, i) {
            var n;
            switch (t) {
                case 591:
                    return n = [function () {
                        i.wait(500).to({
                            x: 100,
                            y: -1070,
                            scaleX: 1.25,
                            scaleY: 1.25
                        }, 1e3, createjs.Ease.cubicOut).wait(400)
                    }, function () {
                        i.wait(200).to({
                            x: -1500,
                            y: -1990,
                            scaleX: 1.6,
                            scaleY: 1.6
                        }, 1200, createjs.Ease.cubicInOut).wait(100)
                    }, function () {
                        i.wait(300).to({
                            x: -805,
                            y: -290,
                            scaleX: .75,
                            scaleY: .75
                        }, 1e3, createjs.Ease.quadInOut).wait(500)
                    }, function () {
                        i.to({
                            x: -1230,
                            y: -1570,
                            scaleX: 2.5,
                            scaleY: 2.5
                        }, 300, createjs.Ease.cubicOut).wait(300)
                    }, function () {
                        i.to({
                            x: -3400,
                            y: -360,
                            scaleX: 2.6,
                            scaleY: 2.6
                        }, 800, createjs.Ease.cubicOut).wait(300)
                    }, function () {
                        i.to({
                            x: -3820,
                            y: -340,
                            scaleX: 2.9,
                            scaleY: 2.9
                        }, 100)
                    }, function () {
                        i.to({
                            x: -380,
                            y: 10,
                            scaleX: .85,
                            scaleY: .85
                        }, 1e3, createjs.Ease.quartOut)
                    }], n[e];
                case 594:
                    return n = [function () {
                        i.wait(500).to({
                            x: -343,
                            y: -2208,
                            scaleX: 1.36,
                            scaleY: 1.36
                        }, 1e3, createjs.Ease.cubicInOut).wait(400)
                    }, function () {
                        i.wait(200).to({
                            x: -799,
                            y: -904,
                            scaleX: 1.34,
                            scaleY: 1.34
                        }, 1200, createjs.Ease.cubicInOut)
                    }, function () {
                        i.wait(100).to({
                            x: -764,
                            y: -454,
                            scaleX: 2.74,
                            scaleY: 2.74
                        }, 800, createjs.Ease.quadInOut).wait(300)
                    }, function () {
                        i.to({
                            x: -2108,
                            y: -692,
                            scaleX: 2.4,
                            scaleY: 2.4
                        }, 300, createjs.Ease.cubicOut).wait(500)
                    }, function () {
                        i.to({
                            x: -994,
                            y: -569,
                            scaleX: 2.7,
                            scaleY: 2.7
                        }, 600, createjs.Ease.cubicOut)
                    }, function () {
                        i.to({
                            x: 425,
                            y: -5175,
                            scaleX: 3.5,
                            scaleY: 3.5
                        }, 600).wait(400).to({
                            x: 484,
                            y: -5955,
                            scaleX: 3.97,
                            scaleY: 3.97
                        }, 100)
                    }, function () {
                        i.to({
                            x: 53,
                            y: 104,
                            scaleX: .7,
                            scaleY: .7
                        }, 1e3, createjs.Ease.quartOut)
                    }], n[e];
                case 599:
                    return n = [function () {
                        i.wait(500).to({
                            x: -550,
                            y: -450,
                            scaleX: 2,
                            scaleY: 2
                        }, 1e3, createjs.Ease.cubicOut).wait(100)
                    }, function () {
                        i.to({
                            x: -700,
                            y: -950,
                            scaleX: 1.6,
                            scaleY: 1.6
                        }, 1200, createjs.Ease.cubicInOut)
                    }, function () {
                        i.wait(300).to({
                            x: -600,
                            y: -1250,
                            scaleX: 1.2,
                            scaleY: 1.2
                        }, 800, createjs.Ease.cubicIn).wait(700)
                    }, function () {
                        i.to({
                            x: -600,
                            y: -260,
                            scaleX: 1.4,
                            scaleY: 1.4
                        }, 2e3, createjs.Ease.circInOut).wait(400)
                    }, function () {}, function () {}, function () {
                        i.to({
                            x: 50,
                            y: 100,
                            scaleX: .7,
                            scaleY: .7
                        }, 1e3, createjs.Ease.quartOut)
                    }], n[e];
                default:
                    return function () {}
            }
        }, t.getSilhouetteAnim = function (t, e, i) {
            var n;
            switch (t) {
                case 591:
                    return n = [function () {
                        i.x += 5, createjs.Tween.get(i).wait(800).to({
                            alpha: .2
                        }, 600)
                    }, function () {
                        i.visible = !1
                    }], n[e];
                case 594:
                    return n = [function () {
                        i.x += 5, createjs.Tween.get(i).wait(500).to({
                            alpha: 0
                        }, 1e3)
                    }, function () {}], n[e];
                case 599:
                    return n = [function () {
                        i.x += 5, i.alpha = 0, createjs.Tween.get(i).wait(300).to({
                            alpha: .4
                        }, 200).wait(500).to({
                            alpha: 0
                        }, 1e3)
                    }, function () {}], n[e];
                default:
                    return function () {}
            }
        }, t
    }();
    e.SpKaizoConst = n
}