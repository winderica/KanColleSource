const function915 = function (t, e, i) {
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
        r = i(0),
        s = i(23),
        a = i(226),
        _ = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._isWait = e, i._targetMulti = [], i
            }
            return n(e, t), e.prototype.preload = function (t, e, i, n) {
                var a = this;
                this._mst_id = t, this._message = e, (new s.SlotLoader).add(t, "card").load(function () {
                    a._target.texture = r.default.resources.getSlotitem(t, "card"), a._target.x = o.default.width / 2 - a._target.width / 2, a._target.y = 67, a._rarityBG.initiailzeForSlotitem(i, function () {
                        a._messageBox.initialize(a._message), null != n && n()
                    })
                })
            }, e.prototype.preMultiload = function (t, e, i, n) {
                var a = this,
                    _ = t.filter(function (t) {
                        return t > 0
                    });
                this._message = e;
                for (var l = new s.SlotLoader, u = 0; u < _.length - 1; u++) l.add(_[u], "card");
                l.load(function () {
                    for (var t = 0; t < _.length; t++) {
                        a._targetMulti.push(new PIXI.Sprite), a._targetMulti[t].texture = r.default.resources.getSlotitem(_[t], "card"), a._targetMulti[t].anchor.set(0, .5);
                        var e = void 0;
                        switch (_.length) {
                            case 1:
                            case 2:
                                e = 1;
                                break;
                            case 3:
                                e = .8;
                                break;
                            default:
                                e = 1
                        }
                        var s = a._targetMulti[t].width * e;
                        a._targetMulti[t].x = o.default.width / 2 - (s * _.length + 30 * (_.length - 1)) / 2 + t * (s + 30), a._targetMulti[t].y = 261, a._targetMulti[t].scale.set(e)
                    }
                    a._rarityBG.initiailzeForSlotitem(i, function () {
                        a._messageBox.initialize(a._message), null != n && n()
                    })
                })
            }, e.prototype.play = function (e, i) {
                var n = this;
                this._cb_onWhiteOut = e, this._cb_onComplete = i, this.addChild(this._clickGuard), this.addChild(this._rarityBG), this._targetMulti.length > 0 ? this._targetMulti.forEach(function (t) {
                    return n.addChild(t)
                }) : (this._gearBtnHome.visible = !1, this.addChild(this._target)), this.addChild(this._materialCircleRollAnimation), t.prototype._01_whiteOut.call(this)
            }, e.prototype._02_showMessageBox = function () {
                var e = this;
                this._messageBox.y = o.default.height, this.addChild(this._messageBox), createjs.Tween.get(this._messageBox).to({
                    y: 480
                }, 300, createjs.Ease.cubicOut).call(function () {
                    e._gearBtnHome.activate(), e.addChild(e._gearBtnHome), 1 == e._isWait ? (e._messageBox.text = e._message, e._messageBox.textCentering(), t.prototype._03_waitClick.call(e)) : e._messageBox.activate(function () {
                        return e._04_whiteInOut()
                    })
                })
            }, e.prototype._04_whiteInOut = function () {
                var t = this;
                this._white.alpha = 0, this.addChild(this._white), createjs.Tween.get(this._white).to({
                    alpha: 1
                }, 100).call(function () {
                    t.removeChild(t._rarityBG), t.removeChild(t._target), t.removeChild(t._materialCircleRollAnimation), t.removeChild(t._messageBox), t._messageBox.deactivate(), t.removeChild(t._gearBtnHome), t._gearBtnHome.deactivate(), null != t._cb_onWhiteOut && t._cb_onWhiteOut(), t._targetMulti.length > 0 && t._targetMulti.forEach(function (e) {
                        return t.removeChild(e)
                    })
                }).to({
                    alpha: 0
                }, 500).call(function () {
                    t.removeChild(t._white), null != t._cb_onComplete && t._cb_onComplete()
                })
            }, e.prototype.dispose = function () {
                t.prototype.dispose.call(this), this._targetMulti = null
            }, e
        }(a.RewardAnimation);
    e.RewardAnimationMultiSlot = _
}