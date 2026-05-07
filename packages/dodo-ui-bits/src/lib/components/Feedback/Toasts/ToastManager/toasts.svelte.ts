import type {
  CardColor,
  ComponentAlignmentX,
  ComponentAlignmentY,
  ComponentVariant,
} from '@flightlesslabs/dodo-ui';
import type { ToastProps } from '../Toast/Toast.svelte';
import { nanoid } from 'nanoid';

export type ToastInput = {
  toastManagerId?: string;
  description?: string;
  title?: string;
  payload?: Record<string, unknown>;
  clearable?: boolean;
  onclear?: () => void;
  color?: CardColor;
  variant?: ComponentVariant;
  alignmentX?: ComponentAlignmentX;
  alignmentY?: ComponentAlignmentY;
  toastCardProps?: ToastProps;
  duration?: number;
  autoDismiss?: boolean;
};

export type ToastItem = {
  id: string;
  createdAt: Date;
} & ToastInput;

function createToastsStore() {
  let toastsList = $state<ToastItem[]>([]);

  return {
    get _toastsList() {
      return toastsList;
    },
    add(toast: ToastInput) {
      const newToast: ToastItem = {
        ...toast,
        id: nanoid(),
        createdAt: new Date(),
      };

      toastsList = [...toastsList, newToast];
    },
    clear(id: string) {
      toastsList = toastsList.filter((item) => item.id !== id);
    },
    _multiClear(ids: string[]) {
      toastsList = toastsList.filter((item) => !ids.includes(item.id));
    },
    clearAll() {
      toastsList = [];
    },
  };
}

export const toasts = createToastsStore();
