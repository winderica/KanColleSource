const function1263 = function (t, e, i) {
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
    var o = i(5), r = i(0), s = i(2), a = i(8), _ = i(51), l = i(23), u = i(40), c = i(58), h = i(244), p = i(20),
        d = i(243), f = i(1), y = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._vanishGauge = function () {
                    r.default.sound.bgm.play(135, !1), n._scene.view.gauge_layer.vanish(function () {
                        createjs.Tween.get(null).wait(9500).call(function () {
                            n._hideBalloon()
                        })
                    })
                }, n._hideBalloon = function () {
                    createjs.Tween.get(n._balloon).wait(500).to({ y: -6, alpha: 0 }, 100).call(function () {
                        n._balloon.parent.removeChild(n._balloon), n._balloon = null, n._hideMapUI()
                    })
                }, n._showWarResult = function () {
                    n._model.sortie.getNextCell().getEOSupplyWarResult() > 0 ? (n._dialog = new v, n._dialog.position.set(o.default.width / 2, o.default.height / 2), n._dialog.initialize(), n._dialog.activate(), n._dialog.scale.set(1.2), n._dialog.alpha = 0, n._scene.view.universal_layer.addChild(n._dialog), createjs.Tween.get(n._dialog).wait(500).to({
                        scaleX: 1,
                        scaleY: 1,
                        alpha: 1
                    }, 350).call(function () {
                        var t = new a.AreaBox(0);
                        t.buttonMode = !0;
                        var e = new c.GearBtnNext;
                        e.position.set(1140, 660), e.initialize(), e.activate(), t.addChild(e), n._scene.view.universal_layer.addChild(t), t.once(f.EventType.CLICK, function () {
                            createjs.Tween.get(e).to({ alpha: 0 }, 300).call(function () {
                                e.deactivate(), e.dispose(), n._scene.view.universal_layer.removeChild(t), n._showBonusItem()
                            })
                        })
                    })) : n._showBonusItem()
                }, n._waitClick = function () {
                    null != n._dialog && (n._scene.view.universal_layer.removeChild(n._dialog), n._dialog.deactivate(), n._dialog.dispose(), n._dialog = null), null != n._bonus_task && (n._bonus_task.dispose(), n._bonus_task = null);
                    var t = new a.AreaBox(0), e = new u.GearBtnHome;
                    e.position.set(1140, 660), e.initialize(), e.activate(), t.addChild(e), t.buttonMode = !0, n._scene.view.universal_layer.addChild(t), t.once(f.EventType.CLICK, function () {
                        t.buttonMode = !1, createjs.Tween.get(e).to({ alpha: 0 }, 300).call(function () {
                            e.deactivate(), e.dispose(), t.removeChild(e), n._endTask()
                        })
                    })
                }, n._scene = e, n._model = i, n
            }

            return n(e, t), e.prototype._start = function () {
                this._showBalloon()
            }, e.prototype._showBalloon = function () {
                var t = this, e = this._model.sortie.getNextCell(), i = e.getEOSupplyItem();
                null != i && i.count > 0 ? (r.default.sound.bgm.fadeOut(1e3), createjs.Tween.get(null).wait(1200).call(function () {
                    r.default.sound.bgm.play(134, !1), t._balloon = new m, t._balloon.x = 21, t._balloon.y = -6, t._balloon.alpha = 0, t._balloon.initialize(i.id, i.count), t._scene.view.map.ship_icon.addChild(t._balloon), createjs.Tween.get(t._balloon).to({
                        y: -29,
                        alpha: 1
                    }, 100)
                }).wait(4e3).call(function () {
                    t._reduceGauge()
                })) : this._reduceGauge()
            }, e.prototype._reduceGauge = function () {
                var t = this, e = this._model.sortie.map.defeat_required, i = e - this._model.sortie.map.defeat_count;
                if (e > 0 && i > 0) {
                    i -= 1;
                    var n = createjs.Tween.get(null);
                    n.wait(1500), 0 == i ? n.call(function () {
                        t._scene.view.gauge_layer.update(i, e, 2e3, t._vanishGauge)
                    }) : n.call(function () {
                        t._scene.view.gauge_layer.update(i, e, 2e3, t._hideBalloon)
                    })
                } else this._hideBalloon()
            }, e.prototype._hideMapUI = function () {
                var t = this;
                this._scene.view.message_box.deactivate(function () {
                    createjs.Tween.get(t._scene.view.gauge_layer).to({ alpha: 0 }, 300).wait(500).call(function () {
                        var e = t._model.sortie.getNextCell(), i = e.getEOSupplyWarResult(),
                            n = e.getEOSupplyBonusItem();
                        i <= 0 && null == n ? t._closeShutter2() : t._closeShutter1()
                    })
                })
            }, e.prototype._closeShutter1 = function () {
                var t = new _.Shutter;
                t.initializeDark(), this._scene.view.universal_layer.addChild(t), t.close(200), createjs.Tween.get(null).wait(500).call(this._showWarResult)
            }, e.prototype._showBonusItem = function () {
                var t = this, e = this._model.sortie.getNextCell(), i = e.getEOSupplyBonusItem();
                if (null != i) {
                    if (5 == i.type) {
                        var n = this._scene.view.universal_layer, o = i.id, r = i.count;
                        this._bonus_task = new h.TaskBonusUseItem(n, o, r, !0), this._bonus_task.start(function () {
                            t._closeShutter2()
                        })
                    }
                } else this._closeShutter2()
            }, e.prototype._closeShutter2 = function () {
                var t = new _.Shutter;
                t.initializeDark(), this._scene.view.universal_layer.addChild(t), t.close(200), createjs.Tween.get(null).wait(500).call(this._waitClick)
            }, e
        }(s.TaskBase);
    e.CellTaskAnchor = y;
    var m = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._bg = new PIXI.Sprite, e._bg.y = -92, e.addChild(e._bg), e
        }

        return n(e, t), e.prototype.initialize = function (t, e) {
            switch (t) {
                case 1:
                    this._bg.texture = p.MAP_COMMON.getTexture(50);
                    break;
                case 2:
                    this._bg.texture = p.MAP_COMMON.getTexture(54);
                    break;
                case 3:
                    this._bg.texture = p.MAP_COMMON.getTexture(58);
                    break;
                case 4:
                    this._bg.texture = p.MAP_COMMON.getTexture(62);
                    break;
                default:
                    this._bg.texture = PIXI.Texture.EMPTY
            }
            var i = Math.log(e) * Math.LOG10E + 1;
            i = Math.floor(i);
            for (var n = e, o = 0; o < i; o++) {
                var r = new d.NumericalDisplay(n % 10);
                r.x = 45 + 15 * i / 2 - 15 * o, r.y = -18, this.addChild(r), n = Math.floor(n / 10)
            }
            var s = new d.NumericalDisplay(-1);
            s.x = 45 + -8 * i, s.y = -18, this.addChild(s)
        }, e
    }(PIXI.Container), v = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._bg = new PIXI.Sprite, e._bg.position.set(-369, -125), e.addChild(e._bg), e._txt1 = new PIXI.Sprite, e._txt1.position.set(-189, 6), e.addChild(e._txt1), e._txt2 = new PIXI.Sprite, e._txt2.position.set(12, 50), e.addChild(e._txt2), e._txt3 = new PIXI.Sprite, e._txt3.position.set(39, 48), e.addChild(e._txt3), e._img = new PIXI.Sprite, e._img.position.set(203, -48), e.addChild(e._img), e
        }

        return n(e, t), e.prototype.initialize = function () {
            this._bg.texture = p.MAP_COMMON.getTexture(148), this._txt1.texture = p.MAP_COMMON.getTexture(151), this._txt2.texture = p.MAP_COMMON.getTexture(152), this._txt3.texture = p.MAP_COMMON.getTexture(153), this._img.texture = p.MAP_COMMON.getTexture(149)
        }, e.prototype.activate = function () {
            var t = this;
            null == this._t && (this._img.texture = p.MAP_COMMON.getTexture(149), this._t = createjs.Tween.get(null, { loop: !0 }).wait(300).call(function () {
                t._img.texture = p.MAP_COMMON.getTexture(150)
            }).wait(300).call(function () {
                t._img.texture = p.MAP_COMMON.getTexture(149)
            }))
        }, e.prototype.deactivate = function () {
            null != this._t && (this._t.setPaused(!0), this._t = null, this._img.texture = p.MAP_COMMON.getTexture(149))
        }, e.prototype.dispose = function () {
            this.deactivate()
        }, e
    }(l.Container)
}