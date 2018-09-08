const function769 = function (t, e, i) {
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
            e._onClick = function () {
                e.onClick()
            }, e._onMouseOver = function () {
                e.texture = e.BTN_REMODEL_ON
            }, e._onMouseOut = function () {
                e.texture = e.BTN_REMODEL_OFF
            }, e.addListener(r.EventType.CLICK, e._onClick), e.addListener(r.EventType.MOUSEOVER, e._onMouseOver), e.addListener(r.EventType.MOUSEOUT, e._onMouseOut);
            var i = o.REMODEL_MAIN.getTexture(8), n = o.REMODEL_MAIN.getTexture(9),
                s = o.REMODEL_MAIN.getTexture(7);
            return e.BTN_REMODEL_NONE = s, e.BTN_REMODEL_OFF = i, e.BTN_REMODEL_ON = n, e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.removeAllListeners(r.EventType.CLICK), this.removeAllListeners(r.EventType.MOUSEOVER), this.removeAllListeners(r.EventType.MOUSEOUT), this.texture = PIXI.Texture.EMPTY, this.BTN_REMODEL_ON = null, this.BTN_REMODEL_OFF = null, this.BTN_REMODEL_NONE = null, this.onClick = this._onClick = null, this._onMouseOut = null, this._onMouseOver = null, this.removeChildren()
        }, e.prototype.update = function (t) {
            this.texture = this.BTN_REMODEL_NONE, this.interactive = this.buttonMode = !1, t && (this.texture = this.BTN_REMODEL_OFF, this.interactive = this.buttonMode = !0)
        }, e
    }(PIXI.Sprite);
    e.KaizoButton = s
}