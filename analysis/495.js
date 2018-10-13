/*
 * the function called by `482.js`
 * expedition
 */
const function495 = function (t, e, i) {
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
    var o = i(496), r = i(13), s = function () {
        function t() {
        }

        /*
         * get expedition data
         * t: number; // expedition id
         */
        t.prototype.get = function (t) {
            return 1 == this._map.hasOwnProperty(t.toString()) ? this._map[t] : null
        };
        // get expeditions in an area
        t.prototype.getInArea = function (t, e) {
            var i = [];
            for (var n in this._map) {
                var o = this._map[n];
                // `state`: 達成状況　0=未出撃, 1=未達成, 2=達成済み
                o.areaID == t && (1 == e && -1 == o.state || i.push(o))
            }
            return i.sort(function (t, e) {
                return t.mstID - e.mstID
            }), i
        };
        // ?
        t.prototype.getserialID = function () {
            return this._serial_id
        };
        Object.defineProperty(t.prototype, "serial_id", {
            set: function (t) {
                this._serial_id = t
            }, enumerable: !0, configurable: !0
        });
        return t
    }();
    e.ExpeditionModelHolder = s;
    // class a extends s
    var a = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        n(e, t);
        // set expedition data
        e.prototype.setMstData = function (t) {
            if (this._map = {}, null != t) for (var e = 0; e < t.length; e++) {
                var i = t[e], n = new o.ExpeditionModelEdit(i), r = n.mstID;
                if (r > 0) {
                    var s = r.toString();
                    this._map[s] = n
                }
            }
        };
        // set expedition state
        e.prototype.setData = function (t) {
            if (null != this._map && null != t) for (var e = 0, i = t; e < i.length; e++) {
                var n = i[e], o = r.ObjUtil.getNumber(n, "api_mission_id");
                if (o > 0) {
                    var s = this.get(o);
                    if (null != s) {
                        var a = r.ObjUtil.getNumber(n, "api_state"), _ = a;
                        s.__setState__(_)
                    }
                }
            }
        };
        return e
    }(s);
    e.ExpeditionModelHolderEdit = a
}