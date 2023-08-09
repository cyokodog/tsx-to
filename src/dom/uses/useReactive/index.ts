import type { Render } from '../..';

export type Reactive<T extends object> = ReturnType<typeof useReactive<T>>;

export const useReactive = <T extends object>(
  defaultState: T,
  render?: Render
) => {
  let _render = render;
  let disable = false;

  const state = new Proxy<T>(defaultState, {
    set(target: any, key, value) {
      target[key] = value;
      if (!disable) {
        _render?.();
      }
      return true;
    },
  });

  return {
    get state() {
      return state;
    },

    set render(render: Render) {
      _render = render;
    },

    async renderOnceOnly(f: () => void | Promise<void>) {
      disable = true;
      await f();
      disable = false;
      _render?.();
    },
  };
};
