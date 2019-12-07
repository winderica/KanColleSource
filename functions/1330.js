const function1330 = function (t, e, i) {
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
    var o = i(19),
        r = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype.create = function (t) {
                null != this._airbase && null != this._airbase.parent && this._airbase.parent.removeChild(this._airbase), this._airbase = new PIXI.Sprite, this._airbase.texture = o.MAP_COMMON.getTexture(83), this._airbase.x = t.x - this._airbase.width / 2, this._airbase.y = t.y - this._airbase.height / 2, this.addChild(this._airbase)
            }, e.prototype.shake = function () {
                var t = this;
                if (null != this._airbase)
                    for (var e = this._airbase.x, i = createjs.Tween.get(this._airbase), n = 0; n < 60; n++) ! function (n) {
                        i.wait(50), i.call(function () {
                            Math.random();
                            t._airbase.x = n % 2 == 0 ? e + (Math.random() + .5) : e - (Math.random() + .5)
                        })
                    }(n)
            }, e
        }(PIXI.Container);
    e.AirBaseLayer = r
}