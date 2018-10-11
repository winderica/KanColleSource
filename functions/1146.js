const function1146 = function (t, e, i) {
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
    var o = i(4), r = i(3), s = i(1147), a = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i._onBtnMouseOver = function (t) {
                i._illust.update(t)
            }, i._onBtnMouseOut = function (t) {
                i._illust.update()
            }, i._onBtnClick = function (t) {
                null != i._cb_onSelect && i._cb_onSelect(t)
            }, i._cb_onSelect = e, i._header = new PIXI.Sprite, i._header.position.set(561, 169), i.addChild(i._header), i._illust = new _, i._illust.position.set(387, 210), i.addChild(i._illust), i._footer = new o.TextBox(16, 0), i._footer.position.set(670, 679), i._footer.text = "\u5bb6\u5177\u30b3\u30a4\u30f3\u306f\u9060\u5f81\u306a\u3069\u3067\u5165\u624b\u3067\u304d\u307e\u3059\u3002", i.addChild(i._footer), i._btns = [];
            for (var n = [1, 0, 5, 2, 3, 4], r = 0; r < n.length; r++) {
                var a = n[r], u = new s.FurnitureTypeBtn(a);
                u.x = 204, u.y = 241 + 70 * r, i.addChild(u), i._btns.push(u)
            }
            return i
        }

        return n(e, t), e.prototype.initialize = function () {
            this._header.texture = r.ITEM_FSHOP.getTexture(51), this._illust.initiatize();
            for (var t = 0, e = this._btns; t < e.length; t++) {
                e[t].initialize(this._onBtnMouseOver, this._onBtnMouseOut, this._onBtnClick)
            }
        }, e.prototype.activate = function () {
            for (var t = 0, e = this._btns; t < e.length; t++) {
                e[t].activate()
            }
        }, e.prototype.deactivate = function () {
            this._illust.update();
            for (var t = 0, e = this._btns; t < e.length; t++) {
                e[t].deactivate()
            }
        }, e.prototype.dispose = function () {
            this.removeChildren(), this._footer.destroy();
            for (var t = 0, e = this._btns; t < e.length; t++) {
                e[t].dispose()
            }
            this._cb_onSelect = null
        }, e
    }(PIXI.Container);
    e.FurnitureShopMainView = a;
    var _ = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._over = new PIXI.Sprite, e.addChild(e._over), e
        }

        return n(e, t), e.prototype.initiatize = function () {
            this.texture = r.ITEM_FSHOP.getTexture(38)
        }, e.prototype.update = function (t) {
            if (void 0 === t && (t = -1), -1 == t) this._over.visible = !1; else {
                var e = void 0;
                switch (t) {
                    case 0:
                        e = 39, this._over.position.set(16, 258);
                        break;
                    case 1:
                        e = 40, this._over.position.set(16, 16);
                        break;
                    case 2:
                        e = 41, this._over.position.set(196, 15);
                        break;
                    case 3:
                        e = 42, this._over.position.set(16, 16);
                        break;
                    case 4:
                        e = 43, this._over.position.set(577, 16);
                        break;
                    case 5:
                        e = 44, this._over.position.set(39, 114);
                        break;
                    default:
                        return void(this._over.visible = !1)
                }
                this._over.texture = r.ITEM_FSHOP.getTexture(e), this._over.visible = !0
            }
        }, e
    }(PIXI.Sprite)
}