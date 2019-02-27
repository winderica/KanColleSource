const function1070 = function (t, e, i) {
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
        s = i(14),
        a = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._mst_id = e, n._target = i, n
            }
            return n(e, t), e.prototype.cancel = function () {
                this._target = null
            }, e.prototype._start = function () {
                var t = this,
                    e = new s.ShipLoader;
                e.add(this._mst_id, !1, "card"), e.load(function () {
                    if (null != t._target) {
                        var e = o.default.resources.getShip(t._mst_id, !1, "card");
                        t._target.texture = e
                    }
                    t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._target = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase);
    e.TaskShowShipCard = a
}