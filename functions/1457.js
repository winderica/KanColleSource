const function1457 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = (i(0), i(2)), r = i(204), s = i(471), a = i(247), _ = i(1459), u = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._scene = e, i
        }

        return n(e, t), e.prototype._start = function () {
            this._useitemBonus()
        }, e.prototype._useitemBonus = function () {
            var t = this, e = this._scene.data.getBonusUseitem();
            if (null != e) {
                var i = this._scene.view.layer_cutin, n = e.mst_id;
                new _.TaskBonusTelop(i, 6, n).start(function () {
                    var e = new a.TaskBonusUseItem(i, n, 1);
                    e.start(function () {
                        t._slotitemBonus(e)
                    })
                })
            } else this._slotitemBonus(null)
        }, e.prototype._slotitemBonus = function (t) {
            var e = this, i = this._scene.data.getBonusSlot();
            if (null != i) {
                var n = this._scene.view.layer_cutin, o = i.mst_id;
                new _.TaskBonusTelop(n, 2, o).start(function () {
                    var i = new s.TaskBonusSlot(n, o, 1, t);
                    i.start(function () {
                        e._shipBonus(i)
                    })
                })
            } else this._shipBonus(t)
        }, e.prototype._shipBonus = function (t) {
            var e = this, i = this._scene.data.getBonusShip();
            if (null != i) {
                var n = this._scene.view.layer_cutin, o = i.mst_id,
                    s = this._scene.data.battle_model.map_info.area_id,
                    a = this._scene.data.battle_model.map_info.map_no, u = 1 == s && (1 == a || 2 == a || 3 == a);
                new _.TaskBonusTelop(n, 3, o, u).start(function () {
                    var i = new r.TaskBonusShip(n, o, t);
                    i.start(function () {
                        e._closeShutter(i)
                    })
                })
            } else this._closeShutter(null)
        }, e.prototype._closeShutter = function (t) {
            var e = this, i = this._scene.view.shutter;
            i.close(), i.once("closed", function () {
                null != t && t.dispose(), e._endTask()
            })
        }, e.prototype._endTask = function () {
            this._scene = null, t.prototype._endTask.call(this)
        }, e
    }(o.TaskBase);
    e.TaskNormalBonus = u
}