/*
 * called by `482.js`
 * BGM
 */
const function487 = function (t, e, i) {
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
    var o = i(488),
        r = i(489),
        s = function () {
            function t() {
            }

            // get port bgm data
            t.prototype.getMst = function (t) {
                return null == this._dic ? null : 0 == this._dic.hasOwnProperty(t.toString()) ? null : this._dic[t]
            };
            // get map moving bgm id
            t.prototype.getMapBGM = function (t, e) {
                var i = this._getMapBGMData(t, e);
                return null == i ? 0 : i.mapBGMID
            };
            // get map battle bgm id (array, [day, night])
            t.prototype.getCombatBGM = function (t, e, i, n) {
                var o = this._getMapBGMData(t, e);
                return null == o ? i ? 2 : 1 : o.getBGM(i, n)
            };
            // is BGMs of day and night are same
            t.prototype.isSameBGM = function (t, e, i) {
                var n = this._getMapBGMData(t, e);
                return null != n && n.getDayBGM(i) == n.getNightBGM(i)
            };
            /*
             * get battle bgm data
             * t: number; // area(海域) id
             * e: number; // inner map id
             */
            t.prototype._getMapBGMData = function (t, e) {
                var i = t.toString() + e.toString();
                return 1 == this._dic_battle.hasOwnProperty(i) ? this._dic_battle[i] : null
            };
            return t
        }();
    e.BGMMstModelHolder = s;
    // class a extends s
    var a = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        n(e, t);
        // set port bgm data
        e.prototype.setMstBGMData = function (t) {
            if (this._dic = {}, null != t) for (var e = 0; e < t.length; e++) {
                var i = new r.BGMMstModel(t[e]), n = i.mstID;
                n > 0 && (this._dic[n] = i)
            }
        };
        // set map bgm data
        e.prototype.setMapBGMData = function (t) {
            if (this._dic_battle = {}, null != t) for (var e = 0; e < t.length; e++) {
                var i = t[e], n = new o.BattleBGMMstModel(i), r = n.mapID;
                if (r > 0) {
                    var s = r.toString();
                    this._dic_battle[s] = n
                }
            }
        };
        return e
    }(s);
    e.BGMMstModelHolderEdit = a
}