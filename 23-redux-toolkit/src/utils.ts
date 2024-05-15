export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function makeQueryParams(query: Record<string, string>) {
  return "?" + new URLSearchParams(query).toString();
}
