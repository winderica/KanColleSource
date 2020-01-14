const function1378 = function (t, e, i) {
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
        a = i(8),
        _ = i(82),
        u = i(13),
        l = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._onClick = function () {
                    n._messagebox.deactivate(), n._layer.removeChild(n._click_area), createjs.Tween.get(n._fade).to({
                        alpha: 0
                    }, 500).wait(300).call(function () {
                        n._layer.removeChild(n._messagebox), n._layer.removeChild(n._chara), n._layer.removeChild(n._fade), n._endTask()
                    }), createjs.Tween.get(n._chara).to({
                        y: n._chara.y + 327,
                        alpha: 0
                    }, 300), createjs.Tween.get(n._messagebox).to({
                        y: n._messagebox.y + 98,
                        alpha: 0
                    }, 100)
                }, n._layer = e, n._model = i, n
            }
            return n(e, t), e.prototype._start = function () {
                this._showFade()
            }, e.prototype._showFade = function () {
                this._fade = new a.AreaBox(1), this._fade.alpha = 0, this._layer.addChild(this._fade), createjs.Tween.get(this._fade).to({
                    alpha: 1
                }, 500), this._loadResource()
            }, e.prototype._loadResource = function () {
                var t = this,
                    e = this._model.mst_id,
                    i = new u.ShipLoader;
                i.add(e, !1, "full"), i.load(function () {
                    t._showChara()
                })
            }, e.prototype._showChara = function () {
                var t = this,
                    e = this._model.mst_id,
                    i = o.default.resources.getShip(e, !1, "full");
                this._chara = new PIXI.Sprite(i), this._chara.x = this._model.offset_x, this._chara.y = this._model.offset_y + 327, this._chara.alpha = 0, this._layer.addChild(this._chara), createjs.Tween.get(this._chara).to({
                    y: this._model.offset_y,
                    alpha: 1
                }, 800).call(function () {
                    t._showMessageBox()
                })
            }, e.prototype._showMessageBox = function () {
                var t = this,
                    e = this._model.stype,
                    i = this._model.name,
                    n = this._model.message;
                this._messagebox = new _.MessageBox(!1), this._messagebox.initializeForShip(e, i, n), this._messagebox.y = 578, this._layer.addChild(this._messagebox);
                var s = this._messagebox.y - 98;
                createjs.Tween.get(this._messagebox).to({
                    y: s
                }, 200).call(function () {
                    t._messagebox.activate(), o.default.sound.voice.play("9998", t._model.voice_id), t._click_area = new a.AreaBox(0), t._click_area.buttonMode = !0, t._layer.addChild(t._click_area), t._click_area.once(r.EventType.CLICK, t._onClick)
                })
            }, e.prototype._endTask = function () {
                this._layer = null, this._model = null, this._fade = null, this._chara = null, this._messagebox.dispose(), this._messagebox = null, this._click_area = null, t.prototype._endTask.call(this)
            }, e
        }(s.TaskBase);
    e.TaskBossCutin = l
}