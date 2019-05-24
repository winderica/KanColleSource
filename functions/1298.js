const function1298 = function (t, e, i) {
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
    var o = i(23),
        r = i(20),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._light = new PIXI.Sprite, e._light.anchor.set(.5), e.addChild(e._light), e._cell = new PIXI.Sprite, e._cell.anchor.set(.5), e.addChild(e._cell), e._color = 0, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "color", {
                get: function () {
                    return this._color
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t) {
                this.update(t)
            }, e.prototype.update = function (t) {
                this._color = t, 5 == t ? (this._light.texture = r.MAP_COMMON.getTexture(146), this._startTween(), this._light.visible = !0, this._cell.x = 0, this._cell.y = -5) : (this._stopTween(), this._light.visible = !1, 13 == t ? (this._cell.x = 10, this._cell.y = -12) : (this._cell.x = 0, this._cell.y = 0)), this._cell.texture = this._getTexture(t)
            }, e.prototype.dispose = function () {
                this._stopTween()
            }, e.prototype._startTween = function () {
                null == this._t && (this._t = createjs.Tween.get(this._light, {
                    loop: !0
                }).to({
                    alpha: 0
                }, 300).to({
                    alpha: 1
                }, 300))
            }, e.prototype._stopTween = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null, this._light.alpha = 0)
            }, e.prototype._getTexture = function (t) {
                switch (t) {
                    case -1:
                        return r.MAP_COMMON.getTexture(152);
                    case 1:
                        return r.MAP_COMMON.getTexture(145);
                    case 2:
                    case 6:
                        return r.MAP_COMMON.getTexture(148);
                    case 3:
                        return r.MAP_COMMON.getTexture(150);
                    case 4:
                        return r.MAP_COMMON.getTexture(151);
                    case 5:
                        return r.MAP_COMMON.getTexture(139);
                    case 7:
                        return r.MAP_COMMON.getTexture(101);
                    case 8:
                        return r.MAP_COMMON.getTexture(138);
                    case 9:
                        return r.MAP_COMMON.getTexture(149);
                    case 10:
                        return r.MAP_COMMON.getTexture(96);
                    case 11:
                        return r.MAP_COMMON.getTexture(153);
                    case 12:
                        return r.MAP_COMMON.getTexture(154);
                    case 13:
                        return r.MAP_COMMON.getTexture(81);
                    case -2:
                        return r.MAP_COMMON.getTexture(147);
                    case -3:
                        return r.MAP_COMMON.getTexture(144)
                }
                return PIXI.Texture.EMPTY
            }, e
        }(o.Container);
    e.SpotPointImage = s
}