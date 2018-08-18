const function1266 = function (t, e, i) {
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
    var o = i(5), r = i(0), s = i(141), a = i(7), _ = i(2), u = i(242), l = i(54), c = i(6), h = i(1267),
        p = i(1268), d = function (t) {
            function e(e, i, n, o, r, s, a, _, u, l) {
                var c = t.call(this) || this;
                return c._PLANEKEY = "airbaseraid", c._area_id = e, c._map_no = i, c._battle_obj = n, c._has_boku_airunit = o, c._mapinfo = r, c._plane_layer = s, c._telop_layer = a, c._battle_layer = _, c._airbase_layer = u, c._battle_cls = l, c
            }

            return n(e, t), e.prototype._start = function () {
                null == this._battle_obj ? this._endTask() : (c.SE.play("253"), this._flightEnemyAirUnit())
            }, e.prototype._flightEnemyAirUnit = function () {
                var t = this, e = this._mapinfo.getAirBaseRaidOption();
                this._plane_layer.show(this._PLANEKEY, e, 2e3, function () {
                    t._showTelop()
                })
            }, e.prototype._showTelop = function () {
                var t = this, e = new h.AirRaidTelop;
                e.initialize(this._has_boku_airunit), e.x = o.default.width / 2, e.y = o.default.height / 2, this._telop_layer.addChild(e), e.playAnimation(function () {
                    t._telop_layer.removeChild(e), t._fadeoutBGM()
                })
            }, e.prototype._fadeoutBGM = function () {
                var t = this;
                1 == r.default.sound.bgm.playing ? (r.default.sound.bgm.fadeOut(1e3), createjs.Tween.get(this).wait(1e3).call(function () {
                    t._startBattle()
                })) : this._startBattle()
            }, e.prototype._startBattle = function () {
                var t = this, e = new u.BattleSceneModel(!1);
                e.setGekimetsuData(this._battle_obj);
                var i = new l.Shutter;
                i.initializeDark(), i.close(0), this._battle_layer.addChild(i);
                var n = new this._battle_cls;
                n.initialize(e), this._battle_layer.addChild(n), i.alpha = 0, n.alpha = 0, createjs.Tween.get(i).to({ alpha: 1 }, 200), createjs.Tween.get(n).to({ alpha: 1 }, 300).call(function () {
                    n.once("complete", function () {
                        t._hideBattle(i, n)
                    }), n.start()
                })
            }, e.prototype._hideBattle = function (t, e) {
                var i = this;
                this._plane_layer.hide(this._PLANEKEY), this._battle_layer.removeChild(e), e.dispose(), createjs.Tween.get(t).wait(800).to({ alpha: 0 }, 300).wait(400).call(function () {
                    i._battle_layer.removeChild(t), i._showResultTelop()
                })
            }, e.prototype._showResultTelop = function () {
                var t = this, e = s.MapConst.getMapBGMID(this._area_id, this._map_no);
                1 == e.battle_bgm ? r.default.sound.bgm.playBattleBGM(e.id) : r.default.sound.bgm.play(e.id);
                var i = a.ObjUtil.getNumber(this._battle_obj, "api_lost_kind"), n = new p.AirRaidResultTelop;
                n.initialize(i), n.x = o.default.width / 2, n.y = o.default.height / 2, this._telop_layer.addChild(n), n.playAnimation(function () {
                    t._telop_layer.removeChild(n), t._endTask()
                }), 4 != i && null != this._airbase_layer && this._airbase_layer.shake()
            }, e.prototype._endTask = function () {
                this._battle_obj = null, this._mapinfo = null, this._plane_layer = null, this._telop_layer = null, this._battle_layer = null, this._battle_cls = null, t.prototype._endTask.call(this)
            }, e
        }(_.TaskBase);
    e.AirRaidTask = d
}