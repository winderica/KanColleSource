const function198 = function (t, e, i) {
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
    var o = i(5), r = i(0), s = i(2), a = i(16), _ = i(291), u = i(292), l = i(293), c = i(184), h = i(294),
        p = i(295), d = i(296), f = i(199), y = i(185), v = i(142), m = i(124), g = i(297), b = i(613), w = i(614),
        x = i(625), I = i(626), T = i(627), O = i(628), P = i(629), C = i(630), k = i(631), M = i(632), S = i(633),
        A = i(634), j = i(635), E = i(204), N = function (t) {
            function e(e, i, n) {
                void 0 === n && (n = -1);
                var o = t.call(this) || this;
                return o._layer = e, o._rewards = i, o._quest_id = n, o
            }

            return n(e, t), e.prototype._start = function () {
                var t = this;
                this._fade = new a.FadeBox(.6), this._layer.addChild(this._fade), this._fade.show(300, function () {
                    t._addDialog()
                })
            }, e.prototype._addDialog = function () {
                this._dialog = new b.RewardDialog, this._dialog.position.set(o.default.width / 2, o.default.height / 2), this._dialog.initialize(), this._layer.addChild(this._dialog), this._showReward()
            }, e.prototype._showReward = function () {
                var t = this;
                if (null == this._rewards || 0 == this._rewards.length) return void this._removeDialog();
                var e = this._rewards.shift(), i = this._getTask(e);
                null == i ? this._removeDialog() : i.start(function () {
                    t._showReward()
                })
            }, e.prototype._removeDialog = function () {
                this._layer.removeChild(this._dialog), this._dialog.dispose(), this._dialog = null, this._hideFade()
            }, e.prototype._hideFade = function () {
                var t = this;
                this._fade.hide(200, function () {
                    t._layer.removeChild(t._fade), t._fade = null, t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._layer = null, this._rewards = null, t.prototype._endTask.call(this)
            }, e.prototype._getTask = function (t) {
                return t instanceof y.RewardModelShip ? 682 == this._quest_id || 882 == this._quest_id || 883 == this._quest_id ? new L(this._layer, t.mst_id) : new M.TaskRewardDialogShip(this._dialog, t) : t instanceof v.RewardModelSlotitem ? new S.TaskRewardDialogSlotitem(this._dialog, t) : t instanceof m.RewardModelUseitem ? new A.TaskRewardDialogUseitem(this._dialog, t) : t instanceof f.RewardModelMultiUseitem ? new k.TaskRewardDialogMultiUseitem(this._dialog, t) : t instanceof c.RewardModelFurniture ? new T.TaskRewardDialogFurniture(this._dialog, t) : t instanceof u.RewardModelDeck ? new x.TaskRewardDialogDeck(this._dialog, t) : t instanceof l.RewardModelExtraSupply ? new I.TaskRewardDialogExtraSupply(this._dialog, t) : t instanceof h.RewardModelLargeBuild ? new O.TaskRewardDialogLargeBuild(this._dialog, t) : t instanceof d.RewardModelModelChange ? new C.TaskRewardDialogModelChange(this._dialog, t, this._quest_id, this._fade) : t instanceof _.RewardModelAirUnit ? new w.TaskRewardDialogAirUnit(this._dialog, t) : t instanceof g.RewardModelWarResult ? new j.TaskRewardDialogWarResult(this._dialog, t) : t instanceof p.RewardModelMap ? new P.TaskRewardDialogMap(this._dialog, t) : void 0
            }, e
        }(s.TaskBase);
    e.TaskReward = N;
    var L = function (t) {
        function e(e, i) {
            return t.call(this, e, i, !0) || this
        }

        return n(e, t), e.prototype._finalize = function (t) {
            var e = this;
            r.default.sound.bgm.fadeOut(1200), createjs.Tween.get(t).to({ alpha: 0 }, 300).call(function () {
                t.deactivate(), e._bonus.removeChild(t)
            }), createjs.Tween.get(this._bonus).wait(100).to({ alpha: 0 }, 300).call(function () {
                e.dispose(), e._endTask()
            })
        }, e
    }(E.TaskBonusShip)
}