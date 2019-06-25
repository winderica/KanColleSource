const function1246 = function (t, e, i) {
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
        r = i(56),
        s = i(23),
        a = i(7),
        _ = i(2),
        u = i(14),
        l = function (t) {
            function e(e, i, n, o) {
                var r = t.call(this) || this;
                if (r._map_id = e, r._mapView = i, r._mapInfo = n, r._memDataNum = 0, r._memData = {}, null != o)
                    for (var s = 0, a = o; s < a.length; s++) {
                        var _ = a[s];
                        r._memData[_.no] = _, r._memDataNum++
                    }
                return r._version = u.UIImageLoader.getResourceVersionMap(r._map_id), r
            }
            return n(e, t), e.prototype._start = function () {
                var t = this,
                    e = this._getPath("info.json" + (this._version ? "?version=" + this._version : ""));
                axios.get(e).then(function (e) {
                    var i = a.ObjUtil.getObject(e, "data");
                    t._mapInfo.add(i), t._loadSpriteSheet()
                }).catch(function (e) {
                    t._failedEnd()
                })
            }, e.prototype._loadSpriteSheet = function () {
                var t = this,
                    e = this._getPath("image.json");
                if (null != PIXI.utils.TextureCache[e + "_image"]) this._loadAddingInfo();
                else {
                    var i = new PIXI.loaders.Loader;
                    null != this._version && (i.defaultQueryString = "version=" + this._version), i.add(e), i.load(function () {
                        t._loadAddingInfo()
                    })
                }
            }, e.prototype._loadAddingInfo = function () {
                var t = this;
                if (this._mapInfo.spots.length >= this._memDataNum)
                    if (445 == this._map_id) {
                        var e = new u.UIImageLoader("map");
                        e.add("map_event_anime.json"), e.load(function () {
                            t._createMapBackGround()
                        })
                    } else this._createMapBackGround();
                else {
                    var i = this._mapInfo.spots.length,
                        n = this._getPath("info" + i + ".json" + (this._version ? "?version=" + this._version : ""));
                    axios.get(n).then(function (e) {
                        var n = a.ObjUtil.getObject(e, "data");
                        t._mapInfo.add(n), t._loadAddingSpriteSheet(i)
                    }).catch(function (e) {
                        t._failedEnd()
                    })
                }
            }, e.prototype._loadAddingSpriteSheet = function (t) {
                var e = this,
                    i = this._getPath("image" + t + ".json");
                if (null != PIXI.utils.TextureCache[i + "_image"]) this._loadAddingInfo();
                else {
                    var n = new PIXI.loaders.Loader;
                    null != this._version && (n.defaultQueryString = "version=" + this._version), n.add(i), n.load(function () {
                        e._loadAddingInfo()
                    })
                }
            }, e.prototype._createMapBackGround = function () {
                for (var t = this._mapInfo.backgrounds, e = 0, i = t; e < i.length; e++) {
                    var n = i[e],
                        o = r.MapUtil.toResKey(this._map_id),
                        s = "map" + o + "_" + n.img,
                        a = PIXI.Texture.fromFrame(s);
                    this._mapView.bg.addBGLayer(a, n.name)
                }
                445 == this._map_id && this._mapView.bg.setMapAnime(), this._createLabel()
            }, e.prototype._createLabel = function () {
                for (var t = this._mapInfo.labels, e = 0, i = t; e < i.length; e++) {
                    var n = i[e],
                        o = r.MapUtil.toResKey(this._map_id),
                        s = "map" + o + "_" + n.img,
                        a = PIXI.Texture.fromFrame(s);
                    this._mapView.bg.addLabel(a, n.x, n.y)
                }
                this._createSpots()
            }, e.prototype._createSpots = function () {
                for (var t = this._mapInfo.spots, e = 0, i = t; e < i.length; e++) {
                    var n = i[e],
                        o = n.no;
                    if (!(this._memDataNum > 0 && null == this._memData[o]) && (this._mapView.addSpot(this._map_id, o, this._mapInfo), null != n.landing)) {
                        var r = n.x + n.landing.x,
                            s = n.y + n.landing.y;
                        this._mapView.spotLayer.addFlag(o, r, s)
                    }
                }
                this._createAirBase()
            }, e.prototype._createAirBase = function () {
                var t = this._mapInfo.getAirBasePos();
                null != t && this._mapView.airbaseLayer.create(t), this._initCellColor()
            }, e.prototype._initCellColor = function () {
                for (var t = [], e = this._mapView.spotLayer.getAllSpots(), i = 0, n = e; i < n.length; i++) {
                    var o = n[i];
                    if (!(t.indexOf(o.no) >= 0)) {
                        for (var r = !1, s = 0, a = 0, _ = this._mapInfo.getSameSpotData(o.no), u = 0, l = _; u < l.length; u++) {
                            var c = l[u];
                            t.push(c.no), 0 == s && (s = c.color);
                            var h = this._memData[c.no];
                            null != h && (r = r || h.passed, 0 == a && (a = h.color))
                        }
                        var p = _[0].no,
                            d = this._mapView.spotLayer.getSpot(p);
                        1 == r ? d.setColor(a) : d.setColor(s)
                    }
                }
                this._endTask()
            }, e.prototype._getPath = function (t) {
                var e = r.MapUtil.toAreaID(this._map_id),
                    i = r.MapUtil.toMapNo(this._map_id);
                return o.default.settings.path_root + "resources/map/" + s.MathUtil.zeroPadding(e, 3) + "/" + s.MathUtil.zeroPadding(i, 2) + "_" + t
            }, e
        }(_.TaskBase);
    e.TaskCreateMap = l
}