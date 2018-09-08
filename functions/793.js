const function793 = function (t, e, i) {
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
            e._onMouseOver = function () {
                e.texture = e.textureBtnStartIntensifyOn
            }, e._onMouseOut = function () {
                e.texture = e.textureBtnStartIntensifyOff
            }, e._onClick = function () {
                e.onClick()
            };
            var i = o.REMODEL_POWERUP.getTexture(6), n = o.REMODEL_POWERUP.getTexture(8),
                s = o.REMODEL_POWERUP.getTexture(7);
            return e.textureBtnStartIntensifyNone = i, e.textureBtnStartIntensifyOn = n, e.textureBtnStartIntensifyOff = s, e.texture = i, e.addListener(r.EventType.MOUSEOVER, e._onMouseOver), e.addListener(r.EventType.MOUSEOUT, e._onMouseOut), e.addListener(r.EventType.CLICK, e._onClick), e
        }

        return n(e, t), e.prototype.update = function (t) {
            this._updateClickable_(t)
        }, e.prototype._updateClickable_ = function (t) {
            this.texture = this.textureBtnStartIntensifyNone, this.interactive = this.buttonMode = !1, t && (this.texture = this.textureBtnStartIntensifyOff, this.interactive = this.buttonMode = !0)
        }, e.prototype.dispose = function () {
            this.removeAllListeners(r.EventType.MOUSEOVER), this.removeAllListeners(r.EventType.MOUSEOUT), this.removeAllListeners(r.EventType.CLICK), this.textureBtnStartIntensifyNone = null, this.textureBtnStartIntensifyOn = null, this.textureBtnStartIntensifyOff = null, this.onClick = null, this._onMouseOver = this._onMouseOut = this._onClick = null, this.interactive = this.buttonMode = !1, this.texture = PIXI.Texture.EMPTY, this.removeChildren()
        }, e
    }(PIXI.Sprite);
    e.StartButton = s
}