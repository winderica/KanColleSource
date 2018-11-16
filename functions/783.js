const function783 = function (t, e, i) {
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
    var o = i(5), r = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i.DURATION = 150;
            var n = new PIXI.Graphics;
            return n.beginFill(0, .5), n.drawRect(0, 0, o.default.width, o.default.height), n.endFill(), i._container = e, i._container.alpha = 0, i.interactive = !0, i.alpha = 0, i.addChild(n, i._container), i
        }

        return n(e, t), e.prototype.dispose = function () {
            this.removeChildren(), this._container = null
        }, e.prototype.show = function (t) {
            var e = this;
            void 0 === t && (t = null), createjs.Tween.get(this).to({ alpha: 1 }, 1.2 * this.DURATION).call(function () {
                createjs.Tween.get(e._container).to({ alpha: 1 }, .5 * e.DURATION).call(function () {
                    null !== t && t()
                })
            })
        }, e.prototype.hide = function (t) {
            var e = this;
            void 0 === t && (t = null), createjs.Tween.get(this._container).to({ alpha: 0 }, this.DURATION).call(function () {
                createjs.Tween.get(e).to({ alpha: 0 }, 1.2 * e.DURATION).call(function () {
                    null !== t && t()
                })
            })
        }, e
    }(PIXI.Container);
    e.SlotInShipChangeConfirm = r
}