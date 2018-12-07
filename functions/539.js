const function539 = function (t, e, i) {
    "use strict";

    function n(t) {
        return 11 == t ? new w.OrganizeScene : 12 == t ? new x.SupplyScene : 13 == t ? new I.RemodelScene : 14 == t ? new T.RepairScene : 15 == t ? new O.ArsenalScene : 16 == t ? new P.SallyScene : 21 == t ? new C.RecordScene : 23 == t ? new k.AlbumScene : 24 == t ? new M.ItemScene : 25 == t ? new S.InteriorScene : 26 == t ? new A.DutyScene : 31 == t ? new j.RevampScene : 33 == t ? new N.MapScene(L.BattleScene, B.BattleResultScene) : 32 == t ? new E.PracticeScene(new L.BattleScene, new B.BattleResultScene) : void 0
    }

    var o = this && this.__extends || function () {
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
    var r = i(0), s = i(7), a = i(31), _ = i(540), l = i(545), u = i(546), c = i(2), h = i(547), p = i(266),
        d = i(550), f = i(552), y = i(553), m = i(13), v = i(555), g = i(642), b = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._end_titlecall = !1, i._TutorialScene = null, i._isTutorialEnd = !1, i._tutorialEnd = function () {
                    i._TutorialScene.emitter.off("tutorial-event-end", i._tutorialEnd), r.default.view.removeChild(i._TutorialScene), i._isTutorialEnd = !0, i._preInitPort()
                }, i._end_connect_api = !1, p.TaskSceneChange.__factory__ = n, r.default.settings.initialize(e), r.default.view.initialize(new v.PortScene), i
            }

            return o(e, t), e.prototype._start = function () {
                this._loadVersionFile()
            }, e.prototype._loadVersionFile = function () {
                var t = this, e = r.default.settings.version, i = "./version.json" + (e ? "?" + e : "");
                axios.get(i).then(function (e) {
                    var i = s.ObjUtil.getObject(e, "data");
                    m.UIImageLoader.setVersionData(i), t._loadTitleResource()
                }).catch(function () {
                    r.default.view.showError("Load Error.version.json.")
                })
            }, e.prototype._loadTitleResource = function () {
                var t = this;
                (new f.TaskLoadResourcesTitle).start(function () {
                    t._showTitle()
                })
            }, e.prototype._showTitle = function () {
                this._pukapuka = new y.PukapukaLayer, this._pukapuka.initialize(), this._pukapuka.visible = !1, r.default.view.addChild(this._pukapuka);
                var t = new h.TitleViewMain;
                t.initialize(), r.default.view.addChild(t), this._loadCommonResources(t)
            }, e.prototype._loadCommonResources = function (t) {
                var e = this;
                new d.TaskLoadResourcesCommon(function (e) {
                    t.setProgress(e)
                }).start(function () {
                    e._showStartPage(t)
                })
            }, e.prototype._showStartPage = function (t) {
                var e = this;
                t.showSecondPageTween(function () {
                    t.waitClickTween(function () {
                        e._playTitleCall(), e._hideTitle(t)
                    })
                })
            }, e.prototype._playTitleCall = function () {
                var t = this, e = Math.floor(86 * Math.random()) + 1;
                r.default.sound.voice.play("titlecall_1", e, function () {
                    var e = Math.floor(49 * Math.random()) + 1;
                    r.default.sound.voice.play("titlecall_2", e, function () {
                        t._end_titlecall = !0, t._preInitPort()
                    })
                }), R.HTML5_AUDIO && r.default.sound.bgm.play(0, !1)
            }, e.prototype._hideTitle = function (t) {
                var e = this;
                this._pukapuka.visible = !0, this._pukapuka.activate(), r.default.view.portMain.visible = !1, createjs.Tween.get(t).to({ alpha: 0 }, 500).call(function () {
                    r.default.view.removeChild(t), t.dispose(), e._connectAPI()
                })
            }, e.prototype._connectAPI = function () {
                var t = this;
                (new a.APIConnector).add(new u.GetIncentiveAPI).add(new _.GetDataAPI).add(new l.RequireInfoAPI).start(function () {
                    t._end_connect_api = !0, r.default.model.basic.firstFlag ? (t._TutorialScene = new g.TutorialScene, t._TutorialScene.visible = !1, t._TutorialScene.alpha = 0, t._TutorialScene.emitter.on("tutorial-event-end", t._tutorialEnd), t._isTutorialEnd = !1, t._preInitPort()) : (t._isTutorialEnd = !0, t._preInitPort())
                })
            }, e.prototype._preInitPort = function () {
                var t = this;
                if (0 != this._end_titlecall && 0 != this._end_connect_api) {
                    if (!1 === this._isTutorialEnd) return r.default.view.addChild(this._TutorialScene), this._TutorialScene.visible = !0, createjs.Tween.get(this._TutorialScene).to({ alpha: 1 }, 600), !1;
                    r.default.view.getNowScene().getPreInitializeTask(0).start(function () {
                        t._hidePukapuka()
                    })
                }
            }, e.prototype._hidePukapuka = function () {
                var t = this;
                r.default.view.portMain.fadeLayer.alpha = 1, r.default.view.portMain.fadeLayer.visible = !0, r.default.view.portMain.visible = !0, createjs.Tween.get(this._pukapuka).to({ alpha: 0 }, 600).call(function () {
                    r.default.view.removeChild(t._pukapuka), t._pukapuka.dispose(), t._pukapuka = null, m.UIImageLoader.clearMemoryCache("title");
                    var e = r.default.view.portMain.ringMenu;
                    e.initialize(), e.prePosition(), createjs.Tween.get(r.default.view.portMain.fadeLayer).to({ alpha: 0 }, 500).call(function () {
                        r.default.view.portMain.fadeLayer.visible = !1, e.startAnimation(), r.default.view.portMain.sideMenu.initialize()
                    }), t._initPort()
                })
            }, e.prototype._initPort = function () {
                var t = this;
                r.default.view.getNowScene().getInitializeTask(0).start(function () {
                    t._endTask()
                })
            }, e
        }(c.TaskBase);
    e.AppInitializeTask = b;
    var w = i(654), x = i(737), I = i(756), T = i(832), O = i(857), P = i(908), C = i(1044), k = i(1060),
        M = i(1090), S = i(1153), A = i(1162), j = i(1192), E = i(1208), N = i(431), L = i(1309), B = i(1448),
        R = i(17)
}