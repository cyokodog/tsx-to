import { tsxToDom } from './dom';
import { tsxToHtml } from './html';

export let h: typeof tsxToDom | typeof tsxToHtml = tsxToHtml;

export const domMode = () => (h = tsxToDom);

export const htmlMode = () => (h = tsxToHtml);
