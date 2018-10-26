const function1020 = function (t, e, i) {
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
    var o = i(0), r = i(108), s = i(32), a = i(373), _ = i(29), u = i(38), l = i(223), c = i(224), h = i(1021),
        p = i(1025), d = i(1031), f = i(1033), y = i(1034), m = i(1038), v = i(1039), g = i(1040),
        b = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                for (n._list_offset = 0, n._onChangeArea = function (t) {
                    n._areaIcons.selected = t, n._updateList(t), n._detailView.update(null, null)
                }, n._onSelect = function (t) {
                    var e = o.default.model.expedition.get(t);
                    if (null != e) {
                        for (var i = o.default.model.deck.getAll(), r = null, s = 0, a = i; s < a.length; s++) {
                            var _ = a[s];
                            if (null != _.expedition && _.expedition.expedition_id == t) {
                                r = _;
                                break
                            }
                        }
                        n._detailView.update(e, r)
                    }
                }, n._onDecision = function (t) {
                    if (null == n._deckSelect) {
                        n._deckSelect = new p.ContainerDeckSelect(n._onGo);
                        var e = o.default.model.deck.getIDs(), i = e.indexOf(1);
                        -1 != i && e.splice(i, 1);
                        var r = o.default.model.deck.isCombined();
                        n._deckSelect.initialize(t, e, r), n.addChild(n._deckSelect), n._deckSelect.cancelArea.show(300), createjs.Tween.get(n._detailView).to({ x: 323 }, 300), createjs.Tween.get(n._deckSelect.panel).to({ x: 493 }, 300).call(function () {
                            n._deckSelect.activate()
                        })
                    }
                }, n._onGo = function (t, e) {
                    if (-1 == e) n._deckSelect.deactivate(), n._deckSelect.cancelArea.hide(300), createjs.Tween.get(n._detailView).to({ x: 840 }, 300), createjs.Tween.get(n._deckSelect.panel).to({ x: 1200 }, 300).call(function () {
                        n.removeChild(n._deckSelect), n._deckSelect.dispose(), n._deckSelect = null
                    }); else {
                        o.default.view.clickGuard = !0, n._deckSelect.deactivate();
                        var i = o.default.model.deck.get(e).getShipModel(0).mstID;
                        o.default.sound.voice.play(i.toString(), 26), (new s.APIConnector).add(new m.ExpeditionStartAPI(t, e)).add(new a.DeckAPI).start(function () {
                            n._deckSelect.cancelArea.hide(300), createjs.Tween.get(n._detailView).to({ x: 840 }, 300), createjs.Tween.get(n._deckSelect.panel).to({ x: 1200 }, 300).call(function () {
                                n.removeChild(n._deckSelect), n._deckSelect.dispose(), n._deckSelect = null, new v.GoExpeditionTask(n, t, e).start(function () {
                                    o.default.view.clickGuard = !1
                                })
                            })
                        })
                    }
                }, n._onCancel = function (t, e) {
                    new g.CancelExpeditionTask(n, e).start(function () {
                        var i = o.default.model.expedition.get(t), r = o.default.model.deck.get(e);
                        n._detailView.update(i, r)
                    })
                }, n._onScrollUp = function () {
                    n._list_offset--, n.__updateList()
                }, n._onScrollDown = function () {
                    n._list_offset++, n.__updateList()
                }, n._items = []; n._items.length < 8;) {
                    var _ = new y.ExpeditionListItem(n._onSelect);
                    _.position.set(171, 238 + 45 * n._items.length), n._items.push(_)
                }
                return n._list = new f.ExpeditionListFrame, n._list.position.set(165, 199), n._switch = new c.CompSwitchBtns(2, e, i), n._areaIcons = new d.ExpeditionAreaIconSet(n._onChangeArea), n._detailView = new h.ContainerDetail(n._onDecision, n._onCancel), n._switch.position.set(456, 151), n._areaIcons.position.set(167, 624), n._detailView.position.set(840, 0), n._arrowUp = new r.ArrowButton, n._arrowUp.scale.set(.85), n._arrowUp.position.set(470, 215), n._arrowBtm = new r.ArrowButton(!0), n._arrowBtm.scale.set(.85), n._arrowBtm.position.set(470, 614), n
            }

            return n(e, t), Object.defineProperty(e.prototype, "items", {
                get: function () {
                    return this._items
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "detail_view", {
                get: function () {
                    return this._detailView
                }, enumerable: !0, configurable: !0
            }), e.prototype.initialize = function () {
                var t = new PIXI.Sprite(_.SALLY_COMMON.getTexture(26));
                t.position.set(144, 139);
                var e = new PIXI.Sprite(_.SALLY_COMMON.getTexture(50));
                e.position.set(0, 102);
                var i = new PIXI.Sprite(u.SALLY_EXPEDITION.getTexture(14));
                i.position.set(198, 112);
                var n = new PIXI.Sprite(u.SALLY_EXPEDITION.getTexture(24));
                n.position.set(150, 138);
                for (var o = 0, r = this._items; o < r.length; o++) {
                    var s = r[o];
                    s.initialize()
                }
                this._list.initialize(), this._switch.initialize(), this._areaIcons.initialize(), this._detailView.initialize(), this.addChild(t), this.addChild(e), this.addChild(i), this.addChild(n);
                for (var a = 0, l = this._items; a < l.length; a++) {
                    var s = l[a];
                    this.addChild(s)
                }
                this.addChild(this._list), this.addChild(this._switch), this.addChild(this._areaIcons), this._arrowUp.initialize(this._onScrollUp), this.addChild(this._arrowUp), this._arrowBtm.initialize(this._onScrollDown), this.addChild(this._arrowBtm), this.addChild(this._detailView), this._updateList(1)
            }, e.prototype.activate = function () {
                for (var t = 0, e = this._items; t < e.length; t++) {
                    e[t].activate()
                }
                this._switch.activate(), this._areaIcons.activate(), this._arrowUp.activate(), this._arrowBtm.activate()
            }, e.prototype.deactivate = function () {
                for (var t = 0, e = this._items; t < e.length; t++) {
                    e[t].deactivate()
                }
                this._switch.deactivate(), this._areaIcons.deactivate(), this._arrowUp.deactivate(), this._arrowBtm.deactivate()
            }, e.prototype.dispose = function () {
                for (var t = 0, e = this._items; t < e.length; t++) {
                    e[t].dispose()
                }
                this._switch.dispose(), this._areaIcons.dispose(), this._arrowUp.dispose(), this._arrowBtm.dispose(), this._detailView.dispose(), this._deckSelect && this._deckSelect.dispose()
            }, e.prototype._updateList = function (t) {
                this._datalist = o.default.model.expedition.getInArea(t, !0);
                var e = this._areaIcons.getSelectedIcon();
                if (null != e) {
                    var i = Math.round(e.x + e.width / 2);
                    this._list.update(i)
                }
                this._arrowUp.resetInterval(), this._arrowBtm.resetInterval(), this._list_offset = 0, this.__updateList()
            }, e.prototype.__updateList = function () {
                for (var t = o.default.model.deck.getAll(), e = [], i = 0, n = t; i < n.length; i++) {
                    var r = n[i];
                    if (null != r.expedition && r.expedition.expedition_id > 0) {
                        for (; e.length <= r.mstID;) e.push(0);
                        e[r.mstID] = r.expedition.expedition_id
                    }
                }
                for (var s = 0; s < this._items.length; s++) {
                    var a = this._items[s], _ = s + this._list_offset;
                    if (_ < 0 || _ >= this._datalist.length) a.update(null, -1); else {
                        var u = this._datalist[_], l = e.indexOf(u.mstID);
                        a.update(u, l)
                    }
                }
                this._arrowUp.visible = 0 != this._list_offset, this._arrowBtm.visible = this._datalist.length - this._list_offset > this._items.length
            }, e
        }(l.ViewMainBase);
    e.ViewMain = b
}