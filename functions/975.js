const function975 = function (t, e, i) {
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
    var o = i(12),
        r = i(41),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._board = new a, e._board.position.set(726, 346), e._chara = new PIXI.Sprite, e._chara.position.set(17, 74), e.addChild(e._board), e.addChild(e._chara), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "board", {
                get: function () {
                    return this._board
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "chara", {
                get: function () {
                    return this._chara
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                this._board.initialize(), this._chara.texture = r.SALLY_EVENT.getTexture(27)
            }, e
        }(PIXI.Container);
    e.IntroAlertDialog = s;
    var a = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.anchor.set(.5), e._content = new PIXI.Sprite, e.addChild(e._content), e
        }
        return n(e, t), e.prototype.initialize = function () {
            this.texture = r.SALLY_EVENT.getTexture(6), this._content.position.set(-345, -215), this._content.texture = r.SALLY_EVENT.getTexture(40)
        }, e
    }(o.Sprite)
}