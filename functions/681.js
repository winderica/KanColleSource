const function681 = function (t, e, i) {
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
    var o = i(275),
        r = i(276),
        s = i(34),
        a = i(163),
        _ = i(214),
        u = i(133),
        l = i(109),
        c = i(682),
        h = i(683),
        p = i(684),
        d = i(685),
        f = i(686),
        y = i(687),
        m = i(688),
        g = i(690),
        v = i(692),
        b = function (t) {
            function e(e) {
                void 0 === e && (e = 0);
                var i = t.call(this) || this;
                return i._sceneId = e, i._isStart = !0, i._isGoNextPath = !0, i._shipId = null, i._onSceneStart = function () {
                    switch (i._isStart) {
                        case !0:
                            return i._isStart = !1, i._ViewMain.start(), i._CurrentScene.start(), i;
                        case !1:
                            return i._loader.hide(), i._NextScene.start(), i._isGoNextPath && i._ev.emit("tutorial-next"), i
                    }
                }, i._onNextScene = function () {
                    if (i._loader.show(), i._sceneId++, i._NextScene = i._createNextScene(), i._SoundManager.voice.stopAll(), null == i._NextScene) return i.dispose(), !1;
                    i._NextScene.initialize(), i._ViewScene.addChild(i._NextScene), i._CurrentScene.dispose(), i._CurrentScene = i._NextScene
                }, i._onRemoveScene = function () {
                    i._ViewScene.removeChildAt(0), i._CurrentScene = i._NextScene
                }, i._onPlayVoice = function (t, e, n) {
                    void 0 === n && (n = null), i._SoundManager.voice.play(t, e, n)
                }, i._saveShipId = function (t) {
                    i._shipId = t
                }, i._ImageManager = new c.ImageManager(i._create.bind(i)), i._SoundManager = new o.SoundManager, i._ev = new PIXI.utils.EventEmitter, i._ev.on("tutorial-scene-start", i._onSceneStart).on("tutorial-next-scene", i._onNextScene).on("tutorial-remove-scene", i._onRemoveScene).on("tutorial-play-voice", i._onPlayVoice).on("tutorial-save-ship", i._saveShipId), i.emitter = new PIXI.utils.EventEmitter, i
            }
            return n(e, t), e.prototype.start = function () {
                this._ViewMain.start(), this._CurrentScene.start()
            }, e.prototype._create = function () {
                var t = new PIXI.Sprite(this._ImageManager.use(l.IMAGE_FILE.BG));
                this._ViewMain = new h.ViewMain(this._ImageManager, this._ev), this._ViewScene = new PIXI.Container, this._CurrentScene = this._createNextScene(), this._CurrentScene.initialize(), this._ViewScene.addChild(this._CurrentScene), this._loader = new r.LoadingBox, this._loader.hide(), this.addChild(t, this._ViewScene, this._ViewMain, this._loader)
            }, e.prototype._createNextScene = function () {
                switch (this._sceneId) {
                    case 0:
                        return this._isGoNextPath = !0, new m.SceneInputName(this._ev);
                    case 1:
                        return this._isGoNextPath = !0, new g.SceneSelectShip(this._ImageManager, this._ev);
                    case 2:
                        return this._isGoNextPath = !0, new p.SceneExplain1(this._ev);
                    case 3:
                        return this._isGoNextPath = !0, new d.SceneExplain2(this._ev);
                    case 4:
                        return this._isGoNextPath = !0, new f.SceneExplain3(this._ev);
                    case 5:
                        return this._isGoNextPath = !1, new y.SceneFinal(this._ImageManager, this._ev, this._shipId);
                    default:
                        return null
                }
            }, e.prototype.dispose = function () {
                var t = this;
                this._ev.off("tutorial-scene-start", this._onSceneStart).off("tutorial-next-scene", this._onNextScene).off("tutorial-remove-scene", this._onRemoveScene).off("tutorial-play-voice", this._onPlayVoice).off("tutorial-save-ship", this._saveShipId);
                var e = new s.APIConnector,
                    i = parseInt(this._shipId, 10);
                e.add(new v.APIFirstShip(i)), e.add(new a.UserDataAPI), e.add(new _.UserShipAPI), e.add(new u.UserSlotItemAPI), e.start(function () {
                    t._loader.hide(), createjs.Tween.get(t).to({
                        alpha: 0
                    }, 400, createjs.Ease.linear).call(function () {
                        t._ViewMain.dispose(), t._CurrentScene.dispose(), t._CurrentScene = null, t._NextScene = null, t.removeChildren(), t.emitter.emit("tutorial-event-end")
                    })
                })
            }, e
        }(PIXI.Container);
    e.TutorialScene = b
}