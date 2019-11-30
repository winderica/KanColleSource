const function789 = function (t, e, i) {
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
        r = i(1),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._onClick = function () {
                    e.onClick()
                };
                return e.beginFill(0, .5), e.drawRect(0, 103, o.default.width, o.default.height - 103), e.endFill(), e.interactive = e.buttonMode = !0, e.on(r.EventType.CLICK, e._onClick), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.clear(), this.off(r.EventType.CLICK), this.onClick = null, this.removeChildren()
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
            }, e.leftArea = new PIXI.Graphics, e.rightArea = new PIXI.Graphics;
            return e.leftArea.beginFill(0, .5), e.leftArea.drawRect(0, 103, 501, o.default.height - 103), e.leftArea.endFill(), e.rightArea.beginFill(0, .5), e.rightArea.drawRect(0, 103, o.default.width - 501, o.default.height - 103), e.rightArea.endFill(), e.rightArea.x = 501, e.leftArea.interactive = e.leftArea.buttonMode = !0, e.rightArea.interactive = e.rightArea.buttonMode = !0, e.leftArea.on(r.EventType.CLICK, e._onClickLeft), e.rightArea.on(r.EventType.CLICK, e._onClickRight), e.addChild(e.leftArea, e.rightArea), e
        }
        return n(e, t), e.prototype.dispose = function () {
            this.leftArea.clear(), this.rightArea.clear(), this.leftArea.off(r.EventType.CLICK), this.rightArea.off(r.EventType.CLICK), this.onClickLeft = null, this.onClickLeft = null, this.leftArea = null, this.rightArea = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    e.DoubleBackArea = a
}