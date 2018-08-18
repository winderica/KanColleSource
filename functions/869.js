const function869 = function (t, e, i) {
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
    var o = i(35), r = i(4), s = i(22), a = function (t) {
        function e() {
            var e = t.call(this) || this;
            e.completeTime = 0, e.now = 0, e.timeCounter = new r.TextBox(31, 5523516), e.textBuildState = new PIXI.Sprite(o.ARSENAL_MAIN.getTexture(60));
            var i = new PIXI.Sprite(o.ARSENAL_MAIN.getTexture(154));
            return i.anchor.x = .5, i.position.set(75, 10), e.textBuildState.position.set(21, -33), e.timeCounter.position.set(5, 39), e.timeCounter.text = s.MathUtil.timeToString(0), e.addChild(e.timeCounter, e.textBuildState, i), e
        }

        return n(e, t), e.prototype.build = function (t) {
            this.timeCounter.alpha = 1, this.completeTime = t, this.textBuildState.texture = o.ARSENAL_MAIN.getTexture(58)
        }, e.prototype.standby = function () {
            this.timeCounter.alpha = .5, this.textBuildState.texture = o.ARSENAL_MAIN.getTexture(60)
        }, e.prototype.complete = function () {
            this.timeCounter.text = s.MathUtil.timeToString(0), this.textBuildState.texture = o.ARSENAL_MAIN.getTexture(59)
        }, e.prototype.update = function (t) {
            var e = this.completeTime - t;
            e < 0 && (e = 0), this.timeCounter.text = s.MathUtil.timeToString(e)
        }, e.prototype.updateProgress = function (t, e, i) {
            var n = t - e;
            n < 0 && (n = 0), n *= 1 - i, this.timeCounter.text = s.MathUtil.timeToString(n)
        }, e.prototype.dispose = function () {
            this.textBuildState = null, this.timeCounter = null, this.completeTime = null, this.now = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    e.KDockStateView = a
}