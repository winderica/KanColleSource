const function109 = function (t, e, i) {
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
    var o = i(9),
        r = i(1),
        s = function (t) {
            function e(e) {
                void 0 === e && (e = !1);
                var i = t.call(this) || this;
                i._toRelease = e, i._tween = null, i._onMouseOver = function (t) {
                    i._balloon.visible = t.type === r.EventType.MOUSEOVER
                }, i._onClick = function () {
                    i.onClick()
                }, i._frame = new PIXI.Sprite(o.COMMON_MISC.getTexture(155)), i._frame.alpha = 0;
                var n = Math.round(i._frame.width / 2),
                    s = new PIXI.Sprite(o.COMMON_MISC.getTexture(157));
                return s.anchor.set(.5, .5), s.position.set(n + 1, Math.round(i._frame.height / 2) + 2), i._text = new PIXI.Sprite(o.COMMON_MISC.getTexture(154)), i._text.anchor.set(.5, 0), i._text.position.set(n, -10), i.addChild(i._frame, s, i._text), i._toRelease && (i._balloon = new PIXI.Sprite(o.COMMON_MISC.getTexture(156)), i._balloon.position.set(29, -29), i._balloon.visible = !1, i.addChild(i._balloon), i._text.on(r.EventType.MOUSEOVER, i._onMouseOver).on(r.EventType.MOUSEOUT, i._onMouseOver).on(r.EventType.CLICK, i._onClick), i._text.interactive = i._text.buttonMode = !0), i
            }
            return n(e, t), e.prototype.adjustFramePosition = function (t, e) {
                this._frame.x += t, this._frame.y += e
            }, e.prototype.activate = function () {
                null === this._tween && (this._tween = createjs.Tween.get(this._frame, {
                    loop: !0
                }).to({
                    alpha: 1
                }, 800).to({
                    alpha: 0
                }, 800).wait(200).play(null))
            }, e.prototype.deactivate = function () {
                null !== this._tween && (this._tween.setPaused(!0), createjs.Tween.removeTweens(this._frame), this._tween = null), this._frame.alpha = 0
            }, e.prototype.dispose = function () {
                this.deactivate(), this._toRelease && (this._text.interactive = !1, this._text.off(r.EventType.MOUSEOVER, this._onMouseOver).off(r.EventType.MOUSEOUT, this._onMouseOver).off(r.EventType.CLICK, this._onClick)), this.onClick = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.CombinedView = s
}