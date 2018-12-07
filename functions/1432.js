const function1432 = function (t, e, i) {
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
    var o = i(16), r = i(1433), s = i(1434), a = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._gauge_bg = new PIXI.Sprite, e._gauge = new s.BannerHPBar, e._frame = new PIXI.Sprite, e._frame.y = -10, e.addChild(e._gauge_bg), e.addChild(e._gauge), e.addChild(e._frame), e
        }

        return n(e, t), e.prototype.initialize = function (t, e, i, n, r) {
            this._index = i, this._friend = n, this._gauge_bg.texture = o.BATTLE_MAIN.getTexture(45), n ? (this._gauge_bg.x = 240, this._gauge.x = 240) : (this._gauge_bg.x = -10, this._gauge.x = -10, this._frame.x = -15), this._frame.texture = this._getTexture(i, n, r), this.updateHp(t, e)
        }, e.prototype.updateHp = function (t, e) {
            this._gauge.draw(t / e)
        }, e.prototype.getAnimationTween = function (t) {
            var e = this, i = this._frame.texture, n = new PIXI.Sprite(i);
            return n.x = this._frame.x, n.y = this._frame.y, this.addChild(n), this._frame.texture = this._getTexture1(this._index, this._friend), this._frame.alpha = 0, createjs.Tween.get(this._frame).wait(t).to({ alpha: 1 }, 600).call(function () {
                e.removeChild(n)
            })
        }, e.prototype._getTexture = function (t, e, i) {
            return 0 == i ? this._getTexture1(t, e) : this._getTexture2(t, e)
        }, e.prototype._getTexture1 = function (t, e) {
            return e ? 0 == t ? o.BATTLE_MAIN.getTexture(46) : o.BATTLE_MAIN.getTexture(47) : 0 == t ? o.BATTLE_MAIN.getTexture(43) : o.BATTLE_MAIN.getTexture(44)
        }, e.prototype._getTexture2 = function (t, e) {
            return e ? 0 == t ? r.BATTLE_MAIN2.getTexture(2) : r.BATTLE_MAIN2.getTexture(3) : 0 == t ? r.BATTLE_MAIN2.getTexture(0) : r.BATTLE_MAIN2.getTexture(1)
        }, e
    }(PIXI.Container);
    e.BannerFrame = a
}