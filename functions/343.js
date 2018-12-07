const function343 = function (t, e, i) {
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
    var o = i(5), r = i(8), s = i(40), a = i(59), _ = i(80), l = i(890), u = i(1), c = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._message = "", e._clickGuard = new r.AreaBox(0), e._rarityBG = new a.RarityBG, e._target = new PIXI.Sprite, e._materialCircleRollAnimation = new l.MaterialCircleRollAnimation, e._materialCircleRollAnimation.x = o.default.width / 2, e._materialCircleRollAnimation.y = o.default.height / 2, e._messageBox = new _.MessageBox, e._gearBtnHome = new s.GearBtnHome, e._gearBtnHome.position.set(1140, 660), e._gearBtnHome.initialize(), e._white = new r.AreaBox(1, 16777215), e
        }

        return n(e, t), e.prototype.play = function (t, e) {
            this._cb_onWhiteOut = t, this._cb_onComplete = e, this.addChild(this._clickGuard), this.addChild(this._rarityBG), this.addChild(this._target), this.addChild(this._materialCircleRollAnimation), this._01_whiteOut()
        }, e.prototype._01_whiteOut = function () {
            var t = this;
            this._materialCircleRollAnimation.play(), this.addChild(this._white), createjs.Tween.get(this._white).to({ alpha: 0 }, 500).call(function () {
                t.removeChild(t._white), t._02_showMessageBox()
            })
        }, e.prototype._02_showMessageBox = function () {
            var t = this;
            this._messageBox.y = o.default.height, this.addChild(this._messageBox), createjs.Tween.get(this._messageBox).to({ y: 480 }, 300, createjs.Ease.cubicOut).call(function () {
                t._gearBtnHome.activate(), t.addChild(t._gearBtnHome), t._messageBox.activate(), t._03_waitClick()
            })
        }, e.prototype._03_waitClick = function () {
            var t = this, e = new r.AreaBox(0);
            e.buttonMode = !0, this.addChild(e), e.once(u.EventType.CLICK, function () {
                t._04_whiteInOut()
            })
        }, e.prototype._04_whiteInOut = function () {
            var t = this;
            this._white.alpha = 0, this.addChild(this._white), createjs.Tween.get(this._white).to({ alpha: 1 }, 100).call(function () {
                t.removeChild(t._rarityBG), t.removeChild(t._target), t.removeChild(t._materialCircleRollAnimation), t.removeChild(t._messageBox), t._messageBox.deactivate(), t.removeChild(t._gearBtnHome), t._gearBtnHome.deactivate(), null != t._cb_onWhiteOut && t._cb_onWhiteOut()
            }).to({ alpha: 0 }, 500).call(function () {
                t.removeChild(t._white), null != t._cb_onComplete && t._cb_onComplete()
            })
        }, e.prototype.dispose = function () {
            this._cb_onWhiteOut = null, this._cb_onComplete = null, this.removeChildren(), this._clickGuard = null, this._rarityBG.dispose(), this._rarityBG = null, this._target = null, this._materialCircleRollAnimation.dispose(), this._materialCircleRollAnimation = null, this._messageBox.dispose(), this._messageBox = null, this._gearBtnHome.dispose(), this._gearBtnHome = null, this._white = null
        }, e
    }(PIXI.Container);
    e.RewardAnimation = c
}