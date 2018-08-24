const function120 = function (t, e, i) {
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
    var o = i(5), r = i(0), s = i(26), a = i(45), _ = i(2), u = i(7), l = i(19), c = i(16), h = i(24), p = i(6),
        d = i(15), f = i(1320), y = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._scene = e, n._record = i, n
            }

            return n(e, t), e.prototype._start = function () {
                for (var t = this, e = !1, i = this._scene.data.model.deck_f.ships, n = 0; n < i.length; n++) {
                    var o = i[n];
                    if (null != o && 1 == o.isSubMarine()) {
                        var r = this._scene.view.bannerGroupLayer.getBanner(o);
                        this._playSubMarineAnimation(r), e = !0
                    }
                }
                for (var s = this._scene.data.model.deck_e.ships, n = 0; n < s.length; n++) {
                    var o = s[n];
                    if (null != o && 1 == o.isSubMarine()) {
                        var r = this._scene.view.bannerGroupLayer.getBanner(o);
                        this._playSubMarineAnimation(r), e = !0
                    }
                }
                1 == e ? (p.SE.play("256"), p.SE.play("108"), createjs.Tween.get(null).wait(2e3).call(function () {
                    t._readySakuteki()
                })) : this._readySakuteki()
            }, e.prototype._playSubMarineAnimation = function (t) {
                var e = t.getGlobalPos(!0), i = new f.SubMarineWave;
                i.initialize(), i.position.set(e.x, e.y + s.BannerSize.H / 6), this._scene.view.layer_cutin.addChild(i), i.play(), t.showBabble()
            }, e.prototype._readySakuteki = function () {
                var t = this._record.raw.sakuteki;
                0 == t.hasPlane_f() && 0 == t.isSuccess_f() ? this._endTask() : this._startSakuteki()
            }, e.prototype._startSakuteki = function () {
                var t = this;
                this._scene.view.layer_title.show(0), this._scene.view.layer_info2.once("complete", function () {
                    0 == t._record.raw.sakuteki.hasPlane_f() && t._noPlane()
                }), this._scene.view.layer_info2.showCenter(0), createjs.Tween.get(null).wait(950).call(function () {
                    if (1 == t._record.raw.sakuteki.hasPlane_f()) {
                        var e = t._searchEquipedSlotitems();
                        t._loadPlaneImage(e)
                    }
                })
            }, e.prototype._noPlane = function () {
                var t = this, e = new c.FadeBox(.5);
                e.hide(0), this._scene.view.layer_title.addChild(e), e.show(700, function () {
                    t._showTelop(null, e)
                })
            }, e.prototype._loadPlaneImage = function (t) {
                var e = this;
                if (null == t) {
                    var i = new PIXI.Sprite(d.BATTLE_MAIN.getTexture(55));
                    i.anchor.set(.5), this._flyPlane(i)
                } else {
                    var n = t.mst_id, o = new h.SlotLoader;
                    o.add(n, "item_up"), o.load(function () {
                        var i = new PIXI.Container, o = new PIXI.Sprite(d.BATTLE_MAIN.getTexture(31));
                        o.anchor.set(.5, 0);
                        var s = new PIXI.Sprite(r.default.resources.getSlotitem(n, "item_up"));
                        s.anchor.set(.5);
                        var _ = 1, l = 1;
                        if (1 == a.PlaneConst.OFFSET.hasOwnProperty(n.toString())) {
                            var c = a.PlaneConst.OFFSET[n], h = u.ObjUtil.getNumber(c, "x"),
                                p = u.ObjUtil.getNumber(c, "y"), f = u.ObjUtil.getNumber(c, "r"),
                                y = u.ObjUtil.getNumber(c, "sx", 1);
                            s.x += h, s.y += p, s.rotation += -f / 180 * Math.PI, _ *= y
                        }
                        1 == a.PlaneConst.SAKUTEKI_SPSCALE_MSTID.hasOwnProperty(t.mst_id.toString()) ? (_ *= .44, l *= .44) : 1 == a.PlaneConst.SAKUTEKI_SPSCALE_ETYPE.hasOwnProperty(t.equipTypeSp.toString()) ? (_ *= .4, l *= .4) : (_ *= .32, l *= .32), s.scale.set(_, l), o.scale.set(3.125 * _, 3.125 * l), i.addChild(o), i.addChild(s), e._flyPlane(i)
                    })
                }
            }, e.prototype._flyPlane = function (t) {
                var e = this, i = new PIXI.Sprite(d.BATTLE_MAIN.getTexture(86));
                i.anchor.set(.5), i.rotation = -Math.PI / 3, i.scale.set(0), i.position.set(o.default.width / 2, o.default.height / 2);
                var n = new c.FadeBox(.5);
                n.hide(0), t.position.set(-99, 789), this._scene.view.layer_title.addChild(i, n, t), createjs.Tween.get(i.scale).to({
                    x: 2.85,
                    y: 2.85
                }, 500).wait(1300).call(function () {
                    e._scene.view.raderLayer.rader_e.wave()
                }), n.show(700), createjs.Tween.get(t).wait(200).call(function () {
                    p.SE.play("113")
                }).to({ x: 1298, y: 0 }, 2e3).call(function () {
                    e._scene.view.layer_info2.removeChild(t), e._showTelop(i, n)
                })
            }, e.prototype._showTelop = function (t, e) {
                var i, n = this, o = this._record.raw.sakuteki;
                i = 1 == o.isSuccess_f() ? 1 == o.hasMikikan_f() ? 2 : 1 : 1 == o.hasMikikan_f() ? 4 : 3;
                var r = this._scene.view.raderLayer, s = r.rader_e;
                if (this._scene.view.layer_cutin.addChild(s), 1 == this._record.raw.sakuteki.isSuccess_f()) {
                    var a = this._scene.data.model.deck_e, _ = a.formation, u = a.type, l = a.getCountMainDeck(),
                        c = a.getCountSubDeck();
                    s.show(_, u, l, c)
                }
                this._scene.view.layer_info2.once("complete", function () {
                    r.resetChildren()
                }), this._scene.view.layer_info2.showTop(i), null != t ? createjs.Tween.get(t).wait(1300).call(function () {
                    e.hide(500)
                }).to({ alpha: 0 }, 500).call(function () {
                    t.parent.removeChild(t), e.parent.removeChild(e), n._showLastTelop()
                }) : createjs.Tween.get(this).wait(1300).call(function () {
                    e.hide(500)
                }).call(function () {
                    e.parent.removeChild(e), n._showLastTelop()
                })
            }, e.prototype._showLastTelop = function () {
                var t = this;
                if (1 == this._record.raw.sakuteki.isSuccess_f()) {
                    this._scene.view.layer_info2.showCenter(5);
                    var e = new l.TweenTask;
                    e.addTweens(this._scene.view.bannerGroupLayer.enemies.createSakutekiTweens()), e.addTweens(this._scene.view.bannerGroupLayer.enemies_combined.createSakutekiTweens()), e.start(function () {
                        t._endTask()
                    })
                } else this._endTask()
            }, e.prototype._endTask = function () {
                var e = this;
                this._scene.view.layer_title.hide(function () {
                    t.prototype._endTask.call(e)
                })
            }, e.prototype._searchEquipedSlotitems = function () {
                for (var t = null, e = 0, i = this._scene.data.model.deck_f.ships, n = 0; n < i.length; n++) {
                    var o = i[n];
                    if (null != o) for (var r = 0; r < o.slots.length; r++) {
                        var s = o.slots[r];
                        if (null != s) {
                            var _ = s.equipType;
                            if (a.PlaneConst.SAKUTEKI.indexOf(_) >= 0) {
                                var u = o.getTousai(r);
                                if (u > 0) {
                                    var l = s.sakuteki + Math.sqrt(s.level);
                                    l > e && (e = l, t = s)
                                }
                            }
                        }
                    }
                }
                var n, o, r, s, _, u;
                return null != t && 25 == t.mst_id && (t = null), t
            }, e
        }(_.TaskBase);
    e.PhaseSakuteki = y
}