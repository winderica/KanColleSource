const function355 = function (t, e, i) {
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
    var o = i(0), r = i(1), s = i(25), a = i(930), _ = i(931), u = i(932), l = i(933), c = i(934), h = i(935),
        p = i(936), d = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._activated = !1, n._onMouseDown = function () {
                    null != n._cb_onMouseDown && n._cb_onMouseDown(n._index)
                }, n._onSupply = function () {
                    null != n._cb_onSupply && n._cb_onSupply(n._index)
                }, n._cb_onMouseDown = e, n._cb_onSupply = i, n._bg = new PIXI.Sprite, n._bg.position.set(11, 23), n.addChild(n._bg), n._banner = new PIXI.Sprite, n._banner.position.set(11, 23), n.addChild(n._banner), n._none_label = new PIXI.Sprite, n.addChild(n._none_label), n._label = new PIXI.Sprite, n._label.position.set(8, 0), n.addChild(n._label), n._name = new PIXI.Sprite, n._name.position.set(93, 0), n.addChild(n._name), n._detail = new _.AirUnitPanelItemDetailInfoPanel, n._detail.position.set(29, 30), n.addChild(n._detail), n._skill = new h.AirUnitPanelItemSkillLevelIcon, n._skill.position.set(128, 24), n.addChild(n._skill), n._fatigue = new u.AirUnitPanelItemFatigueIcon, n._fatigue.position.set(0, 21), n.addChild(n._fatigue), n._level = new l.AirUnitPanelItemLevelIcon, n._level.position.set(167, 54), n.addChild(n._level), n._supply_btn = new p.AirUnitPanelItemSupplyButton(n._onSupply), n._supply_btn.position.set(123, 26), n.addChild(n._supply_btn), n._relocation = new c.AirUnitPanelItemRelocationLayer, n._relocation.position.set(11, 23), n.addChild(n._relocation), n._bg.interactive = !0, n
            }

            return n(e, t), Object.defineProperty(e.prototype, "mst_id", {
                get: function () {
                    return this._mst_id
                }, enumerable: !0, configurable: !0
            }), e.prototype.initialize = function (t) {
                switch (this._index = t, this._bg.texture = s.SALLY_AIRUNIT.getTexture(65), this.hitArea = new PIXI.Rectangle(this._bg.x, this._bg.y, this._bg.width, this._bg.height), this._none_label.texture = s.SALLY_AIRUNIT.getTexture(114), this._none_label.position.set(138, 44), t) {
                    case 0:
                        this._label.texture = s.SALLY_AIRUNIT.getTexture(109);
                        break;
                    case 1:
                        this._label.texture = s.SALLY_AIRUNIT.getTexture(110);
                        break;
                    case 2:
                        this._label.texture = s.SALLY_AIRUNIT.getTexture(111);
                        break;
                    case 3:
                        this._label.texture = s.SALLY_AIRUNIT.getTexture(112);
                        break;
                    default:
                        this._label.texture = PIXI.Texture.EMPTY
                }
                this._detail.initialize(), this._level.initialize(), this._supply_btn.initialize(), this._relocation.initialize()
            }, e.prototype.update = function (t) {
                var e = this;
                if (null != this._load_task && this._load_task.cancel(), null == t || -1 == t.mst_id) return this._showNone(), void(1 == this._activated && this._activate());
                if (this._mst_id = t.mst_id, this._bg.texture = s.SALLY_AIRUNIT.getTexture(65), this._none_label.visible = !1, this._relocation.update(!1), 1 == t.isRelocation()) this._detail.visible = !1, this._skill.update(0), this._fatigue.update(1), this._level.update(0), this._supply_btn.update(!1), this._relocation.update(!0), 1 == this._activated && this._deactivate(); else {
                    this._detail.update(t.count, t.countMax), this._detail.visible = !0, this._skill.update(t.skill_level), this._fatigue.update(t.fatigue), this._level.update(t.level);
                    var i = t.count < t.countMax;
                    this._supply_btn.update(i), 1 == this._activated && this._activate()
                }
                this._load_task = new a.TaskAirUnitImageLoader(this._mst_id), this._load_task.start(function () {
                    e._load_task = null, e._banner.texture = o.default.resources.getSlotitem(e._mst_id, "airunit_banner"), e._name.texture = o.default.resources.getSlotitem(e._mst_id, "airunit_name"), e._name.visible = !0
                })
            }, e.prototype.activate = function () {
                this._activated = !0, this._activate()
            }, e.prototype.deactivate = function () {
                this._activated = !1, this._deactivate()
            }, e.prototype.dispose = function () {
                this.deactivate(), null != this._load_task && this._load_task.cancel(), this._cb_onMouseDown = null, this._cb_onSupply = null
            }, e.prototype.isNoneData = function () {
                return this._none_label.visible
            }, e.prototype.isRelocation = function () {
                return this._relocation.visible
            }, e.prototype._activate = function () {
                1 != this._bg.buttonMode && 1 != this._relocation.visible && (this._bg.buttonMode = !0, this._bg.on(r.EventType.MOUSEDOWN, this._onMouseDown))
            }, e.prototype._deactivate = function () {
                this._bg.buttonMode = !1, this._bg.off(r.EventType.MOUSEDOWN, this._onMouseDown)
            }, e.prototype._showNone = function () {
                this._bg.texture = s.SALLY_AIRUNIT.getTexture(65), this._banner.texture = PIXI.Texture.EMPTY, this._none_label.visible = !0, this._name.visible = !1, this._detail.visible = !1, this._skill.update(0), this._fatigue.update(1), this._level.update(0), this._supply_btn.update(!1), this._relocation.update(!1)
            }, e
        }(PIXI.Container);
    e.AirUnitPanelItem = d
}