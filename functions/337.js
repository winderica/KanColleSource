const function337 = function (t, e, i) {
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
    var o = i(5),
        r = i(0),
        s = i(1),
        a = i(190),
        _ = i(40),
        l = i(14),
        u = i(13),
        c = i(820),
        h = i(821),
        p = 18,
        d = 20,
        f = 8,
        y = 3,
        m = 1.75,
        v = function (t) {
            function e(e, i) {
                void 0 === i && (i = null);
                var n = t.call(this) || this;
                return n.Dispose = function () {
                    r.default.view.portMain.visible = !0, null != n.voice && r.default.sound.voice.stop(n.voice), null != n.btn && n.btn.dispose(), n.shipModel = null, n.sakura = null, n.voice = null, n.btn = null, n.endAction = null, n.faceRect = null, n.touchArea = null, n.sBG = null, n.sFeather = null, n.sLight = null, n.sBlueLight = null, n.maskBg = null, n.sWhiteFrame = null, n.sBox1 = null, n.sBox2 = null, n.sBox3 = null, n.sBox4 = null, n.sRing = null, n.sText = null, n.sTextBack = null, n.sShip1 = null, n.sShip2 = null, n.sWhiteFrame = null, n.lightTween = null, n.blueTween = null, n.mainTween = null, n.timelineS1 = null, n.tweenS2_1 = null, n.tweenS2_2 = null, n.timelineS2 = null, n.tweenS3_1 = null, n.timelineS3_1 = null, n.timelineS3_2 = null, n.tweenS4_1 = null, n.tweenS4_2 = null, n.tweenS5_1 = null, n.tweenS5_2 = null, n.timelineS5_2 = null, n.timelineS5_2 = null, n.tweenS6_1 = null, n.timelineS6_1 = null, n.tweenS7_1 = null, n.timelineS7_1 = null, n.timelineS7_2 = null, n.timelineS7_3 = null, n.timelineS7_4 = null, u.UIImageLoader.clearMemoryCache("wedding")
                }, n.Hide = function () {
                    null != n.voice && r.default.sound.voice.stop(n.voice), r.default.sound.bgm.stop(), n.stopTween(n.mainTween), n.stopTween(n.timelineS1), n.stopTween(n.tweenS2_1), n.stopTween(n.tweenS2_2), n.stopTween(n.timelineS2), n.stopTween(n.tweenS3_1), n.stopTween(n.timelineS3_1), n.stopTween(n.timelineS3_2), n.stopTween(n.tweenS4_1), n.stopTween(n.tweenS4_2), n.stopTween(n.tweenS5_1), n.stopTween(n.tweenS5_2), n.stopTween(n.timelineS5_1), n.stopTween(n.timelineS5_2), n.stopTween(n.tweenS6_1), n.stopTween(n.timelineS6_1), n.stopTween(n.tweenS7_1), n.stopTween(n.timelineS7_1), n.stopTween(n.timelineS7_2), n.stopTween(n.timelineS7_3), n.stopTween(n.timelineS7_4), n.stopLight(), n.stopBlueTwinkle(), n.hideSakura(), n.removeChildren(0, n.children.length)
                }, n.Play = function (t, e) {
                    (new l.ShipLoader).add(n.shipModel.mstID, !1, "full").load(function () {
                        n.sShip1.texture = r.default.resources.getShip(n.shipModel.mstID, !1, "full"), n.sShip2.texture = r.default.resources.getShip(n.shipModel.mstID, !1, "full"), null == n.faceRect && (n.faceRect = r.default.model.ship_graph.get(n.shipModel.mstID).getFaceRect(!1)), n.sShip1.scale.set(2, 2), n.sShip2.scale.set(1, 1), n.startAnimation(t, e)
                    })
                }, n.playVoice = function () {
                    n.voice = r.default.sound.voice.play(n.shipModel.mstID.toString(), 24)
                }, n.randomLight = function () {
                    n.lightTween = [];
                    for (var t = 0; t < f; t++) ! function (t) {
                        var e = createjs.Tween.get(n.sLight[t], {
                            paused: !0
                        });
                        e.call(function () {
                            var e = n._getWhiteLightTextureNo(Math.floor(10 * Math.random()) + 1);
                            n.sLight[t].texture = h.WEDDING_MARRIAGE.getTexture(e), n.sLight[t].position.set(Math.floor(Math.random() * o.default.width), Math.floor(Math.random() * o.default.height))
                        }).set({
                            visible: !0
                        }).wait(Math.floor(2e3 * Math.random())).to({
                            alpha: 1
                        }, 1e3).wait(500).to({
                            alpha: 0
                        }, 1e3), e.loop = !0, e.setPaused(!0), n.lightTween.push(e)
                    }(t)
                }, n.playRandomLight = function () {
                    for (var t = 0; t < n.lightTween.length; t++) n.lightTween[t].setPaused(!1)
                }, n.startAnimation = function (t, e) {
                    for (var i = 432 / n.faceRect.height, a = 600 - (n.faceRect.x + n.faceRect.width / 2) * i, _ = 240 - (n.faceRect.y + n.faceRect.height / 2) * i, l = [{
                            x: 1200,
                            y: 600,
                            time: 2.6
                        }, {
                            x: 600,
                            y: -150,
                            time: 2.2
                        }, {
                            x: 675,
                            y: -150,
                            time: 2
                        }, {
                            x: 975,
                            y: -150,
                            time: 1.8
                        }, {
                            x: 1200,
                            y: -150,
                            time: 1.6
                        }, {
                            x: 1200,
                            y: 150,
                            time: 1.2
                        }, {
                            x: 1200,
                            y: 525,
                            time: 1
                        }, {
                            x: 300,
                            y: -150,
                            time: 1.6
                        }, {
                            x: 675,
                            y: -150,
                            time: 1.3
                        }, {
                            x: 825,
                            y: -150,
                            time: 1
                        }, {
                            x: 1200,
                            y: 300,
                            time: .7
                        }, {
                            x: 1200,
                            y: 600,
                            time: 1.6
                        }, {
                            x: 525,
                            y: -150,
                            time: 1.6
                        }, {
                            x: 1200,
                            y: 300,
                            time: 1.2
                        }, {
                            x: 750,
                            y: -150,
                            time: .8
                        }, {
                            x: 1200,
                            y: 360,
                            time: 0
                        }, {
                            x: 750,
                            y: -150,
                            time: 1
                        }, {
                            x: 975,
                            y: -150,
                            time: 0
                        }, {
                            x: 1125,
                            y: -150,
                            time: 0
                        }, {
                            x: 1350,
                            y: 150,
                            time: 0
                        }], u = Array(d), c = Array(d), h = 0; h < d; h++) u[h] = n.sFeather[h].position.x, c[h] = n.sFeather[h].position.y;
                    n.endAction = function () {
                        n.touchArea.interactive = !1, n.touchArea.buttonMode = !1, n.Hide(), null != e && e()
                    }, n.touchArea.interactive = !!t, n.touchArea.buttonMode = !!t, n.touchArea.on(s.EventType.CLICK, n.endAction);
                    for (var h = 0; h < 8; h++) n.sText[h].scale.set(0, 0), n.sTextBack[h].scale.set(0, 0);
                    for (var f = Array(d), h = 0; h < d; h++) f[h] = (-3 + Math.floor(6 * Math.random())) * Math.PI / 180, 0 == f[h] && (f[h] = 1 * Math.PI / 180), f[h] = 150 * f[h];
                    var y = function (t) {
                        for (var e = t.target.target.time, i = 0; i < d; i++) n.sFeather[i].position.x = u[i] + (l[i].x - u[i]) * e, n.sFeather[i].position.y = c[i] + (l[i].y - c[i]) * e, n.sFeather[i].position.x -= (l[i].x - u[i]) * (.1 * l[i].time), n.sFeather[i].position.y -= (l[i].y - c[i]) * (.1 * l[i].time), n.sFeather[i].rotation = 0 + f[i] * e
                    };
                    n.randomLight(), n.mainTween = createjs.Tween.get(null).call(function () {
                        var t = {
                            time: 0
                        };
                        n.timelineS1 = new createjs.Timeline([], {
                            start: 0
                        }, {
                            paused: !0
                        }), n.timelineS1.addTween(createjs.Tween.get(n.sBG[0]).set({
                            visible: !0
                        }).to({
                            alpha: 1
                        }, 1e3).call(function () {
                            r.default.sound.bgm.play(133, !1), r.default.view.portMain.visible = !1, n.playRandomLight()
                        }).to({
                            y: 2325
                        }, 6e3)), n.timelineS1.addTween(createjs.Tween.get(t, {
                            onChange: y
                        }).wait(1e3).to({
                            time: 1.4
                        }, 8500)), n.timelineS1.gotoAndPlay("start")
                    }).wait(5200).call(function () {
                        n.tweenS2_1 = createjs.Tween.get(n.maskBg).to({
                            alpha: 1
                        }, 1e3).call(function () {
                            for (var t = 0; t < d; t++) n.sFeather[t].visible = !1;
                            n.sBG[0].visible = !1, n.sBG[1].visible = !0, n.sBG[1].alpha = 1, n.sBG[1].scale.set(.5), n.sBG[1].position.y = o.default.height / 2, n.sWhiteFrame.alpha = 1, n.sShip1.alpha = 0, n.sShip1.position.set(o.default.width / 2 - n.sShip1.width / 2, 2 * -(n.faceRect.y + n.faceRect.height)), n.timelineS2 = new createjs.Timeline([], {
                                start: 0
                            }, {
                                paused: !0
                            }), n.timelineS2.addTween(createjs.Tween.get(n.sBG[1].scale).wait(500).to({
                                x: 1,
                                y: 1
                            }, 8e3)), n.timelineS2.addTween(createjs.Tween.get(n.sBG[1]).wait(500).to({
                                y: 270
                            }, 8e3)), n.timelineS2.gotoAndPlay("start")
                        }).wait(500).to({
                            alpha: 0
                        }, 3e3).call(function () {
                            n.showSakura(600, 0, 600, 720), n.tweenS2_2 = createjs.Tween.get(n.sShip1).to({
                                alpha: 1
                            }, 1e3).wait(1e3).to({
                                alpha: 0
                            }, 1e3)
                        })
                    }).wait(7e3).call(function () {
                        n.tweenS3_1 = createjs.Tween.get(n.maskBg).to({
                            alpha: 1
                        }, 2500).call(function () {
                            n.sBG[1].visible = !1, n.sBG[2].visible = !0, n.sBG[2].alpha = 1, n.sBox1.alpha = 1, n.hideSakura(), n.timelineS3_1 = new createjs.Timeline([], {
                                start: 0
                            }, {
                                paused: !0
                            }), n.timelineS3_1.addTween(createjs.Tween.get(n.sBG[2]).to({
                                y: 720
                            }, 5e3)), n.timelineS3_1.addTween(createjs.Tween.get(n.sBox1).to({
                                y: 357
                            }, 5e3)), n.timelineS3_1.gotoAndPlay("start")
                        }).wait(1800).to({
                            alpha: 0
                        }, 4e3).call(function () {
                            n.sBG[2].alpha = 1, n.sBox1.alpha = 1, n.timelineS3_2 = new createjs.Timeline([], {
                                start: 0
                            }, {
                                paused: !0
                            }), n.timelineS3_2.addTween(createjs.Tween.get(n.sBox1).wait(500).to({
                                alpha: 0
                            }, 1e3).call(function () {
                                n.randomBlueTwinkle(0)
                            })), n.timelineS3_2.addTween(createjs.Tween.get(n.sBox2).to({
                                alpha: 1
                            }, 1e3)), n.timelineS3_2.gotoAndPlay("start")
                        })
                    }).wait(11e3).call(function () {
                        var t = 2 * (n.faceRect.y + n.faceRect.height),
                            e = n.sShip1.height - 720,
                            i = 2 * (e - t) / 3 + t,
                            o = 1 * (e - t) / 3 + t,
                            r = 0 * (e - t) / 3 + t;
                        n.tweenS4_1 = createjs.Tween.get(n.maskBg).to({
                            alpha: 1
                        }, 3500).call(function () {
                            n.sBG[3].visible = !1, n.stopBlueTwinkle(), n.sWhiteFrame.alpha = 0, n.whiteBG.alpha = 1, n.sShip1.alpha = 1, n.sShip1.position.set(0, -e)
                        }).to({
                            alpha: 0
                        }, 1e3).wait(1e3).to({
                            alpha: 1
                        }, 1500).call(function () {
                            n.sShip1.position.set(1200 - n.sShip1.width, -i)
                        }).to({
                            alpha: 0
                        }, 1e3).wait(1e3).to({
                            alpha: 1
                        }, 1500).call(function () {
                            n.sShip1.position.set(0, -o)
                        }).to({
                            alpha: 0
                        }, 1e3).wait(1e3).to({
                            alpha: 1
                        }, 1500).call(function () {
                            n.sShip1.position.set(1200 - n.sShip1.width, -r)
                        }).to({
                            alpha: 0
                        }, 1e3).wait(1e3).to({
                            alpha: 1
                        }, 1500).call(function () {
                            n.sShip1.position.set(600 - n.sShip1.width / 2, -n.sShip1.height)
                        }).wait(1e3).to({
                            alpha: 0
                        }, 1e3).call(function () {
                            n.tweenS4_2 = createjs.Tween.get(n.sShip1).to({
                                y: 2 * -(n.faceRect.y + n.faceRect.height)
                            }, 6e3, createjs.Ease.cubicOut)
                        }).wait(3e3).to({
                            alpha: 1
                        }, 2500)
                    }).wait(26500).call(function () {
                        n.tweenS5_1 = createjs.Tween.get(n.maskBg).call(function () {
                            n.sBG[2].visible = !1, n.sBG[3].visible = !0, n.sBG[3].alpha = 1, n.sBG[3].scale.set(.5), n.whiteBG.alpha = 0, n.sShip1.scale.set(m, m), n.sShip1.position.set(600 - (n.faceRect.x + n.faceRect.width / 2) * m, 15 - n.faceRect.y * m), n.sBox3.position.y = 510
                        }).to({
                            alpha: 0
                        }, 2500).call(function () {
                            n.playVoice(), n.tweenS5_2 = createjs.Tween.get(n.sBox3).wait(1e3).to({
                                y: 564,
                                alpha: 1
                            }, 1e3)
                        }).wait(2e3).call(function () {
                            n.timelineS5_1 = new createjs.Timeline([], {
                                start: 0
                            }, {
                                paused: !0
                            }), n.timelineS5_1.addTween(createjs.Tween.get(n.sBox3).wait(1600).to({
                                alpha: 0
                            }, 1e3)), n.timelineS5_1.addTween(createjs.Tween.get(n.sBox4).wait(1e3).to({
                                alpha: 1
                            }, 1e3).call(function () {
                                n.randomBlueTwinkle(1)
                            })), n.timelineS5_1.addTween(createjs.Tween.get(n.sRing).wait(1e3).to({
                                alpha: 1
                            }, 1e3)), n.timelineS5_1.gotoAndPlay("start")
                        }).wait(2400).call(function () {
                            n.timelineS5_2 = new createjs.Timeline([], {
                                start: 0
                            }, {
                                paused: !0
                            }), n.timelineS5_2.addTween(createjs.Tween.get(n.sBox4).to({
                                alpha: 0
                            }, 1e3)), n.timelineS5_2.addTween(createjs.Tween.get(n.sRing).wait(1e3).wait(1500).call(function () {
                                n.sBG[3].alpha = 1, n.stopBlueTwinkle()
                            }).to({
                                alpha: 0
                            }, 2e3)), n.timelineS5_2.addTween(createjs.Tween.get(n.sBG[3].scale).wait(4200).to({
                                x: 1,
                                y: 1
                            }, 6e3)), n.timelineS5_2.gotoAndPlay("start")
                        })
                    }).wait(13e3).call(function () {
                        var t = 720 / n.sShip2.height,
                            e = 600 - n.sShip2.width * t / 2;
                        n.tweenS6_1 = createjs.Tween.get(n.maskBg).to({
                            alpha: 1
                        }, 3e3).call(function () {
                            n.sBG[3].visible = !1, n.sBG[5].visible = !0, n.sBG[3].alpha = 0, n.sRing.alpha = 0, n.sShip1.alpha = 0, n.sBG[5].alpha = 1, n.sShip2.alpha = 1, n.sShip2.scale.set(t, t), n.sShip2.position.set(e, 0), n.showSakura(0, 0, o.default.width, o.default.height)
                        }).wait(500).to({
                            alpha: 0
                        }).call(function () {
                            n.timelineS6_1 = new createjs.Timeline([], {
                                start: 0
                            }, {
                                paused: !0
                            }), n.timelineS6_1.addTween(createjs.Tween.get(n.sShip2).wait(3700).to({
                                x: a,
                                y: _
                            }, 4e3)), n.timelineS6_1.addTween(createjs.Tween.get(n.sShip2.scale).wait(3700).to({
                                x: i,
                                y: i
                            }, 4e3)), n.timelineS6_1.gotoAndPlay("start")
                        }).wait(5500).to({
                            alpha: 1
                        }, 2500).call(function () {
                            n.sBG[5].visible = !1, n.sBG[5].alpha = 0, n.sShip2.alpha = 0, n.whiteBG.alpha = 1
                        }).to({
                            alpha: 0
                        }, 500)
                    }).wait(12800).call(function () {
                        for (var t = 0; t < 8; t++) n.sText[t].alpha = 0, n.sTextBack[t].alpha = 0, n.sText[t].scale.set(1, 1), n.sTextBack[t].scale.set(1, 1);
                        n.timelineS7_1 = new createjs.Timeline([], {
                            start: 0
                        }, {
                            paused: !0
                        }), n.timelineS7_2 = new createjs.Timeline([], {
                            start: 0
                        }, {
                            paused: !0
                        }), n.timelineS7_3 = new createjs.Timeline([], {
                            start: 0
                        }, {
                            paused: !0
                        }), n.timelineS7_4 = new createjs.Timeline([], {
                            start: 0
                        }, {
                            paused: !0
                        });
                        for (var t = 0; t < 8; t++) {
                            var e = 700 * t;
                            n.sText[t].visible = !0, n.sTextBack[t].visible = !0, n.timelineS7_1.addTween(createjs.Tween.get(n.sText[t]).wait(e).to({
                                alpha: 1
                            }, 100)), n.timelineS7_1.addTween(createjs.Tween.get(n.sTextBack[t]).wait(e).to({
                                alpha: 1
                            }, 100)), n.timelineS7_1.addTween(createjs.Tween.get(n.sText[t].scale).wait(e).to({
                                x: 1.258,
                                y: 1.258
                            }, 133, createjs.Ease.quadOut).to({
                                x: 1.5,
                                y: 1.5
                            }, 200).to({
                                x: 1,
                                y: 1
                            }, 333, createjs.Ease.quadIn)), n.timelineS7_1.addTween(createjs.Tween.get(n.sTextBack[t].scale).wait(e).to({
                                x: 1.258,
                                y: 1.258
                            }, 133, createjs.Ease.quadOut).to({
                                x: 1.5,
                                y: 1.5
                            }, 200).to({
                                x: 1,
                                y: 1
                            }, 333, createjs.Ease.quadIn))
                        }
                        for (var t = 8; t < p - 1; t++) n.timelineS7_2.addTween(createjs.Tween.get(n.sText[t]).set({
                            visible: !0
                        }).to({
                            alpha: 1
                        }, 1e3)), n.timelineS7_2.addTween(createjs.Tween.get(n.sTextBack[t]).set({
                            visible: !0
                        }).to({
                            alpha: 1
                        }, 1e3));
                        n.timelineS7_3.addTween(createjs.Tween.get(n.sText[17]).set({
                            visible: !0
                        }).to({
                            alpha: 1
                        }, 1e3)), n.timelineS7_3.addTween(createjs.Tween.get(n.sTextBack[17]).set({
                            visible: !0
                        }).to({
                            alpha: 1
                        }, 1e3)), n.tweenS7_1 = createjs.Tween.get(null).call(function () {
                            n.timelineS7_1.gotoAndPlay("start")
                        }).wait(5600).call(function () {
                            n.timelineS7_2.gotoAndPlay("start")
                        }).wait(1e3).call(function () {
                            n.timelineS7_3.gotoAndPlay("start")
                        }).wait(800).wait(3e3).call(function () {
                            for (var t = 0; t < p; t++) n.timelineS7_4.addTween(createjs.Tween.get(n.sText[t]).to({
                                alpha: 0
                            }, 1500).set({
                                visible: !1
                            })), n.timelineS7_4.addTween(createjs.Tween.get(n.sTextBack[t]).to({
                                alpha: 0
                            }, 1500).set({
                                visible: !1
                            }));
                            n.timelineS7_4.gotoAndPlay("start")
                        }).wait(1500).call(function () {
                            n.showButton()
                        })
                    })
                }, n.stopLight = function () {
                    if (null != n.lightTween)
                        for (var t = 0; t < n.lightTween.length; t++) n.stopTween(n.lightTween[t]), n.sLight[t].alpha = 0, n.sLight[t].visible = !1
                }, n.randomBlueTwinkle = function (t) {
                    var e = 0 == t ? 210 : 180,
                        i = 0 == t ? 75 : 180,
                        o = 0 == t ? 495 : 510,
                        r = 0 == t ? 360 : 465;
                    n.blueTween = [];
                    for (var s = 0; s < y; s++) ! function (t) {
                        var s = createjs.Tween.get(n.sBlueLight[t]);
                        s.call(function () {
                            n.sBlueLight[t].position.set(o + Math.floor(Math.random() * e), r + Math.floor(Math.random() * i))
                        }).set({
                            visible: !0
                        }).wait(Math.floor(600 * Math.random())).to({
                            alpha: 1
                        }, 300).to({
                            alpha: 0
                        }, 300).set({
                            visible: !1
                        }), s.loop = !0, n.blueTween.push(s)
                    }(s)
                }, n.stopBlueTwinkle = function () {
                    if (null != n.blueTween)
                        for (var t = 0; t < n.blueTween.length; t++) n.stopTween(n.blueTween[t]), n.sBlueLight[t].alpha = 0, n.sBlueLight[t].visible = !1
                }, n.showSakura = function (t, e, i, o) {
                    var r = new PIXI.Rectangle(t, e, i, o);
                    n.sakura.startAnimation(r)
                }, n.hideSakura = function () {
                    null != n.sakura && n.sakura.stopAnimation()
                }, n.showButton = function () {
                    n.btn = new _.GearBtnHome, n.btn.position.set(1130, 648), n.btn.initialize(), n.btn.activate(), n.addChild(n.btn), n.touchArea.interactive = !0, n.touchArea.buttonMode = !0
                }, n.shipModel = r.default.model.ship.getMst(e), n.sShip1 = new PIXI.Sprite, n.sShip2 = new PIXI.Sprite, n.sakura = new a.Sakura, n.faceRect = i, n
            }
            return n(e, t), e.prototype.Initialize = function () {
                this.sShip1.anchor.set(0), this.sShip1.position.set(o.default.width / 2, o.default.height / 2), this.sShip1.alpha = 0, this.sShip2.anchor.set(0), this.sShip2.position.set(o.default.width / 2, o.default.height / 2), this.sShip2.alpha = 0, this.sBG = Array(5), this.sBG[0] = this.createSprite(c.WEDDING_MARRIAGE_BG.getTexture(0), 0, 1, 0, o.default.height, 0), this.sBG[1] = this.createSprite(c.WEDDING_MARRIAGE_BG.getTexture(4), .5, .5, o.default.width / 2, 360, 0), this.sBG[2] = this.createSprite(c.WEDDING_MARRIAGE_BG.getTexture(2), .5, 1, o.default.width / 2, o.default.height + 450, 0), this.sBG[3] = this.createSprite(c.WEDDING_MARRIAGE_BG.getTexture(1), .5, .5, o.default.width / 2, o.default.height / 2, 0), this.sBG[4] = this.createSprite(c.WEDDING_MARRIAGE_BG.getTexture(1), .5, .5, o.default.width / 2, o.default.height / 2, 0), this.sBG[5] = this.createSprite(c.WEDDING_MARRIAGE_BG.getTexture(3), .5, .5, o.default.width / 2, o.default.height / 2, 0);
                for (var t = 0; t < this.sBG.length; t++) this.sBG[t].visible = !1;
                this.whiteBG = new PIXI.Graphics, this.whiteBG.beginFill(16777215), this.whiteBG.drawRect(0, 0, o.default.width, o.default.height), this.whiteBG.endFill(), this.whiteBG.alpha = 0, this.maskBg = new PIXI.Graphics, this.maskBg.beginFill(16777215), this.maskBg.drawRect(0, 0, o.default.width, o.default.height), this.maskBg.endFill(), this.maskBg.alpha = 0, this.touchArea = new PIXI.Graphics, this.touchArea.beginFill(16777215), this.touchArea.drawRect(0, 0, o.default.width, o.default.height), this.touchArea.endFill(), this.touchArea.alpha = .001, this.sFeather = Array(d);
                for (var e = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3], t = 0; t < d; t++) {
                    var i = this.getFeatherType(e[t]);
                    this.sFeather[t] = this.createSprite(h.WEDDING_MARRIAGE.getTexture(i), .5, .5, -150, 870, 1)
                }
                this.sLight = Array(f);
                for (var t = 0; t < f; t++) {
                    var n = this._getWhiteLightTextureNo(t);
                    this.sLight[t] = this.createSprite(h.WEDDING_MARRIAGE.getTexture(n), .5, .5, 0, 0, 0)
                }
                this.sBlueLight = Array(y);
                for (var t = 0; t < y; t++) this.sBlueLight[t] = this.createSprite(h.WEDDING_MARRIAGE.getTexture(25), .5, .5, 0, 0, 0);
                this.sWhiteFrame = this.createSprite(h.WEDDING_MARRIAGE.getTexture(24), 0, 0, 0, 0, 0), this.sBox1 = this.createSprite(h.WEDDING_MARRIAGE.getTexture(21), .5, .5, 615, 807, 0), this.sBox2 = this.createSprite(h.WEDDING_MARRIAGE.getTexture(20), .5, .5, 615, 357, 0), this.sBox3 = this.createSprite(h.WEDDING_MARRIAGE.getTexture(23), .5, .5, 600, 450, 0), this.sBox4 = this.createSprite(h.WEDDING_MARRIAGE.getTexture(22), .5, .5, 600, 564, 0), this.sRing = this.createSprite(h.WEDDING_MARRIAGE.getTexture(26), .5, .5, 600, 564, 0), this.sText = [this.createSprite(h.WEDDING_MARRIAGE.getTexture(29), .5, .5, 285, 299, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(37), .5, .5, 324, 339, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(43), .5, .5, 384, 329, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(37), .5, .5, 441, 341, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(31), .5, .5, 497, 308, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(37), .5, .5, 570, 341, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(39), .5, .5, 632, 276, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(37), .5, .5, 645, 341, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(27), .5, .5, 705, 360, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(37), .5, .5, 743, 360, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(44), .5, .5, 780, 360, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(37), .5, .5, 818, 360, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(32), .5, .5, 855, 360, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(37), .5, .5, 893, 360, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(27), .5, .5, 930, 360, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(37), .5, .5, 968, 360, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(41), .5, .5, 1005, 360, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(35), .5, .5, 606, 516, 0)], this.sTextBack = [this.createSprite(h.WEDDING_MARRIAGE.getTexture(30), .5, .5, 285, 299, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(38), .5, .5, 324, 339, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(46), .5, .5, 384, 329, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(38), .5, .5, 441, 341, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(34), .5, .5, 497, 308, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(38), .5, .5, 570, 341, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(40), .5, .5, 632, 276, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(38), .5, .5, 645, 341, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(28), .5, .5, 705, 360, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(38), .5, .5, 743, 360, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(45), .5, .5, 780, 360, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(38), .5, .5, 818, 360, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(33), .5, .5, 855, 360, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(38), .5, .5, 893, 360, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(28), .5, .5, 930, 360, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(38), .5, .5, 968, 360, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(42), .5, .5, 1005, 360, 0), this.createSprite(h.WEDDING_MARRIAGE.getTexture(36), .5, .5, 606, 516, 0)], this.addChild(this.sBG[0]), this.addChild(this.sBG[1]);
                for (var t = 0; t < d; t++) this.addChild(this.sFeather[t]);
                this.addChild(this.sBG[2]), this.addChild(this.sBox1), this.addChild(this.sBox2), this.addChild(this.sBG[5]), this.addChild(this.sBG[3]), this.addChild(this.whiteBG), this.addChild(this.sShip2), this.addChild(this.sakura), this.addChild(this.sShip1), this.addChild(this.sBox3), this.addChild(this.sBox4), this.addChild(this.sRing);
                for (var t = 0; t < p; t++) this.sTextBack[t].visible = !1, this.addChild(this.sTextBack[t]);
                for (var t = 0; t < p; t++) this.sText[t].visible = !1, this.addChild(this.sText[t]);
                this.addChild(this.sWhiteFrame);
                for (var t = 0; t < y; t++) this.addChild(this.sBlueLight[t]);
                for (var t = 0; t < f; t++) this.addChild(this.sLight[t]);
                this.addChild(this.maskBg), this.addChild(this.touchArea)
            }, e.prototype.PreLoad = function (t) {
                var e = new u.UIImageLoader("wedding");
                e.add("wedding_marriage_bg.json"), e.add("wedding_marriage.json"), e.load(function () {
                    null != t && t()
                })
            }, e.prototype.stopTween = function (t) {
                null != t && (t.setPaused(!0), t.removeAllEventListeners())
            }, e.prototype.createSprite = function (t, e, i, n, o, r) {
                var s = new PIXI.Sprite(t);
                return s.anchor.set(e, i), s.position.set(n, o), s.alpha = r, s
            }, e.prototype.getFeatherType = function (t) {
                switch (t) {
                    case 0:
                        return 0;
                    case 1:
                        return 1;
                    case 2:
                        return 2;
                    case 3:
                        return 3;
                    default:
                        return 0
                }
            }, e.prototype._getWhiteLightTextureNo = function (t) {
                return [9, 12, 13, 14, 15, 16, 17, 18, 19, 10, 11][t]
            }, e
        }(PIXI.Container);
    e.MarriageAnimation = v
}