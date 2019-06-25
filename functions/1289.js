const function1289 = function (t, e, i) {
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
        s = i(1290),
        a = i(1291),
        _ = i(1295),
        u = function (t) {
            function e(e, i, n, o, s, a) {
                var _ = t.call(this) || this;
                return _._selected_spot_no_1 = null, _._selected_spot_no_2 = null, _._selected_spot_no_3 = null, _._onChange = function () {
                    _._point_layer.update(), 2 == _._selected_spot_no.length ? (_._panel.title.complete = !0, _._panel.cancel_btn.visible = !0) : 1 == _._selected_spot_no.length ? (_._panel.title.complete = !1, _._panel.cancel_btn.visible = !0) : (_._panel.title.complete = !1, _._panel.cancel_btn.visible = !1)
                }, _._onFixed = function () {
                    switch (_._current_target.id) {
                        case 1:
                            _._selected_spot_no_1 = _._selected_spot_no.concat();
                            break;
                        case 2:
                            _._selected_spot_no_2 = _._selected_spot_no.concat();
                            break;
                        case 3:
                            _._selected_spot_no_3 = _._selected_spot_no.concat()
                    }
                    r.SE.play("227");
                    var t = _._airunits.indexOf(_._current_target);
                    t == _._airunits.length - 1 ? _._endTask() : (_._current_target = _._airunits[t + 1], _._onCancel(), _._panel.update(_._current_target.id), _._initializePoints())
                }, _._onCancel = function () {
                    for (; _._selected_spot_no.length > 0;) _._selected_spot_no.pop();
                    _._point_layer.update(), _._panel.title.complete = !1, _._panel.cancel_btn.visible = !1
                }, _._layer = e, _._area_id = i, _._airunits_all = n, _._airunits = o, _._model = s, _._map = a, _
            }
            return n(e, t), e.prototype._start = function () {
                var t = this;
                this._current_target = this._airunits[0], this._selected_spot_no = [], this._point_layer = new _.AirUnitAppointmentLayer(this._selected_spot_no, this._onChange), this._layer.addChild(this._point_layer), this._panel = new a.AirUnitPanelSet(this._onFixed, this._onCancel), this._panel.x = -375, this._layer.addChild(this._panel);
                var e = this._area_id;
                this._panel.initialize(e, this._airunits_all), this._panel.update(this._current_target.id), createjs.Tween.get(this._panel).to({
                    x: 0
                }, 300, createjs.Ease.quadOut).call(function () {
                    t._panel.activate(), t._initializePoints()
                })
            }, e.prototype._initializePoints = function () {
                var t = this._current_target.distance,
                    e = this._model.sortie,
                    i = this._map.spotLayer.getAllSpots();
                this._point_layer.initialize(t, i, e)
            }, e.prototype._endTask = function () {
                var e = this;
                this._layer.removeChild(this._point_layer), this._point_layer.dispose(), this._panel.deactivate(), createjs.Tween.get(this._panel).to({
                    x: -450
                }, 300, createjs.Ease.quadOut).call(function () {
                    e._layer.removeChild(e._panel), e._panel.dispose(), new s.AirUnitGoAPI(e._selected_spot_no_1, e._selected_spot_no_2, e._selected_spot_no_3).start(function () {
                        t.prototype._endTask.call(e)
                    })
                })
            }, e
        }(o.TaskBase);
    e.TaskAirUnitAppointment = u
}