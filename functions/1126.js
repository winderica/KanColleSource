const function1126 = function (t, e, i) {
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
    var o = i(0), r = i(34), s = i(150), a = i(163), _ = i(151), u = i(125), l = i(102), c = i(6), h = i(127),
        p = i(1127), d = i(87), f = i(114), y = i(114), v = i(114), g = i(114), m = i(114), b = i(235), w = i(399),
        x = i(1128), I = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._onSelect = function (t) {
                    var e = i._purchasedItems.getData(t);
                    i._detail_panel.update(e)
                }, i._onPickup = function (t) {
                    if (16 == t.id) {
                        var e = o.default.model.const.boko_max_ships, n = o.default.model.basic.shipMax;
                        if (n >= e) return void c.SE.play("248");
                        c.SE.play("244")
                    } else c.SE.play("243");
                    var r = new p.PurchasedItemPickupAPI(t.id, !1), s = r.result;
                    r.start(function () {
                        i._detail_panel.update(null), 1 == s.hasCaution() ? i._confirm(t) : i._AfterPickup(t)
                    })
                }, i._purchasedItems = e, i._bg = new PIXI.Sprite, i._bg.position.set(202, 201), i.addChild(i._bg), i._detail_panel = new x.PurchasedItemDetailPanel(i._onPickup), i._detail_panel.position.set(904, 201), i.addChild(i._detail_panel), i._icon_layer = new PIXI.Container, i.addChild(i._icon_layer), i
            }

            return n(e, t), e.prototype.initialize = function () {
                this._bg.texture = h.ITEM_ILIST.getTexture(14), this._detail_panel.initialize(), this._icons = [];
                for (var t = f.PAYITEMLIST_ORDER.length, e = 0; e < t; e++) {
                    var i = new w.PayItemIcon(this._onSelect);
                    i.x = 238 + e % 7 * 84, e % 7 >= 3 && (i.x += 54), i.y = 265 + 112 * Math.floor(e / 7), i.initialize(), this._icon_layer.addChild(i), this._icons.push(i)
                }
            }, e.prototype.update = function () {
                this._detail_panel.update(null);
                for (var t = 0; t < this._icons.length; t++) {
                    var e = this._icons[t], i = f.PAYITEMLIST_ORDER[t], n = this._purchasedItems.getData(i),
                        o = null == n ? 0 : n.count;
                    e.update(i, o)
                }
            }, e.prototype.activate = function () {
                for (var t = 0, e = this._icons; t < e.length; t++) {
                    e[t].activate()
                }
            }, e.prototype.deactivate = function () {
                for (var t = 0, e = this._icons; t < e.length; t++) {
                    e[t].deactivate()
                }
            }, e.prototype.dispose = function () {
                this._icon_layer.removeChildren(), this._icon_layer = null;
                for (var t = 0, e = this._icons; t < e.length; t++) {
                    var i = e[t];
                    i.deactivate(), i.dispose()
                }
                this._icons = null, this._detail_panel.dispose(), this._detail_panel = null, this._purchasedItems = null, this.removeChildren()
            }, e.prototype._confirm = function (t) {
                var e = this, i = o.default.view.overLayer, n = new b.TaskItemOverflowConfirm(i);
                n.start(function () {
                    if (1 == n.result) {
                        var i = new p.PurchasedItemPickupAPI(t.id, !0);
                        i.result;
                        i.start(function () {
                            e._AfterPickup(t)
                        })
                    }
                })
            }, e.prototype._AfterPickup = function (t) {
                var e = this, i = t.id, n = new r.APIConnector;
                v.RELATED_USERDATA_PAYITEM.indexOf(i) >= 0 && n.add(new _.UserDataAPI), g.RELATED_SLOTITEM_PAYITEM.indexOf(i) >= 0 && (n.add(new u.UserSlotItemAPI), n.add(new s.UnsetSlotAPI)), m.RELATED_USEITEM_PAYITEM.indexOf(i) >= 0 && n.add(new l.UseItemAPI), y.RELATED_MATERIAL_PAYITEM.indexOf(i) >= 0 && n.add(new a.MaterialAPI), n.start(function () {
                    t.setCount(t.count - 1), e.update(), o.default.model.useItem.updateCount(), o.default.view.portMain.updateInfo()
                })
            }, e
        }(d.ViewBase);
    e.PurchasedItemListMain = I
}