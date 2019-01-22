const function1207 = function (t, e, i) {
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
    var o = i(421),
        r = i(1),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._onMouseOver = function () {
                    e.texture = o.REVAMP_BOX.getTexture(9)
                }, e._onMouseOut = function () {
                    e.texture = o.REVAMP_BOX.getTexture(9)
                }, e._onClick = function () {
                    e.emit("dicision")
                }, e.interactive = !0, e
            }
            return n(e, t), e.prototype.initialize = function () {
                this.texture = o.REVAMP_BOX.getTexture(9)
            }, e.prototype.activate = function () {
                0 == this.buttonMode && (this.buttonMode = !0, this.on(r.EventType.MOUSEOVER, this._onMouseOver), this.on(r.EventType.MOUSEOUT, this._onMouseOut), this.on(r.EventType.CLICK, this._onClick))
            }, e.prototype.deactivate = function () {
                this.buttonMode = !1, this.off(r.EventType.MOUSEOVER, this._onMouseOver), this.off(r.EventType.MOUSEOUT, this._onMouseOut), this.off(r.EventType.CLICK, this._onClick)
            }, e.prototype._setTextture = function (t) {
                this.texture = t
            }, e
        }(PIXI.Sprite);
    e.BtnDicision = s
}