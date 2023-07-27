import { getFocusHandler } from './getFocusHandler';

export const domReplacer = (
  domFactory: () => HTMLElement,
  targetDom?: Element | null
) => {
  let dom = domFactory();
  if (targetDom) targetDom.replaceWith(dom);

  const replaceDom = () => {
    const newDom = domFactory();
    dom.replaceWith(newDom);
    return (dom = newDom);
  };

  return {
    render() {
      const id = document.activeElement?.id;
      const selectionStart = (document.activeElement as any)?.selectionStart;

      const newDom = replaceDom();

      const focus = getFocusHandler(newDom);
      if (id && focus) {
        focus('#' + id, selectionStart);
      }
      return { focus: getFocusHandler(newDom) };
    },
    replaceDom,
    dom,
  };
};
