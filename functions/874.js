const function874 = function (t, e, i) {
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
    var o = i(35),
        r = i(114),
        s = i(875),
        a = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i.DEFAULT_IN_X = 288, i.DEFAULT_OUT_X = 825, i.BUILD = [113, 112], i.WALK = [109, 110, 111, 110], i.COMPLETION = [114, 115], i.STAR_CENTER_OFFSET = {
                    x: -30,
                    y: -30
                }, i.ANIMATION_KEY_WALK = {}, i.ANIMATION_KEY_TURN = {}, i.ANIMATION_KEY_COMPLETE = {}, i.ANIMATION_KEY_BUILDING = {}, i.y = 91, i.x = i.DEFAULT_OUT_X, i.sprite = new PIXI.Sprite, i.sparkParticle = new s.GreenStarParticle, i.sprite.anchor.set(.5, 1), i.sprite.texture = o.ARSENAL_MAIN.getTexture(i.WALK[0]), i.sparkParticle.position.set(i.STAR_CENTER_OFFSET.x, i.STAR_CENTER_OFFSET.y), i.sprite.addChild(i.sparkParticle), i.addChild(i.sprite), i.syncAnimationKey = e, i
            }
            return n(e, t), e.prototype.build = function () {
                var t = this;
                this.stopAllTween(), this.sparkParticle.updateAlpha(0), this.sparkParticle.updateStarPosition(), this.sparkParticle.visible = !0, this.sprite.scale.x = 1, this.__AnimationWalk__(this.x, this.DEFAULT_IN_X, 2500, function () {
                    t.stopAllTween(), t.__AnimationTurn__(-1, 500, function () {
                        t.stopAllTween(), t.__AnimationBuilding__()
                    })
                })
            }, e.prototype.resume = function () {
                this.stopAllTween(), this.x = 288, this.sprite.scale.x = -1, this.sprite.y = 0, this.__AnimationBuilding__()
            }, e.prototype.useBurner = function () {
                this.stopAllTween(), this.sparkParticle.visible = !1, this.sparkParticle.updateAlpha(0), this.sprite.scale.x = -1, this.sprite.y = 0, this.__AnimationWalk__(this.x, this.DEFAULT_OUT_X, 1e3, function () {})
            }, e.prototype.useBurnerd = function () {
                var t = this;
                this.stopAllTween(), this.sprite.scale.x = 1, this.__AnimationWalk__(this.x, this.DEFAULT_IN_X, 1e3, function () {
                    t.sprite.scale.x = 1, t.sparkParticle.visible = !1, t.sparkParticle.updateAlpha(0), t.stopAllTween(), t.__AnimationComplete__()
                })
            }, e.prototype.received = function () {
                this.stopAllTween(), this.sprite.y = 0, this.sprite.scale.x = -1, this.__AnimationWalk__(this.x, this.DEFAULT_OUT_X, 1e3, function () {})
            }, e.prototype.complete = function () {
                this.stopAllTween(), this.x = this.DEFAULT_IN_X, this.sprite.scale.x = 1, this.sprite.y = 0, this.sparkParticle.visible = !1, this.sparkParticle.updateAlpha(0), this.__AnimationComplete__()
            }, e.prototype.stopAllTween = function () {
                createjs.Tween.removeTweens(this.ANIMATION_KEY_WALK), createjs.Tween.removeTweens(this.ANIMATION_KEY_BUILDING), createjs.Tween.removeTweens(this.ANIMATION_KEY_COMPLETE), createjs.Tween.removeTweens(this.ANIMATION_KEY_TURN)
            }, e.prototype.__AnimationWalk__ = function (t, e, i, n) {
                var r = this;
                this.ANIMATION_KEY_WALK.x = this.x = t, this.ANIMATION_KEY_WALK.progress = 0, this.ANIMATION_KEY_WALK.walk = 0;
                var s = createjs.Tween.get(this.ANIMATION_KEY_WALK, {
                    loop: !0
                });
                s.to({
                    walk: 0
                }).to({
                    walk: 1
                }, 225).to({
                    walk: 0
                }, 225).addEventListener("change", function () {
                    var t = r.ANIMATION_KEY_WALK.walk,
                        e = Math.round((r.WALK.length - 1) * t);
                    r.sprite.texture = o.ARSENAL_MAIN.getTexture(r.WALK[e])
                });
                var a = createjs.Tween.get(this.ANIMATION_KEY_WALK);
                a.to({
                    x: e,
                    progress: 1
                }, i).call(function () {
                    createjs.Tween.removeTweens(r.ANIMATION_KEY_WALK), a.removeAllEventListeners("change"), s.removeAllEventListeners("change"), a.setPaused(!0), s.setPaused(!0), r.x = e, n()
                }).addEventListener("change", function () {
                    var t = r.ANIMATION_KEY_WALK.progress,
                        e = Math.round((r.WALK.length - 1) * t);
                    r.x = r.ANIMATION_KEY_WALK.x, r.sprite.texture = o.ARSENAL_MAIN.getTexture(r.WALK[e])
                })
            }, e.prototype.__AnimationTurn__ = function (t, e, i) {
                var n = this;
                this.ANIMATION_KEY_TURN.direction = this.sprite.scale.x, createjs.Tween.removeTweens(this.ANIMATION_KEY_TURN);
                var o = createjs.Tween.get(this.ANIMATION_KEY_TURN);
                o.to({
                    direction: t
                }, e).call(function () {
                    createjs.Tween.removeTweens(n.ANIMATION_KEY_TURN), o.removeAllEventListeners("change"), o.setPaused(!0), n.sprite.scale.x = t, i()
                }).addEventListener("change", function () {
                    n.sprite.scale.x = n.ANIMATION_KEY_TURN.direction
                })
            }, e.prototype.__AnimationComplete__ = function () {
                var t = this;
                createjs.Tween.get(this.ANIMATION_KEY_COMPLETE, {
                    loop: !0
                }).wait(1e3).addEventListener("change", function () {
                    var e = t.syncAnimationKey.getNumber(r.SYNC_KEY_JUMP);
                    t.sprite.y = -15 * e, t.sprite.texture = .2 < e ? o.ARSENAL_MAIN.getTexture(t.COMPLETION[0]) : o.ARSENAL_MAIN.getTexture(t.COMPLETION[1])
                })
            }, e.prototype.__AnimationBuilding__ = function () {
                var t = this;
                createjs.Tween.get(this.ANIMATION_KEY_BUILDING, {
                    loop: !0
                }).call(function () {
                    t.sparkParticle.updateStarPosition(), t.sparkParticle.updateAlpha(0), t.sprite.texture = o.ARSENAL_MAIN.getTexture(t.BUILD[1])
                }).wait(500).call(function () {
                    t.sprite.texture = o.ARSENAL_MAIN.getTexture(t.BUILD[0]);
                    createjs.Tween.get(t.ANIMATION_KEY_BUILDING).to({
                        progress: 0
                    }).to({
                        progress: 1
                    }, 300).addEventListener("change", function () {
                        var e = t.ANIMATION_KEY_BUILDING.progress;
                        t.sparkParticle.updateAnimation(e), t.sparkParticle.updateAlpha(1 - e)
                    })
                }).wait(500)
            }, e.prototype.dispose = function () {
                createjs.Tween.removeTweens(this.ANIMATION_KEY_WALK), createjs.Tween.removeTweens(this.ANIMATION_KEY_TURN), createjs.Tween.removeTweens(this.ANIMATION_KEY_COMPLETE), createjs.Tween.removeTweens(this.ANIMATION_KEY_BUILDING), this.sparkParticle.dispose(), this.sparkParticle = null, this.sprite = null, this.syncAnimationKey = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.Hammer = a
}