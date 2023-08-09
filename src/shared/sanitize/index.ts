const replacementChars = [
  ['&', '&amp;'],
  ['"', '&quot;'],
  ["'", '&apos;'],
  ['<', '&lt;'],
  ['>', '&gt;'],
];

export const sanitize = (target: string): string => {
  let sanitized = target;
  replacementChars.forEach(
    ([char, replacement]) =>
      (sanitized = sanitized.replace(new RegExp(char, 'g'), replacement))
  );
  return sanitized;
};
