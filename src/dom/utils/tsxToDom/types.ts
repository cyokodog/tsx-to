export type ElementName =
  | string
  | ((attribute: Attribute, children: Children) => HTMLElement);

export type Attribute = { [key: string]: any };

export type Children = Array<HTMLElement>;
