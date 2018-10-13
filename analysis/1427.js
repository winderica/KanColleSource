const function1427 = function (t, e, i) {
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
    var o = i(12), r = i(15), s = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._splash1 = new o.Sprite, e._splash2 = new o.Sprite, e._splash3 = new o.Sprite, e._splash1.anchor.set(.56, .95), e._splash1.position.set(129, 26), e._splash2.anchor.set(.77, .79), e._splash2.position.set(131, 26), e._splash3.anchor.set(.59, .9), e._splash3.position.set(137, 21), e._init(), e.addChild(e._splash1), e.addChild(e._splash2), e.addChild(e._splash3), e
        }

        return n(e, t), e.prototype.initialize = function () {
            this._splash1.texture = r.BATTLE_MAIN.getTexture(119), this._splash2.texture = r.BATTLE_MAIN.getTexture(118), this._splash3.texture = r.BATTLE_MAIN.getTexture(120)
        }, e.prototype.play = function () {
            var t = this;
            createjs.Tween.get(this._splash1).to({
                scaleX: 1,
                scaleY: 1
            }, 233).to({ alpha: 0 }, 333), createjs.Tween.get(this._splash2).wait(166).to({
                scaleX: 1,
                scaleY: 1
            }, 200).to({ alpha: 0 }, 200), createjs.Tween.get(this._splash3).wait(300).to({
                scaleX: 1,
                scaleY: 1
            }, 133).to({ alpha: 0 }, 133).call(function () {
                t._init(), t.emit("complete")
            })
        }, e.prototype._init = function () {
            this._splash1.alpha = 1, this._splash1.scale.set(0), this._splash2.alpha = 1, this._splash2.scale.set(0), this._splash3.alpha = 1, this._splash3.scale.set(0)
        }, e
    }(PIXI.Container);
    e.WaterColumn = s
}