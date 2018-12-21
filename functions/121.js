const function121 = function (t, e, i) {
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
    var o = i(12), r = i(16), s = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._light1 = new PIXI.Sprite, e._light2 = new PIXI.Sprite, e._circle = new o.Sprite, e._light1.anchor.set(.5), e._light2.anchor.set(.5), e._circle.anchor.set(.5), e._light1.scale.set(0), e._light2.scale.set(0), e._circle.scale.set(0), e.addChild(e._light1), e.addChild(e._light2), e.addChild(e._circle), e
        }

        return n(e, t), e.prototype.initialize = function () {
            this._light1.texture = r.BATTLE_MAIN.getTexture(52), this._light2.texture = r.BATTLE_MAIN.getTexture(52);
            var t = new PIXI.Graphics;
            t.lineStyle(5, 16777215, .1), t.drawCircle(0, 0, 68), t.lineStyle(5, 16777215, .2), t.drawCircle(0, 0, 75), this._circle.addChild(t)
        }, e.prototype.play = function () {
            var t = this;
            this._activate(), createjs.Tween.get(this._circle).to({ scaleX: .3, scaleY: .3 }, 200).to({
                scaleX: .6,
                scaleY: .6,
                alpha: 0
            }, 200), createjs.Tween.get(this._light1.scale).to({ x: 1, y: 1 }, 100).wait(100).to({
                x: 0,
                y: 0
            }, 100), createjs.Tween.get(this._light2.scale).to({ x: 1, y: 1 }, 100).wait(100).to({
                x: 0,
                y: 0
            }, 100).call(function () {
                t._deactivate(), null != t.parent && (t.parent.removeChild(t), t.emit("complete"))
            })
        }, e.prototype._activate = function () {
            null == this._t1 && (this._t1 = createjs.Tween.get(this._light1).to({ rotation: 2 * Math.PI }, 1e3), this._t1.loop = !0), null == this._t2 && (this._light2.rotation = Math.PI / 4, this._t2 = createjs.Tween.get(this._light2).to({ rotation: 2 * -Math.PI }, 1e3), this._t2.loop = !0)
        }, e.prototype._deactivate = function () {
            null != this._t1 && (this._t1.setPaused(!0), this._t1 = null), null != this._t2 && (this._t2.setPaused(!0), this._t2 = null)
        }, e
    }(PIXI.Container);
    e.Picket = s
}