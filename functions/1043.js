const function1043 = function (t, e, i) {
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
    var o = i(32), r = i(9), s = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._img = new PIXI.Sprite, e.addChild(e._img), e
        }

        return n(e, t), e.prototype.initialize = function () {
        }, e.prototype.update = function (t) {
            var e = this._getTexture(t);
            null == e ? this.visible = !1 : (this._img.texture = e, this._img.x = -Math.round(this._img.width / 2), this._img.y = -Math.round(this._img.height / 2), this.visible = !0)
        }, e.prototype.dispose = function () {
        }, e.prototype._getTexture = function (t) {
            switch (t) {
                case 1:
                    return r.COMMON_MISC.getTexture(74);
                case 2:
                    return r.COMMON_MISC.getTexture(77);
                case 3:
                    return r.COMMON_MISC.getTexture(80);
                case 4:
                    return r.COMMON_MISC.getTexture(83)
            }
            return null
        }, e
    }(o.Container);
    e.ExpeditionDeckIcon = s
}