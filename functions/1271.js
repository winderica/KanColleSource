const function1271 = function (t, e, i) {
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
    var o = i(5), r = i(2), s = i(12), a = i(6), _ = i(20), u = i(1), l = function (t) {
        function e(e, i, n) {
            var o = t.call(this) || this;
            return o._result = 0, o._onSelect = function (t) {
                a.SE.play("106"), o._result = t, o._hide()
            }, o._parent_layer = e, o._enabled_youin = i, o._enabled_megami = n, o
        }

        return n(e, t), Object.defineProperty(e.prototype, "result", {
            get: function () {
                return this._result
            }, enumerable: !0, configurable: !0
        }), e.prototype._start = function () {
            this._layer = new c(this._onSelect), this._layer.position.set(o.default.width / 2, o.default.height / 2), this._layer.alpha = 0, this._parent_layer.addChild(this._layer), this._showBtns()
        }, e.prototype._showBtns = function () {
            var t = this;
            this._layer.initialize(this._enabled_youin, this._enabled_megami), createjs.Tween.get(this._layer).to({ alpha: 1 }, 300).call(function () {
                t._layer.activate()
            })
        }, e.prototype._hide = function () {
            var t = this;
            this._layer.deactivate(), createjs.Tween.get(this._layer.btn_youin).to({ x: -o.default.width / 2 }, 500), createjs.Tween.get(this._layer.btn_megami).to({ x: -o.default.width / 2 }, 500), createjs.Tween.get(this._layer.btn_tettai).to({ x: o.default.width / 2 }, 500).call(function () {
                t._endTask()
            })
        }, e.prototype._endTask = function () {
            this._parent_layer.removeChild(this._layer), this._layer.dispose(), this._parent_layer = null, this._layer = null, t.prototype._endTask.call(this)
        }, e
    }(r.TaskBase);
    e.TaskTaihaShingunSelect = l;
    var c = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._btn_youin = new p(e), i._btn_youin.position.set(-185, -105), i.addChild(i._btn_youin), i._btn_megami = new d(e), i._btn_megami.position.set(-185, 174), i.addChild(i._btn_megami), i._btn_tettai = new f(e), i._btn_tettai.position.set(261, -9), i.addChild(i._btn_tettai), i
        }

        return n(e, t), Object.defineProperty(e.prototype, "btn_youin", {
            get: function () {
                return this._btn_youin
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "btn_megami", {
            get: function () {
                return this._btn_megami
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "btn_tettai", {
            get: function () {
                return this._btn_tettai
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function (t, e) {
            this._btn_youin.initialize(t), this._btn_megami.initialize(e), this._btn_tettai.initialize()
        }, e.prototype.activate = function () {
            this._btn_youin.activate(), this._btn_megami.activate(), this._btn_tettai.activate()
        }, e.prototype.deactivate = function () {
            this._btn_youin.deactivate(), this._btn_megami.deactivate(), this._btn_tettai.deactivate()
        }, e.prototype.dispose = function () {
            this._btn_youin.dispose(), this._btn_megami.dispose(), this._btn_tettai.dispose()
        }, e
    }(PIXI.Container), h = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._enabled = !0, i._onMouseOver = function () {
                i._update(!0), i._startWave()
            }, i._onMouseOut = function () {
                i._update(!1), i._stopWave()
            }, i._onClick = function () {
                0 != i.buttonMode && null != i._cb_onClick && i._cb_onClick(i._value)
            }, i._cb_onClick = e, i._wave1 = new s.Sprite, i._wave1.anchor.set(.5), i._initWave(i._wave1), i.addChild(i._wave1), i._wave2 = new s.Sprite, i._wave2.anchor.set(.5), i._initWave(i._wave2), i.addChild(i._wave2), i._off = new PIXI.Sprite, i.addChild(i._off), i._on = new PIXI.Sprite, i.addChild(i._on), i._wave_tweens = [], i.interactive = !0, i
        }

        return n(e, t), e.prototype.activate = function () {
            0 != this._enabled && 1 != this.buttonMode && (this.buttonMode = !0, this.on(u.EventType.MOUSEOVER, this._onMouseOver), this.on(u.EventType.MOUSEOUT, this._onMouseOut), this.on(u.EventType.CLICK, this._onClick))
        }, e.prototype.deactivate = function () {
            this.buttonMode = !1, this.off(u.EventType.MOUSEOVER, this._onMouseOver), this.off(u.EventType.MOUSEOUT, this._onMouseOut), this.off(u.EventType.CLICK, this._onClick)
        }, e.prototype.dispose = function () {
            this.deactivate(), this._cb_onClick = null
        }, e.prototype._update = function (t) {
            0 == this._enabled ? (this._off.visible = !0, this._on.visible = !1) : 0 == t ? (this._off.visible = !0, this._on.visible = !1) : (this._off.visible = !1, this._on.visible = !0)
        }, e.prototype._initWave = function (t) {
            t.scale.set(0), t.alpha = 0
        }, e.prototype._startWave = function () {
            this._stopWave(), this._wave_tweens[0] = createjs.Tween.get(this._wave1, { loop: !0 }).to({
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
        }, e.prototype._stopWave = function () {
            for (var t = 0; t < this._wave_tweens.length; t++) null != this._wave_tweens[t] && (this._wave_tweens[t].setPaused(!0), this._wave_tweens[t] = null);
            this._initWave(this._wave1), this._initWave(this._wave2)
        }, e
    }(PIXI.Container), p = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype.initialize = function (t) {
            if (this._enabled = t, this._value = 1, this._off.position.set(-188, -134), this._on.position.set(-227, -170), 1 == t) {
                this._off.texture = _.MAP_COMMON.getTexture(4), this._on.texture = _.MAP_COMMON.getTexture(6);
                var e = [new PIXI.Point(0, -20), new PIXI.Point(156, -11), new PIXI.Point(185, 65), new PIXI.Point(65, 126), new PIXI.Point(-83, 116), new PIXI.Point(-110, 45)];
                this.hitArea = new PIXI.Polygon(e)
            } else this._off.texture = _.MAP_COMMON.getTexture(5), this._on.texture = PIXI.Texture.EMPTY, this.hitArea = null;
            this._wave1.texture = _.MAP_COMMON.getTexture(0), this._wave2.texture = _.MAP_COMMON.getTexture(0), this._update(!1)
        }, e
    }(h), d = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype.initialize = function (t) {
            if (this._enabled = t, this._value = 2, this._off.position.set(-189, -128), this._on.position.set(-228, -164), 1 == t) {
                this._off.texture = _.MAP_COMMON.getTexture(7), this._on.texture = _.MAP_COMMON.getTexture(9);
                var e = [new PIXI.Point(0, -14), new PIXI.Point(156, -5), new PIXI.Point(185, 71), new PIXI.Point(65, 132), new PIXI.Point(-83, 122), new PIXI.Point(-110, 51)];
                this.hitArea = new PIXI.Polygon(e)
            } else this._off.texture = _.MAP_COMMON.getTexture(8), this._on.texture = PIXI.Texture.EMPTY, this.hitArea = null;
            this._wave1.texture = _.MAP_COMMON.getTexture(0), this._wave2.texture = _.MAP_COMMON.getTexture(0), this._update(!1)
        }, e
    }(h), f = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype.initialize = function () {
            this._enabled = !0, this._value = 0, this._off.position.set(-144, -119), this._on.position.set(-144, -119), this._off.texture = _.MAP_COMMON.getTexture(15), this._on.texture = _.MAP_COMMON.getTexture(16);
            var t = [new PIXI.Point(-21, -71), new PIXI.Point(78, -60), new PIXI.Point(96, 14), new PIXI.Point(17, 77), new PIXI.Point(-81, 65), new PIXI.Point(-99, -8)];
            this.hitArea = new PIXI.Polygon(t), this._wave1.texture = _.MAP_COMMON.getTexture(0), this._wave2.texture = _.MAP_COMMON.getTexture(0), this._update(!1)
        }, e
    }(h)
}