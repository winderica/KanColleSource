const function97 = function (t, e, i) {
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
    var o = i(5), r = i(2), s = i(12), a = i(6), _ = i(1350), u = i(1351), l = i(61), c = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._scene = e, n._record = i, n._layer = new h, n
        }

        return n(e, t), e.prototype._start = function () {
            var t = this;
            if (null != this._scene.data.model.gekimetsu_data) this._endTask(); else if (this._scene.data.model.map_info.isAirRaid()) this._endTask(); else {
                var e = new l.PhaseEnemyEnter(this._scene, this._record);
                e.start(function () {
                    var e = t._record.common.formation_id_f, i = t._record.common.formation_id_e,
                        n = t._record.common.formation_id_c;
                    t._layer.initialize(e, i, n), t._scene.view.layer_info.addChild(t._layer), t._anim1()
                })
            }
        }, e.prototype._anim1 = function () {
            var t = this, e = this._scene.view.raderLayer, i = e.rader_f, n = e.rader_e;
            this._scene.view.layer_cutin.addChild(i), this._scene.view.layer_cutin.addChild(n), createjs.Tween.get(this._layer.barTop.scale).to({ y: 1 }, 300), createjs.Tween.get(this._layer.barBottom.scale).to({ y: 1 }, 300).call(function () {
                t._anim2()
            })
        }, e.prototype._anim2 = function () {
            var t = this, e = o.default.width / 2 - 399 + this._layer.formation_name_f.width / 2;
            createjs.Tween.get(this._layer.formation_name_f).to({ x: e }, 400, createjs.Ease.sineOut), e = o.default.width / 2 + 399 - this._layer.formation_name_e.width / 2, createjs.Tween.get(this._layer.formation_name_e).to({ x: e }, 400, createjs.Ease.sineOut).call(function () {
                t._anim3()
            })
        }, e.prototype._anim3 = function () {
            var t = this;
            this._layer.cross.play(), this._layer.cross.once("complete", function () {
                t._anim4()
            })
        }, e.prototype._anim4 = function () {
            var t = this;
            createjs.Tween.get(this._layer.advantageous).to({
                scaleX: 1,
                scaleY: 1,
                alpha: 1
            }, 250).wait(250).call(function () {
                t._anim5()
            })
        }, e.prototype._anim5 = function () {
            var t = this;
            createjs.Tween.get(this._layer.barTop.scale).wait(200).to({ y: 0 }, 200), createjs.Tween.get(this._layer.barBottom.scale).wait(200).to({ y: 0 }, 200);
            var e = 0 - this._layer.formation_name_f.width / 2;
            createjs.Tween.get(this._layer.formation_name_f).to({ x: e }, 400, createjs.Ease.sineIn), e = o.default.width + this._layer.formation_name_e.width / 2, createjs.Tween.get(this._layer.formation_name_e).to({ x: e }, 400, createjs.Ease.sineIn), createjs.Tween.get(this._layer.cross).to({ x: -o.default.width / 2 }, 400), createjs.Tween.get(this._layer.advantageous).to({ x: -o.default.width / 2 }, 400).call(function () {
                t._preEnd()
            })
        }, e.prototype._preEnd = function () {
            this._scene.view.layer_info.removeChild(this._layer), this._layer.dispose(), this._scene.view.raderLayer.resetChildren(), this._endTask()
        }, e
    }(r.TaskBase);
    e.PhaseFormation = c;
    var h = function (t) {
        function e() {
            return t.call(this) || this
        }

        return n(e, t), Object.defineProperty(e.prototype, "barTop", {
            get: function () {
                return this._barTop
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "barBottom", {
            get: function () {
                return this._barBottom
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "formation_name_f", {
            get: function () {
                return this._formation_name_f
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "formation_name_e", {
            get: function () {
                return this._formation_name_e
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "cross", {
            get: function () {
                return this._cross
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "advantageous", {
            get: function () {
                return this._advantageous
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function (t, e, i) {
            if (this._initializeBars(), this._initializeFormationName(t, e), this._cross = new p, this._cross.position.set(o.default.width / 2, o.default.height / 2), this.addChild(this._cross), this._cross.initialize(i), 3 == i) {
                this._cross.y -= 38;
                var n = _.BATTLE_JIN.getTexture(18);
                this._advantageous = new s.Sprite(n)
            } else if (4 == i) {
                this._cross.y -= 38;
                var n = _.BATTLE_JIN.getTexture(17);
                this._advantageous = new s.Sprite(n)
            } else this._advantageous = new s.Sprite(PIXI.Texture.EMPTY);
            this._advantageous.anchor.set(.5), this._advantageous.position.set(o.default.width / 2, 458), this._advantageous.scale.set(2), this._advantageous.alpha = 0, this.addChild(this._advantageous)
        }, e.prototype.dispose = function () {
            this.removeChildren()
        }, e.prototype._createBar = function () {
            var t = new PIXI.Graphics;
            return t.beginFill(0, .8), t.drawRect(-o.default.width / 2, -83, o.default.width, 165), t.endFill(), t
        }, e.prototype._initializeBars = function () {
            this._barTop = this._createBar(), this._barBottom = this._createBar(), this._barTop.position.set(o.default.width / 2, o.default.height / 2 - 243), this._barBottom.position.set(o.default.width / 2, o.default.height / 2 + 243), this._barTop.scale.y = 0, this._barBottom.scale.y = 0, this.addChild(this._barTop), this.addChild(this._barBottom)
        }, e.prototype._getTexture = function (t, e) {
            switch (t) {
                case 1:
                    return _.BATTLE_JIN.getTexture(e ? 10 : 4);
                case 2:
                    return _.BATTLE_JIN.getTexture(e ? 6 : 0);
                case 3:
                    return _.BATTLE_JIN.getTexture(e ? 8 : 2);
                case 4:
                    return _.BATTLE_JIN.getTexture(e ? 11 : 5);
                case 5:
                    return _.BATTLE_JIN.getTexture(e ? 9 : 3);
                case 6:
                    return _.BATTLE_JIN.getTexture(e ? 7 : 1);
                case 11:
                    return u.BATTLE_JIN_COMBINED.getTexture(e ? 4 : 0);
                case 12:
                    return u.BATTLE_JIN_COMBINED.getTexture(e ? 5 : 1);
                case 13:
                    return u.BATTLE_JIN_COMBINED.getTexture(e ? 6 : 2);
                case 14:
                    return u.BATTLE_JIN_COMBINED.getTexture(e ? 7 : 3)
            }
            return PIXI.Texture.EMPTY
        }, e.prototype._initializeFormationName = function (t, e) {
            this._formation_name_f = new PIXI.Sprite, this._formation_name_f.texture = this._getTexture(t, !0), this._formation_name_f.anchor.set(.5), this._formation_name_f.position.set(o.default.width + this._formation_name_f.width / 2, o.default.height / 2 + 243), this.addChild(this._formation_name_f), this._formation_name_e = new PIXI.Sprite, this._formation_name_e.texture = this._getTexture(e, !1), this._formation_name_e.anchor.set(.5), this._formation_name_e.position.set(0 - this._formation_name_e.width / 2, o.default.height / 2 - 243), this.addChild(this._formation_name_e)
        }, e
    }(PIXI.Container), p = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._playSE = function () {
                a.SE.play("109")
            }, e._c1 = new s.Sprite, e._c2 = new s.Sprite, e._c3 = new s.Sprite, e._c1.anchor.set(.5), e._c2.anchor.set(.5), e._c3.anchor.set(.5), e
        }

        return n(e, t), e.prototype.initialize = function (t) {
            this._c1.position.x = -278, this._c3.position.x = 278, this._c1.scale.set(2), this._c2.scale.set(2), this._c3.scale.set(2), 1 == t ? (this._c1.texture = _.BATTLE_JIN.getTexture(12), this._c2.texture = _.BATTLE_JIN.getTexture(14), this._c3.texture = _.BATTLE_JIN.getTexture(15)) : 2 == t ? (this._c1.texture = _.BATTLE_JIN.getTexture(13), this._c2.texture = _.BATTLE_JIN.getTexture(14), this._c3.texture = _.BATTLE_JIN.getTexture(15)) : (this._c1.texture = _.BATTLE_JIN.getTexture(16), this._c2.texture = _.BATTLE_JIN.getTexture(19), this._c3.texture = _.BATTLE_JIN.getTexture(15))
        }, e.prototype.play = function () {
            var t = this;
            createjs.Tween.get(this._c1).call(function () {
                t.addChild(t._c1)
            }).to({
                scaleX: 1,
                scaleY: 1
            }, 300).call(this._playSE), createjs.Tween.get(this._c2).wait(200).call(function () {
                t.addChild(t._c2)
            }).to({
                scaleX: 1,
                scaleY: 1
            }, 300).call(this._playSE), createjs.Tween.get(this._c3).wait(400).call(function () {
                t.addChild(t._c3)
            }).to({ scaleX: 1, scaleY: 1 }, 300).call(function () {
                t._playSE(), t.emit("complete")
            })
        }, e
    }(PIXI.Container)
}