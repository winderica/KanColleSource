const function787 = function (t, e, i) {
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
    var o = i(71),
        r = i(1),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._onClick = function () {
                    e.onClick()
                }, e._onMouseOver = function () {
                    e.marriagePopUp.visible = !0
                }, e._onMouseOut = function () {
                    e.marriagePopUp.visible = !1
                }, e.level99Light = new PIXI.Sprite(o.REMODEL_MAIN.getTexture(39)), e.addChild(e.level99Light), e.play(), e.clickArea = new PIXI.Graphics, e.clickArea.beginFill(0, 0), e.clickArea.drawRect(0, 0, 119, 75), e.clickArea.endFill(), e.clickArea.on(r.EventType.CLICK, e._onClick), e.clickArea.on(r.EventType.MOUSEOUT, e._onMouseOut), e.clickArea.on(r.EventType.MOUSEOVER, e._onMouseOver), e.clickArea.renderable = !1, e.clickArea.interactive = !0, e.clickArea.buttonMode = !0, e.addChild(e.clickArea), e.marriagePopUp = new PIXI.Sprite(o.REMODEL_MAIN.getTexture(34)), e.marriagePopUp.position.set(-105, 48), e.marriagePopUp.visible = !1, e.addChild(e.marriagePopUp), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.clickArea.off(r.EventType.CLICK), this.clickArea.off(r.EventType.MOUSEOVER), this.clickArea.off(r.EventType.MOUSEOUT), this.clickArea.clear(), null != this._loopTween && (this._loopTween.setPaused(!0), createjs.Tween.removeTweens(this.level99Light), this._loopTween = null), this.onClick = null, this.marriagePopUp = null, this.level99Light = null, this.clickArea = null, this.removeChildren()
            }, e.prototype.play = function () {
                null == this._loopTween && (this._loopTween = createjs.Tween.get(this.level99Light).to({
                    alpha: 0
                }, 0).to({
                    alpha: 1
                }, 1e3).to({
                    alpha: 0
                }, 1e3), this._loopTween.loop = !0)
            }, e
        }(PIXI.Container);
    e.MarriageButton = s
}