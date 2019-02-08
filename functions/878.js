const function878 = function (t, e, i) {
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
        r = i(8),
        s = i(879),
        a = function (t) {
            function e() {
                var e = t.call(this, .8) || this;
                return e.alpha = 0, e
            }
            return n(e, t), e.prototype.show = function (t) {
                this.removeChildren(), this.largeBuildConfirm = new s.LargeBuildConfirm(t), this.addChild(this.largeBuildConfirm), o.default.view.clickGuard = !0, createjs.Tween.get(this).to({
                    alpha: 1
                }, 250).call(function () {
                    o.default.view.clickGuard = !1
                })
            }, e.prototype.hide = function (t) {
                createjs.Tween.get(this).to({
                    alpha: 0
                }, 250).call(function () {
                    t()
                })
            }, e.prototype.dispose = function () {
                createjs.Tween.removeTweens(this), this.removeChildren(), this.largeBuildConfirm.dispose(), this.largeBuildConfirm = null
            }, e
        }(r.AreaBox);
    e.LargeBuildConfirmContainer = a
}