export type ElementName =
  | string
  | ((attribute: Attribute, children: Children) => HTMLElement);

export type Attribute = { [key: string]: any };

export type Child = HTMLElement | boolean | null | undefined;
export type Children = Array<Child | Array<Child>>;
