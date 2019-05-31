const function585 = function (t, e, i) {
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
    var o = i(586),
        r = i(278),
        s = i(588),
        a = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this.changeSkin(t)
            }, e.prototype.changeSkin = function (t) {
                if (null != this._content) {
                    if (this._skinID == t) return;
                    this._content.dispose(), this.removeChild(this._content), this._content = null
                }
                this._skinID = t, 101 == t || 102 == t ? this._content = new o.CircleContentSkin1 : 201 == t && (this._content = new r.CircleContentSkin2), 301 == t && (this._content = new s.CircleContentSkin3), 311 == t && (this._content = new s.CircleContentSkin3k), this._content.initialize(), this.addChild(this._content)
            }, e.prototype.dispose = function () {
                null != this._content && (this._content.dispose(), this.removeChild(this._content), this._content = null)
            }, e.prototype.startMoveAnimation = function (t) {
                null != this._content && this._content.startMoveAnimation(t)
            }, e
        }(PIXI.Container);
    e.Circle = a
}