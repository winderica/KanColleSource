const function962 = function (t, e, i) {
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
        r = i(27),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._img = [];
                var i = new PIXI.Sprite;
                return e.addChild(i), e._img.push(i), i = new PIXI.Sprite, i.position.set(0, 27), e.addChild(i), e._img.push(i), i = new PIXI.Sprite, i.position.set(72, 0), e.addChild(i), e._img.push(i), i = new PIXI.Sprite, i.position.set(72, 27), e.addChild(i), e._img.push(i), e._kadou = new o.TextBox(24, 0), e._kadou.y = -5, e.addChild(e._kadou), e._teisu = new o.TextBox(24, 0), e._teisu.y = 21, e.addChild(e._teisu), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._img[0].texture = r.SALLY_AIRUNIT.getTexture(135), this._img[1].texture = r.SALLY_AIRUNIT.getTexture(143), this._img[2].texture = r.SALLY_AIRUNIT.getTexture(136), this._img[3].texture = r.SALLY_AIRUNIT.getTexture(136)
            }, e.prototype.update = function (t, e) {
                this._kadou.text = t.toString(), this._kadou.x = 72 - this._kadou.width, this._teisu.text = e.toString(), this._teisu.x = 72 - this._teisu.width
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._img = null, this._kadou.destroy(), this._kadou = null, this._teisu.destroy(), this._teisu = null
            }, e
        }(PIXI.Container);
    e.AirUnitPanelItemDetailInfoPanel = s
}