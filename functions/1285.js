const function1285 = function (t, e, i) {
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
        r = i(1),
        s = i(2),
        a = i(6),
        _ = i(440),
        u = i(1286),
        l = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._selected_no = -1, n._onClick = function (t) {
                    n._selected_no = t;
                    for (var e = n._scene.view.map, i = 0, o = n._cellWaves; i < o.length; i++) {
                        var r = o[i];
                        e.spotLayer.removeChild(r), r.dispose()
                    }
                    n._balloon.close(function () {
                        n._scene.view.map.ship_icon.removeChild(n._balloon), createjs.Tween.get(null).wait(1e3).call(function () {
                            n._endTask()
                        })
                    })
                }, n._scene = e, n._model = i, n
            }
            return n(e, t), Object.defineProperty(e.prototype, "selected_no", {
                get: function () {
                    return this._selected_no
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._start = function () {
                this._scene.view.message_box.text = "\u8266\u968a\u306e\u91dd\u8def\u3092\u9078\u629e\u3067\u304d\u307e\u3059\u3002\n\u63d0\u7763\u3001\u3069\u3061\u3089\u306e\u91dd\u8def\u3092\u3068\u3089\u308c\u307e\u3059\u304b\uff1f", this._showHukidashi()
            }, e.prototype._showHukidashi = function () {
                var t = this,
                    e = this._model.sortie.getNextCell(),
                    i = this._scene.resInfo.getBranchOption(e.no);
                if (this._balloon = new u.BranchBalloon, null == i) {
                    var n = this._model.sortie.map_id,
                        o = e.no,
                        r = 1;
                    425 == n && 6 == o && (r = 2), 432 == n && (7 != o && 17 != o || (r = 0)), 433 == n && (1 == o ? r = 0 : 7 != o && 21 != o || (r = 2, this._balloon.position.set(-6, 27))), this._balloon.initialize(r, 0)
                } else this._balloon.initialize(i.type, i.beak, i.offset);
                this._scene.view.map.ship_icon.addChild(this._balloon), this._balloon.open(function () {
                    t._showWaves()
                })
            }, e.prototype._showWaves = function () {
                this._cellWaves = [];
                for (var t = this._model.sortie.getNextCell().getSelectableRoutes(), e = 0, i = t; e < i.length; e++) {
                    var n = i[e],
                        o = this._scene.view.map,
                        r = o.spotLayer.getSpot(n),
                        s = new c(r, this._onClick);
                    s.position.set(r.x, r.y), o.spotLayer.addChild(s), this._cellWaves.push(s), s.activate()
                }
            }, e.prototype._endTask = function () {
                this._scene.view.message_box.text = "";
                var e = this._model.deck_f.ships[0],
                    i = e.mst_id;
                o.default.sound.voice.play(i.toString(), 26), this._scene = null, this._model = null, this._balloon = null, this._cellWaves = null, t.prototype._endTask.call(this)
            }, e
        }(s.TaskBase);
    e.TaskBranchRoute = l;
    var c = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._onMouseOver = function () {
                n._stopTween(), n._wave.scale.set(1), n._wave.alpha = 1, n._target.showLine(), a.SE.play("242")
            }, n._onMouseOut = function () {
                n._startTween(), n._target.hideLine()
            }, n._onClick = function () {
                null != n._cb_onClick && n._cb_onClick(n._target.no)
            }, n._target = e, n._cb_onClick = i, n.beginFill(16711680, 0), n.drawCircle(0, 0, 38), n.endFill(), n
        }
        return n(e, t), e.prototype.activate = function () {
            1 != this._activated && (t.prototype.activate.call(this), this.buttonMode = !0, this.interactive = !0, this.on(r.EventType.MOUSEOVER, this._onMouseOver), this.on(r.EventType.MOUSEOUT, this._onMouseOut), this.on(r.EventType.CLICK, this._onClick))
        }, e.prototype.deactivate = function () {
            t.prototype.deactivate.call(this), this.buttonMode = !1, this.interactive = !1, this.off(r.EventType.MOUSEOVER, this._onMouseOver), this.off(r.EventType.MOUSEOUT, this._onMouseOut), this.off(r.EventType.CLICK, this._onClick)
        }, e.prototype.dispose = function () {
            t.prototype.dispose.call(this), this._target = null, this._cb_onClick = null
        }, e
    }(_.CellWave)
}