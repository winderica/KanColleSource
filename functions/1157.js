const function1157 = function (t, e, i) {
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
    var o = i(1),
        r = i(4),
        s = i(108),
        a = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i._onMouseOverListItem = function (t) {
                    i._focusTo = t, i._focus.x = t.x - 6, i._focus.y = t.y - 4, i._focus.visible = !0
                }, i._onMouseOutListItem = function (t) {
                    i._focusTo == t && (i._focusTo = null, i._focus.visible = !1)
                }, i._items = [];
                for (var n = 0; n < 10; n++) {
                    var o = new _(i._onMouseOverListItem, i._onMouseOutListItem, e);
                    o.y = 45 * n, i.addChild(o), i._items.push(o)
                }
                return i._focus = new PIXI.Sprite, i.addChild(i._focus), i
            }
            return n(e, t), e.prototype.initialize = function () {
                this.texture = s.ITEM_FSHOP.getTexture(22);
                for (var t = 0, e = this._items; t < e.length; t++) {
                    e[t].initialize()
                }
                this._focus.texture = s.ITEM_FSHOP.getTexture(23)
            }, e.prototype.update = function (t) {
                for (var e = 0; e < this._items.length; e++) {
                    var i = this._items[e];
                    e < t.length ? (i.update(t[e]), i.visible = !0) : i.visible = !1
                }
            }, e.prototype.activate = function () {
                for (var t = 0, e = this._items; t < e.length; t++) {
                    e[t].activate()
                }
            }, e.prototype.deactivate = function () {
                for (var t = 0, e = this._items; t < e.length; t++) {
                    e[t].deactivate()
                }
            }, e.prototype.dispose = function () {
                for (var t = 0, e = this._items; t < e.length; t++) {
                    e[t].dispose()
                }
                this._items = null
            }, e
        }(PIXI.Sprite);
    e.FShopListPanel = a;
    var _ = function (t) {
        function e(e, i, n) {
            var o = t.call(this) || this;
            return o._onMouseOver = function () {
                null != o._cb_onMouseOver && o._cb_onMouseOver(o)
            }, o._onMouseOut = function () {
                null != o._cb_onMouseOut && o._cb_onMouseOut(o)
            }, o._onClick = function () {
                null != o._cb_onClick && o._cb_onClick(o._model)
            }, o._cb_onMouseOver = e, o._cb_onMouseOut = i, o._cb_onClick = n, o._coin = new PIXI.Sprite, o._coin.position.set(316, 12), o.addChild(o._coin), o._name = new r.TextBox(20, 16774898), o._name.position.set(6, 10), o.addChild(o._name), o._price = new r.TextBox(18, 16774898), o._price.anchor.x = 1, o._price.position.set(433, 10), o.addChild(o._price), o._soldout = new PIXI.Sprite, o._soldout.x = 1, o._soldout.alpha = 0, o.addChild(o._soldout), o.interactive = !0, o
        }
        return n(e, t), e.prototype.initialize = function () {
            this._coin.texture = s.ITEM_FSHOP.getTexture(14), this._soldout.texture = s.ITEM_FSHOP.getTexture(24)
        }, e.prototype.update = function (t) {
            this._model = t, this._name.text = t.name, this._price.text = t.price.toString(), this._soldout.alpha = 1 == t.has() ? 1 : 0
        }, e.prototype.activate = function () {
            1 != this.buttonMode && (this.buttonMode = !0, this.on(o.EventType.MOUSEOVER, this._onMouseOver), this.on(o.EventType.MOUSEOUT, this._onMouseOut), this.on(o.EventType.CLICK, this._onClick))
        }, e.prototype.deactivate = function () {
            this.buttonMode = !1, this.off(o.EventType.MOUSEOVER, this._onMouseOver), this.off(o.EventType.MOUSEOUT, this._onMouseOut), this.off(o.EventType.CLICK, this._onClick)
        }, e.prototype.dispose = function () {
            this.deactivate(), this.removeChildren(), this._name.destroy(), this._price.destroy(), this._model = null, this._cb_onMouseOver = null, this._cb_onMouseOut = null, this._cb_onClick = null
        }, e
    }(PIXI.Container)
}