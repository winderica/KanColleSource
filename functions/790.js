const function790 = function (t, e, i) {
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
    var o = i(0), r = i(85), s = i(3), a = i(32), _ = i(218), u = i(4), l = i(132), c = i(1), h = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onClickEmpty = function (t) {
                e.onClickEmpty(t)
            }, e._onClickSlotIn = function (t) {
                e.onClickSlotIn(t)
            };
            var i = new PIXI.Sprite(s.REMODEL_POWERUP.getTexture(15));
            e.addChild(i);
            for (var n = new Array, o = 0; o < 5; o++) {
                var r = new p(o);
                r.onClick = e._onClickEmpty, r.visible = !1, n.push(r), n[o].position.set(23, 26 + 90 * o), e.addChild(r)
            }
            for (var a = new Array, o = 0; o < 5; o++) {
                var _ = new d(o);
                _.onClick = e._onClickSlotIn, _.visible = !1, _.position.set(23, 26 + 90 * o), a.push(_), e.addChild(_)
            }
            return e.emptySlots = n, e.shipInSlots = a, e
        }

        return n(e, t), e.prototype.update = function (t) {
            for (var e = 0; e < 5; e++) {
                var i = this.shipInSlots[e], n = this.emptySlots[e];
                if (i.visible = !1, n.visible = !1, e < t.length) {
                    var s = t[e], a = o.default.model.ship.getMst(s.mstID), _ = r.RemodelUtil.genPowUpCategories(a);
                    this.shipInSlots[e].update(s, _[0], _[1], _[2], _[3]), this.shipInSlots[e].visible = !0
                } else this.emptySlots[e].visible = !0, this.emptySlots[e].update(!1), t.length == e && this.emptySlots[e].update(!0)
            }
        }, e.prototype.dispose = function () {
            for (var t = 0; t < this.emptySlots.length; t++) this.emptySlots[t].dispose(), this.emptySlots[t] = null;
            for (var t = 0; t < this.shipInSlots.length; t++) this.shipInSlots[t].dispose(), this.shipInSlots[t] = null;
            this.onClickEmpty = this._onClickEmpty = null, this.onClickSlotIn = this._onClickSlotIn = null, this.emptySlots = null, this.shipInSlots = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    e.TargetShipBox = h;
    var p = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i._onClick = function () {
                i.onClick(i.index)
            };
            var n = new PIXI.Sprite(s.REMODEL_POWERUP.getTexture(5));
            return n.addListener(c.EventType.CLICK, i._onClick), n.position.set(-6, -6), n.visible = !1, n.interactive = n.buttonMode = !0, i.addChild(n), i.btnCardSelect = n, i.index = e, i
        }

        return n(e, t), e.prototype.update = function (t) {
            this._updateClickable_(t)
        }, e.prototype._updateClickable_ = function (t) {
            this.btnCardSelect.visible = !1, t && (this.btnCardSelect.visible = !0)
        }, e.prototype.dispose = function () {
            this.btnCardSelect.texture = PIXI.Texture.EMPTY, this.btnCardSelect.removeAllListeners(c.EventType.CLICK), this.onClick = this._onClick = null, this.btnCardSelect = null, this.index = null, this.removeChildren()
        }, e
    }(PIXI.Container), d = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i._onClick = function () {
                i.onClick(i.index, i.memId)
            }, i._onMouseOver = function () {
                i.btnCardLeave.visible = !0
            }, i._onMouseOut = function () {
                i.btnCardLeave.visible = !1
            };
            var n = new Array, r = new PIXI.Sprite(s.REMODEL_POWERUP.getTexture(4)), l = new a.ShipBanner,
                h = new PIXI.Graphics, p = new PIXI.Container, d = new _.IconCategory, f = new _.IconCategory,
                y = new _.IconCategory, v = new _.IconCategory, g = new u.TextBox(21, 16777215),
                m = new u.TextBox(23, 16777215), b = new PIXI.Sprite(o.default.resources.getUIImage("mask"));
            h.beginFill(0, 0), h.drawRect(0, 0, 240, 60), h.endFill(), h.renderable = !1, h.interactive = h.buttonMode = !0;
            var w = new PIXI.Container;
            return w.mask = b, w.addChild(g, b), b.scale.x = -1, b.anchor.x = 1, m.anchor.x = 1, w.position.set(248, -6), m.position.set(443, -2), p.position.set(254, 27), d.x = 0, f.x = 48, y.x = 96, v.x = 144, r.position.set(-6, -6), h.addListener(c.EventType.MOUSEOVER, i._onMouseOver), h.addListener(c.EventType.MOUSEOUT, i._onMouseOut), h.addListener(c.EventType.CLICK, i._onClick), p.addChild(d, f, y, v), n.push(d, f, y, v), r.visible = !1, i.addChild(p, w, m, l, r, h), i.iconCategories = n, i.shipBanner = l, i.btnCardLeave = r, i.index = e, i.textLevel = m, i.textName = g, i.clickArea = h, i.iconCategoriesContainer = p, i.containerName = w, i
        }

        return n(e, t), e.prototype.update = function (t, e, i, n, o) {
            this.memId = t.memID, this.shipBanner.update(t, !1), this.iconCategories[0].visible = !1, e != l.PowerUpCategory.EMPTY && (this.iconCategories[0].visible = !0, this.iconCategories[0].update(e)), this.iconCategories[1].visible = !1, i != l.PowerUpCategory.EMPTY && (this.iconCategories[1].visible = !0, this.iconCategories[1].update(i)), this.iconCategories[2].visible = !1, n != l.PowerUpCategory.EMPTY && (this.iconCategories[2].visible = !0, this.iconCategories[2].update(n)), this.iconCategories[3].visible = !1, o != l.PowerUpCategory.EMPTY && (this.iconCategories[3].visible = !0, this.iconCategories[3].update(o)), this.btnCardLeave.visible = !1, this.textLevel.text = "Lv." + t.level, this.containerName.cacheAsBitmap = !1, this.textName.text = t.name, this.containerName.cacheAsBitmap = !0
        }, e.prototype.dispose = function () {
            this.containerName.mask = null, this.containerName.removeChildren(), this.shipBanner.dispose();
            for (var t = 0; t < this.iconCategories.length; t++) this.iconCategoriesContainer.removeChild(this.iconCategories[t]), this.iconCategories[t].dispose(), this.iconCategories[t] = null;
            this.textName.text = "", this.textLevel.text = "", this.clickArea.removeAllListeners(c.EventType.MOUSEOVER), this.clickArea.removeAllListeners(c.EventType.MOUSEOUT), this.clickArea.removeAllListeners(c.EventType.CLICK), this.clickArea.clear(), this.btnCardLeave.texture = PIXI.Texture.EMPTY, this.onClick = null, this.clickArea = null, this.btnCardLeave = null, this.shipBanner = null, this.iconCategories = null, this.iconCategoriesContainer = null, this.textName = null, this.textLevel = null, this.index = null, this.containerName = null, this.removeChildren()
        }, e
    }(PIXI.Container)
}