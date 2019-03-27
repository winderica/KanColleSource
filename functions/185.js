const function185 = function (t, e, i) {
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
        s = i(46),
        a = i(7),
        _ = i(44),
        l = i(2),
        u = i(18),
        c = i(6),
        h = i(45),
        p = i(1346),
        d = i(1347),
        f = i(65),
        y = i(253),
        m = function (t) {
            function e(e, i, n, s, a) {
                void 0 === a && (a = 0);
                var _ = t.call(this) || this;
                _._preAnim = function () {
                    var t = _._friend ? 1 : -1,
                        e = _._attacker.mst_id,
                        i = _._attacker.isDamaged();
                    _._canvas.chara.alpha = 0, _._canvas.chara.position.set((_._friend ? 0 : o.default.width / 2) - 99, 410);
                    var n = r.default.model.ship_graph.get(e).getBattleOffset(i);
                    _._ship.texture = r.default.resources.getShip(e, i, "full"), _._ship.position.set(n.x, n.y), _._canvas.chara.addChild(_._ship), _._shipFlash = new h.ShipFlash(r.default.resources.getShip(e, i, "full")), _._shipFlash.position.set(n.x, n.y), _._canvas.chara.addChild(_._shipFlash), _._canvas.plane.position.set(o.default.width / 2 - 917 * t, 372), _._canvas.plane.initialize(_._plane.mstID, _._friend), _._canvas.telop_bg.scale.set(2), _._canvas.telop.scale.set(2.6), _._anim1()
                }, _._anim2 = function () {
                    var t = new y.Wave;
                    t.initialize(), createjs.Tween.get(_._canvas.chara).wait(300).call(function () {
                        _._shipFlash.play()
                    }).wait(300).call(_._anim3), createjs.Tween.get(_._canvas.telop_bg).to({
                        scaleX: 1.3,
                        scaleY: 1.3,
                        alpha: 1
                    }, 200).call(function () {
                        c.SE.play("109")
                    }), createjs.Tween.get(_._canvas.telop).wait(33).call(function () {
                        c.SE.play("105")
                    }).to({
                        scaleX: 1.14,
                        scaleY: 1.14,
                        alpha: 1
                    }, 300), createjs.Tween.get(t).wait(133).call(function () {
                        _._canvas.telop_bg.addChild(t), t.play()
                    })
                }, _._anim3 = function () {
                    var t = o.default.width;
                    _._setSlotitemTextures();
                    var e = _._friend ? 1 : -1;
                    _._canvas.slot1.position.set(t / 2 + 825 * e, 390), _._canvas.slot2.position.set(t / 2 - 1425 * e, 600), _._canvas.slot1_text.anchor.set(_._friend ? 1 : 0, .5), _._canvas.slot1_text.position.set(_._friend ? 0 : t, 390), _._canvas.slot2_text.anchor.set(_._friend ? 0 : 1, .5), _._canvas.slot2_text.position.set(_._friend ? t : 0, 600), createjs.Tween.get(_._canvas.plane).to({
                        x: t / 2 + 863 * e
                    }, 400).call(function () {
                        _._canvas.plane.deactivate()
                    }).wait(100).call(_._anim4), createjs.Tween.get(_._canvas.slot_bg1).wait(200).call(function () {
                        c.SE.play("105")
                    }).to({
                        x: t / 2
                    }, 266).call(function () {
                        c.SE.play("109")
                    }), createjs.Tween.get(_._canvas.slot1).wait(200).to({
                        x: t / 2 - 300 * e,
                        alpha: 1
                    }, 233), createjs.Tween.get(_._canvas.slot_bg2).wait(200).to({
                        x: t / 2
                    }, 266), createjs.Tween.get(_._canvas.slot2).wait(200).to({
                        x: t / 2 + 300 * e,
                        alpha: 1
                    }, 233), createjs.Tween.get(_._canvas.slot1_text).wait(200).to({
                        x: t / 2 + 570 * e,
                        alpha: 1
                    }, 200, createjs.Ease.sineOut), createjs.Tween.get(_._canvas.slot2_text).wait(200).to({
                        x: t / 2 - 570 * e,
                        alpha: 1
                    }, 200, createjs.Ease.sineOut)
                }, _._anim4 = function () {
                    createjs.Tween.get(_._canvas.chara).wait(900).call(function () {
                        _._shipFlash.play()
                    }).wait(200).call(function () {
                        _._view.emit("attack"), _._anim5()
                    })
                }, _._anim6 = function (t, e) {
                    _._canvas.dispose(), createjs.Tween.get(t).to({
                        alpha: 0
                    }, 300), createjs.Tween.get(e).to({
                        alpha: 0
                    }, 300).call(function () {
                        t.deactivate(), _._view.removeChild(t), _._view.removeChild(e), _._endTask()
                    })
                }, _._attacker = e, _._plane = i, _._slot1 = n, _._slot2 = s, _._telopType = a, _._friend = _._attacker.friend, _._canvas = new d.CutinDanchakuCanvas, _._view = new PIXI.Container, _.view.addChild(_._canvas), _._ship = new PIXI.Sprite;
                var l = null == _._plane ? 0 : _._plane.mstID,
                    u = null == _._slot1 ? 0 : _._slot1.mstID,
                    f = null == _._slot2 ? 0 : _._slot2.mstID;
                return _._preload_task = new p.PreloadCutinDanchaku(e, l, u, f, _._telopType), _
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
                var t = this;
                this._canvas.initialize(this._friend, this._telopType);
                var e = new u.FadeBox(1);
                e.hide(0), this._canvas.addChild(e), e.show(50, function () {
                    e.hide(50, function () {
                        t._canvas.removeChild(e), t._canvas.bg.show(250, t._preAnim)
                    })
                })
            }, e.prototype._anim1 = function () {
                var t = this,
                    e = this._friend ? 1 : -1;
                this._canvas.bg.show(250), createjs.Tween.get(this._canvas.chara).wait(166).to({
                    y: -87,
                    alpha: 1
                }, 500).call(this._anim2), createjs.Tween.get(this._canvas.plane).wait(300).call(function () {
                    t._canvas.plane.activate()
                }).to({
                    x: o.default.width / 2 - 38 * e
                }, 433)
            }, e.prototype._setSlotitemTextures = function () {
                this._canvas.slot1.texture = r.default.resources.getSlotitem(this._slot1.mstID, "item_up"), this._canvas.slot2.texture = r.default.resources.getSlotitem(this._slot2.mstID, "item_up"), this._canvas.slot1_text.texture = r.default.resources.getSlotitem(this._slot1.mstID, "btxt_flat"), this._canvas.slot2_text.texture = r.default.resources.getSlotitem(this._slot2.mstID, "btxt_flat");
                var t = this._checkSlotOffset(this._slot1.mstID);
                t && (this._canvas.slot1.rotation = t.rotation, this._canvas.slot1.scale.x = t.scale_x, this._canvas.slot1.scale.y = t.scale_y);
                var e = this._checkSlotOffset(this._slot2.mstID);
                e && (this._canvas.slot2.rotation = e.rotation, this._canvas.slot2.scale.x = e.scale_x, this._canvas.slot2.scale.y = e.scale_y)
            }, e.prototype._anim5 = function () {
                createjs.Tween.get(this._canvas.chara).wait(100).to({
                    y: -900,
                    alpha: 0
                }, 500), createjs.Tween.get(this._canvas.slot1).wait(300).to({
                    scaleX: 1.75,
                    scaleY: 1.75
                }, 500), createjs.Tween.get(this._canvas.slot2).wait(300).to({
                    scaleX: 1.75,
                    scaleY: 1.75
                }, 500);
                var t = new f.IntensiveLines;
                t.initialize(), t.alpha = 0, this._view.addChild(t), createjs.Tween.get(t).wait(300).call(function () {
                    t.activate()
                }).to({
                    alpha: 1
                }, 200);
                var e = new u.FadeBox(1, 16777215);
                e.alpha = 0, this._view.addChild(e), createjs.Tween.get(e).wait(300).to({
                    alpha: 1
                }, 500).call(this._anim6, [t, e])
            }, e.prototype._endTask = function () {
                this._attacker = null, this._plane = null, this._slot1 = null, this._slot2 = null, null != this._view.parent && this._view.parent.removeChild(this._view), this._view = null, this._canvas = null, this._ship = null, this._preload_task = null, t.prototype._endTask.call(this)
            }, e.prototype._checkSlotOffset = function (t) {
                var e = s.SlotUtil.isEnemyItem(t) ? -1 : 1;
                if (1 == _.PlaneConst.OFFSET.hasOwnProperty(t.toString())) {
                    var i = _.PlaneConst.OFFSET[this._slot1.mstID],
                        n = a.ObjUtil.getNumber(i, "x"),
                        o = a.ObjUtil.getNumber(i, "y"),
                        r = a.ObjUtil.getNumber(i, "r"),
                        l = a.ObjUtil.getNumber(i, "sx", 1);
                    return {
                        x: n,
                        y: o,
                        rotation: -r / 180 * Math.PI * (this._friend ? 1 : -1),
                        scale_x: l * e * (this._friend ? 1 : -1),
                        scale_y: Math.abs(l)
                    }
                }
                return null
            }, e
        }(l.TaskBase);
    e.CutinDanchaku = m;
    var v = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e.prototype._setSlotitemTextures = function () {
            this._canvas.slot1.texture = r.default.resources.getSlotitem(this._slot2.mstID, "item_up"), this._canvas.slot2.texture = r.default.resources.getSlotitem(this._slot1.mstID, "item_up"), this._canvas.slot1_text.texture = r.default.resources.getSlotitem(this._slot2.mstID, "btxt_flat"), 0 == this._telopType && (this._canvas.slot2_text.texture = r.default.resources.getSlotitem(this._slot1.mstID, "btxt_flat"));
            var t = this._checkSlotOffset(this._slot1.mstID);
            t && (this._canvas.slot2.rotation = t.rotation, this._canvas.slot2.scale.x = t.scale_x, this._canvas.slot2.scale.y = t.scale_y);
            var e = this._checkSlotOffset(this._slot2.mstID);
            e && (this._canvas.slot1.rotation = e.rotation, this._canvas.slot1.scale.x = e.scale_x, this._canvas.slot1.scale.y = e.scale_y)
        }, e
    }(m);
    e.CutinDanchaku1 = v;
    var g = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e
    }(m);
    e.CutinDanchaku2 = g;
    var b = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e
    }(v);
    e.CutinDanchaku3 = b;
    var w = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e
    }(m);
    e.CutinDanchaku4 = w
}