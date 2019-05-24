const function656 = function (t, e, i) {
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
        s = i(106),
        a = i(107),
        _ = i(657),
        l = i(1),
        u = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                n._ImageManager = e, n._ev = i, n._current = 0, n._prefix = "chara", n._suffix = {
                    full: "full",
                    bg: "bg",
                    txt: "txt"
                }, n._charaMoveX = 100, n._chara = [s.CHARA.FUBUKI, s.CHARA.MURAKUMO, s.CHARA.SAZANAMI, s.CHARA.INADUMA, s.CHARA.SAMIDARE], n._charaPosition = {}, n._create = function () {
                    for (var t = 0, e = n._chara.length; t < e; t++) {
                        var i = n._chara[t],
                            o = n._prefix + "_" + i,
                            s = new PIXI.Container;
                        s.visible = !1;
                        var a = new PIXI.Sprite(n._ImageManager.use(o + "_" + n._suffix.full)),
                            _ = n._charaPosition[i];
                        a.name = n._suffix.full, a.position.set(_.x + n._charaMoveX, _.y), a.alpha = 0;
                        var l = new PIXI.Sprite(n._ImageManager.use(o + "_" + n._suffix.bg));
                        l.name = n._suffix.bg, l.anchor.set(.5, 0), l.position.set(r.default.width / 2, 100), l.alpha = 0;
                        var u = new PIXI.Sprite(n._ImageManager.use(o + "_" + n._suffix.txt));
                        u.name = n._suffix.txt, u.position.set(110, 120), u.alpha = 0, s.addChild(l, a, u), n._charaContainer.addChild(s)
                    }
                    n._ev.emit("tutorial-scene-start")
                }, n._getEventTextureKey = function (t) {
                    return t == l.EventType.MOUSEOVER ? "hover" : "def"
                }, n._onToggleSubmitBtn = function (t) {
                    var e = n._getEventTextureKey(t.type);
                    n._btnSubmit.texture = n._btn.submit[e]
                }, n._onTogglePrevBtn = function (t) {
                    var e = n._getEventTextureKey(t.type);
                    n._btnPrev.texture = n._btn.prev[e]
                }, n._onToggleNextBtn = function (t) {
                    var e = n._getEventTextureKey(t.type);
                    n._btnNext.texture = n._btn.next[e]
                }, n._onNextChara = function () {
                    var t = n._current + 1;
                    t >= n._chara.length && (t = 0), n._currentHide(n._current, t)
                }, n._onPrevChara = function () {
                    var t = n._current - 1;
                    t < 0 && (t = n._chara.length - 1), n._currentHide(n._current, t)
                }, n._onSubmit = function () {
                    n._btnSubmit.interactive = !1, n._btnSubmit.off(l.EventType.CLICK, n._onSubmit), n._messageContainer = new _.SceneSelectShipView(n._ImageManager, n._ev);
                    var t = n._chara[n._current],
                        e = n._charaContainer.getChildAt(n._current),
                        i = e.getChildByName(n._suffix.full),
                        o = n._charaPosition[t];
                    n._ev.emit("tutorial-save-ship", t);
                    var r = createjs.Ease.linear;
                    createjs.Tween.get(i).wait(50).to({
                        x: o.move.x
                    }, 250, r).wait(200).call(function () {
                        n._ev.emit("tutorial-title", !1), n._ev.emit("tutorial-next"), n._messageContainer.start()
                    }).to({
                        y: o.move.y
                    }, 250, r), n._selectedDispose(e), n.addChild(n._messageContainer)
                };
                for (var a = n._ImageManager.charaImagesList(), u = 0, c = a.length; u < c; u++) {
                    var h = a[u];
                    n._ImageManager.add(h[0], h[1])
                }
                return n._charaPosition[s.CHARA.FUBUKI] = {
                    x: 476,
                    y: 16,
                    move: {
                        x: 216,
                        y: -50
                    }
                }, n._charaPosition[s.CHARA.MURAKUMO] = {
                    x: 247,
                    y: -70,
                    move: {
                        x: -14,
                        y: -139
                    }
                }, n._charaPosition[s.CHARA.SAZANAMI] = {
                    x: 467,
                    y: 17,
                    move: {
                        x: 210,
                        y: -49
                    }
                }, n._charaPosition[s.CHARA.INADUMA] = {
                    x: 572,
                    y: 55,
                    move: {
                        x: 314,
                        y: -16
                    }
                }, n._charaPosition[s.CHARA.SAMIDARE] = {
                    x: 499,
                    y: 80,
                    move: {
                        x: 240,
                        y: 10
                    }
                }, n._btn = {
                    prev: {
                        def: o.TUTORIAL_MAIN.getTexture(7),
                        hover: o.TUTORIAL_MAIN.getTexture(8)
                    },
                    next: {
                        def: o.TUTORIAL_MAIN.getTexture(1),
                        hover: o.TUTORIAL_MAIN.getTexture(2)
                    },
                    submit: {
                        def: o.TUTORIAL_MAIN.getTexture(5),
                        hover: o.TUTORIAL_MAIN.getTexture(6)
                    }
                }, n.alpha = 0, n
            }
            return n(e, t), e.prototype.initialize = function () {
                this._charaContainer = new PIXI.Container;
                var t = new PIXI.Container;
                t.position.set(0, 600), this._btnSubmit = new PIXI.Sprite(this._btn.submit.def), this._btnSubmit.name = "submit", this._btnSubmit.anchor.set(.5, 0), this._btnSubmit.position.set(r.default.width / 2, 0), this._btnSubmit.interactive = !0, this._btnSubmit.buttonMode = !0, this._btnSubmit.on(l.EventType.CLICK, this._onSubmit).on(l.EventType.MOUSEOVER, this._onToggleSubmitBtn).on(l.EventType.MOUSEOUT, this._onToggleSubmitBtn);
                var e = Math.floor(this._btnSubmit.width / 2),
                    i = Math.floor(this._btnSubmit.height / 2),
                    n = this._btnSubmit.x;
                this._btnPrev = new PIXI.Sprite(this._btn.prev.def), this._btnPrev.anchor.set(1, .5), this._btnPrev.position.set(n - e - 20, i), this._btnPrev.interactive = !0, this._btnPrev.buttonMode = !0, this._btnPrev.on(l.EventType.CLICK, this._onPrevChara).on(l.EventType.MOUSEOVER, this._onTogglePrevBtn).on(l.EventType.MOUSEOUT, this._onTogglePrevBtn), this._btnNext = new PIXI.Sprite(this._btn.next.def), this._btnNext.anchor.set(0, .5), this._btnNext.position.set(n + e + 20, i), this._btnNext.interactive = !0, this._btnNext.buttonMode = !0, this._btnNext.on(l.EventType.CLICK, this._onNextChara).on(l.EventType.MOUSEOVER, this._onToggleNextBtn).on(l.EventType.MOUSEOUT, this._onToggleNextBtn), t.addChild(this._btnPrev, this._btnNext, this._btnSubmit), this.addChild(this._charaContainer, t), this._ImageManager.load(this._create)
            }, e.prototype.start = function () {
                this.alpha = 1, this._ev.emit("tutorial-title", !0, 22), this._nextShow(0)
            }, e.prototype._currentHide = function (t, e) {
                var i = this;
                this._btnNext.interactive = !1, this._btnPrev.interactive = !1, this._btnSubmit.interactive = !1;
                var n = this._charaContainer.getChildAt(t),
                    o = n.getChildByName(this._suffix.bg),
                    r = n.getChildByName(this._suffix.txt),
                    s = n.getChildByName(this._suffix.full),
                    a = createjs.Ease.linear;
                createjs.Tween.get(o).to({
                    alpha: 0
                }, 100, a), createjs.Tween.get(r).to({
                    alpha: 0
                }, 100, a), createjs.Tween.get(s).to({
                    x: s.x + this._charaMoveX,
                    alpha: 0
                }, 150, a).call(function () {
                    n.visible = !1, i._nextShow(e)
                })
            }, e.prototype._nextShow = function (t) {
                var e = this,
                    i = this._chara[t],
                    n = parseInt(i, 10),
                    o = this._charaContainer.getChildAt(t);
                o.visible = !0;
                var r = o.getChildByName(this._suffix.bg),
                    s = o.getChildByName(this._suffix.txt),
                    a = o.getChildByName(this._suffix.full),
                    _ = this._charaPosition[i],
                    l = createjs.Ease.linear;
                createjs.Tween.get(r).to({
                    alpha: 1
                }, 100, l), createjs.Tween.get(s).to({
                    alpha: 1
                }, 100, l), createjs.Tween.get(a).wait(150).to({
                    alpha: 1,
                    x: _.x
                }, 150, l).call(function () {
                    e._btnNext.interactive = !0, e._btnPrev.interactive = !0, e._btnSubmit.interactive = !0, e._ev.emit("tutorial-play-voice", n.toString(), 13)
                }), this._current = t
            }, e.prototype._selectedDispose = function (t) {
                var e = this,
                    i = t.getChildByName(this._suffix.bg),
                    n = t.getChildByName(this._suffix.txt),
                    o = createjs.Ease.linear;
                createjs.Tween.get(i).to({
                    alpha: 0
                }, 100, o), createjs.Tween.get(n).to({
                    alpha: 0
                }, 100, o), createjs.Tween.get(this._btnSubmit).to({
                    alpha: 0
                }, 100, o).call(function () {
                    e._btnSubmit.interactive = !1, e._btnSubmit.buttonMode = !1, e._btnSubmit.off(l.EventType.CLICK, e._onSubmit), e._btnSubmit.off(l.EventType.MOUSEOVER, e._onToggleSubmitBtn), e._btnSubmit.off(l.EventType.MOUSEOUT, e._onToggleSubmitBtn), e._btnSubmit = null
                }), createjs.Tween.get(this._btnPrev).to({
                    alpha: 0
                }, 100, o).call(function () {
                    e._btnPrev.interactive = !1, e._btnPrev.buttonMode = !1, e._btnPrev.off(l.EventType.CLICK, e._onPrevChara), e._btnPrev.off(l.EventType.MOUSEOVER, e._onTogglePrevBtn), e._btnPrev.off(l.EventType.MOUSEOUT, e._onTogglePrevBtn), e._btnPrev = null
                }), createjs.Tween.get(this._btnNext).to({
                    alpha: 0
                }, 100, o).call(function () {
                    e._btnNext.interactive = !1, e._btnNext.buttonMode = !1, e._btnNext.off(l.EventType.CLICK, e._onNextChara), e._btnNext.off(l.EventType.MOUSEOVER, e._onToggleNextBtn), e._btnNext.off(l.EventType.MOUSEOUT, e._onToggleNextBtn), e._btnNext = null
                })
            }, e.prototype.dispose = function () {
                var t = this;
                createjs.Tween.get(this).to({
                    alpha: 0
                }, 100, createjs.Ease.linear).call(function () {
                    t._ev.emit("tutorial-remove-scene")
                }), this._messageContainer.dispose()
            }, e
        }(a.SceneBase);
    e.SceneSelectShip = u
}