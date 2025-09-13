export function merge(
  collection1: number[],
  collection2: number[],
  collection3: number[]
): number[] {
  const asc2 = [...collection2].reverse();

  const result: number[] = [];
  let i = 0, j = 0, k = 0;

  while (i < collection1.length || j < asc2.length || k < collection3.length) {
    const candidates: { value: number, source: string }[] = [];

    if (i < collection1.length) candidates.push({ value: collection1[i], source: "c1" });
    if (j < asc2.length) candidates.push({ value: asc2[j], source: "c2" });
    if (k < collection3.length) candidates.push({ value: collection3[k], source: "c3" });

    const next = candidates.reduce((min, cur) =>
      cur.value < min.value ? cur : min
    );

    result.push(next.value);

    if (next.source === "c1") i++;
    else if (next.source === "c2") j++;
    else k++;
  }

  return result;
}
