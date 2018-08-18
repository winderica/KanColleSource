const function899 = function (t, e, i) {
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
    var o = i(0), r = i(1), s = i(113), a = i(115), _ = i(82), u = i(35), l = i(352), c = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onClickDisassembly = function () {
                e.onClickStart(e.memSlotIds)
            };
            var i = new PIXI.Sprite(u.ARSENAL_MAIN.getTexture(62));
            e.interactive = !0, e.addChild(i);
            var n = new PIXI.Sprite(u.ARSENAL_MAIN.getTexture(63));
            n.position.set(21, 32);
            var o = new PIXI.Sprite(u.ARSENAL_MAIN.getTexture(20));
            e.buttonDisassembly = new a.SimpleButton(u.ARSENAL_MAIN.getTexture(19), u.ARSENAL_MAIN.getTexture(21));
            var _ = new s.DisableDownArrowAnimationView;
            e.downArrowAnimationView = new s.DownArrowAnimationView, e._icon = new PIXI.Sprite, e.disassemblyMaterialItems = new Array, e.textureMatomete = u.ARSENAL_MAIN.getTexture(78), e.disassemblyMaterialItems.push(new l.DisassemblyMaterialItem), e.disassemblyMaterialItems.push(new l.DisassemblyMaterialItem), e.disassemblyMaterialItems.push(new l.DisassemblyMaterialItem), e.disassemblyMaterialItems.push(new l.DisassemblyMaterialItem), e.disassemblyMaterialItems[0].position.set(15, 84), e.disassemblyMaterialItems[1].position.set(15, 139), e.disassemblyMaterialItems[2].position.set(15, 195), e.disassemblyMaterialItems[3].position.set(15, 250), _.position.set(127, 450), e.downArrowAnimationView.position.set(127, 450), o.position.set(28, 496), e.buttonDisassembly.position.set(28, 496), e.buttonDisassembly.on(r.EventType.CLICK, e._onClickDisassembly), e._icon.anchor.set(.5, .5), e._icon.position.set(148, 367), e._icon.visible = !1;
            var c = new PIXI.Container;
            return c.name = "container", c.addChild(e.disassemblyMaterialItems[0], e.disassemblyMaterialItems[1], e.disassemblyMaterialItems[2], e.disassemblyMaterialItems[3], e._icon, o, _, e.downArrowAnimationView, e.buttonDisassembly), e.addChild(n, c), e.visibleContainer(!1), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "icon", {
            get: function () {
                return this._icon
            }, enumerable: !0, configurable: !0
        }), e.prototype.dispose = function () {
            for (var t = 0; t < this.disassemblyMaterialItems.length; t++) this.disassemblyMaterialItems[t].dispose(), this.disassemblyMaterialItems[t] = null;
            this.buttonDisassembly.dispose(), this.downArrowAnimationView.dispose(), this.onClickStart = null, this.disassemblyMaterialItems = null, this.buttonDisassembly = null, this.downArrowAnimationView = null, this._icon = null, this.memSlotIds = null, this.removeChildren()
        }, e.prototype.visibleContainer = function (t) {
            this.getChildByName("container").visible = t
        }, e.prototype.update = function (t, e) {
            for (var i = { fuel: 0, ammo: 0, steel: 0, baux: 0 }, n = 0; n < t.length; n++) {
                var r = t[n], s = o.default.model.slot.get(r), a = o.default.model.slot.getMst(s.mstID),
                    u = a.getMaterialsFromBroken();
                i.ammo += u.ammo, i.fuel += u.fuel, i.steel += u.steel, i.baux += u.baux
            }
            for (var l = 0, n = 0; n < this.disassemblyMaterialItems.length; n++) this.disassemblyMaterialItems[n].visible = !1;
            if (0 < i.fuel) {
                var c = this.disassemblyMaterialItems[l];
                c.update(31, i.fuel), c.visible = !0, l++
            }
            if (0 < i.ammo) {
                var c = this.disassemblyMaterialItems[l];
                c.update(32, i.ammo), c.visible = !0, l++
            }
            if (0 < i.steel) {
                var c = this.disassemblyMaterialItems[l];
                c.update(33, i.steel), c.visible = !0, l++
            }
            if (0 < i.baux) {
                var c = this.disassemblyMaterialItems[l];
                c.update(34, i.baux), c.visible = !0, l++
            }
            if (this._icon.texture = PIXI.Texture.EMPTY, 1 < t.length) this._icon.texture = this.textureMatomete, this._icon.scale.set(1, 1); else {
                this._icon.scale.set(.356, .356);
                var r = t[0], h = o.default.model.slot.get(r);
                new _.TaskLoadSlotResource("item_on", this._icon, h.mstID).start()
            }
            this._icon.visible = !0, this.buttonDisassembly.visible = !1, this.downArrowAnimationView.visible = !1, e && (this.buttonDisassembly.visible = !0, this.downArrowAnimationView.visible = !0), this.memSlotIds = t
        }, e.prototype.clearInfo = function () {
            for (var t = 0; t < this.disassemblyMaterialItems.length; t++) this.disassemblyMaterialItems[t].visible = !1;
            this._icon.visible = !1, this.buttonDisassembly.visible = !1, this.downArrowAnimationView.visible = !1
        }, e
    }(PIXI.Container);
    e.SlotDisassemblyConfirm = c
}