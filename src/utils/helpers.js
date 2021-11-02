export function getArrayOfUnique(array) {
  const arrayOfUnique = [];
  const set = new Set();
  for (const photo of array) {
    if (!set.has(photo.id)) {
      set.add(photo.id);
      arrayOfUnique.push(photo);
    }
  }
  return arrayOfUnique;
};

export function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
};

export function throttle(func, limit = 300) {
  let lastFunc;
  let lastRan;
  return function() {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args)
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
          if ((Date.now() - lastRan) >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
       }, limit - (Date.now() - lastRan));
    }
  }
};
