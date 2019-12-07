const function721 = function (t, e, i) {
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
        r = i(21),
        s = i(113),
        a = i(722),
        _ = i(57),
        l = i(327),
        u = i(325),
        c = i(328),
        h = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                n.PAGE_NUM = 5, n.headIndex = 0, n._onClickBack = function () {
                    n.hide(), n.clickBack && n.clickBack()
                }, n._onClickExpand = function (t) {
                    n.clickExpand && n.clickExpand(t)
                }, n._onClickDelete = function (t) {
                    var e = new c.PresetDeleteAPI(t);
                    o.default.view.clickGuard = !0, e.start(function () {
                        var e = new Array,
                            i = o.default.model.deck.get(n.deckId),
                            r = (i.getShipList(), null != i.expedition),
                            s = (i.getShipMemIDList(), 0 < i.getCount());
                        n.presetList.__deletePresetDeckData__(t);
                        for (var a = 0; a < n.presetList.maxNum; a++) {
                            var _ = n.presetList.getPresetDeckData(a + 1);
                            0 < _.getRealShipCount() && e.push(_)
                        }
                        var l = e.slice(n.headIndex, n.headIndex + n.PAGE_NUM);
                        n.presetExpansionContainer.update(n.deckId, n.presetList, l, s, r), o.default.view.clickGuard = !1, n.presets = e
                    })
                }, n._onClickNext = function () {
                    n.arrowBottomButton.visible = !1;
                    var t = n.headIndex + 1;
                    n.presets.length < t + n.PAGE_NUM && (t = n.presets.length - n.PAGE_NUM), n.arrowBottomButton.visible = !1, n.arrowTopButton.visible = !1, t + n.PAGE_NUM < n.presets.length && (n.arrowBottomButton.visible = !0), n.presetTitle.showTxt2(), 0 < t && (n.presetTitle.hideTxt2(), n.arrowTopButton.visible = !0);
                    var e = n.presets.slice(t, t + n.PAGE_NUM),
                        i = o.default.model.deck.get(n.deckId),
                        r = (i.getShipList(), null != i.expedition),
                        s = (i.getShipMemIDList(), 0 < i.getCount());
                    n.presetExpansionContainer.update(n.deckId, n.presetList, e, s, r), n.headIndex = t
                }, n._onClickPrev = function () {
                    var t = n.headIndex - 1,
                        e = n.presets.slice(t, t + n.PAGE_NUM),
                        i = o.default.model.deck.get(n.deckId),
                        r = (i.getShipList(), null != i.expedition),
                        s = (i.getShipMemIDList(), 0 < i.getCount());
                    t < 0 && (t = 0), n.arrowBottomButton.visible = !1, t + n.PAGE_NUM < n.presets.length && (n.arrowBottomButton.visible = !0), n.presetTitle.showTxt2(), n.arrowTopButton.visible = !1, 0 < t && (n.arrowTopButton.visible = !0, n.presetTitle.hideTxt2()), n.presetExpansionContainer.update(n.deckId, n.presetList, e, s, r), n.headIndex = t
                }, n.clickBack = e, n.clickExpand = i, n.presetTitle = new l.PresetTitle(2), n.presetTitle.position.set(162, 195), n.presetTitle.showTxt2(), n.longShipBannerContainer = new u.LongShipBannerContainer, n.longShipBannerContainer.position.set(720, 213);
                var h = r.COMMON_MAIN.getTexture(4);
                return n.btnBack = new _.SimpleButton(h, h), n.btnBack.position.set(173, 638), n.btnBack.onClick = n._onClickBack, n.arrowTopButton = new s.ArrowButton, n.arrowTopButton.initialize(n._onClickPrev), n.arrowTopButton.position.set(446, 217), n.arrowBottomButton = new s.ArrowButton(!0), n.arrowBottomButton.initialize(n._onClickNext), n.arrowBottomButton.position.set(443, 667), n.presetExpansionContainer = new a.PresetExpansionContainer, n.presetExpansionContainer.position.set(168, 248), n.presetExpansionContainer.onClickExpand = n._onClickExpand, n.addChild(n.presetTitle, n.btnBack, n.presetExpansionContainer, n.longShipBannerContainer, n.arrowTopButton, n.arrowBottomButton), n
            }
            return n(e, t), e.prototype.dispose = function () {
                if (this.removeChildren(), this.presetTitle.dispose(), this.presetExpansionContainer.hideAllPopupAndFocus(), this.presetExpansionContainer.dispose(), this.btnBack.dispose(), this.arrowTopButton.dispose(), this.arrowBottomButton.dispose(), this.longShipBannerContainer.dispose(), this.presets)
                    for (var t = 0; t < this.presets.length; t++) this.presets[t] = null;
                this.clickBack = null, this.clickExpand = null, this.presetTitle = null, this.deckId = null, this.headIndex = null, this.presetList = null, this.presets = null, this.presetExpansionContainer = null, this.btnBack = null, this.arrowTopButton = null, this.arrowBottomButton = null, this.longShipBannerContainer = null
            }, e.prototype.show = function (t, e) {
                this.visible = !0, o.default.view.portMain.playCraneAnimation(), this.deckId = t, this.presetList = e, this.arrowTopButton.activate(), this.arrowBottomButton.activate();
                for (var i = (o.default.model.deck.get(t), new Array), n = 0; n < this.presetList.maxNum; n++) {
                    var r = this.presetList.getPresetDeckData(n + 1);
                    0 < r.getRealShipCount() && i.push(r)
                }
                this.arrowBottomButton.visible = !1, this.arrowTopButton.visible = !1, 0 + this.PAGE_NUM < i.length && (this.arrowBottomButton.visible = !0), this.presets = i, this.headIndex = 0, this.updateDeck(t)
            }, e.prototype.update = function (t) {
                this.changeDeck(t)
            }, e.prototype.hide = function () {
                this.visible = !1
            }, e.prototype.changeDeck = function (t) {
                this.updateDeck(t)
            }, e.prototype.updateDeck = function (t) {
                var e = o.default.model.deck.get(t),
                    i = e.getShipList(),
                    n = null != e.expedition,
                    r = this.presets.slice(this.headIndex, this.headIndex + this.PAGE_NUM),
                    s = 0 < e.getCount();
                this.longShipBannerContainer.update(i, n), this.presetExpansionContainer.update(t, this.presetList, r, s, n), this.deckId = t
            }, e
        }(PIXI.Container);
    e.PresetExpansionLayer = h
}