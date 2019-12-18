const function1180 = function (t, e, i) {
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
    var o = i(4),
        r = i(110),
        s = i(1181),
        a = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._thumbnail = new s.Thumbnail, e._thumbnail.position.set(30, 31), e._name = new o.TextBox(20, 16774898), e._name.x = 283, e._name.y = 28, e.addChild(e._name), e._description = new o.TextBox(19, 16774898), e._description.x = 285, e._description.y = 87, e._description.style.breakWords = !0, e._description.style.wordWrap = !0, e._description.style.wordWrapWidth = 258, e._description.style.lineHeight = 24.7, e._price = new o.TextBox(20, 16774898), e._price.x = 292, e._price.y = 255, e._bgmFairy = new PIXI.Sprite, e._bgmFairy.x = 368, e._bgmFairy.y = 234, e._rare = new _, e._rare.x = 319, e._rare.y = 333, e._craftman = new l, e._craftman.x = 34, e._craftman.y = 343, e
            }
            return n(e, t), e.prototype.initialize = function () {
                this.texture = r.ITEM_FSHOP.getTexture(56);
                var t = r.ITEM_FSHOP.getTexture(10),
                    e = new PIXI.Sprite(t);
                e.x = 282, e.y = 61, this.addChild(e), t = r.ITEM_FSHOP.getTexture(12), e = new PIXI.Sprite(t), e.x = 282, e.y = 222, this.addChild(e), t = r.ITEM_FSHOP.getTexture(11), e = new PIXI.Sprite(t), e.x = 282, e.y = 304, this.addChild(e), this._thumbnail.initialize(), this.addChild(this._thumbnail), this.addChild(this._description), this.addChild(this._price), this._bgmFairy.texture = r.ITEM_FSHOP.getTexture(13), this.addChild(this._bgmFairy), this._rare.initialize(), this.addChild(this._rare), this._craftman.initialize(), this._craftman.visible = !1, this.addChild(this._craftman)
            }, e.prototype.update = function (t, e) {
                null == t ? (this._thumbnail.clean(), this._name.text = "", this._description.text = "", this._price.text = "", this._bgmFairy.visible = !1, this._rare.update(0), this._craftman.visible = !1) : (this._thumbnail.updateFromModel(t), this._name.text = t.name, this._description.text = t.description.replace(/<br>/g, "\n"), this._price.text = t.price.toString(), this._bgmFairy.visible = t.seasonID > 0, this._rare.update(t.rarity), 1 == t.isNeedCraftsman() ? (this._craftman.update(e), this._craftman.visible = !0) : this._craftman.visible = !1)
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._name.destroy(), this._description.destroy(), this._price.destroy(), this._craftman.dispose()
            }, e
        }(PIXI.Sprite);
    e.FShopDetailPanel = a;
    var _ = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._stars = [];
                for (var i = 0; i < 7; i++) {
                    var n = new PIXI.Sprite;
                    n.x = 30 * i, n.visible = !1, e.addChild(n), e._stars.push(n)
                }
                return e
            }
            return n(e, t), e.prototype.initialize = function () {
                this.texture = r.ITEM_FSHOP.getTexture(53);
                for (var t = 0, e = this._stars; t < e.length; t++) {
                    e[t].texture = r.ITEM_FSHOP.getTexture(15)
                }
            }, e.prototype.update = function (t) {
                for (var e = 0; e < this._stars.length; e++) {
                    this._stars[e].visible = e < t
                }
            }, e
        }(PIXI.Sprite),
        l = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._icon = new PIXI.Sprite, e._icon.x = 1, e.addChild(e._icon), e._arrow = new PIXI.Sprite, e._arrow.x = 88, e._arrow.y = 7, e.addChild(e._arrow), e._from = new o.TextBox(19, 16774898), e._from.anchor.x = 1, e._from.x = 79, e.addChild(e._from), e._to = new o.TextBox(19, 16774898), e._to.x = 120, e.addChild(e._to), e._comment = new o.TextBox(17, 16774898), e._comment.y = 27, e._comment.text = "\u7279\u6ce8\u5bb6\u5177\u8077\u4eba\u306e\u5354\u529b\u304c\u5fc5\u8981\u3068\u306a\u308a\u307e\u3059\u3002", e.addChild(e._comment), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._icon.texture = r.ITEM_FSHOP.getTexture(8), this._arrow.texture = r.ITEM_FSHOP.getTexture(0)
            }, e.prototype.update = function (t) {
                this._from.text = t.toString(), t > 0 ? (this._to.style.fill = 16774898, this._to.text = (t - 1).toString()) : (this._to.style.fill = 15859712, this._to.text = "0")
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._from.destroy(), this._to.destroy(), this._comment.destroy()
            }, e
        }(PIXI.Container)
}