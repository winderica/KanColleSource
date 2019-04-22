const function1381 = function (t, e, i) {
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
    var o = i(2),
        r = i(12),
        s = i(177),
        a = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._light = new r.Sprite, e._light.anchor.set(0, .5), e.addChild(e._light), e._animatin_task = new _(e), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "light", {
                get: function () {
                    return this._light
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t) {
                var e;
                e = 1 == t ? 8 : 7, this._light.texture = s.BATTLE_NIGHT.getTexture(e)
            }, e.prototype.getAnimationTask = function () {
                return this._animatin_task
            }, e
        }(PIXI.Container);
    e.SearchLight = a;
    var _ = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._light = e, i._light.light.scale.x = .74, i._light.light.alpha = 0, i
        }
        return n(e, t), e.prototype._start = function () {
            var t = this,
                e = this._light.light;
            createjs.Tween.get(e).to({
                scaleX: .95,
                scaleY: 1.12,
                alpha: .35
            }, 433).to({
                scaleX: 1,
                scaleY: 1.16,
                alpha: .5
            }, 166).to({
                scaleX: .98,
                scaleY: 1.16,
                alpha: .65
            }, 166).to({
                scaleX: .9,
                scaleY: 1.12,
                alpha: 1
            }, 433).to({
                scaleX: .9,
                scaleY: 1.12,
                alpha: .43
            }, 200).to({
                scaleX: .95,
                scaleY: 1.12,
                alpha: .35
            }, 266).to({
                scaleX: 1,
                scaleY: 1.16,
                alpha: .5
            }, 166).to({
                scaleX: .98,
                scaleY: 1.16,
                alpha: .65
            }, 166).to({
                scaleX: .9,
                scaleY: 1.12,
                alpha: 1
            }, 433).to({
                scaleX: .9,
                scaleY: 1.12,
                alpha: 0
            }, 200).wait(200).call(function () {
                t._endTask()
            })
        }, e.prototype._endTask = function () {
            this._light = null, t.prototype._endTask.call(this)
        }, e
    }(o.TaskBase)
}