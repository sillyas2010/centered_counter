/**
 * Factory function that returns a function for generating a sequence of numbers
 *
 * @param {number} [start] - The starting number for the sequence. Default is 0.
 * @param {number} [step] - The step to increment each number in the sequence. Default is 1.
 * @returns {Function} - A function that generates the number sequence every time it is called.
 */
export const factory = (start = 0, step = 1): (() => number) => {
  // current iteration closure variable
  let iteration = 1;

  // clean function to increment the counter
  function increment(start: number, step: number, iteration: number): [number, number] {
    const counter = start + step * iteration;

    return [++iteration, counter];
  }

  return (): number => {
    if (isNaN(start) || isNaN(step)) {
      return 0;
    }

    let value;
    [iteration, value] = increment(start, step, iteration);

    return value;
  };
};
