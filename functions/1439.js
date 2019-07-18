const function1439 = function (t, e, i) {
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
        r = i(19),
        s = i(1440),
        a = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._ally = null, e._friends_combined = new s.BannerGroup(!0, !0), e._friends_combined.position.set(228, 117), e.addChild(e._friends_combined), e._enemies_combined = new s.BannerGroup(!1, !0), e._enemies_combined.position.set(753, 220), e.addChild(e._enemies_combined), e._friends = new s.BannerGroup(!0, !1), e._friends.position.set(0, 117), e.addChild(e._friends), e._enemies = new s.BannerGroup(!1, !1), e._enemies.position.set(960, 220), e.addChild(e._enemies), e._effect_layer = new PIXI.Container, e.addChild(e._effect_layer), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "friends", {
                get: function () {
                    return this._friends
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "enemies", {
                get: function () {
                    return this._enemies
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "friends_combined", {
                get: function () {
                    return this._friends_combined
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "enemies_combined", {
                get: function () {
                    return this._enemies_combined
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "ally", {
                get: function () {
                    return this._ally
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "effect_layer", {
                get: function () {
                    return this._effect_layer
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t, e, i, n) {
                this._friends.initialize(t), this._enemies.initialize(e), this._friends_combined.initialize(i), this._enemies_combined.initialize(n)
            }, e.prototype.addAllyBannerGroup = function (t) {
                this._ally = new s.BannerGroup(!0, !1), this._ally.x = this._friends.x, this._ally.y = this._friends.y, this._ally.initialize(t);
                var e = this.getChildIndex(this._effect_layer);
                this.addChildAt(this._ally, e)
            }, e.prototype.removeAllyBannerGroup = function () {
                null != this._ally && (null != this._ally.parent && this._ally.parent.removeChild(this._ally), this._ally = null)
            }, e.prototype.dispose = function () {
                this._friends.dispose(), this._enemies.dispose(), this._friends_combined.dispose(), this._enemies_combined.dispose()
            }, e.prototype.getBanner = function (t, e) {
                if (void 0 === e && (e = -1), -1 == e) {
                    var i = t;
                    return this._getBanner(i.friend, i.index)
                }
                var n = t;
                return this._getBanner(n, e)
            }, e.prototype._getBanner = function (t, e) {
                var i;
                if (1 == t) {
                    if (null != this._ally) return this._ally.getBanner(e);
                    i = this._friends.getBanner(e), null == i && (i = this._friends_combined.getBanner(e - 6))
                } else null == (i = this._enemies.getBanner(e)) && (i = this._enemies_combined.getBanner(e - 6));
                return i
            }, e.prototype.getShieldTargetBanner = function (t) {
                if (null == t) return null;
                if (1 == t.friend) {
                    if (this._friends.isContains(t)) return this._friends.getBanner(0);
                    if (this._friends_combined.isContains(t)) return this._friends_combined.getBanner(0);
                    if (null != this._ally && this._ally.isContains(t)) return this._ally.getBanner(0)
                } else {
                    if (this._enemies.isContains(t)) return this._enemies.getBanner(0);
                    if (this._enemies_combined.isContains(t)) return this._enemies_combined.getBanner(0)
                }
                return null
            }, e.prototype.isEnteredFriend = function () {
                return this._friends.isEntered() || this._friends_combined.isEntered()
            }, e.prototype.isEnteredEnemy = function () {
                return this._enemies.isEntered() || this._enemies_combined.isEntered()
            }, e.prototype.createFriendEnterTask = function () {
                return this._createEnterTask(!0)
            }, e.prototype.createEnemyEnterTask = function () {
                return this._createEnterTask(!1)
            }, e.prototype.createFriendSubDeckMoveTween = function (t) {
                return this._createBannerMoveTween(t, !0)
            }, e.prototype.createEnemySubDeckMoveTween = function (t) {
                return this._createBannerMoveTween(t, !1)
            }, e.prototype._createEnterTask = function (t) {
                var e = t ? this._friends : this._enemies,
                    i = t ? this._friends_combined : this._enemies_combined,
                    n = new o.SerialTask,
                    s = e.createEnterTweens();
                if (s.length > 0) {
                    var a = new r.TweenTask;
                    a.addTweens(s), n.add(a)
                }
                var _ = i.createEnterTweens();
                if (_.length > 0) {
                    var a = new r.TweenTask;
                    a.addTweens(_), n.add(a)
                }
                return n
            }, e.prototype._createBannerMoveTween = function (t, e) {
                var i = [],
                    n = e ? this._friends : this._enemies,
                    o = e ? this._friends_combined : this._enemies_combined,
                    r = n.x - o.x;
                o.x = n.x;
                for (var s = 0; s < o.getBannerNum(); s++) {
                    var a = o.getBanner(s);
                    a.x -= r;
                    var _ = a.createSubDeckMoveTween(t);
                    null != _ && i.push.apply(this, _), t += 100
                }
                return i
            }, e
        }(PIXI.Container);
    e.BannerGroupLayer = a
}