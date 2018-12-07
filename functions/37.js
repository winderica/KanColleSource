const function37 = function (t, e, i) {
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
    var o = i(0), r = i(143), s = i(144), a = i(15), _ = function (t) {
        function e(e, i, n, s) {
            var a = t.call(this, i) || this;
            if (a.LOG = !1, a._mst_id = 0, a._damaged = !1, a._onLoadComplete = function () {
                if (1 != a._aborted) if (null == a._sprite) a._endTask(); else {
                    var t = o.default.resources.getShip(a._mst_id, a._damaged, a._type);
                    a._sprite.texture = t, a._endTask()
                }
            }, a._type = e, n instanceof r.ShipModel) {
                var _ = n;
                a._mst_id = _.mstID, a._damaged = _.isDamaged()
            } else a._mst_id = n, a._damaged = s;
            return a
        }

        return n(e, t), e.prototype.start = function () {
            t.prototype.start.call(this)
        }, e.prototype._start = function () {
            this._mst_id > 0 ? this._load() : this._endTask()
        }, e.prototype._load = function () {
            var t = new a.ShipLoader;
            t.add(this._mst_id, this._damaged, this._type), t.load(this._onLoadComplete)
        }, e.prototype._log = function (t) {
            if (this.LOG) {
                o.default.model.ship.getMst(this._mst_id)
            }
        }, e
    }(s.TaskLoadBase);
    e.TaskLoadShipResource = _
}