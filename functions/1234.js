const function1234 = function (t, e, i) {
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
    var o = i(5),
        r = i(0),
        s = i(143),
        a = i(2),
        _ = i(18),
        l = i(68),
        u = i(429),
        c = i(1235),
        h = i(1236),
        p = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._scene = e, n._model = i, n._black = new _.FadeBox(1), n
            }
            return n(e, t), e.prototype._start = function () {
                var t = this;
                this._black.hide(0), this._scene.view.addChild(this._black), this._black.show(300), new u.SallyAnimationTask(this._scene.view).start(function () {
                    t._loadMapResource()
                })
            }, e.prototype._loadMapResource = function () {
                var t = this,
                    e = this._model.sortie.map_id,
                    i = this._scene.view.map,
                    n = this._scene.resInfo,
                    o = this._model.sortie.cells;
                new c.TaskCreateMap(e, i, n, o).start(function () {
                    t._initMapGauge()
                })
            }, e.prototype._initMapGauge = function () {
                var t = this,
                    e = 0,
                    i = 0,
                    n = this._model.sortie.getNextCell();
                if (1 == n.hasEventMapData()) {
                    if (e = n.gauge_max, (i = n.gauge_now) <= 0) return void this._loadMapBGM()
                } else e = this._model.sortie.map.defeat_required, i = e - this._model.sortie.map.defeat_count;
                if (e <= 0) return void this._loadMapBGM();
                var s = this._model.sortie.map,
                    a = s.area_id,
                    _ = s.map_no,
                    u = s.getGaugeNum(),
                    c = l.GaugeSetModel.createKey(a, _, u),
                    h = r.default.resources.gauge.createLoaderVertical();
                h.add(c), h.load(function () {
                    var n = r.default.resources.gauge.getGaugeInfo(c);
                    if (n) {
                        var s = n.vertical;
                        null != s && (t._scene.view.gauge_layer.initialize(s, i, e), s.x < o.default.width / 2 && t._scene.view.frontOfGaugeLayer())
                    }
                    t._loadMapBGM()
                })
            }, e.prototype._loadMapBGM = function () {
                var t = this._model.sortie.area_id,
                    e = this._model.sortie.map_no,
                    i = s.MapConst.getMapBGMID(t, e);
                1 == i.battle_bgm ? r.default.sound.bgm.playBattleBGM(i.id) : r.default.sound.bgm.play(i.id), this._showMap()
            }, e.prototype._showMap = function () {
                var t = this;
                this._black.hide(200, function () {
                    t._scene.view.removeChild(t._black), t._showShipAndMessageBox()
                })
            }, e.prototype._showShipAndMessageBox = function () {
                var t = this;
                this._scene.view.message_box.activate(), new h.AnimShipInit(this._scene, this._model).start(function () {
                    t._endTask()
                })
            }, e
        }(a.TaskBase);
    e.TaskInit = p
}