const function1368 = function (t, e, i) {
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
        s = i(2),
        a = i(12),
        _ = i(6),
        l = i(175),
        u = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._scene = e, n._record = i, n
            }
            return n(e, t), Object.defineProperty(e.prototype, "scene", {
                get: function () {
                    return this._scene
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "record", {
                get: function () {
                    return this._record
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._start = function () {
                var t = this;
                this._scene.bg.setNight(function () {
                    t._openShutter()
                })
            }, e.prototype._openShutter = function () {
                var t = this,
                    e = this._scene.data.model.deck_f.ships_sub,
                    i = e ? e[0] : this._scene.data.model.deck_f.ships[0],
                    n = 18;
                432 != i.mst_id && 353 != i.mst_id || (n = 918), r.default.sound.voice.play(i.mst_id.toString(), n), 1 == this.scene.shutter2.isOpened() ? this._showTitle() : (this.scene.shutter2.open(), this.scene.shutter2.once("opened", function () {
                    t._showTitle()
                }))
            }, e.prototype._showTitle = function () {
                this._scene.view.layer_title.show(8), this._showCutin()
            }, e.prototype._showCutin = function () {
                var t = this,
                    e = new c;
                e.position.set(o.default.width / 2, o.default.height / 2), e.initialize(), this._scene.view.layer_cutin.addChild(e), e.show(300), e.once("complete_show", function () {
                    t._hideCutin(e)
                })
            }, e.prototype._hideCutin = function (t) {
                var e = this;
                t.hide(1e3), t.once("complete_hide", function () {
                    e._scene.view.layer_cutin.removeChild(t), e._endTask()
                })
            }, e
        }(s.TaskBase);
    e.PhaseOpening = u;
    var c = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._sprites = new Array, e
        }
        return n(e, t), e.prototype.initialize = function () {
            for (var t = [-330, -165, 0, 165, 330, -248, -83, 83, 248], e = [-105, -105, -105, -105, -105, 105, 105, 105, 105], i = [9, 10, 11, 12, 13, 14, 15, 16, 17], n = 0; n < i.length; n++) {
                var o = l.BATTLE_NIGHT.getTexture(i[n]),
                    r = new a.Sprite(o),
                    s = t[n],
                    _ = e[n];
                r.anchor.set(.5), r.position.set(s, _), r.alpha = 0, this.addChild(r), this._sprites.push(r)
            }
        }, e.prototype.show = function (t) {
            for (var e = this, i = null, n = 0; n < this._sprites.length; n++) {
                var o = this._sprites[n];
                o.scale.set(1.5), i = createjs.Tween.get(o).wait(t + 100 * n).to({
                    alpha: 1,
                    scaleX: 1,
                    scaleY: 1
                }, 300).call(function () {
                    _.SE.play("110")
                })
            }
            i.call(function () {
                e.emit("complete_show")
            })
        }, e.prototype.hide = function (t) {
            for (var e = this, i = null, n = 0; n < this._sprites.length; n++) {
                this._sprites[n];
                i = createjs.Tween.get(this).wait(t).to({
                    alpha: 0,
                    scaleX: 3,
                    scaleY: 3
                }, 600)
            }
            i.call(function () {
                e.emit("complete_hide")
            })
        }, Object.defineProperty(e.prototype, "scaleX", {
            get: function () {
                return this.scale.x
            },
            set: function (t) {
                this.scale.x = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "scaleY", {
            get: function () {
                return this.scale.y
            },
            set: function (t) {
                this.scale.y = t
            },
            enumerable: !0,
            configurable: !0
        }), e
    }(PIXI.Container)
}