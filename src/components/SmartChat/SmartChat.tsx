import React from 'react';
import { Chat } from '../Chat';
import { StateProvider } from '../../state/StateProvider';
import { SmartChatProps } from '@/types';

export const SmartChat = React.memo((props: SmartChatProps) => (
  <StateProvider props={props}>
    <Chat />
  </StateProvider>
));
