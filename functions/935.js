const function935 = function (t, e, i) {
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
    var o = i(26), r = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._bg = new PIXI.Sprite, e._bg.position.set(11, 0), e.addChild(e._bg), e._icon = new PIXI.Sprite, e._icon.position.set(0, 20), e.addChild(e._icon), e
        }

        return n(e, t), e.prototype.update = function (t) {
            3 == t ? (this._bg.texture = o.SALLY_AIRUNIT.getTexture(36), this._icon.texture = o.SALLY_AIRUNIT.getTexture(42), this.visible = !0) : 2 == t ? (this._bg.texture = o.SALLY_AIRUNIT.getTexture(35), this._icon.texture = o.SALLY_AIRUNIT.getTexture(41), this.visible = !0) : this.visible = !1
        }, e
    }(PIXI.Container);
    e.AirUnitPanelItemFatigueIcon = r
}