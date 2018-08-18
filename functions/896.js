const function896 = function (t, e, i) {
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
    var o = i(0), r = i(5), s = i(1), a = i(49), _ = i(50), u = i(8), l = i(83), c = i(338), h = i(82), p = i(6),
        d = i(20), f = i(35), y = i(897), v = i(898), g = i(899), m = i(353), b = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i.slotItemFilterKeyType = 0, i._pageIndex = 0, i.checkedMemSlotIdList = [], i.animation = { progress: 0 }, i._onClickFilter = function (t) {
                    var e = [], n = i._sortAndFilter(i.slots, t), o = i._getPage(n.length), r = i._getSlotsInPage(n, 0);
                    i.slotDisassemblyChoice.update(r, e), i.slotDisassemblyConfirm.visibleContainer(!1), i.slotItemFilterView.updateFilterType(t), i.slotItemFilterView.hideFilterListImmidiate(), i.filteredSlots = n, i.pagerView.init(o), i.checkedMemSlotIdList = e, i._pageIndex = 0, i.slotItemFilterKeyType = t
                }, i._onClickSlot = function (t) {
                    var e = o.default.model.slot.get(t), n = i._getSlotsInPage(i.filteredSlots, i.pageIndex);
                    if (e.isLocked()) 0 == i.checkedMemSlotIdList.length && (i.slotDisassemblyConfirm.clearInfo(), i.slotDisassemblyConfirm.update([e.memID], !1), i.slotDisassemblyConfirm.visibleContainer(!0)); else {
                        p.SE.play("239");
                        var r = i.checkedMemSlotIdList.indexOf(t);
                        switch (-1 < r ? i.checkedMemSlotIdList.splice(r, 1) : i.checkedMemSlotIdList.push(t), i.slotDisassemblyConfirm.clearInfo(), i.slotDisassemblyChoice.update(n, i.checkedMemSlotIdList), i.checkedMemSlotIdList.length) {
                            case 0:
                                i.slotDisassemblyConfirm.visibleContainer(!1);
                                break;
                            case 1:
                            default:
                                i.slotDisassemblyConfirm.update(i.checkedMemSlotIdList, !0), i.slotDisassemblyConfirm.visibleContainer(!0)
                        }
                    }
                }, i._onChangePage = function (t) {
                    if (i._pageIndex != t) {
                        var e = [], n = i._getSlotsInPage(i.filteredSlots, t);
                        i.slotDisassemblyChoice.update(n, e), i.slotDisassemblyConfirm.visibleContainer(!1), i._pageIndex = t, i.checkedMemSlotIdList = e
                    }
                }, i._onClickDisassembly = function (t) {
                    var e = new y.DestroyItem2API(t), n = i.slotDisassemblyConfirm.viewIcon,
                        s = new m.DisassemblyAnimation(162, 142);
                    s.position.x = n.x + -.5 * n.width, s.position.y = n.y + -.5 * n.height, o.default.view.clickGuard = !0, e.start(function () {
                        var t = new PIXI.Graphics;
                        t.beginFill(0, .2), t.drawRect(0, 0, r.default.width, r.default.height), t.endFill(), o.default.view.overLayer.addChild(t), n.parent.addChild(s);
                        var e = function () {
                            p.SE.play("202")
                        };
                        createjs.Tween.get(n).call(function () {
                            e(), s.play(5)
                        }).to({ alpha: .33 }, 1e3).call(e).to({ alpha: .66 }, 1e3).call(e).to({ alpha: 1 }, 1e3).call(function () {
                            s.dispose(), t.clear(), o.default.view.overLayer.removeChild(t), n.parent.removeChild(s), i.slotDisassemblyConfirm.viewIcon.alpha = 1;
                            var e = [], r = o.default.model.slot.createUnsetList(),
                                a = i._sortAndFilter(r, i.slotItemFilterKeyType), _ = i._getPage(a.length),
                                u = i._pageIndex;
                            _ <= i._pageIndex && (u = _ - 1) < 0 && (u = 0);
                            var l = i._getSlotsInPage(a, u);
                            i.pagerView.init(_), i.pagerView.changePage(u), i.slotDisassemblyConfirm.visibleContainer(!1), o.default.view.portMain.updateInfo(), i.slotDisassemblyChoice.update(l, []), i.slots = r, i.filteredSlots = a, i.checkedMemSlotIdList = e, i._pageIndex = u, o.default.view.clickGuard = !1
                        })
                    })
                }, i._onClickBackground = function () {
                    i.onComplete()
                }, i.list_tit_bg_0 = new PIXI.Sprite(d.COMMON_MAIN.getTexture(60)), i.list_tit_bg_1 = new PIXI.Sprite(d.COMMON_MAIN.getTexture(60)), i.pagerView = new l.PagerView, i.pagerView.position.set(42, 529), i.pagerView.onChangePage = i._onChangePage, i.slotItemFilterView = new c.SlotItemFilterView, i.slotItemFilterView.position.set(247, 13), i.slotItemFilterView.onClick = i._onClickFilter, i.slotDisassemblyChoice = new v.SlotDisassemblyChoice, i.slotDisassemblyChoice.onClickSlot = i._onClickSlot, i.slotDisassemblyChoice.addChild(i.slotItemFilterView, i.pagerView), i.slotDisassemblyConfirm = new g.SlotDisassemblyConfirm, i.slotDisassemblyConfirm.position.set(654, -16), i.slotDisassemblyConfirm.onClickStart = i._onClickDisassembly, i.blue_txt_04 = new PIXI.Sprite(d.COMMON_MAIN.getTexture(2)), i.blue_txt_04.anchor.set(0, .5), i.blue_txt_04.position.set(22, Math.floor(i.list_tit_bg_0.height / 2 - 4)), i.blue_txt_11 = new PIXI.Sprite(f.ARSENAL_MAIN.getTexture(6)), i.blue_txt_11.anchor.set(0, .5), i.blue_txt_11.position.set(22, Math.floor(i.list_tit_bg_0.height / 2 - 4)), i.list_tit_bg_0.position.set(0, -37), i.list_tit_bg_1.position.set(654, -37), i.list_tit_bg_0.addChild(i.blue_txt_04), i.list_tit_bg_1.addChild(i.blue_txt_11), i.addChild(i.slotDisassemblyChoice, i.slotDisassemblyConfirm, i.list_tit_bg_0, i.list_tit_bg_1), i.position.set(1200, 139);
                return i.dialogBackground = new u.AreaBox(a.UISettings.DIALOG_BG_ALPHA), i.dialogBackground.alpha = 0, i.dialogBackground.position.set(0, 103), i.dialogBackground.height = r.default.height - 103, e.addChild(i.dialogBackground), e.addChild(i), i.mainView = e, i.dialogBackground.on(s.EventType.CLICK, i._onClickBackground), i
            }

            return n(e, t), Object.defineProperty(e.prototype, "pageIndex", {
                get: function () {
                    return this._pageIndex
                }, enumerable: !0, configurable: !0
            }), e.prototype._sortAndFilter = function (t, e) {
                if (0 == e) return _.SlotUtil.sort(t, 0), t;
                if (13 == e) return _.SlotUtil.sort(t, 1), t;
                if (14 == e) return _.SlotUtil.sort(t, 2), t;
                switch (e) {
                    case 1:
                        return _.SlotUtil.filter(t, 1);
                    case 2:
                        return _.SlotUtil.filter(t, 2);
                    case 3:
                        return _.SlotUtil.filter(t, 3);
                    case 4:
                        return _.SlotUtil.filter(t, 4);
                    case 5:
                        return _.SlotUtil.filter(t, 5);
                    case 6:
                        return _.SlotUtil.filter(t, 6);
                    case 7:
                        return _.SlotUtil.filter(t, 7);
                    case 8:
                        return _.SlotUtil.filter(t, 8);
                    case 9:
                        return _.SlotUtil.filter(t, 9);
                    case 10:
                        return _.SlotUtil.filter(t, 10);
                    case 11:
                        return _.SlotUtil.filter(t, 11);
                    case 12:
                        return _.SlotUtil.filter(t, 12)
                }
            }, e.prototype._getSlotsInPage = function (t, e) {
                var i = this.slotDisassemblyChoice.ITEM_NUM;
                return t.slice(e * i, e * i + i)
            }, e.prototype._getPage = function (t) {
                var e = this.slotDisassemblyChoice.ITEM_NUM;
                return Math.ceil(t / e)
            }, e.prototype.start = function (t, e) {
                var i = this, n = o.default.model.slot.createUnsetList(), r = this._sortAndFilter(n, t), s = [],
                    a = this._getSlotsInPage(r, e), _ = this._getPage(r.length);
                this.pagerView.init(_), this.slotItemFilterView.updateFilterType(t), this._pageIndex = e, this.pagerView.changePage(e), this.slotDisassemblyChoice.update(a, s), this.animation.progress = 0, o.default.view.clickGuard = !0;
                var u = function () {
                    i.x = 1200 - 945 * i.animation.progress, i.dialogBackground.alpha = i.animation.progress
                };
                this.checkedMemSlotIdList = s, this.filteredSlots = r, this.slots = n;
                var l = createjs.Tween.get(this.animation);
                l.call(function () {
                    l.addEventListener("change", u)
                }).to({ progress: 1 }, 200).call(function () {
                    l.removeAllEventListeners("change"), createjs.Tween.removeTweens(l.target), i.animation.progress = 1, u(), i.dialogBackground.width = 288, o.default.view.clickGuard = !1
                })
            }, e.prototype.hide = function (t) {
                var e = this;
                h.TaskLoadSlotResource.abortBy(this.slotDisassemblyConfirm.viewIcon), this.dialogBackground.width = r.default.width;
                var i = function () {
                    e.x = 1200 - 945 * (1 - e.animation.progress), e.dialogBackground.alpha = 1 - e.animation.progress
                };
                this.animation.progress = 0;
                var n = createjs.Tween.get(this.animation);
                n.call(function () {
                    i(), n.addEventListener("change", i)
                }).to({ progress: 1 }, 200).call(function () {
                    n.removeAllEventListeners("change"), createjs.Tween.removeTweens(n.target), e.animation.progress = 1, i(), t()
                })
            }, e.prototype.dispose = function () {
                this.dialogBackground.off(s.EventType.CLICK, this._onClickBackground), this.removeChildren(), createjs.Tween.removeTweens(this.animation), this.mainView.removeChild(this.dialogBackground), this.mainView.removeChild(this), this.list_tit_bg_0.removeChild(this.blue_txt_04), this.list_tit_bg_1.removeChild(this.blue_txt_11), this.slotDisassemblyChoice.dispose(), this.slotDisassemblyConfirm.visibleContainer(!1), this.slotDisassemblyConfirm.dispose(), this.pagerView.dispose(), this.slotItemFilterView.dispose(), this.onComplete = null, this.slots = null, this.slotItemFilterKeyType = null, this.filteredSlots = null, this._pageIndex = null, this.mainView = null, this.dialogBackground = null, this.slotDisassemblyChoice = null, this.slotDisassemblyConfirm = null, this.pagerView = null, this.slotItemFilterView = null, this.checkedMemSlotIdList = null, this.list_tit_bg_0 = null, this.list_tit_bg_1 = null, this.blue_txt_04 = null, this.blue_txt_11 = null, this.animation = null
            }, e
        }(PIXI.Container);
    e.SlotDisassemblyContainer = b
}