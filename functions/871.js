const function871 = function (t, e, i) {
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
    var o = i(0),
        r = i(49),
        s = i(8),
        a = i(872),
        _ = function (t) {
            function e() {
                var e = t.call(this, .9) || this;
                return e.alpha = 0, e
            }
            return n(e, t), e.prototype.show = function (t, e, i) {
                this.removeChildren(), this.highSpeedConfirmView = new a.HighSpeedConfirmView(i), this.highSpeedConfirmView.update(t, e), this.highSpeedConfirmView.position.set(91, 70), this.addChild(this.highSpeedConfirmView), o.default.view.clickGuard = !0, createjs.Tween.get(this).to({
                    alpha: 1
                }, r.UISettings.DIALOG_FADETIME).call(function () {
                    o.default.view.clickGuard = !1
                })
            }, e.prototype.hide = function (t) {
                createjs.Tween.get(this).to({
                    alpha: 0
                }, r.UISettings.DIALOG_FADETIME).call(function () {
                    t()
                })
            }, e.prototype.dispose = function () {
                createjs.Tween.removeTweens(this), this.removeChildren(), this.highSpeedConfirmView.dispose(), this.highSpeedConfirmView = null
            }, e
        }(s.AreaBox);
    e.HighSpeedConfirmContainer = _
}