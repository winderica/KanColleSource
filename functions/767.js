const function767 = function (t, e, i) {
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
                e.texture = e.BTN_INTENSIFY_ON
            }, e._onMouseOut = function () {
                e.texture = e.BTN_INTENSIFY_OFF
            };
            var i = o.REMODEL_MAIN.getTexture(5), n = o.REMODEL_MAIN.getTexture(4),
                s = o.REMODEL_MAIN.getTexture(3);
            return e.addListener(r.EventType.CLICK, e._onClick), e.addListener(r.EventType.MOUSEOVER, e._onMouseOver), e.addListener(r.EventType.MOUSEOUT, e._onMouseOut), e.BTN_INTENSIFY_ON = i, e.BTN_INTENSIFY_OFF = n, e.BTN_INTENSIFY_NONE = s, e.interactive = e.buttonMode = !0, e
        }

        return n(e, t), e.prototype.update = function (t) {
            this.texture = this.BTN_INTENSIFY_NONE, this.interactive = this.buttonMode = !1, t && (this.texture = this.BTN_INTENSIFY_OFF, this.interactive = this.buttonMode = !0)
        }, e.prototype.dispose = function () {
            this.removeAllListeners(r.EventType.CLICK), this.removeAllListeners(r.EventType.MOUSEOVER), this.removeAllListeners(r.EventType.MOUSEOUT), this.interactive = this.buttonMode = !1, this.onClick = this._onClick = null, this._onMouseOver = null, this._onMouseOut = null, this.texture = PIXI.Texture.EMPTY, this.BTN_INTENSIFY_ON = null, this.BTN_INTENSIFY_OFF = null, this.BTN_INTENSIFY_NONE = null, this.removeChildren()
        }, e
    }(PIXI.Sprite);
    e.KindaikaButton = s
}