const function1077 = function (t, e, i) {
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
    var o = i(1078),
        r = i(59),
        s = i(31),
        a = function (t) {
            function e() {
                for (var e = t.call(this) || this, i = new Array, n = 47, a = 0; a < 8; a++) {
                    var _ = new o.ExpeditionListItem;
                    _.x = 8, _.y = n, i.push(_), n += 45
                }
                var u = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(90));
                u.position.y = -1;
                var l = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(18));
                l.anchor.set(0, .5), l.position.set(40, 20);
                var c = new PIXI.Sprite(s.SALLY_COMMON.getTexture(51));
                return c.addChild(l), c.position.set(-20, -90), i.forEach(function (t) {
                    e.addChild(t)
                }), e.addChild(u), e.addChild(c), e._listItems = i, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "items", {
                get: function () {
                    return this._listItems
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dispose = function () {
                this.removeChildren(), this._listItems.forEach(function (t) {
                    return t.dispose()
                }), this._listItems.length = 0, this._listItems = null
            }, e
        }(PIXI.Container);
    e.ExpeditionList = a
}