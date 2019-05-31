const function873 = function (t, e, i) {
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
    var o, r = i(3),
        s = i(114),
        a = i(1);
    ! function (t) {
        t.LEFT = 270, t.RIGHT = 705, t.BOTTOM = 95, t.DIRECTION_LEFT = 1, t.DIRECTION_RIGHT = -1
    }(o = e.ArsenalStaffConst || (e.ArsenalStaffConst = {}));
    var _ = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.WALK = [97, 98, 99, 98], i.COMPLETION = [100, 101], i.ANIMATION_BUILD_KEY = {}, i.ANIMATION_ENTER_KEY = {}, i.JUMP_ANIMATION = {
                progress: 0
            }, i.ANIMATION_COMPLETE_KEY = {}, i.ANIMATION_BURNER_KEY = {}, i._onClick = function () {
                if (0 == createjs.Tween.hasActiveTweens(i.JUMP_ANIMATION)) {
                    var t = createjs.Tween.get(i.JUMP_ANIMATION).to({
                        progress: 1
                    }, 250, createjs.Ease.quintOut).to({
                        progress: 0
                    }, 250);
                    t.call(function () {
                        t.removeAllEventListeners("change"), t.setPaused(!0)
                    }).addEventListener("change", function () {
                        i.sprite.y = -30 * i.JUMP_ANIMATION.progress
                    })
                }
            }, i.sprite = new PIXI.Sprite, i.effect = new PIXI.Container, i.ase_0 = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(141)), i.ase_1 = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(141)), i.sprite.texture = r.ARSENAL_MAIN.getTexture(i.WALK[0]), i.sprite.interactive = !0, i.sprite.on(a.EventType.CLICK, i._onClick), i.ase_0.anchor.set(0, 1), i.ase_1.anchor.set(0, 1), i.sprite.anchor.set(.5, 1), i.effect.addChild(i.ase_0, i.ase_1), i.sprite.addChild(i.effect), i.addChild(i.sprite), i.syncAnimationKey = e, i
        }
        return n(e, t), e.prototype.dispose = function () {
            createjs.Tween.removeTweens(this.ANIMATION_BUILD_KEY), createjs.Tween.removeTweens(this.ANIMATION_ENTER_KEY), createjs.Tween.removeTweens(this.JUMP_ANIMATION), createjs.Tween.removeTweens(this.ANIMATION_COMPLETE_KEY), createjs.Tween.removeTweens(this.ANIMATION_BURNER_KEY), this.effect.removeChildren(), this.ase_0 = null, this.ase_1 = null, this.effect = null, this.sprite = null, this.syncAnimationKey = null, this.removeChildren()
        }, e.prototype.build = function () {
            this.sprite.y = 0, this.__AnimationBuild__()
        }, e.prototype.__AnimationBuild__ = function () {
            var t = this;
            createjs.Tween.removeTweens(this.ANIMATION_BUILD_KEY), this.ANIMATION_BUILD_KEY.progress = 0, this.ANIMATION_BUILD_KEY.x = o.RIGHT, this.ANIMATION_BUILD_KEY.direction = o.DIRECTION_LEFT;
            var e = o.RIGHT - o.LEFT,
                i = (14 + 5 * Math.random()) / 1.5,
                n = i * e;
            this.position.set(o.RIGHT, o.BOTTOM), createjs.Tween.get(this.ANIMATION_BUILD_KEY, {
                loop: !0
            }).wait(1e3 * Math.random()).to({
                x: o.LEFT
            }, n).to({
                direction: o.DIRECTION_RIGHT
            }, 1e3).to({
                x: o.RIGHT
            }, n).addEventListener("change", function () {
                var e = t.ANIMATION_BUILD_KEY.x,
                    i = t.ANIMATION_BUILD_KEY.direction;
                t.x = e, t.sprite.scale.x = i
            }), createjs.Tween.get(this.ANIMATION_BUILD_KEY, {
                loop: !0
            }).to({
                progress: 0
            }).to({
                progress: 1
            }, 250).to({
                progress: 0
            }, 250).addEventListener("change", function () {
                var e = t.ANIMATION_BUILD_KEY.progress,
                    i = Math.round((t.WALK.length - 1) * e);
                switch (t.sprite.texture = r.ARSENAL_MAIN.getTexture(t.WALK[i]), t.ase_0.visible = !1, t.ase_1.visible = !1, i) {
                    case 0:
                        t.ase_0.position.set(3, -64), t.ase_1.position.set(21, -54), t.ase_0.rotation = -6.2 / Math.PI / 180, t.ase_1.rotation = 28.5 / Math.PI / 180, t.ase_0.visible = !0, t.ase_1.visible = !0;
                        break;
                    case 1:
                        t.ase_0.position.set(6.675, -47.25), t.ase_1.position.set(14.25, -59.25), t.ase_0.rotation = 1 / Math.PI / 180, t.ase_1.rotation = 0, t.ase_0.visible = !0, t.ase_1.visible = !0;
                        break;
                    case 2:
                        t.ase_0.position.set(8.25, -62.25), t.ase_1.position.set(20.25, -51.75), t.ase_0.rotation = 0, t.ase_1.rotation = 0, t.ase_0.visible = !0, t.ase_1.visible = !0;
                        break;
                    case 3:
                        t.ase_0.position.set(6.675, -47.25), t.ase_1.position.set(14.25, -59.25), t.ase_0.rotation = 1 / Math.PI / 180, t.ase_1.rotation = 0, t.ase_0.visible = !0, t.ase_1.visible = !0
                }
            })
        }, e.prototype.resume = function () {
            this.sprite.y = 0, this.__AnimationBuild__()
        }, e.prototype.complete = function () {
            var t = this;
            this.effect.visible = !1, this.sprite.scale.x = 1, this.sprite.y = 0, createjs.Tween.removeTweens(this.ANIMATION_BUILD_KEY), createjs.Tween.removeTweens(this.ANIMATION_ENTER_KEY), createjs.Tween.removeTweens(this.ANIMATION_COMPLETE_KEY), createjs.Tween.get(this.ANIMATION_COMPLETE_KEY, {
                loop: !0
            }).wait(1e3).addEventListener("change", function () {
                var e = t.syncAnimationKey.getNumber(s.SYNC_KEY_JUMP);
                t.sprite.y = -10 * e, t.sprite.texture = .4 < e ? r.ARSENAL_MAIN.getTexture(t.COMPLETION[0]) : r.ARSENAL_MAIN.getTexture(t.COMPLETION[1])
            })
        }, e.prototype.stopOtherAnimation = function () {
            createjs.Tween.removeTweens(this.ANIMATION_BUILD_KEY), createjs.Tween.removeTweens(this.ANIMATION_ENTER_KEY), createjs.Tween.removeTweens(this.ANIMATION_COMPLETE_KEY), createjs.Tween.removeTweens(this.ANIMATION_BURNER_KEY)
        }, e.prototype.useBurner = function () {
            var t = this;
            this.stopOtherAnimation(), this.effect.visible = !1, this.sprite.scale.x = -1, this.sprite.y = 0, this.ANIMATION_BURNER_KEY.x = this.x, this.ANIMATION_BURNER_KEY.progress = 0;
            var e = createjs.Tween.get(this.ANIMATION_BURNER_KEY, {
                loop: !0
            });
            e.to({
                progress: 0
            }).to({
                progress: 1
            }, 250).to({
                progress: 0
            }, 250).addEventListener("change", function () {
                var e = t.ANIMATION_BURNER_KEY.progress,
                    i = Math.round((t.WALK.length - 1) * e),
                    n = t.WALK[i];
                t.sprite.texture = r.ARSENAL_MAIN.getTexture(n)
            });
            var i = createjs.Tween.get(this.ANIMATION_BURNER_KEY);
            i.to({
                x: 750
            }, 1e3).call(function () {
                createjs.Tween.removeTweens(t.ANIMATION_BURNER_KEY), i.removeAllEventListeners("change"), e.removeAllEventListeners("change"), i.setPaused(!0), e.setPaused(!0), t.x = 750
            }).addEventListener("change", function () {
                t.x = t.ANIMATION_BURNER_KEY.x
            })
        }, e.prototype.received = function () {
            var t = this;
            this.stopOtherAnimation(), this.sprite.y = 0, this.ANIMATION_BURNER_KEY.x = this.x, this.ANIMATION_BURNER_KEY.progress = 0;
            var e = createjs.Tween.get(this.ANIMATION_BURNER_KEY);
            e.to({
                x: 750
            }, 1e3).call(function () {
                createjs.Tween.removeTweens(t.ANIMATION_BURNER_KEY), e.removeAllEventListeners("change"), i.removeAllEventListeners("change"), e.setPaused(!0), i.setPaused(!0), t.x = 750
            }).addEventListener("change", function () {
                t.x = t.ANIMATION_BURNER_KEY.x
            });
            var i = createjs.Tween.get(this.ANIMATION_BURNER_KEY, {
                loop: !0
            });
            i.to({
                progress: 0
            }).to({
                progress: 1
            }, 250).to({
                progress: 0
            }, 250).addEventListener("change", function () {
                var e = t.ANIMATION_BURNER_KEY.progress,
                    i = Math.round((t.WALK.length - 1) * e),
                    n = t.WALK[i];
                t.sprite.texture = r.ARSENAL_MAIN.getTexture(n)
            })
        }, e
    }(PIXI.Container);
    e.Carry = _
}