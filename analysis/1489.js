const function1489 = function (t, e, i) {
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
    var o = i(2), r = i(8), s = i(22), a = i(61), _ = i(36), u = i(1490), l = i(1492), c = i(474), h = i(1),
        p = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                o._data = e, o._gauge_info = i, o._gauge_info_next = n;
                var r = e.isSuccess();
                return o._back = new PIXI.Sprite, o._back.position.set(282, 231), o._back.texture = 1 == r ? _.BATTLE_RESULT_MAIN.getTexture(5) : _.BATTLE_RESULT_MAIN.getTexture(6), o.addChild(o._back), o._sub_title = new PIXI.Sprite, 1 == r ? (o._sub_title.texture = _.BATTLE_RESULT_MAIN.getTexture(64), o._sub_title.position.set(381, 407)) : (o._sub_title.texture = _.BATTLE_RESULT_MAIN.getTexture(3), o._sub_title.position.set(366, 405)), o.addChild(o._sub_title), o._numset = new l.ResultDialogNumSet, o._numset.position.set(696, 393), o.addChild(o._numset), o._title = new f, o._title.initialize(r), o._title.position.set(603, 290), o.addChild(o._title), o._gauge = new u.ResultDialogGauge, o._gauge.position.set(407, 317), o._gauge.initialize(o._gauge_info, o._data.nowHP, o._data.maxHP), o.addChild(o._gauge), o
            }

            return n(e, t), e.prototype.startAnimation = function (t) {
                var e = this, i = this._data.subValue / 25 * 1e3;
                i = Math.min(i, 8e3);
                var n = { value: this._data.nowHP, sub: 0 }, o = function (t) {
                    var i = t.target.target, n = (i.value, i.sub);
                    e._numset.setValue(Math.round(n));
                    var o = Math.max(e._data.nowHP - n, 0), r = e._data.maxHP;
                    e._gauge.update(o, r)
                };
                createjs.Tween.get(n, { onChange: o }).to({ sub: this._data.subValue }, i).call(function () {
                    e._numset.startLightAnimation(), e._explodeGauge(t)
                })
            }, e.prototype._explodeGauge = function (t) {
                var e = this;
                this._data.nowHP - this._data.subValue <= 0 ? createjs.Tween.get(null).wait(250).call(function () {
                    e._gauge.explode(function () {
                        null == e._gauge_info_next ? e._showOperationComplete(t) : e._showNextGauge(t)
                    })
                }) : this._wait(t)
            }, e.prototype._showNextGauge = function (t) {
                var e = this;
                this._gauge.changeNextGauge(this._gauge_info_next, function () {
                    e._wait(t)
                })
            }, e.prototype._showOperationComplete = function (t) {
                var e = this;
                createjs.Tween.get(this._title).wait(1e3).to({ y: 345 }, 500, createjs.Ease.sineInOut).to({
                    scaleX: 1.4,
                    scaleY: 1.4
                }, 1500, createjs.Ease.sineInOut).wait(600).call(function () {
                    e._showOperationComplete2(t)
                })
            }, e.prototype._showOperationComplete2 = function (t) {
                var e = this;
                createjs.Tween.get(this._title).to({
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 0
                }, 1e3, createjs.Ease.cubicIn).wait(1e3).call(function () {
                    e._wait(t)
                });
                var i = new a.CenteringSprite(_.BATTLE_RESULT_MAIN.getTexture(0));
                i.position.set(608, 350), i.scale.set(1.4), i.alpha = 0, this.addChild(i), createjs.Tween.get(i).to({
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 1
                }, 1e3, createjs.Ease.cubicIn), this._kamihubuki = new c.KamihubukiLayer, this.addChild(this._kamihubuki), createjs.Tween.get(null).wait(400).call(function () {
                    e._kamihubuki.startKamihubuki(60)
                })
            }, e.prototype._wait = function (t) {
                new d(this).start(function () {
                    t()
                })
            }, e.prototype.dispose = function () {
                this._numset.stopLightAnimation(), null != this._kamihubuki && this._kamihubuki.dispose()
            }, e
        }(PIXI.Container);
    e.ResultDialog = p;
    var d = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._onClick = function () {
                i._wait_tween.setPaused(!0), i._wait_tween = null, i._endTask()
            }, i._layer = e, i
        }

        return n(e, t), e.prototype._start = function () {
            var t = this;
            this._area = new r.AreaBox(0), this._area.buttonMode = !0, this._layer.addChild(this._area), this._area.once(h.EventType.CLICK, this._onClick), this._wait_tween = createjs.Tween.get(null), this._wait_tween.wait(3e3), this._wait_tween.call(function () {
                t._area.off(h.EventType.CLICK, t._onClick), t._wait_tween = null, t._endTask()
            })
        }, e.prototype._endTask = function () {
            this._layer.removeChild(this._area), this._layer = null, this._area = null, t.prototype._endTask.call(this)
        }, e
    }(o.TaskBase), f = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._img = new PIXI.Sprite, e._img.x = -167, e._img.y = -30, e.addChild(e._img), e
        }

        return n(e, t), e.prototype.initialize = function (t) {
            this._img.texture = 1 == t ? _.BATTLE_RESULT_MAIN.getTexture(63) : _.BATTLE_RESULT_MAIN.getTexture(4)
        }, e
    }(s.Container)
}