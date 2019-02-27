const function141 = function (t, e, i) {
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
    var o = i(5),
        r = i(0),
        s = i(2),
        a = i(12),
        _ = i(14),
        l = i(25),
        u = i(44),
        c = i(450),
        h = i(451),
        p = function (t) {
            function e(e, i, n, o, r) {
                var s = t.call(this) || this;
                s._attacker = e, s._slot = i, s._showStatus = o, s._showTelop = r, s._friend = s._attacker.friend;
                var a = s._friend ? -162 : 435;
                s._base_pos = new PIXI.Point(a, -131), s._view = new c.CutinCanvas;
                var _ = Math.floor(3 * Math.random());
                return s._telop = new h.CutinTelop(_, n), 1 == s._showTelop ? s._preload_task = new d(e, i) : s._preload_task = new d(e, null), s
            }
            return n(e, t), Object.defineProperty(e.prototype, "view", {
                get: function () {
                    return this._view
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.getPreloadTask = function () {
                return this._preload_task
            }, e.prototype._start = function () {
                var t = this._attacker.mst_id,
                    e = this._attacker.isDamaged(),
                    i = r.default.resources.getShip(t, e, "full"),
                    n = new a.Sprite(i),
                    o = new u.ShipFlash(i),
                    s = r.default.model.ship_graph.get(t),
                    _ = s.getBattleOffset(e);
                n.x = o.x = _.x, n.y = o.y = _.y;
                var l = this._friend ? 1 : -1,
                    c = Math.floor(4 * Math.random());
                0 == c ? this.play_type1(n, o, l) : 1 == c ? this.play_type2(n, o, l, _) : 2 == c ? this.play_type3(n, o, l) : this.play_type4(n, o, l, _), this._view.chara.addChild(n), this._view.chara.addChild(o), this._animBox(this._attacker, this._slot), this._animTelop(this._slot, this._attacker.friend)
            }, e.prototype.play_type1 = function (t, e, i) {
                var n = this;
                this._view.chara.position.set(this._base_pos.x - 180 * i, this._base_pos.y + 120), this._view.chara.alpha = 0;
                var o = createjs.Tween.get(this._view.chara).to({
                    x: this._base_pos.x - 30 * i,
                    y: this._base_pos.y + 15,
                    alpha: 1
                }, 300).to({
                    x: this._base_pos.x,
                    y: this._base_pos.y
                }, 250);
                this._addAttackTween(e, o), o.to({
                    x: this._base_pos.x + 38 * i,
                    y: this._base_pos.y - 23
                }, 135), o.to({
                    x: this._base_pos.x + 135 * i,
                    y: this._base_pos.y - 75,
                    alpha: 0
                }, 335), o.call(function () {
                    n._tweenEnd(e)
                })
            }, e.prototype.play_type2 = function (t, e, i, n) {
                var o = this;
                this._view.chara.position.set(this._base_pos.x, this._base_pos.y);
                var r = 344 - n.x,
                    s = 597 - n.y;
                t.x += r, t.y += s, t.anchor.set(r / t.width, s / t.height), t.scale.set(1.25), t.alpha = 0, e.position = t.position, e.anchor = t.anchor, e.scale = t.scale, e.alpha = t.alpha;
                var a = createjs.Tween.get(t).to({
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 1
                }, 533, createjs.Ease.sineOut);
                a.call(function () {
                    e.scale.x = 1, e.scale.y = 1
                }), this._addAttackTween(e, a), a.call(function () {
                    createjs.Tween.get(e).to({
                        scaleX: 1.25,
                        scaleY: 1.25
                    }, 466)
                }), a.to({
                    scaleX: 1.25,
                    scaleY: 1.25,
                    alpha: 0
                }, 466), a.call(function () {
                    o._tweenEnd(e)
                })
            }, e.prototype.play_type3 = function (t, e, i) {
                var n = this;
                this._view.chara.position.set(this._base_pos.x - 180 * i, this._base_pos.y), this._view.chara.alpha = 0;
                var o = createjs.Tween.get(this._view.chara).to({
                    x: this._base_pos.x - 30 * i,
                    alpha: 1
                }, 300).to({
                    x: this._base_pos.x
                }, 250);
                this._addAttackTween(e, o), o.to({
                    x: this._base_pos.x + 78 * i,
                    alpha: 0
                }, 466), o.call(function () {
                    n._tweenEnd(e)
                })
            }, e.prototype.play_type4 = function (t, e, i, n) {
                var o = this;
                this._view.chara.position.set(this._base_pos.x - 180 * i, this._base_pos.y), this._view.chara.alpha = 0;
                var r = 344 - n.x,
                    s = 597 - n.y;
                t.x += r, t.y += s, t.anchor.set(r / t.width, s / t.height), e.position = t.position, e.anchor = t.anchor;
                var a = createjs.Tween.get(this._view.chara).to({
                    x: this._base_pos.x - 30 * i,
                    alpha: 1
                }, 300).to({
                    x: this._base_pos.x
                }, 250);
                this._addAttackTween(e, a), a.call(function () {
                    createjs.Tween.get(t).to({
                        scaleY: 1.66,
                        alpha: 0
                    }, 466), createjs.Tween.get(e).to({
                        scaleY: 1.66
                    }, 466).call(function () {
                        o._tweenEnd(e)
                    })
                })
            }, e.prototype._tweenEnd = function (t) {
                t.parent.removeChild(t), this._endTask()
            }, e.prototype._addAttackTween = function (t, e) {
                var i = this;
                return e.call(function () {
                    i._view.emit("attack"), t.play()
                }), e.wait(135), e
            }, e.prototype._animBox = function (t, e) {
                if (null != t && null != e && 0 != this._showStatus) {
                    var i = this._view.box;
                    i.initilize(t);
                    var n = 0;
                    1 == t.friend ? i.x = -60 : (n = o.default.width - i.width, i.x = n + 60), i.y = o.default.height - i.height, i.alpha = 0, createjs.Tween.get(i).wait(220).to({
                        x: n,
                        alpha: 1
                    }, 165).wait(900).to({
                        alpha: 0
                    }, 200)
                }
            }, e.prototype._animTelop = function (t, e) {
                null != t && 0 != this._showTelop && (this._telop.initialize(t.mstID, e), this._view.addChildAt(this._telop, 0), this._telop.play())
            }, e.prototype._endTask = function () {
                this._attacker = null, this._slot = null, this._base_pos = null, null != this._view.parent && this._view.parent.removeChild(this._view), this._view.dispose(), this._view = null, this._telop = null, this._preload_task = null, t.prototype._endTask.call(this)
            }, e
        }(s.TaskBase);
    e.CutinAttack = p;
    var d = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._attacker = e, n._slot = i, n
        }
        return n(e, t), e.prototype._start = function () {
            this._loadShipImage()
        }, e.prototype._loadShipImage = function () {
            var t = this,
                e = new _.ShipLoader;
            e.add(this._attacker.mst_id, this._attacker.isDamaged(), "full"), e.load(function () {
                t._loadSlotTextImage()
            })
        }, e.prototype._loadSlotTextImage = function () {
            var t = this;
            if (null != this._slot) {
                var e = new l.SlotLoader;
                e.add(this._slot.mstID, "btxt_flat"), e.load(function () {
                    t._endTask()
                })
            } else this._endTask()
        }, e
    }(s.TaskBase)
}