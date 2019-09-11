const function885 = function (t, e, i) {
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
    var o = i(3),
        r = i(115),
        s = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i.DEFAULT_IN_X = 507, i.DEFAULT_OUT_X = 825, i.COMPLETION = [107, 108], i.WALK = [102, 103, 104], i.BUILD = [106, 105], i.ANIMATION_KEY_MOVE = {}, i.ANIMATION_KEY_BUILDING = {}, i.ANIMATION_KEY_COMPLETE = {}, i.y = 91, i.x = i.DEFAULT_OUT_X, i.sprite = new PIXI.Sprite, i.star_0 = new PIXI.Sprite(o.ARSENAL_MAIN.getTexture(142)), i.star_1 = new PIXI.Sprite(o.ARSENAL_MAIN.getTexture(142)), i.effect = new PIXI.Container, i.sprite.anchor.set(.5, 1), i.star_0.anchor.set(.5, .5), i.star_1.anchor.set(.5, .5), i.star_0.scale.set(0, 0), i.star_1.scale.set(0, 0), i.sprite.texture = o.ARSENAL_MAIN.getTexture(i.WALK[0]), i.effect.position.x = 46, i.effect.addChild(i.star_1, i.star_0), i.sprite.addChild(i.effect), i.addChild(i.sprite), i.syncAnimationKey = e, i
            }
            return n(e, t), e.prototype.build = function () {
                var t = this;
                this.stopAllAnimation(), this.sprite.y = 0, this.sprite.scale.x = 1, this.__AnimationMove__(this.DEFAULT_OUT_X, this.DEFAULT_IN_X, 3e3, function () {
                    t.__AnimationBuilding__()
                })
            }, e.prototype.resume = function () {
                this.x = this.DEFAULT_IN_X, this.sprite.y = 0, this.stopAllAnimation(), this.__AnimationBuilding__()
            }, e.prototype.complete = function () {
                this.sprite.scale.x = 1, this.effect.visible = !1, this.x = this.DEFAULT_IN_X, this.stopAllAnimation(), this.__AnimationComplete__()
            }, e.prototype.useBurner = function () {
                this.stopAllAnimation(), this.sprite.y = 0, this.effect.visible = !1, this.sprite.scale.x = -1, this.__AnimationMove__(this.x, this.DEFAULT_OUT_X, 1e3, function () {})
            }, e.prototype.received = function () {
                this.stopAllAnimation(), this.sprite.y = 0, this.sprite.scale.x = -1, this.__AnimationMove__(this.x, this.DEFAULT_OUT_X, 1e3, function () {})
            }, e.prototype.useBurnerd = function () {
                var t = this;
                this.sprite.scale.x = 1, this.sprite.y = 0, this.__AnimationMove__(this.x, this.DEFAULT_IN_X, 1e3, function () {
                    t.__AnimationComplete__()
                })
            }, e.prototype.stopAllAnimation = function () {
                createjs.Tween.removeTweens(this.ANIMATION_KEY_BUILDING), createjs.Tween.removeTweens(this.ANIMATION_KEY_COMPLETE), createjs.Tween.removeTweens(this.ANIMATION_KEY_MOVE)
            }, e.prototype.__AnimationMove__ = function (t, e, i, n) {
                var r = this;
                this.ANIMATION_KEY_MOVE.x = this.x = t, this.ANIMATION_KEY_MOVE.progress = 0;
                var s = createjs.Tween.get(this.ANIMATION_KEY_MOVE, {
                    loop: !0
                });
                s.to({
                    progress: 0
                }).to({
                    progress: 1
                }, 250).to({
                    progress: 0
                }, 250).addEventListener("change", function () {
                    var t = r.ANIMATION_KEY_MOVE.progress,
                        e = Math.round((r.WALK.length - 1) * t),
                        i = r.WALK[e];
                    r.sprite.texture = o.ARSENAL_MAIN.getTexture(i)
                });
                var a = createjs.Tween.get(this.ANIMATION_KEY_MOVE);
                a.to({
                    x: e,
                    progress: 1
                }, i).call(function () {
                    createjs.Tween.removeTweens(r.ANIMATION_KEY_MOVE), a.setPaused(!0), s.setPaused(!0), a.removeAllEventListeners("change"), s.removeAllEventListeners("change"), n()
                }).addEventListener("change", function () {
                    var t = r.ANIMATION_KEY_MOVE.x;
                    r.x = t
                })
            }, e.prototype.__AnimationBuilding__ = function () {
                var t = this;
                this.ANIMATION_KEY_BUILDING.progress_A = 0, this.ANIMATION_KEY_BUILDING.progress_B = 0;
                var e = function (t, e, i, n) {
                    return {
                        x: (1 - n) * (1 - n) * t.x + 2 * (1 - n) * n * e.x + n * n * i.x,
                        y: (1 - n) * (1 - n) * t.y + 2 * (1 - n) * n * e.y + n * n * i.y
                    }
                };
                createjs.Tween.get(this.ANIMATION_KEY_BUILDING, {
                    loop: !0
                }).to({
                    progress_A: 1
                }, 500).to({
                    progress_B: 1
                }, 500).addEventListener("change", function () {
                    var i = t.ANIMATION_KEY_BUILDING.progress_A,
                        n = t.ANIMATION_KEY_BUILDING.progress_B;
                    t.sprite.texture = o.ARSENAL_MAIN.getTexture(t.BUILD[Math.round((t.BUILD.length - 1) * i)]), t.sprite.position.x = 2 * Math.sin(Math.PI / 90 * (360 * n)) * 1.5;
                    var r = {
                            x: -18,
                            y: 6
                        },
                        s = {
                            x: -24,
                            y: -45
                        },
                        a = {
                            x: -37,
                            y: 0
                        },
                        _ = e(r, s, a, n);
                    t.star_0.x = _.x, t.star_0.y = _.y, t.star_0.alpha = t.star_1.alpha = n < .9 ? n : 0, t.star_0.scale.set(n, n), t.star_1.position.set(30, -19), t.star_1.scale.set(n, n)
                })
            }, e.prototype.__AnimationComplete__ = function () {
                var t = this;
                createjs.Tween.get(this.ANIMATION_KEY_COMPLETE, {
                    loop: !0
                }).wait(1e3).addEventListener("change", function () {
                    var e = t.syncAnimationKey.getNumber(r.SYNC_KEY_JUMP);
                    t.sprite.y = -10 * e, t.sprite.texture = .4 < e ? o.ARSENAL_MAIN.getTexture(t.COMPLETION[0]) : o.ARSENAL_MAIN.getTexture(t.COMPLETION[1])
                })
            }, e.prototype.dispose = function () {
                createjs.Tween.removeTweens(this.ANIMATION_KEY_MOVE), createjs.Tween.removeTweens(this.ANIMATION_KEY_BUILDING), createjs.Tween.removeTweens(this.ANIMATION_KEY_COMPLETE), this.effect.removeChildren(), this.star_0 = null, this.star_1 = null, this.sprite = null, this.effect = null, this.syncAnimationKey = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.Spanner = s
}