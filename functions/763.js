const function763 = function (t, e, i) {
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
                return e._onMouseOver = function () {
                    e.interactive && (e.texture = o.SUPPLY_MAIN.getTexture(17))
                }, e._onMouseOut = function () {
                    e.interactive && (e.texture = o.SUPPLY_MAIN.getTexture(15))
                }, e._onClick = function () {
                    e.onClick()
                }, e.texture = o.SUPPLY_MAIN.getTexture(16), e.on(r.EventType.CLICK, e._onClick), e.on(r.EventType.MOUSEOVER, e._onMouseOver), e.on(r.EventType.MOUSEOUT, e._onMouseOut), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.onMouseOver = this._onMouseOver = null, this.onMouseOut = this._onMouseOut = null, this.onClick = this._onClick = null
            }, e.prototype.updateClickable = function (t) {
                this.interactive = this.buttonMode = t, this.texture = t ? o.SUPPLY_MAIN.getTexture(15) : o.SUPPLY_MAIN.getTexture(16)
            }, e
        }(PIXI.Sprite);
    e.SupplyAircraftButton = s
}