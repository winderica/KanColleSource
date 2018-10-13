/*
 * called by `537.js`
 * fade box
 */
const function16 = function (t, e, i) {
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
    var o = i(5),
        r = i(8),
        s = function (t) {
            /*
            * e: number; // alpha
            * i?: number; // color
            * n?: number; // width
            * r?: number; // height
            */
            function e(e, i, n, r) {
                void 0 === i && (i = 0),
                void 0 === n && (n = o.default.width),
                void 0 === r && (r = o.default.height);
                var s = t.call(this, e, i, n, r) || this;
                s._base_alpha = e;
                return s
            }

            n(e, t);
            // is playing animation
            e.prototype.isNowAnimation = function () {
                return null != this._tween_show || null != this._tween_hide
            };
            /*
             * show animation
             * t?: number; // duration
             * e?: () => any; // callback
             */
            e.prototype.show = function (t, e) {
                var i = this;
                void 0 === t && (t = 0),
                void 0 === e && (e = null),
                this._stopShowTween(),
                this._stopHideTween();
                if (t <= 0) {
                    this.alpha = 1, null != e && e()
                } else {
                    this._tween_show = createjs.Tween.get(this).to({ alpha: 1 }, t).call(function () {
                        i._tween_show = null, null != e && e()
                    })
                }
            };
            /*
             * hide animation
             * t?: number; // duration
             * e?: () => any; // callback
             */
            e.prototype.hide = function (t, e) {
                var i = this;
                void 0 === t && (t = 0),
                void 0 === e && (e = null),
                this._stopShowTween(),
                this._stopHideTween();
                if (t <= 0) {
                    this.alpha = 0, null != e && e()
                } else {
                    this._tween_hide = createjs.Tween.get(this).to({ alpha: 0 }, t).call(function () {
                        i._tween_hide = null, null != e && e()
                    })
                }
            };
            // stop showing
            e.prototype._stopShowTween = function () {
                null != this._tween_show && (this._tween_show.setPaused(!0), this._tween_show = null)
            };
            // stop hiding
            e.prototype._stopHideTween = function () {
                null != this._tween_hide && (this._tween_hide.setPaused(!0), this._tween_hide = null)
            };
            return e
        }(r.AreaBox);
    e.FadeBox = s
}