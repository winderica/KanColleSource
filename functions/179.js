const function179 = function (t, e, i) {
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
    var o = i(1343),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._current_frame = 0, e._img = new PIXI.Sprite, e.addChild(e._img), e
            }
            return n(e, t), e.prototype.play = function (t) {
                void 0 === t && (t = null), this._isPlaying || (this._isPlaying = !0, this.createTween(t))
            }, e.prototype.createTween = function (t) {
                var e = this;
                void 0 === t && (t = null), createjs.Tween.removeTweens(this), this._tween = createjs.Tween.get(this), this._tween.wait(33).call(function () {
                    e._current_frame++, e._img.texture = e._getTexture(e._current_frame), e._setImageOffset(e._current_frame), e._current_frame <= 15 ? e.createTween(t) : (e._isPlaying = !1, e._current_frame = 0, null != t && t())
                })
            }, e.prototype.stop = function () {
                this._isPlaying && (this._isPlaying = !1, this._tween.setPaused(!0)), this._current_frame = 0, this._img.texture = this._getTexture(this._current_frame), this._setImageOffset(this._current_frame)
            }, e.prototype._getTexture = function (t) {
                switch (t) {
                    case 1:
                        return o.COMMON_EXPLOSION.getTexture(0);
                    case 2:
                        return o.COMMON_EXPLOSION.getTexture(7);
                    case 3:
                        return o.COMMON_EXPLOSION.getTexture(8);
                    case 4:
                        return o.COMMON_EXPLOSION.getTexture(9);
                    case 5:
                        return o.COMMON_EXPLOSION.getTexture(10);
                    case 6:
                        return o.COMMON_EXPLOSION.getTexture(11);
                    case 7:
                        return o.COMMON_EXPLOSION.getTexture(12);
                    case 8:
                        return o.COMMON_EXPLOSION.getTexture(13);
                    case 9:
                        return o.COMMON_EXPLOSION.getTexture(14);
                    case 10:
                        return o.COMMON_EXPLOSION.getTexture(1);
                    case 11:
                        return o.COMMON_EXPLOSION.getTexture(2);
                    case 12:
                        return o.COMMON_EXPLOSION.getTexture(3);
                    case 13:
                        return o.COMMON_EXPLOSION.getTexture(4);
                    case 14:
                        return o.COMMON_EXPLOSION.getTexture(5);
                    case 15:
                        return o.COMMON_EXPLOSION.getTexture(6);
                    default:
                        return PIXI.Texture.EMPTY
                }
            }, e.prototype._setImageOffset = function (t) {
                switch (t) {
                    case 1:
                        this._img.position.set(-71, -53);
                        break;
                    case 2:
                        this._img.position.set(-74, -60);
                        break;
                    case 3:
                        this._img.position.set(-77, -69);
                        break;
                    case 4:
                        this._img.position.set(-78, -72);
                        break;
                    case 5:
                        this._img.position.set(-81, -77);
                        break;
                    case 6:
                        this._img.position.set(-84, -81);
                        break;
                    case 7:
                        this._img.position.set(-84, -86);
                        break;
                    case 8:
                        this._img.position.set(-87, -89);
                        break;
                    case 9:
                        this._img.position.set(-89, -90);
                        break;
                    case 10:
                        this._img.position.set(-90, -90);
                        break;
                    case 11:
                        this._img.position.set(-87, -89);
                        break;
                    case 12:
                    case 13:
                        this._img.position.set(-87, -87);
                        break;
                    case 14:
                        this._img.position.set(-87, -89);
                        break;
                    case 15:
                        this._img.position.set(-90, -89);
                        break;
                    default:
                        this._img.position.set(0)
                }
            }, e
        }(PIXI.Container);
    e.Explosion = r
}