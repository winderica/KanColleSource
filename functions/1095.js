const function1095 = function (t, e, i) {
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
    var o = i(0), r = i(3), s = i(87), a = i(116), _ = i(399), u = i(1097), l = i(237), c = i(1), h = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._onSelect = function (t) {
                e._detail_panel.update(t)
            }, e._onUse = function (t) {
                var i = o.default.model.useItem.get(t);
                if (null != i) {
                    var n = o.default.view.overLayer, r = new l.TaskUseItem(n, i);
                    r.start(function () {
                        1 == r.result && (e.update(), e.activate(), e._detail_panel.update(-1))
                    })
                }
            }, e._onExOpen = function () {
                e._openExShelf(300)
            }, e._onExClose = function () {
                e._closeExShelf(300)
            }, e._bg_layer = new PIXI.Container, e.addChild(e._bg_layer), e._btn_ex_close = new f, e._btn_ex_close.position.set(186, 205), e.addChild(e._btn_ex_close), e._btn_ex_open = new d, e._btn_ex_open.position.set(735, 205), e.addChild(e._btn_ex_open), e._shelf_layer = new PIXI.Container, e.addChild(e._shelf_layer), e._shelf_mask = new PIXI.Graphics, e._shelf_mask.beginFill(0), e._shelf_mask.drawRect(180, 240, 727, 427), e._shelf_mask.endFill(), e.addChild(e._shelf_mask), e._shelf_layer.mask = e._shelf_mask, e._shelf_grad = new PIXI.Sprite, e._shelf_grad.position.set(180, 240), e._shelf_grad.visible = !1, e.addChild(e._shelf_grad), e._detail_panel = new u.OwnedItemDetailPanel(e._onUse), e._detail_panel.position.set(904, 201), e.addChild(e._detail_panel), e
        }

        return n(e, t), e.prototype.initialize = function () {
            var t = new PIXI.Sprite(r.ITEM_ILIST.getTexture(16));
            t.position.set(180, 202), this._bg_layer.addChild(t), this._btn_ex_open.initialize(this._onExOpen), this._btn_ex_close.initialize(this._onExClose), t = new PIXI.Sprite(r.ITEM_ILIST.getTexture(18)), t.position.set(180, 240), this._shelf_layer.addChild(t), t = new PIXI.Sprite(r.ITEM_ILIST.getTexture(19)), t.position.set(907, 240), this._shelf_layer.addChild(t), this._shelf_grad.texture = r.ITEM_ILIST.getTexture(0), this._detail_panel.initialize(), this._icons = [];
            for (var e = a.ITEMLIST_ORDER.length, i = 0; i < e; i++) {
                var n = new _.ItemIcon(this._onSelect);
                if (i < 32) {
                    n.x = 213 + i % 8 * 84;
                    var o = Math.floor(i / 8);
                    n.y = 259 + 105 * o, o >= 2 && (n.y -= 2)
                } else {
                    var s = i - 32;
                    n.x = 928 + s % 3 * 84, n.y = 259 + 105 * Math.floor(s / 3)
                }
                n.initialize(), this._shelf_layer.addChild(n), this._icons.push(n)
            }
        }, e.prototype.update = function () {
            this._closeExShelf(0), this._detail_panel.update(-1);
            for (var t = 0; t < this._icons.length; t++) {
                var e = this._icons[t], i = a.ITEMLIST_ORDER[t], n = o.default.model.useItem.get(i),
                    r = null == n ? 0 : n.count;
                e.update(i, r)
            }
        }, e.prototype.activate = function () {
            for (var t = 0, e = this._icons; t < e.length; t++) {
                e[t].activate()
            }
            this._btn_ex_open.activate(), this._btn_ex_close.activate()
        }, e.prototype.deactivate = function () {
            for (var t = 0, e = this._icons; t < e.length; t++) {
                e[t].deactivate()
            }
            this._btn_ex_open.deactivate(), this._btn_ex_close.deactivate()
        }, e.prototype.dispose = function () {
            for (var t = 0, e = this._icons; t < e.length; t++) {
                e[t].dispose()
            }
            this._btn_ex_open.dispose(), this._btn_ex_close.dispose(), this._detail_panel.dispose()
        }, e.prototype._openExShelf = function (t) {
            var e = this;
            this._btn_ex_open.hide(), this._shelf_grad.visible = !0, createjs.Tween.get(this._shelf_layer).to({ x: -282 }, t, createjs.Ease.cubicOut).call(function () {
                e._btn_ex_close.show()
            })
        }, e.prototype._closeExShelf = function (t) {
            var e = this;
            this._btn_ex_close.hide(), createjs.Tween.get(this._shelf_layer).to({ x: 0 }, t, createjs.Ease.cubicOut).call(function () {
                e._shelf_grad.visible = !1, e._btn_ex_open.show()
            })
        }, e
    }(s.ViewBase);
    e.OwnedItemListMain = h;
    var p = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._onMouseOver = function () {
                e._update(!0)
            }, e._onMouseOut = function () {
                e._update(!1)
            }, e._onClick = function () {
                null != e._cb_onClick && e._cb_onClick()
            }, e.interactive = !0, e
        }

        return n(e, t), e.prototype.initialize = function (t) {
            this._cb_onClick = t, this._update(!1)
        }, e.prototype.activate = function () {
            1 != this.buttonMode && (this.buttonMode = !0, this.on(c.EventType.MOUSEOVER, this._onMouseOver), this.on(c.EventType.MOUSEOUT, this._onMouseOut), this.on(c.EventType.CLICK, this._onClick))
        }, e.prototype.deactivate = function () {
            this.buttonMode = !1, this.off(c.EventType.MOUSEOVER, this._onMouseOver), this.off(c.EventType.MOUSEOUT, this._onMouseOut), this.off(c.EventType.CLICK, this._onClick)
        }, e.prototype.dispose = function () {
            this.deactivate()
        }, e.prototype.show = function () {
            this.visible = !0
        }, e.prototype.hide = function () {
            this.visible = !1, this._update(!1)
        }, e
    }(PIXI.Sprite), d = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype._update = function (t) {
            this.texture = 0 == t ? r.ITEM_ILIST.getTexture(20) : r.ITEM_ILIST.getTexture(21)
        }, e
    }(p), f = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype._update = function (t) {
            this.texture = 0 == t ? r.ITEM_ILIST.getTexture(22) : r.ITEM_ILIST.getTexture(23)
        }, e
    }(p)
}