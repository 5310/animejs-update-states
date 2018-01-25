# Anime.js Update States

Complex update state callbacks for Anime.js

## Example

```js
anime({
  targets: '.target',
  translateX: '10rem',
  duration: 2000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine',
  update: updateStates({
    begin: (a) => console.log('begin'),
    // run: (a) => console.log('running' a.progress),
    complete: (a) => console.log('complete'), // Triggers every time, unlike the built-in!
    beginForward: (a) => console.log('begin forward'),
    // runForward: (a) => console.log('running forward' a.progress),
    completeForward: (a) => console.log('complete forward'),
    beginReverse: (a) => console.log('begin reverse'),
    // runReverse: (a) => console.log('running reverse' a.progress),
    completeReverse: (a) => console.log('complete reverse'),
  })
});
```