const function377 = function (t, e, i) {
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
    var o = i(2),
        r = i(13),
        s = i(23),
        a = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this,
                    r = new d,
                    s = new PIXI.Container,
                    a = new PIXI.Sprite,
                    l = new S,
                    u = new S,
                    c = new PIXI.Container,
                    h = new PIXI.Sprite,
                    p = new PIXI.Sprite,
                    f = new PIXI.Sprite,
                    y = new _(e.mst_id, e.isDamaged(), i, n);
                return h.filters = [u], a.filters = [l], o._attacker = e, o._chara = a, o._container = s, o._pack = r, o._preload_task = y, o._zuiun = h, o._zuiunMstId = i, o._zuiunFlashFilter = u, o._charaFlashFilter = l, o._mainArmament = p, o._mainArmamentMstID = n, o._mainArmamentText = f, o._zuiunGraphicContainer = c, o
            }
            return n(e, t), e.prototype.getPreloadTask = function () {
                return this._preload_task
            }, Object.defineProperty(e.prototype, "view", {
                get: function () {
                    return this._container
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dispose = function () {
                this._container.removeChildren(), this._zuiunGraphicContainer.removeChildren(), this._pack.dispose(), this._chara.filters = [], this._zuiun.filters = [], this._chara.texture = PIXI.Texture.EMPTY, this._zuiun.texture = PIXI.Texture.EMPTY, this._mainArmament.texture = PIXI.Texture.EMPTY, this._mainArmamentText.texture = PIXI.Texture.EMPTY, this.onCallAttackEffect = null, this.onCallAttackVoice = null, this._attacker = null, this._container = null, this._zuiunGraphicContainer = null, this._pack = null, this._chara = null, this._zuiun = null, this._preload_task = null, this._zuiunMstId = null, this._mainArmament = null, this._mainArmamentText = null, this._zuiunFlashFilter = null, this._charaFlashFilter = null, this._mainArmamentMstID = null
            }, e.prototype._start = function () {
                var t = this,
                    e = {
                        x: 0,
                        y: 0,
                        scale_x: 1,
                        scale_y: 1,
                        rotation: 0
                    };
                if (this._pack.mainArmamemntContainer.position.set(1560, 367.35 * 1.5), this._pack.zuiunContainer.position.set(-531, 320.65 * 1.5), this._pack.zuiunContainer.scale.set(.6, .6), this._pack.mainArmamentTextContainer.position.set(1800, 270), this._pack.smoke1.position.set(430.575, 538.8), this._pack.smoke2.position.set(289.1 * 1.5 + 284.25, 378.6), this._pack.smoke3.position.set(489, 436.8), this._pack.smoke1.anchor.set(.5, .5), this._pack.smoke2.anchor.set(.5, .5), this._pack.smoke3.anchor.set(.5, .5), this._pack.smoke1.scale.set(.8, .8), this._pack.smoke2.scale.set(.1, .1), this._pack.smoke3.scale.set(.15, .15), this._pack.smoke1.alpha = 0, this._pack.smoke2.alpha = 0, this._pack.smoke3.alpha = 0, this._pack.whiteBg.alpha = 0, this._pack.blueBg.alpha = 0, this._pack.zuiunFrame.alpha = 0, this._pack.telopBG.alpha = 0, 1 == c.PlaneConst.OFFSET.hasOwnProperty(this._zuiunMstId.toString())) {
                    var i = c.PlaneConst.OFFSET[this._zuiunMstId],
                        n = h.ObjUtil.getNumber(i, "x"),
                        o = h.ObjUtil.getNumber(i, "y"),
                        r = h.ObjUtil.getNumber(i, "r"),
                        s = h.ObjUtil.getNumber(i, "sx", 1),
                        a = s;
                    e.scale_x = a, e.scale_y = 1, e.x = n, e.y = o, e.rotation = -r
                }
                this._zuiun.rotation = e.rotation / 180 * Math.PI, this._zuiun.scale.set(e.scale_x, e.scale_y), this._zuiun.position.set(e.x, e.y), this._zuiunGraphicContainer.position.set(149.05 * 1.5, 223.05 * 1.5), this._mainArmamentText.anchor.set(.5, .5), this._mainArmamentText.scale.set(.8, .8), this._mainArmamentText.texture = u.default.resources.getSlotitem(this._mainArmamentMstID, "btxt_flat"), this._chara.texture = u.default.resources.getShip(this._attacker.mst_id, this._attacker.isDamaged(), "full"), this._zuiun.texture = u.default.resources.getSlotitem(this._zuiunMstId, "item_up"), this._zuiun.anchor.set(.5, .5), this._mainArmament.texture = u.default.resources.getSlotitem(this._mainArmamentMstID, "item_up"), this._mainArmament.scale.set(1.5, 1.5), this._mainArmament.anchor.set(.5, .5), this._zuiun.alpha = 0, this._chara.alpha = 0, this._pack.charaContainer.addChild(this._chara), this._zuiunGraphicContainer.addChild(this._zuiun), this._pack.zuiunContainer.addChild(this._zuiunGraphicContainer), this._pack.mainArmamemntContainer.addChild(this._mainArmament), this._pack.mainArmamentTextContainer.addChild(this._mainArmamentText), this._pack.zuiunFrame.update(this._attacker.friend), this._pack.telopBG.update(this._attacker.friend), this._container.addChild(this._pack.blueBg), this._container.addChild(this._pack.charaContainer), this._container.addChild(this._pack.zuiunContainer), this._container.addChild(this._pack.textZui, this._pack.textUn, this._pack.textRittaikougeki), this._container.addChild(this._pack.telopBG), this._container.addChild(this._pack.mainArmamentTextContainer), this._container.addChild(this._pack.mainArmamemntContainer), this._container.addChild(this._pack.zuiunFrame), this._container.addChild(this._pack.smoke1, this._pack.smoke2, this._pack.smoke3), this._container.addChild(this._pack.whiteBg);
                var _ = m.Sequence(function () {
                    return m.Call(function () {
                        return t.onCallAttackVoice()
                    })
                }, function () {
                    return t._CUT_01_TextEnter()
                }, function () {
                    return m.Delay(29 / 30 * 1e3)
                }, function () {
                    return m.Parallel(function () {
                        return t._CUT_02_ZuiunEnter()
                    }, function () {
                        return m.Sequence(function () {
                            return m.Delay(7 / 30 * 1e3)
                        }, function () {
                            return t._CUT_03_FrameEnter()
                        })
                    })
                }, function () {
                    return m.Delay(500)
                }, function () {
                    return m.Parallel(function () {
                        return t._CUT_04_ZuiunAttack()
                    }, function () {
                        return m.Sequence(function () {
                            return m.Delay(300)
                        }, function () {
                            return t._CUT_05_Explosion()
                        })
                    })
                }, function () {
                    return m.Delay(4 / 30 * 1e3)
                }, function () {
                    return t._CUT_06_WHITE_IN_OUT()
                });
                _.execute(function () {
                    _.dispose(), t._completedEnd()
                })
            }, e.prototype._CUT_04_ZuiunAttack = function () {
                var t = this;
                return m.Sequence(function () {
                    return m.Call(function () {
                        t._zuiunFlashFilter.factor = .8
                    })
                }, function () {
                    return m.Delay(1 / 30 * 1e3)
                }, function () {
                    return m.Call(function () {
                        t._zuiunFlashFilter.factor = 0
                    })
                }, function () {
                    return m.Delay(1 / 30 * 1e3)
                }, function () {
                    return m.Call(function () {
                        return p.SE.play("113")
                    })
                }, function () {
                    return m.Parallel(function () {
                        return m.Value(t._zuiunGraphicContainer.scale, {
                            x: 1.1,
                            y: 1.1
                        }, 7 / 30 * 1e3)
                    }, function () {
                        return m.Value(t._zuiun, {
                            rotation: t._zuiun.rotation + Math.PI / 180 * 45
                        }, 7 / 30 * 1e3)
                    }, function () {
                        return m.Value(t._pack.zuiunContainer.position, {
                            x: 391.6 * 1.5,
                            y: 1.5 * -41.3
                        }, 7 / 30 * 1e3)
                    })
                }, function () {
                    return m.Parallel(function () {
                        return m.Value(t._zuiunGraphicContainer.scale, {
                            x: .3,
                            y: .3
                        }, 400)
                    }, function () {
                        return m.Value(t._pack.zuiunContainer.position, {
                            x: 1062.225,
                            y: 309.9 * 1.5
                        }, 400)
                    })
                })
            }, e.prototype._CUT_06_WHITE_IN_OUT = function () {
                var t = this;
                return m.Sequence(function () {
                    return m.Value(t._pack.whiteBg, {
                        alpha: 1
                    }, 5 / 30 * 1e3)
                }, function () {
                    return m.Call(function () {
                        t._container.removeChild(t._pack.charaContainer), t._container.removeChild(t._pack.zuiunContainer), t._container.removeChild(t._pack.textZui), t._container.removeChild(t._pack.textUn), t._container.removeChild(t._pack.textRittaikougeki), t._container.removeChild(t._pack.telopBG), t._container.removeChild(t._pack.mainArmamemntContainer), t._container.removeChild(t._pack.mainArmamentTextContainer), t._container.removeChild(t._pack.zuiunFrame), t._container.removeChild(t._pack.smoke1), t._container.removeChild(t._pack.smoke2), t._container.removeChild(t._pack.smoke3), t._container.removeChild(t._pack.blueBg)
                    })
                }, function () {
                    return m.Delay(5 / 30 * 1e3)
                }, function () {
                    return m.Call(function () {
                        t.onCallAttackEffect()
                    })
                }, function () {
                    return m.Value(t._pack.whiteBg, {
                        alpha: 0
                    }, 5 / 30 * 1e3)
                }, function () {
                    return m.Delay(4 / 30 * 1e3)
                })
            }, e.prototype._CUT_05_Explosion = function () {
                var t = this;
                return m.Parallel(function () {
                    return m.Call(function () {
                        return p.SE.play("102")
                    })
                }, function () {
                    return m.Sequence(function () {
                        return m.Delay(1 / 30 * 1e3)
                    }, function () {
                        return m.Call(function () {
                            return p.SE.play("103")
                        })
                    })
                }, function () {
                    return m.Sequence(function () {
                        return m.Delay(2 / 30 * 1e3)
                    }, function () {
                        return m.Call(function () {
                            return p.SE.play("104")
                        })
                    })
                }, function () {
                    return m.Sequence(function () {
                        return m.Call(function () {
                            t._charaFlashFilter.factor = .8
                        })
                    }, function () {
                        return m.Delay(1 / 30 * 1e3)
                    }, function () {
                        return m.Call(function () {
                            t._charaFlashFilter.factor = 0
                        })
                    })
                }, function () {
                    return m.Sequence(function () {
                        return m.Call(function () {
                            t._mainArmament.position.set(-16, 0)
                        })
                    }, function () {
                        return m.Delay(1 / 30 * 1e3)
                    }, function () {
                        return m.Call(function () {
                            t._mainArmament.position.set(-7, 0)
                        })
                    }, function () {
                        return m.Delay(1 / 30 * 1e3)
                    }, function () {
                        return m.Call(function () {
                            t._mainArmament.position.set(0, 0)
                        })
                    })
                }, function () {
                    return m.Sequence(function () {
                        return m.Delay(2 / 30 * 1e3)
                    }, function () {
                        return m.Parallel(function () {
                            return m.Value(t._pack.smoke1, {
                                alpha: 1
                            }, 200)
                        }, function () {
                            return m.Value(t._pack.smoke1.scale, {
                                x: 1,
                                y: 1
                            }, 200)
                        })
                    }, function () {
                        return m.Parallel(function () {
                            return m.Value(t._pack.smoke1, {
                                alpha: 0
                            }, 400)
                        }, function () {
                            return m.Value(t._pack.smoke1.scale, {
                                x: 1.1,
                                y: 1.1
                            }, 400)
                        })
                    })
                }, function () {
                    return m.Sequence(function () {
                        return m.Delay(1 / 30 * 1e3)
                    }, function () {
                        return m.Sequence(function () {
                            return m.Parallel(function () {
                                return m.Value(t._pack.smoke2, {
                                    alpha: .65
                                }, 200)
                            }, function () {
                                return m.Value(t._pack.smoke2.scale, {
                                    x: .45,
                                    y: .45
                                }, 200)
                            })
                        }, function () {
                            return m.Parallel(function () {
                                return m.Value(t._pack.smoke2, {
                                    alpha: .89
                                }, 100)
                            }, function () {
                                return m.Value(t._pack.smoke2.scale, {
                                    x: .7,
                                    y: .7
                                }, 100)
                            })
                        }, function () {
                            return m.Value(t._pack.smoke2.scale, {
                                x: .8,
                                y: .8
                            }, 100)
                        })
                    }, function () {
                        return m.Call(function () {
                            t._pack.smoke2.alpha = 0
                        })
                    })
                }, function () {
                    return m.Sequence(function () {
                        return m.Parallel(function () {
                            return m.Value(t._pack.smoke3, {
                                alpha: .65
                            }, 100)
                        }, function () {
                            return m.Value(t._pack.smoke3.scale, {
                                x: .5,
                                y: .5
                            }, 100)
                        })
                    }, function () {
                        return m.Parallel(function () {
                            return m.Value(t._pack.smoke3.scale, {
                                x: .75,
                                y: .75
                            }, 100)
                        }, function () {
                            return m.Value(t._pack.smoke3, {
                                alpha: .13
                            }, 100)
                        })
                    }, function () {
                        return m.Call(function () {
                            t._pack.smoke3.alpha = 0
                        })
                    })
                })
            }, e.prototype._CUT_02_ZuiunEnter = function () {
                var t = this;
                this._pack.zuiunContainer.position.set(-531, 320.65 * 1.5), this._pack.zuiunContainer.scale.set(.6, .6), this._zuiun.alpha = 0;
                var e = function (t) {
                    return (createjs.Ease.quintOut(2 * t) + createjs.Ease.quintOut(t)) * (1 / 3)
                };
                return m.Parallel(function () {
                    return m.Call(function () {
                        return p.SE.play("115")
                    })
                }, function () {
                    return m.Value(t._pack.zuiunContainer.scale, {
                        x: 1,
                        y: 1
                    }, 20 / 30 * 1e3, e)
                }, function () {
                    return m.Value(t._pack.zuiunContainer.position, {
                        x: 238.55 * 1.5,
                        y: 1.5 * -50.55
                    }, 20 / 30 * 1e3, e)
                }, function () {
                    return m.Value(t._zuiun, {
                        alpha: 1
                    }, 20 / 30 * 1e3, e)
                })
            }, e.prototype._CUT_03_FrameEnter = function () {
                var t = this;
                switch (this._pack.zuiunFrame.anchor.set(.5, .5), this._pack.zuiunFrame.position.set(600, 360), this._pack.zuiunFrame.scale.set(1.15, 1.15), this._pack.zuiunFrame.alpha = 0, this._pack.telopBG.anchor.set(.5, .5), this._pack.telopBG.position.set(600, 617.925), this._pack.telopBG.alpha = 0, this._pack.charaContainer.position.set(636.95 * 1.5, -309), this._attacker.mst_id) {
                    case 553:
                        this._attacker.isDamaged() ? this._chara.position.set(85.5, 307.5) : this._chara.position.set(-201, 348);
                        break;
                    case 554:
                        this._attacker.isDamaged() ? this._chara.position.set(241.5, 399) : this._chara.position.set(0, 0)
                }
                this._chara.scale.set(1.5, 1.5), this._chara.alpha = 0, this._mainArmament.alpha = 0;
                var e = function (t) {
                    return (createjs.Ease.quintOut(2 * t) + createjs.Ease.quintOut(t)) * (1 / 3)
                };
                return m.Parallel(function () {
                    return m.Value(t._pack.zuiunFrame, {
                        alpha: 1
                    }, 13 / 30 * 1e3, createjs.Ease.linear)
                }, function () {
                    return m.Sequence(function () {
                        return m.Value(t._pack.zuiunFrame.scale, {
                            x: 1,
                            y: 1
                        }, 13 / 30 * 1e3, createjs.Ease.linear)
                    }, function () {
                        return m.Call(function () {
                            return p.SE.play("105")
                        })
                    })
                }, function () {
                    return m.Value(t._pack.telopBG, {
                        alpha: 1
                    }, 13 / 30 * 1e3, e)
                }, function () {
                    return m.Value(t._pack.charaContainer, {
                        x: -535.425,
                        y: -365.025
                    }, 13 / 30 * 1e3, e)
                }, function () {
                    return m.Value(t._chara, {
                        alpha: 1
                    }, 13 / 30 * 1e3, e)
                }, function () {
                    return m.Value(t._mainArmament, {
                        alpha: 1
                    }, 13 / 30 * 1e3, e)
                }, function () {
                    return m.Value(t._pack.mainArmamemntContainer.position, {
                        x: 311.775,
                        y: 500.625
                    }, 13 / 30 * 1e3, e)
                }, function () {
                    return m.Value(t._pack.mainArmamentTextContainer.position, {
                        x: 512.4 * 1.5,
                        y: 616.425
                    }, 13 / 30 * 1e3, e)
                })
            }, e.prototype._CUT_01_TextEnter = function () {
                var t = this;
                this._pack.textZui.anchor.set(.5, .5), this._pack.textUn.anchor.set(.5, .5), this._pack.textRittaikougeki.anchor.set(.5, .5), this._pack.textZui.position.set(372, 359.5), this._pack.textUn.position.set(460.5, 358.5), this._pack.textRittaikougeki.position.set(687, 359.5), this._pack.textZui.scale.set(1.15, 1.15), this._pack.textUn.scale.set(1.15, 1.15), this._pack.textRittaikougeki.scale.set(1.15, 1.15), this._pack.textZui.alpha = 0, this._pack.textUn.alpha = 0, this._pack.textRittaikougeki.alpha = 0;
                return m.Parallel(function () {
                    return m.Sequence(function () {
                        return m.Call(function () {
                            return p.SE.play("109")
                        })
                    }, function () {
                        return m.Delay(200)
                    }, function () {
                        return m.Call(function () {
                            return p.SE.play("109")
                        })
                    }, function () {
                        return m.Delay(200)
                    }, function () {
                        return m.Call(function () {
                            return p.SE.play("109")
                        })
                    })
                }, function () {
                    return m.Value(t._pack.blueBg, {
                        alpha: .7
                    }, .3)
                }, function () {
                    return m.Parallel(function () {
                        return m.Value(t._pack.textZui, {
                            alpha: 1
                        }, 4 / 30 * 1e3)
                    }, function () {
                        return m.Value(t._pack.textZui.scale, {
                            x: 1,
                            y: 1
                        }, 4 / 30 * 1e3)
                    })
                }, function () {
                    return m.Sequence(function () {
                        return m.Delay(200)
                    }, function () {
                        return m.Parallel(function () {
                            return m.Value(t._pack.textUn, {
                                alpha: 1
                            }, 4 / 30 * 1e3)
                        }, function () {
                            return m.Value(t._pack.textUn.scale, {
                                x: 1,
                                y: 1
                            }, 4 / 30 * 1e3)
                        })
                    })
                }, function () {
                    return m.Sequence(function () {
                        return m.Delay(400)
                    }, function () {
                        return m.Parallel(function () {
                            return m.Value(t._pack.textRittaikougeki, {
                                alpha: 1
                            }, 4 / 30 * 1e3)
                        }, function () {
                            return m.Value(t._pack.textRittaikougeki.scale, {
                                x: 1,
                                y: 1
                            }, 4 / 30 * 1e3)
                        })
                    })
                })
            }, e
        }(o.TaskBase);
    e.CutinZRK = a;
    var _ = function (t) {
            function e(e, i, n, o) {
                var r = t.call(this) || this;
                return r._ship_mst_id = e, r._plane_mst_id = n, r._slot_mst_id = o, r._damaged = i, r
            }
            return n(e, t), e.prototype._start = function () {
                this._loadShipImage()
            }, e.prototype._loadShipImage = function () {
                var t = this,
                    e = new r.ShipLoader;
                e.add(this._ship_mst_id, this._damaged, "full"), e.load(function () {
                    t._loadSlotImage()
                })
            }, e.prototype._loadSlotImage = function () {
                var t = this,
                    e = new s.SlotLoader;
                e.add(this._plane_mst_id, "item_up"), e.add(this._slot_mst_id, "item_up"), e.add(this._slot_mst_id, "btxt_flat"), e.load(function () {
                    t._endTask()
                })
            }, e
        }(o.TaskBase),
        l = i(1049),
        u = i(0),
        c = i(18),
        h = i(15),
        p = i(3),
        d = function () {
            function t() {
                var t = new PIXI.Sprite(l.BATTLE_ZRK.getTexture(7)),
                    e = new PIXI.Sprite(l.BATTLE_ZRK.getTexture(8)),
                    i = new PIXI.Sprite(l.BATTLE_ZRK.getTexture(9)),
                    n = new f,
                    o = new y,
                    r = new PIXI.Sprite(l.BATTLE_ZRK.getTexture(4)),
                    s = new PIXI.Sprite(l.BATTLE_ZRK.getTexture(5)),
                    a = new PIXI.Sprite(l.BATTLE_ZRK.getTexture(6)),
                    _ = new PIXI.Container,
                    u = new PIXI.Container,
                    c = new PIXI.Container,
                    h = new PIXI.Container,
                    p = (new PIXI.Graphics).beginFill(16777215).drawRect(0, 0, 1200, 720).endFill(),
                    d = (new PIXI.Graphics).beginFill(8900331).drawRect(0, 0, 1200, 720).endFill();
                this._textZui = t, this._textUn = e, this._textRittaikougeki = i, this._zuiunFrame = n, this._telopBG = o, this._smoke1 = r, this._smoke2 = s, this._smoke3 = a, this._charaContainer = _, this._whiteBg = p, this._zuiunContainer = u, this._mainArmamentContainer = c, this._mainArmamentTextContainer = h, this._blueBg = d
            }
            return Object.defineProperty(t.prototype, "textZui", {
                get: function () {
                    return this._textZui
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "textUn", {
                get: function () {
                    return this._textUn
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "textRittaikougeki", {
                get: function () {
                    return this._textRittaikougeki
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "zuiunFrame", {
                get: function () {
                    return this._zuiunFrame
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "telopBG", {
                get: function () {
                    return this._telopBG
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "smoke1", {
                get: function () {
                    return this._smoke1
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "smoke2", {
                get: function () {
                    return this._smoke2
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "smoke3", {
                get: function () {
                    return this._smoke3
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "whiteBg", {
                get: function () {
                    return this._whiteBg
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "blueBg", {
                get: function () {
                    return this._blueBg
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "charaContainer", {
                get: function () {
                    return this._charaContainer
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "zuiunContainer", {
                get: function () {
                    return this._zuiunContainer
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "mainArmamemntContainer", {
                get: function () {
                    return this._mainArmamentContainer
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "mainArmamentTextContainer", {
                get: function () {
                    return this._mainArmamentTextContainer
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.dispose = function () {
                this._charaContainer.removeChildren(), this._zuiunContainer.removeChildren(), this._mainArmamentContainer.removeChildren(), this._mainArmamentTextContainer.removeChildren(), this._textZui.texture = PIXI.Texture.EMPTY, this._textUn.texture = PIXI.Texture.EMPTY, this._textRittaikougeki.texture = PIXI.Texture.EMPTY, this._telopBG.texture = PIXI.Texture.EMPTY, this._smoke1.texture = PIXI.Texture.EMPTY, this._smoke2.texture = PIXI.Texture.EMPTY, this._smoke3.texture = PIXI.Texture.EMPTY, this._textZui = null, this._textUn = null, this._textRittaikougeki = null, this._zuiunFrame = null, this._telopBG = null, this._smoke1 = null, this._smoke2 = null, this._smoke3 = null, this._charaContainer = null, this._zuiunContainer = null, this._mainArmamentContainer = null, this._whiteBg = null, this._blueBg = null, this._mainArmamentTextContainer = null
            }, t
        }(),
        f = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), e.prototype.update = function (t) {
                var e;
                e = t ? l.BATTLE_ZRK.getTexture(0) : l.BATTLE_ZRK.getTexture(1), this.texture = e
            }, e
        }(PIXI.Sprite),
        y = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), e.prototype.update = function (t) {
                var e;
                e = t ? l.BATTLE_ZRK.getTexture(3) : l.BATTLE_ZRK.getTexture(2), this.texture = e
            }, e
        }(PIXI.Sprite),
        m = function () {
            function t() {}
            return t.Sequence = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return new w(t)
            }, t.Parallel = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return new k(t)
            }, t.Delay = function (t) {
                return new x(t)
            }, t.Call = function (t) {
                return new I(t)
            }, t.Condition = function (e, i, n) {
                return void 0 === n && (n = function () {
                    return t.DoNothing()
                }), new b(e, i, n)
            }, t.DoNothing = function () {
                return new v
            }, t.WaitForTask = function (t, e) {
                return new C(t, e)
            }, t.LoopFor = function (t, e) {
                return new P(t, e)
            }, t.Value = function (t, e, i, n, o, r) {
                return void 0 === n && (n = createjs.Ease.linear), void 0 === o && (o = function () {}), void 0 === r && (r = !1), new O(t, e, i, o, n, r)
            }, t.WaitForFrame = function (t) {
                return new T(t)
            }, t.Tick = function (t, e) {
                return new g(t, e)
            }, t.SILENT = function () {}, t.ENDLESS = t.SILENT, t
        }();
    e.$_$ = m;
    var g = function () {
            function t(t, e) {
                var i = this;
                this.onTick = function (t) {
                    var e = t;
                    i._checkCall() ? i._onTick(e) : (createjs.Ticker.removeEventListener("tick", i.onTick), i._onComplete())
                }, this._onTick = e, this._checkCall = t
            }
            return t.prototype.execute = function (t) {
                createjs.Ticker.addEventListener("tick", this.onTick), this._onComplete = t
            }, t.prototype.dispose = function () {
                this._onTick = null, this._checkCall = null, this._onComplete = null
            }, t.prototype.interrupt = function () {
                createjs.Ticker.removeEventListener("tick", this.onTick)
            }, t.prototype.interruptible = function () {
                return !0
            }, t
        }(),
        v = function () {
            function t() {}
            return t.prototype.interruptible = function () {
                return !0
            }, t.prototype.interrupt = function () {}, t.prototype.execute = function (t) {
                t()
            }, t.prototype.dispose = function () {}, t
        }(),
        b = function () {
            function t(t, e, i) {
                this._testCondition = t, this._trueCase = e, this._falseCase = i
            }
            return t.prototype.interruptible = function () {
                return this._job.interruptible()
            }, t.prototype.interrupt = function () {
                this._job.interrupt(), this._trueCase = function () {}, this._falseCase = function () {}, this._testCondition = function () {}
            }, t.prototype.execute = function (t) {
                var e = this._testCondition(),
                    i = e ? this._trueCase() : this._falseCase();
                this._job = i, i.execute(t)
            }, t.prototype.dispose = function () {
                this._job.dispose(), this._job = null, this._testCondition = null, this._trueCase = null, this._falseCase = null
            }, t
        }(),
        w = function () {
            function t(t) {
                var e = this;
                this._next = function () {
                    if (e._job && e._job.dispose(), e._job = null, e._seek < e._tasks.length) {
                        var t = e._tasks[e._seek++],
                            i = t();
                        e._job = i, i.execute(e._next)
                    } else e._onComplete()
                }, this._tasks = t
            }
            return t.prototype.push = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                1 == t.length ? this._tasks.push(t[0]) : this._tasks = this._tasks.concat(t)
            }, t.prototype.execute = function (t) {
                this._onComplete = t, this._start()
            }, t.prototype._start = function () {
                this._seek = 0, this._next()
            }, t.prototype.interruptible = function () {
                return this._job.interruptible()
            }, t.prototype.interrupt = function () {
                this._job.interrupt()
            }, t.prototype.dispose = function () {
                var t = this;
                this._job && this._job.dispose(), this._job = null, this._tasks.forEach(function (e, i) {
                    t._tasks[i] = null
                }), this._onComplete = null
            }, t
        }(),
        x = function () {
            function t(t) {
                this._duration = t
            }
            return t.prototype.execute = function (t) {
                var e = createjs.Tween.get(this).wait(this._duration),
                    i = e.call(t);
                this._tween = i, i.play(null)
            }, t.prototype.interruptible = function () {
                return !0
            }, t.prototype.interrupt = function () {
                createjs.Tween.removeTweens(this._tween.target)
            }, t.prototype.dispose = function () {
                this._tween = null, this._duration = null
            }, t
        }(),
        I = function () {
            function t(t) {
                this._call = t
            }
            return t.prototype.execute = function (t) {
                this._call(), t()
            }, t.prototype.dispose = function () {
                this._call = null
            }, t.prototype.interruptible = function () {
                return !0
            }, t.prototype.interrupt = function () {}, t
        }(),
        T = function () {
            function t(t) {
                this._frame = t
            }
            return t.prototype.execute = function (t) {
                var e = createjs.Tween.get(this, {
                    useTicks: !0
                }).wait(this._frame).call(function () {
                    t()
                });
                this._tween = e, e.play(null)
            }, t.prototype.dispose = function () {
                this._tween = null, this._frame = null
            }, t.prototype.interruptible = function () {
                return !0
            }, t.prototype.interrupt = function () {
                createjs.Tween.removeTweens(this._tween.target)
            }, t
        }(),
        O = function () {
            function t(t, e, i, n, o, r) {
                var s = this;
                this._complete = function () {
                    s._tween.removeEventListener("change", s.__onUpdate__), s.__onUpdate__(), s.__onComplete__()
                }, this.__onComplete__ = function () {
                    s._onComplete && s._onComplete()
                }, this.__onUpdate__ = function () {
                    s._onUpadte && s._onUpadte(s._target)
                }, this._target = t, this._to = e, this._duration = i, this._onUpadte = n, this._easing = o
            }
            return t.prototype.execute = function (t) {
                var e = this;
                this._onComplete = t;
                var i = createjs.Tween.get(this._target).to(this._to, this._duration, this._easing).call(function () {
                    e._complete()
                });
                i.addEventListener("change", this.__onUpdate__), this._tween = i, i.play(null)
            }, t.prototype.dispose = function () {
                this._target = null, this._to = null, this._duration = null, this._tween = null, this._easing = null, this._onUpadte = null
            }, t.prototype.interruptible = function () {
                return !0
            }, t.prototype.interrupt = function () {
                createjs.Tween.removeTweens(this._tween.target), this._complete = function () {}, this.__onUpdate__ = function () {}, this._onComplete = null, this._onUpadte = null
            }, t
        }(),
        C = function () {
            function t(t, e) {
                var i = this;
                this._completeLoopJob = function () {
                    i._loopJob.dispose(), i._loopJob = null, i._startLoopJob()
                }, this._completeMainJob = function () {
                    i._mainJob.dispose(), i._mainJob = null
                }, this._mainTask = t, this._loopTask = e
            }
            return t.prototype.execute = function (t) {
                this._onComplete = t, this._startMainJob(), this._startLoopJob()
            }, t.prototype._startMainJob = function () {
                var t = this._mainTask();
                this._mainJob = t, t.execute(this._completeMainJob)
            }, t.prototype._startLoopJob = function () {
                if (null == this._mainJob) this._onComplete();
                else {
                    var t = this._loopTask();
                    this._loopJob = t, t.execute(this._completeLoopJob)
                }
            }, t.prototype.dispose = function () {
                this._loopTask = null, this._mainTask = null, this._loopJob = null, this._mainJob = null, this._onComplete = null
            }, t.prototype.interrupt = function () {
                this._loopJob && this._loopJob.interrupt(), this._mainJob && this._mainJob.interrupt()
            }, t.prototype.interruptible = function () {
                var t = !0;
                return this._loopJob && (t = t && this._loopJob.interruptible()), this._mainJob && (t = t && this._mainJob.interruptible()), t
            }, t
        }(),
        P = function () {
            function t(t, e) {
                var i = this;
                this._for_ = function () {
                    if (i._job && i._job.dispose(), i._job = null, i._checkCondition()) {
                        var t = i._task();
                        i._job = t, t.execute(i._for_)
                    } else i._onComplete()
                }, this._checkCondition = t, this._task = e
            }
            return t.prototype.execute = function (t) {
                this._onComplete = t, this._for_()
            }, t.prototype.interruptible = function () {
                return !this._job || this._job.interruptible()
            }, t.prototype.interrupt = function () {
                this._for_ = function () {}, this._job && this._job.interrupt()
            }, t.prototype.dispose = function () {
                this._job && this._job.dispose(), this._onComplete = null, this._job = null, this._checkCondition = null
            }, t
        }(),
        k = function () {
            function t(t) {
                var e = this;
                this._complete_call = function () {
                    e._doneCounter++, e._tasks.length <= e._doneCounter && e._onComplete()
                }, this._tasks = t, this._jobs = [], this._doneCounter = 0
            }
            return t.prototype.push = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                1 == t.length ? this._tasks.push(t[0]) : this._tasks = this._tasks.concat(t)
            }, t.prototype.interruptible = function () {
                var t = !0;
                return this._jobs.forEach(function (e) {
                    var i = e.interruptible();
                    t = t && i
                }), t
            }, t.prototype.interrupt = function () {
                this._jobs.forEach(function (t) {
                    return t.interrupt()
                }), this._onComplete = function () {}
            }, t.prototype.execute = function (t) {
                this._onComplete = t, this.__call__()
            }, t.prototype.__call__ = function () {
                var t = this;
                if (0 == this._tasks.length) return void this._complete_call();
                this._tasks.forEach(function (e) {
                    var i = e();
                    t._jobs.push(i), i.execute(t._complete_call)
                })
            }, t.prototype.dispose = function () {
                var t = this;
                this._jobs.forEach(function (e, i) {
                    e.dispose(), t._jobs[i] = null
                }), this._jobs = null, this._complete_call = null, this._tasks.forEach(function (e, i) {
                    t._tasks[i] = null
                }), this._onComplete = null, this._doneCounter = null
            }, t
        }(),
        S = function (t) {
            function e() {
                var e = t.call(this, PIXI.Filter.defaultVertexSrc, ["varying vec2 vTextureCoord;", "varying vec2 vFilterCoord;", "uniform sampler2D uSampler;", "uniform sampler2D filterSampler;", "uniform float factor;", "void main(void){", "   vec4 masky = texture2D(filterSampler, vFilterCoord);", "   vec4 sample = texture2D(uSampler, vTextureCoord);", "   vec4 coloring = vec4(0.960784314,0.996078431,0.619607843,1.0);", "   vec4 blending = mix(sample,coloring,factor);", "   gl_FragColor = blending;", "   gl_FragColor *= sample.a;", "}"].join("\n")) || this;
                return e.uniforms.factor = 0, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "factor", {
                get: function () {
                    return this.uniforms.factor
                },
                set: function (t) {
                    this.uniforms.factor = t
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(PIXI.Filter)
}