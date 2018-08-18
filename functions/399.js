const function399 = function (t, e, i) {
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
    var o = i(0), r = i(1), s = i(4), a = i(3), _ = i(167), u = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._mst_id = -1, i._onMouseOver = function () {
                i._over.visible = !0
            }, i._onMouseOut = function () {
                i._over.visible = !1
            }, i._onClick = function () {
                null != i._cb_onClick && i._cb_onClick(i._mst_id)
            }, i._cb_onClick = e, i.beginFill(0, 0), i.drawRect(0, 0, 75, 75), i.endFill(), i._img = new PIXI.Sprite, i.addChild(i._img), i._count = new c, i.addChild(i._count), i._over = new PIXI.Sprite, i._over.position.set(-3, -3), i._over.visible = !1, i.addChild(i._over), i.interactive = !0, i
        }

        return n(e, t), e.prototype.initialize = function () {
            this._over.texture = a.ITEM_ILIST.getTexture(15), this._count.initialize()
        }, e.prototype.update = function (t, e) {
            this._mst_id = t, t <= 0 || e <= 0 ? this.visible = !1 : (this._img.texture = this._getTexture(t), this._count.update(e), this.visible = !0)
        }, e.prototype.activate = function () {
            0 != this.visible && 1 != this.buttonMode && (this.buttonMode = !0, this.on(r.EventType.MOUSEOVER, this._onMouseOver), this.on(r.EventType.MOUSEOUT, this._onMouseOut), this.on(r.EventType.CLICK, this._onClick))
        }, e.prototype.deactivate = function () {
            this.buttonMode = !1, this.off(r.EventType.MOUSEOVER, this._onMouseOver), this.off(r.EventType.MOUSEOUT, this._onMouseOut), this.off(r.EventType.CLICK, this._onClick)
        }, e.prototype.dispose = function () {
            this.deactivate()
        }, e.prototype._getTexture = function (t) {
            return o.default.resources.getUseitem(t, 0)
        }, e
    }(PIXI.Graphics);
    e.ItemIcon = u;
    var l = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype.initialize = function () {
            this._over.texture = a.ITEM_ILIST.getTexture(15), this._count.initialize(99)
        }, e.prototype._getTexture = function (t) {
            return _.getPayitemIcon(t)
        }, e
    }(u);
    e.PayItemIcon = l;
    var c = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._max = 0, e._bg = new PIXI.Sprite, e.addChild(e._bg), e._text = new s.TextBox(21, 16777215), e.addChild(e._text), e
        }

        return n(e, t), e.prototype.initialize = function (t) {
            void 0 === t && (t = 9999), this._max = t, this.update(0)
        }, e.prototype.update = function (t) {
            t = Math.max(t, 0), t = Math.min(t, this._max), this._text.text = t.toString();
            var e;
            t < 100 ? (e = 27, this._bg.position.set(36, 36), this._text.position.set(54 - Math.floor(this._text.width / 2), 42)) : t < 1e3 ? (e = 28, this._bg.position.set(25, 39), this._text.position.set(49 - Math.floor(this._text.width / 2), 42)) : (e = 29, this._bg.position.set(12, 40), this._text.position.set(43 - Math.floor(this._text.width / 2), 40)), this._bg.texture = a.ITEM_ILIST.getTexture(e)
        }, e
    }(PIXI.Container)
}