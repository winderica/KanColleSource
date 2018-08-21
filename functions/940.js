const function940 = function (t, e, i) {
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
    var o = i(0), r = i(337), s = i(4), a = i(59), _ = i(101), u = i(50), l = i(6), c = i(25), h = i(359),
        p = i(941), d = i(942), f = i(944), y = i(945), v = i(946), g = i(1), m = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._selected_page_no = 1, i._onChangeTab = function (t) {
                    i.update(t, 1)
                }, i._onChangePage = function (t) {
                    i.update(i._selected_category, t)
                }, i._bg = new PIXI.Sprite, i._bg.position.set(0, 35), i.addChild(i._bg), i._title = new PIXI.Sprite, i._title.position.set(56, 53), i.addChild(i._title), i._lines = new PIXI.Graphics, i.addChild(i._lines), i._tabs = new d.AirUnitListTabContainer(i._onChangeTab), i._tabs.x = 36, i.addChild(i._tabs), i._list = new b(e), i._list.position.set(0, 98), i.addChild(i._list), i._pager = new p.AirUnitListPager(i._onChangePage), i._pager.position.set(219, 510), i.addChild(i._pager), i.interactive = !0, i
            }

            return n(e, t), e.prototype.initialize = function () {
                this._bg.texture = c.SALLY_AIRUNIT.getTexture(59), this._title.texture = c.SALLY_AIRUNIT.getTexture(61), this._lines.lineStyle(1, 13945534);
                for (var t = 0; t < 9; t++) this._lines.moveTo(93, 141 + 45 * t), this._lines.lineTo(711, 141 + 45 * t);
                this._tabs.initialize(), this._list.initialize(), this._pager.initialize(), this.update(0, 1)
            }, e.prototype.update = function (t, e) {
                var i = o.default.model.slot.getAirUnitRelocation();
                if (this._selected_category != t) {
                    this._selected_category = t, this._tabs.update(t);
                    var n = h.getEquipTypes(t);
                    this._items = o.default.model.slot.createUnsetList(n);
                    for (var r = 0, s = i; r < s.length; r++) {
                        var a = s[r], _ = o.default.model.slot.get(a);
                        n.indexOf(_.equipTypeSp) >= 0 && this._items.push(_)
                    }
                    u.SlotUtil.sort(this._items, 0, !1)
                } else this._selected_page_no != e && l.SE.play("249");
                this._selected_page_no = e, this._list.update(this._items, this._selected_page_no, i);
                var c = Math.ceil(this._items.length / 9);
                this._pager.update(this._selected_page_no, c)
            }, e.prototype.activate = function () {
                this._tabs.activate(), this._list.activate()
            }, e.prototype.deactivate = function () {
                this._tabs.deactivate(), this._list.deactivate()
            }, e.prototype.dispose = function () {
                this._tabs.dispose(), this._list.dispose()
            }, e
        }(PIXI.Container);
    e.AirUnitList = m;
    var b = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i._items = [];
            for (var n = 0; n < 9; n++) {
                var o = new w(e);
                o.y = 45 * n, i.addChild(o), i._items.push(o)
            }
            return i
        }

        return n(e, t), e.prototype.initialize = function () {
            for (var t = 0, e = this._items; t < e.length; t++) {
                e[t].initialize()
            }
        }, e.prototype.update = function (t, e, i) {
            for (var n = (e - 1) * this._items.length, o = 0; o < this._items.length; o++) {
                var r = this._items[o];
                if (n + o >= t.length) r.visible = !1; else {
                    var s = t[n + o], a = i.indexOf(s.memID) >= 0;
                    r.update(s, a), r.visible = !0
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
    }(PIXI.Container), w = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._name = new s.TextBox(21, 3355443), i._name.position.set(104, 9), i.addChild(i._name), i._name_mask = _.CreateRect.gradientLeftToRight(270, 30, .7, .88), i._name.mask = i._name_mask, i._name.addChild(i._name_mask), i._distance = new s.TextBox(18, 3355443), i._distance.position.set(434, 11), i.addChild(i._distance), i._status = new x, i._status.position.set(477, 5), i.addChild(i._status), i._skill_level = new y.AirPlaneSkillLevel, i._skill_level.position.set(344, 0), i.addChild(i._skill_level), i._level = new v.SlotitemLevel, i._level.position.set(390, 11), i.addChild(i._level), i._icon = new a.IconWeapon, i._icon.position.set(51, -3), i.addChild(i._icon), i._over = new I(e), i._over.position.set(42, 0), i.addChild(i._over), i._relocation = new f.AirUnitListItemRelocationLayer, i._relocation.position.set(42, 0), i.addChild(i._relocation), i
        }

        return n(e, t), e.prototype.initialize = function () {
            this._status.initialize(), this._level.initialize(), this._over.initialize(), this._relocation.initialize()
        }, e.prototype.update = function (t, e) {
            this._name.text = t.name, this._distance.text = t.distance.toString(), this._distance.x = Math.round(450 - this._distance.width / 2), this._skill_level.update(t.skillLevel), this._level.update(t.level), this._icon.update(t.iconType), this._relocation.update(!1), 1 == e ? (this._status.visible = !1, this._over.visible = !1, this._relocation.update(!0)) : (this._status.taiku = t.taiku, this._status.bakusou = t.bakusou, this._status.raisou = t.raisou, 48 == t.equipTypeSp ? this._status.taibaku = t.meichu : this._status.meichu = t.meichu, this._status.visible = !0, this._over.update(t), this._over.visible = !0)
        }, e.prototype.activate = function () {
            this._over.activate()
        }, e.prototype.deactivate = function () {
            this._over.deactivate()
        }, e.prototype.dispose = function () {
            this._over.dispose()
        }, e
    }(PIXI.Container), x = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._imgs = [], e._texts = [];
            for (var i = 0; i < 4; i++) {
                var n = new PIXI.Sprite;
                n.x = 51 * i, e.addChild(n), e._imgs.push(n);
                var o = new s.TextBox(18, 3355443);
                o.y = 17, e.addChild(o), e._texts.push(o)
            }
            return e
        }

        return n(e, t), Object.defineProperty(e.prototype, "taiku", {
            set: function (t) {
                this._texts[0].text = (t > 0 ? "+" : "") + t.toString(), this._texts[0].x = 20 - Math.round(this._texts[0].width / 2)
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "bakusou", {
            set: function (t) {
                this._texts[1].text = (t > 0 ? "+" : "") + t.toString(), this._texts[1].x = 71 - Math.round(this._texts[1].width / 2)
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "raisou", {
            set: function (t) {
                this._texts[2].text = (t > 0 ? "+" : "") + t.toString(), this._texts[2].x = 122 - Math.round(this._texts[2].width / 2)
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "meichu", {
            set: function (t) {
                this._imgs[3].texture = c.SALLY_AIRUNIT.getTexture(84), this._texts[3].text = (t > 0 ? "+" : "") + t.toString(), this._texts[3].x = 172 - Math.round(this._texts[3].width / 2)
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "taibaku", {
            set: function (t) {
                this._imgs[3].texture = c.SALLY_AIRUNIT.getTexture(85), this._texts[3].text = (t > 0 ? "+" : "") + t.toString(), this._texts[3].x = 173 - Math.round(this._texts[3].width / 2)
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function () {
            this._imgs[0].texture = c.SALLY_AIRUNIT.getTexture(81), this._imgs[1].texture = c.SALLY_AIRUNIT.getTexture(82), this._imgs[2].texture = c.SALLY_AIRUNIT.getTexture(83), this._imgs[3].texture = c.SALLY_AIRUNIT.getTexture(84)
        }, e
    }(PIXI.Container), I = function (t) {
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
                new r.SlotItemLockAPI(e).start(function () {
                    i.update(i._data)
                })
            }, i._cb_onSelect = e, i._img = new PIXI.Sprite, i.addChild(i._img), i._lockicon = new PIXI.Sprite, i._lockicon.position.set(638, -3), i.addChild(i._lockicon), i._img.alpha = 0, i.interactive = !0, i._lockicon.interactive = !0, i
        }

        return n(e, t), e.prototype.initialize = function () {
            this._img.texture = c.SALLY_AIRUNIT.getTexture(37), this._img.width = 681, this._img.height = 42
        }, e.prototype.update = function (t) {
            this._data = t, this._locked = t.isLocked(), 1 == this._locked ? (this._lockicon.texture = c.SALLY_AIRUNIT.getTexture(63), this._lockicon.position.set(638, -2), this._lockicon.alpha = 1) : (this._lockicon.texture = c.SALLY_AIRUNIT.getTexture(62), this._lockicon.position.set(638, -3), this._lockicon.alpha = this._img.alpha)
        }, e.prototype.activate = function () {
            1 != this.buttonMode && (this.buttonMode = !0, this.on(g.EventType.MOUSEOVER, this._onMouseOver), this.on(g.EventType.MOUSEOUT, this._onMouseOut), this.on(g.EventType.CLICK, this._onClick), this._lockicon.on(g.EventType.CLICK, this._onClickLockIcon))
        }, e.prototype.deactivate = function () {
            this.buttonMode = !1, this.off(g.EventType.MOUSEOVER, this._onMouseOver), this.off(g.EventType.MOUSEOUT, this._onMouseOut), this.off(g.EventType.CLICK, this._onClick), this._lockicon.off(g.EventType.CLICK, this._onClickLockIcon)
        }, e.prototype.dispose = function () {
            this.deactivate(), this._cb_onSelect = null
        }, e
    }(PIXI.Container)
}