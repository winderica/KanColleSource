const function725 = function (t, e, i) {
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
        r = i(726),
        s = i(727),
        a = i(329),
        _ = i(329),
        l = function (t) {
            function e() {
                var e = t.call(this) || this;
                e.HEIGHT = 76, e._onMouseOver = function (t, i) {
                    var n = e.presetExpansionSlots[t],
                        o = i.target == n.FrameBg,
                        r = i.currentTarget == n.FrameBg,
                        s = i.target == n.ExpandButton,
                        a = i.currentTarget == n.ExpandButton,
                        l = (i.target, e.alertLostPopup.background, i.currentTarget == e.alertLostPopup.background),
                        u = (i.target, e.alertOrganizedPopup.background, i.currentTarget == e.alertOrganizedPopup.background),
                        c = o && r,
                        h = s && a,
                        p = l && u;
                    if (h) {
                        if (e.presetExpansionSlots[t].focus(), p) return;
                        var d = e.presetExpansionSlots[t].PresetId,
                            f = e.presetList.getPresetDeckData(d);
                        if (e.alertOrganizedPopup.visible = !1, e.alertLostPopup.visible = !1, e.previewBalloon.visible = !1, f.hasLostShip()) e.setAlertLostPopup(t), e.updateAlert(f), e.alertLostPopup.visible = !0;
                        else if (f.hasOtherDeckShip(e.memDeckId)) e.setAlertOrganizedPopup(t), e.updateAlert(f), e.alertOrganizedPopup.visible = !0;
                        else {
                            var y = t < 3 ? _.Direction.Top : _.Direction.Bottom;
                            e.setPreviewBalloon(y, t), e.previewBalloon.update(e.memDeckId, y, e.presetList.getPresetDeckData(d)), e.previewBalloon.visible = !0
                        }
                    } else if (c) {
                        var d = e.presetExpansionSlots[t].PresetId,
                            y = t < 3 ? _.Direction.Top : _.Direction.Bottom;
                        e.setPreviewBalloon(y, t), e.previewBalloon.update(e.memDeckId, y, e.presetList.getPresetDeckData(d)), e.previewBalloon.visible = !0, e.presetExpansionSlots[t].focus()
                    }
                }, e._onMouseOut = function (t, i) {
                    var n = e.presetExpansionSlots[t],
                        o = i.target == n.FrameBg,
                        r = i.currentTarget == n.FrameBg,
                        s = i.target == n.ExpandButton,
                        a = i.currentTarget == n.ExpandButton,
                        _ = i.target == e.alertLostPopup.background,
                        l = i.currentTarget == e.alertLostPopup.background,
                        u = i.target == e.alertOrganizedPopup.background,
                        c = i.currentTarget == e.alertOrganizedPopup.background,
                        h = i.target == e.alertLostPopup.positiveButton,
                        p = i.currentTarget == e.alertLostPopup.positiveButton,
                        d = i.target == e.alertOrganizedPopup.positiveButton,
                        f = i.currentTarget == e.alertOrganizedPopup.positiveButton;
                    if (a) o || _ || u || h || d || (e.previewBalloon.visible = !1, e.alertLostPopup.visible = !1, e.alertOrganizedPopup.visible = !1, n.removeFocus());
                    else if (r)
                        if (s);
                        else {
                            var y = !0;
                            if (e.presetExpansionSlots.forEach(function (t) {
                                    t.IsOver && t.PresetId != n.PresetId && (y = !1)
                                }), n.removeFocus(), !y) return;
                            e.previewBalloon.visible = !1
                        }
                    else if (l || c) {
                        if (_ || u || h || d || s) return;
                        e.previewBalloon.visible = !1, e.alertLostPopup.visible = !1, e.alertOrganizedPopup.visible = !1;
                        for (var m = 0; m < e.presetExpansionSlots.length; m++) e.presetExpansionSlots[m].removeFocus()
                    } else if (p || f) {
                        if (_ || u || h || d || s) return;
                        e.previewBalloon.visible = !1, e.alertLostPopup.visible = !1, e.alertOrganizedPopup.visible = !1;
                        for (var m = 0; m < e.presetExpansionSlots.length; m++) e.presetExpansionSlots[m].removeFocus()
                    }
                }, e._onClickExpand = function (t) {
                    e.onClickExpand && e.onClickExpand(t)
                }, e.updateAlert = function (t) {
                    var i = t.hasLostShip(),
                        n = t.hasOtherDeckShip(e.memDeckId),
                        r = 0 < t.getShipsAfterExpanded(e.memDeckId).length;
                    if (i) e.alertLostPopup.update(t.presetID, r);
                    else if (n) {
                        var s = t.getFirstOtherDeckShip(e.memDeckId),
                            a = o.default.model.deck.isInDeck(s.memID),
                            _ = o.default.model.deck.get(a[0]),
                            l = "\u300c" + s.name + "\u300d\u304c\u73fe\u5728\u300c\u7b2c" + _.mstID + "\u8266\u968a(" + _.name + ")\u300d\u306b\u914d\u5099\u3055\u308c\u3066\u3044\u307e\u3059\u3002";
                        e.alertOrganizedPopup.update(t.presetID, l, r)
                    }
                }, e.presetExpansionSlots = [];
                for (var i = 0; i < 5; i++) {
                    var n = new s.PresetExpansionSlot(i);
                    n.onMouseOver = e._onMouseOver, n.onMouseOut = e._onMouseOut, n.onClickExpand = e._onClickExpand, n.position.y = e.HEIGHT * i, e.presetExpansionSlots.push(n)
                }
                for (var i = 4; i >= 0; i--) e.addChild(e.presetExpansionSlots[i]);
                return e.previewBalloon = new a.PresetPreviewBalloon, e.previewBalloon.visible = !1, e.addChild(e.previewBalloon), e.alertLostPopup = new r.PresetAlertLostPopup(0), e.alertLostPopup.visible = !1, e.alertLostPopup.onClick = e._onClickExpand, e.alertLostPopup.onMouseOut = e._onMouseOut, e.alertLostPopup.onMouseOver = e._onMouseOver, o.default.view.overLayer.addChild(e.alertLostPopup), e.alertOrganizedPopup = new r.PresetAlertOrganizedPopup(0), e.alertOrganizedPopup.visible = !1, e.alertOrganizedPopup.onClick = e._onClickExpand, e.alertOrganizedPopup.onMouseOut = e._onMouseOut, o.default.view.overLayer.addChild(e.alertOrganizedPopup), e
            }
            return n(e, t), e.prototype.dispose = function () {
                o.default.view.overLayer.removeChild(this.alertOrganizedPopup), o.default.view.overLayer.removeChild(this.alertLostPopup);
                for (var t = 0; t < 5; t++) this.presetExpansionSlots[t].dispose(), this.presetExpansionSlots[t] = null;
                this.previewBalloon.dispose(), this.alertOrganizedPopup.dispose(), this.alertLostPopup.dispose(), this.presetExpansionSlots = null, this.previewBalloon = null, this.onClickExpand = null, this.memDeckId = null, this.presetList = null, this.alertOrganizedPopup = null, this.alertLostPopup = null, this.removeChildren()
            }, e.prototype.hideAllPopupAndFocus = function () {
                this.presetExpansionSlots.forEach(function (t) {
                    t.hideFocus()
                }), this.previewBalloon.visible = !1, this.alertOrganizedPopup.visible = !1, this.alertLostPopup.visible = !1
            }, e.prototype.update = function (t, e, i, n, o) {
                for (var r = 0; r < 5; r++) {
                    var s = i[r];
                    this.presetExpansionSlots[r].update(t, e, s, n, o)
                }
                this.presetList = e, this.memDeckId = t
            }, e.prototype.setPreviewBalloon = function (t, e) {
                switch (t) {
                    case _.Direction.Top:
                        this.previewBalloon.x = this.presetExpansionSlots[e].FrameBg.x + this.presetExpansionSlots[e].ExpandButton.x - 165, this.previewBalloon.y = this.presetExpansionSlots[e].FrameBg.y + this.presetExpansionSlots[e].ExpandButton.y + 31;
                        break;
                    case _.Direction.Bottom:
                        this.previewBalloon.x = this.presetExpansionSlots[e].FrameBg.x + this.presetExpansionSlots[e].ExpandButton.x - 165, this.previewBalloon.y = this.presetExpansionSlots[e].FrameBg.y + this.presetExpansionSlots[e].ExpandButton.y - 150
                }
                this.previewBalloon.y += this.HEIGHT * e
            }, e.prototype.setAlertLostPopup = function (t) {
                this.alertLostPopup.x = 168 + this.presetExpansionSlots[t].FrameBg.x + 117, this.alertLostPopup.y = 247 + this.presetExpansionSlots[t].FrameBg.y + 60 + this.HEIGHT * t
            }, e.prototype.setAlertOrganizedPopup = function (t) {
                this.alertOrganizedPopup.x = 168 + this.presetExpansionSlots[t].FrameBg.x, this.alertOrganizedPopup.y = 247 + this.presetExpansionSlots[t].FrameBg.y + 60 + this.HEIGHT * t
            }, e
        }(PIXI.Container);
    e.PresetExpansionContainer = l
}