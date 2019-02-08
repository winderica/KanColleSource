const function850 = function (t, e, i) {
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
                    e.texture = o.REPAIR_MAIN.getTexture(4)
                }, e._onMouseOut = function () {
                    e.texture = o.REPAIR_MAIN.getTexture(2)
                }, e.texture = o.REPAIR_MAIN.getTexture(2), e.on(r.EventType.CLICK, e._onClick).on(r.EventType.MOUSEOVER, e._onMouseOver).on(r.EventType.MOUSEOUT, e._onMouseOut), e.buttonMode = !0, e
            }
            return n(e, t), e.prototype.active = function () {
                this.texture = o.REPAIR_MAIN.getTexture(2), this.interactive = !0
            }, e.prototype.disable = function () {
                this.texture = o.REPAIR_MAIN.getTexture(3), this.interactive = !1
            }, e.prototype.dispose = function () {
                this.onClick = null, this.off(r.EventType.CLICK, this._onClick).off(r.EventType.MOUSEOVER, this._onMouseOver).off(r.EventType.MOUSEOUT, this._onMouseOut), this.texture = PIXI.Texture.EMPTY, this.interactive = this.buttonMode = !1
            }, e
        }(PIXI.Sprite);
    e.UseItemButton = s
}