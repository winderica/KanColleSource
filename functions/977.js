const function977 = function (t, e, i) {
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
    var o = i(30),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._bg = new PIXI.Sprite, e._label = new PIXI.Sprite, e._n001 = new PIXI.Sprite, e._n010 = new PIXI.Sprite, e._n100 = new PIXI.Sprite, e.addChild(e._bg), e.addChild(e._label), e.addChild(e._n001), e.addChild(e._n010), e.addChild(e._n100), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._bg.texture = o.SALLY_COMMON.getTexture(28), this._label.texture = o.SALLY_COMMON.getTexture(33), this._n001.position.set(44, 3), this._n010.position.set(33, 3), this._n100.position.set(23, 3)
            }, e.prototype.update = function (t) {
                if (null == t) this.visible = !1;
                else {
                    var e = t.level;
                    e = Math.max(0, e), e = Math.min(999, e);
                    var i = Math.floor(e / 100),
                        n = e % 100,
                        r = Math.floor(n / 10),
                        s = n % 10,
                        a = [58, 59, 60, 61, 62, 63, 64, 65, 66, 67];
                    e < 10 ? (this._bg.scale.x = .866, this._bg.position.x = 17, this._label.position.set(23, 5), this._n001.texture = o.SALLY_COMMON.getTexture(a[s]), this._n010.visible = !1, this._n100.visible = !1) : e < 100 ? (this._bg.scale.x = 1.067, this._bg.position.x = 8, this._label.position.set(12, 5), this._n001.texture = o.SALLY_COMMON.getTexture(a[s]), this._n010.texture = o.SALLY_COMMON.getTexture(a[r]), this._n010.visible = !0, this._n100.visible = !1) : (this._bg.scale.x = 1.233, this._bg.position.x = 0, this._label.position.set(3, 5), this._n001.texture = o.SALLY_COMMON.getTexture(a[s]), this._n010.texture = o.SALLY_COMMON.getTexture(a[r]), this._n100.texture = o.SALLY_COMMON.getTexture(a[i]), this._n010.visible = !0, this._n100.visible = !0), this.visible = !0
                }
            }, e
        }(PIXI.Container);
    e.CompBannerLevel = r
}