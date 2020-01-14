const function298 = function (t, e, i) {
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
    var o = i(108),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._img = new PIXI.Sprite, e.addChild(e._img), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._img.texture = o.PORT_RINGMENU.getTexture(7), this._img.x = -Math.round(this._img.width / 2), this._img.y = -Math.round(this._img.height / 2)
            }, e.prototype.activate = function () {
                null == this._t && (this._t = createjs.Tween.get(this, {
                    loop: !0
                }).to({
                    rotation: 2 * Math.PI
                }, 24e3))
            }, e.prototype.deactivate = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null)
            }, e.prototype.dispose = function () {
                this.deactivate()
            }, e
        }(PIXI.Container);
    e.RingMenuBtnBgOn = r
}