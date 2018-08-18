const function824 = function (t, e, i) {
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
    var o = i(3), r = i(59), s = i(4), a = i(13), _ = function (t) {
        function e() {
            var e = t.call(this) || this, i = new PIXI.Sprite(o.COMMON_MAIN.getTexture(41)), n = new PIXI.Container;
            n.position.set(50, 11);
            var _ = new s.TextBox(19, 5523516), u = a.CreateRect.gradientLeftToRight(244, 35, .65, .7),
                l = new r.IconWeapon;
            return i.texture = o.COMMON_MAIN.getTexture(41), n.mask = u, n.addChild(_, u), e.addChild(i, n, l), e.iconWeapon = l, e.background = i, e.textItemName = _, e.maskItemName = u, e.containerItemName = n, e
        }

        return n(e, t), e.prototype.update = function (t) {
            this._update_(t.name, t.iconType)
        }, e.prototype.empty = function () {
            this._updateIconType_(0), this._updateItemName_("")
        }, e.prototype._update_ = function (t, e) {
            this._updateIconType_(e), this._updateItemName_(t)
        }, e.prototype._updateItemName_ = function (t) {
            this.textItemName.text = t
        }, e.prototype._updateIconType_ = function (t) {
            this.iconWeapon.update(t)
        }, e.prototype.dispose = function () {
            this.iconWeapon.dispose(), this.background.texture = PIXI.Texture.EMPTY, this.containerItemName.removeChildren(), this.containerItemName.mask = null, this.maskItemName.texture = PIXI.Texture.EMPTY, this.textItemName.text = "", this.iconWeapon = null, this.background = null, this.textItemName = null, this.background = null, this.containerItemName = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    e.SimpleSlotItemSlot = _
}