const function349 = function (t, e, i) {
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
    var o = i(1),
        r = i(35),
        s = i(350),
        a = i(91),
        _ = function (t) {
            function e(e, i, n) {
                var a = t.call(this) || this;
                a._value = 0, a.avail = 0, a._onClick1Up = function () {
                    a.up(a._value + 1), a.onChangeValue()
                }, a._onClick10Up = function () {
                    a.up(a._value + 10), a.onChangeValue()
                }, a._onClick100Up = function () {
                    a.up(a._value + 100), a.onChangeValue()
                }, a._onClick1Down = function () {
                    a.down(a._value - 1), a.onChangeValue()
                }, a._onClick10Down = function () {
                    a.down(a._value - 10), a.onChangeValue()
                }, a._onClick100Down = function () {
                    a.down(a._value - 100), a.onChangeValue()
                }, a._onClickReset = function () {
                    a.updateValue(a._min), a.onChangeValue()
                }, a._onClickMax = function () {
                    var t = Math.min(a.avail, a._max);
                    t < a._min && (t = a._max), a.updateValue(t), a.onChangeValue()
                }, a._min = i, a._max = n;
                var _ = new s.MaterialIconText;
                a._multiple = !1, a.n_100 = new PIXI.Sprite, a.n_10 = new PIXI.Sprite, a.n_1 = new PIXI.Sprite;
                var u = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(81)),
                    l = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(16)),
                    c = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(16)),
                    h = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(11)),
                    p = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(11));
                return a.n_100.position.set(36, 91), a.n_10.position.set(63, 91), a.n_1.position.set(90, 91), _.position.set(7, 7), l.position.set(181, 13), c.position.set(181, 54), h.position.set(259, 13), p.position.set(259, 54), _.update(e), a.addChild(u, _, a.n_100, a.n_10, a.n_1), a.btn_sozai_up = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(43)), a.btn_sozai_up.interactive = !0, a.btn_sozai_up.buttonMode = !0, a.btn_sozai_up.position.set(72, 48), a.addChild(a.btn_sozai_up), a.btn_sozai_down = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(42)), a.btn_sozai_down.interactive = !0, a.btn_sozai_down.buttonMode = !0, a.btn_sozai_down.position.set(72, 150), a.addChild(a.btn_sozai_down), a.addChild(l, c, h, p), a._btnReset = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(38)), a._btnReset.interactive = !0, a._btnReset.buttonMode = !0, a._btnReset.position.set(178, 99), a.addChild(a._btnReset), a._btnMax = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(34)), a._btnMax.interactive = !0, a._btnMax.buttonMode = !0, a._btnMax.position.set(178, 139), a.addChild(a._btnMax), a.minus10 = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(15)), a.minus10.interactive = !0, a.minus10.buttonMode = !0, a.minus10.position.set(181, 13), a.addChild(a.minus10), a.minus100 = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(15)), a.minus100.interactive = !0, a.minus100.buttonMode = !0, a.minus100.position.set(181, 54), a.addChild(a.minus100), a.plus10 = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(10)), a.plus10.interactive = !0, a.plus10.buttonMode = !0, a.plus10.position.set(259, 13), a.addChild(a.plus10), a.plus100 = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(10)), a.plus100.interactive = !0, a.plus100.buttonMode = !0, a.plus100.position.set(259, 54), a.addChild(a.plus100), a._btnReset.on(o.EventType.CLICK, a._onClickReset), a._btnMax.on(o.EventType.CLICK, a._onClickMax), a.btn_sozai_up.on(o.EventType.CLICK, a._onClick1Up), a.btn_sozai_down.on(o.EventType.CLICK, a._onClick1Down), a.minus10.on(o.EventType.CLICK, a._onClick10Down), a.minus100.on(o.EventType.CLICK, a._onClick100Down), a.plus10.on(o.EventType.CLICK, a._onClick10Up), a.plus100.on(o.EventType.CLICK, a._onClick100Up), a
            }
            return n(e, t), Object.defineProperty(e.prototype, "value", {
                get: function () {
                    return this._value
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "multiple", {
                get: function () {
                    return this._multiple
                },
                set: function (t) {
                    this._multiple = t
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dispose = function () {
                this._btnReset.off(o.EventType.CLICK, this._onClickReset), this._btnMax.off(o.EventType.CLICK, this._onClickMax), this.btn_sozai_up.off(o.EventType.CLICK, this._onClick1Up), this.btn_sozai_down.off(o.EventType.CLICK, this._onClick1Down), this.minus10.off(o.EventType.CLICK, this._onClick10Down), this.minus100.off(o.EventType.CLICK, this._onClick100Down), this.plus10.off(o.EventType.CLICK, this._onClick10Up), this.plus100.off(o.EventType.CLICK, this._onClick100Up), this.n_100.texture = PIXI.Texture.EMPTY, this.n_10.texture = PIXI.Texture.EMPTY, this.n_1.texture = PIXI.Texture.EMPTY, this.onChangeValue = null, this._value = null, this.avail = null, this.n_100 = null, this.n_10 = null, this.n_1 = null, this.removeChildren()
            }, e.prototype.up = function (t) {
                this._max < t && (t = this._max), this.updateValue(t)
            }, e.prototype.down = function (t) {
                t < this._min && (t = this._min), this.updateValue(t)
            }, e.prototype.updateValue = function (t) {
                var e, i, n, o = this.splitNumber(t),
                    s = this._multiple ? 3 * t : t;
                this.btn_sozai_down.visible = !1, this.btn_sozai_up.visible = !1, this.minus10.visible = !1, this.minus100.visible = !1, this.plus10.visible = !1, this.plus100.visible = !1, s <= this.avail ? (e = a.Util.getWhiteNumberResourceId(o[0]), i = a.Util.getWhiteNumberResourceId(o[1]), n = a.Util.getWhiteNumberResourceId(o[2])) : (e = a.Util.getRedNumberResourceId(o[0]), i = a.Util.getRedNumberResourceId(o[1]), n = a.Util.getRedNumberResourceId(o[2])), this._min < t && (this.minus10.visible = !0, this.minus100.visible = !0, this.btn_sozai_down.visible = !0), t < this._max && (this.plus10.visible = !0, this.plus100.visible = !0, this.btn_sozai_up.visible = !0), this.n_100.texture = r.ARSENAL_MAIN.getTexture(e), this.n_10.texture = r.ARSENAL_MAIN.getTexture(i), this.n_1.texture = r.ARSENAL_MAIN.getTexture(n), this._value = t
            }, e.prototype.setAvail = function (t) {
                this.avail = t
            }, e.prototype.splitNumber = function (t) {
                var e = 0 == t ? 0 : t % 1e3,
                    i = 0,
                    n = 0,
                    o = 0;
                return 0 < e && (i = Math.floor(e / 100), e -= 100 * i), 0 < e && (n = Math.floor(e / 10), e -= 10 * n), o = Math.floor(e), [i, n, o]
            }, e
        }(PIXI.Container);
    e.MaterialAmountView = _
}