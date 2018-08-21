// the function called by `475.js`
const function534 = function (t, e, i) {
    "use strict";

    function n(t) {
        switch (t) {
            case 11:
                // 編成
                return new w.OrganizeScene;
            case 12:
                // 補給
                return new x.SupplyScene;
            case 13:
                // 改装
                return new I.RemodelScene;
            case 14:
                // 入渠
                return new T.RepairScene;
            case 15:
                // 工廠
                return new O.ArsenalScene;
            case 16:
                // 出撃
                return new P.SallyScene;
            case 21:
                // 戦績表示
                return new C.RecordScene;
            // case 22:
            // 多分 友軍艦隊？
            case 23:
                // 図鑑表示
                return new k.AlbumScene;
            case 24:
                // アイテム
                return new M.ItemScene;
            case 25:
                // 模様替え
                return new S.InteriorScene;
            case 26:
                // 任務
                return new A.DutyScene;
            case 31:
                // 改修工廠
                return new j.RevampScene;
            case 32:
                // 演習
                return new E.PracticeScene(new N.BattleScene, new B.BattleResultScene);
            case 33:
                // マップ
                return new L.MapScene(N.BattleScene, B.BattleResultScene);
            default:
                return undefined;
        }
    }

    /*
     * It is interesting that the code below is compiled from Typescript,
     * so we can believe that the HTML5 version of 艦これ is written in TS.
     * `o` implements `extends` in TS.
     * To understand it, there is a PERFECT answer to read:
     * https://stackoverflow.com/a/46458070/9140339
     */
    var o = this && this.__extends
        || function () {
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
    var r = i(0), s = i(7), a = i(34), _ = i(535), u = i(540), l = i(541), c = i(2), h = i(542), p = i(270),
        d = i(545), f = i(547), y = i(548), v = i(24), g = i(550), m = i(637),
        b = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._end_titlecall = !1, i._TutorialScene = null, i._isTutorialEnd = !1, i._tutorialEnd = function () {
                    i._TutorialScene.emitter.off("tutorial-event-end", i._tutorialEnd), r.default.view.removeChild(i._TutorialScene), i._isTutorialEnd = !0, i._preInitPort()
                }, i._end_connect_api = !1, p.TaskSceneChange.__factory__ = n, r.default.settings.initialize(e), r.default.view.initialize(new g.PortScene), i
            }

            o(e, t);
            e.prototype._start = function () {
                this._loadVersionFile()
            };
            e.prototype._loadVersionFile = function () {
                var t = this, e = r.default.settings.version, i = "./version.json" + (e ? "?" + e : "");
                axios.get(i).then(function (e) {
                    var i = s.ObjUtil.getObject(e, "data");
                    v.UIImageLoader.setVersionData(i), t._loadTitleResource()
                }).catch(function () {
                    r.default.view.showError("Load Error.version.json.")
                })
            };
            e.prototype._loadTitleResource = function () {
                var t = this;
                (new f.TaskLoadResourcesTitle).start(function () {
                    t._showTitle()
                })
            };
            e.prototype._showTitle = function () {
                // `ぷかぷか` is the loading interface when entering game (小黑船 in Chinese)
                this._pukapuka = new y.PukapukaLayer, this._pukapuka.initialize(), this._pukapuka.visible = !1, r.default.view.addChild(this._pukapuka);
                var t = new h.TitleViewMain;
                t.initialize(), r.default.view.addChild(t), this._loadCommonResources(t)
            };
            e.prototype._loadCommonResources = function (t) {
                var e = this;
                new d.TaskLoadResourcesCommon(function (e) {
                    t.setProgress(e)
                }).start(function () {
                    e._showStartPage(t)
                })
            };
            // start page is the welcome interface
            e.prototype._showStartPage = function (t) {
                var e = this;
                t.showSecondPageTween(function () {
                    t.waitClickTween(function () {
                        e._playTitleCall(), e._hideTitle(t)
                    })
                })
            };
            /*
             * title call is
             * ①: `行きますよ、暁の水平線に、勝利を刻みなさい！`
             * and
             * ②: `提督が、鎮守府に着任しました、これより、艦隊の指揮に入ります！`
             */
            e.prototype._playTitleCall = function () {
                // there are 84 kinds of voice ①!!!
                var t = this, e = Math.floor(84 * Math.random()) + 1;
                r.default.sound.voice.play("titlecall_1", e, function () {
                    // and 47 kinds of voice ②!
                    var e = Math.floor(47 * Math.random()) + 1;
                    r.default.sound.voice.play("titlecall_2", e, function () {
                        t._end_titlecall = !0, t._preInitPort()
                    })
                })
            };
            e.prototype._hideTitle = function (t) {
                var e = this;
                this._pukapuka.visible = !0, this._pukapuka.activate(), r.default.view.portMain.visible = !1, createjs.Tween.get(t).to({ alpha: 0 }, 500).call(function () {
                    r.default.view.removeChild(t), t.dispose(), e._connectAPI()
                })
            };
            e.prototype._connectAPI = function () {
                var t = this;
                (new a.APIConnector).add(new l.GetIncentiveAPI).add(new _.GetDataAPI).add(new u.RequireInfoAPI).start(function () {
                    t._end_connect_api = !0, r.default.model.basic.firstFlag ? (t._TutorialScene = new m.TutorialScene, t._TutorialScene.visible = !1, t._TutorialScene.alpha = 0, t._TutorialScene.emitter.on("tutorial-event-end", t._tutorialEnd), t._isTutorialEnd = !1, t._preInitPort()) : (t._isTutorialEnd = !0, t._preInitPort())
                })
            };
            e.prototype._preInitPort = function () {
                var t = this;
                if (0 != this._end_titlecall && 0 != this._end_connect_api) {
                    if (!1 === this._isTutorialEnd) return r.default.view.addChild(this._TutorialScene), this._TutorialScene.visible = !0, createjs.Tween.get(this._TutorialScene).to({ alpha: 1 }, 600), !1;
                    r.default.view.getNowScene().getPreInitializeTask(0).start(function () {
                        t._hidePukapuka()
                    })
                }
            };
            e.prototype._hidePukapuka = function () {
                var t = this;
                r.default.view.portMain.fadeLayer.alpha = 1, r.default.view.portMain.fadeLayer.visible = !0, r.default.view.portMain.visible = !0, createjs.Tween.get(this._pukapuka).to({ alpha: 0 }, 600).call(function () {
                    r.default.view.removeChild(t._pukapuka), t._pukapuka.dispose(), t._pukapuka = null;
                    var e = r.default.view.portMain.ringMenu;
                    e.initialize(), e.prePosition(), createjs.Tween.get(r.default.view.portMain.fadeLayer).to({ alpha: 0 }, 500).call(function () {
                        r.default.view.portMain.fadeLayer.visible = !1, e.startAnimation(), r.default.view.portMain.sideMenu.initialize()
                    }), t._initPort()
                })
            };
            e.prototype._initPort = function () {
                var t = this;
                r.default.view.getNowScene().getInitializeTask(0).start(function () {
                    t._endTask()
                })
            };
            return e;
        }(c.TaskBase);
    e.AppInitializeTask = b;
    var w = i(649), x = i(732), I = i(751), T = i(826), O = i(851), P = i(901), C = i(1039), k = i(1055),
        M = i(1085), S = i(1149), A = i(1157), j = i(1187), E = i(1203), L = i(432), N = i(1303), B = i(1439)
}