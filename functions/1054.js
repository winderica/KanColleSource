const function1054 = function (t, e, i) {
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
        r = i(111),
        s = i(10),
        a = i(31),
        _ = i(58),
        l = i(232),
        u = i(233),
        c = i(363),
        h = i(367),
        p = i(369),
        d = i(365),
        f = i(1055),
        y = i(366),
        m = i(1056),
        g = i(1057),
        v = i(1058),
        b = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i._onDeckChange = function (t) {
                    i._update(t)
                }, i._onGo = function () {
                    null != i._cb_onGo && i._cb_onGo(i._selected_id, i._deck_id)
                }, i._onClickTempSupply = function () {
                    var t = o.default.model.deck.get(i._deck_id).getShipList();
                    new d.TaskTemporarySupply(t, i._rader, function () {
                        i._update(i._deck_id)
                    }).start()
                }, i._cb_onGo = e, i._banners = new c.PanelDeckSelectBanners, i._banners.position.set(30, 94), i._decks = new u.CompDeckBtns(i._onDeckChange), i._decks.position.set(30, 54), i._rader = new h.RaderCanvas, i._rader.position.set(487, 292), i._arrow = new l.CompArrow2, i._arrow.position.set(567, 537), i._alert = new y.AlertBalloon, i._alert.anchor.set(1, .5), i._alert.position.set(298, 565), i._btn = new m.BtnGo(i._onGo), i._btn.position.set(301, 538), i._drum_counts = [];
                for (var n = 0; n < 6; n++) {
                    var r = new g.CompDrumCount;
                    r.position.set(33, 136 + 75 * n), i._drum_counts.push(r)
                }
                i._support_boats = [];
                for (var n = 0; n < 6; n++) {
                    var s = new v.CompSupportBoatCount;
                    s.position.set(55, 145 + 75 * n), i._support_boats.push(s)
                }
                return i._flagship_flag = new PIXI.Sprite, i._flagship_flag.position.set(31, 87), i._temp_supply_btn = new p.TempSupplyBtn, i._temp_supply_btn.position.set(210, 528), i._checker = new f.ExpeditionCondition, i.interactive = !0, i._expired_flag = !1, i
            }
            return n(e, t), e.prototype.initialize = function (t, e, i) {
                this._selected_id = t;
                var n = new PIXI.Sprite(a.SALLY_COMMON.getTexture(27));
                n.position.set(-7, 36), this.addChild(n);
                var l = new PIXI.Sprite(a.SALLY_COMMON.getTexture(51));
                l.position.set(0, 0), this.addChild(l);
                var u = new PIXI.Sprite(a.SALLY_COMMON.getTexture(15));
                if (u.position.set(24, 10), this.addChild(u), this.addChild(this._banners), this._decks.initialize(e), this.addChild(this._decks), this._rader.initialize(), this.addChild(this._rader), this._arrow.initialize(), this.addChild(this._arrow), this._alert.initialize(), this.addChild(this._alert), o.default.model.deck.exist3rdUnit) {
                    var c = new PIXI.Sprite(s.COMMON_MISC.getTexture(186));
                    c.position.set(108, 33), this.addChild(c)
                }
                1 == i && (this._deck_combined_frame = new r.CombinedView, this._deck_combined_frame.position.set(22, 44), this.addChild(this._deck_combined_frame)), this._btn.initialize(), this.addChild(this._btn);
                for (var h = 0, p = this._drum_counts; h < p.length; h++) {
                    var d = p[h];
                    d.initialize(), this.addChild(d)
                }
                for (var f = 0, y = this._support_boats; f < y.length; f++) {
                    var m = y[f];
                    m.initialize(), this.addChild(m)
                }
                this._flagship_flag.texture = _.SALLY_EXPEDITION.getTexture(71), this.addChild(this._flagship_flag), this._temp_supply_btn.initialize(this._onClickTempSupply), this.addChild(this._temp_supply_btn), this._update(e[0])
            }, e.prototype.activate = function () {
                this._decks.activate(), this._arrow.activate(), this._alert.activate(), null != this._deck_combined_frame && this._deck_combined_frame.activate(), this._btn.activate(), this._temp_supply_btn.activate()
            }, e.prototype.deactivate = function () {
                this._decks.deactivate(), this._arrow.deactivate(), null != this._deck_combined_frame && this._deck_combined_frame.deactivate(), this._btn.deactivate(), this._temp_supply_btn.deactivate()
            }, e.prototype.dispose = function () {
                this._banners.dispose(), this._decks.dispose(), this._rader.dispose(), this._arrow.dispose(), null != this._deck_combined_frame && this._deck_combined_frame.dispose(), this._btn.dispose(), this._temp_supply_btn.dispose(), this._checker = null
            }, e.prototype.expiredUpdate = function (t) {
                this._expired_flag = t, this._update(this._deck_id)
            }, e.prototype._update = function (t) {
                this._deck_id = t;
                for (var e = o.default.model.deck.get(t), i = e.getShipListAll(), n = this._checker.check(this._selected_id, e, this._expired_flag), r = !0, s = 0; s < i.length; s++) {
                    var a = i[s];
                    null != a && 1 == r && (a.fuelNow < a.fuelMax || a.ammoNow < a.ammoMax) && (r = !1)
                }
                this._decks.setSelected(t), this._rader.update(i), this._arrow.enabled = n.result, this._arrow.update(r), this._arrow.activate(), this._alert.update(n.reason), this._btn.enabled = n.result;
                for (var _ = e.getShipList(), s = 0; s < _.length; s++) {
                    var a = _[s];
                    this._drum_counts[s].update(a), this._support_boats[s].update(a)
                }
                if (this._flagship_flag.visible = null != _[0], 0 == o.default.model.basic.getExtraSupplyExpedition()) this._temp_supply_btn.visible = !1;
                else if (r) this._temp_supply_btn.visible = !1;
                else if (0 != n.reason && 2 != n.reason && 14 != n.reason) this._temp_supply_btn.visible = !1;
                else {
                    for (var l = 0, u = 0, s = 0; s < _.length; s++) {
                        var a = _[s];
                        null != a && (l += a.getFuelForSupply(), u += a.getAmmoForSupply())
                    }
                    var c = o.default.model.useItem.getCount(31),
                        h = o.default.model.useItem.getCount(32),
                        p = l > 0 && l <= c,
                        d = u > 0 && u <= h;
                    this._temp_supply_btn.enabled = 0 != p || 0 != d, this._temp_supply_btn.visible = !0
                }
                this._banners.update(_)
            }, e
        }(PIXI.Container);
    e.PanelDeckSelect = b
}