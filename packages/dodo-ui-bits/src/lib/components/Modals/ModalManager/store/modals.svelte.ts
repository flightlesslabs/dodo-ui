import type { ConfirmDialogProps } from '../../ConfirmDialog/ConfirmDialog.svelte';
import type { InformDialogProps } from '../../InformDialog/InformDialog.svelte';
import type { ModalProps } from '../../Modal/Modal.svelte';

export type ModalDialogType = 'modal' | 'inform' | 'confirm';

export type ModalDialogBaseConfig = {
  moddalManagerId?: string;
};

export type ModalDialogModalConfig = ModalProps & ModalDialogBaseConfig;

export type ModalDialogInformConfig = InformDialogProps & ModalDialogBaseConfig;

export type ModalDialogConfirmConfig = ConfirmDialogProps & ModalDialogBaseConfig;

function createModalsStore() {
  let moddalManagerIds = $state<string[]>([]);

  return {
    get moddalManagerIds() {
      return moddalManagerIds;
    },
    addModalManagerId(id: string) {
      if (!moddalManagerIds.includes(id)) {
        moddalManagerIds.push(id);
      }
    },
    removeModalManagerId(id: string) {
      moddalManagerIds = moddalManagerIds.filter((item) => item !== id);
    },
    add(type: ModalDialogType) {},
  };
}

export const modals = createModalsStore();
