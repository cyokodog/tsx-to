import { sanitize } from '../shared/sanitize';
import { booleanAttrs } from '../shared/constants';
import type { Attribute, Child, Children, ElementName } from './types';

const childrenToString = (children: Children): string => {
  const collection: Child[] = [];
  children.forEach((child) =>
    Array.isArray(child) ? collection.push(...child) : collection.push(child)
  );
  return collection.join('');
};

const attributesToString = (attributes: Attribute): string => {
  const collection: string[] = [];
  for (const key in attributes) {
    if (/^on[A-Z][a-z]/.test(key)) {
    } else if (booleanAttrs.has(key)) {
      if (attributes[key] === true) collection.push(key);
    } else {
      collection.push(`${key}="${sanitize(attributes[key])}"`);
    }
  }
  const result = collection.join(' ');
  return result === '' ? '' : ` ${result}`;
};

export const tsxToHtml = (
  elementName: ElementName,
  attributes: Attribute,
  ...children: Children
): string => {
  if (typeof elementName === 'function')
    return elementName(attributes, children);
  return `<${elementName}${attributesToString(attributes)}>${childrenToString(
    children
  )}</${elementName}>`;
};

export const h = tsxToHtml;
