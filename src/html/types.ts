export type ElementName =
  | string
  | ((attribute: Attribute, children: Children) => string);

export type Attribute = { [key: string]: any };

export type Child = string | boolean | null | undefined;
export type Children = Array<Child | Array<Child>>;
