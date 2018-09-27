const function779 = function (t, e, i) {
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
    var o = i(5), r = i(1), s = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onClick = function () {
                e.onClick()
            };
            return e.beginFill(0, .5), e.drawRect(0, 103, o.default.width, o.default.height - 103), e.endFill(), e.interactive = e.buttonMode = !0, e.addListener(r.EventType.CLICK, e._onClick), e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.clear(), this.removeAllListeners(r.EventType.CLICK), this.interactive = this.buttonMode = !1, this.onClick = this._onClick = null, this.removeChildren()
        }, e
    }(PIXI.Graphics);
    e.BackArea = s;
    var a = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onClickLeft = function () {
                e.onClickLeft()
            }, e._onClickRight = function () {
                e.onClickRight()
            };
            var i = new PIXI.Graphics, n = new PIXI.Graphics;
            return i.beginFill(0, .5), i.drawRect(0, 103, 501, o.default.height - 103), i.endFill(), n.beginFill(0, .5), n.drawRect(0, 103, o.default.width - 501, o.default.height - 103), n.endFill(), n.x = 501, i.interactive = i.buttonMode = !0, n.interactive = n.buttonMode = !0, i.addListener(r.EventType.CLICK, e._onClickLeft), n.addListener(r.EventType.CLICK, e._onClickRight), e.addChild(i, n), e.leftArea = i, e.rightArea = n, e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.leftArea.clear(), this.rightArea.clear(), this.leftArea.removeAllListeners(r.EventType.CLICK), this.rightArea.removeAllListeners(r.EventType.CLICK), this.leftArea.interactive = this.leftArea.buttonMode = !1, this.rightArea.interactive = this.rightArea.buttonMode = !1, this.onClickLeft = this._onClickLeft = null, this.onClickRight = this._onClickRight = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    e.DoubleBackArea = a
}