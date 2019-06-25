const function1345 = function (t, e, i) {
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
    var o = i(27),
        r = i(39),
        s = i(2),
        a = i(16),
        _ = i(1346),
        u = i(1347),
        l = i(1348),
        c = i(1349),
        h = i(1350),
        p = i(1351),
        d = function (t) {
            function e(e, i, n, o, r) {
                var s = t.call(this) || this;
                return s._scene = e, s._ship = i, s._damage = n, s._type = o, s._plane = r, s
            }
            return n(e, t), e.prototype._start = function () {
                var t = this,
                    e = 500 * Math.random();
                this._banner = this._scene.view.bannerGroupLayer.getBanner(this._ship);
                var i = null;
                if (1 == this._type) i = new r.WaitTask(500);
                else if (3 == this._type) i = new _.AnimAntiAircraftFunshin(this._banner);
                else if (2 == this._type) i = new l.AnimAntiAircraftKoukaku(this._banner);
                else if (5 == this._type) {
                    var n = new o.ParallelTask;
                    n.add(new c.AnimAntiAircraftSanshikidan(this._banner)), n.add(new h.AnimAntiAircraftSanshikidan2(this._banner)), i = n
                } else if (4 == this._type) i = new u.AnimAntiAircraftFunshinKai2(this._banner);
                else if (6 == this._type) {
                    var n = new o.ParallelTask;
                    n.add(new c.AnimAntiAircraftSanshikidan(this._banner)), n.add(new u.AnimAntiAircraftFunshinKai2(this._banner)), i = n
                }
                if (null == i ? this._endTask() : (this._banner.moveFront(), this._createGuns(), this._banner.addChild(this._gun1), this._banner.addChild(this._gun2), this._gun1.activate(), this._gun2.activate(), this._planeExplosion(), createjs.Tween.get(null).wait(e).call(function () {
                        i.start(function () {
                            t._endTask()
                        })
                    })), Math.floor(this._damage) <= 0 && (4 == this._type || 6 == this._type)) {
                    var s = this._banner.getGlobalPos(!1);
                    this._scene.view.bannerInfoLayer.showDanmaku(s, e)
                } else if (5 == this._type || 6 == this._type) {
                    var s = this._banner.getGlobalPos(!1);
                    this._scene.view.bannerInfoLayer.showSanshiki(s, e)
                }
            }, e.prototype._planeExplosion = function () {
                var t = this._scene,
                    e = this._type,
                    i = this._plane;
                new p.TaskAirWarAntiAircraftExplosion(t, e, i).start()
            }, e.prototype._endTask = function () {
                null != this._gun1 && (null != this._gun1.parent && this._gun1.parent.removeChild(this._gun1), this._gun1.deactivate()), null != this._gun2 && (null != this._gun2.parent && this._gun2.parent.removeChild(this._gun2), this._gun2.deactivate()), this._scene = null, this._ship = null, this._type = null, this._banner.moveDefault(), this._banner = null, this._gun1 = null, this._gun2 = null, t.prototype._endTask.call(this)
            }, e.prototype._createGuns = function () {
                this._gun1 = new f, this._gun1.position.set(26, 20), this._gun1.rotation = (45 * -Math.random() - 30) / 180 * Math.PI, this._gun2 = new f, this._gun2.position.set(35, 30), this._gun2.rotation = (45 * -Math.random() - 30) / 180 * Math.PI
            }, e
        }(s.TaskBase);
    e.TaskAirWarAntiAircraft = d;
    var f = function (t) {
        function e() {
            var e = t.call(this) || this,
                i = a.BATTLE_MAIN.getTexture(122);
            return e._content = new PIXI.Sprite(i), e._content.anchor.set(0, .5), e.addChild(e._content), e
        }
        return n(e, t), e.prototype.activate = function () {
            var t = this;
            null == this._t && (this._t = createjs.Tween.get(this._content, {
                loop: !0
            }).call(function () {
                t._content.visible = !0, t._content.position.set(0, 0)
            }).wait(33).call(function () {
                t._content.position.set(30, 0)
            }).wait(33).call(function () {
                t._content.visible = !1
            }).wait(33))
        }, e.prototype.deactivate = function () {
            null != this._t && (this._t.setPaused(!0), this._t = null)
        }, e
    }(PIXI.Container)
}