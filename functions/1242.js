const function1242 = function (t, e, i) {
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
        r = i(172),
        s = i(4),
        a = i(143),
        _ = i(1243),
        l = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i._friend = e, i._chara = new PIXI.Sprite, i.addChild(i._chara), i._bg = new PIXI.Sprite, i._bg.x = e ? 0 : 95, i._bg.y = 368, i.addChild(i._bg), i._stype_txt = new s.TextBox(21, 16774898);
                var n = new PIXI.Graphics;
                return n.beginFill(0).drawRect(0, 0, 126, 27).endFill(), i._stype_txt.addChild(n), i._stype_txt.mask = n, i._stype_txt.x = e ? 6 : 168, i._stype_txt.y = 476, i.addChild(i._stype_txt), i._name_txt = new s.TextBox(39, 16774898), n = new PIXI.Graphics, n.beginFill(0).drawRect(0, 0, 204, 45).endFill(), i._name_txt.addChild(n), i._name_txt.mask = n, i._name_txt.x = e ? 143 : 303, i._name_txt.y = 465, i.addChild(i._name_txt), i._lvlabel_txt = new s.TextBox(27, 16774898), i._lvlabel_txt.text = "Lv", i._lvlabel_txt.x = e ? 351 : 512, i._lvlabel_txt.y = 474, i.addChild(i._lvlabel_txt), i._lv_txt = new s.TextBox(28, 16774898), i._lv_txt.x = e ? 383 : 543, i._lv_txt.y = 473, i.addChild(i._lv_txt), i._elementLayer = new PIXI.Container, i.addChild(i._elementLayer), i._medal = new r.MedalIcon, i._medal.alpha = 0, i._medal.x = e ? 440 : 108, i._medal.y = 533, i.addChild(i._medal), i
            }
            return n(e, t), Object.defineProperty(e.prototype, "medal", {
                get: function () {
                    return this._medal
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "elements", {
                get: function () {
                    return this._elements
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t, e) {
                this._friend ? this._bg.texture = a.PRAC_MAIN.getTexture(1) : this._bg.texture = a.PRAC_MAIN.getTexture(0);
                var i = t[0],
                    n = i.mst_id,
                    r = i.isDamaged(),
                    s = o.default.model.ship_graph.get(n),
                    _ = null == s ? new PIXI.Point : s.getLeftOffset(r);
                this._friend || (_.x += 90), this._chara.position.set(_.x - 150, _.y - 60), this._chara.texture = o.default.resources.getShip(n, r, "full"), this._stype_txt.text = i.stype_name, this._name_txt.text = i.name, this._lv_txt.text = i.level.toString(), this._initializeElements(t), e > 0 && (this._medal.initialize(), this._medal.update(e, 9466926))
            }, e.prototype.dispose = function () {
                if (this.removeChildren(), this._stype_txt.destroy(), this._name_txt.destroy(), this._lvlabel_txt.destroy(), this._lv_txt.destroy(), this._medal.dispose(), null != this._elements)
                    for (var t = 0, e = this._elements; t < e.length; t++) {
                        var i = e[t];
                        i.dispose()
                    }
            }, e.prototype._initializeElements = function (t) {
                this._elements = [];
                for (var e = 1; e < t.length; e++) {
                    var i = t[e];
                    if (null == i) return;
                    var n = new _.ShipElement;
                    n.alpha = 0, n.x = this._friend ? -101 : 273, n.y = 530 + 38 * (e - 1);
                    var o = i.stype_name,
                        r = i.name,
                        s = i.level;
                    n.update(o, r, s), this._elements.push(n), this._elementLayer.addChild(n)
                }
            }, e
        }(PIXI.Container);
    e.Content = l
}