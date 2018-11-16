const function793 = function (t, e, i) {
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
    var o = i(3), r = i(3), s = i(85), a = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.headerKansenStatus = new s.TitleBar, e.headerKansenStatus.initialize(o.COMMON_MAIN.getTexture(1), 35), e.headerSelectKyouka = new s.TitleBar, e.headerSelectKyouka.initialize(r.REMODEL_POWERUP.getTexture(3), 26), e.headerSelectKyouka.position.set(536, 0), e.headerKyoukaList = new s.TitleBar, e.headerKyoukaList.initialize(r.REMODEL_POWERUP.getTexture(2), 26), e.headerKyoukaList.position.set(806, 0), e.addChild(e.headerKansenStatus, e.headerSelectKyouka, e.headerKyoukaList), e.cacheAsBitmap = !0, e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.removeChildren(), this.cacheAsBitmap = !1, this.headerKansenStatus.dispose(), this.headerKyoukaList.dispose(), this.headerSelectKyouka.dispose(), this.headerKansenStatus = null, this.headerKyoukaList = null, this.headerSelectKyouka = null
        }, e
    }(PIXI.Container);
    e.PowerUpHeader = a
}