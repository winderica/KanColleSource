const function1260 = function (t, e, i) {
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
        s = i(2),
        a = i(18),
        _ = i(12),
        u = i(13),
        l = i(176),
        c = i(20),
        h = i(1261),
        p = function (t) {
            function e(e, i, n) {
                var r = t.call(this) || this;
                return r._selected_formation = 12, r._showText = function () {
                    var t = r._telopContainer.text;
                    t.position.set(750, o.default.height / 2), t.alpha = 0, t.texture = c.MAP_COMMON.getTexture(108), createjs.Tween.get(t).to({
                        x: 630,
                        alpha: 1
                    }, 500).to({
                        x: 585
                    }, 500).call(r._formationSelect), createjs.Tween.get(r._chara).to({
                        alpha: 1
                    }, 500);
                    var e = r._view.shutter;
                    e.alpha = 0, e.close(0), createjs.Tween.get(e).to({
                        alpha: 1
                    }, 400)
                }, r._formationSelect = function () {
                    var t = r._deck.type,
                        e = r._deck.getCountSubDeck();
                    if (r._layer.boxes.initialize(t, e, r._onSelectFormation), r._layer.boxes.alpha = 0, r._layer.boxes.count <= 1 || r._isLongRange) {
                        r._isLongRange && (r._selected_formation = 14);
                        var i = r._telopContainer.bg;
                        createjs.Tween.get(i).wait(150).to({
                            alpha: 0,
                            scaleY: 0
                        }, 100).call(r._showText2);
                        var n = r._telopContainer.text;
                        createjs.Tween.get(n).to({
                            x: 555,
                            alpha: 0
                        }, 100)
                    } else {
                        r._layer.fade.show(200);
                        var i = r._telopContainer.bg;
                        createjs.Tween.get(i).wait(150).to({
                            alpha: 0,
                            scaleY: 0
                        }, 100);
                        var n = r._telopContainer.text;
                        createjs.Tween.get(n).to({
                            x: 555,
                            alpha: 0
                        }, 100), createjs.Tween.get(r._layer.boxes).to({
                            alpha: 1
                        }, 300).call(function () {
                            r._layer.boxes.activate(), r._view.message_box.text = "\u9663\u5f62\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"
                        }), r._layer.description.alpha = 0, 1 == t ? r._layer.description.texture = l.SALLY_JIN.getTexture(18) : 2 == t ? r._layer.description.texture = l.SALLY_JIN.getTexture(38) : 3 == t && (r._layer.description.texture = l.SALLY_JIN.getTexture(43)), createjs.Tween.get(r._layer.description).to({
                            alpha: 1
                        }, 300)
                    }
                }, r._onSelectFormation = function (t) {
                    r._selected_formation = t, r._layer.boxes.deactivate(), createjs.Tween.get(r._layer.boxes).to({
                        alpha: 0
                    }, 200), createjs.Tween.get(r._layer.description).to({
                        alpha: 0
                    }, 200), r._layer.fade.hide(200, r._showText2)
                }, r._showText2 = function () {
                    var t = r._telopContainer.bg,
                        e = r._telopContainer.text;
                    e.position.set(o.default.width / 2, o.default.height / 2), e.texture = c.MAP_COMMON.getTexture(107), createjs.Tween.get(t).to({
                        alpha: 1,
                        scaleY: 1
                    }, 200).wait(950).to({
                        alpha: 0,
                        scaleY: 0
                    }, 200), createjs.Tween.get(e).wait(150).to({
                        alpha: 1
                    }, 100).wait(200).to({
                        x: 570
                    }, 300).to({
                        x: 450,
                        alpha: 0
                    }, 400), createjs.Tween.get(r._layer.chara).wait(950).to({
                        x: -75,
                        alpha: 0
                    }, 600), createjs.Tween.get(r._view.map).wait(950).to({
                        alpha: 0
                    }, 600).call(function () {
                        r._view.map.ship_icon.stopWave(), r._preEnd()
                    }), createjs.Tween.get(r._view.upper).wait(950).to({
                        alpha: 0
                    }, 600), createjs.Tween.get(r._view.gauge_layer).wait(950).to({
                        alpha: 0
                    }, 600), createjs.Tween.get(r).wait(750).call(function () {
                        r._view.message_box.deactivate()
                    })
                }, r._view = e, r._deck = i, r._isLongRange = n, r
            }
            return n(e, t), Object.defineProperty(e.prototype, "selected_formation", {
                get: function () {
                    return this._selected_formation
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._start = function () {
                this._layer = new d, this._view.universal_layer.addChild(this._layer), this._telopContainer = new f, this._view.top_layer.addChild(this._telopContainer), this._readyForFlagship()
            }, e.prototype._readyForFlagship = function () {
                var t = this,
                    e = this._deck.ships[0],
                    i = e.mst_id,
                    n = e.isDamaged();
                this._chara = new PIXI.Sprite;
                var o = r.default.model.ship_graph.get(i).getMapOffset(n);
                this._chara.position.set(-80 + o.x, -93 + o.y), this._chara.alpha = 0, this._layer.chara.addChild(this._chara), (new u.ShipLoader).add(i, n, "full").load(function () {
                    t._chara.texture = r.default.resources.getShip(i, n, "full"), t._showTelopBG()
                })
            }, e.prototype._showTelopBG = function () {
                var t = this._telopContainer.bg;
                t.position.set(o.default.width / 2, o.default.height / 2), t.scaleY = 0, t.alpha = 0, t.texture = c.MAP_COMMON.getTexture(105), createjs.Tween.get(t).to({
                    alpha: 1,
                    scaleY: 1
                }, 500).call(this._showText)
            }, e.prototype._preEnd = function () {
                this._view.universal_layer.removeChild(this._layer), this._view = null, this._deck = null, this._chara = null, this._layer = null, this._isLongRange = null, this._endTask()
            }, e
        }(s.TaskBase);
    e.TaskFormationSelectCombined = p;
    var d = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._fade = new a.FadeBox(.6), e._fade.hide(0), e._chara = new PIXI.Sprite, e._boxes = new h.FormationBoxContainerCombined, e._description = new PIXI.Sprite, e._description.x = 984, e._description.y = 500, e.addChild(e._fade), e.addChild(e._chara), e.addChild(e._boxes), e.addChild(e._description), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "fade", {
                get: function () {
                    return this._fade
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "chara", {
                get: function () {
                    return this._chara
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "boxes", {
                get: function () {
                    return this._boxes
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "description", {
                get: function () {
                    return this._description
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(PIXI.Container),
        f = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._bg = new _.Sprite, e._bg.anchor.set(.5), e._text = new PIXI.Sprite, e._text.anchor.set(.5), e.addChild(e._bg), e.addChild(e._text), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "bg", {
                get: function () {
                    return this._bg
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "text", {
                get: function () {
                    return this._text
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(PIXI.Container)
}