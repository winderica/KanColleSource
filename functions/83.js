const function83 = function (t, e, i) {
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
    var o = i(21),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._MAX_NUM = 5;
                for (var i = new Array(e._MAX_NUM), n = 0; n < e._MAX_NUM; n++) {
                    var r = new PIXI.Sprite(o.COMMON_MAIN.getTexture(52));
                    r.x = Math.floor(18 * n), r.visible = !1, i[n] = r, e.addChild(r)
                }
                return e.stars = i, e
            }
            return n(e, t), e.prototype.update = function (t) {
                for (var e = 0; e < this._MAX_NUM; e++) {
                    var i = this.stars[e],
                        n = e < t;
                    i.visible = !1, n && (i.visible = !0)
                }
            }, e.prototype.dispose = function () {
                for (var t = 0; t < this.stars.length; t++) this.removeChild(this.stars[t]), this.stars[t].texture = PIXI.Texture.EMPTY, this.stars[t] = null;
                this.stars = null, this._MAX_NUM = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.StarRateView = r
}