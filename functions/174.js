const function174 = function (t, e, i) {
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
    var o = i(9),
        r = i(4),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.visible = !1, e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._icon = new PIXI.Sprite(o.COMMON_MISC.getTexture(111)), this._text = new r.TextBox(21, 4999235), this._text.position.set(35, 15), this.addChild(this._icon), this.addChild(this._text)
            }, e.prototype.update = function (t, e) {
                void 0 === e && (e = 4999235), t > 0 ? (this._text.style.fill = e, this._text.text = t.toString(), this.visible = !0) : this.visible = !1
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._text && this._text.destroy()
            }, e
        }(PIXI.Container);
    e.MedalIcon = s
}