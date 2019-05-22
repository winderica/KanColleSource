const function568 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        o = i(24),
        r = i(7),
        s = i(78),
        a = i(569),
        _ = i(276),
        l = i(103),
        u = i(79),
        c = function () {
            function t() {
                this._animationState = 0, this._change = !1, this._baseStateName = "standard", this._currentStateName = "", this._model = new a.FurnitureAnimationModel, this._currentStateName = this._baseStateName
            }
            return Object.defineProperty(t.prototype, "model", {
                get: function () {
                    return this._model
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "animationState", {
                get: function () {
                    return this._animationState
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "currentStateName", {
                get: function () {
                    return this._currentStateName
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.setAnimationState = function (t, e) {
                if (void 0 === e && (e = null), this._animationState != t)
                    if (this._animationState = t, 2 == this._animationState) this._currentStateName = null == e ? "action1" : e;
                    else if (1 == this._animationState) {
                    var i = this.model.getState(this._currentStateName);
                    this._currentStateName = i.hitArea.state
                } else this._currentStateName = this._baseStateName
            }, t.prototype.updateBaseStateName = function (t) {
                this._baseStateName = t, 0 == this._animationState && (this._currentStateName = this._baseStateName)
            }, t.prototype.loadAnimationData = function (t, e) {
                var i = this;
                if (n.default.model.furniture.isActive(t)) {
                    var r = o.MathUtil.zeroPadding(t, 3),
                        a = l.SuffixUtil.create(t, "furniture_scripts"),
                        _ = "./resources/furniture/scripts/" + r + "_" + a + ".json" + u.VersionUtil.getResourceVersion(2, t);
                    axios.get(_).then(function (t) {
                        i._baseStateName = "standard", i._currentStateName = "standard", i._setParam(t), e()
                    })
                } else {
                    this._baseStateName = "standard", this._currentStateName = "standard";
                    var c = {
                        filename: s.FurnitureLoader.getPath(t, "normal")
                    };
                    89 == t ? c.offset = [15, 0] : 93 == t ? c.offset = [-20, 0] : 79 == t ? c.offset = [-2, 0] : 209 == t && (c.offset = [-29, 0]);
                    var h = {
                        standard: {
                            data: [
                                [c]
                            ]
                        }
                    };
                    this._model.setData(h), e()
                }
            }, t.prototype._setParam = function (t) {
                var e = new Date,
                    i = 100 * (e.getMonth() + 1) + e.getDate(),
                    o = 1e4 * e.getHours() + 100 * e.getMinutes() + e.getSeconds(),
                    s = r.ObjUtil.getObject(t, "data");
                this._model.setData(s);
                var a = this._getBaseStateName(s, i, o);
                this.updateBaseStateName(a);
                var l = n.default.model.deck.get(1).getShipModel(0).mstID;
                if (this.model.hasCategory("counterbar")) {
                    var u = _.FurnitureUtil.getCounterBarTextureName(s, l, o);
                    this._model.__overwriteFileName__(u, "standard", 1, 1)
                } else if (this.model.hasCategory("dressingroom")) {
                    var u = _.FurnitureUtil.getDressingRoomTextureName(s, l);
                    this._model.__overwriteFileName__(u, "standard", 1, 0)
                } else if (this.model.hasCategory("secretarydesk")) {
                    var u = _.FurnitureUtil.getSecretaryDeskTextureName(s, l);
                    this._model.__overwriteFileName__(u, "standard", 1, 0)
                } else if (this.model.hasCategory("umbrellarack"))
                    for (var c = _.FurnitureUtil.getUmbrellarackTextures(s, l), h = 0; h < c.length; h++) this._model.__overwriteFileName__(c[h], "standard", h, 0);
                this._animationState = 0
            }, t.prototype._getBaseStateName = function (t, e, i) {
                var n = r.ObjUtil.getObject(t, "case");
                if (null == n) return "standard";
                var o = r.ObjUtil.getObjectArray(n, "datetime");
                if (o)
                    for (var s = 1e6 * e + i, a = o.length - 1; a >= 0; a--) {
                        var _ = o[a],
                            l = parseInt(r.ObjUtil.getString(_, "datetime"));
                        if (!isNaN(l) && s >= l) return r.ObjUtil.getString(_, "state")
                    }
                var u = r.ObjUtil.getObjectArray(n, "time");
                if (u)
                    for (var a = u.length - 1; a >= 0; a--) {
                        var _ = u[a],
                            l = parseInt(r.ObjUtil.getString(_, "time"));
                        if (!isNaN(l) && i >= l) return r.ObjUtil.getString(_, "state")
                    }
                return "standard"
            }, t
        }();
    e.FAnimationData = c
}