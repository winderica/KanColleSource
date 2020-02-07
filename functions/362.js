const function362 = function (t, e, i) {
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
    var o, r = i(0),
        s = i(38),
        a = i(339),
        _ = i(4),
        u = i(63),
        l = i(128),
        c = i(46),
        h = i(6),
        p = i(26),
        d = i(363),
        f = i(995),
        y = i(996),
        m = i(998),
        g = i(999),
        v = i(1e3),
        b = i(1);
    ! function (t) {
        t[t.NONE = 0] = "NONE", t[t.RELOCATION = 1] = "RELOCATION", t[t.DEPLOYMENT = 2] = "DEPLOYMENT"
    }(o = e.ListType || (e.ListType = {}));
    var w = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._selected_page_no = 1, n._onChangeTab = function (t) {
                n._recordCurrentCategory(t), n.update(t, 1)
            }, n._onChangePage = function (t) {
                n.update(n._selected_category, t)
            }, n._bg = new PIXI.Sprite, n._bg.position.set(0, 35), n.addChild(n._bg), n._title = new PIXI.Sprite, n._title.position.set(56, 53), n.addChild(n._title), n._lines = new PIXI.Graphics, n.addChild(n._lines), n._tabs = new y.AirUnitListTabContainer(n._onChangeTab), n._tabs.x = 36, n.addChild(n._tabs), n._list = new x(e), n._list.position.set(0, 98), n.addChild(n._list), n._pager = new f.AirUnitListPager(n._onChangePage), n._pager.position.set(219, 510), n.addChild(n._pager), n.interactive = !0, n._recordCurrentCategory = i, n
        }
        return n(e, t), e.prototype.initialize = function (t) {
            this._bg.texture = p.SALLY_AIRUNIT.getTexture(60), this._title.texture = p.SALLY_AIRUNIT.getTexture(62), this._lines.lineStyle(1, 13945534);
            for (var e = 0; e < 9; e++) this._lines.moveTo(93, 141 + 45 * e), this._lines.lineTo(711, 141 + 45 * e);
            this._tabs.initialize(), this._list.initialize(), this._pager.initialize(), this.update(t, 1)
        }, e.prototype.update = function (t, e) {
            var i = r.default.model.slot.getAirUnitRelocation();
            if (this._selected_category != t) {
                this._selected_category = t, this._tabs.update(t);
                var n = d.getEquipTypes(t);
                this._items = r.default.model.slot.createUnsetList(n);
                for (var o = 0, s = i; o < s.length; o++) {
                    var a = s[o],
                        _ = r.default.model.slot.get(a);
                    n.indexOf(_.equipTypeSp) >= 0 && this._items.push(_)
                }
                this._deployments = [];
                for (var u = r.default.model.airunit.getAirUnitList(), l = 0, p = u; l < p.length; l++)
                    for (var f = p[l], y = f.squadrons, m = 0, g = y; m < g.length; m++) {
                        var v = g[m];
                        if (!v.isRelocation()) {
                            var _ = r.default.model.slot.get(v.mem_id);
                            if (null == _) continue;
                            this._deployments.push(v.mem_id), n.indexOf(_.equipTypeSp) >= 0 && this._items.push(_)
                        }
                    }
                c.SlotUtil.sort(this._items, 0, !1)
            } else this._selected_page_no != e && h.SE.play("249");
            this._selected_page_no = e, this._list.update(this._items, this._selected_page_no, i, this._deployments);
            var b = Math.ceil(this._items.length / 9);
            this._pager.update(this._selected_page_no, b)
        }, e.prototype.activate = function () {
            this._tabs.activate(), this._list.activate()
        }, e.prototype.deactivate = function () {
            this._tabs.deactivate(), this._list.deactivate()
        }, e.prototype.dispose = function () {
            this.removeChildren(), this._tabs.dispose(), this._list.dispose(), this._pager.dispose()
        }, e
    }(PIXI.Container);
    e.AirUnitList = w;
    var x = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i._items = [];
                for (var n = 0; n < 9; n++) {
                    var o = new I(e);
                    o.y = 45 * n, i.addChild(o), i._items.push(o)
                }
                return i
            }
            return n(e, t), e.prototype.initialize = function () {
                for (var t = 0, e = this._items; t < e.length; t++) {
                    e[t].initialize()
                }
            }, e.prototype.update = function (t, e, i, n) {
                for (var r = (e - 1) * this._items.length, s = 0; s < this._items.length; s++) {
                    var a = this._items[s];
                    if (r + s >= t.length) a.visible = !1;
                    else {
                        var _ = t[r + s],
                            u = o.NONE;
                        i.indexOf(_.memID) >= 0 && (u = o.RELOCATION), n.indexOf(_.memID) >= 0 && (u = o.DEPLOYMENT), a.update(_, u), a.visible = !0
                    }
                }
            }, e.prototype.activate = function () {
                for (var t = 0, e = this._items; t < e.length; t++) {
                    e[t].activate()
                }
            }, e.prototype.deactivate = function () {
                for (var t = 0, e = this._items; t < e.length; t++) {
                    e[t].deactivate()
                }
            }, e.prototype.dispose = function () {
                for (var t = 0, e = this._items; t < e.length; t++) {
                    e[t].dispose()
                }
            }, e
        }(PIXI.Container),
        I = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._name = new _.TextBox(21, 3355443), i._name.position.set(104, 9), i.addChild(i._name), i._name_mask = l.CreateRect.gradientLeftToRight(270, 30, .7, .88), i._name.mask = i._name_mask, i._name.addChild(i._name_mask), i._distance = new _.TextBox(18, 3355443), i._distance.position.set(434, 11), i.addChild(i._distance), i._status = new T, i._status.position.set(477, 5), i.addChild(i._status), i._skill_level = new g.AirPlaneSkillLevel, i._skill_level.position.set(344, 0), i.addChild(i._skill_level), i._level = new v.SlotitemLevel, i._level.position.set(390, 11), i.addChild(i._level), i._icon = new u.IconWeapon, i._icon.position.set(51, -3), i.addChild(i._icon), i._over = new O(e), i._over.position.set(42, 0), i.addChild(i._over), i._extra_layer = new m.AirUnitListItemExtraLayer, i._extra_layer.position.set(42, 0), i.addChild(i._extra_layer), i
            }
            return n(e, t), e.prototype.initialize = function () {
                this._status.initialize(), this._level.initialize(), this._over.initialize(), this._extra_layer.initialize()
            }, e.prototype.update = function (t, e) {
                switch (this._name.text = t.name, this._distance.text = t.distance.toString(), this._distance.x = Math.round(450 - this._distance.width / 2), this._skill_level.update(t.skillLevel), this._level.update(t.level), this._icon.update(t.iconType), this._extra_layer.update(!1, null), this._status.viewStatus(3, !0), e) {
                    case o.NONE:
                        this._status.taiku = t.taiku, this._status.bakusou = t.bakusou, this._status.raisou = t.raisou, t.equipTypeSp == s.EquipType._48_KYOKUCHI_SENTOUKI ? this._status.taibaku = t.meichu : this._status.meichu = t.meichu, this._status.visible = !0, this._over.update(t), this._over.visible = !0;
                        break;
                    case o.RELOCATION:
                        this._status.visible = !1, this._over.visible = !1, this._extra_layer.update(!0, e);
                        break;
                    case o.DEPLOYMENT:
                        this._status.visible = !0, this._status.viewStatus(3, !1), this._status.taiku = t.taiku, this._status.bakusou = t.bakusou, this._status.raisou = t.raisou, this._over.visible = !1, this._extra_layer.update(!0, e)
                }
            }, e.prototype.activate = function () {
                this._over.activate()
            }, e.prototype.deactivate = function () {
                this._over.deactivate()
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._name.destroy(), this._distance.destroy(), this._status.dispose(), this._level.dispose(), this._icon.dispose(), this._over.dispose(), this._extra_layer.dispose()
            }, e
        }(PIXI.Container),
        T = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._imgs = [], e._texts = [];
                for (var i = 0; i < 4; i++) {
                    var n = new PIXI.Sprite;
                    n.x = 51 * i, e.addChild(n), e._imgs.push(n);
                    var o = new _.TextBox(18, 3355443);
                    o.y = 17, e.addChild(o), e._texts.push(o)
                }
                return e
            }
            return n(e, t), Object.defineProperty(e.prototype, "taiku", {
                set: function (t) {
                    this._texts[0].text = (t > 0 ? "+" : "") + t.toString(), this._texts[0].x = 20 - Math.round(this._texts[0].width / 2)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "bakusou", {
                set: function (t) {
                    this._texts[1].text = (t > 0 ? "+" : "") + t.toString(), this._texts[1].x = 71 - Math.round(this._texts[1].width / 2)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "raisou", {
                set: function (t) {
                    this._texts[2].text = (t > 0 ? "+" : "") + t.toString(), this._texts[2].x = 122 - Math.round(this._texts[2].width / 2)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "meichu", {
                set: function (t) {
                    this._imgs[3].texture = p.SALLY_AIRUNIT.getTexture(108), this._texts[3].text = (t > 0 ? "+" : "") + t.toString(), this._texts[3].x = 172 - Math.round(this._texts[3].width / 2)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "taibaku", {
                set: function (t) {
                    this._imgs[3].texture = p.SALLY_AIRUNIT.getTexture(109), this._texts[3].text = (t > 0 ? "+" : "") + t.toString(), this._texts[3].x = 173 - Math.round(this._texts[3].width / 2)
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                this._imgs[0].texture = p.SALLY_AIRUNIT.getTexture(105), this._imgs[1].texture = p.SALLY_AIRUNIT.getTexture(106), this._imgs[2].texture = p.SALLY_AIRUNIT.getTexture(107), this._imgs[3].texture = p.SALLY_AIRUNIT.getTexture(108)
            }, e.prototype.dispose = function () {
                this.removeChildren();
                for (var t = 0, e = this._texts; t < e.length; t++) {
                    e[t].destroy()
                }
            }, e.prototype.viewStatus = function (t, e) {
                this._imgs[t].visible = e, this._texts[t].visible = e
            }, e
        }(PIXI.Container),
        O = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._locked = !1, i._onMouseOver = function () {
                    i._img.alpha = 1, 0 == i._locked && (i._lockicon.alpha = 1)
                }, i._onMouseOut = function () {
                    i._img.alpha = 0, 0 == i._locked && (i._lockicon.alpha = 0)
                }, i._onClick = function () {
                    null != i._cb_onSelect && i._cb_onSelect(i._data)
                }, i._onClickLockIcon = function (t) {
                    t.stopPropagation();
                    var e = i._data.memID;
                    new a.SlotItemLockAPI(e).start(function () {
                        i.update(i._data)
                    })
                }, i._cb_onSelect = e, i._img = new PIXI.Sprite, i.addChild(i._img), i._lockicon = new PIXI.Sprite, i._lockicon.position.set(638, -3), i.addChild(i._lockicon), i._img.alpha = 0, i.interactive = !0, i._lockicon.interactive = !0, i
            }
            return n(e, t), e.prototype.initialize = function () {
                this._img.texture = p.SALLY_AIRUNIT.getTexture(38), this._img.width = 681, this._img.height = 42, this.on(b.EventType.MOUSEOVER, this._onMouseOver), this.on(b.EventType.MOUSEOUT, this._onMouseOut)
            }, e.prototype.update = function (t) {
                this._data = t, this._locked = t.isLocked(), 1 == this._locked ? (this._lockicon.texture = p.SALLY_AIRUNIT.getTexture(64), this._lockicon.position.set(638, -2), this._lockicon.alpha = 1) : (this._lockicon.texture = p.SALLY_AIRUNIT.getTexture(63), this._lockicon.position.set(638, -3), this._lockicon.alpha = this._img.alpha)
            }, e.prototype.activate = function () {
                1 != this.buttonMode && (this.buttonMode = !0, this.on(b.EventType.CLICK, this._onClick), this._lockicon.on(b.EventType.CLICK, this._onClickLockIcon))
            }, e.prototype.deactivate = function () {
                this.buttonMode = !1, this.off(b.EventType.MOUSEOVER, this._onMouseOver), this.off(b.EventType.MOUSEOUT, this._onMouseOut), this.off(b.EventType.CLICK, this._onClick), this._lockicon.off(b.EventType.CLICK, this._onClickLockIcon)
            }, e.prototype.dispose = function () {
                this.deactivate(), this._cb_onSelect = null
            }, e
        }(PIXI.Container)
}