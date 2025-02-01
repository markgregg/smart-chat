import React from 'react';
import { useConfig } from '@/state/useState';
import s from './style.module.less';
import { MultiStyleInput } from 'multi-style-input';


export const Chat = React.memo(() => {
  const {
    size = 'normal',
  } = useConfig((state) => state);

  const handleClick = React.useCallback(() => {

  }, []);

  return (
    <div
      id="sc-chat"
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      className={[s.chat, s[`font-${size}`]].join(' ')}
    >
      <div className={s.chatHistory}>

      </div>
      <MultiStyleInput
        text={''}
        textBlocks={[]}
        size={size}
        style={{
          borderRadius: '10px',
          height: '80px',
          padding: '10px',
        }}
      />
    </div>
  );
});
