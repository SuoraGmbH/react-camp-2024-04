export function toUpperCase(foo: string | null): string {
  if (foo === null) {
    return "";
  }

  return foo.toUpperCase();
}

export function toUpperCase2(foo: string | null): string | undefined {
  return foo?.toUpperCase();
}

export function toUpperCase3(foo: string | null): string {
  return foo ? foo.toUpperCase() : "";
}
export function toUpperCase4(foo: string | null): string {
  if (foo === null) {
    throw new Error("bla");
  }

  return foo.toUpperCase();
}
