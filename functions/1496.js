const function1496 = function (t, e, i) {
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
        s = i(18),
        a = i(1),
        _ = i(2),
        l = i(23),
        u = i(8),
        c = i(59),
        h = i(55),
        p = i(13),
        d = i(1497),
        f = i(1498),
        y = i(1499),
        m = i(438),
        g = i(14),
        v = function (t) {
            function e(e, i, n, o, r, s) {
                var a = t.call(this) || this;
                return a._shutter = e, a._area_id = i, a._map_no = n, a._ship_mst_id = o, a._ship_damaged = r, a._file_suffix = s, a
            }
            return n(e, t), e.prototype._start = function () {
                this._area_id == s.EVENT_AREA_ID ? this._hideEnemy() : this._endTask()
            }, e.prototype._hideEnemy = function () {
                var t = this,
                    e = this._mapscene;
                if (e instanceof m.MapScene == 0) return void this._endTask();
                e.view.map.enemy_layer.hide(function () {
                    e.view.map.plane_layer.hideAll(), t._loadShipResources()
                })
            }, e.prototype._loadShipResources = function () {
                var t = this,
                    e = new p.ShipLoader;
                e.add(this._ship_mst_id, this._ship_damaged, "full"), e.load(function () {
                    t._openShutter()
                })
            }, e.prototype._openShutter = function () {
                var t = this,
                    e = this._mapscene;
                e.view.shutter.alpha = 0, e.view.map.alpha = 1, e.view.upper.alpha = 1, createjs.Tween.get(null).wait(1300).call(function () {
                    t._shutter.open(), t._shutter.once("opened", function () {
                        t._showShip()
                    })
                })
            }, e.prototype._showShip = function () {
                var t = this,
                    e = new PIXI.Sprite;
                e.texture = r.default.resources.getShip(this._ship_mst_id, this._ship_damaged, "full");
                var i = r.default.model.ship_graph.get(this._ship_mst_id).getMapOffset(this._ship_damaged);
                e.x = -80 + i.x, e.y = -93 + i.y, e.scale.set(1.15), e.alpha = 0;
                var n = r.default.view.getNowScene();
                n.view.chara_layer.addChild(e), createjs.Tween.get(e).to({
                    alpha: 1
                }, 300).wait(2e3).to({
                    x: e.x - 45,
                    alpha: 0
                }, 1500).call(function () {
                    n.view.chara_layer.removeChild(e)
                });
                var s = h.MapUtil.toMapID(this._area_id, this._map_no),
                    a = new b,
                    _ = new l.Container;
                a.update(s, this._file_suffix, function () {
                    a.alpha = 0, _.scale.set(2), _.position.set(o.default.width / 2, o.default.height / 2), _.addChild(a), n.view.chara_layer.addChild(_), createjs.Tween.get(_).wait(3e3).to({
                        scaleX: 1,
                        scaleY: 1
                    }, 700, createjs.Ease.bounceOut).call(function () {
                        t._waitClick(_)
                    }), createjs.Tween.get(a).wait(3e3).to({
                        alpha: 1
                    }, 600, createjs.Ease.circOut)
                })
            }, e.prototype._waitClick = function (t) {
                var e = this,
                    i = new u.AreaBox(0);
                i.buttonMode = !0;
                var n = new c.GearBtnNext;
                n.position.set(1140, 660), n.initialize(), n.activate(), i.addChild(n), this._mapscene.view.addChild(i), i.once(a.EventType.CLICK, function () {
                    e._mapscene.view.removeChild(i), n.dispose(), e._removeRed(t)
                })
            }, e.prototype._removeRed = function (t) {
                var e = this;
                this._mapscene.view.map.bg.mapAnime && this._mapscene.view.map.bg.mapAnime.hide();
                var i = this._mapscene.view.map.bg.getBGLayer("red");
                createjs.Tween.get(i).to({
                    alpha: 0
                }, 3e3).call(function () {
                    e._hideTelop(t)
                })
            }, e.prototype._hideTelop = function (t) {
                var e = this;
                createjs.Tween.get(t).to({
                    alpha: 0
                }, 300).call(function () {
                    e._mapscene.view.chara_layer.removeChild(t), e._closeShutter()
                })
            }, e.prototype._closeShutter = function () {
                var t = this;
                this._shutter.close(), this._shutter.once("closed", function () {
                    t._mapscene.view.shutter.alpha = 1, t._mapscene.view.map.alpha = 0, t._mapscene.view.upper.alpha = 0, t._endTask()
                })
            }, Object.defineProperty(e.prototype, "_mapscene", {
                get: function () {
                    var t = r.default.view.getNowScene();
                    return t instanceof m.MapScene ? t : null
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(_.TaskBase);
    e.TaskEventClear = v;
    var b = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._img1 = new PIXI.Sprite, e.addChild(e._img1), e._img2 = new PIXI.Sprite, e.addChild(e._img2), e
        }
        return n(e, t), e.prototype.update = function (t, e, i) {
            var n = this;
            switch (t) {
                case 451:
                    var o = new g.UIImageLoader("battle_result");
                    o.add("battle_result_event_e1_" + e + ".json"), o.load(function () {
                        n._img1.texture = d.BATTLE_RESULT_EVENT_E1_VKCJJTOKOELPYGOP.getTexture(0), n._img2.texture = d.BATTLE_RESULT_EVENT_E1_VKCJJTOKOELPYGOP.getTexture(1), i()
                    }), this._img1.position.set(-452, -135), this._img2.position.set(-451, -47);
                    break;
                case 452:
                    var o = new g.UIImageLoader("battle_result");
                    o.add("battle_result_event_e2_" + e + ".json"), o.load(function () {
                        n._img1.texture = f.BATTLE_RESULT_EVENT_E2_YLLJQNTXPYWTDJMF.getTexture(0), n._img2.texture = f.BATTLE_RESULT_EVENT_E2_YLLJQNTXPYWTDJMF.getTexture(1), i()
                    }), this._img1.position.set(-517, -157), this._img2.position.set(-510, 5);
                    break;
                case 453:
                    var o = new g.UIImageLoader("battle_result");
                    o.add("battle_result_event_e3_" + e + ".json"), o.load(function () {
                        n._img1.texture = y.BATTLE_RESULT_EVENT_E3_ZMNIYZFCNPNXRFVT.getTexture(0), n._img2.texture = y.BATTLE_RESULT_EVENT_E3_ZMNIYZFCNPNXRFVT.getTexture(1), i()
                    }), this._img1.position.set(-496, -156), this._img2.position.set(-505, 7);
                    break;
                default:
                    this._img1.texture = PIXI.Texture.EMPTY, this._img2.texture = PIXI.Texture.EMPTY, i()
            }
        }, e
    }(PIXI.Container)
}