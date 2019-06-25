const function596 = function (t, e, i) {
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
    var o = i(5),
        r = i(0),
        s = i(1),
        a = i(2),
        _ = i(8),
        u = i(18),
        l = i(597),
        c = i(59),
        h = i(51),
        p = i(13),
        d = i(152),
        f = i(286),
        y = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._deck_id = e, n._expedition_result = i, n
            }
            return n(e, t), e.prototype._start = function () {
                this._showShutter()
            }, e.prototype._showShutter = function () {
                this._shutter = new h.Shutter, this._shutter.initializeDark(), this._shutter.close(0), this._shutter.interactive = !0, r.default.view.overLayer.addChild(this._shutter), this._loadResources()
            }, e.prototype._loadResources = function () {
                for (var t = this, e = new p.ShipLoader, i = this._expedition_result.ship_mem_ids, n = 0; n < i.length; n++) {
                    var o = i[n],
                        s = r.default.model.ship.get(o),
                        a = s.mstID,
                        _ = s.isDamaged();
                    0 == n && e.add(a, _, "full"), e.add(a, _, "banner")
                }
                e.load(function () {
                    t._showWhiteLight()
                })
            }, e.prototype._showWhiteLight = function () {
                var t = this;
                this._view = new l.ExpeditionResult, this._view.initialize(this._deck_id, this._expedition_result);
                var e = this._expedition_result;
                this._view.expedition_name.visible = !1, this._view.user_info.visible = !1, this._view.item.visible = !1;
                var i = e.item1;
                null != i && this._view.item.updateItem1(i.mstID, i.name, i.count), i = e.item2, null != i && this._view.item.updateItem2(i.mstID, i.name, i.count), this._view.item.updateMaterials(e.fuel, e.ammo, e.steel, e.baux), this._view.visible = !1, r.default.view.overLayer.addChild(this._view);
                var n = new u.FadeBox(1, 16777215);
                n.hide(0), r.default.view.overLayer.addChild(n), n.show(200, function () {
                    t._view.visible = !0, n.hide(200, function () {
                        r.default.view.overLayer.removeChild(n), t._showUserInfo()
                    })
                })
            }, e.prototype._showUserInfo = function () {
                var t = this;
                this._view.expedition_name.text = this._expedition_result.expedition_name, this._view.expedition_name.visible = !0;
                var e = r.default.model.basic.nickName,
                    i = this._expedition_result.user_level,
                    n = r.default.model.basic.rankName,
                    o = r.default.model.deck.get(this._deck_id).name;
                this._view.user_info.update(e, i, n, o), this._view.user_info.visible = !0;
                for (var s = this._expedition_result.ship_mem_ids, a = new createjs.Timeline([], null, {
                        paused: !0
                    }), _ = this._view.banners, u = 0; u < _.length; u++) {
                    var l = _[u];
                    if (s.length <= u) l.visible = !1;
                    else {
                        var c = r.default.model.ship.get(s[u]);
                        l.y = 68 * u + 15, l.alpha = 0, l.update(c, !1);
                        var h = createjs.Tween.get(l).wait(200 * u).to({
                            y: l.y - 15,
                            alpha: 1
                        }, 200);
                        a.addTween(h)
                    }
                }
                for (var p = this._view.infos.items, u = 0; u < p.length; u++) {
                    var d = p[u];
                    if (s.length <= u) d.visible = !1;
                    else {
                        var c = r.default.model.ship.get(s[u]);
                        d.y = 68 * u + 8, d.alpha = 0, d.initialize(), d.update(c.name, c.level)
                    }
                }
                this._view.infos.visible = !0;
                for (var f, u = 0; u < p.length; u++) {
                    var d = p[u];
                    null != d && (f = createjs.Tween.get(d).wait(500 + 100 * u).to({
                        y: d.y - 8,
                        alpha: 1
                    }, 200), a.addTween(f))
                }
                null != f && f.call(function () {
                    t._showTelopBG()
                }), a.setPaused(!1)
            }, e.prototype._showTelopBG = function () {
                var t = this;
                this._telop_bg = new PIXI.Sprite(d.COMMON_EXPEDITION.getTexture(10)), this._telop_bg.anchor.set(.5, .5), this._telop_bg.position.set(o.default.width / 2, o.default.height / 2), this._telop_bg.scale.set(1, 0), r.default.view.overLayer.addChild(this._telop_bg), createjs.Tween.get(this._telop_bg.scale).to({
                    y: 2
                }, 200).call(function () {
                    t._showTelop()
                })
            }, e.prototype._showTelop = function () {
                var t = this,
                    e = o.default.height / 2;
                this._telop_label = new PIXI.Sprite(d.COMMON_EXPEDITION.getTexture(2)), this._telop_label.anchor.set(.5, .5), this._telop_label.position.set(1338, e), 2 == this._expedition_result.result ? (this._telop_result = new PIXI.Sprite(d.COMMON_EXPEDITION.getTexture(9)), this._telop_result.position.set(795, e)) : 1 == this._expedition_result.result ? (this._telop_result = new PIXI.Sprite(d.COMMON_EXPEDITION.getTexture(7)), this._telop_result.position.set(909, e)) : (this._telop_result = new PIXI.Sprite(d.COMMON_EXPEDITION.getTexture(8)), this._telop_result.position.set(909, e)), this._telop_result.anchor.set(.5, .5), this._telop_result.scale.set(1.6, 1.6), this._telop_result.alpha = 0, r.default.view.overLayer.addChild(this._telop_label), r.default.view.overLayer.addChild(this._telop_result), createjs.Tween.get(this._telop_label).to({
                    x: 426
                }, 1e3).to({
                    x: 330
                }, 1e3), createjs.Tween.get(this._telop_result).wait(1500).to({
                    alpha: 1
                }, 800, createjs.Ease.bounceOut), createjs.Tween.get(this._telop_result.scale).wait(1500).to({
                    x: 1,
                    y: 1
                }, 800, createjs.Ease.bounceOut).call(function () {
                    t._waitClick()
                })
            }, e.prototype._waitClick = function () {
                var t = this;
                this._gear_btn = new c.GearBtnNext, this._gear_btn.position.set(1145, 666), this._gear_btn.initialize(), this._click_area = new _.AreaBox(0), this._click_area.buttonMode = !0, r.default.view.overLayer.addChild(this._gear_btn), r.default.view.overLayer.addChild(this._click_area), this._gear_btn.activate(), this._click_area.once(s.EventType.CLICK, function () {
                    t._hideTelop()
                })
            }, e.prototype._hideTelop = function () {
                var t = this;
                createjs.Tween.get(this._telop_label).to({
                    alpha: 0
                }, 100), createjs.Tween.get(this._telop_result).to({
                    alpha: 0
                }, 100), createjs.Tween.get(this._telop_bg.scale).wait(100).to({
                    y: 0
                }, 50).call(function () {
                    t._removeChild(t._telop_label), t._removeChild(t._telop_result), t._removeChild(t._telop_bg), t._showBonusAndItem()
                })
            }, e.prototype._showBonusAndItem = function () {
                var t = this;
                this._view.bonus.alpha = 0, this._view.bonus.visible = !0, createjs.Tween.get(this._view.bonus).to({
                    alpha: 1
                }, 100), this._view.item.alpha = 0, this._view.item.visible = !0, createjs.Tween.get(this._view.item).wait(50).to({
                    alpha: 1
                }, 100).call(function () {
                    t._waitClick2()
                });
                var e = this._expedition_result.ship_mem_ids[0],
                    i = r.default.model.ship.get(e),
                    n = r.default.resources.getShip(i.mstID, i.isDamaged(), "full"),
                    o = new PIXI.Sprite(n),
                    s = r.default.model.ship_graph.get(i.mstID).getCenterOffset(i.isDamaged());
                o.x = s.x / this._view.ship_canvas.scale.x, o.y = s.y / this._view.ship_canvas.scale.y, this._view.ship_canvas.addChild(o)
            }, e.prototype._waitClick2 = function () {
                var t = this;
                this._click_area.once(s.EventType.CLICK, function () {
                    t._viewUpdate()
                })
            }, e.prototype._viewUpdate = function () {
                var t = this;
                (new f.TaskExpeditionAlertUpdate).start(function () {
                    r.default.view.portMain.updateInfo(), t._hide()
                })
            }, e.prototype._hide = function () {
                var t = this;
                this._gear_btn.deactivate(), this._gear_btn.dispose(), this._removeChild(this._gear_btn), createjs.Tween.get(this._view).to({
                    alpha: 0
                }, 200), createjs.Tween.get(this._shutter).to({
                    alpha: 0
                }, 200).call(function () {
                    t._removeChild(t._click_area), t._removeChild(t._view), t._view.dispose(), t._removeChild(t._shutter), t._endTask()
                })
            }, e.prototype._removeChild = function (t) {
                r.default.view.overLayer.removeChild(t)
            }, e
        }(a.TaskBase);
    e.TaskExpeditionResultShow = y
}