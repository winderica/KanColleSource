const function427 = function (t, e, i) {
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
    var o = i(5), r = i(19), s = i(2), a = i(12), _ = i(134), u = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._layer = e, i
        }

        return n(e, t), e.prototype._start = function () {
            this._canvas = new PIXI.Container, this._layer.addChild(this._canvas);
            var t = _.SALLY_MAP_PARTS.getTexture(1);
            this._bg = new PIXI.Sprite(t), this._bg.width = o.default.width, this._bg.anchor.set(.5, .5), this._bg.position.set(o.default.width / 2, o.default.height / 2), this._bg.scale.y = 0, this._canvas.addChild(this._bg), t = _.SALLY_MAP_PARTS.getTexture(0), this._light = new PIXI.Sprite(t), this._light.width = o.default.width, this._light.anchor.set(0, .5), this._light.position.set(o.default.width, o.default.height / 2), this._canvas.addChild(this._light), this._text1 = new a.Sprite(_.SALLY_MAP_PARTS.getTexture(2)), this._text1.anchor.set(.5, .5), this._text1.position.set(o.default.width / 2, o.default.height / 2), this._text1.scale.set(1.6), this._text1.alpha = 0, this._canvas.addChild(this._text1), this._text2 = new a.Sprite(_.SALLY_MAP_PARTS.getTexture(2)), this._text2.anchor.set(.5, .5), this._text2.position.set(o.default.width / 2, o.default.height / 2), this._text2.scale.set(1.6), this._text2.alpha = 0, this._canvas.addChild(this._text2), this._startAnimation()
        }, e.prototype._startAnimation = function () {
            var t = this, e = new r.TweenTask;
            e.addTweens([createjs.Tween.get(this._bg.scale).to({ y: 1 }, 200), createjs.Tween.get(this._light).to({ x: 0 }, 400).wait(150).to({ y: o.default.height / 2 + 8 }, 50).to({ y: o.default.height / 2 - 5 }, 50).to({ y: o.default.height / 2 }, 50), createjs.Tween.get(this._text1).wait(400).to({
                alpha: 1,
                scaleX: 1,
                scaleY: 1
            }, 200), createjs.Tween.get(this._text2).wait(300).to({
                alpha: 1,
                scaleX: 1,
                scaleY: 1
            }, 200)]), e.start(function () {
                createjs.Tween.get(t._canvas).to({ alpha: 0 }, 200).call(function () {
                    t._endTask()
                })
            })
        }, e.prototype._endTask = function () {
            this._canvas.removeChildren(), this._layer.removeChild(this._canvas), this._layer = null, t.prototype._endTask.call(this)
        }, e
    }(s.TaskBase);
    e.SallyAnimationTask = u
}