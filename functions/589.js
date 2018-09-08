const function589 = function (t, e, i) {
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
    var o = i(0), r = i(4), s = i(32), a = i(9), _ = i(145), u = function (t) {
        function e() {
            return t.call(this) || this
        }

        return n(e, t), Object.defineProperty(e.prototype, "ship_canvas", {
            get: function () {
                return this._ship_canvas
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "bg", {
            get: function () {
                return this._bg
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "expedition_name", {
            get: function () {
                return this._expedition_name
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "user_info", {
            get: function () {
                return this._user_info
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "banners", {
            get: function () {
                return this._banners
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "infos", {
            get: function () {
                return this._infos
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "bonus", {
            get: function () {
                return this._bonus
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "item", {
            get: function () {
                return this._item
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function (t, e) {
            for (this._ship_canvas = new PIXI.Container, this._ship_canvas.position.set(587, -12), this._ship_canvas.scale.set(.8), this._bg = new PIXI.Sprite(_.COMMON_EXPEDITION.getTexture(0)), this._expedition_name = new r.TextBox(24, 1949120), this._expedition_name.anchor.set(.5, .5), this._expedition_name.position.set(600, 66), this._user_info = new l, this._user_info.initialize(t, e), this._user_info.position.set(86, 111), this._banner_canvas = new PIXI.Container, this._banner_canvas.position.set(305, 279), this._banners = new Array; this._banners.length < 6;) {
                var i = new s.ShipBanner;
                this._banner_canvas.addChild(i), this._banners.push(i)
            }
            this._infos = new c, this._infos.position.set(251, 294), this._infos.visible = !1, this._bonus = new p, this._bonus.initialize(), this._bonus.position.set(914, 396), this._bonus.visible = !1, this._item = new d, this._item.initialize(), this._item.position.set(914, 396), this._bonus.update(e.total_exp), this.addChild(this._ship_canvas), this.addChild(this._bg), this.addChild(this._expedition_name), this.addChild(this._user_info), this.addChild(this._banner_canvas), this.addChild(this._infos), this.addChild(this._bonus), this.addChild(this._item)
        }, e.prototype.dispose = function () {
            this._ship_canvas = null, this._bg = null, this._expedition_name = null, this._user_info = null, this._banner_canvas = null;
            for (var t = 0, e = this._banners; t < e.length; t++) {
                e[t].dispose()
            }
            this._banners = null, this._infos = null, this._bonus = null, this._item = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    e.ExpeditionResult = u;
    var l = function (t) {
        function e() {
            return t.call(this) || this
        }

        return n(e, t), e.prototype.initialize = function (t, e) {
            var i = new PIXI.Sprite(_.COMMON_EXPEDITION.getTexture(1)),
                n = new PIXI.Sprite(_.COMMON_EXPEDITION.getTexture(15)),
                o = new PIXI.Sprite(_.COMMON_EXPEDITION.getTexture(11));
            this._user_name = new r.TextBox(21, 16774898), this._user_lv = new r.TextBox(22, 16774898), this._user_rank = new r.TextBox(18, 16774898), this._fleet_name = new r.TextBox(21, 16774898), n.position.set(12, 54), o.position.set(276, 12), this._user_name.position.set(12, 9), this._user_lv.position.set(303, 9), this._user_rank.position.set(383, 9), this._fleet_name.position.set(83, 51), this.addChild(i), this.addChild(n), this.addChild(o), this.addChild(this._user_name), this.addChild(this._user_lv), this.addChild(this._user_rank), this.addChild(this._fleet_name)
        }, e.prototype.update = function (t, e, i, n) {
            this._user_name.text = t, this._user_lv.text = e.toString(), this._user_rank.text = "[" + i + "]", this._fleet_name.text = n
        }, e
    }(PIXI.Container), c = function (t) {
        function e() {
            var e = t.call(this) || this;
            for (e._items = new Array; e._items.length < 6;) {
                var i = new h;
                e.addChild(i), e._items.push(i)
            }
            return e
        }

        return n(e, t), Object.defineProperty(e.prototype, "items", {
            get: function () {
                return this._items
            }, enumerable: !0, configurable: !0
        }), e
    }(PIXI.Container), h = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._name = new r.TextBox(18, 16777215), e._name.position.set(-156, -9), e._name_mask = new PIXI.Graphics, e._name.addChild(e._name_mask), e._name.mask = e._name_mask, e._lv = new r.TextBox(17, 16777215), e._lv.anchor.set(1, 0), e._lv.position.set(43, -9), e
        }

        return n(e, t), e.prototype.initialize = function () {
            var t = new PIXI.Sprite(_.COMMON_EXPEDITION.getTexture(11));
            t.position.set(-27, -11), this.addChild(t), this.addChild(this._name), this.addChild(this._lv)
        }, e.prototype.update = function (t, e) {
            "" == t ? this.visible = !1 : (this._name.text = t, this._name_mask.clear(), this._name_mask.beginFill(0), this._name_mask.drawRect(0, 0, 126, this._name.height), this._name_mask.endFill(), this._lv.text = e.toString())
        }, e.prototype.dispose = function () {
        }, e
    }(PIXI.Container), p = function (t) {
        function e() {
            return t.call(this) || this
        }

        return n(e, t), e.prototype.initialize = function () {
            var t = new PIXI.Sprite(_.COMMON_EXPEDITION.getTexture(1)),
                e = new PIXI.Sprite(_.COMMON_EXPEDITION.getTexture(6)),
                i = new PIXI.Sprite(_.COMMON_EXPEDITION.getTexture(12)),
                n = new PIXI.Sprite(_.COMMON_EXPEDITION.getTexture(13));
            this._total_exp = new r.TextBox(26, 16774898), this._total_exp.anchor.set(1, 0), t.position.set(-324, -282), t.scale.set(1, 2.25), e.position.set(-309, 18), i.position.set(-303, -270), n.position.set(155, 30), this._total_exp.position.set(147, 24), this.addChild(t), this.addChild(e), this.addChild(i), this.addChild(n), this.addChild(this._total_exp)
        }, e.prototype.update = function (t) {
            this._total_exp.text = t.toString()
        }, e
    }(PIXI.Container), d = function (t) {
        function e() {
            return t.call(this) || this
        }

        return n(e, t), e.prototype.initialize = function () {
            var t = new PIXI.Sprite(_.COMMON_EXPEDITION.getTexture(1)),
                e = new PIXI.Sprite(_.COMMON_EXPEDITION.getTexture(14)),
                i = new PIXI.Sprite(a.COMMON_MISC.getTexture(86)),
                n = new PIXI.Sprite(a.COMMON_MISC.getTexture(87)),
                o = new PIXI.Sprite(a.COMMON_MISC.getTexture(88)),
                s = new PIXI.Sprite(a.COMMON_MISC.getTexture(89)),
                u = new PIXI.Sprite(_.COMMON_EXPEDITION.getTexture(16)),
                l = new PIXI.Sprite(_.COMMON_EXPEDITION.getTexture(16)),
                c = new PIXI.Sprite(_.COMMON_EXPEDITION.getTexture(16)),
                h = new PIXI.Sprite(_.COMMON_EXPEDITION.getTexture(16));
            this._item1_name = new r.TextBox(21, 16774898), this._item1_img = new PIXI.Sprite, this._item1_count = new r.TextBox(19, 16774898), this._item2_name = new r.TextBox(21, 16774898), this._item2_img = new PIXI.Sprite, this._item2_count = new r.TextBox(19, 16774898), this._fuel = new r.TextBox(18, 16774898), this._ammo = new r.TextBox(18, 16774898), this._steel = new r.TextBox(18, 16774898), this._baux = new r.TextBox(18, 16774898), t.position.set(-324, 105), t.scale.set(1, 1.2), e.position.set(-303, 117), s.position.set(69, 153), o.position.set(69, 186), n.position.set(69, 219), i.position.set(69, 252), h.position.set(102, 159), c.position.set(102, 192), l.position.set(102, 225), u.position.set(102, 258), this._item1_name.position.set(-299, 156), this._item1_img.position.set(-299, 195), this._item1_count.position.set(-215, 234), this._item2_name.position.set(-114, 156), this._item2_img.position.set(-114, 195), this._item2_count.position.set(-30, 234), this._baux.position.set(123, 155), this._steel.position.set(123, 188), this._ammo.position.set(123, 221), this._fuel.position.set(123, 254), this.addChild(t), this.addChild(e), this.addChild(i), this.addChild(n), this.addChild(o), this.addChild(s), this.addChild(u), this.addChild(l), this.addChild(c), this.addChild(h), this.addChild(this._item1_name), this.addChild(this._item1_img), this.addChild(this._item1_count), this.addChild(this._item2_name), this.addChild(this._item2_img), this.addChild(this._item2_count), this.addChild(this._fuel), this.addChild(this._ammo), this.addChild(this._steel), this.addChild(this._baux)
        }, e.prototype.updateItem1 = function (t, e, i) {
            this._item1_name.text = e, this._item1_img.texture = o.default.resources.getUseitem(t, 0), this._item1_count.text = "\xd7" + i.toString()
        }, e.prototype.updateItem2 = function (t, e, i) {
            this._item2_name.text = e, this._item2_img.texture = o.default.resources.getUseitem(t, 0), this._item2_count.text = "\xd7" + i.toString()
        }, e.prototype.updateMaterials = function (t, e, i, n) {
            this._fuel.text = t.toString(), this._ammo.text = e.toString(), this._steel.text = i.toString(), this._baux.text = n.toString()
        }, e
    }(PIXI.Container)
}