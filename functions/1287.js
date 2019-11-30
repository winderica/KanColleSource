const function1287 = function (t, e, i) {
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
    var o = i(2),
        r = i(24),
        s = i(6),
        a = i(19),
        _ = i(1288),
        l = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n.run = function () {
                    n._timer <= 0 && n._isTurn || (n._movePlane(), n._timer -= 1e3 / 60, n._timer <= 0 && !n._isTurn && (n._timer = n._baseTime, n._isTurn = !n._isTurn))
                }, n._scene = e, n._model = i, n
            }
            return n(e, t), e.prototype._start = function () {
                this._data = this._model.sortie.getNextCell().getAirReconnaissanceData(), this._showMessage()
            }, e.prototype._showMessage = function () {
                var t = this,
                    e = this._data.plane_type;
                this._data.result;
                1 == e ? (this._scene.view.message_box.text = "\u5927\u578b\u98db\u884c\u8247\u306b\u3088\u308b\n\u822a\u7a7a\u5075\u5bdf\u3092\u5b9f\u65bd\u3057\u307e\u3059\u3002", this._flyPlane(e)) : 2 == e ? (this._scene.view.message_box.text = "\u6c34\u4e0a\u5075\u5bdf\u6a5f\u306b\u3088\u308b\n\u822a\u7a7a\u5075\u5bdf\u3092\u5b9f\u65bd\u3057\u307e\u3059\u3002", this._flyPlane(e)) : (this._scene.view.message_box.text = "\u822a\u7a7a\u5075\u5bdf\u4e88\u5b9a\u5730\u70b9\u306b\u5230\u7740\u3057\u307e\u3057\u305f\u304c\u3001\n\u7a3c\u50cd\u5075\u5bdf\u6a5f\u304c\u306a\u3044\u305f\u3081\u3001\u5075\u5bdf\u3092\u4e2d\u6b62\u3057\u307e\u3059\u3002", createjs.Tween.get(null).wait(2e3).call(function () {
                    t._scene.view.message_box.text = "", t._endTask()
                }))
            }, e.prototype._flyPlane = function (t) {
                var e = this,
                    i = this._scene.view.map.ship_icon;
                this._from = new PIXI.Point(i.x, i.y);
                var n = this._model.sortie.getNextCell().no;
                this._to = this._scene.resInfo.getAirReconnaissancePoint(n), null == this._to && (this._to = new PIXI.Point(this._from.x, this._from.y));
                var o = this._to.x > this._from.x ? 1 : -1;
                this._baseTime = 1500, this._timer = 1500, this._isTurn = !1;
                var r = new u;
                r.initialize(t), r.scale.set(0);
                var a = this._scene.view.universal_layer;
                this._container = new PIXI.Container, this._container.x = this._from.x, this._container.y = this._from.y, a.addChild(this._container), this._container.addChild(r), this._c1 = new PIXI.Point(this._from.x - .3 * (this._to.y - this._from.y), this._from.y + .3 * (this._to.x - this._from.x)), this._c2 = new PIXI.Point(this._to.x - .3 * (this._from.y - this._to.y), this._to.y + .3 * (this._from.x - this._to.x)), createjs.Tween.get(this._container).wait(200).call(function () {
                    e._bezierTween = createjs.Tween.get({}), e._bezierTween.wait(3e3), e._bezierTween.addEventListener("change", function () {
                        e.run()
                    })
                }).wait(3e3).wait(300).call(function () {
                    a.removeChild(e._container), e._showBalloon()
                }), createjs.Tween.get(r).to({
                    scaleX: o,
                    scaleY: 1
                }, 200).wait(100).call(function () {
                    s.SE.play("228")
                }).wait(1200).to({
                    scaleX: -o
                }, 400).wait(1200).to({
                    scaleX: 0,
                    scaleY: 0
                }, 100)
            }, e.prototype._movePlane = function () {
                var t = (this._baseTime - this._timer) / this._baseTime,
                    e = this._isTurn ? 1 * t : 1 * t - 1,
                    i = this._isTurn ? this._to : this._from,
                    n = this._isTurn ? this._from : this._to,
                    o = this._isTurn ? this._c2 : this._c1;
                this._container.position.x = (1 - t) * (1 - t) * i.x + 2 * (1 - t) * t * o.x + t * t * n.x, this._container.position.y = (1 - t) * (1 - t) * i.y + 2 * (1 - t) * t * o.y + t * t * n.y, 0 != e && (this._container.position.y += ((Math.abs(e) - .5) * (Math.abs(e) - .5) * 38 * 4 - 38) * (Math.abs(e) / e))
            }, e.prototype._showBalloon = function () {
                var t = this;
                this._scene.view.message_box.text = "";
                var e = this._data.result,
                    i = this._model.sortie.getNextCell().getDropItems(),
                    n = 0,
                    o = 0;
                if (null != i && i.length > 0) {
                    var r = i[0];
                    n = r.icon_id, o = r.count
                }
                var s = new _.AirReconnaissanceBalloon;
                s.x = 21, s.y = -6, s.alpha = 0, s.initialize(e, n, o);
                var a = this._scene.view.map.ship_icon;
                a.addChild(s), createjs.Tween.get(s).to({
                    y: -29,
                    alpha: 1
                }, 100).wait(4e3).to({
                    y: -6,
                    alpha: 0
                }, 100).call(function () {
                    a.removeChild(s), t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._scene = null, this._model = null, this._data = null, this._container = null, this._from = null, this._to = null, this._c1 = null, this._c2 = null, this._baseTime = null, this._timer = null, this._bezierTween = null, this._isTurn = null, t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase);
    e.CellTaskAirReconnaissance = l;
    var u = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._img = new PIXI.Sprite, e.addChild(e._img), e
        }
        return n(e, t), e.prototype.initialize = function (t) {
            switch (t) {
                case 2:
                    this._img.texture = a.MAP_COMMON.getTexture(106), this._img.position.set(-74, -84);
                    break;
                case 1:
                    this._img.texture = a.MAP_COMMON.getTexture(107), this._img.position.set(-74, -101);
                    break;
                default:
                    this._img.texture = null
            }
        }, e
    }(r.Container)
}