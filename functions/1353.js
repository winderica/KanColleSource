const function1353 = function (t, e, i) {
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
    var o = i(454),
        r = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype._resume = function () {
                var t = this,
                    e = this._base_pos,
                    i = this._friend ? 1 : -1;
                createjs.Tween.get(this._view.chara).call(function () {
                    t._view.emit("attack"), t._shipFlash.play()
                }).wait(135).wait(200).to({
                    x: e.x + 78 * i,
                    alpha: 0
                }, 466).call(function () {
                    t._ship_sprite.parent.removeChild(t._ship_sprite), t._endTask()
                })
            }, e
        }(o.CutinDouble1);
    e.CutinDouble3 = r
}