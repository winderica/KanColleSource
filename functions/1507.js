const function1507 = function (t, e, i) {
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
    var o = i(0),
        r = i(2),
        s = i(207),
        a = i(483),
        _ = i(252),
        l = i(6),
        u = i(36),
        c = i(484),
        h = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._layer = e, n._list = i, n
            }
            return n(e, t), e.prototype._start = function () {
                null == this._list || 0 == this._list.length ? this._endTask() : this._showTelop()
            }, e.prototype._showTelop = function () {
                var t = this;
                this._canvas = new PIXI.Container, this._layer.addChild(this._canvas);
                var e = new p;
                e.initialize(), e.alpha = 0, e.text.alpha = 0, e.text.position.set(3, 243), this._canvas.addChild(e), createjs.Tween.get(e).to({
                    alpha: 1
                }, 200).call(function () {
                    t._showTelop2(e)
                })
            }, e.prototype._showTelop2 = function (t) {
                var e = this;
                createjs.Tween.get(t.white).to({
                    alpha: 0
                }, 200).call(function () {
                    e._showTelop3(t)
                })
            }, e.prototype._showTelop3 = function (t) {
                var e = this;
                l.SE.play("222");
                var i = t.text.x;
                t.text.x = i + 132, createjs.Tween.get(t.text).to({
                    x: i + 38,
                    alpha: 1
                }, 200).to({
                    x: i
                }, 100).wait(700).to({
                    x: i - 38
                }, 100).to({
                    x: i - 132,
                    alpha: 0
                }, 200).call(function () {
                    e._showTelop4(t)
                })
            }, e.prototype._showTelop4 = function (t) {
                var e = this;
                createjs.Tween.get(t).to({
                    alpha: 0
                }, 300).call(function () {
                    t.parent.removeChild(t), o.default.sound.bgm.play(132, !0, 1e3), e._bonus(null)
                })
            }, e.prototype._bonus = function (t) {
                var e = this;
                if (0 == this._list.length) return o.default.sound.bgm.fadeOut(1200), void(null == t ? this._endTask() : createjs.Tween.get(this._canvas).to({
                    alpha: 0
                }, 300).call(function () {
                    e._canvas.parent.removeChild(e._canvas), t.dispose(), e._endTask()
                }));
                var i = this._list.shift();
                if (1 == i.isUseitem()) {
                    var n = this._canvas,
                        r = i.mst_id,
                        l = new _.TaskBonusUseItem(n, r, i.count, !1, t);
                    l.start(function () {
                        e._bonus(l)
                    })
                } else if (1 == i.isShip()) {
                    var n = this._canvas,
                        r = i.mst_id,
                        u = new s.TaskBonusShip(n, r, !1, t);
                    u.start(function () {
                        e._bonus(u)
                    })
                } else {
                    if (1 != i.isSlotitem()) throw new Error("TaskEventBonus");
                    var n = this._canvas,
                        r = i.mst_id,
                        c = new a.TaskBonusSlot(n, r, i.count, i.level, !1, t);
                    c.start(function () {
                        e._bonus(c)
                    })
                }
            }, e
        }(r.TaskBase);
    e.TaskEventBonus = h;
    var p = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._bg = new PIXI.Sprite, e.addChild(e._bg), e._upper = new PIXI.Sprite, e.addChild(e._upper), e._down = new PIXI.Sprite, e.addChild(e._down), e._text = new PIXI.Sprite, e.addChild(e._text), e._white = new PIXI.Sprite, e.addChild(e._white), e
        }
        return n(e, t), Object.defineProperty(e.prototype, "bg", {
            get: function () {
                return this._bg
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "upper", {
            get: function () {
                return this._upper
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "down", {
            get: function () {
                return this._down
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "text", {
            get: function () {
                return this._text
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "white", {
            get: function () {
                return this._white
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.initialize = function () {
            this._bg.texture = c.BATTLE_RESULT_EVENT_BASE.getTexture(1), this._bg.position.set(0, 210), this._upper.texture = c.BATTLE_RESULT_EVENT_BASE.getTexture(4), this._upper.position.set(219, 138), this._down.texture = c.BATTLE_RESULT_EVENT_BASE.getTexture(4), this._down.rotation = Math.PI, this._down.position.set(984, 576), this._white.texture = u.BATTLE_RESULT_MAIN.getTexture(24), this._white.position.set(0, 140), this._text.texture = c.BATTLE_RESULT_EVENT_BASE.getTexture(2)
        }, e
    }(PIXI.Container)
}