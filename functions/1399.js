const function1399 = function (t, e, i) {
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
    var o = i(5), r = i(125), s = i(2), a = i(12), _ = i(6), u = i(15), l = i(1), c = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._result = !1, i._onSelect = function (t) {
                _.SE.play("106"), i._result = t, i._hide()
            }, i._scene = e, i
        }

        return n(e, t), Object.defineProperty(e.prototype, "result", {
            get: function () {
                return this._result
            }, enumerable: !0, configurable: !0
        }), e.prototype._start = function () {
            this._layer = new h(this._onSelect), this._layer.position.set(o.default.width / 2, o.default.height / 2), this._layer.alpha = 0, this._scene.addChild(this._layer), this._scene.view.layer_title.show(7, this._scene), this._showBtns()
        }, e.prototype._showBtns = function () {
            var t = this;
            this._layer.initialize(), createjs.Tween.get(this._layer).to({ alpha: 1 }, 300).call(function () {
                t._layer.activate()
            })
        }, e.prototype._hide = function () {
            var t = this;
            this._layer.deactivate(), this._scene.view.layer_title.hide(), createjs.Tween.get(this._layer.btn_not_night).to({ x: -o.default.width / 2 }, 500), createjs.Tween.get(this._layer.btn_go_night).to({ x: o.default.width / 2 }, 500).call(function () {
                t._endTask()
            })
        }, e.prototype._endTask = function () {
            this._scene.removeChild(this._layer), this._layer.dispose(), this._scene = null, this._layer = null, t.prototype._endTask.call(this)
        }, e
    }(s.TaskBase);
    e.TaskGoNightBattleSelect = c;
    var h = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._btn_not_night = new f(e), i._btn_not_night.position.set(-162, 0), i._btn_go_night = new y(e), i._btn_go_night.position.set(162, 0), i.addChild(i._btn_not_night), i.addChild(i._btn_go_night), i
        }

        return n(e, t), Object.defineProperty(e.prototype, "btn_not_night", {
            get: function () {
                return this._btn_not_night
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "btn_go_night", {
            get: function () {
                return this._btn_go_night
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function () {
            this._btn_not_night.initialize(), this._btn_go_night.initialize()
        }, e.prototype.activate = function () {
            this._btn_not_night.activate(), this._btn_go_night.activate()
        }, e.prototype.deactivate = function () {
            this._btn_not_night.deactivate(), this._btn_go_night.deactivate()
        }, e.prototype.dispose = function () {
            this._btn_not_night.dispose(), this._btn_go_night.dispose()
        }, e
    }(PIXI.Container), p = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._onMouseOver = function () {
                n._setTexture(!0), n._wave.start()
            }, n._onMouseOut = function () {
                n._setTexture(!1), n._wave.stop()
            }, n._onClick = function () {
                0 != n.buttonMode && null != n._cb_onClick && n._cb_onClick(n._value)
            }, n._value = e, n._cb_onClick = i, n._wave = new d, n._btn = new PIXI.Sprite, n.interactive = !0, n.addChild(n._wave), n.addChild(n._btn), n
        }

        return n(e, t), e.prototype.initialize = function () {
            var t = [new PIXI.Point(-21, -71), new PIXI.Point(78, -60), new PIXI.Point(96, 14), new PIXI.Point(17, 77), new PIXI.Point(-81, 65), new PIXI.Point(-99, -8)];
            this.hitArea = new PIXI.Polygon(t), this._wave.initialize(), this._setTexture(!1)
        }, e.prototype._drawHitArea = function (t) {
            if (null != t) {
                var e = new PIXI.Graphics;
                e.beginFill(65280, .3), e.moveTo(t[0].x, t[0].y);
                for (var i = 1; i < t.length; i++) e.lineTo(t[i].x, t[i].y);
                e.endFill(), this.addChildAt(e, 0)
            }
        }, e.prototype.activate = function () {
            1 != this.buttonMode && (this.buttonMode = !0, this.on(l.EventType.MOUSEOVER, this._onMouseOver), this.on(l.EventType.MOUSEOUT, this._onMouseOut), this.on(l.EventType.CLICK, this._onClick), 1 == r.InteractiveUtil.isOnMouse(this) && this._onMouseOver())
        }, e.prototype.deactivate = function () {
            this.off(l.EventType.MOUSEOVER, this._onMouseOver), this.off(l.EventType.MOUSEOUT, this._onMouseOut), this.off(l.EventType.CLICK, this._onClick), this.buttonMode = !1
        }, e.prototype.dispose = function () {
            this._wave.dispose(), this.deactivate(), this._cb_onClick = null
        }, e
    }(PIXI.Container), d = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._wave1 = new a.Sprite, e._wave1.anchor.set(.5), e._initWave(e._wave1), e._wave2 = new a.Sprite, e._wave2.anchor.set(.5), e._initWave(e._wave2), e._wave_tweens = new Array(2), e.addChild(e._wave1), e.addChild(e._wave2), e
        }

        return n(e, t), e.prototype.initialize = function () {
            this._wave1.texture = u.BATTLE_MAIN.getTexture(3), this._wave2.texture = u.BATTLE_MAIN.getTexture(3)
        }, e.prototype.dispose = function () {
            this.stop()
        }, e.prototype._initWave = function (t) {
            t.scale.set(0), t.alpha = 0
        }, e.prototype.start = function () {
            this.stop(), this._wave_tweens[0] = createjs.Tween.get(this._wave1, { loop: !0 }).to({
                alpha: 1,
                scaleX: .4,
                scaleY: .4
            }, 400).to({ alpha: 0, scaleX: 1, scaleY: 1 }, 400).to({
                scaleX: 0,
                scaleY: 0
            }, 0).wait(200), this._wave_tweens[1] = createjs.Tween.get(this._wave2, { loop: !0 }).wait(200).to({
                alpha: 1,
                scaleX: .4,
                scaleY: .4
            }, 400).to({ alpha: 0, scaleX: 1, scaleY: 1 }, 400).to({ scaleX: 0, scaleY: 0 }, 0)
        }, e.prototype.stop = function () {
            for (var t = 0; t < this._wave_tweens.length; t++) null != this._wave_tweens[t] && (this._wave_tweens[t].setPaused(!0), this._wave_tweens[t] = null);
            this._initWave(this._wave1), this._initWave(this._wave2)
        }, e
    }(PIXI.Container), f = function (t) {
        function e(e) {
            return t.call(this, !1, e) || this
        }

        return n(e, t), e.prototype._setTexture = function (t) {
            1 == t ? (this._btn.texture = u.BATTLE_MAIN.getTexture(5), this._btn.position.set(-128, -105)) : (this._btn.texture = u.BATTLE_MAIN.getTexture(4), this._btn.position.set(-99, -78))
        }, e
    }(p), y = function (t) {
        function e(e) {
            return t.call(this, !0, e) || this
        }

        return n(e, t), e.prototype._setTexture = function (t) {
            1 == t ? (this._btn.texture = u.BATTLE_MAIN.getTexture(7), this._btn.position.set(-129, -105)) : (this._btn.texture = u.BATTLE_MAIN.getTexture(6), this._btn.position.set(-101, -78))
        }, e
    }(p)
}