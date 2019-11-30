const function1400 = function (t, e, i) {
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
    var o = i(29),
        r = i(20),
        s = i(2),
        a = i(1401),
        _ = i(1408),
        l = i(473),
        u = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._scene = e, n._record = i, n
            }
            return n(e, t), e.prototype._start = function () {
                this._model = this._record.getAllyAttack(), null == this._model ? this._endTask() : this._opening()
            }, e.prototype._opening = function () {
                var t = this,
                    e = this._scene.view.bannerGroupLayer,
                    i = this._scene.view.layer_cutin,
                    n = new _.PhaseAllyOpening(this._model, e, i);
                n.preload(function () {
                    e.addAllyBannerGroup(t._model.ships), n.start(function () {
                        t._light()
                    })
                })
            }, e.prototype._light = function () {
                var t = this,
                    e = this._scene.view.bannerGroupLayer.ally;
                new a.PhaseAllyLighting(this._scene, this._record, this._model, e).start(function () {
                    t._hougeki()
                })
            }, e.prototype._hougeki = function () {
                var t = this,
                    e = this._model.getHougekiData(),
                    i = this._model.ships,
                    n = this._scene.data.model.deck_e.ships;
                new l.PhaseHougeki(this._scene, e, i, n).start(function () {
                    t._moveShips()
                })
            }, e.prototype._moveShips = function () {
                var t = this,
                    e = this._scene.view.bannerGroupLayer,
                    i = new o.SerialTask;
                i.add((new r.TweenTask).addTweens(e.ally.createExitTweensUpward())), i.add(e.createFriendEnterTask()), i.start(function () {
                    e.removeAllyBannerGroup(), t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._scene = null, this._record = null, this._model = null, t.prototype._endTask.call(this)
            }, e
        }(s.TaskBase);
    e.PhaseAllyAttack = u
}