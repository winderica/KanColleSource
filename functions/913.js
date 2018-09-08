const function913 = function (t, e, i) {
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
    var o = i(29), r = i(914), s = i(1), a = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._btn_sortie = new _, e._btn_sortie.position.set(179, 174), e._btn_practice = new _, e._btn_practice.position.set(516, 174), e._btn_expedition = new _, e._btn_expedition.position.set(852, 174), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "btn_sortie", {
            get: function () {
                return this._btn_sortie
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "btn_practice", {
            get: function () {
                return this._btn_practice
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "btn_expedition", {
            get: function () {
                return this._btn_expedition
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function (t) {
            var e = new PIXI.Sprite(o.SALLY_COMMON.getTexture(50));
            e.position.set(0, 102);
            var i = new PIXI.Sprite(r.SALLY_TOP.getTexture(0));
            i.position.set(188, 113);
            var n = new PIXI.Sprite(r.SALLY_TOP.getTexture(10));
            n.position.set(246, 575);
            var s = new PIXI.Sprite(r.SALLY_TOP.getTexture(3));
            s.position.set(572, 575);
            var a = new PIXI.Sprite(r.SALLY_TOP.getTexture(7));
            a.position.set(909, 575), this._btn_sortie.initialize(8, 9), this._btn_practice.initialize(1, 2), 1 == t ? this._btn_expedition.initialize(4, 6) : this._btn_expedition.initialize(5, null), this.addChild(e), this.addChild(i), this.addChild(n), this.addChild(s), this.addChild(a), this.addChild(this._btn_sortie), this.addChild(this._btn_practice), this.addChild(this._btn_expedition)
        }, e.prototype.dispose = function () {
            this.removeChildren(), this._btn_sortie.dispose(), this._btn_practice.dispose(), this._btn_expedition.dispose()
        }, e
    }(PIXI.Container);
    e.ViewTop = a;
    var _ = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._onMouseOver = function () {
                e._setTexture(e._texture_no_on)
            }, e._onMouseOut = function () {
                e._setTexture(e._texture_no)
            }, e
        }

        return n(e, t), e.prototype.initialize = function (t, e) {
            this._texture_no = t, this._texture_no_on = e, this._setTexture(this._texture_no), null != this._texture_no_on && (this.interactive = this.buttonMode = !0, this.on(s.EventType.MOUSEOVER, this._onMouseOver), this.on(s.EventType.MOUSEOUT, this._onMouseOut))
        }, e.prototype.dispose = function () {
            this.interactive = this.buttonMode = !1, this.off(s.EventType.MOUSEOVER, this._onMouseOver), this.off(s.EventType.MOUSEOUT, this._onMouseOut)
        }, e.prototype._setTexture = function (t) {
            this.texture = r.SALLY_TOP.getTexture(t)
        }, e
    }(PIXI.Sprite)
}