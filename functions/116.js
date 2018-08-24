const function116 = function (t, e, i) {
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
    var o = i(7), r = i(10), s = i(199), a = i(143), _ = i(126), u = function (t) {
        function e(e, i, n) {
            var o = t.call(this) || this;
            return o._url = "api_req_member/itemuse", o._result = new c, o._mst_id = e, o._force = i, o._exchange_type = n, o
        }

        return n(e, t), Object.defineProperty(e.prototype, "result", {
            get: function () {
                return this._result
            }, enumerable: !0, configurable: !0
        }), e.prototype._connect = function () {
            this._post_data.api_useitem_id = this._mst_id, this._post_data.api_force_flag = this._force ? 1 : 0, this._exchange_type > 0 && (this._post_data.api_exchange_type = this._exchange_type), t.prototype._connect.call(this)
        }, e.prototype._completedEnd = function () {
            this._result.setData(this._raw_data), t.prototype._completedEnd.call(this)
        }, e
    }(r.APIBase);
    e.UseItemUseAPI = u;
    var l = function () {
        function t() {
            this._has_material_reward = !1, this._has_slotitem_reward = !1, this._has_coin_reward = !1, this._has_useitem_reward = !1, this._rewards = null
        }

        return Object.defineProperty(t.prototype, "rewards", {
            get: function () {
                return this._rewards
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "cautionFlg", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_caution_flag")
            }, enumerable: !0, configurable: !0
        }), t.prototype.hasCaution = function () {
            return this.cautionFlg >= 1
        }, t.prototype.hasMaterialReward = function () {
            return this._has_material_reward
        }, t.prototype.hasSlotitemReward = function () {
            return this._has_slotitem_reward
        }, t.prototype.hasCoinReward = function () {
            return this._has_coin_reward
        }, t.prototype.hasUseitemReward = function () {
            return this._has_useitem_reward
        }, t.prototype.getSlotitemObjects = function () {
            var t = [];
            if (null != this._o && this._o.hasOwnProperty("api_getitem")) {
                var e = o.ObjUtil.getObjectArray(this._o, "api_getitem");
                if (null != e) for (var i = 0, n = e; i < n.length; i++) {
                    var r = n[i], s = o.ObjUtil.getObject(r, "api_slotitem");
                    t.push(s)
                }
            }
            return t
        }, t
    }();
    e.UseItemUseResult = l;
    var c = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype.setData = function (t) {
            this._o = t, this._rewards = [], this._initMaterialReward(), this._initRewardItem()
        }, e.prototype._initRewardItem = function () {
            var t = o.ObjUtil.getObjectArray(this._o, "api_getitem");
            if (null != t) for (var e = 0, i = t; e < i.length; e++) {
                var n = i[e], r = o.ObjUtil.getNumber(n, "api_usemst"), u = o.ObjUtil.getNumber(n, "api_mst_id"),
                    l = o.ObjUtil.getNumber(n, "api_getcount");
                if (0 != l) if (2 == r) {
                    this._has_slotitem_reward = !0;
                    for (var c = 0; c < l; c++) this._rewards.push(new a.RewardModelSlotitem(u, 1))
                } else if (5 == r) this._has_coin_reward = !0, this._rewards.push((new s.RewardModelMultiUseitem).add(u, l)); else if (6 == r) if (10 == u || 11 == u || 12 == u) this._has_useitem_reward = !0, this._rewards.push((new s.RewardModelMultiUseitem).add(u, l)); else {
                    this._has_useitem_reward = !0;
                    for (var c = 0; c < l; c++) this._rewards.push(new _.RewardModelUseitem(u, 1))
                }
            }
        }, e.prototype._initMaterialReward = function () {
            var t = o.ObjUtil.getNumArray(this._o, "api_material");
            if (null != t) for (var e = [31, 32, 33, 34, 2, 1, 3, 4], i = null, n = 0; n < t.length; n++) {
                var r = t[n];
                if (!(r <= 0)) {
                    null == i && (this._has_material_reward = !0, i = new s.RewardModelMultiUseitem, this.rewards.push(i));
                    var a = e[n];
                    i.add(a, r)
                }
            }
        }, e
    }(l)
}