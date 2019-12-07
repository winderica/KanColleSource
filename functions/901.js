const function901 = function (t, e, i) {
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
        s = i(346),
        a = i(90),
        _ = function (t) {
            function e(e, i, n) {
                var a = t.call(this) || this;
                a._value = 0, a.avail = 0, a._onClick10Up = function () {
                    a.up(a._value + 10), a.onChangeValue()
                }, a._onClick100Up = function () {
                    a.up(a._value + 100), a.onChangeValue()
                }, a._onClick1000Up = function () {
                    a.up(a._value + 1e3), a.onChangeValue()
                }, a._onClick10Down = function () {
                    a.down(a._value - 10), a.onChangeValue()
                }, a._onClick100Down = function () {
                    a.down(a._value - 100), a.onChangeValue()
                }, a._onClick1000Down = function () {
                    a.down(a._value - 1e3), a.onChangeValue()
                }, a._onClickReset = function () {
                    a.updateValue(a._min)
                }, a._onClickMax = function () {
                    var t = Math.min(a.avail, a._max);
                    t < a._min && (t = a._min), a.updateValue(t), a.onChangeValue()
                }, a._min = i, a._max = n;
                var _ = new s.MaterialIconText;
                a.n_1000 = new PIXI.Sprite, a.n_100 = new PIXI.Sprite, a.n_10 = new PIXI.Sprite, a.n_1 = new PIXI.Sprite;
                var l = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(82)),
                    u = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(16)),
                    c = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(16)),
                    h = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(11)),
                    p = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(11));
                return a.n_1000.position.set(31, 88), a.n_100.position.set(58, 88), a.n_10.position.set(85, 88), a.n_1.position.set(112, 88), _.position.set(7, 7), u.position.set(183, 13), c.position.set(183, 54), h.position.set(274, 13), p.position.set(274, 54), _.update(e), a.addChild(l, _, a.n_1000, a.n_100, a.n_10, a.n_1), a.btn_sozai_up = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(43)), a.btn_sozai_up.interactive = !0, a.btn_sozai_up.buttonMode = !0, a.btn_sozai_up.position.set(78, 48), a.addChild(a.btn_sozai_up), a.btn_sozai_down = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(42)), a.btn_sozai_down.interactive = !0, a.btn_sozai_down.buttonMode = !0, a.btn_sozai_down.position.set(78, 150), a.addChild(a.btn_sozai_down), a.addChild(u, c, h, p), a._btnReset = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(38)), a._btnReset.interactive = !0, a._btnReset.buttonMode = !0, a._btnReset.position.set(187, 99), a.addChild(a._btnReset), a._btnMax = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(34)), a._btnMax.interactive = !0, a._btnMax.buttonMode = !0, a._btnMax.position.set(187, 139), a.addChild(a._btnMax), a.minus100 = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(15)), a.minus100.interactive = !0, a.minus100.buttonMode = !0, a.minus100.position.set(183, 13), a.addChild(a.minus100), a.minus1000 = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(15)), a.minus1000.interactive = !0, a.minus1000.buttonMode = !0, a.minus1000.position.set(183, 54), a.addChild(a.minus1000), a.plus100 = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(10)), a.plus100.interactive = !0, a.plus100.buttonMode = !0, a.plus100.position.set(274, 13), a.addChild(a.plus100), a.plus1000 = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(10)), a.plus1000.interactive = !0, a.plus1000.buttonMode = !0, a.plus1000.position.set(274, 54), a.addChild(a.plus1000), a.btn_sozai_up.on(o.EventType.CLICK, a._onClick10Up), a.btn_sozai_down.on(o.EventType.CLICK, a._onClick10Down), a._btnReset.on(o.EventType.CLICK, a._onClickReset), a._btnMax.on(o.EventType.CLICK, a._onClickMax), a.minus100.on(o.EventType.CLICK, a._onClick100Down), a.minus1000.on(o.EventType.CLICK, a._onClick1000Down), a.plus100.on(o.EventType.CLICK, a._onClick100Up), a.plus1000.on(o.EventType.CLICK, a._onClick1000Up), a
            }
            return n(e, t), Object.defineProperty(e.prototype, "value", {
                get: function () {
                    return this._value
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dispose = function () {
                this.btn_sozai_up.off(o.EventType.CLICK, this._onClick100Up), this.btn_sozai_down.off(o.EventType.CLICK, this._onClick10Down), this._btnReset.off(o.EventType.CLICK, this._onClickReset), this._btnMax.off(o.EventType.CLICK, this._onClickMax), this.minus100.off(o.EventType.CLICK, this._onClick100Down), this.minus1000.off(o.EventType.CLICK, this._onClick1000Down), this.plus100.off(o.EventType.CLICK, this._onClick100Up), this.plus1000.off(o.EventType.CLICK, this._onClick1000Up), this.n_1000.texture = PIXI.Texture.EMPTY, this.n_100.texture = PIXI.Texture.EMPTY, this.n_10.texture = PIXI.Texture.EMPTY, this.n_1.texture = PIXI.Texture.EMPTY, this.n_1000 = null, this.n_100 = null, this.n_10 = null, this.n_1 = null, this.minus100 = null, this.minus1000 = null, this.plus100 = null, this.plus1000 = null, this.btn_sozai_down = null, this.onChangeValue = null, this._value = null, this.avail = null, this.removeChildren()
            }, e.prototype.up = function (t) {
                this._max < t && (t = this._max), this.updateValue(t)
            }, e.prototype.down = function (t) {
                t < this._min && (t = this._min), this.updateValue(t)
            }, e.prototype.updateValue = function (t) {
                var e, i, n, o, s = this.splitNumber(t);
                this.btn_sozai_down.visible = !1, this.btn_sozai_up.visible = !1, this.minus100.visible = !1, this.minus1000.visible = !1, this.plus100.visible = !1, this.plus1000.visible = !1, t <= this.avail && this._min <= t ? (e = a.Util.getWhiteNumberResourceId(s[0]), i = a.Util.getWhiteNumberResourceId(s[1]), n = a.Util.getWhiteNumberResourceId(s[2]), o = a.Util.getWhiteNumberResourceId(s[3])) : (e = a.Util.getRedNumberResourceId(s[0]), i = a.Util.getRedNumberResourceId(s[1]), n = a.Util.getRedNumberResourceId(s[2]), o = a.Util.getRedNumberResourceId(s[3])), this._min < t && (this.minus100.visible = !0, this.minus1000.visible = !0, this.btn_sozai_down.visible = !0), t < this._max && (this.plus100.visible = !0, this.plus1000.visible = !0, this.btn_sozai_up.visible = !0), this.n_1000.texture = r.ARSENAL_MAIN.getTexture(e), this.n_100.texture = r.ARSENAL_MAIN.getTexture(i), this.n_10.texture = r.ARSENAL_MAIN.getTexture(n), this.n_1.texture = r.ARSENAL_MAIN.getTexture(o), this._value = t
            }, e.prototype.setAvail = function (t) {
                this.avail = t
            }, e.prototype.splitNumber = function (t) {
                var e = 0 == t ? 0 : t % 1e4,
                    i = 0,
                    n = 0,
                    o = 0;
                return 0 < e && (i = Math.floor(e / 1e3), e -= 1e3 * i), 0 < e && (n = Math.floor(e / 100), e -= 100 * n), 0 < e && (o = Math.floor(e / 10), e -= 10 * o), [i, n, o, Math.floor(e)]
            }, e
        }(PIXI.Container);
    e.LargeConfigureMaterialView = _
}