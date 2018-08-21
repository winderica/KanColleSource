const function1461 = function (t, e, i) {
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
    var o = (i(0), i(2)), r = i(204), s = i(471), a = i(247), _ = i(6), u = i(36), l = i(124), c = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._layer = e, n._list = i, n
        }

        return n(e, t), e.prototype._start = function () {
            null == this._list || 0 == this._list.length ? this._endTask() : this._showTelop()
        }, e.prototype._showTelop = function () {
            var t = this;
            this._canvas = new PIXI.Container, this._layer.addChild(this._canvas);
            var e = new h;
            e.initialize(), e.alpha = 0, e.text.alpha = 0, e.text.position.set(3, 243), this._canvas.addChild(e), createjs.Tween.get(e).to({ alpha: 1 }, 200).call(function () {
                t._showTelop2(e)
            })
        }, e.prototype._showTelop2 = function (t) {
            var e = this;
            createjs.Tween.get(t.white).to({ alpha: 0 }, 200).call(function () {
                e._showTelop3(t)
            })
        }, e.prototype._showTelop3 = function (t) {
            var e = this;
            _.SE.play("222");
            var i = t.text.x;
            t.text.x = i + 132, createjs.Tween.get(t.text).to({
                x: i + 38,
                alpha: 1
            }, 200).to({ x: i }, 100).wait(700).to({ x: i - 38 }, 100).to({
                x: i - 132,
                alpha: 0
            }, 200).call(function () {
                e._showTelop4(t)
            })
        }, e.prototype._showTelop4 = function (t) {
            var e = this;
            createjs.Tween.get(t).to({ alpha: 0 }, 300).call(function () {
                t.parent.removeChild(t), e._bonus(null)
            })
        }, e.prototype._bonus = function (t) {
            var e = this;
            if (0 == this._list.length) return void(null == t ? this._endTask() : createjs.Tween.get(this._canvas).to({ alpha: 0 }, 300).call(function () {
                e._canvas.parent.removeChild(e._canvas), t.dispose(), e._endTask()
            }));
            var i = this._list.shift();
            if (1 == i.isUseitem()) {
                var n = this._canvas, o = i.mst_id, _ = new a.TaskBonusUseItem(n, o, i.count, t);
                _.start(function () {
                    e._bonus(_)
                })
            } else if (1 == i.isShip()) {
                var n = this._canvas, o = i.mst_id, u = new r.TaskBonusShip(n, o, t);
                u.start(function () {
                    e._bonus(u)
                })
            } else {
                if (1 != i.isSlotitem()) throw new Error("TaskEventBonus");
                var n = this._canvas, o = i.mst_id, l = new s.TaskBonusSlot(n, o, i.count, t);
                l.start(function () {
                    e._bonus(l)
                })
            }
        }, e
    }(o.TaskBase);
    e.TaskEventBonus = c;
    var h = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._bg = new PIXI.Sprite, e.addChild(e._bg), e._upper = new PIXI.Sprite, e.addChild(e._upper), e._down = new PIXI.Sprite, e.addChild(e._down), e._text = new PIXI.Sprite, e.addChild(e._text), e._white = new PIXI.Sprite, e.addChild(e._white), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "bg", {
            get: function () {
                return this._bg
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "upper", {
            get: function () {
                return this._upper
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "down", {
            get: function () {
                return this._down
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "text", {
            get: function () {
                return this._text
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "white", {
            get: function () {
                return this._white
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function () {
            this._bg.texture = l.BATTLE_RESULT_EVENT.getTexture(1), this._bg.position.set(0, 210), this._upper.texture = l.BATTLE_RESULT_EVENT.getTexture(4), this._upper.position.set(219, 138), this._down.texture = l.BATTLE_RESULT_EVENT.getTexture(4), this._down.rotation = Math.PI, this._down.position.set(984, 576), this._white.texture = u.BATTLE_RESULT_MAIN.getTexture(24), this._white.position.set(0, 140), this._text.texture = l.BATTLE_RESULT_EVENT.getTexture(2)
        }, e
    }(PIXI.Container)
}