import type { Attribute, Children, ElementName } from './types';
import { booleanAttrs } from './constants';

export const tsxToDom = (
  elementName: ElementName,
  attributes: Attribute,
  ...children: Children
): HTMLElement => {
  if (typeof elementName === 'function') {
    return elementName(attributes, children);
  }
  const el = document.createElement(elementName);
  for (const key in attributes) {
    if (/^on[A-Z][a-z]/.test(key)) {
      const eventName = key.slice(2).toLowerCase();
      el.addEventListener(eventName, attributes[key]);
    } else if (booleanAttrs.has(key)) {
      if (attributes[key] === true) el.setAttribute(key, 'true');
    } else {
      el.setAttribute(key, attributes[key]);
    }
  }
  el.append(...children);
  return el;
};

export const h = tsxToDom;
