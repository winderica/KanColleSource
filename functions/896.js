const function896 = function (t, e, i) {
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
    var o = i(5), r = i(336), s = i(19), a = i(8), _ = i(337), u = i(40), l = i(80), c = i(3), h = i(3), p = i(3),
        d = i(897), f = i(1), y = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._clickGuard = new a.AreaBox(0), e._bg_itemlost = new PIXI.Sprite(h.COMMON_ANIMATION.getTexture(0)), e._penguin = new _.FailedPenguin, e._leafDashes = new d.LeafDashes, e._obj_leaf = new PIXI.Sprite(h.COMMON_ANIMATION.getTexture(1)), e._obj_leaf.anchor.set(.5, .5), e._messageBox = new l.MessageBox(!1), e._gearBtnHome = new u.GearBtnHome, e._gearBtnHome.initialize(), e._gearBtnHome.x = 1140, e._gearBtnHome.y = 660, e._white = new a.AreaBox(1, 16777215), e._leafTween = r.LeafAnimationUtil.LeafWithDashAnimation(e._obj_leaf, e._leafDashes.dashes, new PIXI.Point(0, 60)), e._leafTween.setPaused(!0), e
            }

            return n(e, t), e.prototype.play = function (t) {
                this._cb_onComplete = t, this.addChild(this._clickGuard), this.addChild(this._bg_itemlost), this._penguin.light.alpha = 0, this._penguin.light_place.alpha = 0, this.addChild(this._penguin);
                for (var e = 0; e < this._leafDashes.dashes.length; e++) {
                    this._leafDashes.dashes[e].alpha = 0
                }
                this.addChild(this._leafDashes), this._obj_leaf.visible = !1, this.addChild(this._obj_leaf), this.addChild(this._white), this._01_whiteOut()
            }, e.prototype._01_whiteOut = function () {
                var t = this;
                createjs.Tween.get(this._white).to({ alpha: 0 }, 1e3).call(function () {
                    t.removeChild(t._white), t._02_showFailedPenguin()
                })
            }, e.prototype._02_showFailedPenguin = function () {
                var t, e = this, i = new s.TweenTask;
                t = createjs.Tween.get(this._penguin.light).to({ alpha: 1 }, 300), i.addTween(t), t = createjs.Tween.get(this._penguin.light_place).to({ alpha: 1 }, 300), i.addTween(t), i.start(function () {
                    e._obj_leaf.visible = !0, e._leafTween.setPosition(0, 1), e._leafTween.setPaused(!1), e._03_typeMessage()
                })
            }, e.prototype._03_typeMessage = function () {
                var t = this;
                this._messageBox.initialize("\u88c5\u5099\u306e\u958b\u767a\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u2026\u2026\u3002\n\n\u3000"), this._messageBox.y = o.default.height, this.addChild(this._messageBox), createjs.Tween.get(this._messageBox).to({ y: 480 }, 500, createjs.Ease.cubicOut).call(function () {
                    t._gearBtnHome.activate(), t.addChild(t._gearBtnHome), c.SE.play("247"), t._messageBox.activate(function () {
                        var e = new PIXI.Sprite(p.ARSENAL_MAIN.getTexture(74));
                        e.position.set(249, 640), t.addChild(e), t._messageBox.append("\u300e\u958b\u767a\u8cc7\u6750\u300f\u306f\u6d88\u8017\u3057\u307e\u305b\u3093\u3067\u3057\u305f\u3002"), t._messageBox.activate()
                    }), t._04_waitClick()
                })
            }, e.prototype._04_waitClick = function () {
                var t = this, e = new a.AreaBox(0);
                e.buttonMode = !0, this.addChild(e), e.once(f.EventType.CLICK, function () {
                    t.removeChild(e), t._05_whiteInOut()
                })
            }, e.prototype._05_whiteInOut = function () {
                var t = this;
                this._white.alpha = 0, this.addChild(this._white), createjs.Tween.get(this._white).to({ alpha: 1 }, 250).call(function () {
                    t.removeChild(t._bg_itemlost), t.removeChild(t._penguin), t.removeChild(t._leafDashes), t.removeChild(t._obj_leaf), t._messageBox.deactivate(), t.removeChild(t._messageBox), t._gearBtnHome.deactivate(), t.removeChild(t._gearBtnHome)
                }).to({ alpha: 0 }, 250).call(function () {
                    t.removeChild(t._white), null != t._cb_onComplete && t._cb_onComplete()
                })
            }, e.prototype.dispose = function () {
                this._cb_onComplete = null, this.removeChildren(), createjs.Tween.removeTweens(this._leafTween.target), this._leafTween = null, this._clickGuard = null, this._bg_itemlost = null, this._penguin.dispose(), this._penguin = null, this._leafDashes.dispose(), this._leafDashes = null, this._obj_leaf = null, this._messageBox.dispose(), this._messageBox = null, this._gearBtnHome.dispose(), this._gearBtnHome = null, this._white = null
            }, e
        }(PIXI.Container);
    e.RewardAnimationSlotFailed = y
}