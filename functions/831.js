const function831 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(293),
        o = i(832),
        r = i(833),
        s = i(13),
        a = i(0),
        _ = function () {
            function t(t, e, i) {
                this._stage = e, this._animationKeys = i, this._easingMap = r.genEasingMap(), this._ship_mst_id = t
            }
            return t.prototype._genAnimation = function (t) {
                var e = this;
                switch (t.type) {
                    case o.SpecialRemodelStartKey.SHIP_CAMERA:
                        var i = t,
                            r = 0,
                            s = Object(i).hasOwnProperty("duration");
                        s && (r = i.duration);
                        var _ = this._getEasing(t),
                            l = n.$_$.Parallel(),
                            u = Object(i).hasOwnProperty("position");
                        u && l.push(function () {
                            return n.$_$.Value(e._stage.camera.position, {
                                x: i.position.x,
                                y: i.position.y
                            }, r, _)
                        }), Object(i).hasOwnProperty("scale") && l.push(function () {
                            return n.$_$.Value(e._stage.camera.scale, {
                                x: i.scale,
                                y: i.scale
                            }, r, _)
                        });
                        var c = Object(i).hasOwnProperty("alpha");
                        return c && l.push(function () {
                            return n.$_$.Value(e._stage.camera, {
                                alpha: i.alpha
                            }, r, _)
                        }), l;
                    case o.SpecialRemodelStartKey.DELAY:
                        var h = t,
                            p = h.duration;
                        return n.$_$.Delay(p);
                    case o.SpecialRemodelStartKey.PLAY_VOICE:
                        return n.$_$.Call(function () {
                            a.default.sound.voice.play(e._ship_mst_id.toString(), 10)
                        });
                    case o.SpecialRemodelStartKey.NAME_TEXT:
                        var d = t,
                            f = this._getEasing(d),
                            y = 0,
                            s = Object(d).hasOwnProperty("duration");
                        s && (y = d.duration);
                        var l = n.$_$.Parallel(),
                            c = Object(d).hasOwnProperty("alpha");
                        if (c) {
                            var m = d.alpha;
                            l.push(function () {
                                return n.$_$.Value(e._stage.textName, {
                                    alpha: m
                                }, y, f)
                            })
                        }
                        var u = Object(d).hasOwnProperty("position");
                        if (u) {
                            var g = d.position;
                            l.push(function () {
                                return n.$_$.Value(e._stage.textName.position, {
                                    x: g.x,
                                    y: g.y
                                }, y, f)
                            })
                        }
                        return l;
                    case o.SpecialRemodelStartKey.CLASS_TEXT:
                        var v = t,
                            b = this._getEasing(v),
                            w = 0,
                            s = Object(v).hasOwnProperty("duration");
                        s && (w = v.duration);
                        var l = n.$_$.Parallel(),
                            c = Object(v).hasOwnProperty("alpha");
                        if (c) {
                            var x = v.alpha;
                            l.push(function () {
                                return n.$_$.Value(e._stage.textClass, {
                                    alpha: x
                                }, w, b)
                            })
                        }
                        var u = Object(v).hasOwnProperty("position");
                        if (u) {
                            var I = v.position;
                            l.push(function () {
                                return n.$_$.Value(e._stage.textClass.position, {
                                    x: I.x,
                                    y: I.y
                                }, w, b)
                            })
                        }
                        return l;
                    case o.SpecialRemodelStartKey.BACK_GROUND:
                        var T = t,
                            p = T.duration,
                            O = T.color,
                            C = this._getEasing(T);
                        return this._stage.backgroundColorFilter.ma = 1, this._stage.backgroundColorFilter.aa = 1, this._stage.backgroundColorFilter.ar = ((16711680 & O) >> 16) / 255, this._stage.backgroundColorFilter.ag = ((65280 & O) >> 8) / 255, this._stage.backgroundColorFilter.ab = (255 & O) / 255, n.$_$.Value(this._stage.backgroundColorFilter, {
                            factor: 1
                        }, p, C);
                    default:
                        return n.$_$.Call(function () {})
                }
            }, t.prototype._getEasing = function (t, e) {
                void 0 === e && (e = r.Easing.linear);
                return t.hasOwnProperty("easing") ? this._easingMap[t.easing] : this._easingMap[e]
            }, t.prototype.play = function () {
                this._play()
            }, t.prototype._play = function () {
                var t = this;
                this._stage.goBackArea.visible = !1, this._stage.goBackArea.interactive = !1, this._stage.ship.shadow.x = 20, this._stage.textClass.alpha = 0, this._stage.textName.alpha = 0, this._stage.backGround.alpha = 1;
                var e = this._genSequenceAnimations(this._animationKeys),
                    i = n.$_$.Parallel(function () {
                        return e
                    }, function () {
                        return n.$_$.Value(t._stage.ship.shadow, {
                            x: 35
                        }, 5e3)
                    }, function () {
                        return n.$_$.Value(t._stage.blackOver, {
                            alpha: 0
                        }, 3e3)
                    }),
                    o = n.$_$.Sequence(function () {
                        return i
                    }, function () {
                        return n.$_$.Delay(300)
                    });
                this._animation = e, o.execute(function () {
                    o.dispose(), t._animation = null, t._onCompleteAnimation()
                })
            }, t.prototype._onCompleteAnimation = function () {
                var t = this;
                this._stage.goBackArea.visible = !0, this._stage.goBackArea.interactive = !0, this._stage.goBackArea.onClick = function () {
                    return t._onClickGoBack()
                }
            }, t.prototype._onClickGoBack = function () {
                var t = this;
                this._stage.goBackArea.onClick = function () {};
                var e = n.$_$.Value(this._stage, {
                    alpha: 0
                }, 150);
                e.execute(function () {
                    e.dispose(), t.onComplete()
                })
            }, t.prototype.dispose = function () {
                this._animation && (this._animation.interrupt(), this._animation.dispose()), this.onComplete = null, this._animation = null, this._animationKeys = null, this._stage = null
            }, t.prototype._genSequenceAnimations = function (t) {
                var e = this,
                    i = n.$_$.Sequence();
                return t.forEach(function (t) {
                    var n = null;
                    if (t instanceof Array) {
                        var o = e._genParallelAnimations(t);
                        n = function () {
                            return o
                        }
                    } else n = function () {
                        return e._genAnimation(t)
                    };
                    i.push(n)
                }), i
            }, t.prototype._genParallelAnimations = function (t) {
                var e = this,
                    i = n.$_$.Parallel();
                return t.forEach(function (t) {
                    var n = null;
                    if (t instanceof Array) {
                        var o = e._genSequenceAnimations(t);
                        n = function () {
                            return o
                        }
                    } else n = function () {
                        return e._genAnimation(t)
                    };
                    i.push(n)
                }), i
            }, t
        }();
    e.SpecialRemodelStart = _;
    var l = function () {
        function t(t) {
            this._ship_mst_id = t
        }
        return t.prototype.start = function () {
            var t = this,
                e = new s.ShipLoader;
            e.add(this._ship_mst_id, !1, "full_x2"), e.add(this._ship_mst_id, !1, "text_class"), e.add(this._ship_mst_id, !1, "text_name"), e.load(function () {
                t.onComplete()
            })
        }, t.prototype.dispose = function () {
            this.onComplete = null, this._ship_mst_id = null
        }, t
    }();
    e.SpecialRemodelStartInitializer = l
}