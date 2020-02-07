const function833 = function (t, e, i) {
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
        r = i(90),
        s = i(3),
        a = i(32),
        _ = i(225),
        u = i(4),
        l = i(140),
        c = i(1),
        h = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._onClickEmpty = function (t) {
                    e.onClickEmpty(t)
                }, e._onClickSlotIn = function (t) {
                    e.onClickSlotIn(t)
                };
                var i = new PIXI.Sprite(s.REMODEL_POWERUP.getTexture(20));
                e.addChild(i), e.emptySlots = new Array;
                for (var n = 0; n < 5; n++) {
                    var o = new p(n);
                    o.onClick = e._onClickEmpty, o.visible = !1, e.emptySlots.push(o), e.emptySlots[n].position.set(23, 26 + 90 * n), e.addChild(o)
                }
                e.shipInSlots = new Array;
                for (var n = 0; n < 5; n++) {
                    var r = new d(n);
                    r.onClick = e._onClickSlotIn, r.visible = !1, r.position.set(23, 26 + 90 * n), e.shipInSlots.push(r), e.addChild(r)
                }
                return e
            }
            return n(e, t), e.prototype.update = function (t) {
                for (var e = 0; e < 5; e++) {
                    var i = this.shipInSlots[e],
                        n = this.emptySlots[e];
                    if (i.visible = !1, n.visible = !1, e < t.length) {
                        var s = t[e],
                            a = o.default.model.ship.getMst(s.mstID),
                            _ = r.RemodelUtil.genPowUpCategories(a);
                        this.shipInSlots[e].update(s, _[0], _[1], _[2], _[3]), this.shipInSlots[e].visible = !0
                    } else this.emptySlots[e].visible = !0, this.emptySlots[e].update(!1), t.length == e && this.emptySlots[e].update(!0)
                }
            }, e.prototype.dispose = function () {
                this.removeChildren();
                for (var t = 0; t < this.emptySlots.length; t++) this.emptySlots[t].dispose(), this.emptySlots[t] = null;
                for (var t = 0; t < this.shipInSlots.length; t++) this.shipInSlots[t].dispose(), this.shipInSlots[t] = null;
                this.onClickEmpty = null, this.onClickSlotIn = null, this.emptySlots = null, this.shipInSlots = null
            }, e
        }(PIXI.Container);
    e.TargetShipBox = h;
    var p = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._onClick = function () {
                    i.onClick(i.index)
                }, i.index = e, i.btnCardSelect = new PIXI.Sprite(s.REMODEL_POWERUP.getTexture(7)), i.btnCardSelect.on(c.EventType.CLICK, i._onClick), i.btnCardSelect.position.set(-6, -6), i.btnCardSelect.visible = !1, i.btnCardSelect.interactive = i.btnCardSelect.buttonMode = !0, i.addChild(i.btnCardSelect), i
            }
            return n(e, t), e.prototype.update = function (t) {
                this._updateClickable_(t)
            }, e.prototype._updateClickable_ = function (t) {
                this.btnCardSelect.visible = !1, t && (this.btnCardSelect.visible = !0)
            }, e.prototype.dispose = function () {
                this.btnCardSelect.off(c.EventType.CLICK), this.onClick = null, this.btnCardSelect = null, this.index = null, this.removeChildren()
            }, e
        }(PIXI.Container),
        d = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i._onClick = function () {
                    i.onClick(i.index, i.memId)
                }, i._onMouseOver = function () {
                    i.btnCardLeave.visible = !0
                }, i._onMouseOut = function () {
                    i.btnCardLeave.visible = !1
                }, i.index = e, i.iconCategories = new Array, i.btnCardLeave = new PIXI.Sprite(s.REMODEL_POWERUP.getTexture(6)), i.shipBanner = new a.ShipBanner, i.clickArea = new PIXI.Graphics, i.iconCategoriesContainer = new PIXI.Container;
                var n = new _.IconCategory,
                    r = new _.IconCategory,
                    l = new _.IconCategory,
                    h = new _.IconCategory;
                i.textName = new u.TextBox(21, 16777215), i.textLevel = new u.TextBox(23, 16777215);
                var p = new PIXI.Sprite(o.default.resources.getUIImage("mask"));
                return i.clickArea.beginFill(0, 0), i.clickArea.drawRect(0, 0, 240, 60), i.clickArea.endFill(), i.clickArea.renderable = !1, i.clickArea.interactive = i.clickArea.buttonMode = !0, i.containerName = new PIXI.Container, i.containerName.mask = p, i.containerName.addChild(i.textName, p), p.scale.x = -1, p.anchor.x = 1, i.textLevel.anchor.x = 1, i.containerName.position.set(248, -6), i.textLevel.position.set(443, -2), i.iconCategoriesContainer.position.set(254, 27), n.x = 0, r.x = 48, l.x = 96, h.x = 144, i.btnCardLeave.position.set(-6, -6), i.clickArea.on(c.EventType.MOUSEOVER, i._onMouseOver), i.clickArea.on(c.EventType.MOUSEOUT, i._onMouseOut), i.clickArea.on(c.EventType.CLICK, i._onClick), i.iconCategoriesContainer.addChild(n, r, l, h), i.iconCategories.push(n, r, l, h), i.btnCardLeave.visible = !1, i.addChild(i.iconCategoriesContainer, i.containerName, i.textLevel, i.shipBanner, i.btnCardLeave, i.clickArea), i
            }
            return n(e, t), e.prototype.update = function (t, e, i, n, o) {
                this.memId = t.memID, this.shipBanner.update(t, !1), this.iconCategories[0].visible = !1, e != l.PowerUpCategory.EMPTY && (this.iconCategories[0].visible = !0, this.iconCategories[0].update(e)), this.iconCategories[1].visible = !1, i != l.PowerUpCategory.EMPTY && (this.iconCategories[1].visible = !0, this.iconCategories[1].update(i)), this.iconCategories[2].visible = !1, n != l.PowerUpCategory.EMPTY && (this.iconCategories[2].visible = !0, this.iconCategories[2].update(n)), this.iconCategories[3].visible = !1, o != l.PowerUpCategory.EMPTY && (this.iconCategories[3].visible = !0, this.iconCategories[3].update(o)), this.btnCardLeave.visible = !1, this.textLevel.text = "Lv." + t.level, this.containerName.cacheAsBitmap = !1, this.textName.text = t.name, this.containerName.cacheAsBitmap = !0
            }, e.prototype.dispose = function () {
                this.removeChildren(), this.iconCategoriesContainer.removeChildren(), this.containerName.cacheAsBitmap = !1, this.containerName.mask = null, this.containerName.removeChildren(), this.shipBanner.dispose(), this.textName.destroy(), this.textLevel.destroy();
                for (var t = 0; t < this.iconCategories.length; t++) this.iconCategories[t].dispose(), this.iconCategories[t] = null;
                this.clickArea.off(c.EventType.MOUSEOVER), this.clickArea.off(c.EventType.MOUSEOUT), this.clickArea.off(c.EventType.CLICK), this.clickArea.clear(), this.onClick = null, this.clickArea = null, this.btnCardLeave = null, this.shipBanner = null, this.iconCategories = null, this.iconCategoriesContainer = null, this.textName = null, this.textLevel = null, this.index = null, this.containerName = null
            }, e
        }(PIXI.Container)
}