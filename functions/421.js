const function421 = function (t, e, i) {
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
        r = i(14),
        s = i(245),
        a = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), e.prototype._start = function () {
                this._load()
            }, e.prototype._load = function () {
                var t = this,
                    e = new r.UIImageLoader("duty");
                e.add("duty_main.json"), e.load(function () {
                    t._loadPosterGirlResoueces()
                })
            }, e.prototype._loadPosterGirlResoueces = function () {
                var t = this,
                    e = new r.UIImageLoader("duty");
                e.add("poster_girl/" + s.POSTER_GIRL + "1.png", s.POSTER_KEY_1), e.add("poster_girl/" + s.POSTER_GIRL + "2.png", s.POSTER_KEY_2), e.load(function () {
                    t._endTask()
                })
            }, e
        }(o.TaskBase);
    e.TaskLoadResources = a
}