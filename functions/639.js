const function639 = function (t, e, i) {
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
    var o = i(80), r = i(5), s = i(105), a = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            n._ev = i, n._titleChange = function (t, e) {
                void 0 === e && (e = null);
                var i = createjs.Ease.linear;
                if (0 == t) return createjs.Tween.get(n.getChildByName("titleBar")).to({ alpha: 0 }, 200, i), !1;
                var r = o.TUTORIAL_MAIN.getTexture(e);
                0 == n.getChildByName("titleBar").alpha ? (n._titleMessage.texture = r, createjs.Tween.get(n.getChildByName("titleBar")).to({ alpha: 1 }, 200, i)) : createjs.Tween.get(n._titleMessage).to({ alpha: 0 }, 200, i).call(function () {
                    n._titleMessage.texture = r
                }).to({ alpha: 1 }, 200, i)
            }, n._onNext = function () {
                createjs.Tween.get(n._currentTutorialIcon, { loop: !1 }).to({ x: n._currentTutorialIcon.x + 60 }, 400, createjs.Ease.linear)
            }, n._ev.on("tutorial-title", n._titleChange).on("tutorial-next", n._onNext);
            var a = new PIXI.Container;
            a.position.set(0, 50), a.alpha = 0, a.name = "titleBar";
            var _ = new PIXI.Sprite(e.use(s.IMAGE_FILE.TITLE_BG)), u = Math.floor(_.height / 2);
            n._titleIcon = new PIXI.Sprite(o.TUTORIAL_MAIN.getTexture(10)), n._titleIcon.anchor.set(.5, .5), n._titleIcon.position.set(20 + Math.floor(n._titleIcon.width / 2), u), n._titleMessage = new PIXI.Sprite, n._titleMessage.anchor.set(0, .5), n._titleMessage.position.set(80, u), a.addChild(_, n._titleIcon, n._titleMessage);
            var l = new PIXI.Container, c = new PIXI.Sprite(e.use(s.IMAGE_FILE.CRUMB));
            return n._currentTutorialIcon = new PIXI.Sprite(o.TUTORIAL_MAIN.getTexture(9)), n._currentTutorialIcon.anchor.set(.5, .5), n._currentTutorialIcon.position.set(345, Math.floor(c.height / 2) - 3), l.position.set(r.default.width - c.width - 12, 0), l.addChild(c, n._currentTutorialIcon), n.addChild(a, l), n
        }

        return n(e, t), e.prototype.start = function () {
            var t = { angle: 2 * Math.PI, duration: 8e3, ease: createjs.Ease.linear };
            createjs.Tween.get(this._titleIcon, { loop: !0 }).to({ rotation: t.angle }, t.duration, t.ease), createjs.Tween.get(this._currentTutorialIcon, { loop: !0 }).to({ rotation: t.angle }, t.duration, t.ease)
        }, e.prototype.dispose = function () {
            createjs.Tween.removeTweens(this._titleIcon), createjs.Tween.removeTweens(this._currentTutorialIcon), this._ev.off("tutorial-title", this._titleChange).off("tutorial-next", this._onNext)
        }, e
    }(PIXI.Container);
    e.ViewMain = a
}