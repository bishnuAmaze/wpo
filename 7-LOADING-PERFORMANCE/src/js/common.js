export function sort(a) {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < a.length - 1; i++) {
      if (a[i] > a[i + 1]) {
        const temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

export function getSpentTime() {
  const a = [];

  for (let i = 50000; i >= 0; i--) {
    a.push(i);
  }

  const start = new Date().getTime();

  sort(a);

  const end = new Date().getTime();

  return end - start;
}
