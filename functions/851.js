const function851 = function (t, e, i) {
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
    var o = i(3), r = i(341), s = i(852), a = function (t) {
        function e() {
            var e = t.call(this) || this;
            e.CATAPULT_WIDTH = 1245, e._tween = null, e._craneTexture = {
                yellow: [o.REPAIR_MAIN.getTexture(19), o.REPAIR_MAIN.getTexture(20)],
                red: [o.REPAIR_MAIN.getTexture(17), o.REPAIR_MAIN.getTexture(18)],
                orange: [o.REPAIR_MAIN.getTexture(15), o.REPAIR_MAIN.getTexture(16)]
            }, e._core = new PIXI.Sprite, e._arm = new PIXI.Sprite, e._arm.anchor.set(.8, 1);
            var i = function () {
                e._arm.position.set(.8 * e._arm.width - 51, -82 + e._arm.height)
            };
            e._wire = new r.Wire, e._wire.scale.x = .69, e._wireHand = new s.WireHand, e._randomColor(i), e._wireHand.update(.3);
            var n = e._armsPosition(0);
            return e._arm.rotation = n.arm.rotation, e._wireHand.x = n.wireHand.x, e._wireHand.y = n.wireHand.y, e._wire.rotation = n.wire.rotation, e._wire.x = n.wire.x, e._wire.y = n.wire.y, e._crane = new PIXI.Container, e._crane.y = 60, e._crane.x = e.CATAPULT_WIDTH, e._crane.addChild(e._wireHand, e._wire, e._arm, e._core), e.addChild(e._crane), e
        }

        return n(e, t), e.prototype.play = function () {
            var t = this;
            if (null === this._tween) {
                this.end();
                var e = new createjs.Timeline([], { start: 0 }, { loop: !0, paused: !0 }),
                    i = 6e3 - 1e3 * Math.random(), n = {
                        crane: this._cranePosition(0),
                        arms: this._armsPosition(0),
                        wireHand: this._wireHand.getPosition(.35)
                    }, o = { duration: i, crane: this._cranePosition(.7) },
                    r = { duration: 1e3, arms: this._armsPosition(1), wireHand: this._wireHand.getPosition(.7) },
                    s = { duration: 500, crane: this._cranePosition(.745) },
                    a = { duration: 500, wireHand: this._wireHand.getPosition(.4) },
                    _ = { duration: 500, wireHand: this._wireHand.getPosition(.8) }, u = {
                        duration: 500,
                        crane: this._cranePosition(.7),
                        arms: this._armsPosition(0),
                        wireHand: this._wireHand.getPosition(.35)
                    }, l = { duration: i, crane: this._cranePosition(0) }, c = this._getTimeLineObj();
                c.crane.to(n.crane).to(o.crane, o.duration).wait(r.duration).to(s.crane, s.duration).wait(a.duration).call(function () {
                    t._wireHand.hideMaterial()
                }).wait(_.duration).to(u.crane, u.duration).to(l.crane, l.duration).call(function () {
                    t._randomColor(), t._wireHand.initialize()
                }), c.arm.to(n.arms.arm).wait(o.duration).to(r.arms.arm, r.duration).wait(s.duration).wait(a.duration).wait(_.duration).to(u.arms.arm, u.duration).wait(l.duration), c.wire.to(n.arms.wire).wait(o.duration).to(r.arms.wire, r.duration).wait(s.duration).wait(a.duration).wait(_.duration).to(u.arms.wire, u.duration).wait(l.duration), c.wireHand.to(n.arms.wireHand).wait(o.duration).to(r.arms.wireHand, r.duration).wait(s.duration).wait(a.duration).wait(_.duration).to(u.arms.wireHand, u.duration).wait(l.duration), c.wireHandWire.to(n.wireHand.wire).wait(o.duration).to(r.wireHand.wire, r.duration).wait(s.duration).to(a.wireHand.wire, a.duration).to(_.wireHand.wire, _.duration).to(u.wireHand.wire, u.duration).wait(l.duration), c.wireHandContainer.to(n.wireHand.container).wait(o.duration).to(r.wireHand.container, r.duration).wait(s.duration).to(a.wireHand.container, a.duration).to(_.wireHand.container, _.duration).to(u.wireHand.container, u.duration).wait(l.duration), e.addTween(c.crane, c.arm, c.wire, c.wireHand, c.wireHandWire, c.wireHandContainer), e.gotoAndPlay("start"), this._tween = e
            }
        }, e.prototype.timeLimit = function () {
            this.end(), createjs.Tween.get(this._crane).to({ x: this.CATAPULT_WIDTH }, 1e3, createjs.Ease.linear)
        }, e.prototype.highSpeed = function () {
            var t = this, e = null !== this._tween ? 1e3 : 100;
            this.end();
            var i = new createjs.Timeline([], { start: 0 }, { loop: !1, paused: !0 }),
                n = { duration: e, crane: this._cranePosition(0), wireHand: this._wireHand.getPosition(.4) },
                o = { duration: 1400, crane: this._cranePosition(.7) },
                r = { duration: 1e3, arms: this._armsPosition(1), wireHand: this._wireHand.getPosition(.8) },
                s = { duration: 500, crane: this._cranePosition(.745) },
                a = { duration: 500, wireHand: this._wireHand.getPosition(.5) },
                _ = { duration: 500, wireHand: this._wireHand.getPosition(.8) }, u = {
                    duration: 500,
                    crane: this._cranePosition(.7),
                    arms: this._armsPosition(0),
                    wireHand: this._wireHand.getPosition(.3)
                }, l = { duration: 1e3, crane: this._cranePosition(0) }, c = this._getTimeLineObj();
            c.crane.to(n.crane, n.duration).call(function () {
                t._wireHand.bucketMaterial()
            }).to(o.crane, o.duration).wait(r.duration).to(s.crane, s.duration).wait(a.duration).call(function () {
                t._wireHand.hideMaterial(), t.emit("high_speed_timer_stop")
            }).wait(_.duration).to(u.crane, u.duration).to(l.crane, l.duration).call(function () {
                t.end(), t.emit("high_speed_complete")
            }), c.arm.wait(n.duration).wait(o.duration).to(r.arms.arm, r.duration).wait(s.duration).wait(a.duration).wait(_.duration).to(u.arms.arm, u.duration).wait(l.duration), c.wire.wait(n.duration).wait(o.duration).to(r.arms.wire, r.duration).wait(s.duration).wait(a.duration).wait(_.duration).to(u.arms.wire, u.duration).wait(l.duration), c.wireHand.wait(n.duration).wait(o.duration).to(r.arms.wireHand, r.duration).wait(s.duration).wait(a.duration).wait(_.duration).to(u.arms.wireHand, u.duration).wait(l.duration), c.wireHandWire.to(n.wireHand.wire, n.duration).wait(o.duration).to(r.wireHand.wire, r.duration).wait(s.duration).to(a.wireHand.wire, a.duration).to(_.wireHand.wire, _.duration).to(u.wireHand.wire, u.duration).wait(l.duration), c.wireHandContainer.to(n.wireHand.container, n.duration).wait(o.duration).to(r.wireHand.container, r.duration).wait(s.duration).to(a.wireHand.container, a.duration).to(_.wireHand.container, _.duration).to(u.wireHand.container, u.duration).wait(l.duration), i.addTween(c.crane, c.arm, c.wire, c.wireHand, c.wireHandWire, c.wireHandContainer), i.gotoAndPlay("start"), this._tween = i
        }, e.prototype.end = function () {
            null !== this._tween && (this._tween.removeAllEventListeners("change"), this._tween.setPaused(!0)), this._tween = null
        }, e.prototype._randomColor = function (t) {
            void 0 === t && (t = null);
            var e = 100 * Math.random();
            if (e <= 30) {
                var i = this._craneTexture.yellow;
                this._core.texture = i[0], this._arm.texture = i[1]
            } else if (e <= 60) {
                var i = this._craneTexture.red;
                this._core.texture = i[0], this._arm.texture = i[1]
            } else {
                var i = this._craneTexture.orange;
                this._core.texture = i[0], this._arm.texture = i[1]
            }
            null !== t && t()
        }, e.prototype._getTimeLineObj = function () {
            var t = this._wireHand.obj;
            return {
                crane: createjs.Tween.get(this._crane),
                arm: createjs.Tween.get(this._arm),
                wire: createjs.Tween.get(this._wire),
                wireHand: createjs.Tween.get(this._wireHand),
                wireHandWire: createjs.Tween.get(t.wire),
                wireHandContainer: createjs.Tween.get(t.container)
            }
        }, e.prototype._cranePosition = function (t) {
            return { x: this.CATAPULT_WIDTH * (1 - t) }
        }, e.prototype._armsPosition = function (t) {
            var e = 22 * t, i = -4 * t;
            return {
                arm: { rotation: Math.PI / 180 * (14.5 * t) },
                wireHand: { x: -42 + e, y: -78 + i },
                wire: { rotation: Math.PI / 180 * (47 + 13 * t), x: -37 + e, y: -78 + i }
            }
        }, e.prototype.dispose = function () {
            this.end(), this._core = null, this._arm = null, this._wire.dispose(), this._wire = null, this._wireHand.dispose(), this._wireHand = null, this._crane.removeChildren(), this._crane = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    e.CraneAnimation = a
}