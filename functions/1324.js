const function1324 = function (t, e, i) {
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
    var o = i(5), r = i(0), s = i(2), a = i(8), _ = i(146), u = i(12), l = i(19), c = i(14), h = i(24), p = i(6),
        d = i(438), f = i(1325), y = function (t) {
            function e(e, i, n, o, r) {
                void 0 === r && (r = null);
                var s = t.call(this) || this;
                return s._layer = e, s._taiha = i, s._night = n, s._mst_ids = o.slice(0, 3), s._offset = r, s._view = new v, s
            }

            return n(e, t), e.prototype._start = function () {
                this._loadResource()
            }, e.prototype._loadResource = function () {
                var t = this, e = new h.UIImageLoader("battle");
                e.add("battle_cutin_damage.json"), e.load(function () {
                    t._loadShipResource()
                })
            }, e.prototype._loadShipResource = function () {
                for (var t = this, e = new c.ShipLoader, i = 0, n = this._mst_ids; i < n.length; i++) {
                    var o = n[i];
                    e.add(o, !0, "full")
                }
                e.load(function () {
                    t._preUpload()
                })
            }, e.prototype._preUpload = function () {
                var t = this;
                r.default.settings.renderer.plugins.prepare.upload(d.BATTLE_CUTIN_DAMAGE.getTexture(0).baseTexture, function () {
                    t._initShipImages()
                })
            }, e.prototype._initShipImages = function () {
                for (var t = 0; t < this._mst_ids.length; t++) {
                    var e = this._mst_ids[t], i = this._view.ships.getContainer(t);
                    this._initShipImage(e, i)
                }
                this._view.ships.initXposition(), this._loadMapBG()
            }, e.prototype._initShipImage = function (t, e) {
                var i = r.default.resources.getShip(t, !0, "full"), n = new u.Sprite(i),
                    o = null === this._offset ? r.default.model.ship_graph.get(t).getBattleOffset(!0) : this._offset;
                n.position.set(o.x - 120, o.y - 120), e.addChild(n), e.visible = !0
            }, e.prototype._loadMapBG = function () {
                var t = this;
                0 == this._night ? this._view.bg.setDay(function () {
                    t._startAnim()
                }) : this._view.bg.setNight(function () {
                    t._startAnim()
                })
            }, e.prototype._startAnim = function () {
                var t = this;
                this._view.bg.alpha = 0, this._view.ships.y = -o.default.width / 2, this._view.ships.alpha = 0, this._view.frame.alpha = 0, this._view.mozi_layer.mozi1.scale.set(2.1), this._view.mozi_layer.mozi1.alpha = 0, this._view.mozi_layer.mozi2.scale.set(2.1), this._view.mozi_layer.mozi2.alpha = 0, this._view.mozi_layer.break.visible = !1, this._view.initialize(this._taiha), this._layer.addChild(this._view), createjs.Tween.get(this._view.bg).to({ alpha: 1 }, 350), createjs.Tween.get(this._view.frame).to({ alpha: 1 }, 350).call(function () {
                    t._showShips()
                })
            }, e.prototype._showShips = function () {
                var t = this, e = new l.TweenTask,
                    i = createjs.Tween.get(this._view.ships).to({ y: -540, alpha: 1 }, 150).to({ y: 15 }, 850);
                e.addTween(i), i = createjs.Tween.get(this._view.mozi_layer.mozi1).wait(400).to({
                    scaleX: 1.1,
                    scaleY: 1.1,
                    alpha: .35
                }, 150).to({ scaleX: 1.2, scaleY: 1.2 }, 50).wait(50).call(function () {
                    t._view.mozi_layer.mozi1.visible = !1
                }), e.addTween(i), i = createjs.Tween.get(this._view.mozi_layer.mozi2).wait(300).to({
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 1
                }, 150).wait(100).call(function () {
                    p.SE.play("109")
                }), e.addTween(i), e.start(function () {
                    t._break()
                })
            }, e.prototype._break = function () {
                var t = this, e = this._mst_ids[0].toString();
                r.default.sound.voice.play(e, 21), this._view.mozi_layer.mozi2.visible = !1, this._view.mozi_layer.break.visible = !0, this._view.mozi_layer.break.Play(function () {
                    t._view.mozi_layer.break.Dispose(), t._preEndAnim()
                })
            }, e.prototype._preEndAnim = function () {
                var t = this, e = new a.AreaBox(1, 16777215);
                e.alpha = 0, this._layer.addChild(e), createjs.Tween.get(e).to({ alpha: 1 }, 500).call(function () {
                    t._layer.removeChild(t._view)
                }).to({ alpha: 0 }, 500).call(function () {
                    t._layer.removeChild(e), t._endTask()
                })
            }, e
        }(s.TaskBase);
    e.TaskDamageCutin = y;
    var v = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._bg = new _.MapBG, e._ships = new g, e._frame = new PIXI.Sprite, e._mozi_layer = new m, e.addChild(e._bg), e.addChild(e._ships), e.addChild(e._frame), e.addChild(e._mozi_layer), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "bg", {
            get: function () {
                return this._bg
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "ships", {
            get: function () {
                return this._ships
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "frame", {
            get: function () {
                return this._frame
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "mozi_layer", {
            get: function () {
                return this._mozi_layer
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function (t) {
            this._frame.texture = d.BATTLE_CUTIN_DAMAGE.getTexture(100), this._mozi_layer.initialize(t)
        }, e
    }(PIXI.Container), g = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.LEFT = 0, e.CENTER = o.default.width / 4, e.RIGHT = o.default.width / 2, e._ship1 = new PIXI.Container, e._ship1.visible = !1, e._ship2 = new PIXI.Container, e._ship2.visible = !1, e._ship3 = new PIXI.Container, e._ship3.visible = !1, e.addChild(e._ship3), e.addChild(e._ship2), e.addChild(e._ship1), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "ship1", {
            get: function () {
                return this._ship1
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "ship2", {
            get: function () {
                return this._ship2
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "ship3", {
            get: function () {
                return this._ship3
            }, enumerable: !0, configurable: !0
        }), e.prototype.getContainer = function (t) {
            return t < 0 || t > 3 ? null : [this._ship1, this._ship2, this._ship3][t]
        }, e.prototype.initXposition = function () {
            return 1 == this._ship3.visible ? (this._ship1.x = this.CENTER, this._ship2.x = this.LEFT, void(this._ship3.x = this.RIGHT)) : 1 == this._ship2.visible ? (this._ship1.x = this.LEFT, void(this._ship2.x = this.RIGHT)) : void(this._ship1.x = this.CENTER)
        }, e
    }(PIXI.Container), m = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._mozi1 = new u.Sprite, e.addChild(e._mozi1), e._mozi2 = new u.Sprite, e.addChild(e._mozi2), e._break = new f.BreakText, e.addChild(e._break), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "mozi1", {
            get: function () {
                return this._mozi1
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "mozi2", {
            get: function () {
                return this._mozi2
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "break", {
            get: function () {
                return this._break
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function (t) {
            this._initializeImageSprite(this._mozi1, t), this._initializeImageSprite(this._mozi2, t), this._break.Initialize(t), this._break.position.set(945, 516), this._break.x -= this._break.width / 2, this._break.y -= this._break.height / 2
        }, e.prototype._initializeImageSprite = function (t, e) {
            t.anchor.set(.5), 1 == e ? (t.texture = d.BATTLE_CUTIN_DAMAGE.getTexture(0), t.position.set(945, 516)) : (t.texture = d.BATTLE_CUTIN_DAMAGE.getTexture(1), t.position.set(930, 516))
        }, e
    }(PIXI.Container)
}