const function1403 = function (t, e, i) {
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
    var o = i(28), r = i(29), s = i(19), a = i(2), _ = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._scene = e, n._record = i, n
        }

        return n(e, t), e.prototype._start = function () {
            var t = this, e = new o.ParallelTask;
            e.add(this._createTween_f()), e.add(this._createTween_e()), e.start(function () {
                t._endTask()
            })
        }, e.prototype._endTask = function () {
            this._scene = null, this._record = null
        }, e.prototype._createTween_f = function () {
            var t = this._scene.view.bannerGroupLayer;
            if (0 == t.isEnteredFriend()) return t.createFriendEnterTask();
            var e = new s.TweenTask;
            if (1 == this._scene.data.model.deck_f.isCombined()) {
                var i = this._record.common.getActiveDeckFriend();
                1 == i ? e.addTweens(t.friends_combined.createExitTweensUpDown()) : 2 == i && (e.addTweens(t.friends.createExitTweens()), e.addTweens(t.createFriendSubDeckMoveTween(200)))
            }
            return e
        }, e.prototype._createTween_e = function () {
            var t = this._record.common.getActiveDeckEnemy(), e = this._scene.view.bannerGroupLayer;
            if (0 == e.isEnteredEnemy()) return 1 == t ? e.createEnemyEnterTask() : 2 == t ? new r.SerialTask(e.createEnemyEnterTask(), (new s.TweenTask).addTweens(e.enemies.createExitTweens()).addTweens(e.createEnemySubDeckMoveTween(200))) : e.createEnemyEnterTask();
            var i = new s.TweenTask;
            if (1 == this._scene.data.model.deck_e.isCombined()) {
                var n = this._record.common.getActiveDeckEnemy();
                1 == n ? i.addTweens(e.enemies_combined.createExitTweensUpDown()) : 2 == n && (i.addTweens(e.enemies.createExitTweens()), i.addTweens(e.createEnemySubDeckMoveTween(200)))
            }
            return i
        }, e
    }(a.TaskBase);
    e.TaskMoveBannerDay = _
}