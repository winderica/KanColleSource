const function1463 = function (t, e, i) {
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
    var o = i(22),
        r = i(24),
        s = i(12),
        a = i(16),
        _ = i(1464),
        l = i(1465),
        u = i(1468),
        c = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._img = new _.BannerImage, e._flagship_mark = new PIXI.Sprite, e._flagship_mark.position.set(210, 6), e._frame = new l.BannerFrame, e._frame.alpha = 0, e._layer_color = new u.BannerOverlay, e._layer_over = new PIXI.Sprite, e.addChild(e._img), e.addChild(e._flagship_mark), e.addChild(e._frame), e.addChild(e._layer_color), e.addChild(e._layer_over), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "img", {
                get: function () {
                    return this._img
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "flagship_mark", {
                get: function () {
                    return this._flagship_mark
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "frame", {
                get: function () {
                    return this._frame
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "layer_color", {
                get: function () {
                    return this._layer_color
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "layer_over", {
                get: function () {
                    return this._layer_over
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t, e, i, n, r, s, _, l) {
                if (this._img.initialize(t, e, i, _, l, s, r), 1 == s && (1 == r ? this._img.x += 7 : this._img.x -= 78), 0 == n && (this._flagship_mark.texture = a.BATTLE_MAIN.getTexture(48), 0 == r && 1 == s && (this._flagship_mark.alpha = .5, this._flagship_mark.x = 135)), this._frame.initialize(e, i, n, r, s), s) {
                    var u = new PIXI.Graphics;
                    u.beginFill(0), u.drawRect(0, 0, o.BannerSize.W, o.BannerSize.H), u.endFill(), this._img.mask = u, this.addChild(u)
                }
                this.layer_color.initialize(r, s)
            }, e.prototype.updateHp = function (t, e) {
                this._img.update(t, e), this._frame.updateHp(t, e)
            }, e.prototype.waveOver = function (t) {
                var e = this,
                    i = new s.Sprite(a.BATTLE_MAIN.getTexture(84));
                i.position.set(o.BannerSize.W / 2, o.BannerSize.H / 2), i.scale.set(0), i.anchor.set(.5), this._layer_over.addChild(i), createjs.Tween.get(i).wait(t).to({
                    scaleX: .75,
                    scaleY: .75
                }, 400).to({
                    alpha: 0,
                    scaleX: 1,
                    scaleY: 1
                }, 200).call(function () {
                    e._layer_over.removeChild(i)
                })
            }, e
        }(r.Container);
    e.BannerContent = c
}