const function1257 = function (t, e, i) {
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
        s = i(27),
        a = i(435),
        _ = i(436),
        l = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._anim = function () {
                    var t = n._getRandomShip(),
                        e = t.mst_id;
                    o.default.sound.voice.play(e.toString(), 26);
                    var i = new _.AnimFlagShip(n._scene, e, t.isDamaged()),
                        r = new u(n._scene, n._drop_items);
                    new s.ParallelTask(i, r).start(function () {
                        n._endTask()
                    })
                }, n._scene = e, n._model = i, n
            }
            return n(e, t), e.prototype._start = function () {
                this._drop_items = this._model.sortie.getNextCell().getDropItems();
                for (var t = 0, e = this._drop_items; t < e.length; t++) {
                    var i = e[t];
                    i.icon_id;
                    if (4 == i.type) {
                        var n = i.getUseitemMstID();
                        this._model.sortie.obtained_items.push(n)
                    } else if (5 == i.type) {
                        var n = i.getUseitemMstID();
                        this._model.sortie.obtained_items.push(n)
                    }
                }
                var o = this._drop_items.concat();
                this._animItem(o, this._anim)
            }, e.prototype._animItem = function (t, e) {
                var i = this;
                if (0 == t.length) return void(null != e && e());
                var n = t.shift(),
                    o = n.getUseitemMstID(),
                    r = n.count,
                    s = new a.CompDropItem;
                s.initialize(o, r);
                var _ = this._scene.view.map.ship_icon;
                s.position.set(_.x, _.y), this._scene.view.addChild(s), createjs.Tween.get(s).to({
                    y: _.y - 60
                }, 400).to({
                    y: _.y - 75,
                    alpha: 0
                }, 200).call(function () {
                    i._scene.view.removeChild(s), s.dispose(), _.startWaveWhite(), i._animItem(t, e)
                })
            }, e.prototype._endTask = function () {
                this._scene.view.map.ship_icon.stopWave(), this._scene.view.message_box.text = "", t.prototype._endTask.call(this)
            }, e.prototype._getRandomShip = function () {
                for (var t = this._model.deck_f.ships, e = new Array, i = 0, n = t; i < n.length; i++) {
                    var o = n[i];
                    null != o && (0 != o.damageType && 1 != o.isTaihi() && e.push(o))
                }
                return e[Math.floor(Math.random() * e.length)]
            }, e
        }(r.TaskBase);
    e.CellTaskItem = l;
    var u = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._scene = e, n._items = i, n
        }
        return n(e, t), e.prototype._start = function () {
            this._current_index = 0, this._loop()
        }, e.prototype._loop = function () {
            if (this._current_index < this._items.length) {
                var t = this._items[this._current_index];
                this._current_index++, this._show(t)
            } else this._endTask()
        }, e.prototype._show = function (t) {
            var e = this,
                i = t.getUseitemMstID(),
                n = t.count;
            this._scene.view.message_box.showItemGetText(i, n), createjs.Tween.get(null).wait(2e3).call(function () {
                e._loop()
            })
        }, e.prototype._endTask = function () {
            this._scene = null, this._items = null, t.prototype._endTask.call(this)
        }, e
    }(r.TaskBase)
}