const function1237 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(7),
        o = i(1238),
        r = i(1240),
        s = function () {
            function t(t) {
                this._o = t
            }
            return Object.defineProperty(t.prototype, "backgrounds", {
                get: function () {
                    var t = [],
                        e = n.ObjUtil.getObjectArray(this._o, "bg");
                    if (null != e)
                        for (var i = 0, o = e; i < o.length; i++) {
                            var r = o[i];
                            if (r.hasOwnProperty("name") && r.hasOwnProperty("img")) {
                                var s = n.ObjUtil.getString(r, "name"),
                                    a = n.ObjUtil.getString(r, "img");
                                t.push({
                                    name: s,
                                    img: a
                                })
                            } else t.push({
                                name: null,
                                img: r
                            })
                        }
                    return t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "labels", {
                get: function () {
                    var t = [],
                        e = n.ObjUtil.getObjectArray(this._o, "labels");
                    if (null != e)
                        for (var i = 0, o = e; i < o.length; i++) {
                            var r = o[i],
                                s = {
                                    x: n.ObjUtil.getNumber(r, "x"),
                                    y: n.ObjUtil.getNumber(r, "y"),
                                    r: n.ObjUtil.getNumber(r, "r"),
                                    img: n.ObjUtil.getString(r, "img")
                                };
                            t.push(s)
                        }
                    return t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "spots", {
                get: function () {
                    var t = [],
                        e = n.ObjUtil.getObjectArray(this._o, "spots");
                    if (null != e)
                        for (var i = 0, r = e; i < r.length; i++) {
                            var s = r[i],
                                a = new o.SpotData(s);
                            t.push(a)
                        }
                    return t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "enemies", {
                get: function () {
                    var t = [],
                        e = n.ObjUtil.getObjectArray(this._o, "enemies");
                    if (null != e)
                        for (var i = 0, o = e; i < o.length; i++) {
                            var r = o[i],
                                s = {
                                    no: n.ObjUtil.getNumber(r, "no"),
                                    x: n.ObjUtil.getNumber(r, "x"),
                                    y: n.ObjUtil.getNumber(r, "y"),
                                    img: n.ObjUtil.getString(r, "img")
                                };
                            t.push(s)
                        }
                    return t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "airbase", {
                get: function () {
                    var t = n.ObjUtil.getObject(this._o, "airbase");
                    return null == t ? null : new PIXI.Point(n.ObjUtil.getNumber(t, "x"), n.ObjUtil.getNumber(t, "y"))
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "airraids", {
                get: function () {
                    var t = [],
                        e = n.ObjUtil.getObjectArray(this._o, "airraids");
                    if (null != e)
                        for (var i = 0, o = e; i < o.length; i++) {
                            var s = o[i];
                            t.push(new r.AirRaidData(s))
                        }
                    return t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "airbaseraid", {
                get: function () {
                    var t = n.ObjUtil.getObjectArray(this._o, "airbaseraid");
                    return null == t ? null : new r.AirRaidData(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "recce", {
                get: function () {
                    var t = [],
                        e = n.ObjUtil.getObjectArray(this._o, "recce");
                    if (null != e)
                        for (var i = 0, o = e; i < o.length; i++) {
                            var r = o[i],
                                s = {
                                    no: n.ObjUtil.getNumber(r, "no"),
                                    x: n.ObjUtil.getNumber(r, "x"),
                                    y: n.ObjUtil.getNumber(r, "y")
                                };
                            t.push(s)
                        }
                    return t
                },
                enumerable: !0,
                configurable: !0
            }), t
        }();
    e.MapInfoModel = s
}