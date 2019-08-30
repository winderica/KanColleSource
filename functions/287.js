const function287 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function () {
        function t(t, e, i) {
            this.UpdateInterval = 1e3 / 30;
            var n = -(.3 * Math.random() + .1);
            this.kira = t, this.light_ss_yellow_01 = e, this.light_ss_yellow_02 = i, this.animationSpeed = n
        }
        return t.prototype.play = function (t) {
            this._stop(), this._playAlphaTween(), this._playTextureSwitchTween(t)
        }, t.prototype.stop = function () {
            this._stop()
        }, t.prototype.dispose = function () {
            this._stop(), this.kira = null, this.light_ss_yellow_01 = null, this.light_ss_yellow_02 = null, this.animationSpeed = null
        }, t.prototype._playTextureSwitchTween = function (t) {
            var e = this,
                i = createjs.Tween.get(this);
            switch (i.loop = !0, t) {
                case 0:
                    i.call(function () {
                        e.kira.texture = e.light_ss_yellow_01
                    }).wait(3 * this.UpdateInterval).call(function () {
                        e.kira.texture = e.light_ss_yellow_02
                    }).wait(2 * this.UpdateInterval);
                    break;
                case 1:
                    i.call(function () {
                        e.kira.texture = e.light_ss_yellow_01
                    }).wait(3 * this.UpdateInterval).call(function () {
                        e.kira.texture = e.light_ss_yellow_02
                    }).wait(4 * this.UpdateInterval);
                    break;
                case 2:
                    i.call(function () {
                        e.kira.texture = e.light_ss_yellow_01
                    }).wait(3 * this.UpdateInterval).call(function () {
                        e.kira.texture = e.light_ss_yellow_02
                    }).wait(40)
            }
        }, t.prototype._playAlphaTween = function () {
            var t = this,
                e = createjs.Tween.get(this);
            e.loop = !0, e.wait(40).call(function () {
                t.kira.alpha += t.animationSpeed, 1 < t.kira.alpha ? t.animationSpeed = -(.3 * Math.random() + .1) : t.kira.alpha < .3 && (t.animationSpeed = .3 * Math.random() + .1)
            })
        }, t.prototype._stop = function () {
            createjs.Tween.removeTweens(this), this.kira.alpha = 0
        }, t
    }();
    e.KiraAnimation = n
}