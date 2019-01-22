const function1429 = function (t, e, i) {
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
        r = i(24),
        s = i(4),
        a = i(6),
        _ = i(1430),
        l = i(1431),
        u = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                return o._entered = !1, o._in_front = !1, o._index = e, o._friend = i, o._combined = n, o.alpha = 0, o._container = new PIXI.Container, o.addChild(o._container), o._content = new l.BannerContent, o._container.addChild(o._content), 1 == n && o._content.scale.set(.9), o.y = o._baseY, o._text = new s.TextBox(19, 16777215), o._text.y = 19, o._container.addChild(o._text), o._babble = new _.BannerBabble, o._babble.y = r.BannerSize.H / 3, 1 == i ? o._babble.x = r.BannerSize.W : o._babble.scale.x = -1, o._container.addChild(o._babble), o
            }
            return n(e, t), Object.defineProperty(e.prototype, "friend", {
                get: function () {
                    return this._friend
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "entered", {
                get: function () {
                    return this._entered
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "_baseY", {
                get: function () {
                    return this._index * (r.BannerSize.H + 7) + (this._combined ? 3 : 0)
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t, e, i, n, o) {
                this._hp_max = i, this._content.initialize(t, e, i, this._index, this._friend, this._combined, n, o), this._updateHpText(e, i)
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._text.destroy(), this._babble.dispose()
            }, e.prototype.getGlobalPos = function (t) {
                void 0 === t && (t = !0);
                var e = new PIXI.Point;
                return 1 == t && (e.x = r.BannerSize.W / 2, e.y = r.BannerSize.H / 2), this.toGlobal(e)
            }, e.prototype.updateHp = function (t) {
                this._content.updateHp(t, this._hp_max), this._updateHpText(t, this._hp_max)
            }, e.prototype.showBabble = function () {
                this._babble.show()
            }, e.prototype.enter = function () {
                return 0 == this.visible ? null : this.alpha > 0 ? null : (this._entered = !0, this.x = 0, this.alpha = 1, void(this._content.frame.alpha = 1))
            }, e.prototype.enterCombined = function () {
                return 0 == this.visible ? null : this.alpha > 0 ? null : (this._entered = !0, this.alpha = 1, void(this._content.frame.alpha = 1))
            }, e.prototype.createEnterTween = function (t) {
                var e = this;
                if (0 == this.visible) return null;
                if (this.alpha > 0) return null;
                this._entered = !0, this.x = r.BannerSize.W * (this._friend ? -1 : 1);
                var i = {
                        x: this.x,
                        frame_alpha: this._content.frame.alpha
                    },
                    n = function (t) {
                        e.x = t.target.target.x, e._content.frame.alpha = t.target.target.frame_alpha
                    };
                return createjs.Tween.get(i, {
                    onChange: n
                }).wait(t).call(function () {
                    e.alpha = 1, 1 == e._friend && a.SE.play("105")
                }).to({
                    x: 0
                }, 300).to({
                    frame_alpha: 1
                }, 500)
            }, e.prototype.createEnterTweenCombined = function (t) {
                var e = this;
                if (0 == this.visible) return null;
                if (this.alpha > 0) return null;
                this._entered = !0, this.y = o.default.height;
                var i = {
                        y: this.y,
                        frame_alpha: this._content.frame.alpha
                    },
                    n = function (t) {
                        e.y = t.target.target.y, e._content.frame.alpha = t.target.target.frame_alpha
                    };
                return createjs.Tween.get(i, {
                    onChange: n
                }).wait(t).call(function () {
                    e.alpha = 1, 1 == e._friend && a.SE.play("105")
                }).to({
                    y: this._baseY
                }, 1300, createjs.Ease.cubicOut).to({
                    frame_alpha: 1
                }, 500)
            }, e.prototype.createEnterTweenBySakuteki = function () {
                var t = this;
                if (0 == this.visible) return null;
                if (this.alpha > 0) return null;
                this._entered = !0, this._content.frame.alpha = 1, this._content.layer_color.show();
                var e = {
                        alpha: this.alpha,
                        red_overlay_alpha: this._content.layer_color.alpha
                    },
                    i = function (e) {
                        t.alpha = e.target.target.alpha, t._content.layer_color.alpha = e.target.target.red_overlay_alpha
                    };
                return createjs.Tween.get(e, {
                    onChange: i
                }).call(function () {
                    t._content.waveOver(0), t._content.waveOver(600)
                }).to({
                    alpha: 1
                }, 1300).call(function () {
                    t._content.waveOver(0)
                }).to({
                    red_overlay_alpha: 0
                }, 600)
            }, e.prototype.createMainDeckExitTween = function (t) {
                if (0 == this.visible) return null;
                if (0 == this._entered) return null;
                this._entered = !1;
                var e = 0;
                return e = 1 == this._friend ? -r.BannerSize.W : r.BannerSize.W, createjs.Tween.get(this).wait(t).to({
                    x: e
                }, 300).to({
                    alpha: 0
                }, 50)
            }, e.prototype.createSubDeckExitTween = function (t, e) {
                if (0 == this.visible) return null;
                if (0 == this._entered) return null;
                var i = 0;
                return i = 0 == e ? this.y - o.default.height : this.y + o.default.height, this._entered = !1, createjs.Tween.get(this).wait(t).to({
                    y: i
                }, 1300, createjs.Ease.cubicIn).to({
                    alpha: 0
                }, 50)
            }, e.prototype.createSubDeckMoveTween = function (t) {
                if (0 == this.visible) return null;
                if (0 == this._entered) return null;
                this._combined = !1, this._content.layer_color.combined = !1;
                var e = [createjs.Tween.get(this._content.scale).wait(t).to({
                    x: 1,
                    y: 1
                }, 300), createjs.Tween.get(this._content.img).wait(t).to({
                    x: 0
                }, 300, createjs.Ease.cubicInOut), this._content.frame.getAnimationTween(t)].concat(this._content.img.getAnimationTweens(t), [createjs.Tween.get(this._content.flagship_mark).wait(t).to({
                    x: 210,
                    alpha: 1
                }, 300), createjs.Tween.get(this).wait(t).to({
                    x: 0,
                    y: this.y - 3
                }, 300)]);
                return 1 == this._friend && e.push(createjs.Tween.get(this._text).wait(t).to({
                    x: 262
                }, 300)), e
            }, e.prototype.moveDefault = function (t) {
                var e = this;
                void 0 === t && (t = 0), 0 != this.visible && (null != this._move_tween && (this._move_tween.setPaused(!0), this._move_tween = null), this._in_front = !1, this._move_tween = createjs.Tween.get(this), this._move_tween.to({
                    x: 0
                }, 150), this._move_tween.call(function () {
                    e._move_tween = null, e.emit("complete_moveDefault")
                }))
            }, e.prototype.moveFront = function (t) {
                var e = this;
                if (void 0 === t && (t = null), 0 == this.visible) return void(null != t && t());
                this._stopMoveTween(), this._in_front = !0, this._move_tween = createjs.Tween.get(this), 1 == this._friend ? this._move_tween.to({
                    x: 38
                }, 150) : this._move_tween.to({
                    x: -38
                }, 150), this._move_tween.call(function () {
                    e._move_tween = null, null != t && t()
                })
            }, e.prototype.attack = function (t) {
                var e = this;
                void 0 === t && (t = null), null == this._attack_tween && (this._skipMoveFrontTween(), 0 == this._in_front ? this.moveFront(function () {
                    e._attack(t)
                }) : this._attack(t))
            }, e.prototype._attack = function (t) {
                var e = this;
                this._attack_tween = createjs.Tween.get(this).wait(200), 1 == this._friend ? this._attack_tween.to({
                    x: 18
                }, 0) : this._attack_tween.to({
                    x: -18
                }, 0), this._attack_tween.to({
                    x: 0
                }, 150), this._attack_tween.call(function () {
                    e._attack_tween = null, null != t && t()
                })
            }, e.prototype.moveAtDamage = function (t) {
                this._stopMoveTween(), this.x = 0, this._container.x = 0, 1 == t ? this._moveAtShield() : this._moveAtDamage()
            }, e.prototype._moveAtDamage = function () {
                for (var t = [-42, -24, -6, -27, -9, -12, 6, -6, 6, -6, 6, -6, 3, -3, 3, -3, 3, -3, 3, -3, 3, 0], e = this._friend ? 1 : -1, i = createjs.Tween.get(this._container), n = 0; n < t.length; n++) i.to({
                    x: e * t[n]
                }, 30);
                this._content.layer_color.playDamageAnimation()
            }, e.prototype._moveAtShield = function () {
                var t = this._friend ? 1 : -1;
                createjs.Tween.get(this._container).to({
                    x: 46 * t
                }, 233).to({
                    x: 32 * t
                }, 100).to({
                    x: 41 * t
                }, 100).to({
                    x: 38 * t
                }, 166).wait(300).to({
                    x: 0
                }, 100);
                this._content.layer_color.playShieldAnimation()
            }, e.prototype.moveShoot = function (t) {
                void 0 === t && (t = null);
                for (var e = [3, -3, 3, -3, 3, -3, 3, -3], i = this._friend ? 1 : -1, n = createjs.Tween.get(this._container), o = 0; o < e.length; o++) n.to({
                    x: i * e[o]
                }, 45);
                n.to({
                    x: 0
                }, 60), n.to({
                    x: -3 * i
                }, 60), n.to({
                    x: -27 * i
                }, 45), n.to({
                    x: -15 * i
                }, 120), n.to({
                    x: -3 * i
                }, 45), n.to({
                    x: 0
                }, 45), null != t && n.call(t)
            }, e.prototype._skipMoveFrontTween = function () {
                this._stopMoveTween(), 1 == this._friend ? this.x = 38 : this.x = -38
            }, e.prototype._stopMoveTween = function () {
                null != this._move_tween && (this._move_tween.setPaused(!0), this._move_tween = null)
            }, e.prototype._updateHpText = function (t, e) {
                this._text.text = t + "/" + e, this._friend ? this._combined ? this._text.x = 240 : this._text.x = 262 : this._text.x = -23 - this._text.width
            }, e
        }(PIXI.Container);
    e.Banner = u
}