const function670 = function (t, e, i) {
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
    var o = i(0), r = i(152), s = i(109), a = i(34), _ = i(66), u = i(6), l = i(107), c = i(671), h = i(672),
        p = i(673), d = i(674), f = i(675), y = i(685), v = i(214), g = i(215), m = i(687), b = i(688), w = i(692),
        x = i(693), I = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i.SLOT_MAX = 6, i._shipInDeckOrigin = 0, i.onClickBreakCombined = function () {
                    var t = new g.CombinedAPI(0);
                    o.default.view.clickGuard = !0, t.start(function () {
                        i.update(), o.default.view.clickGuard = !1
                    })
                }, i._onClickArrow = function (t) {
                    i.shipInDeckOrigin += t, i.ShipSlotLayer.update(i.deckID, i.shipInDeckOrigin)
                }, i._onClickChangeDeckName = function () {
                    i.changeDeckName(i._deckID)
                }, i._onClickMamiyaIrako = function () {
                    i.editNameArea.writable = !1;
                    var t = o.default.view.overLayer, e = o.default.view.getNowScene(), n = new x.TaskMamiyaIrako(t, e);
                    n.onWhiteOut = function () {
                        i.update()
                    }, n.onComplete = function () {
                        n.dispose(), i.editNameArea.writable = !0
                    }, n.start(i.deckID)
                }, i.editNameArea = new d.EditNameArea, i.editNameArea.writable = !1, i.editNameArea.onClickUpdate = i._onClickChangeDeckName, i.deckSelector = new p.DeckSelector, i.deckSelector.onClickDeckFlag = e, i.sweetsButton = new y.SweetsButton, i.breakDeckView = new h.BreakDeckView, i.shipSlotLayer = new f.ShipSlotLayer, i.addChild(i.deckSelector), l.OrganizeConst.COMBINABLE && (i.combineGuideView = new c.CombineGuideView(function (t) {
                    i.onDragAndDropCombineTrigger(t)
                }), i.breakCombineView = new s.CombinedView(!0), i.breakCombineView.onClick = i.onClickBreakCombined, i.breakCombineView.activate(), i.addChild(i.combineGuideView), i.addChild(i.breakCombineView)), i.addChild(i.editNameArea), i.addChild(i.shipSlotLayer), i.addChild(i.breakDeckView), i.addChild(i.sweetsButton), i.addChild(i.shipSlotLayer.ArrowTopButton), i.addChild(i.shipSlotLayer.ArrowBottomButton), i
            }

            return n(e, t), Object.defineProperty(e.prototype, "deckID", {
                get: function () {
                    return this._deckID
                }, set: function (t) {
                    this._deckID = t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "shipInDeckOrigin", {
                get: function () {
                    return this._shipInDeckOrigin
                }, set: function (t) {
                    this._shipInDeckOrigin = t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "shipSlotDisplayLength", {
                get: function () {
                    for (var t = 0, e = 0, i = this.ShipSlotLayer.ShipSlots.length; e < i; e++) {
                        !0 === this.ShipSlotLayer.ShipSlots[e].visible && t++
                    }
                    return t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "EditNameArea", {
                get: function () {
                    return this.editNameArea
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "SweetsButton", {
                get: function () {
                    return this.sweetsButton
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "ShipSlotLayer", {
                get: function () {
                    return this.shipSlotLayer
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "CombineGuideView", {
                get: function () {
                    return this.combineGuideView
                }, enumerable: !0, configurable: !0
            }), e.prototype.dispose = function () {
                this.deckSelector.dispose(), this.deckSelector = null, this.editNameArea.dispose(), this.editNameArea = null, this.sweetsButton.dispose(), this.sweetsButton = null, this.shipSlotLayer.dispose(), this.shipSlotLayer = null, this.breakDeckView.dispose(), this.breakDeckView = null, l.OrganizeConst.COMBINABLE && (this.combineGuideView.dispose(), this.combineGuideView = null, this.breakCombineView.dispose(), this.breakCombineView = null), this.removeChildren()
            }, e.prototype.init = function (t) {
                this.editNameArea.position.set(694, 150), this.sweetsButton.position.set(465, 157), this.breakDeckView.position.set(570, 162), this.sweetsButton.onClick = this._onClickMamiyaIrako, this.breakDeckView.onClick = t;
                var e = o.default.model.deck.getAll();
                this.deckSelector.initialize(0 < e.length, 1 < e.length, 2 < e.length, 3 < e.length), this.deckSelector.position.set(177, 165), l.OrganizeConst.COMBINABLE && (this.combineGuideView.position.set(222, 165), this.breakCombineView.position.set(170, 155)), this.shipSlotLayer.initArrow(this._onClickArrow)
            }, e.prototype.show = function (t) {
                switch (this.visible = !0, t) {
                    case 0:
                        if (this.shipSlotLayer.show(), this.shipSlotLayer.ArrowTopButton.visible = !1, this.shipSlotLayer.ArrowBottomButton.visible = !1, this.breakDeckView.visible = !0, this.updateMamiyaIrako(this._deckID), l.OrganizeConst.COMBINABLE) {
                            var e = o.default.model.deck.isCombined();
                            e && (this.breakCombineView.visible = !0, this.breakCombineView.interactiveChildren = !0)
                        }
                        break;
                    case 1:
                    case 2:
                        if (l.OrganizeConst.COMBINABLE) {
                            var e = o.default.model.deck.isCombined();
                            e && (this.breakCombineView.visible = !0, this.breakCombineView.interactiveChildren = !1)
                        }
                }
            }, e.prototype.hide = function () {
                this.visible = !1, this.shipSlotLayer.hide(), this.sweetsButton.visible = !1, this.shipSlotLayer.ArrowTopButton.visible = !1, this.shipSlotLayer.ArrowBottomButton.visible = !1, this.breakDeckView.visible = !1, l.OrganizeConst.COMBINABLE && (this.combineGuideView.visible = !1, this.breakCombineView.visible = !1)
            }, e.prototype.updateDeck = function (t) {
                this._deckID = t, this.update()
            }, e.prototype.update = function () {
                var t = o.default.model.deck.get(this._deckID), e = null != t.expedition, i = t.getCount();
                this.deckSelector.update(this._deckID), this.shipSlotLayer.update(this._deckID, this._shipInDeckOrigin), this.updateMamiyaIrako(this._deckID), this.updateDeckBreakView(i, e), l.OrganizeConst.COMBINABLE && this.updateCombineGuide(this._deckID), this.EditNameArea.reload(t.name)
            }, e.prototype.updateMamiyaIrako = function (t) {
                var e = o.default.model.deck.get(t), i = e.getCount(), n = o.default.model.useItem.get(54).count,
                    r = o.default.model.useItem.get(59).count, s = n + r;
                if (this.sweetsButton.visible = !1, 0 < s) {
                    var a = !1;
                    e.getShipList().some(function (t) {
                        if (t && (a = t.tired < 40)) return !0
                    }), this.sweetsButton.update(n, r, i, a), this.sweetsButton.visible = !0
                }
            }, e.prototype.updateDeckBreakView = function (t, e) {
                var i = 0 == e, n = 1 < t, o = n && i;
                this.breakDeckView.update(o)
            }, e.prototype.updateCombineGuide = function (t) {
                var e = o.default.model.deck.isCombined();
                if (this.combineGuideView.visible = !1, this.breakCombineView.visible = !1, this.combineGuideView.interactiveChildren = !1, e) this.breakCombineView.visible = !0; else if (2 == t) {
                    this.combineGuideView.visible = !0;
                    var i = o.default.model.deck.get(t), n = 0 < i.getCount(), r = null == i.expedition, s = n && r;
                    s && (this.combineGuideView.interactiveChildren = !0)
                }
            }, e.prototype.updateDeckSelector = function (t) {
                this._deckID = t;
                var e = o.default.model.deck.get(t);
                this.editNameArea.reload(e.name), this.deckSelector.update(t)
            }, e.prototype.changeDeckName = function (t) {
                var e = this;
                o.default.view.clickGuard = !0, this.editNameArea.writable = !1;
                var i = this.editNameArea.text, n = "http://" + o.default.settings.osapi_root, s = function (r) {
                    if (window.removeEventListener("message", s), r.origin == n) {
                        var a = r.data;
                        new m.UpdateDeckNameAPI(t, i, a).start(function () {
                            o.default.model.deck.get(t).updateName(i, a), u.SE.play("246"), e.editNameArea.writable = !0, o.default.view.clickGuard = !1
                        })
                    }
                };
                window.addEventListener("message", s);
                try {
                    window.parent.postMessage(r.PostMessageType.DECK_NAME + "\t" + i, n)
                } catch (t) {
                    this.editNameArea.writable = !0, o.default.view.clickGuard = !1
                }
            }, e.prototype.onBreakDeck = function (t, e) {
                var i = this, n = o.default.model.deck.get(t).getShipList();
                o.default.view.clickGuard = !0;
                var r = new a.APIConnector;
                r.add(new v.ChangeAPI(!1, t, 0, -2)), 10 == o.default.model.basic.getTutorialProgress() && r.add(new _.UpdateTutorialAPI(20)), r.start(function () {
                    for (var r = o.default.model.deck.get(t).getShipList(), s = Array(), a = 0; a < i.shipSlotLayer.ShipSlots.length; a++) {
                        var _ = a + i._shipInDeckOrigin;
                        null != n[_] && null == r[_] && s.push(a)
                    }
                    if (0 < s.length) {
                        for (var a = 0; a < i.shipSlotLayer.ShipSlots.length; a++) if (-1 != s.indexOf(a)) {
                            var u = i.shipSlotLayer.ShipSlots[a], l = function () {
                            };
                            s.indexOf(a) == s.length - 1 && (l = e), u.closeAnimation(l)
                        }
                    } else e()
                })
            }, e.prototype.onDragAndDropCombineTrigger = function (t) {
                var e = this;
                this.combineGuideView.hideOn(), this.editNameArea.writable = !1;
                var i = new w.CombineDragging({
                    x: this.deckSelector.x,
                    y: this.deckSelector.y
                }, t.data.global, function (t) {
                    if (o.default.view.overLayer.removeChild(i), e.combineGuideView.showOn(), t) {
                        var n = new b.TaskCombineTypeSelect(o.default.view.overLayer);
                        n.onCombined = function () {
                            e.update()
                        }, n.onComplete = function () {
                            n.dispose(), e.editNameArea.writable = !0
                        }, n.start()
                    } else e.editNameArea.writable = !0
                });
                o.default.view.overLayer.addChild(i)
            }, e
        }(PIXI.Container);
    e.DeckLayer = I
}