const function509 = function (t, e, i) {
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
    var o = i(7),
        r = i(148),
        s = i(149),
        a = i(187),
        _ = i(127),
        l = function () {
            function t() {
                this._arr = []
            }
            return t.prototype.hasIncentive = function () {
                return this._arr.length > 0
            }, t.prototype.getRewards = function () {
                return this._arr.concat()
            }, t.prototype.clearData = function () {
                this._arr = []
            }, t
        }();
    e.IncentiveModelHolder = l;
    var u = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e.prototype.setData = function (t) {
            if (this._arr = [], null != t) {
                var e = o.ObjUtil.getObjectArray(t, "api_item");
                if (null != e)
                    for (var i = 0, n = e; i < n.length; i++) {
                        var l = n[i],
                            u = (o.ObjUtil.getNumber(l, "api_mode"), o.ObjUtil.getNumber(l, "api_type")),
                            c = o.ObjUtil.getNumber(l, "api_mst_id"),
                            h = o.ObjUtil.getString(l, "api_getmes"),
                            p = void 0;
                        1 == u ? p = new a.RewardModelShip(c, h) : 2 == u ? p = new s.RewardModelSlotitem(c, 1, h) : 3 == u ? p = new _.RewardModelUseitem(c, 1, h) : 4 == u || 5 == u && (p = new r.RewardModelFurniture(c, "", h)), null != p && this._arr.push(p)
                    }
            }
        }, e
    }(l);
    e.IncentiveModelHolderEdit = u
}