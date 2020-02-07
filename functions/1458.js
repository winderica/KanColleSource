const function1458 = function (t, e, i) {
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
    var o = i(27),
        r = i(20),
        s = i(2),
        a = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._scene = e, n._record = i, n
            }
            return n(e, t), e.prototype._start = function () {
                1 == this._scene.data.model.map_info.isNightStart() ? this._enterShipsAtNight() : this._enterBanners()
            }, e.prototype._enterShipsAtNight = function () {
                var t = this,
                    e = this._scene.view.bannerGroupLayer,
                    i = new o.ParallelTask;
                i.add(e.createFriendEnterTask()), i.add(e.createEnemyEnterTask()), i.start(function () {
                    if (1 == t._scene.data.model.deck_f.isCombined()) {
                        var i = new r.TweenTask,
                            n = e.friends.createExitTweens();
                        i.addTweens(n), n = e.createFriendSubDeckMoveTween(200), i.addTweens(n), i.start(function () {
                            t._endTask()
                        })
                    } else t._endTask()
                });
                var n = this._scene.data.model.deck_f,
                    s = n.getCountMainDeck(),
                    a = n.getCountSubDeck();
                1 == n.isCombined() ? this._scene.view.raderLayer.rader_f.show(n.formation, 0, a, 0, !1) : this._scene.view.raderLayer.rader_f.show(n.formation, n.type, s, a, !1);
                var _ = this._scene.data.model.deck_e,
                    u = _.formation,
                    l = _.type,
                    c = _.getCountMainDeck(),
                    h = _.getCountSubDeck();
                this._scene.view.raderLayer.rader_e.show(u, l, c, h, !1)
            }, e.prototype._enterBanners = function () {
                var t = this,
                    e = new r.TweenTask;
                if (1 == this._scene.view.bannerGroupLayer.isEnteredFriend() && 1 == this._scene.data.model.deck_f.isCombined()) {
                    var i = this._record.common.getActiveDeckFriend();
                    if (1 == i) {
                        var n = this._scene.view.bannerGroupLayer.friends_combined.createExitTweensUpDown();
                        e.addTweens(n)
                    } else if (2 == i) {
                        var n = this._scene.view.bannerGroupLayer.friends.createExitTweens();
                        e.addTweens(n), n = this._scene.view.bannerGroupLayer.createFriendSubDeckMoveTween(200), e.addTweens(n)
                    }
                }
                if (1 == this._scene.view.bannerGroupLayer.isEnteredEnemy() && 1 == this._scene.data.model.deck_e.isCombined()) {
                    var i = this._record.common.getActiveDeckEnemy();
                    if (1 == i) {
                        var n = this._scene.view.bannerGroupLayer.enemies_combined.createExitTweensUpDown();
                        e.addTweens(n)
                    } else if (2 == i) {
                        var n = this._scene.view.bannerGroupLayer.enemies.createExitTweens();
                        e.addTweens(n), n = this._scene.view.bannerGroupLayer.createEnemySubDeckMoveTween(200), e.addTweens(n)
                    }
                }
                e.start(function () {
                    t._endTask()
                })
            }, e
        }(s.TaskBase);
    e.PhaseMoveShips = a
}