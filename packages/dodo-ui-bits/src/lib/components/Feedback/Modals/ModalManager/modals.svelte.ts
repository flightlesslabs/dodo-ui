import type { ConfirmDialogProps } from '../ConfirmDialog/ConfirmDialog.svelte';
import type { InformDialogProps } from '../InformDialog/InformDialog.svelte';
import type { ModalProps } from '../Modal/Modal.svelte';

export type ModalDialogType = 'modal' | 'inform' | 'confirm';

export type ModalDialogBaseConfig = {
  modalManagerId?: string;
  description?: string;
  title?: string;
  payload?: Record<string, unknown>;
};

export type ModalDialogModalConfig = ModalDialogBaseConfig & {
  modalProps?: ModalProps;
};

export type ModalDialogInformConfig = ModalDialogBaseConfig & {
  modalProps?: InformDialogProps;
  onaccept?: () => void;
};

export type ModalDialogConfirmConfig = ModalDialogBaseConfig & {
  modalProps?: ConfirmDialogProps;
  onaccept?: () => void;
  onreject?: () => void;
};

export type ModalDialogConfigMap = {
  modal: ModalDialogModalConfig;
  inform: ModalDialogInformConfig;
  confirm: ModalDialogConfirmConfig;
};

export type ActiveModal = {
  type: ModalDialogType;
  config: ModalDialogConfigMap[ModalDialogType];
} | null;

function createModalsStore() {
  let activeModal = $state<ActiveModal>(null);

  return {
    get _activeModal() {
      return activeModal;
    },
    add<T extends ModalDialogType>(type: T, config: ModalDialogConfigMap[T]) {
      activeModal = {
        type,
        config,
      };
    },
    clear() {
      activeModal = null;
    },
  };
}

export const modals = createModalsStore();
