const function1130 = function (t, e, i) {
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
    var o = i(0), r = i(4), s = i(130), a = i(87), _ = i(403), u = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._onMouseOn = function (t, e) {
                i._description.x = 0 == t ? 202 : 1 == t ? 535 : 865, i._description.text = e.replace(/<br>/g, "\n")
            }, i._onMouseOff = function () {
                i._description.text = ""
            }, i._cb_onSelect = e, i._bg_layer = new PIXI.Container, i.addChild(i._bg_layer), i._description = new r.TextBox(18, 16777215), i._description.y = 217, i.addChild(i._description), i
        }

        return n(e, t), e.prototype.initialize = function () {
            var t = new PIXI.Sprite(s.ITEM_ISHOP.getTexture(29));
            t.position.set(186, 144), this._bg_layer.addChild(t), t = new PIXI.Sprite(s.ITEM_ISHOP.getTexture(13)), t.position.set(184, 204), this._bg_layer.addChild(t), t = new PIXI.Sprite(s.ITEM_ISHOP.getTexture(28)), t.position.set(516, 144), this._bg_layer.addChild(t), t = new PIXI.Sprite(s.ITEM_ISHOP.getTexture(17)), t.position.set(516, 204), this._bg_layer.addChild(t), t = new PIXI.Sprite(s.ITEM_ISHOP.getTexture(27)), t.position.set(846, 144), this._bg_layer.addChild(t), t = new PIXI.Sprite(s.ITEM_ISHOP.getTexture(15)), t.position.set(846, 204), this._bg_layer.addChild(t), t = new PIXI.Sprite(s.ITEM_ISHOP.getTexture(25)), t.position.set(1176, 144), this._bg_layer.addChild(t), this._icons = [];
            for (var e = 0; e < 12; e++) {
                var i = new _.ItemIcon(this._onMouseOn, this._onMouseOff, this._cb_onSelect);
                i.x = 204 + 330 * Math.floor(e / 4) + e % 2 * 150, i.y = 289 + (Math.floor(e % 4) <= 1 ? 0 : 180), i.initialize(Math.floor(e / 4)), this.addChild(i), this._icons.push(i)
            }
        }, e.prototype.update = function () {
            for (var t = o.default.model.payitem.getOrder(0), e = 0; e < this._icons.length; e++) {
                var i = this._icons[e], n = t[e], r = o.default.model.payitem.getData(n);
                i.update(r)
            }
        }, e.prototype.activate = function () {
            for (var t = 0, e = this._icons; t < e.length; t++) {
                e[t].activate()
            }
        }, e.prototype.deactivate = function () {
            for (var t = 0, e = this._icons; t < e.length; t++) {
                e[t].deactivate()
            }
        }, e.prototype.dispose = function () {
            for (var t = 0, e = this._icons; t < e.length; t++) {
                e[t].dispose()
            }
        }, e
    }(a.ViewBase);
    e.NormalItemShopMain = u
}