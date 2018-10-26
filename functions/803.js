const function803 = function (t, e, i) {
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
    var o = i(334), r = i(19), s = i(8), a = i(335), _ = i(40), u = i(80), l = i(6), c = i(3), h = i(336), p = i(1),
        d = function (t) {
            function e(e, i) {
                var n = t.call(this, e) || this;
                return n._mainView = i, n._bg_itemlost = new PIXI.Sprite(c.COMMON_ANIMATION.getTexture(0)), n._penguin = new a.FailedPenguin, n._obj_leaf = new PIXI.Sprite(c.COMMON_ANIMATION.getTexture(1)), n._obj_leaf.anchor.set(.5, .5), n._messageBox = new u.MessageBox(!1), n._gearBtnHome = new _.GearBtnHome, n._gearBtnHome.initialize(), n._gearBtnHome.x = 1140, n._gearBtnHome.y = 660, n.leafTween = o.LeafAnimationUtil.LeafAnimation(n._obj_leaf, new PIXI.Point(0, 60)), n.leafTween.setPaused(!0), n
            }

            return n(e, t), e.prototype._03_link = function () {
                this.addChild(this._bg_itemlost), this._penguin.light.alpha = 0, this._penguin.light_place.alpha = 0, this.addChild(this._penguin), this._obj_leaf.visible = !1, this.addChild(this._obj_leaf), this.addChild(this._background), this.addChild(this._ship), this._04_whiteInOut()
            }, e.prototype._04_whiteInOut = function () {
                var t = this;
                this._white.alpha = 0, this.addChild(this._white), createjs.Tween.get(this._white).to({ alpha: 1 }, 400).call(function () {
                    t.removeChild(t._background), t.removeChild(t._ship)
                }).to({ alpha: 0 }, 500).call(function () {
                    t.removeChild(t._white), t._05_showFailedPenguin()
                })
            }, e.prototype._05_showFailedPenguin = function () {
                var t, e = this, i = new r.TweenTask;
                t = createjs.Tween.get(this._penguin.light).to({ alpha: 1 }, 300), i.addTween(t), t = createjs.Tween.get(this._penguin.light_place).to({ alpha: 1 }, 300), i.addTween(t), i.start(function () {
                    e._obj_leaf.visible = !0, e.leafTween.setPaused(!1), e._06_typeMessage()
                })
            }, e.prototype._06_typeMessage = function () {
                var t = this;
                this._messageBox.y = 1200, this._messageBox.initialize("\u8fd1\u4ee3\u5316\u6539\u4fee\uff08\u5408\u6210\uff09\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002"), this.addChild(this._messageBox), createjs.Tween.get(this._messageBox).to({ y: 480 }, 500, createjs.Ease.quadOut).call(function () {
                    t._gearBtnHome.activate(), t.addChild(t._gearBtnHome), l.SE.play("247"), t._messageBox.activate(function () {
                        t._07_waitClick()
                    })
                })
            }, e.prototype._07_waitClick = function () {
                var t = this, e = new s.AreaBox(0);
                e.buttonMode = !0, this.addChild(e), e.once(p.EventType.CLICK, function () {
                    t.removeChild(e), t._08_whiteInOut()
                })
            }, e.prototype._08_whiteInOut = function () {
                var t = this;
                this.addChild(this._white), createjs.Tween.get(this._white).to({ alpha: 1 }, 500).call(function () {
                    t.removeChild(t._bg_itemlost), t.removeChild(t._obj_leaf), t.removeChild(t._penguin), t.removeChild(t._messageBox), t.removeChild(t._gearBtnHome), t._gearBtnHome.dispose(), t._mainView.visible = !0, createjs.Tween.get(t._white).to({ alpha: 0 }, 500).call(function () {
                        t.removeChild(t._white), null != t._cb_onComplete && t._cb_onComplete()
                    })
                })
            }, e.prototype.dispose = function () {
                this.removeChildren(), createjs.Tween.removeTweens(this.leafTween.target), this.leafTween = null, t.prototype.dispose.call(this), this._bg_itemlost = null, this._penguin.dispose(), this._penguin = null, this._obj_leaf = null, this._messageBox.dispose(), this._messageBox = null, this._gearBtnHome = null
            }, e
        }(h.PowerUpAnimation);
    e.PowerUpAnimationFailed = d
}