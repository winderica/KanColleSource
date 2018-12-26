const function1495 = function (t, e, i) {
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
    var o = i(19),
        r = i(1496),
        s = i(1497),
        a = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._friend = new s.DeckInfoPanelFriend, e._friend.x = 129, e._friend.y = 116, e.addChild(e._friend), e._enemy = new r.DeckInfoPanelEnemy, e._enemy.x = 612, e._enemy.y = 116, e.addChild(e._enemy), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "friend", {
                get: function () {
                    return this._friend
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "enemy", {
                get: function () {
                    return this._enemy
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t, e, i, n, o) {
                this._friend.initialize(t, e, i, o), this._enemy.initialize(n, o)
            }, e.prototype.show = function (t) {
                var e = new o.TweenTask;
                e.addTween(this._friend.createShowTween()), e.addTween(this._enemy.createShowTween()), e.start(function () {
                    null != t && t()
                })
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._friend.dispose(), this._enemy.dispose()
            }, e
        }(PIXI.Container);
    e.LayerDeckInfo = a
}