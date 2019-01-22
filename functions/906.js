const function906 = function (t, e, i) {
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
        r = i(1),
        s = i(113),
        a = i(115),
        _ = i(84),
        l = i(35),
        u = i(347),
        c = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._onClickDisassembly = function () {
                    e.onClickStart(e.memSlotIds)
                };
                var i = new PIXI.Sprite(l.ARSENAL_MAIN.getTexture(62));
                e.interactive = !0, e.addChild(i);
                var n = new PIXI.Sprite(l.ARSENAL_MAIN.getTexture(63));
                n.position.set(21, 32);
                var o = new PIXI.Sprite(l.ARSENAL_MAIN.getTexture(20));
                e.buttonDisassembly = new a.SimpleButton(l.ARSENAL_MAIN.getTexture(19), l.ARSENAL_MAIN.getTexture(21));
                var _ = new s.DisableDownArrowAnimationView;
                e.downArrowAnimationView = new s.DownArrowAnimationView, e._icon = new PIXI.Sprite, e._iconMulti = new PIXI.Sprite(l.ARSENAL_MAIN.getTexture(78)), e.disassemblyMaterialItems = new Array, e.disassemblyMaterialItems.push(new u.DisassemblyMaterialItem), e.disassemblyMaterialItems.push(new u.DisassemblyMaterialItem), e.disassemblyMaterialItems.push(new u.DisassemblyMaterialItem), e.disassemblyMaterialItems.push(new u.DisassemblyMaterialItem), e.disassemblyMaterialItems[0].position.set(15, 84), e.disassemblyMaterialItems[1].position.set(15, 139), e.disassemblyMaterialItems[2].position.set(15, 195), e.disassemblyMaterialItems[3].position.set(15, 250), _.position.set(127, 450), e.downArrowAnimationView.position.set(127, 450), o.position.set(28, 496), e.buttonDisassembly.position.set(28, 496), e.buttonDisassembly.on(r.EventType.CLICK, e._onClickDisassembly), e._icon.anchor.set(.5, .5), e._icon.scale.set(.356, .356), e._icon.position.set(148, 367), e._icon.visible = !1, e._iconMulti.anchor.set(.5, .5), e._iconMulti.position.set(148, 367), e._iconMulti.scale.set(1), e._iconMulti.visible = !1;
                var c = new PIXI.Container;
                return c.name = "container", c.addChild(e.disassemblyMaterialItems[0], e.disassemblyMaterialItems[1], e.disassemblyMaterialItems[2], e.disassemblyMaterialItems[3], e._icon, e._iconMulti, o, _, e.downArrowAnimationView, e.buttonDisassembly), e.addChild(n, c), e.visibleContainer(!1), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "viewIcon", {
                get: function () {
                    return this._icon.visible ? this._icon : this._iconMulti
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dispose = function () {
                _.TaskLoadSlotResource.abortBy(this._icon);
                for (var t = 0; t < this.disassemblyMaterialItems.length; t++) this.disassemblyMaterialItems[t].dispose(), this.disassemblyMaterialItems[t] = null;
                this.buttonDisassembly.dispose(), this.downArrowAnimationView.dispose(), this.onClickStart = null, this.disassemblyMaterialItems = null, this.buttonDisassembly = null, this.downArrowAnimationView = null, this._icon = null, this._iconMulti = null, this.memSlotIds = null, this.removeChildren()
            }, e.prototype.visibleContainer = function (t) {
                this.getChildByName("container").visible = t
            }, e.prototype.update = function (t, e) {
                for (var i = {
                        fuel: 0,
                        ammo: 0,
                        steel: 0,
                        baux: 0
                    }, n = 0; n < t.length; n++) {
                    var r = t[n],
                        s = o.default.model.slot.get(r),
                        a = o.default.model.slot.getMst(s.mstID),
                        l = a.getMaterialsFromBroken();
                    i.ammo += l.ammo, i.fuel += l.fuel, i.steel += l.steel, i.baux += l.baux
                }
                for (var u = 0, n = 0; n < this.disassemblyMaterialItems.length; n++) this.disassemblyMaterialItems[n].visible = !1;
                if (0 < i.fuel) {
                    var c = this.disassemblyMaterialItems[u];
                    c.update(31, i.fuel), c.visible = !0, u++
                }
                if (0 < i.ammo) {
                    var c = this.disassemblyMaterialItems[u];
                    c.update(32, i.ammo), c.visible = !0, u++
                }
                if (0 < i.steel) {
                    var c = this.disassemblyMaterialItems[u];
                    c.update(33, i.steel), c.visible = !0, u++
                }
                if (0 < i.baux) {
                    var c = this.disassemblyMaterialItems[u];
                    c.update(34, i.baux), c.visible = !0, u++
                }
                if (_.TaskLoadSlotResource.abortBy(this._icon), 1 < t.length) this._icon.visible = !1, this._icon.texture = PIXI.Texture.EMPTY, this._iconMulti.visible = !0;
                else {
                    this._iconMulti.visible = !1, this._icon.visible = !0;
                    var r = t[0],
                        h = o.default.model.slot.get(r);
                    new _.TaskLoadSlotResource("item_on", this._icon, h.mstID).start()
                }
                this.buttonDisassembly.visible = !1, this.downArrowAnimationView.visible = !1, e && (this.buttonDisassembly.visible = !0, this.downArrowAnimationView.visible = !0), this.memSlotIds = t
            }, e.prototype.clearInfo = function () {
                for (var t = 0; t < this.disassemblyMaterialItems.length; t++) this.disassemblyMaterialItems[t].visible = !1;
                this._icon.visible = !1, this._iconMulti.visible = !1, this.buttonDisassembly.visible = !1, this.downArrowAnimationView.visible = !1
            }, e
        }(PIXI.Container);
    e.SlotDisassemblyConfirm = c
}