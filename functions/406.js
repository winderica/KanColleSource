const function406 = function (t, e, i) {
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
    var o = i(4), r = i(129), s = i(169), a = i(1), _ = function (t) {
        function e(e, i, n) {
            var r = t.call(this) || this;
            return r._mst = null, r._onBuyBtnMouseOver = function () {
                null != r._mst && null != r._cb_onMouseOver && r._cb_onMouseOver(r._type, r._mst.description_at_shop)
            }, r._onBuyBtnMouseOut = function () {
                null != r._mst && null != r._cb_onMouseOut && r._cb_onMouseOut()
            }, r._onBuyBtnClick = function () {
                null != r._mst && null != r._cb_onClick && r._cb_onClick(r._type, r._mst)
            }, r._cb_onMouseOver = e, r._cb_onMouseOut = i, r._cb_onClick = n, r._img = new PIXI.Sprite, r.addChild(r._img), r._price = new o.TextBox(21, 16711680), r._price.anchor.x = 1, r.addChild(r._price), r._btn = new l(r._onBuyBtnMouseOver, r._onBuyBtnMouseOut, r._onBuyBtnClick), r.addChild(r._btn), r
        }

        return n(e, t), e.prototype.initialize = function (t) {
            this._type = t, 3 == t ? (this.texture = r.ITEM_ISHOP.getTexture(20), this._img.position.set(18, 4), this._price.position.set(100, 136), this._price.style.fill = 15898880, this._btn.position.set(6, 87)) : (0 == t ? this.texture = r.ITEM_ISHOP.getTexture(14) : 1 == t ? this.texture = r.ITEM_ISHOP.getTexture(18) : 2 == t && (this.texture = r.ITEM_ISHOP.getTexture(16)), this._img.position.set(31, 4), this._price.position.set(126, 136), this._price.style.fill = 16724736, this._btn.position.set(13, 85)), this._btn.initialize(t)
        }, e.prototype.update = function (t) {
            this._mst = t, null == t ? this.visible = !1 : (this._img.texture = s.getPayitemIcon(t.id), this._price.text = Math.floor(t.price).toString(), this.visible = !0)
        }, e.prototype.activate = function () {
            0 != this.visible && this._btn.activate()
        }, e.prototype.deactivate = function () {
            this._btn.deactivate()
        }, e.prototype.dispose = function () {
            this._cb_onMouseOver = null, this._cb_onMouseOut = null, this._cb_onClick = null, this.deactivate(), this.removeChildren(), this._price.destroy(), this._btn.dispose()
        }, e
    }(PIXI.Sprite);
    e.ItemIcon = _;
    var l = function (t) {
        function e(e, i, n) {
            var o = t.call(this) || this;
            return o._onMouseOver = function () {
                o._update(!0), null != o._cb_onMouseOver && o._cb_onMouseOver()
            }, o._onMouseOut = function () {
                o._update(!1), null != o._cb_onMouseOut && o._cb_onMouseOut()
            }, o._onClick = function () {
                null != o._cb_onClick && o._cb_onClick()
            }, o._cb_onMouseOver = e, o._cb_onMouseOut = i, o._cb_onClick = n, o.interactive = !0, o
        }

        return n(e, t), e.prototype.initialize = function (t) {
            this._type = t, this._update(!1)
        }, e.prototype.activate = function () {
            1 != this.buttonMode && (this.buttonMode = !0, this.on(a.EventType.MOUSEOVER, this._onMouseOver), this.on(a.EventType.MOUSEOUT, this._onMouseOut), this.on(a.EventType.CLICK, this._onClick))
        }, e.prototype.deactivate = function () {
            this.buttonMode = !1, this.off(a.EventType.MOUSEOVER, this._onMouseOver), this.off(a.EventType.MOUSEOUT, this._onMouseOut), this.off(a.EventType.CLICK, this._onClick)
        }, e.prototype.dispose = function () {
            this.deactivate(), this._cb_onMouseOver = null, this._cb_onMouseOut = null, this._cb_onClick = null
        }, e.prototype._update = function (t) {
            var e;
            e = 0 == t ? 3 == this._type ? 22 : 21 : 3 == this._type ? 23 : 24, this._texture = r.ITEM_ISHOP.getTexture(e)
        }, e
    }(PIXI.Sprite)
}