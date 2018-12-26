const function348 = function (t, e, i) {
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
        s = i(68),
        a = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._maps = e, i
            }
            return n(e, t), e.prototype._start = function () {
                this._load()
            }, e.prototype._load = function () {
                for (var t = this, e = o.default.resources.gauge.createLoaderHorizontal(), i = 0, n = this._maps; i < n.length; i++) {
                    var r = n[i];
                    if ((0 != r.defeat_required || 0 != r.gauge_max) && 0 != r.isOpened()) {
                        var a = r.area_id,
                            _ = r.map_no,
                            l = r.getGaugeNum(),
                            u = s.GaugeSetModel.createKey(a, _, l);
                        e.add(u)
                    }
                }
                e.count > 0 ? e.load(function () {
                    t._endTask()
                }) : this._endTask()
            }, e.prototype._endTask = function () {
                this._maps = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase);
    e.TaskLoadGaugeResources = a
}