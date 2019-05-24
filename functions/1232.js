const function1232 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(1233),
        o = function () {
            function t() {
                this._data = []
            }
            return Object.defineProperty(t.prototype, "backgrounds", {
                get: function () {
                    if (null == this._backgrounds) {
                        this._backgrounds = [];
                        for (var t = 0, e = this._data; t < e.length; t++) {
                            var i = e[t];
                            (n = this._backgrounds).push.apply(n, i.backgrounds)
                        }
                    }
                    return this._backgrounds;
                    var n
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "labels", {
                get: function () {
                    if (null == this._labels) {
                        this._labels = [];
                        for (var t = 0, e = this._data; t < e.length; t++) {
                            var i = e[t];
                            (n = this._labels).push.apply(n, i.labels)
                        }
                    }
                    return this._labels;
                    var n
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "spots", {
                get: function () {
                    if (null == this._spots) {
                        this._spots = [];
                        for (var t = 0, e = this._data; t < e.length; t++) {
                            var i = e[t];
                            (n = this._spots).push.apply(n, i.spots)
                        }
                    }
                    return this._spots;
                    var n
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.add = function (t) {
                var e = new n.MapInfoModel(t);
                this._data.push(e), this._backgrounds = null, this._labels = null, this._spots = null, this._airraids = null, this._recce = null
            }, t.prototype.getSpot = function (t) {
                for (var e = 0, i = this.spots; e < i.length; e++) {
                    var n = i[e];
                    if (n.no == t) return n
                }
                return null
            }, t.prototype.getEnemyOption = function (t) {
                for (var e = this.getSameSpotData(t), i = e.map(function (t, e, i) {
                        return t.no
                    }), n = 0, o = this._data; n < o.length; n++)
                    for (var r = o[n], s = r.enemies, a = 0, _ = s; a < _.length; a++) {
                        var l = _[a];
                        if (i.indexOf(l.no) >= 0) return l
                    }
                return null
            }, t.prototype.getAirRaidOption = function (t) {
                if (null == this._airraids) {
                    this._airraids = [];
                    for (var e = 0, i = this._data; e < i.length; e++) {
                        var n = i[e];
                        (p = this._airraids).push.apply(p, n.airraids)
                    }
                }
                for (var o = 0, r = this._airraids; o < r.length; o++) {
                    var s = r[o];
                    if (s.no == t) return s
                }
                for (var a = this.getSameSpotData(t), _ = 0, l = a; _ < l.length; _++) {
                    var u = l[_];
                    if (u.no != t)
                        for (var c = 0, h = this._airraids; c < h.length; c++) {
                            var s = h[c];
                            if (s.no == u.no) return s
                        }
                }
                return null;
                var p
            }, t.prototype.getAirBaseRaidOption = function () {
                for (var t = 0, e = this._data; t < e.length; t++) {
                    var i = e[t],
                        n = i.airbaseraid;
                    if (null != n) return n
                }
                return null
            }, t.prototype.getAirBasePos = function () {
                for (var t = 0, e = this._data; t < e.length; t++) {
                    var i = e[t],
                        n = i.airbase;
                    if (null != n) return n
                }
                return null
            }, t.prototype.getShipDirection = function (t) {
                var e = this.getSpot(t);
                return null == e ? 0 : e.direction
            }, t.prototype.getControlPoint = function (t) {
                var e = this.getSpot(t);
                return null == e ? null : e.controll_point
            }, t.prototype.getBranchOption = function (t) {
                var e = this.getSpot(t);
                if (null != e.branch) return e.branch;
                for (var i = this.getSameSpotData(t), n = 0, o = i; n < o.length; n++) {
                    var r = o[n];
                    if (r != e && null != r.branch) return r.branch
                }
                return null
            }, t.prototype.getReplenishConfirmOffsets = function (t) {
                var e = this.getSpot(t);
                return null == e ? null : e.replenish_confirm_offsets
            }, t.prototype.getRationConfirmOffset = function (t) {
                var e = this.getSpot(t);
                return null == e ? null : e.ration_confirm_offset
            }, t.prototype.getAirReconnaissancePoint = function (t) {
                if (null == this._recce) {
                    this._recce = [];
                    for (var e = 0, i = this._data; e < i.length; e++) {
                        var n = i[e];
                        (c = this._recce).push.apply(c, n.recce)
                    }
                }
                for (var o = 0, r = this._recce; o < r.length; o++) {
                    var s = r[o];
                    if (s.no == t) return new PIXI.Point(s.x, s.y)
                }
                for (var a = this.getSameSpotData(t), _ = a.map(function (t, e, i) {
                        return t.no
                    }), l = 0, u = this._recce; l < u.length; l++) {
                    var s = u[l];
                    if (_.indexOf(s.no) >= 0) return new PIXI.Point(s.x, s.y)
                }
                return null;
                var c
            }, t.prototype.hasAirReconnaissancePoint = function () {
                if (null == this._recce) {
                    this._recce = [];
                    for (var t = 0, e = this._data; t < e.length; t++) {
                        var i = e[t];
                        (n = this._recce).push.apply(n, i.recce)
                    }
                }
                return this._recce.length > 0;
                var n
            }, t.prototype.getLandingBalloonType = function (t) {
                var e = this.getSpot(t);
                return null == e ? 0 : null == e.landing ? 0 : e.landing.type
            }, t.prototype.getSameSpotData = function (t) {
                for (var e = [], i = this.spots, n = null, o = 0, r = i; o < r.length; o++) {
                    var s = r[o];
                    if (s.no == t) {
                        n = s;
                        break
                    }
                }
                if (null == n) return e;
                for (var a = 0, _ = i; a < _.length; a++) {
                    var s = _[a];
                    s.x == n.x && s.y == n.y && e.push(s)
                }
                return e.sort(function (t, e) {
                    return t.no < e.no ? -1 : t.no > e.no ? 1 : 0
                })
            }, t
        }();
    e.MapResourceInfo = o
}