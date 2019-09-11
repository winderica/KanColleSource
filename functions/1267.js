const function1267 = function (t, e, i) {
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
    var o = i(2),
        r = i(12),
        s = i(6),
        a = i(19),
        _ = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._layer = e, i
            }
            return n(e, t), e.prototype._start = function () {
                this._img1 = new r.Sprite(a.MAP_COMMON.getTexture(144)), this._img1.anchor.set(.5), this._img1.scale.set(.6), this._img1.y = -4, this._img1.alpha = 0, this._layer.addChild(this._img1), this._img2 = new r.Sprite(a.MAP_COMMON.getTexture(145)), this._img2.anchor.set(.5), this._img2.scale.set(.6), this._img2.y = -4, this._img2.alpha = 0, this._layer.addChild(this._img2), this._img3 = new r.Sprite(a.MAP_COMMON.getTexture(146)), this._img3.anchor.set(.5), this._img3.scale.set(.6), this._img3.y = -4, this._img3.alpha = 0, this._layer.addChild(this._img3), this._anim()
            }, e.prototype._anim = function () {
                var t = this;
                s.SE.play("213"), createjs.Tween.get(this._img1).to({
                    sceleX: 1,
                    scaleY: 1,
                    alpha: 1
                }, 200).to({
                    sceleX: 1.2,
                    scaleY: 1.2,
                    alpha: 0
                }, 300), createjs.Tween.get(this._img2).wait(133).to({
                    sceleX: 1,
                    scaleY: 1,
                    alpha: 1
                }, 200).to({
                    sceleX: 1.2,
                    scaleY: 1.2,
                    alpha: 0
                }, 300), createjs.Tween.get(this._img3).wait(266).to({
                    sceleX: 1,
                    scaleY: 1,
                    alpha: 1
                }, 200).to({
                    sceleX: 1.3,
                    scaleY: 1.3,
                    alpha: 0
                }, 300).wait(300).call(function () {
                    t._layer.removeChild(t._img1), t._layer.removeChild(t._img2), t._layer.removeChild(t._img3), t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._layer = null, t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase);
    e.TaskReplenishmentBuff = _
}