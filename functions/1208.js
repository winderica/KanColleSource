const function1208 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
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
    var o = i(0), r = i(2), s = i(14), a = i(428), _ = i(430), u = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._selected_formation = 1, n._onSelectFormation = function (t) {
                n._selected_formation = t, n._view.boxes.deactivate(), n._view.message_box.text = "", createjs.Tween.get(n._view.message_box).to({ alpha: 0 }, 300), createjs.Tween.get(n._view.chara).to({ alpha: 0 }, 300), createjs.Tween.get(n._view.boxes).to({ alpha: 0 }, 300).call(function () {
                    n._preEnd()
                })
            }, n._parent = e, n._deck = i, n
        }

        return n(e, t), Object.defineProperty(e.prototype, "selected_formation", {
            get: function () {
                return this._selected_formation
            }, enumerable: !0, configurable: !0
        }), e.prototype._start = function () {
            this._view = new l, this._parent.addChild(this._view), this._readyForFormationBox()
        }, e.prototype._readyForFormationBox = function () {
            var t = this._deck.getCount();
            this._view.boxes.initialize(t, this._onSelectFormation, 6), this._view.boxes.alpha = 0, this._view.boxes.count <= 1 ? this._preEnd() : this._readyForFlagship()
        }, e.prototype._readyForFlagship = function () {
            var t = this, e = this._deck.ships[0], i = e.mst_id, n = e.isDamaged(),
                r = o.default.model.ship_graph.get(i).getMapOffset(n);
            this._view.chara.position.set(-80 + r.x, -93 + r.y), this._view.chara.alpha = 0, (new s.ShipLoader).add(i, n, "full").load(function () {
                t._view.chara.texture = o.default.resources.getShip(i, n, "full"), t._showMessageBox()
            })
        }, e.prototype._showMessageBox = function () {
            var t = this;
            this._view.message_box.initialize(), this._view.message_box.activate(function () {
                t._showFlagShip()
            })
        }, e.prototype._showFlagShip = function () {
            var t = this, e = this._view.chara.x;
            this._view.chara.x += 75, createjs.Tween.get(this._view.chara).to({
                alpha: 1,
                x: e
            }, 300), createjs.Tween.get(this._view.boxes).to({ alpha: 1 }, 300).call(function () {
                t._view.boxes.activate(), t._view.message_box.text = "\u9663\u5f62\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"
            })
        }, e.prototype._preEnd = function () {
            this._parent.removeChild(this._view), this._view = null, this._parent = null, this._deck = null, this._endTask()
        }, e
    }(r.TaskBase);
    e.TaskFormationSelect = u;
    var l = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._chara = new PIXI.Sprite, e._boxes = new _.FormationBoxContainer, e._message_box = new a.CompMessageBox, e.addChild(e._chara), e.addChild(e._boxes), e.addChild(e._message_box), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "chara", {
            get: function () {
                return this._chara
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "boxes", {
            get: function () {
                return this._boxes
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "message_box", {
            get: function () {
                return this._message_box
            }, enumerable: !0, configurable: !0
        }), e
    }(PIXI.Container)
}