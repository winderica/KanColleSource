const function1493 = function (t, e, i) {
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
    var o = i(0),
        r = i(11),
        s = i(68),
        a = i(8),
        _ = i(33),
        l = i(1494),
        u = i(1),
        c = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._scene = e, i
            }
            return n(e, t), e.prototype._start = function () {
                var t = this._scene.data.getLandingData();
                t.isLandingMap() ? this._loadResources(t) : this._endTask()
            }, e.prototype._loadResources = function (t) {
                var e = this,
                    i = o.default.resources.gauge.createLoaderHorizontal(),
                    n = this._scene.data.battle_model.map_info.area_id,
                    r = this._scene.data.battle_model.map_info.map_no,
                    a = this._scene.data.battle_model.stage,
                    _ = s.GaugeSetModel.createKey(n, r, a);
                i.add(_);
                i.load(function () {
                    var i = o.default.resources.gauge.getGaugeInfo(_),
                        n = null;
                    e._showDialog(t, i, n)
                })
            }, e.prototype._showDialog = function (t, e, i) {
                var n = this,
                    o = new l.ResultDialog(t, e, i);
                o.alpha = 0, this._scene.view.addChild(o), createjs.Tween.get(o).wait(500).to({
                    alpha: 1
                }, 300).wait(500).call(function () {
                    o.startAnimation(function () {
                        n._hideDialog(o)
                    })
                })
            }, e.prototype._hideDialog = function (t) {
                var e = this;
                createjs.Tween.get(t).to({
                    alpha: 0
                }, 300).call(function () {
                    e._scene.view.removeChild(t), t.dispose(), e._wait()
                })
            }, e.prototype._wait = function () {
                var t = this;
                createjs.Tween.get(null).wait(500).call(function () {
                    t._endTask()
                })
            }, e.prototype._endTask = function () {
                var e = this,
                    i = new _.GearBtnNext;
                i.position.set(1130, 648), i.initialize(), i.activate(), this._scene.view.addChild(i);
                var n = new a.AreaBox(0);
                n.buttonMode = !0, this._scene.view.addChild(n), n.once(u.EventType.CLICK, function () {
                    i.deactivate(), e._scene.view.removeChild(i), e._scene.view.removeChild(n), t.prototype._endTask.call(e)
                })
            }, e
        }(r.TaskBase);
    e.PhaseTransportResult = c
}