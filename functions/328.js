const function328 = function (t, e, i) {
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
        s = i(7),
        a = function (t) {
            function e(e, i, n) {
                void 0 === n && (n = !0);
                var o = t.call(this) || this;
                return o._usedBauxite = !1, o._url = "api_req_hokyu/charge", o._kind = e, o._id_items = i, o._onslot = n, o
            }
            return n(e, t), Object.defineProperty(e.prototype, "usedBauxite", {
                get: function () {
                    return this._usedBauxite
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._connect = function () {
                this._post_data.api_kind = this._kind, this._post_data.api_id_items = this._id_items.join(","), this._post_data.api_onslot = this._onslot ? 1 : 0, t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                var e = s.ObjUtil.getNumArray(this._raw_data, "api_material");
                o.default.model.useItem.get(31).__setCount__(e[0]), o.default.model.useItem.get(32).__setCount__(e[1]), o.default.model.useItem.get(33).__setCount__(e[2]), o.default.model.useItem.get(34).__setCount__(e[3]), o.default.view.portMain.updateInfo();
                for (var i = s.ObjUtil.getObjectArray(this._raw_data, "api_ship"), n = 0; n < i.length; n++) {
                    var r = i[n],
                        a = s.ObjUtil.getNumber(r, "api_id"),
                        _ = s.ObjUtil.getNumber(r, "api_fuel"),
                        l = s.ObjUtil.getNumber(r, "api_bull"),
                        u = s.ObjUtil.getNumArray(r, "api_onslot", []),
                        c = o.default.model.ship.get(a);
                    c.__updateFuel__(_), c.__updateAmmo__(l), c.__updateOnSlot__(u)
                }
                var h = s.ObjUtil.getNumber(this._raw_data, "api_use_bou");
                this._usedBauxite = !!h, t.prototype._completedEnd.call(this)
            }, e
        }(r.APIBase);
    e.ChargeAPI = a
}