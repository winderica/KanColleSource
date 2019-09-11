const function695 = function (t, e, i) {
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
    var o = i(3),
        r = i(4),
        s = i(696),
        a = i(1),
        _ = function (t) {
            function e() {
                var e = t.call(this) || this;
                e.animation = {
                    light: 0
                }, e._onClick = function () {
                    e.onClick()
                }, e._onMouseOver_Light = function () {
                    e._stop(), e.hokyuLight.texture = e.textureHover
                }, e._onMouseOut_Light = function () {
                    e._play()
                };
                var i = o.ORGANIZE_MAIN.getTexture(17),
                    n = o.ORGANIZE_MAIN.getTexture(18),
                    _ = o.ORGANIZE_MAIN.getTexture(19);
                return e.textCount = new r.TextBox(30, 5523516), e.tween = createjs.Tween.get(e.animation), e.hokyuLight = new PIXI.Sprite, e.hokyuNormal = new PIXI.Sprite(i), e.hokyuNone = new PIXI.Sprite(n), e.hokyuDisable = new PIXI.Sprite(_), e.crossCharacter = new s.CrossCharacter, e.crossCharacter.position.set(48, 15), e.hokyuLight.texture = n, e.tween.to({
                    light: 0
                }), e.tween.to({
                    light: 1
                }, 500), e.tween.to({
                    light: 0
                }, 500), e.tween.loop = !0, e.tween.addEventListener("change", function () {
                    .5 <= e.animation.light ? e.hokyuLight.texture = e.textureDefault : e.hokyuLight.texture = e.textureHover
                }), e.tween.setPaused(!0), e.hokyuLight.on(a.EventType.CLICK, e._onClick), e.hokyuLight.on(a.EventType.MOUSEOVER, e._onMouseOver_Light), e.hokyuLight.on(a.EventType.MOUSEOUT, e._onMouseOut_Light), e.hokyuNormal.on(a.EventType.CLICK, e._onClick), e.hokyuLight.interactive = e.hokyuLight.buttonMode = !0, e.hokyuNormal.interactive = e.hokyuNormal.buttonMode = !0, e.hokyuNone.visible = e.hokyuNormal.visible = e.hokyuLight.visible = !1, e.textCount.position.set(e.crossCharacter.width + 48, -1), e.addChild(e.hokyuDisable, e.hokyuNone, e.hokyuNormal, e.hokyuLight, e.textCount, e.crossCharacter), e.textureDefault = n, e.textureHover = i, e._play(), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this.tween && (this.tween.setPaused(!0), createjs.Tween.removeTweens(this.tween.target)), this.hokyuLight.off(a.EventType.CLICK), this.hokyuLight.off(a.EventType.MOUSEOVER), this.hokyuLight.off(a.EventType.MOUSEOUT), this.hokyuNormal.off(a.EventType.CLICK), this._onClick = this._onMouseOut_Light = this._onMouseOver_Light = null, this.crossCharacter.dispose(), this.textCount.destroy(), this.onClick = null, this.textureDefault = null, this.textureHover = null, this.textCount = null, this.animation = null, this.tween = null, this.hokyuLight = null, this.hokyuNormal = null, this.hokyuNone = null, this.hokyuDisable = null, this.crossCharacter = null
            }, e.prototype.update = function (t, e, i, n) {
                void 0 === i && (i = 0), this.hokyuNone.visible = !1, this.hokyuLight.visible = !1, this.hokyuNormal.visible = !1, this.textCount.visible = !1, this.hokyuDisable.visible = !1, this.crossCharacter.visible = !1;
                var o = t + e;
                if (0 < o) {
                    if (this.crossCharacter.visible = !0, this.textCount.text = o.toString(), this.textCount.visible = !0, 0 < i) {
                        if (n) return void(this.hokyuLight.visible = !0);
                        if (0 < e) return void(this.hokyuNormal.visible = !0)
                    }
                    return void(this.hokyuDisable.visible = !0)
                }
            }, e.prototype._play = function () {
                this.tween.setPosition(0, createjs.Tween.LOOP), this.tween.setPaused(!1)
            }, e.prototype._stop = function () {
                this.tween.setPaused(!0)
            }, e
        }(PIXI.Container);
    e.SweetsButton = _
}