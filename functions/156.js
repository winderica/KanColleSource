const function156 = function (t, e, i) {
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
    var o = i(10),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._ground = !1, e
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this._ground = t
            }, e.prototype.setDamagedIcon = function (t) {
                if (25 == t) {
                    var e = this._ground ? 107 : 109;
                    this.texture = o.COMMON_MISC.getTexture(e), this.visible = !0
                } else if (50 == t) {
                    var e = this._ground ? 106 : 99;
                    this.texture = o.COMMON_MISC.getTexture(e), this.visible = !0
                } else if (75 == t) {
                    var e = this._ground ? 104 : 105;
                    this.texture = o.COMMON_MISC.getTexture(e), this.visible = !0
                } else if (0 == t) {
                    var e = this._ground ? 103 : 102;
                    this.texture = o.COMMON_MISC.getTexture(e), this.visible = !0
                } else this.clear()
            }, e.prototype.setExpeditionIcon = function () {
                this.texture = o.COMMON_MISC.getTexture(100), this.visible = !0
            }, e.prototype.setRepairIcon = function () {
                this.texture = o.COMMON_MISC.getTexture(108), this.visible = !0
            }, e.prototype.setTaihiIcon = function () {
                this.texture = o.COMMON_MISC.getTexture(110), this.visible = !0
            }, e.prototype.clear = function () {
                this.texture = PIXI.Texture.EMPTY, this.visible = !1
            }, e
        }(PIXI.Sprite);
    e.BannerIcon = r
}