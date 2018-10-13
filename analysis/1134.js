const function1134 = function (t, e, i) {
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
    var o = i(4), r = i(128), s = i(168), a = i(1135), _ = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._onPickup = function () {
                null != i._cb_onPickup && i._cb_onPickup(i._model)
            }, i._cb_onPickup = e, i._name = new o.TextBox(22, 16777215), i._name.position.set(0, 18), i.addChild(i._name), i._icon = new PIXI.Sprite, i._icon.position.set(105, 81), i.addChild(i._icon), i._count = new u, i._count.position.set(243, 84), i.addChild(i._count), i._description = new o.TextBox(18, 16777215), i._description.position.set(22, 186), i._description.style.breakWords = !0, i._description.style.wordWrap = !0, i._description.style.wordWrapWidth = 264, i.addChild(i._description), i._pickup_btn = new a.PickupBtn, i._pickup_btn.position.set(66, 388), i._pickup_btn.visible = !1, i.addChild(i._pickup_btn), i
        }

        return n(e, t), e.prototype.initialize = function () {
            this._pickup_btn.initialize(this._onPickup)
        }, e.prototype.update = function (t) {
            return null != t && this._model == t ? void this._onPickup() : (this._model = t, null == this._model ? void this._clean() : (this._name.text = this._model.name, this._name.x = Math.round(154 - this._name.width / 2), this._icon.texture = s.getPayitemIcon(this._model.id), this._count.update(this._model.count), this._count.visible = !0, this._description.text = this._model.description.replace(/<br>/g, "\n"), this._pickup_btn.visible = !0, void this._pickup_btn.activate()))
        }, e.prototype.dispose = function () {
            this.removeChildren(), this._name.destroy(), this._count.dispose(), this._description.destroy(), this._pickup_btn.dispose(), this._cb_onPickup = null
        }, e.prototype._clean = function () {
            this._name.text = "", this._icon.texture = PIXI.Texture.EMPTY, this._count.visible = !1, this._description.text = "", this._pickup_btn.visible = !1, this._pickup_btn.deactivate()
        }, e
    }(PIXI.Sprite);
    e.PurchasedItemDetailPanel = _;
    var u = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._bg = new PIXI.Sprite, e.addChild(e._bg), e._text = new o.TextBox(30, 16777215), e._text.y = 28, e.addChild(e._text), e
        }

        return n(e, t), e.prototype.initialize = function () {
            this.update(0)
        }, e.prototype.update = function (t) {
            var e;
            e = t < 100 ? 24 : t < 1e3 ? 25 : 26, this._bg.texture = r.ITEM_ILIST.getTexture(e), this._bg.x = -Math.round(this._bg.width / 2), this._text.text = t.toString(), this._text.x = -Math.round(this._text.width / 2)
        }, e.prototype.dispose = function () {
            this.removeChildren(), this._text.destroy()
        }, e
    }(PIXI.Container)
}