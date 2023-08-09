import { getFocusHandler, type FocusHandler } from './getFocusHandler';

export type DomReplacer = ReturnType<typeof domReplacer>;

export type Render = () => { focus: FocusHandler };

export interface DomFactoryParams {
  replaceDom: () => HTMLElement;
  render: Render;
}

export const domReplacer = (
  domFactory: (p: DomFactoryParams) => HTMLElement,
  targetDom?: Element | null
) => {
  let dom = domFactory({ replaceDom, render });
  if (targetDom) targetDom.replaceWith(dom);

  function replaceDom() {
    const newDom = domFactory({ replaceDom, render });
    dom.replaceWith(newDom);
    return (dom = newDom);
  }

  function render() {
    const id = document.activeElement?.id;
    const selectionStart = (document.activeElement as any)?.selectionStart;
    const newDom = replaceDom();
    const focus = getFocusHandler(newDom);
    if (id && focus) {
      focus('#' + id, selectionStart);
    }
    return { focus: getFocusHandler(newDom) };
  }

  return {
    render,
    replaceDom,
    dom,
  };
};
