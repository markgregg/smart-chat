import React from 'react';
import { useConfig } from '@/state/useState';
import s from './style.module.less';

export const ChatHistory = React.memo(() => {
  const {
    size = 'normal',
  } = useConfig((state) => state);


  return (
    <div
      id="sc-chat-history"
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      className={s.chatHistory}
    >

    </div>
  );
});
