const function1261 = function (t, e, i) {
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
        r = i(2),
        s = i(13),
        a = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._additional_waittime = 0, n._scene = e, n._model = i, n
            }
            return n(e, t), e.prototype._start = function () {
                var t = this._model.sortie,
                    e = t.getNextCell().isDeadEnd(),
                    i = this._scene.resInfo.hasAirReconnaissancePoint();
                1 == e && 1 == i ? (this._additional_waittime = 3e3, o.default.sound.bgm.fadeOut(1e3), createjs.Tween.get(null).wait(1e3).call(function () {
                    o.default.sound.bgm.play(4, !1, 1e3, "fanfare")
                }), this._merefancy("\u6575\u5f71\u3092\u898b\u305a\u3002\n\u672c\u4f5c\u6226\u5b8c\u9042\u5931\u6557\u3002")) : this._selectMessage()
            }, e.prototype._selectMessage = function () {
                var t = this._model.sortie.getNextCell().flavor_text;
                if (null != t && t.length > 0) {
                    var e = this._model.sortie.getNextCell().flavor_text_type;
                    t = t.replace(/<br>/g, "\n"), 0 == e ? this._merefancy(t) : this._calm_sea(t)
                } else {
                    var i = this._model.sortie.getNextCell().event_detail_id;
                    0 == i ? this._merefancy("\u6c17\u306e\u305b\u3044\u3060\u3063\u305f\u3002") : 1 == i ? this._merefancy("\u6575\u5f71\u3092\u898b\u305a\u3002") : 3 == i ? this._calm_sea("\u7a4f\u3084\u304b\u306a\u6d77\u3067\u3059\u3002") : 4 == i ? this._merefancy("\u7a4f\u3084\u304b\u306a\u6d77\u5ce1\u3067\u3059\u3002") : 5 == i ? this._merefancy("\u8b66\u6212\u304c\u5fc5\u8981\u3067\u3059\u3002") : 6 == i ? this._calm_sea("\u9759\u304b\u306a\u6d77\u3067\u3059\u3002") : this._merefancy("")
                }
            }, e.prototype._merefancy = function (t) {
                var e = this;
                this._scene.view.map.ship_icon.startWaveRed(function () {
                    e._scene.view.message_box.text = t, e._stopShipWave(2e3)
                })
            }, e.prototype._calm_sea = function (t) {
                var e, i = this,
                    n = this._model.deck_f.ships;
                if (n.length > 6) {
                    e = n[Math.random() < .5 ? 0 : 6]
                } else e = n[0];
                var o = e.mst_id,
                    r = e.isDamaged(),
                    a = new s.ShipLoader;
                a.add(o, r, "full"), a.load(function () {
                    i._calm_sea2(o, r, t)
                })
            }, e.prototype._calm_sea2 = function (t, e, i) {
                var n = this;
                this._chara = new PIXI.Sprite, this._chara.alpha = 0, this._chara.texture = o.default.resources.getShip(t, e, "full");
                var r = o.default.model.ship_graph.get(t).getMapOffset(e);
                this._chara.x = -80 + r.x, this._chara.y = -93 + r.y, this._scene.view.chara_layer.addChild(this._chara), createjs.Tween.get(this._chara).to({
                    alpha: 1
                }, 300).call(function () {
                    n._calm_sea3(i)
                })
            }, e.prototype._calm_sea3 = function (t) {
                var e = this;
                this._scene.view.map.ship_icon.startWaveRed(function () {
                    e._scene.view.message_box.text = t, e._stopShipWave(2e3)
                })
            }, e.prototype._stopShipWave = function (t) {
                var e = this;
                createjs.Tween.get(null).wait(t).call(function () {
                    e._scene.view.map.ship_icon.stopWave(), e._changeCellColor()
                })
            }, e.prototype._changeCellColor = function () {
                var t = this,
                    e = this._model.sortie.getNextCell(),
                    i = this._scene.view.map.spotLayer.getSpot(e.no);
                (8 != this._model.sortie.getCellInfo(e.no).color && i.setColor(1), null != this._chara) ? (this._chara.x, createjs.Tween.get(this._chara).to({
                    alpha: 0
                }, 300).call(function () {
                    t._chara.parent.removeChild(t._chara), t._endTask()
                })) : this._endTask()
            }, e.prototype._endTask = function () {
                var e = this;
                createjs.Tween.get(null).wait(this._additional_waittime).call(function () {
                    t.prototype._endTask.call(e)
                })
            }, e
        }(r.TaskBase);
    e.CellTaskFancy = a
}