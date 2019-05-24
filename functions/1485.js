const function1485 = function (t, e, i) {
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
    var o = i(2),
        r = i(1486),
        s = i(1492),
        a = i(1497),
        _ = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._scene = e, i
            }
            return n(e, t), e.prototype._start = function () {
                this._mapClear()
            }, e.prototype._mapClear = function () {
                var t = this;
                if (1 == this._scene.data.isFirstClear()) {
                    var e = this._scene.shutter,
                        i = this._scene.data.battle_model.map_info.area_id,
                        n = this._scene.data.battle_model.map_info.map_no,
                        o = this._scene.data.battle_model.deck_f.ships[0],
                        s = o.mst_id,
                        a = o.isDamaged(),
                        _ = this._scene.data.getClearMapSuffix();
                    new r.TaskEventClear(e, i, n, s, a, _).start(function () {
                        t._ending()
                    })
                } else this._ending()
            }, e.prototype._ending = function () {
                var t = this;
                if (1 == this._scene.data.isFirstClear()) {
                    var e = this._scene.layer_bonus,
                        i = this._scene.data.battle_model.map_info.area_id,
                        n = this._scene.data.battle_model.map_info.map_no,
                        o = this._scene.data.getClearOperationSuffix();
                    new s.TaskEventEnding(e, i, n, o).start(function () {
                        t._mapOpen()
                    })
                } else this._mapOpen()
            }, e.prototype._mapOpen = function () {
                var t = this,
                    e = this._scene.data.getOpenedMapIDs();
                if (e.length > 0) {
                    var i = this._scene.layer_bonus;
                    new a.TaskMapOpen(i, e).start(function () {
                        t._endTask()
                    })
                } else this._endTask()
            }, e
        }(o.TaskBase);
    e.PhaseClear = _
}