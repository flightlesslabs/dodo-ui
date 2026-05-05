import type { ConfirmDialogProps } from '../../ConfirmDialog/ConfirmDialog.svelte';
import type { InformDialogProps } from '../../InformDialog/InformDialog.svelte';
import type { ModalProps } from '../../Modal/Modal.svelte';

export type ModalDialogType = 'modal' | 'inform' | 'confirm';

export type ModalDialogBaseConfig = {
  modalManagerId?: string;
  description?: string;
};

export type ModalDialogModalConfig = ModalProps & ModalDialogBaseConfig;

export type ModalDialogInformConfig = InformDialogProps & ModalDialogBaseConfig;

export type ModalDialogConfirmConfig = ConfirmDialogProps & ModalDialogBaseConfig;

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
  let modalManagerIds = $state<string[]>([]);
  let activeModal = $state<ActiveModal>(null);

  return {
    get _moddalManagerIds() {
      return modalManagerIds;
    },
    get _activeModal() {
      return activeModal;
    },
    _addModalManagerId(id: string) {
      if (!modalManagerIds.includes(id)) {
        modalManagerIds.push(id);
      }
    },
    _removeModalManagerId(id: string) {
      modalManagerIds = modalManagerIds.filter((item) => item !== id);
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
