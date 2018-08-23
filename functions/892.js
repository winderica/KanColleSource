const function892 = function (t, e, i) {
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
    var o = i(5), r = i(0), s = i(1), a = i(49), _ = i(29), u = i(8), l = i(83), c = i(220), h = i(37), p = i(6),
        d = i(20), f = i(35), y = i(351), v = i(86), g = i(893), m = i(894), b = i(896), w = i(353),
        x = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i._pageIndex = 0, i.animation = { progress: 0 }, i._onClickShip = function (t, e) {
                    var n = r.default.model.ship.get(t), o = v.Util.ShipDisassemblyValidation(t);
                    if (0 == o) return !(t == i.memShipId || i.checkedMemShipIdList.length > 0) && (i.shipDisassemblyConfirm.update(n, !1, o, [t]), i.shipDisassemblyConfirm.visibleContainer(!0), i.memShipId = t, !1);
                    var s = i.checkedMemShipIdList.indexOf(t);
                    s < 0 ? i.checkedMemShipIdList.push(t) : i.checkedMemShipIdList.splice(s, 1), i.shipDisassemblyChoice.toggleCheckBox(e);
                    var a = r.default.model.deck.isInDeck(t),
                        _ = !!a && null != r.default.model.deck.get(a[0]).expedition;
                    i.shipDisassemblyConfirm.update(n, _, o, i.checkedMemShipIdList), i.memShipId = t
                }, i._onChangePage = function (t) {
                    if (i._pageIndex != t) {
                        i.memShipId = null;
                        var e = i._getShipsInPage(i.ships, t);
                        i.shipDisassemblyChoice.update(e), i.shipDisassemblyConfirm.visibleContainer(!1), i._pageIndex = t, i.checkedMemShipIdList = []
                    }
                }, i._onClickDisassembly = function (t, e) {
                    var n = new b.DestroyShipAPI(t, e), s = i.shipDisassemblyConfirm.shipBanner,
                        a = new w.DisassemblyAnimation(240, 60);
                    a.position.set(s.x, s.y), r.default.view.clickGuard = !0, n.start(function () {
                        var t = new PIXI.Graphics;
                        t.beginFill(0, .2), t.drawRect(0, 0, o.default.width, o.default.height), t.endFill(), r.default.view.overLayer.addChild(t), s.parent.addChild(a);
                        var e = function () {
                            p.SE.play("201")
                        };
                        createjs.Tween.get(s).call(function () {
                            e(), a.play(5)
                        }).to({ alpha: .33 }, 1e3).call(e).to({ alpha: .66 }, 1e3).call(e).to({ alpha: 1 }, 1e3).call(function () {
                            a.dispose(), t.clear(), r.default.view.overLayer.removeChild(t), s.parent.removeChild(a), s.alpha = 1;
                            var e = r.default.model.ship.getAll();
                            _.ShipUtil.sort(e, i.shipSortKeyType);
                            var n = i._getPage(e.length), o = i._pageIndex;
                            n <= i._pageIndex && (o = n - 1) < 0 && (o = 0);
                            var u = i._getShipsInPage(e, o);
                            i.pagerView.init(n), i.pagerView.changePage(o), i.ships = e, i._pageIndex = o, i.shipDisassemblyChoice.update(u), i.shipDisassemblyConfirm.visibleContainer(!1), i.checkedMemShipIdList = [], r.default.view.portMain.updateInfo(), r.default.view.clickGuard = !1
                        }).play(null)
                    })
                }, i._onClickBackground = function () {
                    i.onComplete()
                }, i._onClickSort = function () {
                    i.memShipId = null, i.checkedMemShipIdList = [], i.shipDisassemblyConfirm.visibleContainer(!1);
                    var t;
                    switch (i.shipSortKeyType) {
                        case 0:
                            t = 2;
                            break;
                        case 2:
                            t = 3;
                            break;
                        case 3:
                            t = 4;
                            break;
                        case 4:
                            t = 0
                    }
                    _.ShipUtil.sort(i.ships, t);
                    var e = i._getShipsInPage(i.ships, i._pageIndex);
                    i.shipDisassemblyChoice.update(e), i.shipSortButton.update(t), y.ArsenalSceneMemory.shipSortKeyType = i.shipSortKeyType = t
                }, i.mainView = e, i.list_tit_bg_0 = new PIXI.Sprite(d.COMMON_MAIN.getTexture(64)), i.list_tit_bg_1 = new PIXI.Sprite(d.COMMON_MAIN.getTexture(64)), i.shipSortButton = new c.ShipSortButton, i.shipSortButton.position.set(582, 7), i.shipSortButton.onClick = i._onClickSort, i.pagerView = new l.PagerView, i.pagerView.position.set(42, 529), i.pagerView.onChangePage = i._onChangePage, i.shipDisassemblyChoice = new g.ShipDisassemblyChoice, i.shipDisassemblyChoice.onClickShip = i._onClickShip, i.shipDisassemblyChoice.addChild(i.shipSortButton, i.pagerView), i.shipDisassemblyConfirm = new m.ShipDisassemblyConfirm, i.shipDisassemblyConfirm.position.set(651, -16), i.shipDisassemblyConfirm.onClickStart = i._onClickDisassembly, i.blue_txt_01 = new PIXI.Sprite(d.COMMON_MAIN.getTexture(0)), i.blue_txt_01.anchor.set(0, .5), i.blue_txt_01.position.set(22, i.list_tit_bg_0.height / 2 - 4), i.blue_txt_11 = new PIXI.Sprite(f.ARSENAL_MAIN.getTexture(9)), i.blue_txt_11.anchor.set(0, .5), i.blue_txt_11.position.set(22, i.list_tit_bg_0.height / 2 - 4), i.list_tit_bg_0.position.set(0, -37), i.list_tit_bg_1.position.set(654, -37), i.list_tit_bg_0.addChild(i.blue_txt_01), i.list_tit_bg_1.addChild(i.blue_txt_11), i.addChild(i.shipDisassemblyChoice, i.shipDisassemblyConfirm, i.list_tit_bg_0, i.list_tit_bg_1), i.position.set(1200, 139);
                return i.dialogBackground = new u.AreaBox(a.UISettings.DIALOG_BG_ALPHA), i.dialogBackground.alpha = 0, i.dialogBackground.position.set(0, 103), i.dialogBackground.height = o.default.height - 103, i.mainView.addChild(i.dialogBackground), i.mainView.addChild(i), i.checkedMemShipIdList = [], i.dialogBackground.on(s.EventType.CLICK, i._onClickBackground), i
            }

            return n(e, t), Object.defineProperty(e.prototype, "useShipSortKeyType", {
                get: function () {
                    return this.shipSortKeyType
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "pageIndex", {
                get: function () {
                    return this._pageIndex
                }, enumerable: !0, configurable: !0
            }), e.prototype.start = function (t, e) {
                var i = this;
                r.default.view.clickGuard = !0;
                var n = r.default.model.ship.getAll();
                _.ShipUtil.sort(n, t);
                var o = this._getShipsInPage(n, e), s = this._getPage(n.length);
                this.pagerView.init(s), this.shipSortButton.update(t), this.shipSortKeyType = t, this._pageIndex = e, this.pagerView.changePage(e), this.ships = n, this.shipDisassemblyChoice.update(o), this.animation.progress = 0, this.x = 1200;
                var a = function () {
                    i.x = 1200 - 945 * i.animation.progress, i.dialogBackground.alpha = i.animation.progress
                };
                createjs.Tween.removeTweens(this.animation);
                var u = createjs.Tween.get(this.animation);
                u.call(function () {
                    i.position.x = 1200, u.addEventListener("change", a)
                }).to({ progress: 1 }, 200).call(function () {
                    u.removeAllEventListeners("change"), createjs.Tween.removeTweens(u.target), i.animation.progress = 1, a(), i.dialogBackground.width = 288, r.default.view.clickGuard = !1
                })
            }, e.prototype.hide = function (t) {
                var e = this;
                h.TaskLoadShipResource.abortBy(this.shipDisassemblyConfirm.shipBanner), this.dialogBackground.width = o.default.width, r.default.view.clickGuard = !0, this.animation.progress = 0;
                var i = function () {
                    e.x = 255 + 945 * e.animation.progress, e.dialogBackground.alpha = 1 - e.animation.progress
                };
                createjs.Tween.removeTweens(this.animation);
                var n = createjs.Tween.get(this.animation);
                n.call(function () {
                    n.addEventListener("change", i)
                }).to({ progress: 1 }, 200).call(function () {
                    n.removeAllEventListeners("change"), createjs.Tween.removeTweens(n.target), e.animation.progress = 1, i(), r.default.view.clickGuard = !1, t()
                }), n.play(null)
            }, e.prototype.dispose = function () {
                if (this.dialogBackground.off(s.EventType.CLICK, this._onClickBackground), this.removeChildren(), createjs.Tween.removeTweens(this.animation), this.mainView.removeChild(this.dialogBackground), this.mainView.removeChild(this), this.list_tit_bg_0.removeChild(this.blue_txt_01), this.list_tit_bg_1.removeChild(this.blue_txt_11), this.shipDisassemblyChoice.dispose(), this.shipDisassemblyConfirm.dispose(), this.pagerView.dispose(), this.shipSortButton.dispose(), this.ships) for (var t = 0; t < this.ships.length; t++) this.ships[t] = null;
                this.onComplete = null, this.ships = null, this.shipSortKeyType = null, this._pageIndex = null, this.mainView = null, this.dialogBackground = null, this.shipDisassemblyChoice = null, this.shipDisassemblyConfirm = null, this.pagerView = null, this.shipSortButton = null, this.memShipId = null, this.checkedMemShipIdList = null, this.list_tit_bg_0 = null, this.list_tit_bg_1 = null, this.blue_txt_01 = null, this.blue_txt_11 = null, this.animation = null
            }, e.prototype._getShipsInPage = function (t, e) {
                var i = this.shipDisassemblyChoice.ITEM_NUM;
                return t.slice(e * i, e * i + i)
            }, e.prototype._getPage = function (t) {
                var e = this.shipDisassemblyChoice.ITEM_NUM;
                return Math.ceil(t / e)
            }, e
        }(PIXI.Container);
    e.ShipDisassemblyContainer = x
}