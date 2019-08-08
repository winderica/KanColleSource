const function283 = function (t, e, i) {
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
    var o = i(5),
        r = i(153),
        s = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), Object.defineProperty(e.prototype, "bg", {
                get: function () {
                    return this._bg
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "message", {
                get: function () {
                    return this._message
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "banner_top", {
                get: function () {
                    return this._banner_top
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "banner_bottom", {
                get: function () {
                    return this._banner_bottom
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "particles", {
                get: function () {
                    return this._particles
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t) {
                this._bg = new PIXI.Sprite(r.COMMON_EXPEDITION.getTexture(10)), this._bg.anchor.set(.5, .5), this._bg.position.set(o.default.width / 2, o.default.height / 2), this._message = 1 == t ? new PIXI.Sprite(r.COMMON_EXPEDITION.getTexture(4)) : new PIXI.Sprite(r.COMMON_EXPEDITION.getTexture(3)), this._message.anchor.set(.5, .5), this._banner_top = new a, this._banner_bottom = new a, this._particles = new _, this._particles.initialize(), this.addChild(this._bg), this.addChild(this._message), this.addChild(this._banner_top), this.addChild(this._banner_bottom), this.addChild(this._particles)
            }, e.prototype.dispose = function () {
                this._bg = null, this._message = null, null != this._banner_top && this._banner_top.dispose(), this._banner_top = null, null != this._banner_bottom && this._banner_bottom.dispose(), this._banner_bottom = null, null != this._particles && this._particles.dispose(), this._particles = null
            }, e
        }(PIXI.Container);
    e.ExpeditionCutin = s;
    var a = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), e.prototype.dispose = function () {
                for (var t = 0, e = this.children; t < e.length; t++) {
                    var i = e[t],
                        n = i;
                    null != n && n.dispose()
                }
                this.removeChildren()
            }, e
        }(PIXI.Container),
        _ = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.XPOS = [-164, -116, -102, -62, -36, 0, 65, 90, 141, 195, 215, 270], e.YPOS = [-33, 32, -51, -24, 48, -3, -47, 51, -30, 29, -45, -14], e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._particles = new Array;
                for (var t in this.XPOS) {
                    var e = new PIXI.Sprite(r.COMMON_EXPEDITION.getTexture(5));
                    e.anchor.set(.5, .5), e.scale.set(0, 0), e.position.set(this.XPOS[t] + o.default.width / 2, this.YPOS[t] + o.default.height / 2), this.addChild(e), this._particles.push(e)
                }
            }, e.prototype.startAnim = function () {
                if (null == this._tweens) {
                    this._tweens = [];
                    for (var t = 0; t < this._particles.length; t++) {
                        var e = this._particles[t],
                            i = createjs.Tween.get(e.scale).wait(100 * t).to({
                                x: 1,
                                y: 1
                            }, 100).to({
                                x: 0,
                                y: 0
                            }, 100);
                        this._tweens.push(i)
                    }
                }
            }, e.prototype.dispose = function () {
                for (var t = 0, e = this._tweens; t < e.length; t++) {
                    e[t].setPaused(!0)
                }
                this._tweens = null, this._particles = null, this.removeChildren()
            }, e
        }(PIXI.Container)
}