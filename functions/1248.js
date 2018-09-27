const function1248 = function (t, e, i) {
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
    var o = i(0), r = i(2), s = i(27), a = i(39), _ = i(14), u = i(1249), l = function (t) {
        function e(e, i, n) {
            var o = t.call(this) || this;
            return o._playVoiceFrom = function () {
                o._scene.view.message_box.text = "\u8266\u968a\u306b\u6d0b\u4e0a\u88dc\u7d66\u3092\u884c\u3044\u307e\u3059\u3002";
                var t = new s.ParallelTask;
                t.add(new a.WaitTask(1e3)), t.add(new c(o._ship_from.mst_id, 26)), t.start(function () {
                    o._showShipTo()
                })
            }, o._playVoiceTo = function () {
                var t = new s.ParallelTask;
                t.add(new a.WaitTask(2e3)), t.add(new c(o._ship_to.mst_id, 27)), t.start(function () {
                    o._hideShips()
                })
            }, o._scene = e, o._model = i, o._data = n, o
        }

        return n(e, t), e.prototype._start = function () {
            this._loadShipResource()
        }, e.prototype._loadShipResource = function () {
            var t = this;
            this._ship_from = this._getShip(this._data.ship_mem_id), this._ship_to = this._getShip(this._data.ship_mem_id_supplied);
            var e = new _.ShipLoader;
            e.add(this._ship_from.mst_id, this._ship_from.isDamaged(), "full"), null != this._ship_to && e.add(this._ship_to.mst_id, this._ship_to.isDamaged(), "full"), e.load(function () {
                t._anim()
            })
        }, e.prototype._anim = function () {
            var t = this, e = this._ship_from.mst_id, i = this._ship_from.isDamaged(),
                n = o.default.resources.getShip(e, i, "full");
            this._ship_from_sprite = new PIXI.Sprite(n);
            var r = o.default.model.ship_graph.get(e).getMapOffset(i);
            this._ship_from_x = -80 + r.x, this._ship_from_sprite.x = this._ship_from_x - 300, this._ship_from_sprite.y = -93 + r.y, this._ship_from_sprite.alpha = 0, this._scene.view.chara_layer.addChild(this._ship_from_sprite), createjs.Tween.get(this._ship_from_sprite).to({
                x: this._ship_from_x,
                alpha: 1
            }, 750, createjs.Ease.quadInOut), createjs.Tween.get(null).wait(450).call(function () {
                t._playVoiceFrom()
            })
        }, e.prototype._showShipTo = function () {
            var t = this;
            if (null == this._ship_to) createjs.Tween.get(null).wait(1e3).call(function () {
                t._hideShips()
            }); else {
                var e = this._ship_to.mst_id, i = this._ship_to.isDamaged(),
                    n = o.default.resources.getShip(e, i, "full");
                this._ship_to_sprite = new PIXI.Sprite(n);
                var r = o.default.model.ship_graph.get(e).getMapOffset(i);
                this._ship_to_x = 520 + r.x, this._ship_to_sprite.x = this._ship_to_x + 300, this._ship_to_sprite.y = -93 + r.y, this._ship_to_sprite.alpha = 0, this._scene.view.chara_layer.addChild(this._ship_to_sprite), createjs.Tween.get(this._ship_to_sprite).to({
                    x: this._ship_to_x,
                    alpha: 1
                }, 750, createjs.Ease.quadInOut), createjs.Tween.get(null).wait(450).call(function () {
                    t._playVoiceTo()
                })
            }
        }, e.prototype._hideShips = function () {
            var t = this;
            createjs.Tween.get(this._ship_from_sprite).to({
                x: this._ship_from_x - 300,
                alpha: 0
            }, 300, createjs.Ease.sineIn).call(function () {
                t._shipIconEffect()
            }), null != this._ship_to && createjs.Tween.get(this._ship_to_sprite).to({
                x: this._ship_to_x + 300,
                alpha: 0
            }, 300, createjs.Ease.sineIn)
        }, e.prototype._shipIconEffect = function () {
            var t = this, e = this._data.num_of_use, i = this._model.sortie.now_cell_no,
                n = this._scene.resInfo.getReplenishConfirmOffsets(i), o = null != n ? n.bln : null;
            new u.TaskReplenishmentBalloonEffect(this._scene, e, o).start(function () {
                t._scene.view.message_box.text = "", createjs.Tween.get(null).wait(500).call(function () {
                    t._endTask()
                })
            })
        }, e.prototype._getShip = function (t) {
            for (var e = this._model.deck_f.ships, i = 0, n = e; i < n.length; i++) {
                var o = n[i];
                if (null != o && o.mem_id == t) return o
            }
            return null
        }, e
    }(r.TaskBase);
    e.TaskReplenishmentEffect = l;
    var c = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._onVoiceEnd = function () {
                n._endTask()
            }, n._mst_id = e, n._voice_id = i, n
        }

        return n(e, t), e.prototype._start = function () {
            o.default.option.vol_voice <= 0 ? this._endTask() : o.default.sound.voice.play(this._mst_id.toString(), this._voice_id, this._onVoiceEnd)
        }, e
    }(r.TaskBase)
}