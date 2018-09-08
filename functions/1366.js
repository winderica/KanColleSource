const function1366 = function (t, e, i) {
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
    var o = i(2), r = i(12), s = i(173), a = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._addSmoke = function () {
                if (!(Math.random() <= .2)) {
                    var t = n._canvas, e = new c;
                    e.activate(), e.x = t.fall1.x + t.fall1.flare.x, e.y = t.fall1.y, n._canvas.smoke_layer.addChild(e), e = new c, e.activate(), e.x = t.fall2.x + t.fall2.flare.x, e.y = t.fall2.y, n._canvas.smoke_layer.addChild(e)
                }
            }, n._layer = e, n._pos = i, n._canvas = new _, n._canvas.position.set(i.x, i.y), n
        }

        return n(e, t), e.prototype._start = function () {
            this._layer.addChild(this._canvas);
            var t = this._canvas;
            t.flare1.scale.set(0), t.flare2.scale.set(0), t.fall1.alpha = 0, t.fall2.alpha = 0, t.initialize(), this._flash()
        }, e.prototype._flash = function () {
            var t = this;
            createjs.Tween.get(this._canvas.flare1).to({ scaleX: 1.5, scaleY: 1.5 }, 500).to({
                scaleX: .6,
                scaleY: .6,
                alpha: 0
            }, 800), createjs.Tween.get(this._canvas.flare2).to({
                scaleX: 1.5,
                scaleY: 1.5
            }, 500).call(function () {
                t._fall()
            }).to({ scaleX: .6, scaleY: .6, alpha: 0 }, 800)
        }, e.prototype._fall = function () {
            var t = this, e = createjs.Tween.get(null, { loop: !0 }).wait(250).call(this._addSmoke);
            this._canvas.fall1.activate(), createjs.Tween.get(this._canvas.fall1).to({
                x: 5,
                y: 3,
                alpha: 1
            }, 200).to({ x: -5, y: 206 }, 3100).to({
                x: -9,
                y: 270,
                alpha: 0
            }, 1e3), this._canvas.fall2.activate(), createjs.Tween.get(this._canvas.fall2).to({
                x: -102,
                y: -14,
                alpha: 1
            }, 200).to({ x: -122, y: 180 }, 3100).to({ x: -128, y: 242, alpha: 0 }, 1e3).call(function () {
                e.setPaused(!0), t._preEnd()
            })
        }, e.prototype._preEnd = function () {
            var t = this;
            createjs.Tween.get(this._canvas.smoke_layer).to({ alpha: 0 }, 1350).call(function () {
                t._endTask()
            })
        }, e.prototype._endTask = function () {
            this._layer.removeChild(this._canvas), this._canvas.dispose(), t.prototype._endTask.call(this)
        }, e
    }(o.TaskBase);
    e.TaskFlareAnimation = a;
    var _ = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._smoke_layer = new PIXI.Container, e._flare1 = new u, e._flare1.position.set(6, -15), e._flare2 = new u, e._flare2.position.set(-101, -30), e._fall1 = new l, e._fall1.position.set(6, -15), e._fall2 = new l, e._fall2.position.set(-101, -30), e.addChild(e._smoke_layer), e.addChild(e._flare1), e.addChild(e._flare2), e.addChild(e._fall1), e.addChild(e._fall2), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "smoke_layer", {
            get: function () {
                return this._smoke_layer
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "flare1", {
            get: function () {
                return this._flare1
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "flare2", {
            get: function () {
                return this._flare2
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "fall1", {
            get: function () {
                return this._fall1
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "fall2", {
            get: function () {
                return this._fall2
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function () {
            this._flare1.initialize(), this._flare2.initialize(), this._fall1.initialize(), this._fall2.initialize()
        }, e.prototype.dispose = function () {
            this.fall1.deactivate(), this.fall2.deactivate();
            for (var t = 0; t < this._smoke_layer.children.length; t++) {
                var e = this._smoke_layer.children[t], i = e;
                null != i && i.deactivate()
            }
            this._smoke_layer.removeChildren(), this._smoke_layer = null, this._flare1 = null, this._flare2 = null, this._fall1 = null, this._fall2 = null, this.removeChildren()
        }, e
    }(PIXI.Container), u = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.anchor.set(.5), e
        }

        return n(e, t), e.prototype.initialize = function () {
            this.texture = s.BATTLE_NIGHT.getTexture(0)
        }, e
    }(r.Sprite), l = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._onChange = function () {
                e._flare.x = e._amp * Math.sin(e._timer / 13 + e._init), e._timer++
            }, e._glow_light = new PIXI.Sprite, e._glow_light.anchor.set(.5), e._glow_light.scale.set(5.4), e._glow_light.alpha = .2, e._flare = new u, e._flare.scale.set(.625), e.addChild(e._glow_light), e.addChild(e._flare), e.rotation = 5.6 / 180 * Math.PI, e
        }

        return n(e, t), Object.defineProperty(e.prototype, "flare", {
            get: function () {
                return this._flare
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function () {
            this._glow_light.texture = s.BATTLE_NIGHT.getTexture(6), this._flare.texture = s.BATTLE_NIGHT.getTexture(0)
        }, e.prototype.activate = function () {
            null == this._t && (this._amp = 18 + 3 * Math.random(), this._init = 15 + 5 * Math.random(), this._timer = 0, this._t = createjs.Tween.get(this._flare, {
                loop: !0,
                onChange: this._onChange
            }).to({ scaleX: .48, scaleY: .48, alpha: .7 }, 300).to({ scaleX: .625, scaleY: .625 }, 200))
        }, e.prototype.deactivate = function () {
            null != this._t && (this._t.setPaused(!0), this._t = null)
        }, e
    }(PIXI.Container), c = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onChange = function () {
                e.scale.x += e._vscale, e.scale.y += e._vscale, e.rotation += e._vrotate / 180 * Math.PI
            };
            var i = Math.floor(5 * Math.random()), n = [1, 2, 3, 4, 5][i], o = s.BATTLE_NIGHT.getTexture(n);
            return e.texture = o, e.anchor.set(.5), e.scale.set(.1 * Math.random() + .2), e.alpha = 0, e
        }

        return n(e, t), e.prototype.activate = function () {
            if (null == this._t) {
                var t = createjs.Ticker.framerate;
                this._vscale = (.0015 + .001 * Math.random()) * (60 / t), this._vrotate = (5.5 * Math.random() - 2.5) * (60 / t), this._t = createjs.Tween.get(this, { onChange: this._onChange }).to({ alpha: 1 }, 150).to({ alpha: 0 }, 5500 + 1e4 * Math.random())
            }
        }, e.prototype.deactivate = function () {
            null != this._t && (this._t.setPaused(!0), this._t = null)
        }, e
    }(PIXI.Sprite)
}