const function550 = function (t, e, i) {
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
    var o = i(23), r = i(2), s = i(17), a = function (t) {
        function e(e) {
            void 0 === e && (e = -1);
            var i = t.call(this) || this;
            i.rnd = 0, i._onComplete = function () {
                i._endTask()
            };
            return i.rnd = e >= 0 && e < 6 ? e : Math.floor(6 * Math.random()), i
        }

        return n(e, t), e.prototype._start = function () {
            var t = this, e = o.MathUtil.zeroPadding(this.rnd + 1, 2) + ".png";
            new s.UIImageLoader("title").add(e, "title_bg1").add("title2.png", "title_bg2").add("title_main.json").load(function () {
                t._onComplete()
            })
        }, e
    }(r.TaskBase);
    e.TaskLoadResourcesTitle = a
}