const function340 = function (t, e, i) {
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
        r = i(10),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._url = "api_get_member/ndock", e
            }
            return n(e, t), e.prototype._completedEnd = function () {
                var e = o.default.model.ndock.get(1),
                    i = o.default.model.ndock.get(2),
                    n = o.default.model.ndock.get(3),
                    r = o.default.model.ndock.get(4);
                o.default.model.ndock.setData(this._raw_data);
                var s = o.default.model.ndock.get(1),
                    a = o.default.model.ndock.get(2),
                    _ = o.default.model.ndock.get(3),
                    u = o.default.model.ndock.get(4);
                if (1 == e.state && 0 == s.state) {
                    var l = o.default.model.ship.get(e.shipMemID);
                    l.__updateNowHp__(l.hpMax), l.__updateNDockTime__(0), l.__updateNDockItem__([0, 0]), l.tired < 40 && l.__updateCond__(40)
                }
                if (1 == i.state && 0 == a.state) {
                    var l = o.default.model.ship.get(i.shipMemID);
                    l.__updateNowHp__(l.hpMax), l.__updateNDockTime__(0), l.__updateNDockItem__([0, 0]), l.tired < 40 && l.__updateCond__(40)
                }
                if (1 == n.state && 0 == _.state) {
                    var l = o.default.model.ship.get(n.shipMemID);
                    l.__updateNowHp__(l.hpMax), l.__updateNDockTime__(0), l.__updateNDockItem__([0, 0]), l.tired < 40 && l.__updateCond__(40)
                }
                if (1 == r.state && 0 == u.state) {
                    var l = o.default.model.ship.get(r.shipMemID);
                    l.__updateNowHp__(l.hpMax), l.__updateNDockTime__(0), l.__updateNDockItem__([0, 0]), l.tired < 40 && l.__updateCond__(40)
                }
                t.prototype._completedEnd.call(this)
            }, e
        }(r.APIBase);
    e.NDockAPI = s
}