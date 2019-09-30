const function1467 = function (t, e, i) {
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
    var o = i(16),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._num0001 = new PIXI.Sprite, e._num0001.anchor.set(0, 1), e._num0001.alpha = 0, e._num0010 = new PIXI.Sprite, e._num0010.anchor.set(0, 1), e._num0010.alpha = 0, e._num0100 = new PIXI.Sprite, e._num0100.anchor.set(0, 1), e._num0100.alpha = 0, e._num1000 = new PIXI.Sprite, e._num1000.anchor.set(0, 1), e._num1000.alpha = 0, e._critical = new PIXI.Sprite, e._critical.anchor.set(.5, 0), e._critical.visible = !1, e.addChild(e._num0001), e.addChild(e._num0010), e.addChild(e._num0100), e.addChild(e._num1000), e.addChild(e._critical), e
            }
            return n(e, t), e.prototype.initialize = function (t, e) {
                0 == e ? this._initializeForMiss() : (t = Math.min(t, 9999), t = Math.floor(t), this._initialize(t, e))
            }, e.prototype.play = function (t) {
                void 0 === t && (t = null), 1 == this._critical.visible && createjs.Tween.get(this._critical).wait(65).to({
                    alpha: 1
                }, 0).to({
                    x: 20
                }, 65).to({
                    x: 38
                }, 65).to({
                    x: 21
                }, 65).to({
                    x: 36
                }, 65).to({
                    x: 26
                }, 65).to({
                    x: 32
                }, 65).to({
                    x: 27
                }, 65).to({
                    x: 30
                }, 65).to({
                    x: 29
                }, 65), createjs.Tween.get(this._num1000).to({
                    alpha: 1
                }, 0).to({
                    y: -21
                }, 135).to({
                    y: 0
                }, 135).to({
                    y: -7
                }, 100).to({
                    y: 0
                }, 100), createjs.Tween.get(this._num0100).wait(65).to({
                    alpha: 1
                }, 0).to({
                    y: -21
                }, 135).to({
                    y: 0
                }, 135).to({
                    y: -7
                }, 100).to({
                    y: 0
                }, 100), createjs.Tween.get(this._num0010).wait(130).to({
                    alpha: 1
                }, 0).to({
                    y: -21
                }, 135).to({
                    y: 0
                }, 135).to({
                    y: -7
                }, 100).to({
                    y: 0
                }, 100);
                var e = createjs.Tween.get(this._num0001).wait(200).to({
                    alpha: 1
                }, 0).to({
                    y: -21
                }, 135).to({
                    y: 0
                }, 135).to({
                    y: -7
                }, 100).to({
                    y: 0
                }, 100).wait(265);
                null != t && e.call(t)
            }, e.prototype._initializeForMiss = function () {
                this._num1000.visible = !1, this._num0100.visible = !1, this._num0010.visible = !1, this._num0001.texture = o.BATTLE_MAIN.getTexture(19), this._num1000.position.set(-47, 0)
            }, e.prototype._initialize = function (t, e) {
                var i;
                2 == e ? (i = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29], this._critical.texture = o.BATTLE_MAIN.getTexture(18), this._critical.position.set(29, -7), this._critical.alpha = 0, this._critical.visible = !0) : i = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
                var n = !1,
                    r = Math.floor(t / 1e3);
                r > 0 && (n = !0, this._num1000.texture = o.BATTLE_MAIN.getTexture(i[r]));
                var s = Math.floor(t % 1e3 / 100);
                (1 == n || s > 0) && (n = !0, this._num0100.texture = o.BATTLE_MAIN.getTexture(i[s]));
                var a = Math.floor(t % 100 / 10);
                (1 == n || a > 0) && (n = !0, this._num0010.texture = o.BATTLE_MAIN.getTexture(i[a]));
                var _ = t % 10;
                this._num0001.texture = o.BATTLE_MAIN.getTexture(i[_]), this._num0001.position.set(47, 0), this._num0010.position.set(26, 0), this._num0100.position.set(5, 0), this._num1000.position.set(-17, 0)
            }, e
        }(PIXI.Container);
    e.DamageNumber = r
}