const function406 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(7), o = i(294), r = i(295), s = i(296), a = i(182), _ = i(297), u = i(298), l = i(299), c = i(199),
        h = i(183), p = i(143), d = i(126), f = i(300), y = function () {
            function t(t) {
                this._duty_id = t, this._dic = {}, this._rewards = []
            }

            return t.prototype.getRewards = function (t) {
                return 0 == this._dic.hasOwnProperty(t.toString()) ? [] : this._dic[t]
            }, t.prototype.getRewardList = function () {
                return this._rewards.concat()
            }, t.prototype.isNeedUpdateUserBasic = function () {
                for (var t = this.getRewards(13), e = 0; e < t.length; e++) {
                    if (44 == t[e].mst_id) return !0
                }
                t = this.getRewards(15);
                for (var e = 0; e < t.length; e++) {
                    var i = t[e];
                    if (1 == i.need_basic_update) return !0
                }
                t = this.getRewards(16);
                for (var e = 0; e < t.length; e++) {
                    var i = t[e];
                    if (1 == i.need_basic_update) return !0
                }
                return !1
            }, t.prototype.isNeedUpdateSlotitem = function () {
                var t = this.getRewards(11);
                return t.length > 0 || (t = this.getRewards(12), t.length > 0 || (t = this.getRewards(15), t.length > 0 || (t = this.getRewards(16), t.length > 0)))
            }, t.prototype.isNeedUpdateUseitem = function () {
                var t = this.getRewards(3);
                if (t.length > 0) return !0;
                if (t = this.getRewards(13), t.length > 0) return !0;
                t = this.getRewards(15);
                for (var e = 0; e < t.length; e++) {
                    var i = t[e];
                    if (1 == i.need_useitem_update) return !0
                }
                t = this.getRewards(16);
                for (var e = 0; e < t.length; e++) {
                    var i = t[e];
                    if (1 == i.need_useitem_update) return !0
                }
                return !1
            }, t.prototype._initialize = function () {
                var t = n.ObjUtil.getNumArray(this._o, "api_material");
                if (null != t) {
                    for (; t.length < 4;) t.push(0);
                    this._addMaterialBonus(31, t[0]), this._addMaterialBonus(32, t[1]), this._addMaterialBonus(33, t[2]), this._addMaterialBonus(34, t[3])
                }
                var e = [], i = n.ObjUtil.getNumArray(this._o, "api_bounus");
                if (null != i) for (var o = 0; o < i.length; o++) {
                    var r = i[o];
                    e.push(new v(r))
                }
                for (var o = 0; o < e.length; o++) {
                    var s = e[o];
                    if (1 == s.type) {
                        if (s.count <= 0) continue;
                        var a = s.id;
                        switch (a) {
                            case 5:
                                a = 2;
                                break;
                            case 6:
                                a = 1;
                                break;
                            case 7:
                                a = 3;
                                break;
                            case 8:
                                a = 4;
                                break;
                            default:
                                a = -1
                        }
                        -1 != a && this._addMaterialBonus(a, s.count)
                    } else 2 == s.type ? this._addDeckBonus(s) : 3 == s.type ? this._addFBoxBonus(s) : 4 == s.type ? this._addLargeBonus(s) : 5 == s.type ? this._addAirunitBaseBonus(s) : 6 == s.type ? this._addExtraSupplyBonus(s) : 11 == s.type ? this._addShipBonus(s) : 12 == s.type ? this._addSlotitemBonus(s) : 13 == s.type ? this._addUseitemBonus(s) : 14 == s.type ? this._addFurnitureBonus(s) : 15 == s.type ? this._addModelChangeBonus(s) : 16 == s.type ? this._addModelChangeBonus(s) : 18 == s.type && this._addWarResultBonus(s)
                }
            }, t.prototype._addMaterialBonus = function (t, e) {
                if (0 != e) {
                    var i;
                    null != this._material && this._material.rewards.length < 6 ? i = this._material : (this._material = new c.RewardModelMultiUseitem, i = this._material, 0 == this._dic.hasOwnProperty(1..toString()) && (this._dic[1] = []), this._dic[1].push(i), this._rewards.push(i)), i.add(t, e)
                }
            }, t.prototype._addDeckBonus = function (t) {
                var e = new r.RewardModelDeck(t.id, t.name);
                0 == this._dic.hasOwnProperty(2..toString()) && (this._dic[2] = []), this._dic[2].push(e), this._rewards.push(e)
            }, t.prototype._addFBoxBonus = function (t) {
                if (0 != t.count) {
                    var e;
                    null != this._fbox && this._fbox.rewards.length < 6 ? e = this._fbox : (this._fbox = new c.RewardModelMultiUseitem, e = this._fbox, 0 == this._dic.hasOwnProperty(3..toString()) && (this._dic[3] = []), this._dic[3].push(e), this._rewards.push(e)), e.add(t.id, t.count)
                }
            }, t.prototype._addLargeBonus = function (t) {
                var e = new _.RewardModelLargeBuild;
                0 == this._dic.hasOwnProperty(4..toString()) && (this._dic[4] = []), this._dic[4].push(e), this._rewards.push(e)
            }, t.prototype._addAirunitBaseBonus = function (t) {
                var e = t.id, i = t.message_a, n = t.message, r = new o.RewardModelAirUnit(e, i, n);
                if (0 == this._dic.hasOwnProperty(5..toString()) && (this._dic[5] = []), this._dic[5].push(r), this._rewards.push(r), 647 == this._duty_id && 1 == t.c_flag) {
                    var s = new u.RewardModelMap(6, 5);
                    this._rewards.push(s)
                }
            }, t.prototype._addExtraSupplyBonus = function (t) {
                var e = new s.RewardModelExtraSupply(t.id);
                0 == this._dic.hasOwnProperty(6..toString()) && (this._dic[6] = []), this._dic[6].push(e), this._rewards.push(e)
            }, t.prototype._addShipBonus = function (t) {
                var e = new h.RewardModelShip(t.id);
                0 == this._dic.hasOwnProperty(11..toString()) && (this._dic[11] = []), this._dic[11].push(e), this._rewards.push(e)
            }, t.prototype._addSlotitemBonus = function (t) {
                for (var e = 0; e < t.count; e++) {
                    var i = new p.RewardModelSlotitem(t.id, 1);
                    0 == this._dic.hasOwnProperty(12..toString()) && (this._dic[12] = []), this._dic[12].push(i), this._rewards.push(i)
                }
            }, t.prototype._addUseitemBonus = function (t) {
                for (var e = 0; e < t.count; e++) {
                    var i = new d.RewardModelUseitem(t.id, 1);
                    0 == this._dic.hasOwnProperty(13..toString()) && (this._dic[13] = []), this._dic[13].push(i), this._rewards.push(i)
                }
            }, t.prototype._addFurnitureBonus = function (t) {
                var e = new a.RewardModelFurniture(t.id, t.name);
                0 == this._dic.hasOwnProperty(14..toString()) && (this._dic[14] = []), this._dic[14].push(e), this._rewards.push(e)
            }, t.prototype._addModelChangeBonus = function (t) {
                var e = t.id_from, i = t.id_tobe, n = t.message, o = new l.RewardModelModelChange(e, i, "", n),
                    r = t.type;
                0 == this._dic.hasOwnProperty(r.toString()) && (this._dic[r] = []), this._dic[r].push(o), this._rewards.push(o)
            }, t.prototype._addWarResultBonus = function (t) {
                var e = new f.RewardModelWarResult(t.count), i = t.type;
                0 == this._dic.hasOwnProperty(i.toString()) && (this._dic[i] = []), this._dic[i].push(e), this._rewards.push(e)
            }, t
        }();
    e.DutyEndModel = y;
    var v = function () {
        function t(t) {
            this._o = t
        }

        return Object.defineProperty(t.prototype, "type", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_type")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "count", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_count")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "id", {
            get: function () {
                return 11 == this.type ? n.ObjUtil.getNumber(this._item, "api_ship_id") : n.ObjUtil.getNumber(this._item, "api_id")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "id_from", {
            get: function () {
                return n.ObjUtil.getNumber(this._item, "api_id_from")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "id_tobe", {
            get: function () {
                return n.ObjUtil.getNumber(this._item, "api_id_to")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "name", {
            get: function () {
                return n.ObjUtil.getString(this._item, "api_name")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "message_a", {
            get: function () {
                return n.ObjUtil.getString(this._item, "api_message_a")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "message", {
            get: function () {
                return n.ObjUtil.getString(this._item, "api_message")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "c_flag", {
            get: function () {
                return 1 == n.ObjUtil.getNumber(this._item, "api_c_flag")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "_item", {
            get: function () {
                return n.ObjUtil.getObject(this._o, "api_item")
            }, enumerable: !0, configurable: !0
        }), t
    }()
}