const function1409 = function (t, e, i) {
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
        r = i(20),
        s = i(64),
        a = i(24),
        _ = i(6),
        u = i(16),
        l = function (t) {
            function e(e, i, n, o, r) {
                void 0 === r && (r = 0);
                var s = t.call(this) || this;
                return s._layer = e, s._x = i, s._y = n, s._scaleX = o, s._delay = r, s
            }
            return n(e, t), e.prototype._start = function () {
                this._wait()
            }, e.prototype._wait = function () {
                var t = this;
                if (this._delay <= 0) return void this._anim();
                createjs.Tween.get(null).wait(this._delay).call(function () {
                    t._anim()
                })
            }, e.prototype._anim = function () {
                var t = this,
                    e = new c;
                e.x = this._x, e.y = this._y, e.scale.x = this._scaleX, this._layer.addChild(e);
                var i = new r.TweenTask;
                e.smoke1.position.set(0, -15), e.smoke1.scale.set(0), e.smoke1.alpha = 0, i.addTween(createjs.Tween.get(e.smoke1).to({
                    alpha: 1,
                    scaleX: 1,
                    scaleY: 1
                }, 120).to({
                    alpha: .2,
                    scaleX: 2.5,
                    scaleY: 2.5
                }, 450).to({
                    alpha: 0,
                    scaleX: 2.6,
                    scaleY: 2.6
                }, 100)), e.smoke2.position.set(-18, -30), e.smoke2.scale.set(0), e.smoke2.alpha = .8, i.addTween(createjs.Tween.get(e.smoke2).wait(240).to({
                    scaleX: 1,
                    scaleY: 1
                }, 330).to({
                    alpha: 0,
                    scaleX: 1.3,
                    scaleY: 1.3
                }, 240)), e.smoke3.position.set(17, -36), e.smoke3.scale.set(0), e.smoke3.alpha = .8, i.addTween(createjs.Tween.get(e.smoke3).wait(330).to({
                    scaleX: 1,
                    scaleY: 1
                }, 300).to({
                    alpha: 0,
                    scaleX: 1.3,
                    scaleY: 1.3
                }, 240)), e.smoke4.position.set(0, -1), e.smoke4.scale.set(0), e.smoke4.alpha = .8, i.addTween(createjs.Tween.get(e.smoke4).wait(120).to({
                    y: -4,
                    scaleX: 1,
                    scaleY: 1
                }, 390).to({
                    alpha: 0,
                    scaleX: 1.3,
                    scaleY: 1.3
                }, 240)), _.SE.play("102"), i.start(function () {
                    t._layer.removeChild(e), t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._layer = null, t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase);
    e.TaskRocketFire = l;
    var c = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._smoke1 = new h, e.addChild(e._smoke1), e._smoke2 = new p, e.addChild(e._smoke2), e._smoke3 = new p, e.addChild(e._smoke3), e._smoke4 = new p, e.addChild(e._smoke4), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "smoke1", {
                get: function () {
                    return this._smoke1
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "smoke2", {
                get: function () {
                    return this._smoke2
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "smoke3", {
                get: function () {
                    return this._smoke3
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "smoke4", {
                get: function () {
                    return this._smoke4
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(PIXI.Container),
        h = function (t) {
            function e() {
                return t.call(this, u.BATTLE_MAIN.getTexture(113)) || this
            }
            return n(e, t), e
        }(s.CenteringSprite),
        p = function (t) {
            function e() {
                var e = t.call(this) || this,
                    i = new PIXI.Sprite(u.BATTLE_MAIN.getTexture(112));
                return i.x = -33, i.y = -89, e.addChild(i), e
            }
            return n(e, t), e
        }(a.Container)
}