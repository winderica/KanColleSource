const function1320 = function (t, e, i) {
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
        r = i(38),
        s = i(29),
        a = i(39),
        _ = i(1321),
        u = i(250),
        l = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._scene = e, n._model = i, n
            }
            return n(e, t), e.prototype._start = function () {
                var t = this._model.sortie.map;
                1 == t.isCleared() ? this._startNoLanding("\u8f38\u9001\u7269\u8cc7\u306e\u63da\u9678\u5730\u70b9\u306b\u5230\u9054\u3057\u307e\u3057\u305f\u3002\n\u672c\u6d77\u57df\u306e\u8f38\u9001\u4f5c\u6226\u306f\u7121\u4e8b\u5b8c\u4e86\u3057\u3066\u3044\u307e\u3059\u3002") : 3 == t.gauge_type ? this._startWithLanding() : this._startNoLanding("\u8f38\u9001\u7269\u8cc7\u306e\u63da\u9678\u5730\u70b9\u306b\u5230\u9054\u3057\u307e\u3057\u305f\u3002\n\u540c\u5730\u70b9\u4ed8\u8fd1\u306e\u6575\u8266\u968a\u3092\u635c\u7d22\u3001\u3053\u308c\u3092\u6483\u6ec5\u305b\u3088\uff01")
            }, e.prototype._startWithLanding = function () {
                var t = this;
                this._showWave(), createjs.Tween.get(null).wait(500).call(function () {
                    t._showMessage("\u8f38\u9001\u7269\u8cc7\u306e\u63da\u9678\u5730\u70b9\u306b\u5230\u9054\u3057\u307e\u3057\u305f\u3002\n\u7269\u8cc7\u306e\u63da\u9678\u3092\u958b\u59cb\u3057\u307e\u3059\u3002")
                }).wait(3e3).call(function () {
                    t._showMessage("")
                }).wait(600).call(function () {
                    t._taskLanding()
                })
            }, e.prototype._taskLanding = function () {
                var t = this,
                    e = new s.SerialTask,
                    i = this._scene.view,
                    n = this._scene.view.map.ship_icon.getGlobalPosition(),
                    o = this._createShipList(),
                    r = this._getDrumAndDaihatsuCount(o),
                    u = r.drum_count,
                    l = r.daihatsu_count,
                    h = this._model.sortie.getNextCell().no,
                    p = this._scene.resInfo.getLandingBalloonType(h),
                    d = new _.TaskLandingBalloon(i, n, u, l, p);
                e.add(d), e.add(new a.WaitTask(200)), e.add(new c(this._scene, this._model)), e.add(new a.WaitTask(1e3)), e.start(function () {
                    t._endTask()
                })
            }, e.prototype._startNoLanding = function (t) {
                var e = this;
                this._showWave(), createjs.Tween.get(null).wait(500).call(function () {
                    e._showMessage(t)
                }).wait(3e3).call(function () {
                    e._showMessage("")
                }).wait(1e3).call(function () {
                    e._endTask()
                })
            }, e.prototype._showWave = function () {
                var t = this._model.sortie.getNextCell().no,
                    e = this._scene.view.map.spotLayer.getSpot(t);
                this._wave = new u.CellWave, this._wave.x = e.x, this._wave.y = e.y, this._scene.view.map.spotLayer.addChild(this._wave), this._wave.activate()
            }, e.prototype._showMessage = function (t) {
                this._scene.view.message_box.text = t
            }, e.prototype._createShipList = function () {
                for (var t = this._model.deck_f.ships.concat(), e = [], i = 0, n = t; i < n.length; i++) {
                    var o = n[i];
                    if (null != o) {
                        var r = o.damageType;
                        0 != r && 25 != r && 1 != o.isTaihi() && e.push(o)
                    }
                }
                return e
            }, e.prototype._getDrumAndDaihatsuCount = function (t) {
                for (var e = 0, i = 0, n = 0, o = t; n < o.length; n++)
                    for (var s = o[n], a = 0, _ = s.slots; a < _.length; a++) {
                        var u = _[a];
                        null != u && (75 == u.mst_id ? e++ : u.equipType == r.EquipType._24_JOURIKUYOU_SHUTEI ? i++ : u.equipType == r.EquipType._46_TOKUGATA_UCHIBITEI && i++)
                    }
                return {
                    drum_count: e,
                    daihatsu_count: i
                }
            }, e.prototype._endTask = function () {
                null != this._wave && (null != this._wave.parent && this._wave.parent.removeChild(this._wave), this._wave.dispose(), this._wave = null), this._scene = null, this._model = null, t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase);
    e.CellTaskLanding = l;
    var c = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._scene = e, n._model = i, n
        }
        return n(e, t), e.prototype._start = function () {
            var t = this,
                e = this._model.sortie.getNextCell().no,
                i = this._scene.view.map.spotLayer.getFlag(e);
            if (null == i)
                for (var n = this._scene.resInfo.getSameSpotData(e), o = 0, r = n; o < r.length; o++) {
                    var s = r[o];
                    if (null != (i = this._scene.view.map.spotLayer.getFlag(s.no))) break
                }
            null == i ? this._endTask() : createjs.Tween.get(i).to({
                scaleX: 1.6,
                scaleY: 1.6
            }, 200, createjs.Ease.sineOut).to({
                scaleX: 1,
                scaleY: 1
            }, 800, createjs.Ease.sineIn).call(function () {
                t._endTask()
            })
        }, e.prototype._endTask = function () {
            this._scene = null, this._model = null, t.prototype._endTask.call(this)
        }, e
    }(o.TaskBase)
}