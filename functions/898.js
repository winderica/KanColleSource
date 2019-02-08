const function898 = function (t, e, i) {
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
    var o = i(3),
        r = function (t) {
            function e() {
                for (var e = t.call(this) || this, i = new Array, n = 0; n < 13; n++) {
                    var r = new PIXI.Sprite(o.ARSENAL_ANIMATION.getTexture(3));
                    r.alpha = 0, i.push(r), e.addChild(r)
                }
                return e.leaf_dashes = i, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "dashes", {
                get: function () {
                    return this.leaf_dashes
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dispose = function () {
                for (var t = 0; t < this.leaf_dashes.length; t++) this.leaf_dashes[t].texture = PIXI.Texture.EMPTY, this.leaf_dashes[t] = null;
                this.leaf_dashes = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.LeafDashes = r
}