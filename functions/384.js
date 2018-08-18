const function384 = function (t, e, i) {
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
    var o = i(60), r = i(154), s = i(1), a = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._startWait = function () {
                e._stopWait();
                var t = 3e3 * Math.random() + 1e3;
                e._wait_tween = createjs.Tween.get(null).wait(t).call(function () {
                    e._caterpillar.buttonMode = !1, 0 == Math.floor(5 * Math.random()) ? e._action2() : e._action1()
                })
            }, e._onClick = function () {
                if (0 != e._caterpillar.buttonMode) {
                    e._caterpillar.buttonMode = !1;
                    0 == Math.floor(5 * Math.random()) ? e._action3() : e._action1()
                }
            }, e._shadow = new o.CenteringSprite, e._shadow.position.set(60, 92), e.addChild(e._shadow), e._frown = new PIXI.Sprite, e.addChild(e._frown), e._caterpillar = new o.CenteringSprite, e._caterpillar.position.set(63, 77), e._caterpillar.interactive = !0, e.addChild(e._caterpillar), e
        }

        return n(e, t), e.prototype.initialize = function () {
            this.texture = r.ALBUM_MAIN.getTexture(108), this._shadow.texture = r.ALBUM_MAIN.getTexture(107), this._frown.texture = r.ALBUM_MAIN.getTexture(105);
            var t = new PIXI.Sprite(r.ALBUM_MAIN.getTexture(106));
            t.position.set(71, 21), this._frown.addChild(t), this._caterpillar.texture = r.ALBUM_MAIN.getTexture(104), this._caterpillar.buttonMode = !0, this._caterpillar.on(s.EventType.CLICK, this._onClick)
        }, e.prototype.activate = function () {
            this._startWait()
        }, e.prototype.deactivate = function () {
            this._stopWait(), null != this._action_tween && (this._action_tween.setPaused(!0), this._action_tween = null)
        }, e.prototype.dispose = function () {
            this.deactivate(), this._caterpillar.off(s.EventType.CLICK, this._onClick)
        }, e.prototype._stopWait = function () {
            null != this._wait_tween && (this._wait_tween.setPaused(!0), this._wait_tween = null)
        }, e.prototype._action1 = function () {
            var t = this;
            null == this._action_tween && (this._stopWait(), this._action_tween = createjs.Tween.get(this._caterpillar).to({ y: -105 }, 400, createjs.Ease.sineOut).to({ y: 77 }, 400, createjs.Ease.sineIn).call(function () {
                t._action_tween = null, t._caterpillar.buttonMode = !0, t._startWait()
            }), createjs.Tween.get(this._shadow).to({ alpha: .4, scaleX: .9, scaleY: .9 }, 400).to({
                alpha: 1,
                scaleX: 1,
                scaleY: 1
            }, 400))
        }, e.prototype._action2 = function () {
            var t = this;
            null == this._action_tween && (this._stopWait(), this._action_tween = createjs.Tween.get(this._caterpillar).to({ rotation: -30 * Math.PI / 180 }, 200).to({ rotation: 25 * Math.PI / 180 }, 400).to({ rotation: 0 }, 200).call(function () {
                t._action_tween = null, t._caterpillar.buttonMode = !0, t._startWait()
            }))
        }, e.prototype._action3 = function () {
            var t = this;
            null == this._action_tween && (this._stopWait(), this._action_tween = createjs.Tween.get(this._caterpillar).to({ y: -584 }, 500, createjs.Ease.sineOut).call(function () {
                createjs.Tween.get(t._frown).to({ alpha: 0 }, 100)
            }).wait(700).to({ y: 77 }, 500, createjs.Ease.sineIn).to({ y: 80, scaleY: .8 }, 100).to({
                y: 77,
                scaleY: 1
            }, 100).call(function () {
                createjs.Tween.get(t._frown).to({ alpha: 1 }, 100)
            }).call(function () {
                t._action_tween = null, t._caterpillar.buttonMode = !0, t._startWait()
            }), createjs.Tween.get(this._shadow).to({
                alpha: 0,
                scaleX: .7,
                scaleY: .7
            }, 600).wait(400).to({ alpha: 1, scaleX: 1, scaleY: 1 }, 400))
        }, e
    }(PIXI.Sprite);
    e.MiniChara = a
}