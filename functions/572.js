const function572 = function (t, e, i) {
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
        s = i(274),
        a = i(573),
        _ = i(575),
        u = i(580),
        l = i(581),
        c = i(277),
        h = i(6),
        p = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._id = 0, i._preCheckedTimeStr = null, i._hitAreaLayer = null, i._hit_area_updated = !1, i._popupLayer = null, i._pre_state_name = "", i._data = new _.FAnimationData, i._type = e, i
            }
            return n(e, t), Object.defineProperty(e.prototype, "id", {
                get: function () {
                    return this._id
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.isRadio = function () {
                return this._data.model.hasCategory("radio")
            }, e.prototype.isGramo = function () {
                return this._data.model.hasCategory("gramo")
            }, e.prototype.isJukeBox = function () {
                return this._data.model.hasCategory("jukebox")
            }, e.prototype.update = function (t, e, i) {
                var n = this;
                void 0 === e && (e = null), void 0 === i && (i = null);
                this._data.loadAnimationData(t, function () {
                    if (null != e && r.default.model.useItem.getCount(79) > 0) {
                        var o = n._data.model.kaikyo;
                        null != o ? e.initialize(o) : e.finalize()
                    }
                    if (null != i) {
                        var s = -1;
                        if (r.default.model.useItem.getCount(81) ? s = 0 : r.default.model.useItem.getCount(82) ? s = 1 : r.default.model.useItem.getCount(83) ? s = 2 : r.default.model.useItem.getCount(84) && (s = 3), s >= 0) {
                            var a = n._data.model.shogo;
                            null != a ? i.startAnimation(a, s) : i.stopAnimation()
                        }
                    }
                    var _ = !1;
                    if (0 == n.children.length ? _ = !0 : (n.id != t || n._data.model.reloadFlag) && (_ = !0, n.removeChildren()), _) {
                        n._id = t;
                        var u = n._data.currentStateName,
                            l = n._data.model.getState(u);
                        n._reCreate(l)
                    }
                })
            }, e.prototype.restart = function () {
                this._data.setAnimationState(0), this._updateFurnitureLayers();
                for (var t = 0, e = this._sprites; t < e.length; t++) {
                    e[t].reset()
                }
                this._removePopup()
            }, e.prototype.isHit = function (t) {
                if (null == this._hitAreaLayer) return !1;
                if (null == this._hit_area_map || !this._hit_area_updated) {
                    var e = new PIXI.Sprite(this._hitAreaLayer.texture);
                    this._hit_area_map = r.default.settings.renderer.extract.pixels(e), this._hit_area_updated = !0
                }
                if (c.FurnitureUtil.isAreaHit(this._hit_area_map, t, this._hitAreaLayer)) {
                    if (0 == this._data.animationState) return !0;
                    if (this._hasLoop()) return !0
                }
                return !1
            }, e.prototype.clickAction = function () {
                this._data.setAnimationState(1), this._updateFurnitureLayers()
            }, e.prototype.stopGramophone = function () {
                return "standard2" == this._data.currentStateName && (this._data.setAnimationState(1), this._updateFurnitureLayers(), !0)
            }, e.prototype.timeCheck = function (t, e, i) {
                var n = this._data.currentStateName,
                    o = this._data.model.getState(n);
                if (null != o) {
                    var r = o.timeTable;
                    if (null != r && 0 == this._data.animationState) {
                        var s = t + e + i;
                        if (this._preCheckedTimeStr != s) {
                            this._preCheckedTimeStr = s;
                            var a = "";
                            if (r.hasOwnProperty(s) ? a = r[s] : r.hasOwnProperty("XX" + e + i) && (a = r["XX" + e + i]), "" != a) {
                                var _ = a.split(":");
                                if (_.length > 1) {
                                    a = _[0];
                                    var u = parseFloat(_[1]),
                                        l = 100 * Math.random();
                                    l < u && (this._data.setAnimationState(2, a), this._updateFurnitureLayers())
                                } else this._data.setAnimationState(2, a), this._updateFurnitureLayers()
                            }
                        }
                    }
                }
            }, e.prototype.animate = function () {
                if (0 != r.default.model.furniture.isActive(this._id)) {
                    for (var t = 0; t < this._sprites.length; t++) {
                        var e = this._sprites[t],
                            i = e.update();
                        null != i && (this._setOffset(e, i), this._execFrameAction(i))
                    }
                    for (var n = !0, o = 0, s = this._sprites; o < s.length; o++) {
                        var e = s[o];
                        if (0 == e.isEnd()) {
                            n = !1;
                            break
                        }
                    }
                    n && (this._data.setAnimationState(0), this._updateFurnitureLayers(), r.default.view.portMain.furnitureLayer.current_bgm_furniture == this && "standard" == this._data.currentStateName && (r.default.view.portMain.furnitureLayer.current_bgm_furniture = null))
                }
            }, e.prototype._getTextureByName = function (t) {
                var e = PIXI.utils.TextureCache[t];
                return e || PIXI.Texture.EMPTY
            }, e.prototype._setOffsetBase = function (t) {
                0 == this._type ? (t.x = 0, t.y = o.default.height - t.height) : 2 == this._type ? (t.x = 297, t.y = 0) : 4 == this._type ? (t.x = 0, t.y = o.default.height - t.height) : 5 == this._type ? (t.x = o.default.width - t.width, t.y = 0) : (t.x = 0, t.y = 0)
            }, e.prototype._setOffset = function (t, e) {
                this._setOffsetBase(t);
                var i = t.fileName,
                    n = this._data.model.getOffset(i);
                null == n && (n = t.getOffset()), t.x += n.x, t.y += n.y
            }, e.prototype._updateFurnitureLayers = function () {
                var t = this._data.currentStateName;
                if (t != this._pre_state_name) {
                    this._pre_state_name = t;
                    var e = this._data.model.getState(t);
                    this._reCreate(e)
                }
            }, e.prototype._hasLoop = function () {
                this._updateFurnitureLayers();
                var t = this._data.model.getState(this._pre_state_name);
                return null != t && t.hasLoop()
            }, e.prototype._reCreate = function (t) {
                if (this.removeChildren(), this._hit_area_map = null, this._hit_area_updated = !1, this._sprites = [], this._hitAreaLayer = null, null != t) {
                    for (var e = t.layers, i = 0; i < e.length; i++) {
                        var n = e[i],
                            o = n.frames[0],
                            r = (o.filename, new u.FurnitureLayer(n));
                        this._sprites.push(r), this._setOffset(r, o), this.addChild(r)
                    }
                    var a = t.hitArea;
                    if (null != a) {
                        var _ = this._getTextureByName(a.filename);
                        this._hitAreaLayer = new PIXI.Sprite(_), this._hitAreaLayer.interactive = !0, this._setOffsetBase(this._hitAreaLayer);
                        var l = a.offset;
                        l && (this._hitAreaLayer.x += l[0], this._hitAreaLayer.y += l[1]), this._hitAreaLayer.alpha = s.FurnitureConst.HIT_ALPHA, this.addChild(this._hitAreaLayer)
                    }
                }
            }, e.prototype._execFrameAction = function (t) {
                var e = this,
                    i = t.getSEID();
                null != i && h.SE.play(i);
                var n = t.getBGMAction();
                if (null != n && r.default.view.portMain.furnitureLayer.current_bgm_furniture == this)
                    if ("play" == n) {
                        var o = r.default.model.basic.port_bgm_id;
                        r.default.sound.bgm.play(o)
                    } else if ("start" == n)
                    if (this.isRadio()) {
                        var o = r.default.model.basic.port_bgm_id;
                        if (101 != o) {
                            var s = new a.UserFurnitureRadioAPI;
                            s.start(function () {
                                r.default.model.basic.setPortBGMID(101), r.default.sound.bgm.play(101)
                            })
                        } else r.default.sound.bgm.play(101)
                    } else this.isGramo() && r.default.sound.bgm.play(237, !1, 0, "port", function () {
                        e.stopGramophone()
                    });
                else "stop" == n && r.default.sound.bgm.stop();
                this._openPopup(t);
                var _ = t.getStateChangeOption();
                null != _ && this._data.updateBaseStateName(_)
            }, e.prototype._openPopup = function (t) {
                var e = this,
                    i = t.getPopupOption();
                null != i && null == this._popupLayer && 0 == r.default.scene.now && (r.default.scene.isChangingNow() || 1 != r.default.friendlyRequest.UI && (this._popupLayer = new l.FurniturePopupLayer(i), r.default.view.overLayer.addChild(this._popupLayer), this._popupLayer.show(function () {
                    e._removePopup()
                })))
            }, e.prototype._removePopup = function () {
                null != this._popupLayer && (null != this._popupLayer.parent && this._popupLayer.parent.removeChild(this._popupLayer), this._popupLayer.dispose(), this._popupLayer = null)
            }, e
        }(PIXI.Container);
    e.Furniture = p
}