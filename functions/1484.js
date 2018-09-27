const function1484 = function (t, e, i) {
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
    var o = i(229), r = i(22), s = i(27), a = i(1485), _ = function (t) {
        function e() {
            return t.call(this) || this
        }

        return n(e, t), e.prototype.initialize = function (t, e, i) {
            this._gauge = new o.GaugeHorizontal, this._gauge.initialize(t), this._gauge.update(e, i), this.addChild(this._gauge)
        }, e.prototype.update = function (t, e) {
            if (null == this._gauge) return null;
            this._gauge.update(t, e)
        }, e.prototype.explode = function (t) {
            var e = this, i = new s.ParallelTask, n = new a.TaskExplosion(this, 107, 20);
            i.add(n);
            var o = new a.TaskExplosion(this, 209, 57, 250);
            i.add(o);
            var r = new a.TaskExplosion(this, 309, 24, 450);
            i.add(r), i.start(function () {
                null != t && t()
            }), createjs.Tween.get(this._gauge).wait(200).to({ alpha: 0 }, 400).call(function () {
                e.removeChild(e._gauge), e._gauge = null
            })
        }, e.prototype.changeNextGauge = function (t, e) {
            null != this._gauge && (null != this._gauge.parent && this._gauge.parent.removeChild(this._gauge), this._gauge = null), this._gauge = new o.GaugeHorizontal, this._gauge.initialize(t), this._gauge.update(100, 100), this._gauge.x = -this._gauge.width / 2, this._gauge.y = -this._gauge.height / 2;
            var i = new r.Container;
            i.x = this._gauge.width / 2, i.y = this._gauge.height / 2, i.scale.set(1.6), i.alpha = 0, this.addChild(i), i.addChild(this._gauge), createjs.Tween.get(i).wait(1e3).to({
                scaleX: 1,
                scaleY: 1,
                alpha: 1
            }, 750, createjs.Ease.quartInOut).wait(1500).call(function () {
                null != e && e()
            })
        }, e
    }(PIXI.Container);
    e.ResultDialogGauge = _
}