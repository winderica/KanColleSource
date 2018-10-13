const function1224 = function (t, e, i) {
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
    var o = i(5), r = i(1225), s = i(1228), a = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._enemy = new r.Panel(!1), e._enemy.position.set(o.default.width / 2, 0), e.addChild(e._enemy), e._friend = new r.Panel(!0), e.addChild(e._friend), e._upper = new s.PracticeTitleBar, e._upper.position.set(38, 56), e._upper.alpha = 0, e.addChild(e._upper), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "enemy", {
            get: function () {
                return this._enemy
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "friend", {
            get: function () {
                return this._friend
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "upper", {
            get: function () {
                return this._upper
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function (t, e, i, n) {
            this._friend.initialize(t, e), this._enemy.initialize(i, n), this._upper.initialize("\u6f14\u7fd2")
        }, e.prototype.dispose = function () {
            this.removeChildren(), this._enemy.dispose(), this._friend.dispose(), this._upper.dispose()
        }, e
    }(PIXI.Container);
    e.PracticeAnimMainView = a
}