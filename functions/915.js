const function915 = function (t, e, i) {
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
        s = i(114),
        a = i(32),
        _ = i(116),
        l = i(4),
        u = i(35),
        c = i(916),
        h = i(349),
        p = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._onClickDisassembly = function () {
                    e.onClickStart(e.checkedMemShipIdList, e.dissemblyType)
                }, e._onClickDisassemblyType = function () {
                    var t, i = e.typeContainer.getChildByName(c.DisassemblyTypeName.KAITAI),
                        n = e.typeContainer.getChildByName(c.DisassemblyTypeName.HOKAN),
                        o = e.typeContainer.getChildByName(c.DisassemblyTypeName.BTN),
                        r = 0,
                        s = 0,
                        a = createjs.Ease.linear;
                    switch (e.dissemblyType) {
                        case 0:
                            r = 1, t = c.DisassemblyTypeMessage.KAITAI, e.dissemblyType = 1;
                            break;
                        case 1:
                            s = 1, t = c.DisassemblyTypeMessage.HOKAN, e.dissemblyType = 0
                    }
                    createjs.Tween.get(o).to({
                        x: t.x
                    }, 150 + Math.floor(50), a).call(function () {
                        e.textAlert.text = t.text, e.textAlert.style.fill = t.color, e._updateMaterialNumber()
                    }), createjs.Tween.get(i).to({
                        alpha: r
                    }, 150, a), createjs.Tween.get(n).to({
                        alpha: s
                    }, 150, a)
                };
                var i = new PIXI.Sprite(u.ARSENAL_MAIN.getTexture(62));
                e.interactive = !0, e.addChild(i);
                var n = new PIXI.Sprite(u.ARSENAL_MAIN.getTexture(63));
                n.position.set(21, 32);
                var p = function (t) {
                        var e = null,
                            i = t;
                        switch (t) {
                            case 0:
                                e = c.DisassemblyTypeMessage.HOKAN;
                                break;
                            case 1:
                            default:
                                i = 1, e = c.DisassemblyTypeMessage.KAITAI
                        }
                        return {
                            type: i,
                            data: e
                        }
                    }(o.default.model.basic.getDestroyShipSlotType()),
                    d = p.data;
                e.dissemblyType = p.type, e.typeContainer = new PIXI.Container, e.typeContainer.position.set(154, 30), e.typeContainer.buttonMode = !0, e.typeContainer.interactive = !0, e.typeContainer.on(r.EventType.CLICK, e._onClickDisassemblyType);
                var f = new PIXI.Sprite(u.ARSENAL_MAIN.getTexture(135)),
                    y = new PIXI.Sprite(u.ARSENAL_MAIN.getTexture(137));
                y.position.set(50, 0), y.name = c.DisassemblyTypeName.KAITAI, y.alpha = 1 === p.type ? 1 : 0;
                var m = new PIXI.Sprite(u.ARSENAL_MAIN.getTexture(138));
                m.position.set(65, 0), m.name = c.DisassemblyTypeName.HOKAN, m.alpha = 0 === p.type ? 1 : 0;
                var g = new PIXI.Sprite(u.ARSENAL_MAIN.getTexture(136));
                g.position.set(d.x, 2), g.name = c.DisassemblyTypeName.BTN, e.typeContainer.addChild(f, y, m, g), e.textAlert = new l.TextBox(15, d.color);
                var v = new PIXI.Sprite(u.ARSENAL_MAIN.getTexture(29));
                e.buttonDisassembly = new _.SimpleButton(u.ARSENAL_MAIN.getTexture(28), u.ARSENAL_MAIN.getTexture(30));
                var b = new s.DisableDownArrowAnimationView;
                return e.downArrowAnimationView = new s.DownArrowAnimationView, e._shipBanner = new a.ShipBanner, e.disassemblyMaterialItems = new Array, e.multiDisassemblyIcon = new PIXI.Sprite(u.ARSENAL_MAIN.getTexture(77)), e.disassemblyMaterialItems.push(new h.DisassemblyMaterialItem), e.disassemblyMaterialItems.push(new h.DisassemblyMaterialItem), e.disassemblyMaterialItems.push(new h.DisassemblyMaterialItem), e.disassemblyMaterialItems.push(new h.DisassemblyMaterialItem), e.disassemblyMaterialItems[0].position.set(15, 84), e.disassemblyMaterialItems[1].position.set(15, 139), e.disassemblyMaterialItems[2].position.set(15, 195), e.disassemblyMaterialItems[3].position.set(15, 250), e.textAlert.text = d.text, e.textAlert.position.set(24, 63), b.position.set(127, 450), e.downArrowAnimationView.position.set(127, 450), v.position.set(28, 496), e.buttonDisassembly.position.set(28, 496), e.buttonDisassembly.on(r.EventType.CLICK, e._onClickDisassembly), e._shipBanner.position.set(21, 345), e.multiDisassemblyIcon.position.set(60, 302), e.container = new PIXI.Container, e.container.name = "container", e.container.addChild(e.typeContainer, e.disassemblyMaterialItems[0], e.disassemblyMaterialItems[1], e.disassemblyMaterialItems[2], e.disassemblyMaterialItems[3], e.textAlert, e.shipBanner, e.multiDisassemblyIcon, v, b, e.downArrowAnimationView, e.buttonDisassembly), e.addChild(n, e.container), e.visibleContainer(!1), e.checkedMemShipIdList = [], e
            }
            return n(e, t), Object.defineProperty(e.prototype, "shipBanner", {
                get: function () {
                    return this._shipBanner
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dispose = function () {
                this.removeChildren(), this.container.removeChildren(), this.typeContainer.off(r.EventType.CLICK, this._onClickDisassemblyType), this.typeContainer.removeChildren();
                for (var t = 0; t < this.disassemblyMaterialItems.length; t++) this.disassemblyMaterialItems[t].dispose(), this.disassemblyMaterialItems[t] = null;
                this._shipBanner.dispose(), this.buttonDisassembly.dispose(), this.downArrowAnimationView.dispose(), this.textAlert.destroy(), this.disassemblyMaterialItems = null, this._shipBanner = null, this.buttonDisassembly = null, this.downArrowAnimationView = null, this.onClickStart = null, this.multiDisassemblyIcon = null, this.checkedMemShipIdList = null, this.dissemblyType = null, this.typeContainer = null, this.container = null
            }, e.prototype.visibleContainer = function (t) {
                this.getChildByName("container").visible = t
            }, e.prototype.update = function (t, e, i, n) {
                switch (this.memShipId = t.memID, n.length) {
                    case 0:
                        this.container.visible = !1;
                        break;
                    case 1:
                        this.container.visible = !0, this.multiDisassemblyIcon.visible = !1;
                        var r = o.default.model.ship.get(n[0]);
                        this._shipBanner.update(r, e), this._shipBanner.visible = !0, this.buttonDisassembly.visible = i, this.downArrowAnimationView.visible = i;
                        break;
                    default:
                        this.container.visible = !0, this._shipBanner.visible = !1, this.multiDisassemblyIcon.visible = !0, this.buttonDisassembly.visible = i, this.downArrowAnimationView.visible = i
                }
                this.checkedMemShipIdList = n, this._updateMaterialNumber()
            }, e.prototype._updateMaterialNumber = function () {
                for (var t = {
                        fuel: 0,
                        ammo: 0,
                        steel: 0,
                        baux: 0
                    }, e = 0, i = this.checkedMemShipIdList.length; e < i; e++) {
                    var n = o.default.model.ship.get(this.checkedMemShipIdList[e]),
                        r = n.getMaterialForBroken(this.dissemblyType);
                    t.fuel += r.fuel, t.ammo += r.ammo, t.steel += r.steel, t.baux += r.baux
                }
                for (var s = 0, a = this.disassemblyMaterialItems.length; s < a; s++) this.disassemblyMaterialItems[s].visible = !1;
                var _ = 0;
                if (t.fuel > 0) {
                    var l = this.disassemblyMaterialItems[_];
                    l.update(31, t.fuel), l.visible = !0, _++
                }
                if (t.ammo > 0) {
                    var l = this.disassemblyMaterialItems[_];
                    l.update(32, t.ammo), l.visible = !0, _++
                }
                if (t.steel > 0) {
                    var l = this.disassemblyMaterialItems[_];
                    l.update(33, t.steel), l.visible = !0, _++
                }
                if (t.baux > 0) {
                    var l = this.disassemblyMaterialItems[_];
                    l.update(34, t.baux), l.visible = !0
                }
            }, e
        }(PIXI.Container);
    e.ShipDisassemblyConfirm = p
}