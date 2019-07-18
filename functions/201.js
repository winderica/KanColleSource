const function201 = function (t, e, i) {
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
    var o = i(46),
        r = i(126),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._rewards = [], e
            }
            return n(e, t), Object.defineProperty(e.prototype, "rewards", {
                get: function () {
                    return this._rewards
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.add = function (t, e) {
                var i = new r.RewardModelUseitem(t, e);
                return this._rewards.push(i), this
            }, e
        }(o.RewardModel);
    e.RewardModelMultiUseitem = s
}