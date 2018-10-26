const function876 = function (t, e, i) {
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
    var o = i(1), r = i(35), s = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i._onClickYes = function () {
                i._cb_onComplete(!0)
            }, i._onClickNo = function () {
                i._cb_onComplete(!1)
            }, i._cb_onComplete = e;
            var n = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(79));
            return n.position.set(271, 87), i.addChild(n), i._btn_yes = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(39)), i._btn_yes.interactive = !0, i._btn_yes.buttonMode = !0, i._btn_yes.position.set(435, 505), i.addChild(i._btn_yes), i._btn_no = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(35)), i._btn_no.interactive = !0, i._btn_no.buttonMode = !0, i._btn_no.position.set(615, 505), i.addChild(i._btn_no), i._btn_yes.on(o.EventType.CLICK, i._onClickYes), i._btn_no.on(o.EventType.CLICK, i._onClickNo), i
        }

        return n(e, t), e.prototype.dispose = function () {
            this._btn_yes.off(o.EventType.CLICK, this._onClickYes), this._btn_no.off(o.EventType.CLICK, this._onClickNo), this._cb_onComplete = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    e.LargeBuildConfirm = s
}