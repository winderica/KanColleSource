/*
 * the function called by `477.js`
 * LBAS(基地航空隊)
 */
const function478 = function (t, e, i) {
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
    const o = i(7),
        r = i(479);
    const s = function () {
        function t(t) {
            this.name_tmp = null, this._state_tmp = -1, this._o = t, this._squadrons = [];
            for (var e = o.ObjUtil.getObjectArray(t, "api_plane_info"), i = 0, n = e; i < n.length; i++) {
                var s = n[i], a = new r.AirUnitSquadronModelEdit(s);
                this._squadrons.push(a)
            }
        }

        // getters
        Object.defineProperty(t.prototype, "area_id", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_area_id")
            }, enumerable: !0, configurable: !0
        });
        Object.defineProperty(t.prototype, "id", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_rid")
            }, enumerable: !0, configurable: !0
        });
        Object.defineProperty(t.prototype, "name_raw", {
            get: function () {
                return o.ObjUtil.getString(this._o, "api_name")
            }, enumerable: !0, configurable: !0
        });
        Object.defineProperty(t.prototype, "name", {
            get: function () {
                return null != this.name_tmp ? this.name_tmp : this.name_raw
            }, enumerable: !0, configurable: !0
        });
        Object.defineProperty(t.prototype, "state_tmp", {
            get: function () {
                return this._state_tmp
            }, set: function (t) {
                this._state_tmp = t
            }, enumerable: !0, configurable: !0
        });
        Object.defineProperty(t.prototype, "state_raw", {
            get: function () {
                // api_action_kind：行動指示　0=待機, 1=出撃, 2=防空, 3=退避, 4=休息
                return o.ObjUtil.getNumber(this._o, "api_action_kind")
            }, enumerable: !0, configurable: !0
        });
        Object.defineProperty(t.prototype, "airUnitState", {
            get: function () {
                return -1 != this._state_tmp ? this._state_tmp : this.state_raw
            }, enumerable: !0, configurable: !0
        });
        Object.defineProperty(t.prototype, "distance", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_distance")
            }, enumerable: !0, configurable: !0
        });
        Object.defineProperty(t.prototype, "squadrons", {
            get: function () {
                return this._squadrons
            }, enumerable: !0, configurable: !0
        });

        // instance methods
        t.prototype.updateStateFromTemporaryInfo = function () {
            return -1 != this.state_tmp && (this.state_tmp != this.state_raw && (this._o.api_action_kind = this._state_tmp, this._state_tmp = -1, !0))
        };
        t.prototype.updateNameFromTemporaryInfo = function () {
            return null != this.name_tmp && (this.name_tmp != this.name_raw && (this._o.api_name = this.name_tmp, this.name_tmp = null, !0))
        };
        t.prototype.hasActiveSquadron = function () {
            if (null == this._squadrons) return false;
            for (var t = 0, e = this._squadrons; t < e.length; t++) {
                var i = e[t];
                // state is `出撃`
                if (1 == i.state && !(i.mem_id <= 0 || i.count <= 0)) return true
            }
            return false
        };
        return t
    }();
    e.AirUnitModel = s;
    // class a extends s
    const a = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        n(e, t);
        e.prototype.updateSquadronData = function (t, e) {
            if (e >= 0 && (this._o.api_distance = e), null != t)
                for (var i = 0, n = t; i < n.length; i++) {
                    var r = n[i],
                        s = o.ObjUtil.getNumber(r, "api_squadron_id"),
                        _ = this.squadrons;
                    for (let a = 0; a < _.length; a++) {
                        var u = _[a];
                        u.id == s && u.update(r)
                    }
                }
        };
        return e;
    }(s);
    e.AirUnitModelEdit = a
}