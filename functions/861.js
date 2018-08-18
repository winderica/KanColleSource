const function861 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(3), r = i(287), s = i(114), a = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i.WALK = [116, 117, 118, 117], i.BURNER = [119, 120], i.COMPLETION = [121, 122], i.RANGE = {
                fx: -300,
                fy: -75,
                tx: -135,
                ty: 0
            }, i.FPS = 60, i.ANIMATION_BUILD_KEY = {}, i.ANIMATION_COMPLETE_KEY = {}, i.ANIMATION_ENTER_KEY = {}, i.sprite = new PIXI.Sprite, i.burner_1_l = new PIXI.Sprite(o.ARSENAL_MAIN.getTexture(57)), i.kiraAnimations = new Array, i.kiras = new Array;
            var n = o.COMMON_MAIN.getTexture(31), s = o.COMMON_MAIN.getTexture(32);
            i.effect = new PIXI.Container, i.sprite.texture = o.ARSENAL_MAIN.getTexture(i.WALK[0]), i.sprite.position.set(45, 0), i.sprite.anchor.set(.5, 1), i.burner_1_l.anchor.set(1, .69), i.burner_1_l.position.set(-40, -9), i.burner_1_l.scale.set(0, 0), i.effect.position.x = -45, i.effect.addChild(i.burner_1_l), i.sprite.addChild(i.effect), i.addChild(i.sprite);
            for (var a = 0; a < 5; a++) {
                var _ = new PIXI.Sprite, u = new r.KiraAnimation(_, n, s);
                i.kiraAnimations.push(u), i.kiras.push(_), i.effect.addChild(_), _.x = i.RANGE.fx + (i.RANGE.tx - i.RANGE.fx) * Math.random(), _.y = i.RANGE.fy + (i.RANGE.ty - i.RANGE.fy) * Math.random(), _.alpha = 0
            }
            return i.syncAnimationKey = e, i
        }

        return n(e, t), e.prototype.useBurner = function (t, e) {
            var i = this;
            this.x = 825, this.sprite.y = 0, this.sprite.scale.x = 1, this.__AnimationWalk__(552, function () {
                i.sprite.texture = o.ARSENAL_MAIN.getTexture(i.BURNER[0]), i.__AnimationBuild__(t, function () {
                    e()
                })
            })
        }, e.prototype.__AnimationBuild__ = function (t, e) {
            var i = this;
            this.burner_1_l.scale.set(0, 0);
            for (var n = 0; n < this.kiraAnimations.length; n++) this.kiraAnimations[n].stop();
            this.__AnimationFireStart__(function () {
                i.__AnimationFireWave__(2500, t, function () {
                    i.__AnimationFireEnd__(e)
                })
            })
        }, e.prototype.__AnimationComplete__ = function () {
            var t = this;
            this.stopTweenAll(), createjs.Tween.get(this.ANIMATION_COMPLETE_KEY, { loop: !0 }).wait(1e3).addEventListener("change", function () {
                var e = t.syncAnimationKey.getNumber(s.SYNC_KEY_JUMP);
                t.sprite.y = -15 * e, t.sprite.texture = .4 < e ? o.ARSENAL_MAIN.getTexture(t.COMPLETION[0]) : o.ARSENAL_MAIN.getTexture(t.COMPLETION[1])
            })
        }, e.prototype.complete = function () {
            this.__AnimationComplete__()
        }, e.prototype.stopTweenAll = function () {
            createjs.Tween.removeTweens(this.ANIMATION_BUILD_KEY), createjs.Tween.removeTweens(this.ANIMATION_ENTER_KEY), createjs.Tween.removeTweens(this.ANIMATION_COMPLETE_KEY)
        }, e.prototype.receive = function () {
            var t = this;
            this.stopTweenAll(), this.sprite.y = 0, this.__AnimationTurng__(-.5, 250, function () {
                t.sprite.texture = o.ARSENAL_MAIN.getTexture(t.WALK[0]), t.__AnimationTurng__(-1, 250, function () {
                    t.__AnimationWalk__(550, function () {
                    })
                })
            })
        }, e.prototype.__AnimationTurng__ = function (t, e, i) {
            var n = this;
            this.stopTweenAll(), this.ANIMATION_BUILD_KEY.direction = this.sprite.scale.x;
            var o = createjs.Tween.get(this.ANIMATION_BUILD_KEY);
            o.to({ direction: t }, e).call(function () {
                createjs.Tween.removeTweens(n.ANIMATION_BUILD_KEY), o.setPaused(!0), i()
            }).addEventListener("change", function () {
                var t = n.ANIMATION_BUILD_KEY.direction;
                n.sprite.scale.x = t
            })
        }, e.prototype.__AnimationWalk__ = function (t, e) {
            var i = this;
            this.stopTweenAll(), this.ANIMATION_BUILD_KEY.x = this.x, this.ANIMATION_BUILD_KEY.walk = 0, this.y = 96, this.burner_1_l.scale.set(0, 0);
            var n = createjs.Tween.get(this.ANIMATION_BUILD_KEY, { loop: !0 });
            n.to({ walk: 1 }, 500).addEventListener("change", function () {
                var t = i.ANIMATION_BUILD_KEY.walk, e = Math.round((i.WALK.length - 1) * t), n = i.WALK[e];
                i.sprite.texture = o.ARSENAL_MAIN.getTexture(n)
            });
            var r = createjs.Tween.get(this.ANIMATION_BUILD_KEY);
            r.to({ x: t, walk: 1 }, 2e3).call(function () {
                createjs.Tween.removeTweens(i.ANIMATION_BUILD_KEY), n.removeAllEventListeners("change"), r.removeAllEventListeners("change"), n.setPaused(!0), r.setPaused(!0), e()
            }).addEventListener("change", function () {
                i.x = i.ANIMATION_BUILD_KEY.x
            })
        }, e.prototype.__AnimationFireStart__ = function (t) {
            var e = this;
            this.ANIMATION_BUILD_KEY.x = 0, this.ANIMATION_BUILD_KEY.y = 0, this.ANIMATION_BUILD_KEY.scale = 0, this.ANIMATION_BUILD_KEY.rotation = 0;
            var i = 1e3 / this.FPS, n = (Math.PI, createjs.Tween.get(this.ANIMATION_BUILD_KEY));
            n.call(function () {
                e.sprite.texture = o.ARSENAL_MAIN.getTexture(e.BURNER[0])
            }).to({ x: 3.3, y: -10.65, scale: 0, rotation: 0 }).to({
                x: 3.3,
                y: -10.65,
                width: 57.9,
                height: 25.725,
                scale: .18,
                rotation: 0
            }, 2 * i).call(function () {
                e.sprite.texture = o.ARSENAL_MAIN.getTexture(e.BURNER[1]), e.burner_1_l.x = 3.15, e.burner_1_l.y = -12.075, e.burner_1_l.scale.set(0, 0), e.burner_1_l.rotation = 0;
                for (var t = 0; t < e.kiraAnimations.length; t++) {
                    var i = e.kiraAnimations[t], n = Math.floor(3 * Math.random());
                    i.play(n)
                }
            }).to({ x: 4.5, y: -8.25, width: 321, height: 142, scale: 1 }, 2 * i).call(function () {
                createjs.Tween.removeTweens(e.ANIMATION_BUILD_KEY), n.setPaused(!0), t()
            }), n.addEventListener("change", function () {
                for (var t = 0; t < e.kiraAnimations.length; t++) {
                    var i = e.kiras[t];
                    i.x = e.RANGE.fx + (e.RANGE.tx - e.RANGE.fx) * Math.random(), i.y = e.RANGE.fy + (e.RANGE.ty - e.RANGE.fy) * Math.random()
                }
                var n = e.ANIMATION_BUILD_KEY.scale;
                e.burner_1_l.x = e.ANIMATION_BUILD_KEY.x, e.burner_1_l.y = e.ANIMATION_BUILD_KEY.y, e.burner_1_l.scale.set(n, n), e.burner_1_l.rotation = e.ANIMATION_BUILD_KEY.rotation
            })
        }, e.prototype.__AnimationFireEnd__ = function (t) {
            for (var e = this, i = 0; i < this.kiraAnimations.length; i++) this.kiraAnimations[i].stop();
            var n = 1e3 / this.FPS, o = createjs.Tween.get(this.ANIMATION_BUILD_KEY);
            o.to({ x: 3.3, y: -10.65, width: 38.6, height: 17.15, scale: .18, rotation: 0 }, 2 * n).to({
                x: 3.3,
                y: -10.65,
                scale: 0,
                rotation: 0
            }).call(function () {
                o.removeAllEventListeners("change"), o.setPaused(!0), e.burner_1_l.scale.set(0, 0), t()
            }).addEventListener("change", function () {
                var t = e.ANIMATION_BUILD_KEY.scale;
                e.burner_1_l.scale.set(t, t)
            })
        }, e.prototype.__AnimationFireWave__ = function (t, e, i) {
            var n = this, o = 2e3 / this.FPS, r = Math.PI / 180;
            this.ANIMATION_BUILD_KEY.fireProgress = 0;
            var s = createjs.Tween.get(this.ANIMATION_BUILD_KEY);
            s.to({ fireProgress: 1 }, t).call(function () {
                createjs.Tween.removeTweens(n.ANIMATION_BUILD_KEY), s.setPaused(!0), i()
            }).addEventListener("change", function () {
                var t = n.ANIMATION_BUILD_KEY.fireProgress;
                e(t)
            }), createjs.Tween.get(this.ANIMATION_BUILD_KEY, { loop: !0 }).to({
                x: 4.425,
                y: -8.4,
                rotation: -5.4841 * r
            }, 2 * o).to({ x: 4.425, y: -8.325, rotation: -.3 * r }, 2 * o).to({
                x: 4.5,
                y: -8.025,
                rotation: 4.7 * r
            }, 2 * o).to({ x: 4.425, y: -8.625, rotation: 1.5 * r }, 2 * o).to({
                x: 4.5,
                y: -8.25,
                rotation: 0
            }, 2 * o).to({ x: 4.425, y: -8.4, rotation: -5.5 * r }, 2 * o).to({
                x: 4.425,
                y: -8.325,
                rotation: -.3 * r
            }, 2 * o).to({ x: 4.5, y: -8.025, rotation: 4.7 * r }, 2 * o).to({
                x: 4.5,
                y: -8.25,
                rotation: 0 * r
            }, 2 * o).to({ x: 4.425, y: -8.4, rotation: -5.5 * r }, 2 * o).to({
                x: 4.425,
                y: -8.625,
                rotation: 1.5 * r
            }, 2 * o).to({ x: 4.5, y: -8.25, rotation: 0 }, 2 * o).to({
                x: 4.425,
                y: -8.4,
                rotation: -5.5 * r
            }, 2 * o).to({ x: 4.425, y: -8.325, rotation: -.3 * r }, 2 * o).to({
                x: 4.5,
                y: -8.025,
                rotation: 4.7 * r
            }, 2 * o).to({ x: 4.5, y: -8.25, rotation: 0 * r }, 2 * o).to({
                x: 4.425,
                y: -8.4,
                rotation: -5.5 * r
            }, 2 * o).to({ x: 4.425, y: -8.625, rotation: 1.5 * r }, 2 * o).to({
                x: 4.5,
                y: -8.25,
                rotation: 0
            }, 2 * o).to({ x: 4.425, y: -8.4, rotation: -5.5 * r }, 2 * o).to({
                x: 4.425,
                y: -8.325,
                rotation: -.3 * r
            }, 2 * o).to({ x: 4.5, y: -8.025, rotation: 4.7 * r }, 2 * o).to({
                x: 4.5,
                y: -8.25,
                rotation: 0 * r
            }, 2 * o).to({ x: 4.425, y: -8.4, rotation: -5.5 * r }, 2 * o).to({
                x: 4.425,
                y: -8.625,
                rotation: 1.5 * r
            }, 2 * o).to({ x: 4.5, y: -8.25, rotation: 0 }, 2 * o).to({
                x: 4.425,
                y: -8.4,
                rotation: -5.5 * r
            }, 2 * o).to({ x: 4.425, y: -8.325, rotation: -.3 * r }, 2 * o).to({
                x: 4.5,
                y: -8.025,
                rotation: 4.7 * r
            }, 2 * o).to({ x: 4.5, y: -8.25, rotation: 0 * r }, 2 * o).to({
                x: 4.425,
                y: -8.4,
                rotation: -5.5 * r
            }, 2 * o).to({ x: 4.425, y: -8.625, rotation: 1.5 * r }, 2 * o).to({
                x: 4.5,
                y: -8.25,
                rotation: 0
            }, 2 * o).to({ x: 4.425, y: -8.4, rotation: -5.5 * r }, 2 * o).to({
                x: 4.425,
                y: -8.325,
                rotation: -.3 * r
            }, 2 * o).to({ x: 4.5, y: -8.025, rotation: 4.7 * r }, 2 * o).to({
                x: 4.5,
                y: -8.25,
                rotation: 0 * r
            }, 2 * o).to({ x: 4.425, y: -8.4, rotation: -5.5 * r }, 2 * o).to({
                x: 4.425,
                y: -8.625,
                rotation: 1.5 * r
            }, 2 * o).to({ x: 4.5, y: -8.25, rotation: 0 }, 2 * o).to({
                x: 4.425,
                y: -8.4,
                rotation: -5.5 * r
            }, 2 * o).to({ x: 4.425, y: -8.325, rotation: -.3 * r }, 2 * o).to({
                x: 4.5,
                y: -8.025,
                rotation: 4.7 * r
            }, 2 * o).to({ x: 4.5, y: -8.25, rotation: 0 * r }, 2 * o).to({
                x: 4.425,
                y: -8.4,
                rotation: -5.5 * r
            }, 2 * o).to({ x: 4.425, y: -8.325, rotation: -.3 * r }, 2 * o).to({
                x: 4.5,
                y: -8.025,
                rotation: 4.7 * r
            }, 2 * o).to({ x: 4.425, y: -8.625, rotation: 1.5 * r }, 2 * o).addEventListener("change", function () {
                for (var t = 0; t < n.kiraAnimations.length; t++) {
                    var e = n.kiras[t];
                    e.x = n.RANGE.fx + (n.RANGE.tx - n.RANGE.fx) * Math.random(), e.y = n.RANGE.fy + (n.RANGE.ty - n.RANGE.fy) * Math.random()
                }
                var i = n.ANIMATION_BUILD_KEY.scale;
                n.burner_1_l.x = n.ANIMATION_BUILD_KEY.x, n.burner_1_l.y = n.ANIMATION_BUILD_KEY.y, n.burner_1_l.scale.set(i, i), n.burner_1_l.rotation = n.ANIMATION_BUILD_KEY.rotation
            })
        }, e.prototype.dispose = function () {
            createjs.Tween.removeTweens(this.ANIMATION_BUILD_KEY), createjs.Tween.removeTweens(this.ANIMATION_COMPLETE_KEY), createjs.Tween.removeTweens(this.ANIMATION_ENTER_KEY), this.effect.removeChildren(), this.kiraAnimations.forEach(function (t) {
                t.dispose(), t = null
            }), this.kiras.forEach(function (t) {
                null
            }), this.sprite = null, this.effect = null, this.burner_1_l = null, this.kiraAnimations = null, this.kiras = null, this.RANGE = null, this.syncAnimationKey = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    e.Burner = a
}