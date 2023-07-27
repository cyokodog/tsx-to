import { domReplacer } from '../../utils/domReplacer';
import type { Reactive } from '../../uses/useReactive';

export const Reactivate = <T extends object>({
  reactive,
  factory,
  targetDom,
}: {
  reactive: Reactive<T>;
  factory: () => HTMLElement;
  targetDom?: Element | null;
}) => {
  const { render: replaceDom, dom } = domReplacer(factory, targetDom);
  reactive.render = replaceDom;
  return dom;
};
