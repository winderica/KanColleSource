const function712 = function (t, e, i) {
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
        r = i(49),
        s = i(8),
        a = i(113),
        _ = i(6),
        l = i(21),
        u = i(163),
        c = i(713),
        h = i(323),
        p = i(715),
        d = i(325),
        f = i(57),
        y = i(326),
        m = i(718),
        g = i(719),
        v = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i.headIndex = 0, i.PAGE_NUM = 5, i.OPEN_KEY_ITEMID = 49, i._onClickBack = function () {
                    i.hide(), i.clickBack && i.clickBack()
                }, i._onClickDelete = function (t) {
                    var e = new y.PresetDeleteAPI(t);
                    o.default.view.clickGuard = !0, _.SE.play("249"), e.start(function () {
                        var e = new Array,
                            n = o.default.model.deck.get(i.deckId),
                            r = (n.getShipList(), null != n.expedition),
                            s = (n.getShipMemIDList(), 0 < n.getCount());
                        i.presetList.__deletePresetDeckData__(t);
                        for (var a = 0; a < i.presetList.maxNum; a++) {
                            var _ = i.presetList.getPresetDeckData(a + 1);
                            e.push(_)
                        }
                        i.presetList.maxNum < u.OrganizeConst.EXTENDS_MAX && e.push(null);
                        var l = e.slice(i.headIndex, i.headIndex + i.PAGE_NUM),
                            c = 0 < o.default.model.useItem.get(i.OPEN_KEY_ITEMID).count;
                        i.presetEditContainer.update(l, s, r, c), o.default.view.clickGuard = !1, i.presets = e
                    })
                }, i._onClickSave = function (t) {
                    var e = o.default.model.deck.get(i.deckId),
                        n = new g.PresetRegisterAPI(i.deckId, t, e.name);
                    o.default.view.clickGuard = !0, _.SE.play("240"), n.start(function () {
                        _.SE.play("235");
                        var e = new Array,
                            r = o.default.model.deck.get(i.deckId),
                            s = null != r.expedition,
                            a = 0 < r.getCount();
                        i.presetList.updateData(n.result);
                        for (var l = i.presetList.getPresetDeckData(t), c = 0; c < i.presetList.maxNum; c++) {
                            var h = i.presetList.getPresetDeckData(c + 1);
                            e.push(h)
                        }
                        i.presetList.maxNum < u.OrganizeConst.EXTENDS_MAX && e.push(null);
                        var p = e.slice(i.headIndex, i.headIndex + i.PAGE_NUM),
                            d = 0 < o.default.model.useItem.get(i.OPEN_KEY_ITEMID).count;
                        i.presetEditContainer.update(p, a, s, d, l.presetID), o.default.view.clickGuard = !1, i.presets = e
                    })
                }, i._onClickExtension = function () {
                    var t = new b(o.default.view.overLayer);
                    t.onComplete = function (e) {
                        o.default.view.clickGuard = !0, t.hide(function () {
                            switch (e) {
                                case !1:
                                    t.dispose(), o.default.view.clickGuard = !1;
                                    break;
                                case !0:
                                    (new m.PresetExpandAPI).start(function () {
                                        i.presetList.__updateByPresetExpanded__(i.presetList.maxNum + 1);
                                        for (var e = new Array, n = 0; n < i.presetList.maxNum; n++) {
                                            var r = i.presetList.getPresetDeckData(n + 1);
                                            e.push(r)
                                        }
                                        i.presetList.maxNum < u.OrganizeConst.EXTENDS_MAX && e.push(null), i.arrowBottomButton.visible = !1, i.arrowTopButton.visible = !1, i.headIndex + i.PAGE_NUM < e.length && (e.length == i.presetEditContainer.slotsLength + 1 && (i.arrowTopButton.activate(), i.arrowBottomButton.activate()), i.arrowBottomButton.visible = !0), 0 < i.headIndex && (i.presetTitle.hideTxt2(), i.arrowTopButton.visible = !0);
                                        var s = o.default.model.deck.get(i.deckId),
                                            a = 0 < s.getCount(),
                                            _ = null != s.expedition,
                                            l = e.slice(i.headIndex, i.headIndex + i.PAGE_NUM),
                                            c = 0 < o.default.model.useItem.get(i.OPEN_KEY_ITEMID).count;
                                        i.presetEditContainer.update(l, a, _, c), t.dispose(), o.default.view.clickGuard = !1, i.presets = e
                                    })
                            }
                        })
                    };
                    var e = o.default.model.useItem.get(i.OPEN_KEY_ITEMID).count;
                    t.start(e)
                }, i._onClickNext = function () {
                    i.arrowBottomButton.visible = !1;
                    var t = i.headIndex + 1;
                    i.presets.length < t + i.PAGE_NUM && (t = i.presets.length - i.PAGE_NUM), i.arrowBottomButton.visible = !1, t + i.PAGE_NUM < i.presets.length && (i.arrowBottomButton.visible = !0), i.arrowTopButton.visible = !1, i.presetTitle.showTxt2(), 0 < t && (i.presetTitle.hideTxt2(), i.arrowTopButton.visible = !0);
                    var e = i.presets.slice(t, t + i.PAGE_NUM),
                        n = o.default.model.deck.get(i.deckId),
                        r = (n.getShipList(), null != n.expedition),
                        s = (n.getShipMemIDList(), 0 < n.getCount()),
                        a = 0 < o.default.model.useItem.get(i.OPEN_KEY_ITEMID).count;
                    i.presetEditContainer.update(e, s, r, a), i.headIndex = t
                }, i._onClickPrev = function () {
                    var t = i.headIndex - 1,
                        e = i.presets.slice(t, t + i.PAGE_NUM),
                        n = o.default.model.deck.get(i.deckId),
                        r = (n.getShipList(), null != n.expedition),
                        s = (n.getShipMemIDList(), 0 < n.getCount());
                    t < 0 && (t = 0), i.arrowBottomButton.visible = !1, t + i.PAGE_NUM < i.presets.length && (i.arrowBottomButton.visible = !0), i.presetTitle.showTxt2(), i.arrowTopButton.visible = !1, 0 < t && (i.arrowTopButton.visible = !0, i.presetTitle.hideTxt2());
                    var a = 0 < o.default.model.useItem.get(i.OPEN_KEY_ITEMID).count;
                    i.presetEditContainer.update(e, s, r, a), i.headIndex = t
                }, i.clickBack = e;
                var n = l.COMMON_MAIN.getTexture(4);
                return i.btnBack = new f.SimpleButton(n, n), i.btnBack.position.set(173, 638), i.btnBack.onClick = i._onClickBack, i.arrowTopButton = new a.ArrowButton, i.arrowTopButton.initialize(i._onClickPrev), i.arrowTopButton.position.set(446, 217), i.arrowBottomButton = new a.ArrowButton(!0), i.arrowBottomButton.initialize(i._onClickNext), i.arrowBottomButton.position.set(443, 667), i.presetEditContainer = new p.PresetEditContainer(i._onClickSave, i._onClickDelete, i._onClickExtension), i.presetEditContainer.position.set(168, 248), i.presetTitle = new d.PresetTitle(1), i.presetTitle.position.set(162, 195), i.presetTitle.showTxt2(), i.longShipBannerContainer = new h.LongShipBannerContainer, i.longShipBannerContainer.position.set(720, 213), i.arrowTopButton.initialize(i._onClickPrev), i.arrowBottomButton.initialize(i._onClickNext), i.addChild(i.presetTitle, i.presetEditContainer, i.btnBack, i.longShipBannerContainer, i.arrowTopButton, i.arrowBottomButton), i
            }
            return n(e, t), e.prototype.dispose = function () {
                if (this.removeChildren(), this.btnBack.dispose(), this.presetTitle.dispose(), this.longShipBannerContainer.dispose(), this.presetEditContainer.dispose(), this.arrowTopButton.dispose(), this.arrowBottomButton.dispose(), this.presets)
                    for (var t = 0; t < this.presets.length; t++) this.presets[t] = null;
                this.clickBack = null, this.deckId = null, this.presetList = null, this.headIndex = null, this.presets = null, this.btnBack = null, this.presetTitle = null, this.longShipBannerContainer = null, this.presetEditContainer = null, this.arrowTopButton = null, this.arrowBottomButton = null
            }, e.prototype.show = function (t, e) {
                this.visible = !0, o.default.view.portMain.playCraneAnimation(), this.deckId = t, this.presetList = e;
                for (var i = new Array, n = 0; n < this.presetList.maxNum; n++) {
                    var r = this.presetList.getPresetDeckData(n + 1);
                    i.push(r)
                }
                this.presetList.maxNum < u.OrganizeConst.EXTENDS_MAX && i.push(null), this.arrowBottomButton.visible = !1, this.arrowTopButton.visible = !1, 0 + this.PAGE_NUM < i.length && (this.arrowBottomButton.visible = !0, this.arrowTopButton.activate(), this.arrowBottomButton.activate()), this.presets = i, this.headIndex = 0, this.updateDeck(t)
            }, e.prototype.update = function (t) {
                this.updateDeck(t)
            }, e.prototype.hide = function () {
                this.visible = !1
            }, e.prototype.updateDeck = function (t) {
                var e = o.default.model.deck.get(t),
                    i = e.getShipList(),
                    n = null != e.expedition;
                this.longShipBannerContainer.update(i, n);
                var r = this.presets.slice(this.headIndex, this.headIndex + this.PAGE_NUM),
                    s = 0 < e.getCount(),
                    a = 0 < o.default.model.useItem.get(this.OPEN_KEY_ITEMID).count;
                this.presetEditContainer.update(r, s, n, a), this.deckId = t
            }, e
        }(PIXI.Container);
    e.PresetEditLayer = v;
    var b = function () {
        function t(t) {
            var e = this;
            this._onClickYES = function () {
                e.onComplete(!0)
            }, this._onClickNO = function () {
                e.onComplete(!1)
            }, this.container = t, this.dialogBackground = new s.AreaBox(r.UISettings.DIALOG_BG_ALPHA), this.extensionPresetConfirm = new c.ExtensionPresetConfirm
        }
        return t.prototype.start = function (t) {
            var e = this;
            this.extensionPresetConfirm.onClickYES = this._onClickYES, this.extensionPresetConfirm.onClickNO = this._onClickNO, this.extensionPresetConfirm.position.set(218, 233), this.container.addChild(this.dialogBackground, this.extensionPresetConfirm), this.extensionPresetConfirm.visible = !1, this.dialogBackground.alpha = 0, o.default.view.clickGuard = !0, createjs.Tween.get(this.dialogBackground).to({
                alpha: 1
            }, 250).call(function () {
                e.extensionPresetConfirm.visible = !0, o.default.view.clickGuard = !1
            }), this.extensionPresetConfirm.update(t)
        }, t.prototype.hide = function (t) {
            this.extensionPresetConfirm.visible = !1, createjs.Tween.get(this.dialogBackground).to({
                alpha: 0
            }, 250).call(function () {
                t()
            })
        }, t.prototype.dispose = function () {
            this.extensionPresetConfirm.dispose(), this.container.removeChild(this.dialogBackground), this.container.removeChild(this.extensionPresetConfirm), this.onComplete = null, this.container = null, this.dialogBackground = null, this.extensionPresetConfirm = null
        }, t
    }()
}