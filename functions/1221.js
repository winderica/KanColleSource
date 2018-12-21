const function1221 = function (t, e, i) {
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
    var o = i(5), r = i(0), s = i(2), a = i(27), _ = i(19), l = i(15), u = i(135), c = i(1222), h = function (t) {
        function e(e, i, n, o, r) {
            var s = t.call(this) || this;
            return s._layer = e, s._ships_f = i, s._medal_num_f = n, s._ships_e = o, s._medal_num_e = r, s
        }

        return n(e, t), e.prototype.preload = function (t) {
            var e = new l.ShipLoader, i = this._ships_f[0];
            e.add(i.mst_id, i.isDamaged(), "full");
            var n = this._ships_e[0];
            e.add(n.mst_id, n.isDamaged(), "full"), e.load(function () {
                null != t && t()
            })
        }, e.prototype._start = function () {
            var t = this;
            this._view = new c.PracticeAnimMainView, this._view.initialize(this._ships_f, this._medal_num_f, this._ships_e, this._medal_num_e), r.default.view.addChild(this._view);
            var e = new _.TweenTask;
            e.addTween(createjs.Tween.get(this._view.upper).to({ alpha: 1 }, 200)), e.addTween(createjs.Tween.get(this._view.enemy.content).wait(200).to({
                x: 0,
                alpha: 1
            }, 200)), e.addTween(createjs.Tween.get(this._view.friend.content).wait(200).to({
                x: 0,
                alpha: 1
            }, 200)), e.start(function () {
                t._animation2()
            })
        }, e.prototype._animation2 = function () {
            var t = this, e = new a.ParallelTask;
            e.add(this._view.friend.getAnimationTask()), e.add(this._view.enemy.getAnimationTask()), e.start(function () {
                t._animation3()
            })
        }, e.prototype._animation3 = function () {
            var t = this, e = u.PRAC_MAIN.getTexture(5);
            this._line_g = new PIXI.extras.TilingSprite(e, 825, 45), this._line_g.rotation = 109 / 180 * Math.PI, this._line_g.position.set(o.default.width / 2 - 128 + 38, o.default.height), this._view.friend.addChild(this._line_g), e = u.PRAC_MAIN.getTexture(6), this._line_r = new PIXI.extras.TilingSprite(e, 825, 45), this._line_r.rotation = -71 / 180 * Math.PI, this._line_r.position.set(90, 0), this._view.enemy.addChild(this._line_r);
            var i = new _.TweenTask;
            i.addTween(createjs.Tween.get(this._line_g).to({
                x: o.default.width / 2 + 128,
                y: 0
            }, 200)), i.addTween(createjs.Tween.get(this._line_r).to({
                x: -128,
                y: o.default.height
            }, 200)), i.start(function () {
                t._animation4()
            })
        }, e.prototype._animation4 = function () {
            var t = this;
            this._view.friend.circle.visible = !0, this._view.enemy.circle.visible = !0;
            var e = new _.TweenTask;
            e.addTweens([createjs.Tween.get(this._view.friend.circle.scale).to({
                x: 1,
                y: 1
            }, 600), createjs.Tween.get(this._view.friend.circle).to({ rotation: 4 * Math.PI }, 600), createjs.Tween.get(this._view.enemy.circle.scale).to({
                x: 1,
                y: 1
            }, 600), createjs.Tween.get(this._view.enemy.circle).to({ rotation: 4 * Math.PI }, 600)]), e.start(function () {
                t._animation5()
            })
        }, e.prototype._animation5 = function () {
            var t = this, e = new _.TweenTask;
            e.addTweens([createjs.Tween.get(this._line_g).wait(400).to({ x: 773 }, 500), createjs.Tween.get(this._line_r).wait(400).to({ x: -173 }, 500), createjs.Tween.get(this._view.friend.content).wait(400).to({ x: 45 }, 100).to({
                x: -375,
                alpha: 0
            }, 400), createjs.Tween.get(this._view.enemy.content).wait(400).to({ x: -45 }, 100).to({
                x: 375,
                alpha: 0
            }, 400), createjs.Tween.get(this._view.upper).wait(500).to({
                y: -54,
                alpha: 0
            }, 400)]), e.start(function () {
                r.default.view.removeChild(t._view), t._endTask()
            })
        }, e.prototype._endTask = function () {
            this._layer = null, this._ships_f = null, this._ships_e = null, this._view.dispose(), this._view = null, t.prototype._endTask.call(this)
        }, e
    }(s.TaskBase);
    e.StartAnimationTask = h
}