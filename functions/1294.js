const function1294 = function (t, e, i) {
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
    var o = i(4),
        r = i(146),
        s = i(26),
        a = i(352),
        _ = i(349),
        u = i(353),
        l = i(350),
        c = i(351),
        h = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._selected_airunit_id = 0, e._onChangeTab = function (t) {
                    e.update(t)
                }, e._area = new PIXI.Graphics, e.addChild(e._area), e._tabs = new a.AirUnitPanelTabContainer(e._onChangeTab), e._tabs.x = 30, e.addChild(e._tabs), e._base = new PIXI.Sprite, e._base.position.set(0, 21), e.addChild(e._base), e._banner = new _.AirUnitPanelBanner, e._banner.position.set(26, 45), e.addChild(e._banner), e._name = new o.TextBox(21, 0), e._name.position.set(33, 119), e.addChild(e._name), e._tag = new u.AirUnitPanelWoodenTag, e._tag.position.set(314, 47), e.addChild(e._tag), e._items = [];
                for (var i = 0; i < 4; i++) {
                    var n = new l.AirUnitPanelItem(null, null);
                    n.position.set(17, 164 + 90 * i), e.addChild(n), e._items.push(n)
                }
                return e._supply_btn = new c.AirUnitPanelSupplyAllBtn(null), e._supply_btn.position.set(287, 146), e.addChild(e._supply_btn), e.interactive = !0, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "selected_airunit_id", {
                get: function () {
                    return this._selected_airunit_id
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t, e) {
                this._models = e, this._tabs.initialize(this._models.length), this._base.texture = s.SALLY_AIRUNIT.getTexture(8), this._area.beginFill(0, 0), this._area.drawRect(this._base.x, this._base.y, this._base.width, this._base.height), this._area.endFill(), this._banner.initialize(t);
                for (var i = 0; i < this._items.length; i++) {
                    this._items[i].initialize(i)
                }
                this._supply_btn.initialize()
            }, e.prototype.update = function (t, e) {
                if (void 0 === e && (e = !1), (0 != e || this._selected_airunit_id != t) && !(t <= 0 || t > this._models.length)) {
                    this._selected_airunit_id = t;
                    for (var i = null, n = 0, o = this._models; n < o.length; n++) {
                        var s = o[n];
                        if (s.id == t) {
                            i = s;
                            break
                        }
                    }
                    this._tabs.update(t), this._name.text = i.name, r.EditTextBoxUtil.text = i.name, this._tag.update(i.airUnitState, !1);
                    for (var a = i.squadrons, _ = 0, u = !1, l = 0; l < this._items.length; l++) {
                        var c = l < a.length ? a[l] : null;
                        this._items[l].update(c), 0 == _ && null != c && 1 == c.state && (_ = c.mst_id), u = u || c.count < c.countMax
                    }
                    this._banner.update(t, _, i.distance_base, i.distance_bonus), this._supply_btn.update(u)
                }
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._tabs.dispose(), this._banner.dispose(), this._name.destroy(), this._tag.dispose();
                for (var t = 0, e = this._items; t < e.length; t++) {
                    e[t].dispose()
                }
                this._supply_btn.dispose()
            }, e
        }(PIXI.Container);
    e.AirUnitPanel = h
}