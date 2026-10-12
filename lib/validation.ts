// The domain is matched as dot-separated labels that can't contain a dot
// themselves, so the regex has only one way to match and can't backtrack.
const emailPattern = /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/;

export function isValidEmail(value: string): boolean {
  return emailPattern.test(value);
}
