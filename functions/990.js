const function990 = function (t, e, i) {
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
    var o = i(53),
        r = i(1),
        s = function (t) {
            function e(e) {
                void 0 === e && (e = null);
                var i = t.call(this) || this;
                return i._onClick = function (t) {
                    t.stopPropagation(), null != i._click_cb && i._click_cb()
                }, i._click_cb = e, i._bg = new PIXI.Sprite, i._title = new PIXI.Sprite, i._number = new PIXI.Sprite, i._touch_area = new PIXI.Graphics, i._touch_area.on(r.EventType.CLICK, i._onClick), i.enabled = !0, i.addChild(i._bg), i.addChild(i._title), i.addChild(i._number), i.addChild(i._touch_area), i
            }
            return n(e, t), Object.defineProperty(e.prototype, "enabled", {
                get: function () {
                    return this._touch_area.interactive
                },
                set: function (t) {
                    this._touch_area.interactive = t, this._touch_area.buttonMode = t
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t) {
                this._type = t, this._touch_area.clear(), this._touch_area.beginFill(16711680, 0), 0 == t ? (this._bg.texture = o.SALLY_SORTIE.getTexture(0), this._title.texture = o.SALLY_SORTIE.getTexture(10), this._title.position.set(143, 62), this._title.visible = !1, this._number.position.set(233, 59), this._number.visible = !1, this._touch_area.drawRect(32, 18, 287, 48)) : 1 == t ? (this._bg.texture = o.SALLY_SORTIE.getTexture(6), this._title.texture = o.SALLY_SORTIE.getTexture(10), this._title.position.set(86, 54), this._title.visible = !1, this._number.position.set(176, 51), this._number.visible = !1, this._touch_area.drawRect(32, 18, 227, 36)) : 2 == t ? (this._bg.texture = o.SALLY_SORTIE.getTexture(1), this._title.texture = o.SALLY_SORTIE.getTexture(2), this._title.position.set(321, 26), this._title.visible = !1, this._number.position.set(332, 45), this._number.visible = !1, this._touch_area.drawRect(24, 27, 287, 36)) : 3 == t && (this._bg.texture = o.SALLY_SORTIE.getTexture(1), this._title.texture = o.SALLY_SORTIE.getTexture(2), this._title.position.set(250, 71), this._title.visible = !1, this._number.position.set(261, 90), this._number.visible = !1, this._touch_area.drawRect(24, 27, 287, 36)), this._touch_area.endFill()
            }, e.prototype.update = function (t) {
                var e = -1;
                0 == this._type || 1 == this._type ? (1 == t && (e = 11), 2 == t && (e = 12), 3 == t && (e = 13)) : (1 == t && (e = 3), 2 == t && (e = 4), 3 == t && (e = 5)), -1 == e ? (this._title.visible = !1, this._number.visible = !1) : (this._number.texture = o.SALLY_SORTIE.getTexture(e), this._title.visible = !0, this._number.visible = !0)
            }, e.prototype.dispose = function () {
                this._touch_area.off(r.EventType.CLICK, this._click_cb)
            }, e
        }(PIXI.Container);
    e.AirUnitBadge = s
}