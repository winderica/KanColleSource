const function1307 = function (t, e, i) {
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
        r = i(5),
        s = i(253),
        a = i(12),
        _ = i(2),
        u = i(13),
        l = i(132),
        c = i(1308),
        h = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                n._leftFairies = [11, 12, 13, 14], n._rightFairies = [18, 19, 20, 21], n._ship_mst_id = e, n._bg = new l.MapBG, n._ship_sprite = new a.Sprite, n._ship_layer = new PIXI.Container, n._cranes = new PIXI.Container;
                var o = [];
                i.map(function (t) {
                    return o.push(new c.AnchorageRepairShipBanner(t.index, t.mst_id, t.hp_now, t.hp_repaired, t.hp_max))
                }), n._banners = o, n._txt_repairing = new a.Sprite, n._fairy_left = new a.Sprite, n._fairy_right = new a.Sprite;
                var r = i.map(function (t) {
                    return t.mst_id
                });
                return n._poreload_task = new p(e, r), n
            }
            return n(e, t), Object.defineProperty(e.prototype, "bg", {
                get: function () {
                    return this._bg
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "ship_layer", {
                get: function () {
                    return this._ship_layer
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "cranes", {
                get: function () {
                    return this._cranes
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "banners", {
                get: function () {
                    return this._banners
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "fariy_worker", {
                get: function () {
                    return this._fairy_worker
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "fairy_left", {
                get: function () {
                    return this._fairy_left
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "fairy_right", {
                get: function () {
                    return this._fairy_right
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "fairy_cutin", {
                get: function () {
                    return this._fairy_cutin
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "white", {
                get: function () {
                    return this._white
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.getPreLoadTask = function () {
                return this._poreload_task
            }, e.prototype.initilize = function () {
                var t = this;
                this._bg.alpha = 0;
                var e = o.default.resources.getShip(this._ship_mst_id, !1, "full");
                this._ship_sprite = new PIXI.Sprite(e);
                var i = o.default.model.ship_graph.get(this._ship_mst_id).getFaceRect(!1);
                this._ship_sprite.position.set(-(i.x + i.width / 2), -(i.y + i.height / 2));
                for (var n = 0; n < 3; n++) {
                    var a = new PIXI.Sprite(s.MAP_ANCHORAGE_REPAIR.getTexture(10));
                    a.visible = !0, a.position.set(-350, 10 + 230 * n), this._cranes.addChild(a)
                }
                this.banners.map(function (t) {
                    t.initialize(), t.visible = !0, t.scale.set(1.5), t.alpha = 0
                }), this._txt_repairing = new PIXI.Sprite(s.MAP_ANCHORAGE_REPAIR.getTexture(16)), this._txt_repairing.position.set(r.default.width / 2 - this._txt_repairing.width / 2, r.default.height / 2 - this._txt_repairing.height / 2), this._txt_repairing.alpha = 0, this._fairy_worker = new PIXI.Sprite(s.MAP_ANCHORAGE_REPAIR.getTexture(17)), this._fairy_worker.alpha = 0, this._fairy_worker.position.set(120, 700), this._fairy_cutin = new PIXI.Sprite(s.MAP_ANCHORAGE_REPAIR.getTexture(this._getTextureIdFairiesCutin())), this._fairy_cutin.visible = !1, this._fairy_cutin.scale.set(.7), this._fairy_cutin.anchor.set(.5), this._fairy_cutin.position.set(1350, 350), this._ship_layer.visible = !0, this._ship_layer.position.set(1200, 600), this._ship_layer.alpha = 0, this._ship_layer.addChild(this._ship_sprite), this._white = new PIXI.Graphics, this._white.beginFill(16777215, 1), this._white.drawRect(0, 0, r.default.width, r.default.height), this._white.endFill(), this.addChild(this._bg), this.addChild(this._ship_layer), this.addChild(this.cranes), this.banners.map(function (e) {
                    return t.addChild(e)
                }), this.addChild(this._txt_repairing), this.addChild(this._fairy_worker, this._fairy_right, this._fairy_cutin), this.addChild(this._white)
            }, e.prototype.getBannerGroup = function (t) {
                for (var e = [], i = this, n = 0, o = t; n < o.length; n++) {
                    var r = o[n];
                    ! function (t) {
                        var n = i._banners.filter(function (e) {
                            return e.index == t
                        });
                        1 == n.length ? e.push(n.shift()) : e.push(null)
                    }(r)
                }
                return e
            }, e.prototype.playTxtReparing = function () {
                this._txt_reparing_tween = createjs.Tween.get(this._txt_repairing, {
                    paused: !1,
                    loop: !0
                }).set({
                    visible: !0
                }).to({
                    alpha: 1
                }, 350).wait(300).to({
                    alpha: 0
                }, 250)
            }, e.prototype.stopTxtReparing = function () {
                this._txt_reparing_tween.setPaused(!0), createjs.Tween.get(this._txt_repairing).to({
                    alpha: 0
                }, 250)
            }, e.prototype.getLeftFairy = function () {
                this.removeChild(this._fairy_left);
                var t = new PIXI.Sprite(s.MAP_ANCHORAGE_REPAIR.getTexture(this._getTextureIdFairiesLeft()));
                t.alpha = 0, t.anchor.set(.5), t.scale.set(.5), t.position.set(r.default.width - (r.default.width - t.width / 2 - 20), r.default.height + t.height), this._fairy_left = t, this.addChild(this._fairy_left)
            }, e.prototype.getRightFairy = function () {
                this.removeChild(this._fairy_right);
                var t = new PIXI.Sprite(s.MAP_ANCHORAGE_REPAIR.getTexture(this._getTextureIdFairiesRight()));
                t.alpha = 0, t.anchor.set(.5), t.scale.set(.5), t.position.set(r.default.width + t.width, r.default.height - t.height / 2 - 10), this._fairy_right = t, this.addChild(this._fairy_right)
            }, e.prototype._getTextureIdFairiesLeft = function () {
                var t = Math.floor(Math.random() * this._leftFairies.length),
                    e = this._leftFairies[t];
                return this._leftFairies.splice(t, 1), e
            }, e.prototype._getTextureIdFairiesRight = function () {
                var t = Math.floor(Math.random() * this._rightFairies.length),
                    e = this._rightFairies[t];
                return this._rightFairies.splice(t, 1), e
            }, e.prototype._getTextureIdFairiesCutin = function () {
                var t = [0, 1, 2];
                return t[Math.floor(Math.random() * t.length)]
            }, e
        }(PIXI.Container);
    e.AnchorageRepairLayer = h;
    var p = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._ship_mst_id = e, n._banner_ship_mst_ids = i, n
        }
        return n(e, t), e.prototype._start = function () {
            this._loadShipImage()
        }, e.prototype._loadShipImage = function () {
            var t = this,
                e = new u.ShipLoader;
            e.add(this._ship_mst_id, !1, "full");
            for (var i = 0, n = this._banner_ship_mst_ids; i < n.length; i++) {
                var o = n[i];
                e.add(o, !1, "banner"), e.add(o, !0, "banner")
            }
            e.load(function () {
                t._endTask()
            })
        }, e
    }(_.TaskBase);
    e.PreLoadShipImage = p
}