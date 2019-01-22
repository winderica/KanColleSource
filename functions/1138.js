const function1138 = function (t, e, i) {
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
        r = i(406),
        s = i(27),
        a = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                n.texture = r.ITEM_ILIST_SETSUBUN.getTexture(22), n._img = new PIXI.Sprite, n._img.position.set(198, 116), n.addChild(n._img);
                var o = r.ITEM_ILIST_SETSUBUN.getTexture(8),
                    a = r.ITEM_ILIST_SETSUBUN.getTexture(9);
                return n._btn_yes = new s.BtnBase(e, i), n._btn_yes.initialize(o, a), n._btn_yes.position.set(200, 274), n.addChild(n._btn_yes), o = r.ITEM_ILIST_SETSUBUN.getTexture(7), n._btn_back = new s.BtnBase(-1, i), n._btn_back.initialize(o), n._btn_back.position.set(394, 274), n.addChild(n._btn_back), n
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this._btn_yes.dispose(), this._btn_back.dispose()
            }, e.prototype.initialize = function (t, e) {
                var i = o.default.model.useItem.getMaterialCounts(),
                    n = i.devKit;
                switch (t) {
                    case 81:
                        e < 2 && (this._btn_yes.enabled = !1), this._img.texture = r.ITEM_ILIST_SETSUBUN.getTexture(23), this._img.position.set(169, 50);
                        break;
                    case 82:
                        e < 4 && (this._btn_yes.enabled = !1), this._img.texture = r.ITEM_ILIST_SETSUBUN.getTexture(24), this._img.position.set(165, 50);
                        break;
                    case 83:
                        (e < 8 || n < 10) && (this._btn_yes.enabled = !1), this._img.texture = r.ITEM_ILIST_SETSUBUN.getTexture(25), this._img.position.set(154, 50);
                        break;
                    case 84:
                        (e < 20 || n < 40) && (this._btn_yes.enabled = !1), this._img.texture = r.ITEM_ILIST_SETSUBUN.getTexture(26), this._img.position.set(154, 50)
                }
            }, e.prototype.activate = function () {
                this.visible = !0, this._btn_yes.activate(), this._btn_back.activate()
            }, e.prototype.deactivate = function () {
                this.visible = !1, this._btn_yes.deactivate(), this._btn_back.deactivate()
            }, e
        }(PIXI.Sprite);
    e.ConfirmView = a
}