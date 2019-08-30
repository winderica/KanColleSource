const function1526 = function (t, e, i) {
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
    var o = i(1527),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._items = new Array, e
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this._resetItems();
                var e = 0;
                e = 7 == t.length ? 0 : 68;
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    if (null != n) {
                        var r = new o.BannerInfoEnemy;
                        r.alpha = 0, r.y = e + 68 * i, this._items.push(r);
                        var s = n.name,
                            a = 0;
                        "elite" == n.yomi ? a = 1 : "flagship" == n.yomi && (a = 2), r.initialize(s, a), this.addChild(r)
                    }
                }
            }, e.prototype.dispose = function () {
                this._resetItems(), this.removeChildren(), this._items = null
            }, e.prototype.createShowTweens = function (t) {
                for (var e = [], i = 0; i < this._items.length; i++) {
                    var n = this._items[i];
                    n.x += 15;
                    var o = createjs.Tween.get(n).wait(t + 100 * i).to({
                        x: n.x - 15,
                        alpha: 1
                    }, 300);
                    e.push(o)
                }
                return e
            }, e.prototype.createHideTweens = function (t) {
                for (var e = [], i = 0; i < this._items.length; i++) {
                    var n = this._items[i],
                        o = createjs.Tween.get(n).wait(t + 100 * (this._items.length - 1 - i)).to({
                            x: n.x + 15,
                            alpha: 0
                        }, 300);
                    e.push(o)
                }
                return e
            }, e.prototype._resetItems = function () {
                for (null == this._items && (this._items = []); this._items.length > 0;) {
                    var t = this._items.pop();
                    null != t.parent && t.parent.removeChild(t), t.dispose()
                }
            }, e
        }(PIXI.Container);
    e.BannerInfoEnemyCanvas = r
}