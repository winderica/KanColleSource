const function1458 = function (t, e, i) {
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
        r = i(17),
        s = i(2),
        a = i(1459),
        _ = i(15),
        l = i(36),
        u = i(1460),
        c = i(1461),
        h = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._waited = !1, i._connected = !1, i._scene = e, i
            }
            return n(e, t), e.prototype._start = function () {
                var t = this,
                    e = o.default.model.map.getArea(r.EVENT_AREA_ID),
                    i = null != e;
                new a.TaskLoadResourcesBattleResult(i).start(function () {
                    t._loadBannerImages()
                })
            }, e.prototype._loadBannerImages = function () {
                for (var t = this, e = new _.ShipLoader, i = this._scene.data.battle_model, n = i.deck_f.ships, o = 0, r = n; o < r.length; o++) {
                    var s = r[o];
                    this._addResourceToLoader(e, s)
                }
                for (var a = i.deck_e.ships, l = 0, u = a; l < u.length; l++) {
                    var s = u[l];
                    this._addResourceToLoader(e, s)
                }
                e.load(function () {
                    t._showImage()
                })
            }, e.prototype._addResourceToLoader = function (t, e) {
                null != e && (e.hp_now <= 0 ? t.add(e.mst_id, !0, "banner_g") : t.add(e.mst_id, e.isDamaged(), "banner"))
            }, e.prototype._showImage = function () {
                var t = this,
                    e = l.BATTLE_RESULT_MAIN.getTexture(73);
                this._img = new PIXI.Sprite(e), this._img.anchor.set(.5, .5), this._img.position.set(330, 290), this._img.alpha = 0, this._scene.addChild(this._img), createjs.Tween.get(this._img).to({
                    alpha: 1
                }, 200).call(function () {
                    t._waited = !0, t._hideImage()
                }), this._connectAPI()
            }, e.prototype._connectAPI = function () {
                var t, e = this;
                t = 1 == this._scene.data.battle_model.isPractice() ? new c.APIPracticeResult(this._scene.data) : new u.APIBattleResult(this._scene.data), t.start(function () {
                    e._connected = !0, e._hideImage()
                })
            }, e.prototype._hideImage = function () {
                var t = this;
                0 != this._waited && 0 != this._connected && createjs.Tween.get(this._img).to({
                    x: 270
                }, 200).to({
                    x: 240,
                    alpha: 0
                }, 200).wait(500).call(function () {
                    t._img.parent.removeChild(t._img), t._showTitle()
                })
            }, e.prototype._showTitle = function () {
                var t = this;
                this._scene.view.layer_title.show();
                var e = this._scene.data.map_name;
                this._scene.view.layer_map_name.initialize(e), this._scene.view.layer_bg.initialize();
                var i = this._scene.data.user_name_f,
                    n = this._scene.data.user_level_f,
                    o = this._scene.data.deck_name_f,
                    r = this._scene.data.deck_name_e,
                    s = this._scene.data.battle_model.deck_f.isYugeki();
                this._scene.view.layer_deck_info.initialize(i, n, o, r, s);
                this._scene.data.battle_model.deck_f.ships, this._scene.data.battle_model.deck_e.ships;
                this._scene.view.layer_bg.once("complete", function () {
                    t._scene.view.layer_map_name.show()
                }), this._scene.view.layer_map_name.once("complete", function () {
                    t._endTask()
                }), this._scene.view.layer_bg.show()
            }, e
        }(s.TaskBase);
    e.TaskInit = h
}