const function960 = function (t, e, i) {
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
    var o = i(42), r = i(961), s = i(1), a = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._board = new r.MapIntroBoard, e._board.position.set(522, 369), e._chara = new PIXI.Sprite, e._chara.position.set(822, 36), e._operation = new _, e._operation.position.set(363, 51), e._change_btn = new u, e._change_btn.position.set(648, 69), e.addChild(e._board), e.addChild(e._chara), e.addChild(e._operation), e.addChild(e._change_btn), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "board", {
            get: function () {
                return this._board
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "chara", {
            get: function () {
                return this._chara
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "operation", {
            get: function () {
                return this._operation
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "change_btn", {
            get: function () {
                return this._change_btn
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function (t, e) {
            this._board.initialize(t), this._chara.texture = o.SALLY_EVENT.getTexture(21), this._type = e, this._operation.update(e), this._change_btn.initialize()
        }, e.prototype.dispose = function () {
            this._board.dispose(), this._change_btn.dispose()
        }, e
    }(PIXI.Container);
    e.MapIntroDialog = a;
    var _ = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype.update = function (t) {
            this.texture = 1 == t ? o.SALLY_EVENT.getTexture(20) : 2 == t ? o.SALLY_EVENT.getTexture(17) : 3 == t ? o.SALLY_EVENT.getTexture(19) : 4 == t ? o.SALLY_EVENT.getTexture(18) : PIXI.Texture.EMPTY
        }, e
    }(PIXI.Sprite), u = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._onClick = function (t) {
                t.stopPropagation(), null != e._cb_onClick && e._cb_onClick()
            }, e.interactive = !0, e
        }

        return n(e, t), e.prototype.initialize = function () {
            this.texture = o.SALLY_EVENT.getTexture(14)
        }, e.prototype.activate = function (t) {
            this._cb_onClick = t, this.buttonMode = !0, this.on(s.EventType.CLICK, this._onClick)
        }, e.prototype.deactivate = function () {
            this.buttonMode = !1, this.off(s.EventType.CLICK, this._onClick)
        }, e.prototype.dispose = function () {
            this._cb_onClick = null, this.deactivate()
        }, e
    }(PIXI.Sprite)
}