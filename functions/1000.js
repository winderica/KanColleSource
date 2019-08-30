const function1000 = function (t, e, i) {
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
    var o = i(18),
        r = i(52),
        s = i(41),
        a = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._content = new PIXI.Sprite, e._light = new PIXI.Sprite, e._light.alpha = 0, e.addChild(e._light), e.addChild(e._content), e.interactive = !0, e.buttonMode = !0, e
            }
            return n(e, t), e.prototype.update = function (t, e) {
                t == o.EVENT_AREA_ID ? (e >= 0 && (this._content.position.set(1012, 328), this._content.texture = s.SALLY_EVENT.getTexture(13)), this._light.texture = s.SALLY_EVENT.getTexture(16), this._light.position.set(1012, 328), this._light.alpha = 0) : (this._content.position.set(1031, 332), this._content.texture = r.SALLY_SORTIE.getTexture(15), this._light.texture = r.SALLY_SORTIE.getTexture(16), this._light.position.set(this._content.x - 26, this._content.y - 24), this._light.alpha = 0)
            }, e.prototype.show = function () {
                this._activate(), this.visible = !0
            }, e.prototype.hide = function () {
                this._deactivate(), this.visible = !1
            }, e.prototype.dispose = function () {
                this._deactivate()
            }, e.prototype._activate = function () {
                null == this._t && (this._t = createjs.Tween.get(this._light, {
                    loop: !0
                }).to({
                    alpha: 1
                }, 1500).to({
                    alpha: 0
                }, 800))
            }, e.prototype._deactivate = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null, this._light.alpha = 0)
            }, e
        }(PIXI.Container);
    e.BtnNext = a
}