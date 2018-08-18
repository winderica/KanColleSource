const function596 = function (t, e, i) {
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
    var o = i(4), r = i(22), s = i(148), a = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._timer = -1, e.dispose = function () {
                e._stopAnimation()
            }, e._startAnimation = function () {
                e._timer < 0 && (e._timer = setInterval(e._onTimer, 1e3))
            }, e._stopAnimation = function () {
                e._timer >= 0 && (clearInterval(e._timer), e._timer = -1)
            }, e._onTimer = function () {
                var t = new Date, i = t.getMonth() + 1, n = t.getDate();
                e._date.text = r.MathUtil.zeroPadding(i, 2) + "/" + r.MathUtil.zeroPadding(n, 2);
                var o = t.getHours(), s = t.getMinutes();
                e._time.text = r.MathUtil.zeroPadding(o, 2) + ":" + r.MathUtil.zeroPadding(s, 2)
            };
            var i = new PIXI.Sprite;
            return i.name = "bg", i.position.set(0, 573), e.addChild(i), e._date = new o.TextBox(26, "white"), e._date.anchor.set(.5, 0), e._date.position.set(58, 612), e.addChild(e._date), e._time = new o.TextBox(41, "white"), e._time.anchor.set(.5, 0), e._time.position.set(75, 651), e.addChild(e._time), e
        }

        return n(e, t), e.prototype.initialize = function () {
            this.getChildByName("bg").texture = s.PORT_MAIN.getTexture(19), this._onTimer(), this._startAnimation()
        }, e.prototype.update = function (t) {
            var e = [0, 11, 12, 13, 14, 15, 31, 16];
            this.visible = e.indexOf(t) >= 0, 1 == this.visible ? this._startAnimation() : this._stopAnimation()
        }, e
    }(PIXI.Container);
    e.ClockLayer = a
}