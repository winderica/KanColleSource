const function550 = function (t, e, i) {
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
    var o = i(551),
        r = i(552),
        s = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), e.prototype.initialize = function () {
                this._view1 = new o.TitleView1, this._view1.initialize(), this.addChild(this._view1)
            }, e.prototype.dispose = function () {
                this._view2.dispose()
            }, e.prototype.setProgress = function (t) {
                this._view1.setProgress(t)
            }, e.prototype.showSecondPageTween = function (t) {
                var e = this;
                this._view2 = new r.TitleView2, this._view2.initialize(), this.addChildAt(this._view2, 0), this._view1.hideTween(function () {
                    e.removeChild(e._view1), e._view1.dispose(), e._view1 = null, e._view2.showTween(function () {
                        t()
                    })
                })
            }, e.prototype.waitClickTween = function (t) {
                this._view2.waitClickTween(t)
            }, e
        }(PIXI.Container);
    e.TitleViewMain = s
}