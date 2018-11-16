const function63 = function (t, e, i) {
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
    var o = i(2), r = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._entered = !1, n._showed_telop = !1, n._scene = e, n._record = i, n
        }

        return n(e, t), e.prototype._start = function () {
            1 == this._scene.view.bannerGroupLayer.isEnteredEnemy() ? this._endTask() : this._enterEnemies()
        }, e.prototype._enterEnemies = function () {
            var t = this;
            this._scene.view.layer_info2.once("complete", function () {
                t._showed_telop = !0, t._preEnd()
            }), this._scene.view.layer_info2.showCenter(5), this._scene.view.bannerGroupLayer.createEnemyEnterTask().start(function () {
                t._entered = !0, t._preEnd()
            });
            var e = this._scene.data.model.deck_e, i = e.formation, n = e.type, o = e.getCountMainDeck(),
                r = e.getCountSubDeck();
            this._scene.view.raderLayer.rader_e.show(i, n, o, r)
        }, e.prototype._preEnd = function () {
            var t = this;
            0 != this._entered && 0 != this._showed_telop && setTimeout(function () {
                t._endTask()
            }, 200)
        }, e
    }(o.TaskBase);
    e.PhaseEnemyEnter = r
}