import { Card } from "../models/models";

export function removeDuplicates(arr: Card[]) {
  const result = arr.filter(
    (
      (el) => (f) =>
        !el.has(f.name) && el.add(f.name)
    )(new Set())
  );
  return result;
}
