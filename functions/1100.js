const function1100 = function (t, e, i) {
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
    var o = i(0), r = i(4), s = i(3), a = i(1101), _ = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._onUse = function () {
                null != i._cb_onUse && i._cb_onUse(i._mst_id)
            }, i._cb_onUse = e, i._name = new r.TextBox(22, 16777215), i._name.position.set(0, 18), i.addChild(i._name), i._name2 = new r.TextBox(22, 16777215), i._name2.position.set(0, 18), i.addChild(i._name2), i._name2.visible = !1, i._icon = new PIXI.Sprite, i._icon.position.set(105, 81), i.addChild(i._icon), i._count = new u, i._count.position.set(243, 84), i.addChild(i._count), i._description = new r.TextBox(18, 16777215), i._description.position.set(22, 186), i._description.style.breakWords = !0, i._description.style.wordWrap = !0, i._description.style.wordWrapWidth = 264, i.addChild(i._description), i._use_btn = new a.UseBtn, i._use_btn.position.set(66, 388), i._use_btn.visible = !1, i.addChild(i._use_btn), i
        }

        return n(e, t), e.prototype.initialize = function () {
            this.texture = s.ITEM_ILIST.getTexture(17), this._use_btn.initialize(this._onUse)
        }, e.prototype.update = function (t) {
            this._mst_id = t;
            var e = o.default.model.useItem.get(t);
            if (null == e) return void this._clean();
            if (76 == this._mst_id) {
                var i = e.name.match(/(.+)(\(.+\))/);
                if (null == i || i.length < 3) this._name.text = e.name, this._name.x = Math.round(154 - this._name.width / 2), this._name2.visible = !1; else {
                    this._name.text = i[1], this._name2.text = i[2], this._name2.style.fontSize = 21, this._name2.visible = !0;
                    var n = this._name.width + this._name2.width;
                    this._name.x = Math.round(154 - n / 2), this._name2.x = this._name.x + this._name.width, this._name2.y = this._name.y + this._name.height - this._name2.height
                }
            } else this._name.text = e.name, this._name.x = Math.round(154 - this._name.width / 2), this._name2.visible = !1;
            this._icon.texture = o.default.resources.getUseitem(t, 0), this._count.update(e.count), this._count.visible = !0, this._description.text = e.description.replace(/<br>/g, "\n"), 1 == e.isUsable() && e.count > 0 ? (this._use_btn.visible = !0, this._use_btn.activate()) : (this._use_btn.visible = !1, this._use_btn.deactivate())
        }, e.prototype.dispose = function () {
            this._use_btn.dispose()
        }, e.prototype._clean = function () {
            this._name.text = "", this._icon.texture = PIXI.Texture.EMPTY, this._count.visible = !1, this._description.text = "", this._use_btn.visible = !1, this._use_btn.deactivate()
        }, e
    }(PIXI.Sprite);
    e.OwnedItemDetailPanel = _;
    var u = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._bg = new PIXI.Sprite, e.addChild(e._bg), e._text = new r.TextBox(30, 16777215), e._text.y = 28, e.addChild(e._text), e
        }

        return n(e, t), e.prototype.initialize = function () {
            this.update(0)
        }, e.prototype.update = function (t) {
            var e;
            e = t < 100 ? 24 : t < 1e3 ? 25 : 26, this._bg.texture = s.ITEM_ILIST.getTexture(e), this._bg.x = -Math.round(this._bg.width / 2), this._text.text = t.toString(), this._text.x = -Math.round(this._text.width / 2)
        }, e
    }(PIXI.Container)
}