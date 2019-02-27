const function289 = function (t, e, i) {
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
    var o = i(105),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._img = new PIXI.Sprite, e._img.visible = !1, e.addChild(e._img), e
            }
            return n(e, t), e.prototype.initialize = function (t) {
                var e;
                if (11 == t) e = 9;
                else if (12 == t) e = 14;
                else if (13 == t) e = 10;
                else if (14 == t) e = 11;
                else if (15 == t) e = 8;
                else {
                    if (31 != t) return void(this._img.texture = PIXI.Texture.EMPTY);
                    e = 12
                }
                this._img.texture = o.PORT_RINGMENU.getTexture(e)
            }, e.prototype.show = function () {
                var t = this;
                1 != this._img.visible && null == this._t && (this._img.position.set(5, -23), this._img.alpha = 0, this._img.visible = !0, this._t = createjs.Tween.get(this._img).wait(400).to({
                    x: 35,
                    alpha: 1
                }, 100).call(function () {
                    t._t = null
                }))
            }, e.prototype.hide = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null), this._img.visible = !1
            }, e.prototype.dispose = function () {
                this.hide()
            }, e
        }(PIXI.Container);
    e.RingMenuBtnDescription = r
}