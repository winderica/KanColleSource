const function736 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(111), o = i(737), r = i(0), s = i(738), a = i(217), _ = i(3), u = i(333), l = i(110),
        c = function () {
            function t(t) {
                var e = this;
                this.DECK_MAX = 6, this._isAllSupply = !1, this._onClickShip = function (t, i) {
                    var n = e.deckSupplyBanners[t];
                    e.supplyEditor.containts(i) ? (e.supplyEditor.remove(i), _.SE.play("238"), n.checkOff()) : (e.supplyEditor.push(i), _.SE.play("241"), n.checkOn()), e.onUpdateSupplyEdit()
                }, this._onMouseOverSupplyAll = function () {
                    e._isAllSupply = !1, e.supplyEditor.clear();
                    for (var t = r.default.model.deck.get(e.deckId), i = t.getShipList(), n = 0; n < i.length; n++) {
                        var o = t.getShipModel(n);
                        if (o) {
                            0 == (o.ammoMax <= o.ammoNow && o.fuelMax <= o.fuelNow) && e.supplyEditor.push(o.memID)
                        }
                    }
                    for (var n = 0; n < e.deckSupplyBanners.length; n++) {
                        var s = n + e.shipInDeckOrigin, o = t.getShipModel(s);
                        if (o && e.supplyEditor.containts(o.memID)) {
                            e.deckSupplyBanners[n].checkOn()
                        }
                    }
                    _.SE.play("241"), e.onUpdateSupplyEdit()
                }, this._onMouseOutSupplyAll = function () {
                    if (1 == e._isAllSupply) return !1;
                    e.supplyEditor.clear();
                    for (var t = r.default.model.deck.get(e.deckId), i = 0; i < e.deckSupplyBanners.length; i++) {
                        var n = i + e.shipInDeckOrigin, o = t.getShipModel(n);
                        if (o) {
                            var s = e.deckSupplyBanners[i];
                            0 == (o.ammoMax <= o.ammoNow && o.fuelMax <= o.fuelNow) && s.checkOff()
                        }
                    }
                    _.SE.play("238"), e.onUpdateSupplyEdit()
                }, this._onClickSupplyAll = function () {
                    e.supplyEditor.clear(), e._isAllSupply = !0;
                    for (var t = r.default.model.deck.get(e.deckId), i = t.getShipList(), n = 0; n < i.length; n++) {
                        var o = i[n];
                        if (o) {
                            0 == (o.ammoMax <= o.ammoNow && o.fuelMax <= o.fuelNow) && e.supplyEditor.push(o.memID)
                        }
                    }
                    for (var n = 0; n < e.deckSupplyBanners.length; n++) {
                        var s = n + e.shipInDeckOrigin, o = t.getShipModel(s);
                        if (o && e.supplyEditor.containts(o.memID)) {
                            e.deckSupplyBanners[n].checkOn()
                        }
                    }
                    var _ = r.default.model.useItem.get(31).count, u = r.default.model.useItem.get(32).count,
                        l = e.supplyEditor.getMemShipIds(), c = a.SupplyUtil.CalcRequireMaterials(l);
                    0 < c.ammo && c.ammo <= u ? (e.onUpdateSupplyEdit(), e.onClickSupplyAll()) : 0 < c.fuel && c.fuel <= _ ? (e.onUpdateSupplyEdit(), e.onClickSupplyAll()) : e.supplyAllButton.updateClickable(!1)
                }, this.shipInDeckOrigin = 0, this._onClickArrowTop = function () {
                    e.shipInDeckOrigin -= 1, e._updateDeck_(e.deckId, e.shipInDeckOrigin)
                }, this._onClickArrowBottom = function () {
                    e.shipInDeckOrigin += 1, e._updateDeck_(e.deckId, e.shipInDeckOrigin)
                }, this.mainView = t, this.supplyAllButton = new o.SupplyAllButton, this.deckSupplyBanners = [];
                for (var i = 0; i < this.DECK_MAX; i++) {
                    var n = new s.DeckSupplyBanner(i);
                    n.position.set(165, 215 + n.ITEM_HEIGHT * i), this.deckSupplyBanners.push(n)
                }
                this.arrowTopButton = new l.ArrowTopButton, this.arrowBottomButton = new l.ArrowBottomButton
            }

            return t.prototype.getSupplyEdit = function () {
                return this.supplyEditor
            }, t.prototype.updateDeck = function (t) {
                this.deckId = t, this.supplyEditor.clear(), this._updateDeck_(t, this.shipInDeckOrigin), this.onUpdateSupplyEdit()
            }, t.prototype.changeDeck = function (t) {
                this.shipInDeckOrigin = 0, this.deckId = t, this.supplyEditor.clear(), this._updateDeck_(t, this.shipInDeckOrigin), this.onUpdateSupplyEdit()
            }, t.prototype.start = function (t) {
                this.supplyAllButton.position.set(162, 164), this.mainView.addChild(this.supplyAllButton);
                for (var e = 0; e < this.deckSupplyBanners.length; e++) {
                    var i = this.deckSupplyBanners[e];
                    i.onClick = this._onClickShip, this.mainView.addChild(i)
                }
                this.arrowTopButton.position.set(533, 173), this.arrowBottomButton.position.set(533, 650), this.mainView.addChild(this.arrowTopButton, this.arrowBottomButton), this.supplyAllButton.onMouseOver = this._onMouseOverSupplyAll, this.supplyAllButton.onMouseOut = this._onMouseOutSupplyAll, this.supplyAllButton.onClick = this._onClickSupplyAll, this.arrowTopButton.onClick = this._onClickArrowTop, this.arrowBottomButton.onClick = this._onClickArrowBottom, this.supplyEditor = new u.SupplyEditor, this._updateDeck_(t, this.shipInDeckOrigin), this.onUpdateSupplyEdit()
            }, t.prototype._updateDeck_ = function (t, e) {
                for (var i = r.default.model.deck.get(t), o = null != i.expedition, s = 0; s < this.deckSupplyBanners.length; s++) {
                    var _ = e + s, u = this.deckSupplyBanners[s];
                    n.TaskLoadShipResource.abortBy(u);
                    var l = i.getShipModel(_);
                    if (l) {
                        var c = a.SupplyUtil.CheckRequireSupplyShip(l.memID);
                        u.checkDisable();
                        var h = c && 0 == o;
                        if (h) {
                            u.checkOff();
                            this.supplyEditor.containts(l.memID) && u.checkOn()
                        }
                        u.update(_, l, o, h)
                    } else u.empty()
                }
                if (this.arrowBottomButton.visible = !1, this.arrowTopButton.visible = !1, 0 < e && (this.arrowTopButton.visible = !0), e + this.deckSupplyBanners.length < i.getCount() && (this.arrowBottomButton.visible = !0), i.expedition) this.supplyAllButton.updateClickable(!1); else {
                    var c = a.SupplyUtil.CheckRequireSupplyDeck(t);
                    this.supplyAllButton.updateClickable(c)
                }
                this.deckId = t
            }, t.prototype.dispose = function () {
                var t = this;
                this.mainView.removeChildren(), this.deckSupplyBanners.forEach(function (e) {
                    n.TaskLoadShipResource.abortBy(e), e.dispose(), e.onClick = t._onClickShip = null, e = null
                }), this.supplyAllButton.onMouseOver = this._onMouseOverSupplyAll = null, this.supplyAllButton.onMouseOut = this._onMouseOutSupplyAll = null, this.supplyAllButton.onClick = this._onClickSupplyAll = null, this.supplyAllButton.dispose(), this.supplyAllButton = null, this.arrowTopButton.dispose(), this.arrowTopButton = null, this.arrowBottomButton.dispose(), this.arrowBottomButton = null, this.onUpdateSupplyEdit = null, this.onClickSupplyAll = null, this.mainView = null, this.deckSupplyBanners = null, this.deckId = null, this.supplyEditor = null
            }, t
        }();
    e.TaskEditSupplyDeck = c
}