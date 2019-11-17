const function1284 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function (e, i) {
            function n() {
                this.constructor = e
            }
            t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
        }
    }();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(2),
        r = i(6),
        s = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._layer = e, i
            }
            return n(e, t), e.prototype._start = function () {
                this._preLoad()
            }, e.prototype._preLoad = function () {
                this._layer.initilize(), this._anim()
            }, e.prototype._anim = function () {
                var t = this,
                    e = function () {
                        for (var e = 0; e < t._layer.EFFECT_MAX / 2; e++) {
                            var i = t._layer.kiraPos[e];
                            t._layer.kirakira[e].position.set(i.x + 10, i.y + 25), t._layer.kirakira[e].visible = !0, createjs.Tween.get(t._layer.kirakira[e].scale).wait(70 * e).to({
                                x: 1,
                                y: 1
                            }, 140).to({
                                x: 0,
                                y: 0
                            }, 140)
                        }
                    };
                createjs.Tween.get(null).call(function () {
                    t._layer.get_flash.visible = !0, createjs.Tween.get(t._layer.get_flash.scale).to({
                        x: 2,
                        y: 2
                    }, 500), createjs.Tween.get(t._layer.get_flash).to({
                        alpha: 1
                    }, 500).to({
                        alpha: 0
                    }, 150), createjs.Tween.get(t._layer.white).wait(400).set({
                        visible: !0
                    }).to({
                        alpha: 1
                    }, 300).call(function () {
                        createjs.Tween.get(t._layer.txt_repair).wait(100).set({
                            visible: !0
                        }).to({
                            x: 77
                        }, 600, createjs.Ease.sineOut).to({
                            x: 47
                        }, 733)
                    })
                }).wait(133).call(function () {
                    r.SE.play("230")
                }).wait(2e3).call(function () {
                    createjs.Tween.get(t._layer.txt_repair).to({
                        x: -1107
                    }, 300, createjs.Ease.sineIn).set({
                        visible: !1
                    }), t._layer.ship_layer.visible = !0, createjs.Tween.get(t._layer.ship_layer).wait(180).to({
                        alpha: 1
                    }, 500), createjs.Tween.get(t._layer.ship_layer.scale).wait(180).to({
                        x: 1,
                        y: 1
                    }, 500, createjs.Ease.cubicOut)
                }).wait(680).call(function () {
                    e()
                }).wait(100 * (this._layer.EFFECT_MAX / 2 - 1) + 540).call(function () {
                    t._layer.white.alpha = 1;
                    for (var e = 0; e < t._layer.EFFECT_MAX / 2; e++) t._layer.kirakira[e].visible = !1;
                    createjs.Tween.get(t._layer.ship_layer.scale).to({
                        x: 2,
                        y: 2
                    }, 633), createjs.Tween.get(t._layer.ship_layer).to({
                        alpha: 0
                    }, 633), createjs.Tween.get(t._layer.white).to({
                        alpha: 0
                    }, 633).set({
                        visible: !1
                    })
                }).wait(1e3).call(function () {
                    t._endTask()
                })
            }, e
        }(o.TaskBase);
    e.TaskAnchorageRepairEffect = s
}