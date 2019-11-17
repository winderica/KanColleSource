const function1031 = function (t, e, i) {
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
    var o = i(6),
        r = i(53),
        s = i(1),
        a = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._activated = !1, i._selected = !1, i._onMouseOver = function () {
                    i._updateState(!0)
                }, i._onMouseOut = function () {
                    i._updateState(!1)
                }, i._onClick = function () {
                    null != i._cb && 1 == i._btn.interactive && (o.SE.play("231"), i.deactivate(), i._updateState(!0), i._cb(i._type))
                }, i._cb = e, i
            }
            return n(e, t), e.prototype.setSelected = function (t) {
                this._selected = t, 1 == this._selected && 1 == this._activated && this.deactivate(), this._updateState(t)
            }, e.prototype.initialize = function (t) {
                this._type = t;
                var e, i;
                0 == t ? (e = 3, i = 4) : 1 == t ? (e = 5, i = 6) : (e = 7, i = 8), this._btn = new PIXI.Sprite(r.SALLY_PRACTICE.getTexture(e)), this._btn_on = new PIXI.Sprite(r.SALLY_PRACTICE.getTexture(i)), this._btn_on.position.set(-6, -7), this.addChild(this._btn), this.addChild(this._btn_on), this._updateState(!1)
            }, e.prototype.activate = function () {
                0 == this._activated && 0 == this._selected && (this._btn.interactive = this._btn.buttonMode = !0, this._btn.on(s.EventType.MOUSEOVER, this._onMouseOver), this._btn.on(s.EventType.MOUSEOUT, this._onMouseOut), this._btn.on(s.EventType.CLICK, this._onClick))
            }, e.prototype.deactivate = function () {
                this._btn.interactive = this._btn.buttonMode = !1, this._btn.off(s.EventType.MOUSEOVER, this._onMouseOver), this._btn.off(s.EventType.MOUSEOUT, this._onMouseOut), this._btn.off(s.EventType.CLICK, this._onClick)
            }, e.prototype.dispose = function () {
                this.deactivate()
            }, e.prototype._updateState = function (t) {
                1 == t ? (this._btn.alpha = 0, this._btn_on.visible = !0) : (this._btn.alpha = 1, this._btn_on.visible = !1)
            }, e
        }(PIXI.Container);
    e.BtnMatchingSelect = a
}