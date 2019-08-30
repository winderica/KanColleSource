const function20 = function (t, e, i) {
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
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._onComplete = function (t) {
                    var i = e._tweens.indexOf(t);
                    e._tweens.splice(i, 1), 0 == e._tweens.length && e._endTask()
                }, e._tweens = [], e
            }
            return n(e, t), e.prototype.addTween = function (t) {
                return t.setPaused(!0), this._tweens.push(t), this
            }, e.prototype.addTweens = function (t) {
                for (var e = 0, i = t; e < i.length; e++) {
                    var n = i[e];
                    this.addTween(n)
                }
                return this
            }, e.prototype._start = function () {
                if (0 == this._tweens.length) {
                    var t = createjs.Tween.get(this);
                    this._tweens.push(t)
                }
                for (var e = 0, i = this._tweens; e < i.length; e++) {
                    var t = i[e];
                    t.call(this._onComplete), t.setPaused(!1)
                }
            }, e
        }(o.TaskBase);
    e.TweenTask = r
}