const function571 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(7),
        o = i(572),
        r = function () {
            function t() {
                this._shift = null
            }
            return Object.defineProperty(t.prototype, "reloadFlag", {
                get: function () {
                    return n.ObjUtil.getBoolean(this._data, "reloadflag")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "kaikyo", {
                get: function () {
                    var t = n.ObjUtil.getObject(this._data, "kaikyo");
                    if (null == t) return null;
                    var e = n.ObjUtil.getNumber(t, "type"),
                        i = n.ObjUtil.getNumArray(t, "pos");
                    return null == i || i.length < 2 ? null : {
                        type: e,
                        pos: new PIXI.Point(i[0], i[1])
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "shogo", {
                get: function () {
                    var t = n.ObjUtil.getObject(this._data, "shogo");
                    if (null == t) return null;
                    var e = n.ObjUtil.getNumArray(t, "pos");
                    return null == e || e.length < 2 ? null : new PIXI.Point(e[0], e[1])
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.setData = function (t) {
                if (this._data = t, this._shift = [], t.hasOwnProperty("shift"))
                    for (var e = 0; e < t.shift.length; e++) {
                        var i = t.shift[e].filename,
                            n = t.shift[e].pos[0],
                            o = t.shift[e].pos[1],
                            r = {
                                filename: i,
                                x: n,
                                y: o
                            };
                        this._shift.push(r)
                    }
                this._stateCache = null
            }, t.prototype.getState = function (t) {
                if (null == this._stateCache && (this._stateCache = {}), this._stateCache.hasOwnProperty(t)) return this._stateCache[t];
                if (null == this._data) return null;
                if (this._data.hasOwnProperty(t)) {
                    var e = this._data[t],
                        i = new o.FurnitureStateModel;
                    return i.setJsonData(e), this._stateCache[t] = i, i
                }
                return null
            }, t.prototype.hasCategory = function (t) {
                var e = n.ObjUtil.getStrArray(this._data, "category");
                return null != e && e.indexOf(t) >= 0
            }, t.prototype.getOffset = function (t) {
                for (var e = 0, i = this._shift; e < i.length; e++) {
                    var n = i[e];
                    if (n.filename == t) return new PIXI.Point(n.x, n.y)
                }
                return null
            }, t.prototype.__overwriteFileName__ = function (t, e, i, o) {
                var r = n.ObjUtil.getObject(this._data, e);
                if (null != r) {
                    var s = n.ObjUtil.getObjectArray(r, "data");
                    if (null != s) {
                        var a = s[i];
                        if (null != a) {
                            var _ = a[o];
                            null != _ && _.hasOwnProperty("filename") && (_.filename = t)
                        }
                    }
                }
            }, t
        }();
    e.FurnitureAnimationModel = r
}