const function987 = function (t, e, i) {
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
        r = i(10),
        s = i(30),
        a = i(362),
        _ = i(364),
        l = i(365),
        u = i(229),
        c = i(366),
        h = i(230),
        p = i(368),
        d = i(991),
        f = i(992),
        y = i(993),
        m = i(111),
        g = function (t) {
            function e(e, i, n) {
                var r = t.call(this) || this;
                return r._onDeckChange = function (t) {
                    r._update(t)
                }, r._onGo = function () {
                    if (null != r._cb_onGo) {
                        var t = r._selected_map.mst_id;
                        r._cb_onGo(t, r._deck_id)
                    }
                }, r._onClickTempSupply = function () {
                    var t = o.default.model.deck.get(r._deck_id).getShipList();
                    new _.TaskTemporarySupply(t, r._rader, function () {
                        r._update(r._deck_id)
                    }).start()
                }, r._cb_onGo = n, r._banners = new a.PanelDeckSelectBanners, r._banners.position.set(30, 95), r._decks = new h.CompDeckBtns(r._onDeckChange), r._decks.position.set(30, 54), r._rader = new c.RaderCanvas, r._rader.position.set(488, 293), r._arrow = new u.CompArrow2, r._arrow.position.set(567, 537), r._alert = new l.AlertBalloon, r._alert.anchor.set(1, .5), r._alert.position.set(299, 566), r.interactive = !0, r._airunit_limit = e, r._event_sortie_condition = i, r._btn = new d.BtnGo(r._onGo), r._btn.position.set(302, 539), r._shop = new f.BtnShop, r._shop.position.set(15, 538), r._temp_supply_btn = new p.TempSupplyBtn, r._temp_supply_btn.position.set(210, 528), r
            }
            return n(e, t), e.prototype.initialize = function (t, e, i) {
                this._selected_map = t;
                var n = new PIXI.Sprite(s.SALLY_COMMON.getTexture(27));
                n.position.set(-8, 36);
                var a = new PIXI.Sprite(s.SALLY_COMMON.getTexture(51));
                a.position.set(0, 0);
                var _ = new PIXI.Sprite(s.SALLY_COMMON.getTexture(15));
                if (_.position.set(24, 11), this._decks.initialize(e), this._rader.initialize(), this._arrow.initialize(), this.addChild(n), this.addChild(a), this.addChild(_), this.addChild(this._banners), this.addChild(this._decks), this.addChild(this._rader), this.addChild(this._arrow), this._alert.initialize(), this.addChild(this._alert), o.default.model.deck.exist3rdUnit) {
                    var l = new PIXI.Sprite(r.COMMON_MISC.getTexture(185));
                    l.position.set(108, 33), this.addChild(l)
                }
                1 == i && (this._deck_combined_frame = new m.CombinedView, this._deck_combined_frame.position.set(23, 45), this.addChild(this._deck_combined_frame)), this._btn.initialize(), this.addChild(this._btn), this._shop.initialize(), this.addChild(this._shop), this._temp_supply_btn.initialize(this._onClickTempSupply), this.addChild(this._temp_supply_btn), this._update(e[0])
            }, e.prototype.activate = function () {
                this._decks.activate(), this._arrow.activate(), null != this._deck_combined_frame && this._deck_combined_frame.activate(), this._btn.activate(), this._alert.activate(), this._temp_supply_btn.activate(), this._shop.activate()
            }, e.prototype.deactivate = function () {
                this._decks.deactivate(), this._arrow.deactivate(), null != this._deck_combined_frame && this._deck_combined_frame.deactivate(), this._btn.deactivate(), this._temp_supply_btn.deactivate(), this._shop.deactivate()
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._selected_map = null, this._cb_onGo = null, this._banners.dispose(), this._banners = null, this._decks.dispose(), this._decks = null, this._rader.dispose(), this._rader = null, this._arrow.dispose(), this._arrow = null, this._alert = null, this._btn.dispose(), this._btn = null, this._shop.deactivate(), this._shop = null, this._temp_supply_btn.dispose(), this._temp_supply_btn = null, null != this._deck_combined_frame && (this._deck_combined_frame.dispose(), this._deck_combined_frame = null)
            }, e.prototype._update = function (t) {
                this._deck_id = t, this._decks.setSelected(t);
                for (var e = o.default.model.deck.get(t), i = e.getShipListAll(), n = e.getShipList(), r = !0, s = 0; s < i.length; s++) {
                    var a = i[s];
                    null != a && 1 == r && (a.fuelNow < a.fuelMax || a.ammoNow < a.ammoMax) && (r = !1)
                }
                this._rader.update(i);
                var _ = o.default.model.ndock.getShipMemIDs(),
                    l = this._airunit_limit,
                    u = this._selected_map.area_id,
                    c = o.default.model.airunit.getReadyAirUnitList(u),
                    h = !1,
                    p = this._selected_map.mst_id;
                if (451 == p || 452 == p)
                    for (var d = 0, f = c; d < f.length; d++) {
                        var m = f[d];
                        m.distance + m.distance_bonus <= 1 && (h = !0)
                    }
                var g = y.check(this._selected_map, e, _, this._event_sortie_condition, h);
                if (this._btn.enabled = g.result, this._btn.air_unit = l > 0 && c.length > 0, this._alert.update(g.reason), this._arrow.enabled = g.result, this._arrow.update(r), this._arrow.activate(), 0 == o.default.model.basic.getExtraSupplySortie()) this._temp_supply_btn.visible = !1;
                else if (r) this._temp_supply_btn.visible = !1;
                else if (0 != g.reason && 2 != g.reason && 14 != g.reason) this._temp_supply_btn.visible = !1;
                else {
                    for (var v = 0, b = 0, s = 0; s < n.length; s++) {
                        var a = n[s];
                        null != a && (v += a.getFuelForSupply(), b += a.getAmmoForSupply())
                    }
                    var w = o.default.model.useItem.getCount(31),
                        x = o.default.model.useItem.getCount(32),
                        I = v > 0 && v <= w,
                        T = b > 0 && b <= x;
                    this._temp_supply_btn.enabled = 0 != I || 0 != T, this._temp_supply_btn.visible = !0
                }
                this._shop.visible = g.result, this._banners.update(n)
            }, e
        }(PIXI.Container);
    e.PanelDeckSelect = g
}