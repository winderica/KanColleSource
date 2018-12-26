const function762 = function (t, e, i) {
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
            function e() {
                return t.call(this) || this
            }
            return n(e, t), e.prototype._start = function () {
                this._load01()
            }, e.prototype._load01 = function () {
                var t = this,
                    e = new r.UIImageLoader("remodel");
                e.add("6slot_huki1_c.png"), e.add("6slot_huki1_r.png"), e.add("6slot_huki1_l.png"), e.add("6slot_huki2.png"), e.load(function () {
                    t._load02()
                })
            }, e.prototype._load02 = function () {
                var t = this,
                    e = new r.UIImageLoader("remodel");
                e.add("remodel_main.json"), e.add("remodel_powerup.json"), e.add("remodel_gradeup.json"), e.add("remodel_animation.json"), e.load(function () {
                    t._endTask()
                })
            }, e
        }(o.TaskBase);
    e.TaskLoadResourcesRemodel = s
}