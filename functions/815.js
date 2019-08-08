const function815 = function (t, e, i) {
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
        r = i(19),
        s = i(8),
        a = i(40),
        _ = i(12),
        u = i(6),
        l = i(3),
        c = i(338),
        h = i(1),
        p = function (t) {
            function e(e, i) {
                var n = t.call(this, e) || this;
                return n._mainView = i, n._telopBG = new PIXI.Sprite, n._telopLineTop = new PIXI.Sprite, n._telopLineBottom = new PIXI.Sprite, n._telopText = new PIXI.Sprite, n._particles = new d, n
            }
            return n(e, t), e.prototype._03_link = function () {
                this._04_showTelop()
            }, e.prototype._04_showTelop = function () {
                var t = this;
                this._telopBG.texture = l.REMODEL_ANIMATION.getTexture(2), this._telopBG.alpha = .35, this._telopBG.anchor.set(.5), this._telopBG.position.set(o.default.width / 2, o.default.height / 2), this._telopBG.scale.y = 0, this.addChild(this._telopBG);
                var e = l.REMODEL_ANIMATION.getTexture(3);
                this._telopLineTop.texture = e, this._telopLineTop.anchor.set(.5), this._telopLineTop.position.set(o.default.width / 2, o.default.height / 2), this.addChild(this._telopLineTop), this._telopLineBottom.texture = e, this._telopLineBottom.anchor.set(.5), this._telopLineBottom.position.set(o.default.width / 2, o.default.height / 2), this.addChild(this._telopLineBottom);
                var i, n = new r.TweenTask;
                i = createjs.Tween.get(this._telopBG.scale).to({
                    y: 1
                }, 300), n.addTween(i), i = createjs.Tween.get(this._telopLineTop).to({
                    y: o.default.height / 2 - 155
                }, 300), n.addTween(i), i = createjs.Tween.get(this._telopLineBottom).to({
                    y: o.default.height / 2 + 155
                }, 300), n.addTween(i), n.start(function () {
                    t._telopText.texture = l.REMODEL_ANIMATION.getTexture(9), t._telopText.x = o.default.width, t._telopText.y = Math.round(o.default.height / 2 - t._telopText.height / 2), t.addChild(t._telopText), createjs.Tween.get(t._telopText).to({
                        x: 178
                    }, 400).call(function () {
                        u.SE.play("226"), t.addChild(t._particles), t._particles.play()
                    }).to({
                        x: 63
                    }, 1700).call(function () {
                        t._05_waitClick()
                    })
                })
            }, e.prototype._05_waitClick = function () {
                var t = this,
                    e = new a.GearBtnHome;
                e.initialize(), e.activate(), e.position.set(1140, 660), this.addChild(e);
                var i = new s.AreaBox(0);
                i.buttonMode = !0, this.addChild(i), i.once(h.EventType.CLICK, function () {
                    t.removeChild(i), t._06_whiteInOut(e)
                })
            }, e.prototype._06_whiteInOut = function (t) {
                var e = this;
                this._white.alpha = 0, this.addChild(this._white), createjs.Tween.get(this._white).to({
                    alpha: 1
                }, 500).call(function () {
                    e.removeChild(e._background), e.removeChild(e._ship), e.removeChild(e._telopBG), e.removeChild(e._telopLineTop), e.removeChild(e._telopLineBottom), e.removeChild(e._telopText), e.removeChild(e._particles), e.removeChild(t), t.dispose(), e._mainView.visible = !0
                }).to({
                    alpha: 0
                }, 500).call(function () {
                    e.removeChild(e._white), null != e._cb_onComplete && e._cb_onComplete()
                })
            }, e.prototype.dispose = function () {
                this.removeChildren(), t.prototype.dispose.call(this), this._telopBG = null, this._telopLineTop = null, this._telopLineBottom = null, this._telopText = null, this._particles.dispose(), this._particles = null
            }, e
        }(c.PowerUpAnimation);
    e.PowerUpAnimationSuccess = p;
    var d = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._particles = [];
            for (var i = [
                    [-459, -59],
                    [-392, -74],
                    [-332, 51],
                    [-237, -89],
                    [-158, 66],
                    [-96, -54],
                    [-8, 60],
                    [39, -65],
                    [141, -35],
                    [239, 63],
                    [308, -54],
                    [420, 45]
                ], n = l.REMODEL_ANIMATION.getTexture(8), o = 0; o < 12; o++) {
                var r = new _.Sprite(n);
                r.anchor.set(.5), r.scale.set(0), r.x = i[o][0] + 600, r.y = i[o][1] + 360, e.addChild(r), e._particles.push(r)
            }
            return e
        }
        return n(e, t), e.prototype.play = function () {
            this._removeTweens(), this._tweens = [];
            for (var t = 0; t < this._particles.length; t++) {
                var e = this._particles[t];
                e.scale.set(0);
                var i = createjs.Tween.get(e).wait(100 * t).to({
                    scaleX: 1.5,
                    scaleY: 1.5
                }, 100).to({
                    scaleX: 0,
                    scaleY: 0
                }, 100);
                this._tweens.push(i)
            }
        }, e.prototype.dispose = function () {
            this._removeTweens(), this.removeChildren(), this._particles = null
        }, e.prototype._removeTweens = function () {
            if (null != this._tweens) {
                for (var t = 0, e = this._tweens; t < e.length; t++) {
                    e[t].setPaused(!0)
                }
                this._tweens = null
            }
        }, e
    }(PIXI.Container)
}