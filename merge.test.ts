import { merge } from "./merge";

test("merge three sorted arrays correctly", () => {
  const c1 = [1, 4, 7];
  const c2 = [9, 6, 3];
  const c3 = [2, 5, 8];

  const result = merge(c1, c2, c3);

  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("works with empty arrays", () => {
  expect(merge([], [5, 4, 3], [])).toEqual([3, 4, 5]);
});
