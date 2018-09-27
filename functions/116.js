const function116 = function (t, e, i) {
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
    var o = i(2), r = i(16), s = i(128), a = i(1), _ = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._result = !1, i._onYes = function () {
                i._result = !0, i._dialog.btn_no.off(a.EventType.CLICK, i._onNo), i._hideDialog()
            }, i._onNo = function () {
                i._dialog.btn_yes.off(a.EventType.CLICK, i._onYes), i._hideDialog()
            }, i._layer = e, i
        }

        return n(e, t), Object.defineProperty(e.prototype, "result", {
            get: function () {
                return this._result
            }, enumerable: !0, configurable: !0
        }), e.prototype._start = function () {
            this._showFade()
        }, e.prototype._showFade = function () {
            var t = this;
            this._fade = new r.FadeBox(.2), this._fade.hide(0), this._layer.addChild(this._fade), this._fade.show(200, function () {
                t._showDialog()
            })
        }, e.prototype._showDialog = function () {
            var t = this;
            this._dialog = new u, this._dialog.position.set(219, 207), this._dialog.alpha = 0, this._fade.addChild(this._dialog), this._dialog.initialize(), createjs.Tween.get(this._dialog).to({ alpha: 1 }, 250).call(function () {
                t._waitSelect()
            })
        }, e.prototype._waitSelect = function () {
            this._dialog.btn_yes.once(a.EventType.CLICK, this._onYes), this._dialog.btn_no.once(a.EventType.CLICK, this._onNo)
        }, e.prototype._hideDialog = function () {
            var t = this;
            createjs.Tween.get(this._fade).to({ alpha: 0 }, 300).call(function () {
                t._layer.removeChild(t._fade), t._fade = null, t._dialog = null, t._endTask()
            })
        }, e
    }(o.TaskBase);
    e.TaskItemOverflowConfirm = _;
    var u = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._btn_yes = new PIXI.Sprite, e._btn_yes.position.set(203, 216), e._btn_yes.interactive = !0, e._btn_yes.buttonMode = !0, e.addChild(e._btn_yes), e._btn_no = new PIXI.Sprite, e._btn_no.position.set(419, 216), e._btn_no.interactive = !0, e._btn_no.buttonMode = !0, e.addChild(e._btn_no), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "btn_yes", {
            get: function () {
                return this._btn_yes
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "btn_no", {
            get: function () {
                return this._btn_no
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function () {
            this.texture = s.ITEM_ILIST.getTexture(34), this._btn_yes.texture = s.ITEM_ILIST.getTexture(9), this._btn_no.texture = s.ITEM_ILIST.getTexture(3)
        }, e
    }(PIXI.Sprite)
}