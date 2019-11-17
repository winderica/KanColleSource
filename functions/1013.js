const function1013 = function (t, e, i) {
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
    var o = i(52),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._content = new PIXI.Sprite, e.addChild(e._content), e.visible = !1, e
            }
            return n(e, t), e.prototype.show = function (t) {
                void 0 === t && (t = 0), this._content.y = 0;
                var e = -1;
                0 == t ? (e = 31, this._content.y = 8) : 1 == t ? e = 26 : 2 == t ? e = 25 : 3 == t ? e = 24 : 4 == t && (e = 23), this._content.texture = e < 0 ? PIXI.Texture.EMPTY : o.SALLY_SORTIE.getTexture(e), this._content.x = -Math.floor(this._content.width / 2), this.visible = !0
            }, e.prototype.hide = function () {
                this.visible = !1
            }, e
        }(PIXI.Container);
    e.ClearBadge = r
}