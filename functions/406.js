const function406 = function (t, e, i) {
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
    var o = i(0),
        r = i(4),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._arrow = new r.TextBox(22, 4999235), e._arrow.position.set(152, 20), e.addChild(e._arrow), e._from = new r.TextBox(24, 4999235), e._from.y = 20, e.addChild(e._from), e._tobe = new r.TextBox(24, 4999235), e._tobe.position.set(188, 20), e.addChild(e._tobe), e
            }
            return n(e, t), e.prototype.initialize = function (t, e) {
                void 0 === e && (e = 1), this.texture = o.default.resources.getUseitem(57, 0), this._arrow.text = "\u2192", this._from.text = t.toString(), this._from.x = 147 - this._from.width, this._tobe.text = (t - e).toString()
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._arrow.destroy(), this._from.destroy(), this._tobe.destroy()
            }, e
        }(PIXI.Sprite);
    e.MedalIcon = s
}