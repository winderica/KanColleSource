const function960 = function (t, e, i) {
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
    var o = i(0),
        r = i(1),
        s = i(150),
        a = i(8),
        _ = i(4),
        l = i(27),
        u = i(353),
        c = i(354),
        h = i(355),
        p = i(968),
        d = i(357),
        f = function (t) {
            function e(e, i, n) {
                var r = t.call(this) || this;
                r._selected_airunit_id = 0, r._onClick = function (t) {
                    t.stopPropagation()
                }, r._onChangeTab = function (t) {
                    r.update(t)
                }, r._onMouseDownAtItem = function (t) {
                    r.deactivate();
                    var e = new y(t, r._items, r._onSelect);
                    o.default.view.overLayer.addChild(e)
                }, r._onSelect = function (t, e) {
                    if (t < 0) return void r.activate();
                    if (t != e && r.activate(), null != r._cb_onDrop) {
                        var i = r._selected_airunit_id;
                        r._cb_onDrop(i, t, e)
                    }
                }, r._onSupplyAll = function () {
                    null != r._cb_onSupply && r._cb_onSupply(-1)
                }, r._onSupply = function (t) {
                    null != r._cb_onSupply && r._cb_onSupply(t)
                }, r._cb_onDrop = e, r._cb_onSupply = i, r._area = new PIXI.Graphics, r.addChild(r._area), r._tabs = new p.AirUnitPanelTabContainerWithExtend(r._onChangeTab, n), r._tabs.x = 30, r.addChild(r._tabs), r._base = new PIXI.Sprite, r._base.position.set(0, 21), r.addChild(r._base), r._banner = new u.AirUnitPanelBanner, r._banner.position.set(26, 45), r.addChild(r._banner), r._name = new _.TextBox(21, 0), r._name.position.set(33, 119), r.addChild(r._name), r._tag = new d.AirUnitPanelWoodenTag, r._tag.position.set(314, 47), r.addChild(r._tag), r._items = [];
                for (var s = 0; s < 4; s++) {
                    var a = new c.AirUnitPanelItem(r._onMouseDownAtItem, r._onSupply);
                    a.position.set(17, 164 + 90 * s), r.addChild(a), r._items.push(a)
                }
                return r._supply_btn = new h.AirUnitPanelSupplyAllBtn(r._onSupplyAll), r._supply_btn.position.set(287, 146), r.addChild(r._supply_btn), r.interactive = !0, r
            }
            return n(e, t), Object.defineProperty(e.prototype, "selected_airunit_id", {
                get: function () {
                    return this._selected_airunit_id
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t, e) {
                this._area_id = t, this._models = e, this._tabs.initialize(this._models.length), this._base.texture = l.SALLY_AIRUNIT.getTexture(8), this._area.beginFill(0, 0), this._area.drawRect(this._base.x, this._base.y, this._base.width, this._base.height), this._area.endFill(), this._banner.initialize(t);
                for (var i = 0; i < this._items.length; i++) {
                    this._items[i].initialize(i)
                }
                this._supply_btn.initialize(), this.update(1), this.on(r.EventType.CLICK, this._onClick)
            }, e.prototype.update = function (t, e) {
                if (void 0 === e && (e = !1), (0 != e || this._selected_airunit_id != t) && !(t <= 0 || t > this._models.length)) {
                    this.updateTemporaryData(), this._selected_airunit_id = t;
                    for (var i = null, n = 0, o = this._models; n < o.length; n++) {
                        var r = o[n];
                        if (r.id == t) {
                            i = r;
                            break
                        }
                    }
                    this._updateTabs(t), this._name.text = i.name, s.EditTextBoxUtil.text = i.name;
                    for (var a = i.squadrons, _ = 0, l = !1, u = 0; u < this._items.length; u++) {
                        var c = u < a.length ? a[u] : null;
                        this._items[u].update(c), 0 == _ && null != c && 1 == c.state && (_ = c.mst_id), l = l || c.count < c.countMax
                    }
                    this._banner.update(t, _, i.distance_base, i.distance_bonus), this._tag.skipAnimation(), 0 == _ ? (this._tag.update(0, !1), this._tag.enabled = !1) : (this._tag.update(i.airUnitState, !1), this._tag.enabled = !0), this._supply_btn.update(l)
                }
            }, e.prototype.updateAfterExtend = function (t) {
                this._models = t, this._tabs.initialize(this._models.length), this._updateTabs(this._selected_airunit_id)
            }, e.prototype.activate = function () {
                this._tabs.activate(), this._tag.activate();
                for (var t = 0, e = this._items; t < e.length; t++) {
                    e[t].activate()
                }
                var i = new PIXI.Point(this._name.x, this._name.y),
                    n = this.toGlobal(i);
                s.EditTextBoxUtil.init(n.x - 2, n.y - 4, 300, 16, 0), s.EditTextBoxUtil.text = this._name.text, s.EditTextBoxUtil.setVisibility(!0), s.EditTextBoxUtil.onLengthCheck(12), this._name.visible = !1
            }, e.prototype.deactivate = function () {
                this._tabs.deactivate(), this._tag.deactivate();
                for (var t = 0, e = this._items; t < e.length; t++) {
                    e[t].deactivate()
                }
                this._name.text = s.EditTextBoxUtil.text, s.EditTextBoxUtil.setVisibility(!1), s.EditTextBoxUtil.onEventDestroy(), this._name.visible = !0
            }, e.prototype.dispose = function () {
                this.off(r.EventType.CLICK, this._onClick), this._tabs.dispose(), this._banner.dispose(), this._name.destroy(), this._tag.dispose();
                for (var t = 0, e = this._items; t < e.length; t++) {
                    e[t].dispose()
                }
                this._supply_btn.dispose(), this._cb_onDrop = null, this._cb_onSupply = null
            }, e.prototype.updateTemporaryData = function () {
                for (var t = this._selected_airunit_id, e = null, i = 0, n = this._models; i < n.length; i++) {
                    var o = n[i];
                    if (o.id == t) {
                        e = o;
                        break
                    }
                }
                null != e && (e.name_tmp = s.EditTextBoxUtil.text, e.state_tmp = this._tag.state)
            }, e.prototype._updateTabs = function (t) {
                this._tabs.update(t);
                var e = o.default.model.useItem.getCount(73);
                this._tabs.updateExtendBtn(this._area_id, e)
            }, e
        }(PIXI.Container);
    e.AirUnitPanel = f;
    var y = function (t) {
        function e(e, i, n) {
            var s = t.call(this, 0) || this;
            return s._onMouseOut = function () {
                s._removeListeners(), null != s._cb_onDrop && s._cb_onDrop(-1, -1), s._dispose()
            }, s._onMouseMove = function (t) {
                if (null == s._drag) {
                    var e = s._items[s._index],
                        i = t.data.getLocalPosition(e);
                    if (0 == e.isNoneData() && 0 == e.isRelocation() && 0 == e.contains(i.x, i.y)) {
                        for (var n = 0, r = s._items; n < r.length; n++) {
                            r[n].alpha = .5
                        }
                        s._drag = new PIXI.Container;
                        var a = o.default.resources.getSlotitem(e.mst_id, "airunit_banner");
                        if (null == a || a == PIXI.Texture.EMPTY) {
                            var _ = new PIXI.Graphics;
                            _.beginFill(6710886, .5), _.drawRect(0, 0, 150, 30), _.endFill(), _.position.set(-75, -15), s._drag.addChild(_)
                        } else {
                            var l = new PIXI.Sprite(a);
                            l.scale.set(.5), l.anchor.set(.5), l.alpha = .5, s._drag.addChild(l)
                        }
                        s.addChild(s._drag), s._drag.x = t.data.global.x, s._drag.y = t.data.global.y
                    }
                } else {
                    s._drag.x = t.data.global.x, s._drag.y = t.data.global.y;
                    for (var u = 0; u < s._items.length; u++) {
                        var e = s._items[u],
                            i = t.data.getLocalPosition(e);
                        1 == e.contains(i.x, i.y) ? e.alpha = 1 : e.alpha = .5
                    }
                }
            }, s._onMouseUp = function (t) {
                s._removeListeners();
                for (var e = 0; e < s._items.length; e++) {
                    var i = s._items[e],
                        n = t.data.getLocalPosition(i);
                    if (1 == i.contains(n.x, n.y)) return s._index == e ? null == s._drag ? null != s._cb_onDrop && s._cb_onDrop(s._index, s._index) : null != s._cb_onDrop && s._cb_onDrop(-1, -1) : null == s._drag ? null != s._cb_onDrop && s._cb_onDrop(-1, -1) : null != s._cb_onDrop && s._cb_onDrop(s._index, e), void s._dispose()
                }
                null != s._drag && null != s._cb_onDrop && s._cb_onDrop(s._index, -1), s._dispose()
            }, s._cb_onDrop = n, s.buttonMode = !0, s._index = e, s._items = i, s.on(r.EventType.MOUSEOUT, s._onMouseOut), s.on(r.EventType.MOUSEMOVE, s._onMouseMove), s.on(r.EventType.MOUSEUP, s._onMouseUp), s
        }
        return n(e, t), e.prototype._dispose = function () {
            for (var t = 0; t < this._items.length; t++) {
                this._items[t].alpha = 1
            }
            null != this.parent && this.parent.removeChild(this), this._items = null, this._drag = null, this._cb_onDrop = null
        }, e.prototype._removeListeners = function () {
            this.off(r.EventType.MOUSEUP, this._onMouseOut), this.off(r.EventType.MOUSEMOVE, this._onMouseMove), this.off(r.EventType.MOUSEUP, this._onMouseUp)
        }, e
    }(a.AreaBox)
}