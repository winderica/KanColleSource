const function1256 = function (t, e, i) {
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
    var o = i(2),
        r = i(6),
        s = i(20),
        a = i(435),
        _ = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._scene = e, n._model = i, n
            }
            return n(e, t), e.prototype._start = function () {
                var t = this;
                this._data = this._model.sortie.getNextCell().getHappeningData(), this._scene.view.message_box.text = "\u53f8\u4ee4\u5b98\uff01\u3046\u305a\u3057\u304a\u304c\u767a\u751f\u3057\u307e\u3057\u305f\uff01", this._uzu = new l;
                var e = this._scene.view.map.ship_icon;
                e.under.addChild(this._uzu), this._uzu.activate(), e.startWaveWhite(), r.SE.play("254");
                var i = {
                    rad: 0,
                    a: 36
                };
                createjs.Tween.get(i, {
                    onChange: function () {
                        e.ship.x = Math.cos(i.rad) * i.a, e.ship.y = Math.sin(i.rad) * i.a, i.rad += Math.PI / 180 * 5 * (60 / createjs.Ticker.framerate)
                    }
                }).to({
                    a: 0
                }, 2400).call(function () {
                    e.stopWave(), t._animItem()
                })
            }, e.prototype._animItem = function () {
                var t = this,
                    e = this._data.getUseitemMstID(),
                    i = this._data.lost_count,
                    n = new a.CompDropItem;
                n.initialize(e, i);
                var o = this._scene.view.map.ship_icon;
                o.under.addChild(n), createjs.Tween.get(n).to({
                    x: -120
                }, 1400), createjs.Tween.get(n).to({
                    y: -60
                }, 400, createjs.Ease.quadOut).to({
                    y: 150
                }, 1e3, createjs.Ease.quadIn), createjs.Tween.get(n).wait(1200).to({
                    alpha: 0
                }, 200).call(function () {
                    o.under.removeChild(n), n.dispose(), t._hideUzu()
                })
            }, e.prototype._hideUzu = function () {
                var t = this,
                    e = this._scene.view.map.ship_icon;
                createjs.Tween.get(this._uzu).to({
                    alpha: 0
                }, 200).call(function () {
                    e.under.removeChild(t._uzu), t._uzu.deactivate(), t._uzu = null, t._showText()
                })
            }, e.prototype._showText = function () {
                var t = this,
                    e = this._data.getUseitemMstID(),
                    i = this._data.lost_count,
                    n = this._data.isDentan();
                this._scene.view.message_box.showUzushioText(e, i, n), createjs.Tween.get(null).wait(1e3).call(function () {
                    t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._scene = null, this._model = null, this._data = null, t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase);
    e.CellTaskHappening = _;
    var l = function (t) {
        function e() {
            var e = t.call(this) || this;
            e.scale.y = .5;
            var i = s.MAP_COMMON.getTexture(171);
            return e._content = new PIXI.Sprite(i), e._content.anchor.set(.5), e.addChild(e._content), e
        }
        return n(e, t), e.prototype.activate = function () {
            null == this._t && (this._t = createjs.Tween.get(this._content, {
                loop: !0
            }).to({
                rotation: 2 * Math.PI
            }, 3e3))
        }, e.prototype.deactivate = function () {
            null != this._t && (this._t.setPaused(!0), this._t = null)
        }, e
    }(PIXI.Container)
}