const function494 = function (t, e, i) {
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
    var o = i(495),
        r = i(496),
        s = function () {
            function t() {}
            return t.prototype.getMst = function (t) {
                return null == this._dic ? null : 0 == this._dic.hasOwnProperty(t.toString()) ? null : this._dic[t]
            }, t.prototype.getMapBGM = function (t, e) {
                var i = this._getMapBGMData(t, e);
                return null == i ? 0 : i.mapBGMID
            }, t.prototype.getCombatBGM = function (t, e, i, n) {
                var o = this._getMapBGMData(t, e);
                return null == o ? i ? 2 : 1 : o.getBGM(i, n)
            }, t.prototype.isSameBGM = function (t, e, i) {
                var n = this._getMapBGMData(t, e);
                return null != n && n.getDayBGM(i) == n.getNightBGM(i)
            }, t.prototype._getMapBGMData = function (t, e) {
                var i = t.toString() + e.toString();
                return 1 == this._dic_battle.hasOwnProperty(i) ? this._dic_battle[i] : null
            }, t
        }();
    e.BGMMstModelHolder = s;
    var a = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e.prototype.setMstBGMData = function (t) {
            if (this._dic = {}, null != t)
                for (var e = 0; e < t.length; e++) {
                    var i = new r.BGMMstModel(t[e]),
                        n = i.mstID;
                    n > 0 && (this._dic[n] = i)
                }
        }, e.prototype.setMapBGMData = function (t) {
            if (this._dic_battle = {}, null != t)
                for (var e = 0; e < t.length; e++) {
                    var i = t[e],
                        n = new o.BattleBGMMstModel(i),
                        r = n.mapID;
                    if (r > 0) {
                        var s = r.toString();
                        this._dic_battle[s] = n
                    }
                }
        }, e
    }(s);
    e.BGMMstModelHolderEdit = a
}