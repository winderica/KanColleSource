const function1257 = function (t, e, i) {
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
    var o = i(0), r = i(2), s = i(1258), a = i(1259), _ = function (t) {
        function e(e, i, n, o) {
            var r = t.call(this) || this;
            return r._selectFormation = function () {
                if (0 == r._model.deck_f.type) {
                    var t = new s.TaskFormationSelect(r._scene.view, r._model.deck_f);
                    t.start(function () {
                        r._fadeoutBGM(t.selected_formation)
                    })
                } else {
                    var e = new a.TaskFormationSelectCombined(r._scene.view, r._model.deck_f);
                    e.start(function () {
                        r._fadeoutBGM(e.selected_formation)
                    })
                }
            }, r._scene = e, r._model = i, r._battle_cls = n, r._battle_result_cls = o, r
        }

        return n(e, t), e.prototype._start = function () {
            this._scene.view.map.ship_icon.startWaveRed(this._selectFormation)
        }, e.prototype._fadeoutBGM = function (t) {
            var e = this;
            1 == o.default.sound.bgm.playing ? (o.default.sound.bgm.fadeOut(1e3), createjs.Tween.get(this).wait(1e3).call(function () {
                e._startBattle(t)
            })) : this._startBattle(t)
        }, e.prototype._startBattle = function (t) {
            var e = this;
            this._model.deck_f.formation = t;
            var i = new this._battle_cls;
            i.initialize(this._model), this._scene.addChild(i), i.once("complete", function () {
                e._startBattleResult(i, e._model)
            }), i.start()
        }, e.prototype._startBattleResult = function (t, e) {
            var i = this, n = new this._battle_result_cls;
            n.initialize(), n.shutter.close(0), this._scene.addChild(n), this._scene.removeChild(t), t.dispose(), n.once("complete", function () {
                i._completeBattleResult(n)
            }), n.start(e)
        }, e.prototype._completeBattleResult = function (t) {
            var e = this;
            createjs.Tween.get(t).to({ alpha: 0 }, 200).call(function () {
                e._scene.removeChild(t), t.dispose(), e._endTask()
            })
        }, e
    }(r.TaskBase);
    e.CellTaskBattle = _
}