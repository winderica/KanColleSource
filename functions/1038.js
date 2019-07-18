const function1038 = function (t, e, i) {
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
    var o = i(1039),
        r = i(58),
        s = i(30),
        a = function (t) {
            function e() {
                for (var e = t.call(this) || this, i = new Array, n = 47, a = 0; a < 8; a++) {
                    var _ = new o.ExpeditionListItem;
                    _.x = 8, _.y = n, i.push(_), n += 45
                }
                var u = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(91));
                i.forEach(function (t) {
                    e.addChild(t)
                }), e.addChild(u), u.position.y = -1;
                var l = new PIXI.Sprite(s.SALLY_COMMON.getTexture(51)),
                    c = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(19));
                return l.addChild(c), c.anchor.set(0, .5), c.position.set(40, 20), l.position.set(-20, -90), e.addChild(l), e._listItems = i, e
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
                }), this._listItems = null
            }, e
        }(PIXI.Container);
    e.ExpeditionList = a
}