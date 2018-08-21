const function179 = function (t, e, i) {
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
    var o = i(5), r = i(21), s = i(250), a = function (t) {
        function e() {
            return t.call(this) || this
        }

        return n(e, t), Object.defineProperty(e.prototype, "width", {
            get: function () {
                for (var t = 0, e = 0, i = 0, n = this.children; i < n.length; i++) {
                    var o = n[i], r = o;
                    null != r && (t = Math.min(t, r.x), e = Math.max(e, r.x + r.width))
                }
                return e - t
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "height", {
            get: function () {
                for (var t = 0, e = 0, i = 0, n = this.children; i < n.length; i++) {
                    var o = n[i], r = o;
                    null != r && (t = Math.min(t, r.y), e = Math.max(e, r.y + r.height))
                }
                return e - t
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function (t, e) {
            this.removeChildren();
            var i, n, r;
            1 == t ? 1 == e ? (i = s.BATTLE_TELOP.getTexture(6), n = s.BATTLE_TELOP.getTexture(7), r = s.BATTLE_TELOP.getTexture(8)) : (i = s.BATTLE_TELOP.getTexture(9), n = s.BATTLE_TELOP.getTexture(10), r = s.BATTLE_TELOP.getTexture(11)) : 1 == e ? (i = s.BATTLE_TELOP.getTexture(0), n = s.BATTLE_TELOP.getTexture(1), r = s.BATTLE_TELOP.getTexture(2)) : (i = s.BATTLE_TELOP.getTexture(3), n = s.BATTLE_TELOP.getTexture(4), r = s.BATTLE_TELOP.getTexture(5));
            var a = new PIXI.Sprite(i);
            a.width = o.default.width, a.position.set(-o.default.width / 2, -Math.round(a.height / 2)), this.addChild(a);
            var _ = new PIXI.Sprite(n);
            _.position.set(-o.default.width / 2 - _.width, -Math.round(_.height / 2)), this.addChild(_);
            var u = new PIXI.Sprite(r);
            u.position.set(o.default.width / 2, -Math.round(u.height / 2)), this.addChild(u)
        }, e
    }(r.Container);
    e.TelopBG = a
}