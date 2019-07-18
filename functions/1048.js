const function1048 = function (t, e, i) {
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
        s = i(18),
        a = i(58),
        _ = i(1049),
        u = i(1),
        l = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._showDialog = function () {
                    i._dialog = new c, i._dialog.alpha = 0, i._dialog.initialize(), o.default.view.overLayer.addChild(i._dialog), createjs.Tween.get(i._dialog).to({
                        alpha: 1
                    }, 150).call(i._waitClick)
                }, i._waitClick = function () {
                    i._dialog.btn_y.interactive = i._dialog.btn_y.buttonMode = !0, i._dialog.btn_y.once(u.EventType.CLICK, i._onClickYes), i._dialog.btn_n.interactive = i._dialog.btn_n.buttonMode = !0, i._dialog.btn_n.once(u.EventType.CLICK, i._onClickNo)
                }, i._onClickYes = function () {
                    i._deactivate(), new _.ExpeditionCancelAPI(i._deck_id).start(i._hideDialog)
                }, i._onClickNo = function () {
                    i._deactivate(), i._hideDialog()
                }, i._hideDialog = function () {
                    createjs.Tween.get(i._dialog).to({
                        alpha: 0
                    }, 150).call(function () {
                        i._dialog.parent.removeChild(i._dialog), i._fade.hide(100, function () {
                            i._fade.parent.removeChild(i._fade), i._endTask()
                        })
                    })
                }, i._deck_id = e, i
            }
            return n(e, t), e.prototype._start = function () {
                this._fade = new s.FadeBox(.6), this._fade.hide(), o.default.view.overLayer.addChild(this._fade), this._fade.show(100, this._showDialog)
            }, e.prototype._deactivate = function () {
                this._dialog.btn_y.interactive = this._dialog.btn_y.buttonMode = !1, this._dialog.btn_y.off(u.EventType.CLICK, this._onClickYes), this._dialog.btn_n.interactive = this._dialog.btn_n.buttonMode = !1, this._dialog.btn_n.off(u.EventType.CLICK, this._onClickNo)
            }, e.prototype._endTask = function (e) {
                void 0 === e && (e = !1), this._fade = null, this._dialog = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase);
    e.CancelExpeditionTask = l;
    var c = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._activated = !1, e
        }
        return n(e, t), Object.defineProperty(e.prototype, "btn_y", {
            get: function () {
                return this._btn_y
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "btn_n", {
            get: function () {
                return this._btn_n
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.initialize = function () {
            var t = new PIXI.Sprite(a.SALLY_EXPEDITION.getTexture(103));
            this._btn_y = new PIXI.Sprite(a.SALLY_EXPEDITION.getTexture(22)), this._btn_n = new PIXI.Sprite(a.SALLY_EXPEDITION.getTexture(21)), t.position.set(219, 207), this._btn_y.position.set(375, 411), this._btn_n.position.set(645, 411), this.addChild(t), this.addChild(this._btn_y), this.addChild(this._btn_n)
        }, e
    }(PIXI.Container)
}