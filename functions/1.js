const function1 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function () {
        return {
            touch: void 0 !== document.ontouchstart,
            pointer: window.PointerEvent
        }
    }();
    e.pointer = {
        down: n.pointer ? "pointerdown" : n.touch ? "touchstart" : "mousedown",
        move: n.pointer ? "pointermove" : n.touch ? "touchmove" : "mousemove",
        up: n.pointer ? "pointerup" : n.touch ? "touchend" : "mouseup",
        over: n.pointer ? "pointerover" : "mouseover",
        out: n.pointer ? "pointerout" : "mouseout"
    };
    ! function (t) {
        t.CLICK = e.pointer.up, t.MOUSEOVER = e.pointer.over, t.MOUSEOUT = e.pointer.out, t.MOUSEDOWN = e.pointer.down, t.MOUSEUP = e.pointer.up, t.MOUSEMOVE = e.pointer.move
    }(e.EventType || (e.EventType = {}))
}