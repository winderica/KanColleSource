const function652 = function (t, e, i) {
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
    var o = i(82),
        r = i(5),
        s = i(107),
        a = i(1),
        _ = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._ev = e, i._onNextClick = function () {
                    i._btnNext.interactive = !1, i._btnSubmit = new PIXI.Sprite(i._btnSumbitImage.def), i._btnSubmit.anchor.set(.5, 0), i._btnSubmit.position.set(r.default.width / 2, r.default.height - i._btnSubmit.height - 30), i._btnSubmit.interactive = !1, i._btnSubmit.buttonMode = !0, i._btnSubmit.on(a.EventType.MOUSEOVER, i._onToggleSubmitBtn).on(a.EventType.MOUSEOUT, i._onToggleSubmitBtn).on(a.EventType.CLICK, i._onSubmitClick), i._btnSubmit.alpha = 0, i.addChild(i._btnSubmit), i._nextScene()
                }, i._onSubmitClick = function () {
                    i._btnSubmit.interactive = !1, i._ev.emit("tutorial-next-scene")
                }, i._onToggleNextBtn = function (t) {
                    var e = i._getEventTextureKey(t.type);
                    i._btnNext.texture = i._btnNextImage[e]
                }, i._onToggleSubmitBtn = function (t) {
                    var e = i._getEventTextureKey(t.type);
                    i._btnSubmit.texture = i._btnSumbitImage[e]
                }, i._getEventTextureKey = function (t) {
                    return t == a.EventType.MOUSEOVER ? "hover" : "def"
                }, i.alpha = 0, i._miniImage = [o.TUTORIAL_MAIN.getTexture(15), o.TUTORIAL_MAIN.getTexture(16)], i._btnNextImage = {
                    def: o.TUTORIAL_MAIN.getTexture(1),
                    hover: o.TUTORIAL_MAIN.getTexture(2)
                }, i._btnSumbitImage = {
                    def: o.TUTORIAL_MAIN.getTexture(5),
                    hover: o.TUTORIAL_MAIN.getTexture(6)
                }, i
            }
            return n(e, t), e.prototype.initialize = function () {
                var t = new PIXI.Sprite(o.TUTORIAL_MAIN.getTexture(25));
                t.position.set(175, 116), this._mini = new PIXI.Sprite(this._miniImage[0]), this._mini.position.set(980, 432), this._btnNext = new PIXI.Sprite(this._btnNextImage.def), this._btnNext.name = "next", this._btnNext.anchor.set(.5, 0), this._btnNext.position.set(r.default.width / 2, r.default.height - this._btnNext.height - 20), this._btnNext.interactive = !0, this._btnNext.buttonMode = !0, this._btnNext.on(a.EventType.MOUSEOVER, this._onToggleNextBtn).on(a.EventType.MOUSEOUT, this._onToggleNextBtn).on(a.EventType.CLICK, this._onNextClick), this.addChild(t, this._mini, this._btnNext), this._ev.emit("tutorial-scene-start")
            }, e.prototype.start = function () {
                var t = this;
                this.alpha = 1, this._miniEyes(), this._ev.emit("tutorial-play-voice", "tutorial", "029", function () {
                    t._ev.emit("tutorial-play-voice", "tutorial", "030")
                })
            }, e.prototype._miniEyes = function () {
                var t = this,
                    e = !0,
                    i = function () {
                        var i = 1 == e ? 0 : 1;
                        t._mini.texture = t._miniImage[i]
                    },
                    n = function () {
                        var o = 1 == e ? 1e3 : 300;
                        t._miniImageTween = createjs.Tween.get(null).wait(o).call(function () {
                            e = !e, i(), t._miniImageTween = null, n()
                        })
                    };
                n()
            }, e.prototype._nextScene = function () {
                var t = this,
                    e = new PIXI.Sprite(o.TUTORIAL_MAIN.getTexture(19));
                e.position.set(435, 400), e.alpha = 0, this.addChild(e), createjs.Tween.get(e).to({
                    alpha: 1
                }, 400, createjs.Ease.linear), createjs.Tween.get(this._btnNext).to({
                    alpha: 0
                }, 400, createjs.Ease.linear).call(function () {
                    t._btnNext.visible = !1
                }), createjs.Tween.get(this._btnSubmit).to({
                    alpha: 1
                }, 300, createjs.Ease.linear).call(function () {
                    t._btnSubmit.interactive = !0
                }), this._ev.emit("tutorial-play-voice", "tutorial", "031", function () {
                    t._ev.emit("tutorial-play-voice", "tutorial", "032_a", function () {
                        t._ev.emit("tutorial-play-voice", "tutorial", "033")
                    })
                })
            }, e.prototype.dispose = function () {
                this.alpha = 0, this._btnNext.off(a.EventType.MOUSEOVER, this._onToggleNextBtn).off(a.EventType.MOUSEOUT, this._onToggleNextBtn).off(a.EventType.CLICK, this._onNextClick), this._btnSubmit.off(a.EventType.MOUSEOVER, this._onToggleSubmitBtn).off(a.EventType.MOUSEOUT, this._onToggleSubmitBtn).off(a.EventType.CLICK, this._onSubmitClick), createjs.Tween.removeTweens(this._miniImageTween), this._ev.emit("tutorial-remove-scene")
            }, e
        }(s.SceneBase);
    e.SceneExplain3 = _
}