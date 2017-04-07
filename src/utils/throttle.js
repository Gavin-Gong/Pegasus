export default function throttle(fn, wait) {
  let time = Date.now();
  return () => {
    console.log('dd');
    if (time + wait < Date.now()) {
      fn();
      time = Date.now();
    }
  };
}
