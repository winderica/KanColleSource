const function1425 = function (t, e, i) {
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
    var o = i(15), r = i(1426), s = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._gauge_bg = new PIXI.Sprite, e._gauge = new r.BannerHPBar, e._frame = new PIXI.Sprite, e._frame.y = -10, e.addChild(e._gauge_bg), e.addChild(e._gauge), e.addChild(e._frame), e
        }

        return n(e, t), e.prototype.initialize = function (t, e, i, n) {
            this._friend = n, this._gauge_bg.texture = o.BATTLE_MAIN.getTexture(45), n ? (this._gauge_bg.x = 240, this._gauge.x = 240, this._frame.texture = 0 == i ? o.BATTLE_MAIN.getTexture(46) : o.BATTLE_MAIN.getTexture(47)) : (this._gauge_bg.x = -10, this._gauge.x = -10, this._frame.x = -15, this._frame.texture = 0 == i ? o.BATTLE_MAIN.getTexture(43) : o.BATTLE_MAIN.getTexture(44)), this.updateHp(t, e)
        }, e.prototype.updateHp = function (t, e) {
            this._gauge.draw(t / e)
        }, e
    }(PIXI.Container);
    e.BannerFrame = s
}