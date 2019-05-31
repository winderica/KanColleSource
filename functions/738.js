const function738 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        o = i(3),
        r = i(315),
        s = i(216),
        a = function () {
            function t(t) {
                this.combineBrokenMessage = new PIXI.Sprite(o.ORGANIZE_MAIN.getTexture(44)), this.combineBrokenMessage.anchor.set(.3, 0), this.mainView = t
            }
            return t.prototype.start = function () {
                var t = this;
                if (n.default.model.deck.combined.isCombined()) {
                    var e = n.default.model.deck.get(1),
                        i = n.default.model.deck.get(2),
                        o = n.default.model.deck.combined.type;
                    this.hasBrokenCombine(e, i, o) ? new s.CombinedAPI(0).start(function () {
                        t.mainView.addChild(t.combineBrokenMessage), t.combineBrokenMessage.position.set(247, 195), t.combineBrokenMessage.width = 0, t.combineBrokenMessage.height = 0, createjs.Tween.get(t.combineBrokenMessage).to({
                            width: 0,
                            height: 0
                        }).to({
                            width: 238,
                            height: 90
                        }, 250).wait(2e3).to({
                            width: 0,
                            height: 0
                        }, 250).call(function () {
                            createjs.Tween.removeTweens(t.combineBrokenMessage), t.onBroken(), t.onComplete()
                        }).play(null)
                    }) : this.onComplete()
                } else this.onComplete()
            }, t.prototype.dispose = function () {
                this.mainView.removeChild(this.combineBrokenMessage), this.mainView = null, this.combineBrokenMessage = null, this.onComplete = null, this.onBroken = null
            }, t.prototype.hasBrokenCombine = function (t, e, i) {
                return !r.CombineUtil.checkCombinable(t, e, i)[0]
            }, t
        }();
    e.TaskCheckCombineStateAndRepair = a
}