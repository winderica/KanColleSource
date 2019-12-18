const function1253 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(7),
        o = i(1254),
        r = function () {
            function t(t) {
                this._offsetDic = null, this._line = null, this._route = null, this._branch = null, this._o = t
            }
            return Object.defineProperty(t.prototype, "no", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "no")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "x", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "x")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "y", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "y")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "color", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "color")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "offsetDic", {
                get: function () {
                    return 0 == this._o.hasOwnProperty("offsets") ? {} : this._o.offsets
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "line", {
                get: function () {
                    if (null == this._line && 1 == this._o.hasOwnProperty("line")) {
                        var t = this._o.line;
                        this._line = {
                            x: n.ObjUtil.getNumber(t, "x"),
                            y: n.ObjUtil.getNumber(t, "y"),
                            r: n.ObjUtil.getNumber(t, "r"),
                            img: n.ObjUtil.getString(t, "img")
                        }
                    }
                    return this._line
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "route", {
                get: function () {
                    if (null == this._route && 1 == this._o.hasOwnProperty("route")) {
                        var t = this._o.route;
                        this._route = {
                            x: t.hasOwnProperty("x") ? t.x : null == this.line ? 0 : this.line.x,
                            y: t.hasOwnProperty("y") ? t.y : null == this.line ? 0 : this.line.y,
                            r: t.hasOwnProperty("r") ? t.r : null == this.line ? 0 : this.line.r,
                            img: n.ObjUtil.getString(t, "img")
                        }
                    }
                    return this._route
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "landing", {
                get: function () {
                    if (0 == this._o.hasOwnProperty("landing")) return null;
                    var t = this._o.landing;
                    return {
                        x: n.ObjUtil.getNumber(t, "x"),
                        y: n.ObjUtil.getNumber(t, "y"),
                        type: n.ObjUtil.getNumber(t, "type")
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "branch", {
                get: function () {
                    if (null == this._branch) {
                        if (0 == this._o.hasOwnProperty("branch")) return null;
                        var t = this._o.branch;
                        this._branch = new o.BranchBalloonData(t)
                    }
                    return this._branch
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "direction", {
                get: function () {
                    if (0 == this._o.hasOwnProperty("direction")) return 0;
                    var t = n.ObjUtil.getString(this._o, "direction");
                    return "R" == t ? 2 : "L" == t ? 1 : 0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "controll_point", {
                get: function () {
                    var t = n.ObjUtil.getObject(this._o, "cpoint");
                    return null == t ? null : new PIXI.Point(n.ObjUtil.getNumber(t, "x"), n.ObjUtil.getNumber(t, "y"))
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "repair_confirm_offsets", {
                get: function () {
                    var t = n.ObjUtil.getObject(this._o, "repair");
                    if (null == t) return null;
                    var e = n.ObjUtil.getObject(t, "box"),
                        i = new PIXI.Point(n.ObjUtil.getNumber(e, "x"), n.ObjUtil.getNumber(e, "y")),
                        o = n.ObjUtil.getObject(t, "btn"),
                        r = new PIXI.Point(n.ObjUtil.getNumber(o, "x"), n.ObjUtil.getNumber(o, "y")),
                        s = n.ObjUtil.getObject(t, "beak");
                    return {
                        box: i,
                        btn: r,
                        beak: new PIXI.Point(n.ObjUtil.getNumber(s, "x"), n.ObjUtil.getNumber(s, "y"))
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "replenish_confirm_offsets", {
                get: function () {
                    var t = n.ObjUtil.getObject(this._o, "replenish");
                    if (null == t) return null;
                    var e = n.ObjUtil.getObject(t, "box"),
                        i = new PIXI.Point(n.ObjUtil.getNumber(e, "x"), n.ObjUtil.getNumber(e, "y")),
                        o = n.ObjUtil.getObject(t, "btn"),
                        r = new PIXI.Point(n.ObjUtil.getNumber(o, "x"), n.ObjUtil.getNumber(o, "y")),
                        s = n.ObjUtil.getObject(t, "beak"),
                        a = new PIXI.Point(n.ObjUtil.getNumber(s, "x"), n.ObjUtil.getNumber(s, "y")),
                        _ = n.ObjUtil.getObject(t, "balloon");
                    return {
                        box: i,
                        btn: r,
                        beak: a,
                        bln: new PIXI.Point(n.ObjUtil.getNumber(_, "x"), n.ObjUtil.getNumber(_, "y"))
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "ration_confirm_offset", {
                get: function () {
                    var t = n.ObjUtil.getObject(this._o, "ration");
                    if (null == t) return null;
                    var e = n.ObjUtil.getObject(t, "box"),
                        i = new PIXI.Point(n.ObjUtil.getNumber(e, "x"), n.ObjUtil.getNumber(e, "y")),
                        o = n.ObjUtil.getObject(t, "btn"),
                        r = new PIXI.Point(n.ObjUtil.getNumber(o, "x"), n.ObjUtil.getNumber(o, "y")),
                        s = n.ObjUtil.getObject(t, "beak");
                    return {
                        box: i,
                        btn: r,
                        beak: new PIXI.Point(n.ObjUtil.getNumber(s, "x"), n.ObjUtil.getNumber(s, "y"))
                    }
                },
                enumerable: !0,
                configurable: !0
            }), t
        }();
    e.SpotData = r
}