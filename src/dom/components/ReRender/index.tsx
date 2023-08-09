import { domReplacer, type DomFactoryParams } from '../..';

export const ReRender = ({
  target,
}: {
  target: (params: DomFactoryParams) => HTMLElement;
}) => {
  const { dom } = domReplacer(target);
  return dom;
};
