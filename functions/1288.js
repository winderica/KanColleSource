const function1288 = function (t, e, i) {
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
        r = i(20),
        s = i(1289),
        a = function (t) {
            function e(e, i, n, o, r) {
                var s = t.call(this) || this;
                return s._layer = e, s._ship_pos = i, s._drum_num = n, s._daihatsu_num = o, s._direction = r, s
            }
            return n(e, t), e.prototype._start = function () {
                this._balloon1 = this._createBalloon(this._direction, 1), this._balloon1.initialize(), this._drum_num > 0 && (this._balloon2 = this._createBalloon(this._direction, 2), this._balloon2.initialize(), this._balloon2.update(this._drum_num)), this._daihatsu_num > 0 && (this._balloon3 = this._createBalloon(this._direction, 3), this._balloon3.initialize(), this._balloon3.update(this._daihatsu_num)), this._showBalloons()
            }, e.prototype._createBalloon = function (t, e) {
                return 0 == t ? new s.LandingBalloonType1(e) : 1 == t ? new s.LandingBalloonType2(e) : 2 == t ? new s.LandingBalloonType3(e) : null
            }, e.prototype._showBalloons = function () {
                var t = this,
                    e = new r.TweenTask;
                0 == this._direction ? (e.addTween(this._createShowTween(this._balloon1, 48, -18)), null != this._balloon2 && e.addTween(this._createShowTween(this._balloon2, 0, -42)), null != this._balloon3 && e.addTween(this._createShowTween(this._balloon3, -51, -18))) : 1 == this._direction ? (e.addTween(this._createShowTween(this._balloon1, 50, -9)), null != this._balloon2 && e.addTween(this._createShowTween(this._balloon2, 44, 8)), null != this._balloon3 && e.addTween(this._createShowTween(this._balloon3, -15, 8))) : 2 == this._direction && (e.addTween(this._createShowTween(this._balloon1, -14, -21)), null != this._balloon2 && e.addTween(this._createShowTween(this._balloon2, -33, -17)), null != this._balloon3 && e.addTween(this._createShowTween(this._balloon3, -24, 8))), e.start(function () {
                    t._wait()
                })
            }, e.prototype._wait = function () {
                var t = this;
                createjs.Tween.get(null).wait(250).call(function () {
                    t._scaling()
                })
            }, e.prototype._scaling = function () {
                var t = this,
                    e = new r.TweenTask;
                e.addTween(this._createScalingTween(this._balloon1)), null != this._balloon2 && e.addTween(this._createScalingTween(this._balloon2)), null != this._balloon3 && e.addTween(this._createScalingTween(this._balloon3)), e.start(function () {
                    t._wait2()
                })
            }, e.prototype._wait2 = function () {
                var t = this;
                createjs.Tween.get(null).wait(2e3).call(function () {
                    t._hideBalloons()
                })
            }, e.prototype._hideBalloons = function () {
                var t = this,
                    e = new r.TweenTask;
                e.addTween(this._createHideTween(this._balloon1)), null != this._balloon2 && e.addTween(this._createHideTween(this._balloon2)), null != this._balloon3 && e.addTween(this._createHideTween(this._balloon3)), e.start(function () {
                    t._endTask()
                })
            }, e.prototype._createShowTween = function (t, e, i) {
                var n = this;
                return t.x = this._ship_pos.x + e, t.y = this._ship_pos.y + i + 23, t.alpha = 0, createjs.Tween.get(t).call(function () {
                    n._layer.addChild(t)
                }).to({
                    y: this._ship_pos.y + i,
                    alpha: 1
                }, 100, createjs.Ease.sineOut)
            }, e.prototype._createScalingTween = function (t) {
                var e = t.y;
                return createjs.Tween.get(t).to({
                    y: e - 5,
                    scaleX: 1.2,
                    scaleY: 1.2
                }, 150, createjs.Ease.sineOut).to({
                    y: e,
                    scaleX: 1,
                    scaleY: 1
                }, 300, createjs.Ease.sineOut)
            }, e.prototype._createHideTween = function (t) {
                var e = this;
                return createjs.Tween.get(t).to({
                    y: t.y + 23,
                    alpha: 0
                }, 100, createjs.Ease.sineOut).call(function () {
                    e._layer.removeChild(t)
                })
            }, e.prototype._endTask = function () {
                this._layer = null, this._ship_pos = null, this._balloon1 = null, this._balloon2 = null, this._balloon3 = null, t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase);
    e.TaskLandingBalloon = a
}