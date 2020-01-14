const function357 = function (t, e, i) {
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
        s = i(26),
        a = i(985),
        _ = i(986),
        u = i(987),
        l = i(988),
        c = i(989),
        h = i(990),
        p = i(991),
        d = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n.NUM_TEXTURE_S = [77, 78, 79, 80, 81, 82, 83, 84, 85, 86], n._activated = !1, n._onMouseDown = function () {
                    null != n._cb_onMouseDown && n._cb_onMouseDown(n._index)
                }, n._onSupply = function () {
                    null != n._cb_onSupply && n._cb_onSupply(n._index)
                }, n._onMouseOver = function () {
                    n._isSlot && (n._distanceLayer.visible = !0)
                }, n._onMouseOut = function () {
                    n._isSlot && (n._distanceLayer.visible = !1)
                }, n._cb_onMouseDown = e, n._cb_onSupply = i, n._isSlot = !1, n._bg = new PIXI.Sprite, n._bg.position.set(11, 23), n.addChild(n._bg), n._banner = new PIXI.Sprite, n._banner.position.set(11, 23), n.addChild(n._banner), n._none_label = new PIXI.Sprite, n.addChild(n._none_label), n._label = new PIXI.Sprite, n._label.position.set(8, 0), n.addChild(n._label), n._name = new PIXI.Sprite, n._name.position.set(93, 0), n.addChild(n._name), n._detail = new _.AirUnitPanelItemDetailInfoPanel, n._detail.position.set(29, 30), n.addChild(n._detail), n._skill = new h.AirUnitPanelItemSkillLevelIcon, n._skill.position.set(128, 24), n.addChild(n._skill), n._fatigue = new u.AirUnitPanelItemFatigueIcon, n._fatigue.position.set(0, 21), n.addChild(n._fatigue), n._level = new l.AirUnitPanelItemLevelIcon, n._level.position.set(167, 54), n.addChild(n._level), n._supply_btn = new p.AirUnitPanelItemSupplyButton(n._onSupply), n._supply_btn.position.set(123, 26), n.addChild(n._supply_btn), n._relocation = new c.AirUnitPanelItemRelocationLayer, n._relocation.position.set(11, 23), n.addChild(n._relocation), n._distanceLayer = new PIXI.Container, n.addChild(n._distanceLayer), n._distanceLayer.visible = !1, n._numText = new PIXI.Sprite(s.SALLY_AIRUNIT.getTexture(133)), n._distanceLayer.addChild(n._numText), n._distance1 = new PIXI.Sprite, n._distanceLayer.addChild(n._distance1), n._distance2 = new PIXI.Sprite, n._distanceLayer.addChild(n._distance2), n._bg.interactive = !0, n
            }
            return n(e, t), Object.defineProperty(e.prototype, "mst_id", {
                get: function () {
                    return this._mst_id
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t) {
                switch (this._index = t, this._bg.texture = s.SALLY_AIRUNIT.getTexture(66), this._none_label.texture = s.SALLY_AIRUNIT.getTexture(142), this._none_label.position.set(138, 44), t) {
                    case 0:
                        this._label.texture = s.SALLY_AIRUNIT.getTexture(137);
                        break;
                    case 1:
                        this._label.texture = s.SALLY_AIRUNIT.getTexture(138);
                        break;
                    case 2:
                        this._label.texture = s.SALLY_AIRUNIT.getTexture(139);
                        break;
                    case 3:
                        this._label.texture = s.SALLY_AIRUNIT.getTexture(140);
                        break;
                    default:
                        this._label.texture = PIXI.Texture.EMPTY
                }
                this._detail.initialize(), this._level.initialize(), this._supply_btn.initialize(), this._relocation.initialize()
            }, e.prototype.update = function (t) {
                var e = this;
                if (null != this._load_task && this._load_task.cancel(), null == t || -1 == t.mst_id) return this._showNone(), void(1 == this._activated && this._activate());
                if (this._mst_id = t.mst_id, this._bg.texture = s.SALLY_AIRUNIT.getTexture(66), this._none_label.visible = !1, this._distanceLayer.visible = !1, this._relocation.update(!1), 1 == t.isRelocation()) this._isSlot = !1, this._detail.visible = !1, this._skill.update(0), this._fatigue.update(1), this._level.update(0), this._supply_btn.update(!1), this._relocation.update(!0), 1 == this._activated && this._deactivate(), this._distanceLayer.visible = !1;
                else {
                    this._isSlot = !0, this._detail.update(t.count, t.countMax), this._detail.visible = !0, this._skill.update(t.skill_level), this._fatigue.update(t.fatigue), this._level.update(t.level);
                    var i = t.count < t.countMax;
                    this._supply_btn.update(i), 1 == this._activated && this._activate();
                    var n = o.default.model.slot.getMst(this._mst_id),
                        r = n.distance;
                    if (this._distance2.visible = !1, r >= 10) {
                        var _ = r.toString().split(""),
                            u = parseInt(_[0]),
                            l = parseInt(_[1]);
                        this._numText.position.set(213, 68), this._distance2.visible = !0, this._distance1.position.set(288, 63), this._distance2.position.set(299, 63), this._distance1.texture = s.SALLY_AIRUNIT.getTexture(this.NUM_TEXTURE_S[u]), this._distance2.texture = s.SALLY_AIRUNIT.getTexture(this.NUM_TEXTURE_S[l])
                    } else this._numText.position.set(222, 68), this._distance1.position.set(299, 63), this._distance1.texture = s.SALLY_AIRUNIT.getTexture(this.NUM_TEXTURE_S[r])
                }
                this._load_task = new a.TaskAirUnitImageLoader(this._mst_id), this._load_task.start(function () {
                    e._load_task = null, e._banner.texture = o.default.resources.getSlotitem(e._mst_id, "airunit_banner"), e._name.texture = o.default.resources.getSlotitem(e._mst_id, "airunit_name"), e._name.visible = !0
                })
            }, e.prototype.activate = function () {
                this._activated = !0, this._activate()
            }, e.prototype.deactivate = function () {
                this._activated = !1, this._deactivate()
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._distanceLayer.removeChildren(), this.deactivate(), this._detail.dispose(), this._supply_btn.dispose(), this._relocation.dispose(), null != this._load_task && this._load_task.cancel(), this._cb_onMouseDown = null, this._cb_onSupply = null
            }, e.prototype.isNoneData = function () {
                return this._none_label.visible
            }, e.prototype.isRelocation = function () {
                return this._relocation.visible
            }, e.prototype._activate = function () {
                1 != this._bg.buttonMode && 1 != this._relocation.visible && (this._bg.buttonMode = !0, this._bg.on(r.EventType.MOUSEDOWN, this._onMouseDown), this._bg.on(r.EventType.MOUSEOVER, this._onMouseOver), this._bg.on(r.EventType.MOUSEOUT, this._onMouseOut))
            }, e.prototype._deactivate = function () {
                this._bg.buttonMode = !1, this._bg.off(r.EventType.MOUSEDOWN), this._bg.off(r.EventType.MOUSEOVER), this._bg.off(r.EventType.MOUSEOUT), this._distanceLayer.visible = !1
            }, e.prototype._showNone = function () {
                this._isSlot = !1, this._bg.texture = s.SALLY_AIRUNIT.getTexture(66), this._banner.texture = PIXI.Texture.EMPTY, this._none_label.visible = !0, this._name.visible = !1, this._detail.visible = !1, this._skill.update(0), this._fatigue.update(1), this._level.update(0), this._supply_btn.update(!1), this._relocation.update(!1), this._distanceLayer.visible = !1
            }, e.prototype.contains = function (t, e) {
                return t >= this._bg.x && t <= this._bg.x + this._bg.width && e >= this._bg.y && e <= this._bg.y + this._bg.height
            }, e
        }(PIXI.Container);
    e.AirUnitPanelItem = d
}