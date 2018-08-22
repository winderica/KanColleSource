const function182 = function (t, e, i) {
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
    var o = i(5), r = i(0), s = i(2), a = i(16), _ = i(6), u = i(44), l = i(1343), c = i(1344), h = i(63),
        p = i(255), d = function (t) {
            function e(e, i, n, s) {
                var a = t.call(this) || this;
                a._preAnim = function () {
                    var t = a._friend ? 1 : -1, e = a._attacker.mst_id, i = a._attacker.isDamaged();
                    a._canvas.chara.alpha = 0, a._canvas.chara.position.set((a._friend ? 0 : o.default.width / 2) - 99, 410);
                    var n = r.default.model.ship_graph.get(e).getBattleOffset(i);
                    a._ship.texture = r.default.resources.getShip(e, i, "full"), a._ship.position.set(n.x, n.y), a._canvas.chara.addChild(a._ship), a._shipFlash = new u.ShipFlash(r.default.resources.getShip(e, i, "full")), a._shipFlash.position.set(n.x, n.y), a._canvas.chara.addChild(a._shipFlash), a._canvas.plane.position.set(o.default.width / 2 - 917 * t, 372), a._canvas.plane.initialize(a._plane.mstID, a._friend), a._canvas.telop_bg.scale.set(2), a._canvas.telop.scale.set(2.6), a._anim1()
                }, a._anim2 = function () {
                    var t = new p.Wave;
                    t.initialize(), createjs.Tween.get(a._canvas.chara).wait(300).call(function () {
                        a._shipFlash.play()
                    }).wait(300).call(a._anim3), createjs.Tween.get(a._canvas.telop_bg).to({
                        scaleX: 1.3,
                        scaleY: 1.3,
                        alpha: 1
                    }, 200).call(function () {
                        _.SE.play("109")
                    }), createjs.Tween.get(a._canvas.telop).wait(33).call(function () {
                        _.SE.play("105")
                    }).to({
                        scaleX: 1.14,
                        scaleY: 1.14,
                        alpha: 1
                    }, 300), createjs.Tween.get(t).wait(133).call(function () {
                        a._canvas.telop_bg.addChild(t), t.play()
                    })
                }, a._anim3 = function () {
                    var t = o.default.width;
                    a._setSlotitemTextures();
                    var e = a._friend ? 1 : -1;
                    a._canvas.slot1.position.set(t / 2 + 825 * e, 390), a._canvas.slot2.position.set(t / 2 - 1425 * e, 600), a._canvas.slot1_text.anchor.set(a._friend ? 1 : 0, .5), a._canvas.slot1_text.position.set(a._friend ? 0 : t, 390), a._canvas.slot2_text.anchor.set(a._friend ? 0 : 1, .5), a._canvas.slot2_text.position.set(a._friend ? t : 0, 600), createjs.Tween.get(a._canvas.plane).to({ x: t / 2 + 863 * e }, 400).call(function () {
                        a._canvas.plane.deactivate()
                    }).wait(100).call(a._anim4), createjs.Tween.get(a._canvas.slot_bg1).wait(200).call(function () {
                        _.SE.play("105")
                    }).to({ x: t / 2 }, 266).call(function () {
                        _.SE.play("109")
                    }), createjs.Tween.get(a._canvas.slot1).wait(200).to({
                        x: t / 2 - 300 * e,
                        alpha: 1
                    }, 233), createjs.Tween.get(a._canvas.slot_bg2).wait(200).to({ x: t / 2 }, 266), createjs.Tween.get(a._canvas.slot2).wait(200).to({
                        x: t / 2 + 300 * e,
                        alpha: 1
                    }, 233), createjs.Tween.get(a._canvas.slot1_text).wait(200).to({
                        x: t / 2 + 570 * e,
                        alpha: 1
                    }, 200, createjs.Ease.sineOut), createjs.Tween.get(a._canvas.slot2_text).wait(200).to({
                        x: t / 2 - 570 * e,
                        alpha: 1
                    }, 200, createjs.Ease.sineOut)
                }, a._anim4 = function () {
                    createjs.Tween.get(a._canvas.chara).wait(900).call(function () {
                        a._shipFlash.play()
                    }).wait(200).call(function () {
                        a._view.emit("attack"), a._anim5()
                    })
                }, a._anim6 = function (t, e) {
                    a._canvas.dispose(), createjs.Tween.get(t).to({ alpha: 0 }, 300), createjs.Tween.get(e).to({ alpha: 0 }, 300).call(function () {
                        t.deactivate(), a._view.removeChild(t), a._view.removeChild(e), a._endTask()
                    })
                }, a._attacker = e, a._plane = i, a._slot1 = n, a._slot2 = s, a._friend = a._attacker.friend, a._canvas = new c.CutinDanchakuCanvas, a._view = new PIXI.Container, a.view.addChild(a._canvas), a._ship = new PIXI.Sprite;
                var h = null == a._plane ? 0 : a._plane.mstID, d = null == a._slot1 ? 0 : a._slot1.mstID,
                    f = null == a._slot2 ? 0 : a._slot2.mstID;
                return a._preload_task = new l.PreloadCutinDanchaku(e, h, d, f), a
            }

            return n(e, t), Object.defineProperty(e.prototype, "view", {
                get: function () {
                    return this._view
                }, enumerable: !0, configurable: !0
            }), e.prototype.getPreloadTask = function () {
                return this._preload_task
            }, e.prototype._start = function () {
                var t = this;
                this._canvas.initialize(this._friend);
                var e = new a.FadeBox(1);
                e.hide(0), this._canvas.addChild(e), e.show(50, function () {
                    e.hide(50, function () {
                        t._canvas.removeChild(e), t._canvas.bg.show(250, t._preAnim)
                    })
                })
            }, e.prototype._anim1 = function () {
                var t = this, e = this._friend ? 1 : -1;
                this._canvas.bg.show(250), createjs.Tween.get(this._canvas.chara).wait(166).to({
                    y: -87,
                    alpha: 1
                }, 500).call(this._anim2), createjs.Tween.get(this._canvas.plane).wait(300).call(function () {
                    t._canvas.plane.activate()
                }).to({ x: o.default.width / 2 - 38 * e }, 433)
            }, e.prototype._setSlotitemTextures = function () {
                this._canvas.slot1.texture = r.default.resources.getSlotitem(this._slot1.mstID, "item_up"), this._canvas.slot2.texture = r.default.resources.getSlotitem(this._slot2.mstID, "item_up"), this._canvas.slot1_text.texture = r.default.resources.getSlotitem(this._slot1.mstID, "btxt_flat"), this._canvas.slot2_text.texture = r.default.resources.getSlotitem(this._slot2.mstID, "btxt_flat")
            }, e.prototype._anim5 = function () {
                createjs.Tween.get(this._canvas.chara).wait(100).to({
                    y: -900,
                    alpha: 0
                }, 500), createjs.Tween.get(this._canvas.slot1).wait(300).to({
                    scaleX: 1.75,
                    scaleY: 1.75
                }, 500), createjs.Tween.get(this._canvas.slot2).wait(300).to({ scaleX: 1.75, scaleY: 1.75 }, 500);
                var t = new h.IntensiveLines;
                t.initialize(), t.alpha = 0, this._view.addChild(t), createjs.Tween.get(t).wait(300).call(function () {
                    t.activate()
                }).to({ alpha: 1 }, 200);
                var e = new a.FadeBox(1, 16777215);
                e.alpha = 0, this._view.addChild(e), createjs.Tween.get(e).wait(300).to({ alpha: 1 }, 500).call(this._anim6, [t, e])
            }, e.prototype._endTask = function () {
                this._attacker = null, this._plane = null, this._slot1 = null, this._slot2 = null, null != this._view.parent && this._view.parent.removeChild(this._view), this._view = null, this._canvas = null, this._ship = null, this._preload_task = null, t.prototype._endTask.call(this)
            }, e
        }(s.TaskBase);
    e.CutinDanchaku = d;
    var f = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype._setSlotitemTextures = function () {
            this._canvas.slot1.texture = r.default.resources.getSlotitem(this._slot2.mstID, "item_up"), this._canvas.slot2.texture = r.default.resources.getSlotitem(this._slot1.mstID, "item_up"), this._canvas.slot1_text.texture = r.default.resources.getSlotitem(this._slot2.mstID, "btxt_flat"), this._canvas.slot2_text.texture = r.default.resources.getSlotitem(this._slot1.mstID, "btxt_flat")
        }, e
    }(d);
    e.CutinDanchaku1 = f;
    var y = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e
    }(d);
    e.CutinDanchaku2 = y;
    var v = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e
    }(f);
    e.CutinDanchaku3 = v;
    var g = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e
    }(d);
    e.CutinDanchaku4 = g
}