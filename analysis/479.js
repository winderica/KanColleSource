/*
 * the function called by `478.js`
 * LBAS squadron(基地航空隊 - 中隊) (api_get_member/mapinfo.api_air_base.api_plane_info)
 */
const function479 = function (t, e, i) {
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
    const o = i(0),
        r = i(7),
        s = function () {
            function t(t) {
                this._initialize(t)
            }

            // 中隊ID
            Object.defineProperty(t.prototype, "id", {
                get: function () {
                    return r.ObjUtil.getNumber(this._o, "api_squadron_id")
                }, enumerable: !0, configurable: !0
            });
            // 0=未配属　1=配属済み　2=配置転換中
            Object.defineProperty(t.prototype, "state", {
                get: function () {
                    return r.ObjUtil.getNumber(this._o, "api_state")
                }, enumerable: !0, configurable: !0
            });
            // 装備固有ID　0=なし
            Object.defineProperty(t.prototype, "mem_id", {
                get: function () {
                    return r.ObjUtil.getNumber(this._o, "api_slotid")
                }, enumerable: !0, configurable: !0
            });
            // 稼働機数　未配属なら存在しない
            Object.defineProperty(t.prototype, "count", {
                get: function () {
                    return r.ObjUtil.getNumber(this._o, "api_count")
                }, enumerable: !0, configurable: !0
            });
            // 最大機数　未配属なら存在しない
            Object.defineProperty(t.prototype, "countMax", {
                get: function () {
                    return r.ObjUtil.getNumber(this._o, "api_max_count")
                }, enumerable: !0, configurable: !0
            });
            // コンディション　1=通常, 2=黄疲労, 3=赤疲労？　未配属なら存在しない
            Object.defineProperty(t.prototype, "fatigue", {
                get: function () {
                    return r.ObjUtil.getNumber(this._o, "api_cond")
                }, enumerable: !0, configurable: !0
            });
            // 装備ID
            Object.defineProperty(t.prototype, "mst_id", {
                get: function () {
                    return null == this._model ? -1 : this._model.mstID
                }, enumerable: !0, configurable: !0
            });
            // 艦載機熟練度　1以上の時のみ存在
            Object.defineProperty(t.prototype, "skill_level", {
                get: function () {
                    return null == this._model ? 0 : this._model.skillLevel
                }, enumerable: !0, configurable: !0
            });
            // 改修Level
            Object.defineProperty(t.prototype, "level", {
                get: function () {
                    return null == this._model ? 0 : this._model.level
                }, enumerable: !0, configurable: !0
            });
            // is 配置転換中 ?
            t.prototype.isRelocation = function () {
                return o.default.model.slot.getAirUnitRelocation().indexOf(this.mem_id) >= 0
            };
            t.prototype._initialize = function (t) {
                this._o = t;
                // `_model`: equipment data
                this._model = o.default.model.slot.get(this.mem_id)
            };
            return t
        }();
    e.AirUnitSquadronModel = s;
    // class a extends s
    const a = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        n(e, t);
        e.prototype.update = function (t) {
            this._initialize(t)
        };
        return e
    }(s);
    e.AirUnitSquadronModelEdit = a
}