const function599 = function (t, e, i) {
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
    var o = i(600),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._tween = null, e._shogo_anime = [
                    [{
                        texture: 0,
                        time: 100
                    }, {
                        texture: 4,
                        time: 100
                    }, {
                        texture: 13,
                        time: 100
                    }, {
                        texture: 14,
                        time: 200
                    }, {
                        texture: 13,
                        time: 100
                    }, {
                        texture: 4,
                        time: 100
                    }, {
                        texture: 0,
                        time: 500
                    }, {
                        texture: 15,
                        time: 100
                    }, {
                        texture: 16,
                        time: 100
                    }, {
                        texture: 17,
                        time: 100
                    }, {
                        texture: 18,
                        time: 100
                    }, {
                        texture: 19,
                        time: 100
                    }, {
                        texture: 20,
                        time: 100
                    }, {
                        texture: 5,
                        time: 100
                    }, {
                        texture: 6,
                        time: 100
                    }, {
                        texture: 7,
                        time: 100
                    }, {
                        texture: 8,
                        time: 100
                    }, {
                        texture: 9,
                        time: 100
                    }, {
                        texture: 10,
                        time: 100
                    }, {
                        texture: 11,
                        time: 100
                    }, {
                        texture: 12,
                        time: 100
                    }, {
                        texture: 0,
                        time: 5400
                    }],
                    [{
                        texture: 0,
                        time: 100
                    }, {
                        texture: 21,
                        time: 100
                    }, {
                        texture: 22,
                        time: 100
                    }, {
                        texture: 23,
                        time: 200
                    }, {
                        texture: 22,
                        time: 100
                    }, {
                        texture: 21,
                        time: 100
                    }, {
                        texture: 0,
                        time: 500
                    }, {
                        texture: 24,
                        time: 100
                    }, {
                        texture: 25,
                        time: 100
                    }, {
                        texture: 26,
                        time: 100
                    }, {
                        texture: 27,
                        time: 100
                    }, {
                        texture: 25,
                        time: 100
                    }, {
                        texture: 24,
                        time: 100
                    }, {
                        texture: 0,
                        time: 6200
                    }],
                    [{
                        texture: 0,
                        time: 100
                    }, {
                        texture: 1,
                        time: 100
                    }, {
                        texture: 2,
                        time: 100
                    }, {
                        texture: 3,
                        time: 200
                    }, {
                        texture: 2,
                        time: 100
                    }, {
                        texture: 1,
                        time: 100
                    }, {
                        texture: 0,
                        time: 7300
                    }],
                    [{
                        texture: 0,
                        time: 0
                    }]
                ], e._NowPlaying = !1, e
            }
            return n(e, t), e.prototype.startAnimation = function (t, e) {
                this._shogo_type = e, null != this._shogo && this._shogo.position.set(t.x, t.y), this._NowPlaying || (this._NowPlaying = !0, this._shogo_anime_frm = 0, this._shogo = new PIXI.Sprite, this._shogo.texture = o.COMMON_SHOGO.getTexture(this._shogo_anime[this._shogo_type][this._shogo_anime_frm].texture), this._shogo.position.set(t.x, t.y), this.addChild(this._shogo), 0 != this._shogo_anime[this._shogo_type][0].time && this._animate())
            }, e.prototype.stopAnimation = function () {
                this._NowPlaying && -1 != this._shogo_type && (null != this._tween && this._tween.pause(null), this._NowPlaying = !1, this.removeChild(this._shogo), this._shogo = null, this._tween = null)
            }, e.prototype._animate = function () {
                var t = this;
                if (0 != this._NowPlaying) {
                    var e = this._shogo_anime[this._shogo_type][this._shogo_anime_frm].time,
                        i = this._shogo_anime[this._shogo_type][this._shogo_anime_frm].texture;
                    ++this._shogo_anime_frm == this._shogo_anime[this._shogo_type].length && (this._shogo_anime_frm = 0), this._shogo.texture = o.COMMON_SHOGO.getTexture(i), this._tween = createjs.Tween.get(this._shogo.texture).wait(e).call(function () {
                        t._tween = null, t._animate()
                    })
                }
            }, e
        }(PIXI.Container);
    e.Shogo = r
}