const function566 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(0), o = i(22), r = i(7), s = i(77), a = i(567), _ = i(273), u = i(100), l = i(78), c = function () {
        function t() {
            this._animationState = 0, this._change = !1, this._baseStateName = "standard", this._currentStateName = "", this._model = new a.FurnitureAnimationModel, this._currentStateName = this._baseStateName
        }

        return Object.defineProperty(t.prototype, "model", {
            get: function () {
                return this._model
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "animationState", {
            get: function () {
                return this._animationState
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "currentStateName", {
            get: function () {
                return this._currentStateName
            }, enumerable: !0, configurable: !0
        }), t.prototype.setAnimationState = function (t, e) {
            if (void 0 === e && (e = null), this._animationState != t) if (this._animationState = t, 2 == this._animationState) this._currentStateName = null == e ? "action1" : e; else if (1 == this._animationState) {
                var i = this.model.getState(this._currentStateName);
                this._currentStateName = i.hitArea.state
            } else this._currentStateName = this._baseStateName
        }, t.prototype.updateBaseStateName = function (t) {
            this._baseStateName = t, 0 == this._animationState && (this._currentStateName = this._baseStateName)
        }, t.prototype.loadAnimationData = function (t, e) {
            var i = this;
            if (n.default.model.furniture.isActive(t)) {
                var r = o.MathUtil.zeroPadding(t, 3), a = u.SuffixUtil.create(t, "furniture_scripts"),
                    _ = "./resources/furniture/scripts/" + r + "_" + a + ".json" + l.VersionUtil.getResourceVersion(2, t);
                axios.get(_).then(function (t) {
                    i._baseStateName = "standard", i._currentStateName = "standard", i._setParam(t), e()
                })
            } else {
                this._baseStateName = "standard", this._currentStateName = "standard";
                var c = { filename: s.FurnitureLoader.getPath(t, "normal") };
                89 == t ? c.offset = [15, 0] : 93 == t ? c.offset = [-20, 0] : 79 == t ? c.offset = [-2, 0] : 209 == t && (c.offset = [-29, 0]);
                var h = { standard: { data: [[c]] } };
                this._model.setData(h), e()
            }
        }, t.prototype._setParam = function (t) {
            var e = new Date, i = 100 * (e.getMonth() + 1) + e.getDate(),
                o = 1e4 * e.getHours() + 100 * e.getMinutes() + e.getSeconds(), s = r.ObjUtil.getObject(t, "data");
            this._model.setData(s);
            var a = this._getBaseStateName(s, i, o);
            this.updateBaseStateName(a);
            var u = n.default.model.deck.get(1).getShipModel(0).mstID;
            if (this.model.hasCategory("counterbar")) {
                var l = _.FurnitureUtil.getCounterBarTextureName(s, u, o);
                this._model.__overwriteFileName__(l, "standard", 1, 1)
            } else if (this.model.hasCategory("dressingroom")) {
                var l = _.FurnitureUtil.getDressingRoomTextureName(s, u);
                this._model.__overwriteFileName__(l, "standard", 1, 0)
            } else if (this.model.hasCategory("secretarydesk")) {
                var l = _.FurnitureUtil.getSecretaryDeskTextureName(s, u);
                this._model.__overwriteFileName__(l, "standard", 1, 0)
            } else if (this.model.hasCategory("umbrellarack")) for (var c = _.FurnitureUtil.getUmbrellarackTextures(s, u), h = 0; h < c.length; h++) this._model.__overwriteFileName__(c[h], "standard", h, 0);
            this._animationState = 0
        }, t.prototype._getBaseStateName = function (t, e, i) {
            var n = r.ObjUtil.getObject(t, "case");
            if (null == n) return "standard";
            var o = r.ObjUtil.getObjectArray(n, "datetime");
            if (o) for (var s = 1e6 * e + i, a = o.length - 1; a >= 0; a--) {
                var _ = o[a], u = parseInt(r.ObjUtil.getString(_, "datetime"));
                if (!isNaN(u) && s >= u) return r.ObjUtil.getString(_, "state")
            }
            var l = r.ObjUtil.getObjectArray(n, "time");
            if (l) for (var a = l.length - 1; a >= 0; a--) {
                var _ = l[a], u = parseInt(r.ObjUtil.getString(_, "time"));
                if (!isNaN(u) && i >= u) return r.ObjUtil.getString(_, "state")
            }
            return "standard"
        }, t
    }();
    e.FAnimationData = c
}