const function364 = function (t, e, i) {
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
    var o = i(4),
        r = i(30),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._animation_progress = 0, e._model = new a, e._karyoku = new o.TextBox(22, 1949120), e._raisou = new o.TextBox(22, 1949120), e._taiku = new o.TextBox(22, 1949120), e._kaihi = new o.TextBox(22, 1949120), e._taikyu = new o.TextBox(22, 1949120), e._g = new PIXI.Graphics, e._karyoku.anchor.set(.5, 0), e._raisou.anchor.set(.5, 0), e._taiku.anchor.set(.5, 0), e._kaihi.anchor.set(.5, 0), e._taikyu.anchor.set(.5, 0), e._karyoku.position.set(209, 81), e._raisou.position.set(345, 231), e._taiku.position.set(336, 393), e._kaihi.position.set(93, 393), e._taikyu.position.set(30, 228), e._g.position.set(186, 269), e
            }
            return n(e, t), e.prototype.initialize = function () {
                var t = new PIXI.Sprite(r.SALLY_COMMON.getTexture(47)),
                    e = new PIXI.Sprite(r.SALLY_COMMON.getTexture(48)),
                    i = new PIXI.Sprite(r.SALLY_COMMON.getTexture(48)),
                    n = new PIXI.Sprite(r.SALLY_COMMON.getTexture(49)),
                    o = new PIXI.Sprite(r.SALLY_COMMON.getTexture(42));
                t.position.set(0, 44), e.position.set(281, 0), n.position.set(95, 0), o.position.set(0, 44), this.addChild(t), this.addChild(e), this.addChild(i), this.addChild(n), this.addChild(o), this.addChild(this._karyoku), this.addChild(this._raisou), this.addChild(this._taiku), this.addChild(this._kaihi), this.addChild(this._taikyu), this.addChild(this._g)
            }, e.prototype.update = function (t) {
                if (null == t) return void this._clearDraw();
                this._model.update(t), this._karyoku.text = this._model.karyoku.toString(), this._raisou.text = this._model.raisou.toString(), this._taiku.text = this._model.taiku.toString(), this._kaihi.text = this._model.kaihi.toString(), this._taikyu.text = this._model.taikyu.toString(), this._startAnimation()
            }, e.prototype.dispose = function () {
                this._stopAnimation(), this.removeChildren(), this._karyoku.destroy(), this._raisou.destroy(), this._taiku.destroy(), this._kaihi.destroy(), this._taikyu.destroy()
            }, e.prototype._startAnimation = function () {
                var t = this;
                this._stopAnimation(), this._animation_progress = 0, this._animation = createjs.Tween.get(this).to({
                    animation_progress: 1
                }, 500).call(function () {
                    t._animation = null, t._animation_progress = 0
                })
            }, e.prototype._clearDraw = function () {
                this._stopAnimation(), this._g.clear(), this._karyoku.text = "", this._raisou.text = "", this._taiku.text = "", this._kaihi.text = "", this._taikyu.text = ""
            }, e.prototype._stopAnimation = function () {
                null != this._animation && (this._animation.setPaused(!0), this._animation = null)
            }, Object.defineProperty(e.prototype, "animation_progress", {
                get: function () {
                    return this._animation_progress
                },
                set: function (t) {
                    this._animation_progress = t, this._draw(this._animation_progress)
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._draw = function (t) {
                var e = [(this._model.karyoku > 350 ? 350 : this._model.karyoku) * t, (this._model.raisou > 350 ? 350 : this._model.raisou) * t, (this._model.taiku > 350 ? 350 : this._model.taiku) * t, (this._model.kaihi > 350 ? 350 : this._model.kaihi) * t, (this._model.taikyu > 350 ? 350 : this._model.taikyu) * t],
                    i = e.map(function (t, e, i) {
                        var n = (72 * e - 90) / 180 * Math.PI;
                        return [142 * t / 350 * Math.cos(n), 142 * t / 350 * Math.sin(n)]
                    });
                this._g.clear(), this._g.lineStyle(1, 16774898), this._g.beginFill(1949120), this._g.moveTo(i[0][0], i[0][1]);
                for (var n = 0; n < 5; n++) {
                    var o = (n + 1) % 5;
                    i[n][0] == i[o][0] && i[n][1] == i[o][1] || this._g.lineTo(i[o][0], i[o][1])
                }
                this._g.endFill()
            }, e
        }(PIXI.Container);
    e.Rader = s;
    var a = function () {
        function t() {
            this._karyoku = 0, this._raisou = 0, this._taiku = 0, this._kaihi = 0, this._taikyu = 0
        }
        return Object.defineProperty(t.prototype, "karyoku", {
            get: function () {
                return this._karyoku
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "raisou", {
            get: function () {
                return this._raisou
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "taiku", {
            get: function () {
                return this._taiku
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "kaihi", {
            get: function () {
                return this._kaihi
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "taikyu", {
            get: function () {
                return this._taikyu
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.update = function (t) {
            for (var e = 0, i = 0, n = 0, o = 0, r = 0, s = 0, a = 0, _ = t; a < _.length; a++) {
                var u = _[a];
                null != u && (e += u.karyoku, i += u.raisou, n += u.taiku, o += u.kaihi, r += u.hpMax, s++)
            }
            this._karyoku = this._getParam(e, s), this._raisou = this._getParam(i, s), this._taiku = this._getParam(n, s), this._kaihi = this._getParam(o, s), this._taikyu = this._getParam(r, s)
        }, t.prototype._getParam = function (t, e) {
            if (e <= 0) return 0;
            var i = Math.round(t / e);
            if (1 == e) return i;
            var n = Math.sqrt(e - 1);
            return n *= i, i + Math.round(n)
        }, t
    }()
}