const function910 = function (t, e, i) {
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
    var o = i(2),
        r = i(13),
        s = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._event = e, i
            }
            return n(e, t), e.prototype._start = function () {
                this._load()
            }, e.prototype._load = function () {
                var t = this,
                    e = new r.UIImageLoader("sally");
                e.add("sally_common.json"), e.add("sally_top.json"), e.add("sally_sortie.json"), e.add("sally_practice.json"), e.add("sally_expedition.json"), e.add("sally_airunit.json"), e.add("sally_jin.json"), e.add("sally_map_parts.json"), this._event && (e.add("sally_event.json"), e.add("sally_strategymap.json"), e.add("sally_strategymap_s.json")), e.load(function () {
                    t._endTask()
                })
            }, e
        }(o.TaskBase);
    e.TaskLoadResourcesSally = s
}