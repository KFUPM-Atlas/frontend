import { customAlphabet } from "nanoid";

const LENGTH = 20;
const alphabet =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
/**
 * It generates a random string of a given length using a custom alphabet
 * @param {number} length - number = LENGTH
 * @returns A function that returns a string of random characters.
 */
export const generateId = (length: number = LENGTH): string => {
  const id = customAlphabet(alphabet, length);
  return id();
};
