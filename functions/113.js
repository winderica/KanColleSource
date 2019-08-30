const function113 = function (t, e, i) {
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
    var o = i(10),
        r = i(1),
        s = function (t) {
            function e(e) {
                void 0 === e && (e = !1);
                var i = t.call(this) || this;
                return i._btm = !1, i._onClick = function () {
                    null != i._cb_onClick && (i._cb_onClick(), i._mouseTimer = setInterval(function () {
                        if (0 == i.visible) return clearInterval(i._mouseTimer), !1;
                        i._cb_onClick()
                    }, 300))
                }, i._onMouseUp = function () {
                    clearInterval(i._mouseTimer)
                }, i._btm = e, i._canvas = new PIXI.Container, i.addChild(i._canvas), 0 == i._btm ? i._img = new PIXI.Sprite(o.COMMON_MISC.getTexture(1)) : i._img = new PIXI.Sprite(o.COMMON_MISC.getTexture(0)), i._img.interactive = !0, i._img.x = -Math.round(i._img.width / 2), i._img.y = -Math.round(i._img.height / 2), i._canvas.addChild(i._img), i
            }
            return n(e, t), e.prototype.initialize = function (t) {
                void 0 === t && (t = null), this._cb_onClick = t
            }, e.prototype.activate = function () {
                this._img.buttonMode = !0, null == this._tween && (this._img.on(r.EventType.MOUSEUP, this._onMouseUp), this._img.on(r.EventType.MOUSEDOWN, this._onClick), this._tween = createjs.Tween.get(this._canvas), this._tween.loop = !0, 0 == this._btm ? this._tween.to({
                    y: -11
                }, 350, createjs.Ease.cubicOut) : this._tween.to({
                    y: 11
                }, 350, createjs.Ease.cubicOut), this._tween.to({
                    y: 0
                }, 350, createjs.Ease.quadIn))
            }, e.prototype.deactivate = function () {
                this._img.buttonMode = !1, this._canvas.y = 0, null != this._tween && (this._img.off(r.EventType.MOUSEUP, this._onMouseUp), this._img.off(r.EventType.MOUSEDOWN, this._onClick), this._tween.setPaused(!0), createjs.Tween.removeTweens(this._canvas), this._tween = null)
            }, e.prototype.dispose = function () {
                this.removeChildren(), this.deactivate(), this._btm = null, this._canvas = null, this._img = null, this._cb_onClick = null, this._mouseTimer = null
            }, e.prototype.resetInterval = function () {
                null != this._mouseTimer && clearInterval(this._mouseTimer)
            }, e
        }(PIXI.Container);
    e.ArrowButton = s;
    var a = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onClick = function () {
                e.onClick()
            };
            var i = o.COMMON_MISC.getTexture(1),
                n = new PIXI.Sprite(i),
                s = createjs.Tween.get(n);
            return s.loop = !0, s.to({
                y: 0
            }).to({
                y: -11
            }, 350, createjs.Ease.cubicOut).to({
                y: 0
            }, 350, createjs.Ease.quadIn), n.interactive = n.buttonMode = !0, n.addListener(r.EventType.CLICK, e._onClick), e.addChild(n), e.spriteArrowTopS = n, e
        }
        return n(e, t), e.prototype.dispose = function () {
            createjs.Tween.removeTweens(this.spriteArrowTopS), this.spriteArrowTopS.removeAllListeners(r.EventType.CLICK), this.spriteArrowTopS.texture = PIXI.Texture.EMPTY, this.spriteArrowTopS = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    e.ArrowTopButton = a;
    var _ = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onClick = function () {
                e.onClick()
            };
            var i = o.COMMON_MISC.getTexture(0),
                n = new PIXI.Sprite(i),
                s = createjs.Tween.get(n);
            return s.loop = !0, n.interactive = n.buttonMode = !0, s.to({
                y: 0
            }).to({
                y: 11
            }, 350, createjs.Ease.cubicOut).to({
                y: 0
            }, 350, createjs.Ease.quadIn), n.addListener(r.EventType.CLICK, e._onClick), e.addChild(n), e.spriteArrowBtmS = n, e
        }
        return n(e, t), e.prototype.dispose = function () {
            createjs.Tween.removeTweens(this.spriteArrowBtmS), this.spriteArrowBtmS.removeAllListeners(r.EventType.CLICK), this.spriteArrowBtmS.texture = PIXI.Texture.EMPTY, this.spriteArrowBtmS = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    e.ArrowBottomButton = _
}