const function838 = function (t, e, i) {
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
    var o = i(5),
        r = i(1),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._onClick = function () {
                    e.onClick()
                };
                return e.beginFill(0, .5), e.drawRect(0, 103, o.default.width, o.default.height - 103), e.endFill(), e.interactive = !0, e.addListener(r.EventType.CLICK, e._onClick), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.onClick = this._onClick = null, this.clear(), this.removeAllListeners(r.EventType.CLICK)
            }, e
        }(PIXI.Graphics);
    e.BackAreaChoiceShip = s
}