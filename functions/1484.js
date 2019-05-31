const function1484 = function (t, e, i) {
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
        s = i(206),
        a = i(479),
        _ = i(245),
        l = i(1486),
        u = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._scene = e, i
            }
            return n(e, t), e.prototype._start = function () {
                this._useitemBonus()
            }, e.prototype._useitemBonus = function () {
                var t = this,
                    e = this._scene.data.getBonusUseitem();
                if (null != e) {
                    this._play_bgm || (this._play_bgm = !0, o.default.sound.bgm.play(132, !0, 1e3));
                    var i = this._scene.view.layer_cutin,
                        n = e.mst_id;
                    new l.TaskBonusTelop(i, 6, n).start(function () {
                        var e = new _.TaskBonusUseItem(i, n, 1, !1);
                        e.start(function () {
                            t._slotitemBonus(e)
                        })
                    })
                } else this._slotitemBonus(null)
            }, e.prototype._slotitemBonus = function (t) {
                var e = this,
                    i = this._scene.data.getBonusSlot();
                if (null != i) {
                    this._play_bgm || (this._play_bgm = !0, o.default.sound.bgm.play(132, !0, 1e3));
                    var n = this._scene.view.layer_cutin,
                        r = i.mst_id;
                    new l.TaskBonusTelop(n, 2, r).start(function () {
                        var i = new a.TaskBonusSlot(n, r, 1, 1, !1, t);
                        i.start(function () {
                            e._shipBonus(i)
                        })
                    })
                } else this._shipBonus(t)
            }, e.prototype._shipBonus = function (t) {
                var e = this,
                    i = this._scene.data.getBonusShip();
                if (null != i) {
                    this._play_bgm || (this._play_bgm = !0, o.default.sound.bgm.play(132, !0, 1e3));
                    var n = this._scene.view.layer_cutin,
                        r = i.mst_id,
                        a = this._scene.data.battle_model.map_info.area_id,
                        _ = this._scene.data.battle_model.map_info.map_no,
                        u = 1 == a && (1 == _ || 2 == _ || 3 == _);
                    new l.TaskBonusTelop(n, 3, r, u).start(function () {
                        var i = new s.TaskBonusShip(n, r, !1, t);
                        i.start(function () {
                            e._closeShutter(i)
                        })
                    })
                } else this._closeShutter(null)
            }, e.prototype._closeShutter = function (t) {
                var e = this;
                this._play_bgm && o.default.sound.bgm.fadeOut(1200);
                var i = this._scene.view.shutter;
                i.close(), i.once("closed", function () {
                    null != t && t.dispose(), e._endTask()
                })
            }, e.prototype._endTask = function () {
                this._scene = null, this._play_bgm = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase);
    e.TaskNormalBonus = u
}