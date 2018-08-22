const function409 = function (t, e, i) {
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
    var o = i(2), r = i(21), s = i(240), a = function (t) {
        function e() {
            return t.call(this) || this
        }

        return n(e, t), e.prototype._start = function () {
            this._load()
        }, e.prototype._load = function () {
            var t = this, e = new r.UIImageLoader("duty");
            e.add("duty_common.json"), 0 == s.POSTER_GIRL ? e.add("duty_poster_girl.json") : 1 == s.POSTER_GIRL ? e.add("duty_poster_girl_gyudon.json") : 2 == s.POSTER_GIRL ? e.add("duty_poster_girl_newyear.json") : 3 == s.POSTER_GIRL ? e.add("duty_poster_girl_sanma.json") : 4 == s.POSTER_GIRL ? e.add("duty_poster_girl_summer.json") : 5 == s.POSTER_GIRL && e.add("duty_poster_girl_xmas.json"), e.load(function () {
                t._endTask()
            })
        }, e
    }(o.TaskBase);
    e.TaskLoadResources = a
}