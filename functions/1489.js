const function1489 = function (t, e, i) {
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
    var o = i(1490),
        r = i(1491),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._value = 0, e._lights = [], e._nums = [];
                for (var i = 0; i < 4; i++) {
                    var n = new o.ResultDialogNumLight;
                    n.x = 68 - 23 * i, n.visible = !1, e.addChild(n), e._lights.push(n)
                }
                for (var i = 0; i < 4; i++) {
                    var s = new r.ResultDialogNum;
                    s.x = 68 - 23 * i, s.visible = !1, e.addChild(s), e._nums.push(s)
                }
                return e
            }
            return n(e, t), e.prototype.setValue = function (t) {
                this._value = Math.min(t, 9999);
                for (var e = this._value, i = 0; i < this._nums.length; i++) {
                    var n = this._nums[i],
                        o = this._lights[i],
                        r = e % 10;
                    n.update(r), o.update(r), n.visible = 0 != r || 0 != e, e = Math.floor(e / 10)
                }
            }, e.prototype.startLightAnimation = function () {
                this.stopLightAnimation(), this._light_tweens = [];
                for (var t = 0; t < this._lights.length; t++) {
                    var e = this._nums[t],
                        i = this._lights[t];
                    if (0 == e.visible) i.visible = !1;
                    else {
                        i.alpha = 0, i.visible = !0;
                        var n = createjs.Tween.get(i, {
                            loop: !0
                        }).to({
                            alpha: 1
                        }, 500).wait(500).to({
                            alpha: 0
                        }, 500).wait(500);
                        this._light_tweens.push(n)
                    }
                }
            }, e.prototype.stopLightAnimation = function () {
                if (null != this._light_tweens) {
                    for (var t = 0, e = this._light_tweens; t < e.length; t++) {
                        var i = e[t];
                        i.setPaused(!0), i = null
                    }
                    this._light_tweens = null
                }
            }, e
        }(PIXI.Container);
    e.ResultDialogNumSet = s
}