const function423 = function (t, e, i) {
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
    var o = i(120), r = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._eye_state = 0, i._isDischarge = !1, i._onUpdate = function () {
            }, i._ship1st = e, i.akashiset(), i
        }

        return n(e, t), Object.defineProperty(e.prototype, "akashi", {
            get: function () {
                return this._akashi_body
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "akashi_eye", {
            get: function () {
                return this._akashi_eye
            }, enumerable: !0, configurable: !0
        }), e.prototype.akashiset = function () {
            182 == this._ship1st ? (this._akashi_body = new PIXI.Sprite(o.REVAMP_REVAMP.getTexture(5)), this._akashi_body.position.set(256, 156), this._akashi_eye = new PIXI.Sprite(o.REVAMP_REVAMP.getTexture(0)), this._akashi_eye.position.set(675, 225)) : (this._akashi_body = new PIXI.Sprite(o.REVAMP_REVAMP.getTexture(7)), this._akashi_body.position.set(256, 156), this._akashi_eye = new PIXI.Sprite(o.REVAMP_REVAMP.getTexture(0)), this._akashi_eye.position.set(675, 225)), this.addChild(this._akashi_body), this.addChild(this._akashi_eye), this._effect_1_2 = new PIXI.Sprite(o.REVAMP_REVAMP.getTexture(10)), this._effect_1_2.position.set(499, 559), this._effect_1_2.visible = !1, this._effect_1_2.anchor.set(.5, .5), this.addChild(this._effect_1_2), this._effect_3 = new PIXI.Sprite(o.REVAMP_REVAMP.getTexture(12)), this._effect_3.position.set(541, 275), this._effect_3.visible = !1, this.addChild(this._effect_3), this._effect_3_f = new PIXI.Sprite(o.REVAMP_REVAMP.getTexture(12)), this._effect_3_f.position.set(541, 275), this._effect_3_f.visible = !1, this.addChild(this._effect_3_f)
        }, e.prototype.initialize = function () {
            this._update()
        }, e.prototype.activate = function () {
            this._startWaiting()
        }, e.prototype.deactivate = function () {
            this._stopWaiting()
        }, e.prototype.dispose = function () {
            this.deactivate()
        }, e.prototype.ChangeFace = function (t) {
        }, e.prototype.Spark = function () {
            var t = this;
            this._t = createjs.Tween.get(this._effect_1_2).wait(500).call(function () {
                t._effect_1_2.visible = !0, t._effect_1_2.position.set(499, 559), t._effect_1_2.width = 214, t._effect_1_2.height = 247, t._effect_1_2.texture = o.REVAMP_REVAMP.getTexture(10)
            }).to({ alpha: 1 }, 1).wait(100).to({ alpha: 0 }, 1).call(function () {
                t._effect_1_2.position.set(511, 547), t._effect_1_2.width = 214, t._effect_1_2.height = 247
            }).to({ alpha: 1 }, 1).to({ width: 6.42, height: 7.41 }, 1).to({
                width: 214,
                height: 247
            }, 200).to({ alpha: 0 }, 60).call(function () {
                t._effect_1_2.position.set(595, 629), t._effect_1_2.width = 214, t._effect_1_2.height = 247
            }).to({ alpha: 1 }, 1).wait(100).call(function () {
                t._effect_1_2.position.set(595, 629), t._effect_1_2.texture = o.REVAMP_REVAMP.getTexture(11), t._effect_1_2.width = 142, t._effect_1_2.height = 165
            }).to({ alpha: 1 }, 1).to({ width: 4.26, height: 4.95 }, 1).to({
                width: 142,
                height: 165
            }, 200).to({ alpha: 0 }, 60).wait(1e3).call(function () {
                t._effect_1_2.position.set(548, 537), t._effect_1_2.width = 143, t._effect_1_2.height = 165, t._effect_1_2.texture = o.REVAMP_REVAMP.getTexture(10)
            }).to({ alpha: 1 }, 1).wait(100).call(function () {
                t._effect_1_2.position.set(554, 531), t._effect_1_2.width = 143, t._effect_1_2.height = 165
            }).to({ alpha: 1 }, 1).to({ width: 6.42, height: 7.41 }, 1).to({
                width: 214,
                height: 247
            }, 200).to({ alpha: 0 }, 60).call(function () {
                t._effect_1_2.position.set(595, 629), t._effect_1_2.texture = o.REVAMP_REVAMP.getTexture(11), t._effect_1_2.width = 142, t._effect_1_2.height = 165
            }).to({ alpha: 1 }, 1).wait(100).call(function () {
                t._effect_1_2.position.set(595, 629), t._effect_1_2.width = 142, t._effect_1_2.height = 165
            }).to({ alpha: 1 }, 1).to({ width: 4.26, height: 4.95 }, 1).to({
                width: 142,
                height: 165
            }, 200).to({ alpha: 0 }, 60).call(function () {
                t._t = null
            }), this._t2 = createjs.Tween.get(this._effect_3_f).wait(500).call(function () {
                t._effect_3_f.visible = !0
            }).to({ alpha: 1 }, 1).wait(100).to({ alpha: 0 }, 1).call(function () {
            }).to({ alpha: 1 }, 1).wait(1).wait(200).to({ alpha: 0 }, 60).call(function () {
            }).to({ alpha: 1 }, 1).wait(100).call(function () {
            }).to({ alpha: 1 }, 1).wait(1).wait(200).to({ alpha: 0 }, 60).wait(1e3).call(function () {
            }).to({ alpha: 1 }, 1).wait(100).call(function () {
            }).to({ alpha: 1 }, 1).wait(1).wait(200).to({ alpha: 0 }, 60).call(function () {
            }).to({ alpha: 1 }, 1).wait(100).call(function () {
            }).to({ alpha: 1 }, 1).wait(1).wait(200).to({ alpha: 0 }, 60).call(function () {
                t._t2 = null
            })
        }, e.prototype._eye_pattern = function (t, e, i) {
            var n = this;
            this._t = createjs.Tween.get(this).wait(30).call(function () {
                n._akashi_eye.texture = o.REVAMP_REVAMP.getTexture(t)
            }).wait(30).call(function () {
                n._akashi_eye.texture = o.REVAMP_REVAMP.getTexture(e)
            }).wait(30).call(function () {
                n._akashi_eye.texture = o.REVAMP_REVAMP.getTexture(i), n._t = null
            })
        }, e.prototype._eye_pattern_twice = function (t, e, i) {
            var n = this;
            this._t = createjs.Tween.get(this).wait(30).call(function () {
                n._akashi_eye.texture = o.REVAMP_REVAMP.getTexture(t)
            }).wait(30).call(function () {
                n._akashi_eye.texture = o.REVAMP_REVAMP.getTexture(e)
            }).wait(30).call(function () {
                n._akashi_eye.texture = o.REVAMP_REVAMP.getTexture(i)
            }).wait(30).call(function () {
                n._akashi_eye.texture = o.REVAMP_REVAMP.getTexture(e)
            }).wait(30).call(function () {
                n._akashi_eye.texture = o.REVAMP_REVAMP.getTexture(t)
            }).wait(60).call(function () {
                n._akashi_eye.texture = o.REVAMP_REVAMP.getTexture(e)
            }).wait(30).call(function () {
                n._akashi_eye.texture = o.REVAMP_REVAMP.getTexture(i), n._t = null
            })
        }, e.prototype.AkashiMove = function (t) {
            var e = this;
            t || (182 == this._ship1st ? this._akashi_body.texture = o.REVAMP_REVAMP.getTexture(5) : this._akashi_body.texture = o.REVAMP_REVAMP.getTexture(7)), this._t = createjs.Tween.get(this).wait(1).to({ x: t ? 150 : 0 }, 250, createjs.Ease.quintIn).call(function () {
                e._t = null, t && (182 == e._ship1st ? e._akashi_body.texture = o.REVAMP_REVAMP.getTexture(6) : e._akashi_body.texture = o.REVAMP_REVAMP.getTexture(8))
            })
        }, e.prototype._update = function () {
            0 == this._eye_state ? this._eye_pattern(0, 1, 2) : 1 == this._eye_state ? 10 * Math.random() > 2 ? this._eye_pattern(2, 1, 0) : this._eye_pattern_twice(2, 1, 0) : 2 == this._eye_state ? this._eye_pattern(4, 3, 2) : 10 * Math.random() > 2 ? this._eye_pattern(2, 3, 4) : this._eye_pattern_twice(2, 3, 4)
        }, e.prototype._startWaiting = function () {
            var t = this;
            if (null == this._t) {
                var e = 0;
                e = 1 == this._eye_state || 3 == this._eye_state ? 1e3 * Math.random() + 2e3 : 100 * Math.random() + 100, this._t = createjs.Tween.get(null, { onChange: this._onUpdate }).wait(e).call(function () {
                    0 == t._eye_state ? 10 * Math.random() > 2 ? t._eye_state = 1 : t._eye_state = 3 : 1 == t._eye_state ? t._eye_state = 0 : 2 == t._eye_state ? 10 * Math.random() > 2 ? t._eye_state = 1 : t._eye_state = 3 : 3 == t._eye_state && (t._eye_state = 2), t._update(), t._t = null, t._startWaiting()
                })
            }
        }, e.prototype._discharge = function () {
            var t = this;
            this._t = createjs.Tween.get(this._effect_3).to({ alpha: 1 }, 25, createjs.Ease.bounceInOut).to({ alpha: 0 }, 25, createjs.Ease.bounceInOut).call(function () {
                t._t = null, t._isDischarge && t._discharge()
            })
        }, e.prototype._stopWaiting = function () {
            null != this._t && (this._t.setPaused(!0), this._t = null)
        }, e
    }(PIXI.Container);
    e.RevampAkashi = r
}