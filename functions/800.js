const function800 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(3), r = i(1), s = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._onMouseOver = function () {
                e.texture = e.textureBtnStartIntensifyOn
            }, e._onMouseOut = function () {
                e.texture = e.textureBtnStartIntensifyOff
            }, e._onClick = function () {
                e.onClick()
            }, e.textureBtnStartIntensifyNone = o.REMODEL_POWERUP.getTexture(6), e.textureBtnStartIntensifyOn = o.REMODEL_POWERUP.getTexture(8), e.textureBtnStartIntensifyOff = o.REMODEL_POWERUP.getTexture(7), e.texture = e.textureBtnStartIntensifyNone, e.on(r.EventType.MOUSEOVER, e._onMouseOver), e.on(r.EventType.MOUSEOUT, e._onMouseOut), e.on(r.EventType.CLICK, e._onClick), e
        }

        return n(e, t), e.prototype.update = function (t) {
            this._updateClickable_(t)
        }, e.prototype._updateClickable_ = function (t) {
            this.texture = this.textureBtnStartIntensifyNone, this.interactive = this.buttonMode = !1, t && (this.texture = this.textureBtnStartIntensifyOff, this.interactive = this.buttonMode = !0)
        }, e.prototype.dispose = function () {
            this.off(r.EventType.MOUSEOVER), this.off(r.EventType.MOUSEOUT), this.off(r.EventType.CLICK), this.textureBtnStartIntensifyNone = null, this.textureBtnStartIntensifyOn = null, this.textureBtnStartIntensifyOff = null, this.onClick = null, this.interactive = this.buttonMode = !1, this.removeChildren()
        }, e
    }(PIXI.Sprite);
    e.StartButton = s
}