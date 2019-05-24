const function984 = function (t, e, i) {
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
        s = i(30),
        a = i(53),
        _ = i(367),
        l = i(368),
        u = i(985),
        c = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._onClick = function () {
                    null != i._cb && i._cb(i._selected_id)
                }, i._cb = e, i.interactive = !0, i
            }
            return n(e, t), e.prototype.initialize = function () {
                var t = new PIXI.Sprite(s.SALLY_COMMON.getTexture(27));
                t.position.set(0, 138), this.addChild(t);
                var e = new PIXI.Sprite(s.SALLY_COMMON.getTexture(50));
                e.position.set(0, 102), this.addChild(e);
                var i = new PIXI.Sprite(a.SALLY_SORTIE.getTexture(9));
                i.position.set(24, 111), this.addChild(i);
                var n = new PIXI.Sprite(a.SALLY_SORTIE.getTexture(33));
                n.position.set(27, 227), this.addChild(n);
                var o = new PIXI.Sprite(a.SALLY_SORTIE.getTexture(34));
                o.position.set(27, 315), this.addChild(o);
                var c = new PIXI.Sprite(s.SALLY_COMMON.getTexture(46));
                c.position.set(27, 530), this.addChild(c);
                var h = new PIXI.Graphics;
                h.lineStyle(1, 13421772), h.moveTo(21, 224), h.lineTo(336, 224), h.moveTo(21, 309), h.lineTo(336, 309), this.addChild(h), this._map_name_txt = new r.TextBox(21, 4999235), this._map_name_txt.position.set(24, 156), this.addChild(this._map_name_txt), this._areaText = new _.AreaTextImage, this._areaText.position.set(29, 185), this.addChild(this._areaText), this._ope_name_txt = new r.TextBox(21, 4999235), this._ope_name_txt.position.set(24, 249), this.addChild(this._ope_name_txt), this._ope_detail_txt = new r.TextBox(21, 4999235), this._ope_detail_txt.position.set(24, 342), this._ope_detail_txt.style.wordWrap = !0, this._ope_detail_txt.style.breakWords = !0, this._ope_detail_txt.style.wordWrapWidth = 323, this.addChild(this._ope_detail_txt), this._err_txt = new r.TextBox(17, 12467003), this._err_txt.position.set(24, 465), this.addChild(this._err_txt), this._shop = new u.BtnShop2, this._shop.position.set(271, 468), this._shop.initialize(), this.addChild(this._shop), this._items = new Array;
                for (var p = 0; p < 4; p++) {
                    var d = new PIXI.Sprite;
                    d.position.set(26 + 81 * p, 555), this._items.push(d)
                }
                for (var f = 0, y = this._items; f < y.length; f++) {
                    var m = y[f];
                    this.addChild(m)
                }
                this._btn = new l.BtnDicision, this._btn.position.set(33, 638), this._btn.initialize(), this._btn.on("dicision", this._onClick), this.addChild(this._btn)
            }, e.prototype.update = function (t) {
                this._selected_id = t.mst_id, 44 == t.area_id ? (this._map_name_txt.position.set(24, 156), this._areaText.position.set(18, 179), this._map_name_txt.text = t.name) : (this._map_name_txt.position.set(24, 156), this._areaText.position.set(29, 185), this._map_name_txt.text = t.name), this._areaText.update(t.area_id), this._ope_name_txt.text = t.operation_name, this._ope_detail_txt.text = t.operation_detail.replace(/<br.*?>/g, "\n"), this._err_txt.text = "";
                for (var e = t.item_ids, i = 0; i < this._items.length; i++) {
                    var n = this._items[i];
                    if (null != e && e.length > i && e[i] > 0) {
                        var r = e[i];
                        n.texture = o.default.resources.getUseitem(r, 0), n.visible = !0
                    } else n.visible = !1
                }
                var s = o.default.model.const.boko_max_ships,
                    a = o.default.model.basic.shipMax,
                    _ = a < s,
                    l = o.default.model.ship.num,
                    u = o.default.model.basic.slotMax,
                    c = o.default.model.slot.num;
                a - l < 1 ? (this._err_txt.text = "\u8266\u5a18\u4fdd\u6709\u6570\u304c\u4e0a\u9650\u4e00\u676f\u306e\u305f\u3081\u3001\n\u51fa\u6483\u306b\u3088\u308b\u65b0\u3057\u3044\u8266\u5a18\u306e\u7372\u5f97\n\u306f\u3067\u304d\u307e\u305b\u3093\u3002", 1 == _ && (this._shop.visible = !0)) : u - c < 4 ? (this._err_txt.text = "\u88c5\u5099\u4fdd\u6709\u6570\u304c\u4e0a\u9650\u4e00\u676f\u306e\u305f\u3081\u3001\n\u51fa\u6483\u306b\u3088\u308b\u65b0\u3057\u3044\u8266\u5a18\u306e\u7372\u5f97\n\u306f\u3067\u304d\u307e\u305b\u3093\u3002", 1 == _ && (this._shop.visible = !0)) : this._shop.visible = !1
            }, e.prototype.activate = function () {
                this._shop.activate(), this._btn.activate()
            }, e.prototype.deactivate = function () {
                this._shop.deactivate(), this._btn.deactivate()
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._cb = null, this._map_name_txt.destroy(), this._areaText.dispose(), this._ope_name_txt.destroy(), this._ope_detail_txt.destroy(), this._err_txt.destroy(), this._shop.deactivate(), this._btn.off("dicision", this._onClick)
            }, e
        }(PIXI.Container);
    e.PanelDetail = c
}