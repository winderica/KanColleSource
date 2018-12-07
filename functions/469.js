const function469 = function (t, e, i) {
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
    var o = i(7), r = i(182), s = function (t) {
        function e(e) {
            var i = t.call(this, e) || this;
            return i._initPlaneFrom(), i
        }

        return n(e, t), e.prototype.getShipList = function () {
            for (var t = o.ObjUtil.getNumArray(this._o, "api_ship_id"), e = o.ObjUtil.getNumArray(this._o, "api_undressing_flag"), i = [], n = 0; n < t.length; n++) i.push({
                mem_id: t[n],
                damaged: 1 == e[n]
            });
            return i
        }, e
    }(r.AirWarDataBase);
    e.AirSupportData = s
}