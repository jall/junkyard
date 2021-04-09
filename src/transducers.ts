/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return */

export type Transducer<Input, Output, Accumulator = any> = (
  next: (accumulator: Accumulator, val: Output) => Accumulator,
) => (accumulator: Accumulator, val: Input) => Accumulator

export function pipeT<A, B, C>(
  first: Transducer<A, B>,
  second: Transducer<B, C>,
): Transducer<A, C>
export function pipeT<A, B, C, D>(
  first: Transducer<A, B>,
  second: Transducer<B, C>,
  third: Transducer<C, D>,
): Transducer<A, D>
export function pipeT<A, B, C, D, E>(
  first: Transducer<A, B>,
  second: Transducer<B, C>,
  third: Transducer<C, D>,
  fourth: Transducer<D, E>,
): Transducer<A, D>
export function pipeT(
  ...transducers: Array<Transducer<unknown, unknown>>
): Transducer<unknown, unknown> {
  const thrush = (sum: unknown, fn: (x: any) => any) => fn(sum)
  return (next) => transducers.reduceRight(thrush, next)
}

export const map: <A, B>(fn: (val: A) => B) => Transducer<A, B> = (fn) => (
  next,
) => (accumulator, item) => next(accumulator, fn(item))

export const filter: <A, B extends A>(
  predicate: (val: A) => val is B,
) => Transducer<A, B> = (predicate) => (next) => (accumulator, item) =>
  predicate(item) ? next(accumulator, item) : accumulator

const concat = <T>(a: Array<T>, c: T): Array<T> => a.concat([c])

export const transduce = <A, B, Sum>(
  transducer: Transducer<A, B>,
  next: (sum: Sum, val: B) => Sum,
): ((sum: Sum, val: A) => Sum) => transducer(next)

export const toArray = <A, B>(transducer: Transducer<A, B>) => (
  items: Array<A>,
): Array<B> => items.reduce(transducer(concat), [])
