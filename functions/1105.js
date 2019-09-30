const function1105 = function (t, e, i) {
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
        r = i(3),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._items = [];
                for (var i = 0; i < 6; i++) {
                    var n = new a;
                    n.x = i % 2 * 225, n.y = 39 * Math.floor(i / 2), e.addChild(n), e._items.push(n)
                }
                return e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren();
                for (var t = 0; t < this._items.length; t++) this._items[t].dispose(), this._items[t] = null;
                this._items = null
            }, e.prototype.update = function (t) {
                var e = [];
                this._addParamData(e, 0, t.soukou), this._addParamData(e, 1, t.karyoku), this._addParamData(e, 2, t.raisou), this._addParamData(e, 3, t.baku), this._addParamData(e, 4, t.taiku), this._addParamData(e, 5, t.taisen), this._addParamData(e, 6, t.meichu), this._addParamData(e, 7, t.kaihi), this._addParamData(e, 8, t.sakuteki), this._addParamData(e, 9, t.syatei);
                for (var i = t.equipType, n = 0; n < this._items.length; n++)
                    if (e.length <= n) this._items[n].visible = !1;
                    else {
                        var o = e[n];
                        this._items[n].update(o.type, o.value, i), this._items[n].visible = !0
                    }
            }, e.prototype._addParamData = function (t, e, i) {
                null != t && 0 != i && t.push({
                    type: e,
                    value: i
                })
            }, e
        }(PIXI.Container);
    e.SlotParamsContainer = s;
    var a = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._value_text = new o.TextBox(19, 16774898), e._value_text.position.set(189, 2), e._value_text.anchor.x = 1, e.addChild(e._value_text), e._value_img = new PIXI.Sprite, e._value_img.position.set(184, 13), e._value_img.anchor.set(1, .5), e.addChild(e._value_img), e
        }
        return n(e, t), e.prototype.dispose = function () {
            this.removeChildren(), this._value_text.destroy(), this._value_text = null, this._value_img = null
        }, e.prototype.update = function (t, e, i) {
            if (this.texture = this._getTexture(t, i), 9 == t) {
                this._value_text.visible = !1;
                var n = [97, 98, 96, 95, 99][e];
                this._value_img.texture = r.ALBUM_MAIN.getTexture(n), this._value_img.visible = !0
            } else this._value_img.visible = !1, this._value_text.text = e > 0 ? "+" + e : e.toString(), this._value_text.visible = !0
        }, e.prototype._getTexture = function (t, e) {
            var i;
            switch (t) {
                case 0:
                    i = 34;
                    break;
                case 1:
                    i = 37;
                    break;
                case 2:
                    i = 38;
                    break;
                case 3:
                    i = 31;
                    break;
                case 4:
                    i = 39;
                    break;
                case 5:
                    i = 28;
                    break;
                case 6:
                    i = 48 == e ? 32 : 30;
                    break;
                case 7:
                    i = 48 == e ? 33 : 35;
                    break;
                case 8:
                    i = 29;
                    break;
                case 9:
                    i = 36;
                    break;
                default:
                    return PIXI.Texture.EMPTY
            }
            return r.ALBUM_MAIN.getTexture(i)
        }, e
    }(PIXI.Sprite)
}