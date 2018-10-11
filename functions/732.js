const function732 = function (t, e, i) {
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
    var o = i(3), r = i(324), s = i(4), a = i(212), _ = i(158), u = i(108), l = i(69), c = i(159), h = i(13),
        p = i(1), d = function (t) {
            function e(e, i, n) {
                var s = t.call(this) || this;
                if (s.FILTER_TAB_NUM = 8, s.ITEM_NUM = 10, s._onClickListItem = function (t) {
                    s.onClickItem(t)
                }, s._onClicHeart = function (t) {
                    s.onClickLock(t)
                }, s._onClickDetach = function () {
                    s.onClickDetach()
                }, s.onClickFilter = function () {
                    for (var t = [], e = 0, i = 0; i < s.filterBtns.length; i++) s.filterBtns[i].isFilter ? t.push(s.filterBtns[i].type) : e++;
                    s.onFilter(t), s.updateSelectAll(e)
                }, s.onClickTxtSwitch = function () {
                    s._japanese = !s._japanese, s.setFilterText()
                }, s.onClickSelectAll = function () {
                    for (var t = !0, e = 0; e < s.filterBtns.length; e++) if (!s.filterBtns[e].isFilter) {
                        t = !1;
                        break
                    }
                    t ? s.filterBtns.forEach(function (t) {
                        t.changeFilter()
                    }) : s.filterBtns.forEach(function (t) {
                        t.isFilter || t.changeFilter()
                    }), s.onClickFilter()
                }, s.onFilter = n, s._japanese = i, null == e || e.length != s.FILTER_TAB_NUM) {
                    for (e = []; e.length < s.FILTER_TAB_NUM;) e.push(!0);
                    s._japanese = !0
                }
                var a = new PIXI.Sprite(r.ORGANIZE_FILTER.getTexture(2)),
                    _ = new PIXI.Sprite(r.ORGANIZE_FILTER.getTexture(0)),
                    u = new PIXI.Sprite(r.ORGANIZE_FILTER.getTexture(44)),
                    l = new PIXI.Sprite(o.COMMON_MAIN.getTexture(0));
                s.allFilterTxt = new PIXI.Sprite(r.ORGANIZE_FILTER.getTexture(45)), s.allFilterTxt.position.set(240, 265), s.allFilterTxt.visible = !1, s.txtSwitchBase = new PIXI.Sprite(r.ORGANIZE_FILTER.getTexture(46)), s.txtSwitch = new PIXI.Sprite(r.ORGANIZE_FILTER.getTexture(48)), s.txtSwitchBase.interactive = s.txtSwitchBase.buttonMode = !0, s.txtSwitchBase.addListener(p.EventType.CLICK, s.onClickTxtSwitch), s.txtSwitchBase.position.set(51, 41), s.txtSwitch.position.set(53, 43), s.allSelectBase = new PIXI.Sprite(r.ORGANIZE_FILTER.getTexture(4)), s.allSelect = new PIXI.Sprite(r.ORGANIZE_FILTER.getTexture(5)), s.allSelectBase.interactive = s.allSelectBase.buttonMode = !0, s.allSelectBase.addListener(p.EventType.CLICK, s.onClickSelectAll), s.allSelectBase.position.set(594, 15), s.allSelect.position.set(598, 19), s.detach = new PIXI.Sprite(r.ORGANIZE_FILTER.getTexture(42)), s.detach.interactive = s.detach.buttonMode = !0, s.detach.addListener(p.EventType.MOUSEOVER, function () {
                    s.detach.texture = r.ORGANIZE_FILTER.getTexture(43)
                }), s.detach.addListener(p.EventType.MOUSEOUT, function () {
                    s.detach.texture = r.ORGANIZE_FILTER.getTexture(42)
                }), s.detach.addListener(p.EventType.CLICK, s._onClickDetach), s.filterBtns = new Array(s.FILTER_TAB_NUM), s.filterBtns[0] = new y(0, e[0]), s.filterBtns[1] = new y(1, e[1]), s.filterBtns[2] = new y(2, e[2]), s.filterBtns[3] = new y(3, e[3]), s.filterBtns[4] = new y(4, e[4]), s.filterBtns[5] = new y(5, e[5]), s.filterBtns[6] = new y(6, e[6]), s.filterBtns[7] = new y(7, e[7]), s.filterBtns[0].position.set(72, 13), s.filterBtns[1].position.set(138, 13), s.filterBtns[2].position.set(204, 13), s.filterBtns[3].position.set(268, 13), s.filterBtns[4].position.set(332, 13), s.filterBtns[5].position.set(396, 13), s.filterBtns[6].position.set(460, 13), s.filterBtns[7].position.set(524, 13), s.filterBtns.forEach(function (t) {
                    t.setOnClick(s.onClickFilter)
                }), s.setFilterText(), s.lineLayer = new PIXI.Container, s.listItems = new Array;
                for (var c = 0; c < s.ITEM_NUM; c++) {
                    var h = new f;
                    h.onClickItem = s._onClickListItem, h.onClickLock = s._onClicHeart, h.x = 57, h.y = 40 + 43 * (c + 1), s.listItems.push(h);
                    var d = new PIXI.Sprite(r.ORGANIZE_FILTER.getTexture(1));
                    d.anchor.set(0, 1), d.x = h.x, d.y = h.y + 43, s.lineLayer.addChild(d)
                }
                _.position.set(57, 46), s.detach.position.set(594, 522), u.position.set(0, -33), l.position.set(22, 10), a.interactive = !0;
                for (var v = 0, c = 0; c < e.length; c++) e[c] || v++;
                return s.updateSelectAll(v), s.allFilterTxt.visible = v == e.length, s.lineLayer.visible = v != e.length, u.addChild(l), s.addChild(a, s.detach, u, _, s.allFilterTxt), s.filterBtns.forEach(function (t) {
                    return s.addChild(t)
                }), s.addChild(s.lineLayer), s.listItems.forEach(function (t) {
                    return s.addChild(t)
                }), s.addChild(s.txtSwitchBase, s.txtSwitch, s.allSelectBase, s.allSelect), s
            }

            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren();
                for (var t = 0; t < this.filterBtns.length; t++) this.filterBtns[t].dispose(), this.filterBtns[t] = null;
                for (var t = 0; t < this.listItems.length; t++) this.listItems[t].dispose(), this.listItems[t] = null;
                this.lineLayer.removeChildren(), this.detach = null, this.itemCount = null, this.listItems = null, this.filterBtns = null, this.allFilterTxt = null, this.txtSwitchBase = null, this.txtSwitch = null, this.allSelectBase = null, this.allSelect = null, this.lineLayer = null, this.onClickItem = null, this.onClickLock = null, this.onClickDetach = null, this.onFilter = null, this._japanese = null
            }, e.prototype.getFilterStatus = function () {
                return this.filterBtns.map(function (t) {
                    return t.isFilter
                })
            }, e.prototype.isJapanese = function () {
                return this._japanese
            }, e.prototype.hideDetach = function () {
                this.detach.visible = !1
            }, e.prototype.showDetach = function () {
                this.detach.visible = !0
            }, e.prototype.update = function (t, e, i) {
                var n = this.listItems[t];
                n.update(e.memID, e.shipTypeName, e.name, e.level, e.hpNow, e.hpMax, e.karyoku, e.raisou, e.taiku, e.speed, e.isLocked(), i, 50 <= e.tired, e.isMarriage()), n.visible = !0
            }, e.prototype.hide = function (t) {
                this.listItems[t].visible = !1
            }, e.prototype.updateSelectAll = function (t) {
                var e = r.ORGANIZE_FILTER.getTexture(t <= 0 ? 5 : 3);
                this.allSelect.texture = e
            }, e.prototype.getOnFilter = function () {
                for (var t = [], e = 0; e < this.filterBtns.length; e++) this.filterBtns[e].isFilter && t.push(this.filterBtns[e].type);
                return t
            }, e.prototype.setExistLineUI = function (t) {
                0 == t ? (this.allFilterTxt.visible = !0, this.lineLayer.visible = !1) : (this.allFilterTxt.visible = !1, this.lineLayer.visible = !0)
            }, e.prototype.setFilterText = function () {
                this._japanese ? (this.txtSwitch.texture = r.ORGANIZE_FILTER.getTexture(48), this.filterBtns[0].setTexture(r.ORGANIZE_FILTER.getTexture(10), r.ORGANIZE_FILTER.getTexture(11)), this.filterBtns[1].setTexture(r.ORGANIZE_FILTER.getTexture(14), r.ORGANIZE_FILTER.getTexture(15)), this.filterBtns[2].setTexture(r.ORGANIZE_FILTER.getTexture(18), r.ORGANIZE_FILTER.getTexture(19)), this.filterBtns[3].setTexture(r.ORGANIZE_FILTER.getTexture(22), r.ORGANIZE_FILTER.getTexture(23)), this.filterBtns[4].setTexture(r.ORGANIZE_FILTER.getTexture(26), r.ORGANIZE_FILTER.getTexture(27)), this.filterBtns[5].setTexture(r.ORGANIZE_FILTER.getTexture(30), r.ORGANIZE_FILTER.getTexture(31)), this.filterBtns[6].setTexture(r.ORGANIZE_FILTER.getTexture(34), r.ORGANIZE_FILTER.getTexture(35)), this.filterBtns[7].setTexture(r.ORGANIZE_FILTER.getTexture(38), r.ORGANIZE_FILTER.getTexture(39))) : (this.txtSwitch.texture = r.ORGANIZE_FILTER.getTexture(47), this.filterBtns[0].setTexture(r.ORGANIZE_FILTER.getTexture(12), r.ORGANIZE_FILTER.getTexture(13)), this.filterBtns[1].setTexture(r.ORGANIZE_FILTER.getTexture(16), r.ORGANIZE_FILTER.getTexture(17)), this.filterBtns[2].setTexture(r.ORGANIZE_FILTER.getTexture(20), r.ORGANIZE_FILTER.getTexture(21)), this.filterBtns[3].setTexture(r.ORGANIZE_FILTER.getTexture(24), r.ORGANIZE_FILTER.getTexture(25)), this.filterBtns[4].setTexture(r.ORGANIZE_FILTER.getTexture(28), r.ORGANIZE_FILTER.getTexture(29)), this.filterBtns[5].setTexture(r.ORGANIZE_FILTER.getTexture(32), r.ORGANIZE_FILTER.getTexture(33)), this.filterBtns[6].setTexture(r.ORGANIZE_FILTER.getTexture(36), r.ORGANIZE_FILTER.getTexture(37)), this.filterBtns[7].setTexture(r.ORGANIZE_FILTER.getTexture(40), r.ORGANIZE_FILTER.getTexture(41)))
            }, e
        }(PIXI.Container);
    e.ShipChoiceView = d;
    var f = function (t) {
        function e() {
            var e = t.call(this) || this;
            e.locked = !1, e.onMouseOver = function () {
                e.containerTypeAndName.cacheAsBitmap = !1, e.textLevel.style.fill = e.textName.style.fill = e.textTyku.style.fill = e.textHoug.style.fill = e.textRaig.style.fill = e.textTaik.style.fill = e.textType.style.fill = 16777215, e.background.visible = !0, 0 == e.locked && (e.lockedHeart.alpha = 1), e.containerTypeAndName.cacheAsBitmap = !0
            }, e.onMouseOut = function () {
                e.containerTypeAndName.cacheAsBitmap = !1, e.textLevel.style.fill = e.mouseoutLevelColor, e.textName.style.fill = e.textTyku.style.fill = e.textHoug.style.fill = e.textRaig.style.fill = e.textTaik.style.fill = e.textType.style.fill = 5523516, e.background.visible = !1, 0 == e.locked && (e.lockedHeart.alpha = 0), e.containerTypeAndName.cacheAsBitmap = !0
            }, e._onClickHitArea = function () {
                e.onClickItem(e.memShipId)
            }, e._onClickHeart = function () {
                e.onClickLock(e.memShipId)
            }, e.textureLockOn = o.ORGANIZE_MAIN.getTexture(42), e.textureLockOff = o.ORGANIZE_MAIN.getTexture(41);
            e.shipInDeckFlag = new c.ShipInDeckFlag, e.textType = new s.TextBox(18, 5523516), e.textLevel = new s.TextBox(21, 5523516), e.textTyku = new s.TextBox(17, 5523516), e.textHoug = new s.TextBox(17, 5523516), e.textRaig = new s.TextBox(17, 5523516), e.textTaik = new s.TextBox(17, 5523516), e.ring = new l.RingSmall, e.sokuryoku = new a.ShipSpeedImage, e.lockedHeart = new PIXI.Sprite, e.hpGauge = new u.HpGaugeView, e.background = new PIXI.Sprite(o.COMMON_MAIN.getTexture(17));
            var i = new v, n = new v, r = new v;
            e.kirakira = new Array;
            var _ = Math.floor(21) + 1;
            e.background.width = 538, e.background.position.set(0, _), e.background.visible = !1, e.lockedHeart.interactive = e.lockedHeart.buttonMode = !0, e.textLevel.position.set(286, Math.floor(_ - e.textLevel.height / 2)), e.textTyku.position.set(342, Math.floor(_ - e.textTyku.height / 2)), e.textHoug.position.set(388, Math.floor(_ - e.textHoug.height / 2)), e.textRaig.position.set(436, Math.floor(_ - e.textRaig.height / 2)), e.textTaik.position.set(483, Math.floor(_ - e.textTaik.height / 2)), e.sokuryoku.position.set(511, _), e.lockedHeart.position.set(558, _), e.shipInDeckFlag.position.set(-15, _), e.shipInDeckFlag.scale.set(.8, .8), e.hpGauge.position.set(489, 34), e.ring.initialize(), e.ring.position.set(579, 6), e.background.anchor.set(0, .5), e.hpGauge.scale.set(1, .8), e.textLevel.anchor.set(1, 0), e.textTyku.anchor.set(1, 0), e.textHoug.anchor.set(1, 0), e.textRaig.anchor.set(1, 0), e.textTaik.anchor.set(1, 0), e.sokuryoku.anchor.set(.5, .5), e.lockedHeart.anchor.set(.5, .5), e.shipInDeckFlag.anchor.set(.5, .5), e.containerTypeAndName = new PIXI.Container, e.textName = new s.TextBox(20, 5523516);
            var d = h.CreateRect.gradientLeftToRight(240, 44, .85, .9);
            return e.containerTypeAndName.position.set(8, 0), e.textType.anchor.set(0, 0), e.textType.position.y = Math.floor(_ - e.textType.height / 2), e.textName.anchor.set(0, 0), e.textName.position.y = Math.floor(_ - e.textName.height / 2), e.containerTypeAndName.addChild(e.textType, e.textName, d), e.containerTypeAndName.mask = d, e.kirakira.push(i, n, r), i.position.set(483, 27), n.position.set(525, 27), r.position.set(570, 27), e.itemHitArea = new PIXI.Graphics, e.itemHitArea.beginFill(0, 0), e.itemHitArea.drawRect(0, 0, e.background.width, e.background.height), e.itemHitArea.endFill(), e.itemHitArea.on(p.EventType.MOUSEOVER, e.onMouseOver), e.itemHitArea.on(p.EventType.MOUSEOUT, e.onMouseOut), e.itemHitArea.on(p.EventType.CLICK, e._onClickHitArea), e.lockedHeart.on(p.EventType.MOUSEOVER, e.onMouseOver), e.lockedHeart.on(p.EventType.MOUSEOUT, e.onMouseOut), e.lockedHeart.on(p.EventType.CLICK, e._onClickHeart), e.itemHitArea.interactive = !0, e.ring.activate(), e.addChild(e.background, e.containerTypeAndName, e.textLevel, e.textTyku, e.textHoug, e.textRaig, e.textTaik, e.sokuryoku, e.shipInDeckFlag, e.hpGauge, i, n, r, e.ring, e.lockedHeart, e.itemHitArea), e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.removeChildren(), this.sokuryoku.dispose(), this.hpGauge.dispose();
            for (var t = 0; t < this.kirakira.length; t++) this.kirakira[t].dispose(), this.kirakira[t] = null;
            this.containerTypeAndName.cacheAsBitmap = !1, this.containerTypeAndName.removeChildren(), this.containerTypeAndName.mask = null, this.containerTypeAndName = null, this.ring.dispose(), this.itemHitArea.off(p.EventType.MOUSEOVER), this.itemHitArea.off(p.EventType.MOUSEOUT), this.itemHitArea.off(p.EventType.CLICK), this.lockedHeart.off(p.EventType.MOUSEOVER), this.lockedHeart.off(p.EventType.MOUSEOUT), this.lockedHeart.off(p.EventType.CLICK), this.textType.destroy(), this.textName.destroy(), this.textLevel.destroy(), this.textTyku.destroy(), this.textHoug.destroy(), this.textRaig.destroy(), this.textTaik.destroy(), this.onMouseOver = this.onMouseOut = this._onClickHitArea = this.onMouseOver = this.onMouseOut = this._onClickHeart = null, this.kirakira = null, this.hpGauge = null, this.onClickItem = null, this.onClickLock = null, this.shipInDeckFlag = null, this.textType = null, this.textName = null, this.textLevel = null, this.textTyku = null, this.textHoug = null, this.textRaig = null, this.textTaik = null, this.sokuryoku = null, this.background = null, this.lockedHeart = null, this.itemHitArea = null, this.locked = null, this.memShipId = null, this.ring = null, this.textureLockOn = null, this.textureLockOff = null
        }, e.prototype._updateTypeAndName_ = function (t, e) {
            this.containerTypeAndName.cacheAsBitmap = !1, this.textType.text = t + " ", this.textName.text = e, this.textName.position.x = this.textType.x + this.textType.width, this.containerTypeAndName.cacheAsBitmap = !0
        }, e.prototype.update = function (t, e, i, n, o, r, s, a, u, l, c, h, p, d) {
            this.memShipId = t, this.locked = c, this.textLevel.text = "" + n, this.textTyku.text = "" + o, this.textHoug.text = "" + s, this.textRaig.text = "" + a, this.textTaik.text = "" + u, this.hpGauge.update(o, r), this.sokuryoku.update(l), this.textLevel.style.fill = _.ColorUtil.getLevelColor(n), this.mouseoutLevelColor = this.textLevel.style.fill, this._updateCondition_(p), this._updateRing_(d), this._updateLock_(c), this._updateInDeck_(h), this._updateTypeAndName_(e, i)
        }, e.prototype._updateCondition_ = function (t) {
            this.kirakira.forEach(function (t) {
                t.visible = !1
            }), t && this.kirakira.forEach(function (t) {
                t.visible = !0
            })
        }, e.prototype._updateRing_ = function (t) {
            this.ring.visible = !1, t && (this.ring.visible = !0)
        }, e.prototype._updateLock_ = function (t) {
            t ? (this.lockedHeart.texture = this.textureLockOn, this.lockedHeart.alpha = 1) : (this.lockedHeart.texture = this.textureLockOff, this.lockedHeart.alpha = 0)
        }, e.prototype._updateInDeck_ = function (t) {
            this.shipInDeckFlag.visible = !1, t && (this.shipInDeckFlag.update(t), this.shipInDeckFlag.visible = !0)
        }, e
    }(PIXI.Container), y = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n.changeFilter = function () {
                n._isFilter = !n._isFilter, n.texture = n._isFilter ? n.texture_on : n.texture_off
            }, n._type = e, n._isFilter = i, n
        }

        return n(e, t), Object.defineProperty(e.prototype, "isFilter", {
            get: function () {
                return this._isFilter
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "type", {
            get: function () {
                return this._type
            }, enumerable: !0, configurable: !0
        }), e.prototype.dispose = function () {
            this.off(p.EventType.CLICK), this.texture_off = null, this.texture_on = null, this._type = null, this._isFilter = null
        }, e.prototype.setTexture = function (t, e) {
            this.texture_on = t, this.texture_off = e, this.texture = this._isFilter ? this.texture_on : this.texture_off
        }, e.prototype.setOnClick = function (t) {
            var e = this;
            this.buttonMode = this.interactive = !0, this.on(p.EventType.CLICK, function () {
                e.changeFilter(), t && t()
            })
        }, e
    }(PIXI.Sprite), v = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.texture = o.COMMON_MAIN.getTexture(43), e._play(), e
        }

        return n(e, t), e.prototype._play = function () {
            var t = this;
            return createjs.Tween.get(this).wait(150 * Math.random() + 450).to({ alpha: 1 }, 150).to({ alpha: 0 }, 150).call(function () {
                t._play()
            })
        }, e.prototype.dispose = function () {
            createjs.Tween.get(this).setPaused(!0), createjs.Tween.removeTweens(this)
        }, e
    }(PIXI.Sprite)
}