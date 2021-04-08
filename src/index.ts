export function head<T>(list: Array<T>): T | undefined {
  return list[0]
}

export function tail<T>([_, ...rest]: Array<T>): Array<T> {
  return rest
}

head(tail([1, 2, 3]))
