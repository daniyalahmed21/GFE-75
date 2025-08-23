function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;
    iterable.forEach((element, index) => {
      Promise.resolve(element)
        .then((data) => {
          results[index] = data;
          completed += 1;

          if (completed === iterable.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });

    if (iterable.length === 0) {
      resolve([]);
    }
  });
}

const p1 = Promise.resolve(10);
const p2 = new Promise((res) => setTimeout(() => res(20), 100));
const p3 = Promise.resolve(30);

promiseAll([p1, p2, p3]).then(console.log);
// [10, 20, 30]
