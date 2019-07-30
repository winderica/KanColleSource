const function1407 = function (t, e, i) {
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
    var o = i(0),
        r = i(2),
        s = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype._getNormalAttackType = function (t, e, i, n) {
                if (1 == n) return 1;
                var r = t.stype;
                if (7 == r && 1 == e.isSubMarine()) return 2;
                if (7 == r || 11 == r || 18 == r) {
                    var s = t.mst_id,
                        a = t.name;
                    return 432 == s || 353 == s || 433 == s ? 0 : "\u30ea\u30b3\u30ea\u30b9\u68f2\u59eb" == a ? 0 : "\u6df1\u6d77\u6d77\u6708\u59eb" == a ? 0 : 1
                }
                if (t.isSubMarine()) return 3;
                if (e.isSubMarine()) return 6 == r || 10 == r || 16 == r || 17 == r ? 1 : 2;
                var _ = o.default.model.slot.getMst(i);
                return null == _ || 5 != _.equipTypeSp && 32 != _.equipTypeSp ? 0 : 3
            }, e.prototype._hasRocketEffect = function (t, e, i) {
                if (0 == e.isGround()) return !1;
                if (1 == i) return !1;
                for (var n = t.slots, o = 0, r = n; o < r.length; o++) {
                    var s = r[o];
                    if (null != s) {
                        var a = s.mst_id;
                        if (126 == a || 346 == a || 347 == a || 348 == a) return !0
                    }
                }
                return !1
            }, e.prototype._getDaihatsuEffectType = function (t, e) {
                if (1 == t.hasSlot(230)) return 1 == e.isGround() ? 5 : 0;
                var i = ["\u96e2\u5cf6\u68f2\u59eb", "\u7832\u53f0\u5c0f\u9b3c", "\u96c6\u7a4d\u5730\u68f2\u59eb", "\u96c6\u7a4d\u5730\u68f2\u59eb-\u58ca", "\u6cca\u5730\u6c34\u9b3c \u30d0\u30ab\u30f3\u30b9mode", "\u96c6\u7a4d\u5730\u68f2\u59eb \u30d0\u30ab\u30f3\u30b9mode", "\u96c6\u7a4d\u5730\u68f2\u59eb \u30d0\u30ab\u30f3\u30b9mode-\u58ca", "\u98db\u884c\u5834\u59eb"];
                if (1 == t.hasSlot(167)) {
                    if (1 == t.isSubMarine()) {
                        if (1 == e.isGround()) return 4
                    } else if (i.indexOf(e.name) >= 0) return 4;
                    return 0
                }
                return 1 == t.hasSlot(166) && i.indexOf(e.name) >= 0 ? 3 : 1 == t.hasSlot(193) && i.indexOf(e.name) >= 0 ? 3 : 1 == t.hasSlot(68) && i.indexOf(e.name) >= 0 ? 3 : 0
            }, e
        }(r.TaskBase);
    e.PhaseHougekiBase = s
}