const function1197 = function (t, e, i) {
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
    var o = i(0),
        r = i(4),
        s = i(138),
        a = i(92),
        _ = i(414),
        u = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._onMouseOn = function (t, e) {
                    i._description.text = e.replace(/<br>/g, "\n")
                }, i._onMouseOff = function () {
                    i._description.text = ""
                }, i._cb_onSelect = e, i._bg_layer = new PIXI.Container, i.addChild(i._bg_layer), i._description = new r.TextBox(19, 16777215), i._description.position.set(219, 219), i._description.style.breakWords = !0, i._description.style.wordWrap = !0, i._description.style.wordWrapWidth = 744, i.addChild(i._description), i
            }
            return n(e, t), e.prototype.initialize = function () {
                var t = new PIXI.Sprite(s.ITEM_ISHOP.getTexture(26));
                t.position.set(172, 144), this._bg_layer.addChild(t), t = new PIXI.Sprite(s.ITEM_ISHOP.getTexture(30)), t.position.set(202, 144), this._bg_layer.addChild(t), t = new PIXI.Sprite(s.ITEM_ISHOP.getTexture(19)), t.position.set(202, 202), this._bg_layer.addChild(t), this._icons = [];
                for (var e = 0; e < 14; e++) {
                    var i = new _.ItemIcon(this._onMouseOn, this._onMouseOff, this._cb_onSelect);
                    i.x = 234 + 118 * Math.floor(e / 2), i.y = 288 + (0 == Math.floor(e % 2) ? 0 : 181), i.initialize(3), this.addChild(i), this._icons.push(i)
                }
            }, e.prototype.update = function () {
                for (var t = o.default.model.payitem.getOrder(1), e = 0; e < this._icons.length; e++) {
                    var i = this._icons[e],
                        n = t[e],
                        r = o.default.model.payitem.getData(n);
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
                this.removeChildren();
                for (var t = 0, e = this._icons; t < e.length; t++) {
                    e[t].dispose()
                }
                this._description.destroy(), this._cb_onSelect = null
            }, e
        }(a.ViewBase);
    e.SpecialItemShopMain = u
}