const function784 = function (t, e, i) {
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
    var o = i(3),
        r = i(1),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._onClick = function () {
                    e.onClick()
                }, e._onMouseOver = function () {
                    e.texture = e.texture_on
                }, e._onMouseOut = function () {
                    e.texture = e.texture_off
                }, e.texture_on = o.REMODEL_MAIN.getTexture(5), e.texture_off = o.REMODEL_MAIN.getTexture(4), e.texture_none = o.REMODEL_MAIN.getTexture(3), e.on(r.EventType.CLICK, e._onClick), e.on(r.EventType.MOUSEOVER, e._onMouseOver), e.on(r.EventType.MOUSEOUT, e._onMouseOut), e.interactive = e.buttonMode = !0, e
            }
            return n(e, t), e.prototype.update = function (t) {
                this.texture = this.texture_none, this.interactive = this.buttonMode = !1, t && (this.texture = this.texture_off, this.interactive = this.buttonMode = !0)
            }, e.prototype.dispose = function () {
                this.off(r.EventType.CLICK), this.off(r.EventType.MOUSEOVER), this.off(r.EventType.MOUSEOUT), this.onClick = null, this.texture_on = null, this.texture_off = null, this.texture_none = null, this.removeChildren()
            }, e
        }(PIXI.Sprite);
    e.KindaikaButton = s
}