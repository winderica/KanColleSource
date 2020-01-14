const function1473 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(231),
        o = i(173),
        r = i(232),
        s = i(479),
        a = i(1483),
        _ = function () {
            function t(t) {
                this._model = t, this._records = []
            }
            return Object.defineProperty(t.prototype, "model", {
                get: function () {
                    return this._model
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.addDayRecord = function (t) {
                var e = new s.BattleRecordDay(t);
                this._records.push(e);
                var i = this._model.deck_f;
                i = null != i ? this._createDeckFriend(i, e) : this._createAirBase(e);
                var n = this._createDeckEnemy(this._model.deck_e, e);
                this._model.updateDeckData(i, n)
            }, t.prototype.addNightRecord = function (t) {
                var e = new a.BattleRecordNight(t);
                this._records.push(e);
                var i = this._model.deck_f;
                i = null != i ? this._createDeckFriend(i, e) : this._createAirBase(e);
                var n = this._createDeckEnemy(this._model.deck_e, e);
                this._model.updateDeckData(i, n)
            }, t.prototype.getFirstRecord = function () {
                return 0 == this._records.length ? null : this._records[0]
            }, t.prototype.getLastRecord = function () {
                if (0 == this._records.length) return null;
                var t = this._records.length;
                return this._records[t - 1]
            }, t.prototype.isNight = function () {
                var t = this.getLastRecord();
                return null != t && "day" != t.phase
            }, t.prototype.isBossDamaged = function () {
                var t = this.getFirstRecord();
                if (null != t) return t.common.isBossDamaged()
            }, t.prototype._createDeckFriend = function (t, e) {
                for (var i = t.practice, o = e.common.deck_id, r = t.medal_num, s = t.user_name, a = t.type, _ = t.name, u = e.common.getTaihiShipIndexes(), l = new Array, c = 0; c < t.ships.length; c++) {
                    var h = t.ships[c];
                    if (null == h) l.push(null);
                    else {
                        var p = h.clone(),
                            d = e.common.getHPNowFriend(c);
                        i && (d = Math.max(1, d));
                        var f = e.common.getHPMaxFriend(c);
                        p.initializeHPInfo(d, f);
                        var y = e.common.getParamsFriend(c);
                        p.initializeParams(y.karyoku, y.raisou, y.taiku, y.soukou);
                        var m = -1 != u.indexOf(c);
                        p.initializeTaihi(m), l.push(p)
                    }
                }
                var g = t.id_second,
                    v = t.name_second,
                    b = new n.DeckModelReplica(o, i, r, s, a, _, l, g, v);
                return b.formation = e.common.formation_id_f, b
            }, t.prototype._createAirBase = function (t) {
                for (var e = [], i = 0; i < 6; i++) {
                    var r = t.common.getHPMaxFriend(i);
                    if (r <= 0) break;
                    var s = -(i + 1),
                        a = s,
                        _ = new o.ShipModelReplica(0, !1, i, s, a, 1, 0),
                        u = t.common.getHPNowFriend(i);
                    _.initializeHPInfo(u, r);
                    var l = t.common.getParamsFriend(i);
                    _.initializeParams(l.karyoku, l.raisou, l.taiku, l.soukou), e.push(_)
                }
                var c = new n.DeckModelReplica(0, !1, 0, "", 0, "", e, 0, "");
                return c.formation = t.common.formation_id_f, c
            }, t.prototype._createDeckEnemy = function (t, e) {
                for (var i = null != t && t.practice, s = null == t ? 0 : t.id, a = null == t ? 0 : t.medal_num, _ = null == t ? "" : t.user_name, u = null == t ? "" : t.name, l = [], c = e.common.isCombinedEnemy(), h = 0; h < (c ? 12 : 6); h++) {
                    var p = e.common.getMstIDEnemy(h);
                    if (p <= 0) l.push(null);
                    else {
                        var d = e.common.getLevelEnemy(h),
                            f = new o.ShipModelReplica(1, i, h, p, -h, d),
                            y = e.common.getHPNowEnemy(h);
                        i && (y = Math.max(1, y));
                        var m = e.common.getHPMaxEnemy(h);
                        f.initializeHPInfo(y, m);
                        for (var g = e.common.getSlotMstIDsEnemy(h), v = r.SlotitemModelReplica.convertFromMstIDs(g), b = [], w = 0; w < v.length; w++) b.push(0);
                        f.initializeSlots(v, null, b);
                        var x = e.common.getParamsEnemy(h);
                        f.initializeParams(x.karyoku, x.raisou, x.taiku, x.soukou), l.push(f)
                    }
                }
                var I;
                return I = 0 == c ? new n.DeckModelReplica(s, i, a, _, 0, u, l) : new n.DeckModelReplica(s, i, a, _, 1, u, l, 0, ""), I.formation = e.common.formation_id_e, I
            }, t
        }();
    e.BattleData = _
}