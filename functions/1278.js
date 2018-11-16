const function1278 = function (t, e, i) {
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
    var o = i(0), r = i(40), s = i(20), a = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._bg = new PIXI.Sprite, e._bg.position.set(86, 60), e._content = new _, e._content.position.set(390, 153), e.addChild(e._bg), e.addChild(e._content), e._gearBtn = new r.GearBtnHome, e._gearBtn.position.set(1127, 653), e.addChild(e._gearBtn), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "content", {
            get: function () {
                return this._content
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "gearBtn", {
            get: function () {
                return this._gearBtn
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function (t) {
            this._bg.texture = s.MAP_COMMON.getTexture(142), this._content.initialize(t), this._gearBtn.initialize()
        }, e
    }(PIXI.Container);
    e.MapEndView = a;
    var _ = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._line = new PIXI.Graphics, e._line.lineStyle(3, 16774898), e._line.moveTo(0, 0), e._line.lineTo(0, 323), e._line.position.set(0, 36), e.addChild(e._line), e._title = new PIXI.Sprite, e.addChild(e._title), e
        }

        return n(e, t), e.prototype.initialize = function (t) {
            if (this._title.texture = s.MAP_COMMON.getTexture(161), null != t) for (var e = 0; e < t.length; e++) {
                var i = t[e], n = o.default.resources.getUseitem(i, 0), r = new PIXI.Sprite(n);
                r.x = 33 + e % 5 * 75, r.y = 56 + 75 * Math.floor(e / 5), this.addChild(r)
            }
        }, e
    }(PIXI.Container);
    e.MapEndContentView = _
}