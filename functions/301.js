const function301 = function (t, e, i) {
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
    var o = i(0),
        r = i(1),
        s = i(2),
        a = i(8),
        _ = i(60),
        l = i(38),
        u = i(29),
        c = i(25),
        h = i(67),
        p = i(9),
        d = i(204),
        f = i(627),
        y = i(628),
        m = i(629),
        v = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._layer = e, n._model = i, n
            }
            return n(e, t), e.prototype._start = function () {
                this._loadSlotitemResoucres()
            }, e.prototype._loadSlotitemResoucres = function () {
                var t = this,
                    e = new c.SlotLoader;
                if (0 == this._model.isUseitemFrom()) {
                    var i = this._model.mst_id_from;
                    i > 0 && e.add(i, "card")
                }
                if (0 == this._model.isUseitemTo()) {
                    var n = this._model.mst_id_tobe;
                    n > 0 && e.add(n, "card")
                }
                e.load(function () {
                    t._loadUseitemResoucres()
                })
            }, e.prototype._loadUseitemResoucres = function () {
                var t = this,
                    e = new h.UseitemLoader;
                if (1 == this._model.isUseitemFrom()) {
                    var i = this._model.mst_id_from;
                    i > 0 && e.add(i, 1)
                }
                if (1 == this._model.isUseitemTo()) {
                    var n = this._model.mst_id_tobe;
                    n > 0 && e.add(n, 1)
                }
                e.load(function () {
                    t._initBG()
                })
            }, e.prototype._initBG = function () {
                var t = this;
                if (this._bg = new _.RarityBG, 1 == this._model.isUseitemTo()) this._bg.initiailzeForUseitem(function () {
                    t._animation()
                });
                else {
                    var e = this._model.rarity_tobe;
                    this._bg.initiailzeForSlotitem(e, function () {
                        t._animation()
                    })
                }
            }, e.prototype._createItemFrom = function (t, e) {
                var i;
                i = -1 == t ? p.COMMON_MISC.getTexture(37) : 1 == e ? o.default.resources.getUseitem(t, 1) : o.default.resources.getSlotitem(t, "card");
                var n = new d.CenteringSprite(i);
                return n.position.set(600, 630), n.alpha = 0, n
            }, e.prototype._createItemTobe = function (t, e) {
                var i;
                i = -1 == t ? p.COMMON_MISC.getTexture(49) : 1 == e ? o.default.resources.getUseitem(t, 1) : o.default.resources.getSlotitem(t, "card");
                var n = new d.CenteringSprite(i);
                return n.position.set(600, 240), n.alpha = 0, n.scale.set(.7), n
            }, e.prototype._animation = function () {
                var t = this;
                this._layer.addChild(this._bg), this._item_tobe = this._createItemTobe(this._model.mst_id_tobe, this._model.isUseitemTo()), this._layer.addChild(this._item_tobe), this._item_from = this._createItemFrom(this._model.mst_id_from, this._model.isUseitemFrom()), this._layer.addChild(this._item_from), createjs.Tween.get(this._item_from).to({
                    y: 240,
                    alpha: 1
                }, 1e3).wait(1e3).call(function () {
                    -1 != t._model.mst_id_tobe && (t._item_tobe.alpha = .5), t._meltInto()
                }), this._particle_layer = new y.ModelChangeParticleLayer, this._layer.addChild(this._particle_layer), this._messagebox = new f.ModelChangeMessageBox, this._messagebox.initialize(this._model.message1), this._messagebox.y = 720, this._layer.addChild(this._messagebox), createjs.Tween.get(this._messagebox).wait(500).to({
                    y: 480
                }, 300), this._white = new a.AreaBox(1, 16777215), this._layer.addChild(this._white), createjs.Tween.get(this._white).to({
                    alpha: 0
                }, 500).call(function () {
                    t._layer.removeChild(t._white)
                })
            }, e.prototype._meltInto = function () {
                for (var t = this, e = new u.SerialTask, i = 0, n = this._model.melt_into_items; i < n.length; i++) {
                    var o = n[i],
                        r = o.items,
                        s = o.direction,
                        a = o.eff_type,
                        _ = new m.MeltIntoTask(this._layer, r, s, a);
                    e.add(_)
                }
                e.start(function () {
                    t._change()
                })
            }, e.prototype._change = function () {
                var t = this;
                createjs.Tween.get(this._item_from).to({
                    x: 405,
                    scaleX: .9,
                    scaleY: .9,
                    alpha: .75
                }, 650, createjs.Ease.sineOut).to({
                    x: 600,
                    scaleX: .6,
                    scaleY: .6,
                    alpha: .5
                }, 600, createjs.Ease.sineIn).to({
                    alpha: 0
                }, 50), createjs.Tween.get(this._item_tobe).to({
                    x: 795,
                    scaleX: .9,
                    scaleY: .9,
                    alpha: 1
                }, 650, createjs.Ease.sineOut).call(function () {
                    var e = t._layer.getChildIndex(t._item_from);
                    t._layer.addChildAt(t._item_tobe, e)
                }).to({
                    x: 600,
                    scaleX: 1,
                    scaleY: 1
                }, 650, createjs.Ease.sineIn).call(function () {
                    t._waitClick()
                })
            }, e.prototype._waitClick = function () {
                var t = this;
                this._particle_layer.activate(), this._messagebox.changeText(this._model.message2), createjs.Tween.get(null).wait(1500).call(function () {
                    var e = new l.GearBtnHome;
                    e.position.set(1140, 660), e.initialize(), e.activate(), t._layer.addChild(e);
                    var i = new a.AreaBox(0);
                    i.buttonMode = !0, t._layer.addChild(i), i.once(r.EventType.CLICK, function () {
                        t._showLastWhite(e, i)
                    })
                })
            }, e.prototype._showLastWhite = function (t, e) {
                var i = this;
                this._layer.addChild(this._white), createjs.Tween.get(this._white).to({
                    alpha: 1
                }, 400).call(function () {
                    t.deactivate(), t.dispose(), i._layer.removeChild(t), i._layer.removeChild(e), i._messagebox.dispose(), i._layer.removeChild(i._messagebox), i._particle_layer.deactivate(), i._layer.removeChild(i._particle_layer), i._layer.removeChild(i._item_tobe), i._layer.removeChild(i._item_from), i._layer.removeChild(i._bg), i._hideLastWhite()
                })
            }, e.prototype._hideLastWhite = function () {
                var e = this;
                createjs.Tween.get(this._white).to({
                    alpha: 0
                }, 100).call(function () {
                    var i = e._white.parent;
                    null != i && i.removeChild(e._white), t.prototype._endTask.call(e)
                })
            }, e.prototype._endTask = function () {
                this._layer = null, this._model = null, this._bg = null, this._item_from = null, this._item_tobe = null, this._particle_layer = null, this._messagebox = null, this._white = null, t.prototype._endTask.call(this)
            }, e
        }(s.TaskBase);
    e.ModelChangeTask = v
}