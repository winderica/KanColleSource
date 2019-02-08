const function1399 = function (t, e, i) {
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
    var o = i(28),
        r = i(19),
        s = i(2),
        a = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._scene = e, n._record = i, n
            }
            return n(e, t), e.prototype._start = function () {
                this._enterBanners()
            }, e.prototype._enterBanners = function () {
                var t = this;
                if (1 == this._scene.data.model.map_info.isNightStart()) {
                    var e = this._scene.view.bannerGroupLayer,
                        i = new o.ParallelTask;
                    i.add(e.createFriendEnterTask()), i.add(e.createEnemyEnterTask()), i.start(function () {
                        t._endTask()
                    });
                    var n = this._scene.data.model.deck_f,
                        s = n.formation,
                        a = n.type,
                        _ = n.getCountMainDeck(),
                        l = n.getCountSubDeck();
                    this._scene.view.raderLayer.rader_f.show(s, a, _, l, !1);
                    var u = this._scene.data.model.deck_e,
                        c = u.formation,
                        h = u.type,
                        p = u.getCountMainDeck(),
                        d = u.getCountSubDeck();
                    return void this._scene.view.raderLayer.rader_e.show(c, h, p, d, !1)
                }
                var f = new r.TweenTask;
                if (1 == this._scene.view.bannerGroupLayer.isEnteredFriend() && 1 == this._scene.data.model.deck_f.isCombined()) {
                    var y = this._record.common.getActiveDeckFriend();
                    if (1 == y) {
                        var m = this._scene.view.bannerGroupLayer.friends_combined.createExitTweensUpDown();
                        f.addTweens(m)
                    } else if (2 == y) {
                        var m = this._scene.view.bannerGroupLayer.friends.createExitTweens();
                        f.addTweens(m), m = this._scene.view.bannerGroupLayer.createFriendSubDeckMoveTween(200), f.addTweens(m)
                    }
                }
                if (1 == this._scene.view.bannerGroupLayer.isEnteredEnemy() && 1 == this._scene.data.model.deck_e.isCombined()) {
                    var y = this._record.common.getActiveDeckEnemy();
                    if (1 == y) {
                        var m = this._scene.view.bannerGroupLayer.enemies_combined.createExitTweensUpDown();
                        f.addTweens(m)
                    } else if (2 == y) {
                        var m = this._scene.view.bannerGroupLayer.enemies.createExitTweens();
                        f.addTweens(m), m = this._scene.view.bannerGroupLayer.createEnemySubDeckMoveTween(200), f.addTweens(m)
                    }
                }
                f.start(function () {
                    t._endTask()
                })
            }, e
        }(s.TaskBase);
    e.PhaseMoveShips = a
}