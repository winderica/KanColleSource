const function1512 = function (t, e, i) {
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
    var o = i(4),
        r = i(5),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._name = new o.TextBox(24, 1949120), e._name.anchor.set(0, 0), e._name.position.set(r.default.width / 2, 48), e._name.alpha = 0, e.addChild(e._name), e
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this._name.text = t, this._name.position.x = r.default.width / 2 - Math.floor(this._name.width / 2)
            }, e.prototype.show = function () {
                var t = this;
                createjs.Tween.get(this._name).to({
                    alpha: 1
                }, 100).call(function () {
                    t.emit("complete")
                })
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._name.destroy()
            }, e
        }(PIXI.Container);
    e.LayerMapName = s
}