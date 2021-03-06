const function446 = function (t, e, i) {
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
        r = i(2),
        s = i(20),
        a = i(51),
        _ = i(56),
        u = i(25),
        l = i(7),
        c = i(71),
        h = function (t) {
            function e(e, i, n, o, r, s, a, _, u, l) {
                void 0 === u && (u = !0), void 0 === l && (l = !0);
                var c = t.call(this) || this;
                return c._map_id = e, c._mapInfo = i, c._view = n, c._stage = o, c._from = c._mapInfo.spots.length, c._mapAnime = r, c._gaugeAnime = s, c._enemyAnime = a, c._shutterAnime = _, c._gaugeLeft = u, c._gaugeView = l, c
            }
            return n(e, t), e.prototype._start = function () {
                this._mapAnime ? this._loadInfo() : this._hideEnemy()
            }, e.prototype._loadInfo = function () {
                var t = this,
                    e = (this._mapInfo.spots.length, this._mapInfo.spots.length),
                    i = this._getPath("info" + e + ".json");
                axios.get(i).then(function (i) {
                    var n = l.ObjUtil.getObject(i, "data");
                    t._mapInfo.add(n), t._loadSpriteSheet(e)
                }).catch(function (e) {
                    t._failedEnd()
                })
            }, e.prototype._loadSpriteSheet = function (t) {
                var e = this,
                    i = this._getPath("image" + t + ".json");
                if (null != PIXI.utils.TextureCache[i + "_image"]) this._createLabel();
                else {
                    var n = new PIXI.loaders.Loader;
                    n.add(i), n.load(function () {
                        e._createLabel()
                    })
                }
            }, e.prototype._createLabel = function () {
                var t = this._mapInfo.labels,
                    e = t.pop();
                if (null != e) {
                    for (var i = [], n = 0, o = e; n < o.length; n++) {
                        var r = o[n],
                            s = _.MapUtil.toResKey(this._map_id),
                            a = "map" + s + "_" + r.img,
                            u = PIXI.Texture.fromFrame(a);
                        i.push({
                            texture: u,
                            x: r.x,
                            y: r.y
                        })
                    }
                    this._view.map.bg.addLabels(i)
                }
                this._createSpots()
            }, e.prototype._createSpots = function () {
                for (var t = this._mapInfo.spots, e = this._from; e < t.length; e++) {
                    var i = t[e].no;
                    this._view.map.addSpot(this._map_id, i, this._mapInfo), null != t[e].landing && this._view.map.spotLayer.addFlag(i, t[e].landing.x, t[e].landing.y)
                }
                this._createAirBase()
            }, e.prototype._createAirBase = function () {
                var t = this._mapInfo.getAirBasePos();
                null != t && this._view.map.airbaseLayer.create(t), this._initCellColor()
            }, e.prototype._initCellColor = function () {
                for (var t = this._view.map.spotLayer.getAllSpots(), e = [], i = this._from; i < t.length; i++) {
                    var n = t[i];
                    e.push(n.no)
                }
                for (var o = [], r = this, s = 0, a = e; s < a.length; s++) {
                    var _ = a[s];
                    ! function (t) {
                        if (o.indexOf(t) >= 0) return "continue";
                        var i = r._mapInfo.getSameSpotData(t),
                            n = i.filter(function (e) {
                                return e.no != t
                            });
                        if (n.length > 0) {
                            if (n.some(function (t) {
                                    return e.indexOf(t.no) >= 0
                                }) && o.indexOf(t) < 0) {
                                var s = r._view.map.spotLayer.getSpot(t),
                                    a = r._mapInfo.getSpot(t).color;
                                s.setColor(a), n.forEach(function (t) {
                                    return o.push(t.no)
                                })
                            }
                        } else {
                            var s = r._view.map.spotLayer.getSpot(t),
                                a = r._mapInfo.getSpot(t).color;
                            s.setColor(a)
                        }
                    }(_)
                }
                this.setView()
            }, e.prototype.setView = function () {
                this._openSpot = [];
                for (var t = this._view.map.spotLayer.getAllSpots(), e = this._from; e < t.length; e++) this._openSpot.push(t[e]);
                this._openSpot.length > 0 ? (this._initView(), this._hideEnemy()) : this._endTask()
            }, e.prototype._initView = function () {
                var t = this._view.map.bg.extraLayerLast;
                if (t)
                    for (var e = 0; e < t.children.length; e++) {
                        var i = t.getChildAt(e);
                        i.scale.set(0), i.alpha = 0
                    }
                for (var n = 0, o = this._openSpot; n < o.length; n++) {
                    var r = o[n],
                        s = r.point;
                    null != s && (s.scale.set(0), s.alpha = 0);
                    var a = r.route;
                    null != a && (a.scale.set(0), a.alpha = 0)
                }
            }, e.prototype._hideEnemy = function () {
                var t = this;
                this._enemyAnime ? createjs.Tween.get(null).wait(2e3).call(function () {
                    t._view.map.plane_layer.hideAll(), t._view.map.enemy_layer.hide(function () {
                        t._loadGaugeResource()
                    })
                }) : this._loadGaugeResource()
            }, e.prototype._loadGaugeResource = function () {
                var t = this;
                if (this._gaugeAnime) {
                    this._view.gauge_layer.visible = !1;
                    var e = Math.floor(this._map_id / 10),
                        i = this._map_id % 10,
                        n = this._stage + 1,
                        r = c.GaugeSetModel.createKey(e, i, n),
                        s = o.default.resources.gauge.createLoaderVertical();
                    s.add(r), s.load(function () {
                        t._showMap()
                    })
                } else this._showMap()
            }, e.prototype._showMap = function () {
                var t = this;
                if (this._shutterAnime) {
                    var e = new a.Shutter;
                    e.initializeDark(), e.close(0), this._view.addChild(e), this._view.shutter.alpha = 0, this._view.map.alpha = 1, this._view.upper.alpha = 1, this._view.gauge_layer.alpha = this._gaugeView ? 1 : 0, createjs.Tween.get(null).wait(200).call(function () {
                        e.open(), e.once("opened", function () {
                            t._view.removeChild(e), createjs.Tween.get(null).wait(1e3).call(function () {
                                t.animation()
                            })
                        })
                    })
                } else this.animation()
            }, e.prototype.animation = function () {
                var t = this;
                if (this._mapAnime) {
                    var e = new s.TweenTask,
                        i = this._view.map.bg.extraLayerLast;
                    if (i)
                        for (var n = 0; n < i.children.length; n++) {
                            var o = i.getChildAt(n),
                                r = createjs.Tween.get(o);
                            r.to({
                                scaleX: 1.2,
                                scaleY: 1.2,
                                alpha: 1
                            }, 200), r.to({
                                scaleX: 1,
                                scaleY: 1
                            }, 100), e.addTween(r)
                        }
                    for (var a = 0, _ = this._openSpot; a < _.length; a++) {
                        var u = _[a],
                            l = u.point;
                        if (null != l) {
                            var r = createjs.Tween.get(l);
                            r.to({
                                scaleX: 1.2,
                                scaleY: 1.2,
                                alpha: 1
                            }, 200), r.to({
                                scaleX: 1,
                                scaleY: 1
                            }, 100), e.addTween(r)
                        }
                        var c = u.route;
                        if (null != c) {
                            var r = createjs.Tween.get(c);
                            r.wait(300), r.to({
                                scaleX: 1.2,
                                scaleY: 1.2,
                                alpha: 1
                            }, 200), r.to({
                                scaleX: 1,
                                scaleY: 1
                            }, 100), e.addTween(r)
                        }
                    }
                    e.start(function () {
                        t._showGauge()
                    })
                } else this._showGauge()
            }, e.prototype._showGauge = function () {
                var t = this;
                if (this._gaugeAnime) {
                    var e = Math.floor(this._map_id / 10),
                        i = this._map_id % 10,
                        n = this._stage + 1,
                        r = c.GaugeSetModel.createKey(e, i, n),
                        s = o.default.resources.gauge.getGaugeInfo(r);
                    if (null == s) this._wait();
                    else {
                        var a = s.vertical;
                        null != a && this._view.gauge_layer.initialize(a, 100, 100), this._view.gauge_layer.visible = !0;
                        var _ = this._view.gauge_layer.createShowTween(this._gaugeLeft);
                        _.wait(1500), _.call(function () {
                            t._wait()
                        })
                    }
                } else this._wait()
            }, e.prototype._wait = function () {
                var t = this;
                createjs.Tween.get(null).wait(3e3).call(function () {
                    t._hideMap()
                })
            }, e.prototype._hideMap = function () {
                var t = this;
                if (this._shutterAnime) {
                    var e = new a.Shutter;
                    e.initializeDark(), this._view.addChild(e), createjs.Tween.get(null).wait(200).call(function () {
                        e.close(), e.once("closed", function () {
                            t._view.shutter.alpha = 1, t._view.map.alpha = 0, t._view.upper.alpha = 0, t._view.gauge_layer.alpha = 0, t._view.removeChild(e), t._endTask()
                        })
                    })
                } else this._endTask()
            }, e.prototype._getPath = function (t) {
                var e = _.MapUtil.toAreaID(this._map_id),
                    i = _.MapUtil.toMapNo(this._map_id);
                return o.default.settings.path_root + "resources/map/" + u.MathUtil.zeroPadding(e, 3) + "/" + u.MathUtil.zeroPadding(i, 2) + "_" + t
            }, e
        }(r.TaskBase);
    e.EventTaskCellOpen = h
}