const function641 = function (t, e, i) {
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
    var o = i(80), r = i(5), s = i(105), a = i(1), _ = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._ev = e, i._isInsideScene = !0, i._onNextClick = function () {
                i._isInsideScene ? (i._isInsideScene = !1, i._nextScene()) : i._ev.emit("tutorial-next-scene")
            }, i._onToggleNextBtn = function (t) {
                var e = i._getEventTextureKey(t.type);
                i._btnNext.texture = i._btnNextImage[e]
            }, i._getEventTextureKey = function (t) {
                return t == a.EventType.MOUSEOVER ? "hover" : "def"
            }, i.alpha = 0, i._miniImage = [o.TUTORIAL_MAIN.getTexture(13), o.TUTORIAL_MAIN.getTexture(14)], i
        }

        return n(e, t), e.prototype.initialize = function () {
            var t = new PIXI.Sprite(o.TUTORIAL_MAIN.getTexture(24));
            t.position.set(175, 116), this._mini = new PIXI.Sprite(this._miniImage[0]), this._mini.position.set(35, 428), this._btnNextImage = {
                def: o.TUTORIAL_MAIN.getTexture(1),
                hover: o.TUTORIAL_MAIN.getTexture(2)
            }, this._btnNext = new PIXI.Sprite(this._btnNextImage.def), this._btnNext.name = "next", this._btnNext.anchor.set(.5, 0), this._btnNext.position.set(r.default.width / 2, r.default.height - this._btnNext.height - 20), this._btnNext.interactive = !0, this._btnNext.buttonMode = !0, this._btnNext.on(a.EventType.MOUSEOVER, this._onToggleNextBtn).on(a.EventType.MOUSEOUT, this._onToggleNextBtn).on(a.EventType.CLICK, this._onNextClick), this.addChild(t, this._mini, this._btnNext), this._ev.emit("tutorial-scene-start")
        }, e.prototype.start = function () {
            var t = this;
            this.alpha = 1;
            var e = 0;
            this._miniImageTween = createjs.Tween.get(null, { loop: !0 }).wait(200).call(function () {
                e++, t._mini.texture = t._miniImage[e % 2]
            }), this._ev.emit("tutorial-play-voice", "tutorial", "026_a", function () {
                t._ev.emit("tutorial-play-voice", "tutorial", "027")
            })
        }, e.prototype._nextScene = function () {
            var t = new PIXI.Sprite(o.TUTORIAL_MAIN.getTexture(18));
            t.position.set(280, 472), t.alpha = 0, this.addChild(t), createjs.Tween.get(t).to({ alpha: 1 }, 400, createjs.Ease.linear), this._ev.emit("tutorial-play-voice", "tutorial", "028")
        }, e.prototype.dispose = function () {
            this.alpha = 0, this._btnNext.interactive = !1, this._btnNext.buttonMode = !1, this._btnNext.off(a.EventType.MOUSEOVER, this._onToggleNextBtn).off(a.EventType.MOUSEOUT, this._onToggleNextBtn).off(a.EventType.CLICK, this._onNextClick), createjs.Tween.removeTweens(this._miniImageTween), this._ev.emit("tutorial-remove-scene")
        }, e
    }(s.SceneBase);
    e.SceneExplain2 = _
}