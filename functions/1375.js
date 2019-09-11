const function1375 = function (t, e, i) {
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
        s = i(23),
        a = i(6),
        _ = i(16),
        l = function (t) {
            function e(e, i, n, o) {
                void 0 === o && (o = 0);
                var r = t.call(this) || this;
                return r._layer = e, r._x = i, r._y = n, r._delay = o, r
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
                    e = new u;
                e.x = this._x, e.y = this._y, this._layer.addChild(e);
                var i = new r.TweenTask;
                e.bomb0.position.set(39, -71), e.bomb0.scale.set(0), e.bomb0.alpha = 1, i.addTween(createjs.Tween.get(e.bomb0).wait(270).to({
                    scaleX: .7,
                    scaleY: .7
                }, 60).to({
                    alpha: 0,
                    scaleX: 1,
                    scaleY: 1
                }, 90)), e.bomb1.scale.set(.3), e.bomb1.alpha = 0, i.addTween(createjs.Tween.get(e.bomb1).to({
                    alpha: 1,
                    scaleX: 1,
                    scaleY: 1
                }, 120).to({
                    alpha: .8,
                    scaleX: 1.05,
                    scaleY: 1.05
                }, 60).to({
                    alpha: 0,
                    scaleX: 1.1,
                    scaleY: 1.1
                }, 90)), e.bomb2.scale.set(0), e.bomb2.alpha = 0, i.addTween(createjs.Tween.get(e.bomb2).to({
                    alpha: .6,
                    scaleX: .8,
                    scaleY: .8
                }, 90).to({
                    alpha: 1,
                    scaleX: 1,
                    scaleY: 1
                }, 90).to({
                    alpha: .7,
                    scaleX: 1.15,
                    scaleY: 1.15
                }, 150).to({
                    alpha: 0
                }, 240)), e.bomb3.position.set(-29, -72), e.bomb3.scale.set(.8), e.bomb3.alpha = 0, i.addTween(createjs.Tween.get(e.bomb3).wait(300).to({
                    alpha: 1,
                    scaleX: .85,
                    scaleY: .85
                }, 60).to({
                    alpha: 1,
                    scaleX: .95,
                    scaleY: .95
                }, 60).to({
                    alpha: 0,
                    scaleX: 1.1,
                    scaleY: 1.1
                }, 150)), e.bomb4.position.set(11, -72), e.bomb4.scale.set(.8), e.bomb4.alpha = 0, i.addTween(createjs.Tween.get(e.bomb4).wait(330).to({
                    alpha: 1,
                    scaleX: .85,
                    scaleY: .85
                }, 60).to({
                    scaleX: .95,
                    scaleY: .95
                }, 60).to({
                    alpha: 0,
                    scaleX: 1.1,
                    scaleY: 1.1
                }, 90)), e.bomb5.position.set(-14, -17), e.bomb5.scale.set(.8), e.bomb5.alpha = 0, i.addTween(createjs.Tween.get(e.bomb5).wait(270).to({
                    alpha: 1,
                    scaleX: .85,
                    scaleY: .85
                }, 60).to({
                    scaleX: .9,
                    scaleY: .9
                }, 120).to({
                    alpha: 0,
                    scaleX: 1.2,
                    scaleY: 1.2
                }, 120)), e.bomb6.position.set(36, 0), e.bomb6.scale.set(0), e.bomb6.alpha = 1, i.addTween(createjs.Tween.get(e.bomb6).wait(200).to({
                    scaleX: .7,
                    scaleY: .7
                }, 60).to({
                    alpha: 0,
                    scaleX: 1,
                    scaleY: 1
                }, 90)), e.bomb7.position.set(-39, -21), e.bomb7.scale.set(0), e.bomb7.alpha = 1, i.addTween(createjs.Tween.get(e.bomb7).wait(90).to({
                    scaleX: .7,
                    scaleY: .7
                }, 60).to({
                    alpha: 0,
                    scaleX: 1,
                    scaleY: 1
                }, 90)), i.addTween(createjs.Tween.get(null).call(function () {
                    a.SE.play("102")
                }).wait(200).call(function () {
                    a.SE.play("102")
                }).wait(200).call(function () {
                    a.SE.play("102")
                })), i.start(function () {
                    t._layer.removeChild(e), t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._layer = null, t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase);
    e.TaskRocketHit = l;
    var u = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._bomb0 = new d, e.addChild(e._bomb0), e._bomb1 = new h, e.addChild(e._bomb1), e._bomb2 = new c, e.addChild(e._bomb2), e._bomb3 = new p, e.addChild(e._bomb3), e._bomb4 = new p, e.addChild(e._bomb4), e._bomb5 = new p, e.addChild(e._bomb5), e._bomb6 = new d, e.addChild(e._bomb6), e._bomb7 = new d, e.addChild(e._bomb7), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "bomb0", {
                get: function () {
                    return this._bomb0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "bomb1", {
                get: function () {
                    return this._bomb1
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "bomb2", {
                get: function () {
                    return this._bomb2
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "bomb3", {
                get: function () {
                    return this._bomb3
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "bomb4", {
                get: function () {
                    return this._bomb4
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "bomb5", {
                get: function () {
                    return this._bomb5
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "bomb6", {
                get: function () {
                    return this._bomb6
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "bomb7", {
                get: function () {
                    return this._bomb7
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(PIXI.Container),
        c = function (t) {
            function e() {
                var e = t.call(this) || this,
                    i = new PIXI.Sprite(_.BATTLE_MAIN.getTexture(32));
                return i.x = -90, i.y = -113, e.addChild(i), e
            }
            return n(e, t), e
        }(s.Container),
        h = function (t) {
            function e() {
                var e = t.call(this) || this,
                    i = new PIXI.Sprite(_.BATTLE_MAIN.getTexture(33));
                return i.x = -74, i.y = -107, e.addChild(i), e
            }
            return n(e, t), e
        }(s.Container),
        p = function (t) {
            function e() {
                var e = t.call(this) || this,
                    i = new PIXI.Sprite(_.BATTLE_MAIN.getTexture(34));
                return i.x = -60, i.y = -45, e.addChild(i), e
            }
            return n(e, t), e
        }(s.Container),
        d = function (t) {
            function e() {
                var e = t.call(this) || this,
                    i = new PIXI.Sprite(_.BATTLE_MAIN.getTexture(35));
                return i.x = -26, i.y = -39, e.addChild(i), e
            }
            return n(e, t), e
        }(s.Container)
}