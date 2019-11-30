const function440 = function (t, e, i) {
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
        r = i(436),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._icon = new r.CompDropItemIcon, e._icon.anchor.set(.5, 1), e._text = new o.TextBox(20, 16774898), e._text.position.set(17, -27), e.addChild(e._icon), e.addChild(e._text), e
            }
            return n(e, t), e.prototype.initialize = function (t, e) {
                this._icon.update(t), this._text.text = e.toString()
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._text.destroy()
            }, e
        }(PIXI.Container);
    e.CompDropItem = s
}