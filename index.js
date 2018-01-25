const noop = () => {}
const updateStates = ({
  beginForward = noop, completeForward = noop, runForward = noop, // Only triggers for forward
  beginReverse = noop, completeReverse = noop, runReverse = noop  // and reversed animation.
  begin        = noop, complete        = noop, run        = noop, // Equivalent to built-ins, but completes every time.
                      }) => (a) => {                              // Returns a callback for built-in `update`.
  if (!a.reversed) {
    if (a.progress == 0) {
      begin(a)
      beginForward(a)
    }
    if (a.progress == 100) {
      completeForward(a)
      complete(a)
    }
    runForward(a)
  }   
  run(a)
  if (a.reversed) {      
    runReverse(a)
    if (a.progress == 100) {
      begin(a)
      beginReverse(a)
    }
    if (a.progress == 0) {
      completeReverse(a)
      complete(a)
    }
  }
}

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.updateStates = factory();
  }
}(typeof self !== 'undefined' ? self : this, () => updateStates));