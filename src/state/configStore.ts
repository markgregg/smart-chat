import { StoreApi, UseBoundStore, create } from 'zustand';
import { ConfigState } from '@/types/State';
import { SmartChatProps } from '@/types';

export const createConfigStore = ({
  size,
}: SmartChatProps): UseBoundStore<StoreApi<ConfigState>> => {
  return create<ConfigState>(() => ({
    size: size ?? 'normal',
  }));
};
