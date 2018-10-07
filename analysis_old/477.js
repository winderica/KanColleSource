/*
 * the function called by `476.js`
 * LBAS(基地航空隊)
 */
const function477 = function (t, e, i) {
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
        r = i(478),
        s = function () {
            function t() {
                /*
                 * key: number, the id of world(海域)
                 * value: array, item is the object of LBAS info (name, squadrons, etc.), length is the number of available LBAS.
                 */
                this._dic = {}
            }

            // `t`: world(海域) id
            t.prototype.getAirUnitList = function (t) {
                return null == this._dic ? [] : null == this._dic[t] ? [] : this._dic[t]
            };
            /*
             * `t`: world(海域) id
             * `e`: LBAS id(第e基地航空隊)
             */
            t.prototype.getAirUnit = function (t, e) {
                var i = this.getAirUnitList(t);
                if (null == i) return null;
                for (var n = 0, o = i; n < o.length; n++) {
                    var r = o[n];
                    if (r.id == e) return r
                }
                return null
            };
            /*
             * get LBAS whose state is `出撃`
             * `t`: world(海域) id
             */
            t.prototype.getReadyAirUnitList = function (t) {
                const e = [], i = this.getAirUnitList(t), o = i;
                for (let n = 0; n < o.length; n++) {
                    const r = o[n];
                    1 == r.airUnitState && (0 != r.hasActiveSquadron() && e.push(r))
                }
                return e
            };
            return t;
        }();
    e.AirUnitModelHolder = s;
    // class a extends s
    const a = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        n(e, t);
        /*
         * set all LBAS of one world(海域)
         */
        e.prototype.setData = function (t) {
            if (this._dic = {}, null != t)
                for (var e = 0, i = t; e < i.length; e++) {
                    var n = i[e], o = new r.AirUnitModelEdit(n), s = o.area_id;
                    null == this._dic[s] && (this._dic[s] = new Array), this._dic[s].push(o)
                }
        };
        /*
         * add one LBAS to one world(海域)
         */
        e.prototype.addData = function (t) {
            if (null != this._dic) {
                var e = new r.AirUnitModelEdit(t), i = e.area_id;
                null == this._dic[i] && (this._dic[i] = new Array), this._dic[i].push(e)
            }
        };
        /*
         * `t`: world(海域) id
         * `e`: LBAS id(第e基地航空隊)
         * `i`: squadron id(第i中隊)
         * `n`: squadrons data ?
         * `r`: api_distance(戦闘行動半径) ?
         */
        e.prototype.updateData = function (t, e, i, n, r) {
            var s = this.getAirUnit(t, e),
                a = s.squadrons[i], // before update
                _ = a.state,
                u = a.mem_id; // api_slotid, 装備固有ID　0=なし
            s.updateSquadronData(n, r);
            var l = s.squadrons[i]; // after update
            // 0=未配属　1=配属済み　2=配置転換中
            if (1 == l.state) {
                o.default.model.slot.deleteUnsetData(l.mem_id)
            }
            if (1 == _) {
                let c = false; // `c`: unchanged
                const p = s.squadrons;
                for (let h = 0; h < p.length; h++) {
                    const d = p[h];
                    if (1 == d.state && d.mem_id == u) {
                        c = true;
                        break
                    }
                }
                0 == c && o.default.model.slot.addAirUnitRelocation(u)
            }
        };
        return e;
    }(s);
    e.AirUnitModelHolderEdit = a
}