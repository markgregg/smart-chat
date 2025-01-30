import React from 'react';
import { SmartChat } from '@/components';
import s from './style.module.less';


export const SmartChatApp = () => {

  const queryParams = React.useMemo(() => {
    const query = window.location.search.substring(1);
    const params = query.split('&').filter((t) => t.trim() !== '');
    return params.reduce((p: any, v) => {
      const pv = v.split('=');
      return pv.length < 2 ? { ...p, [pv[0]]: true } : { ...p, [pv[0]]: pv[1] };
    }, {});
  }, []);


  const style = queryParams.width
    ? { width: `${queryParams.width}px` }
    : undefined;

  const size = queryParams.size ?? 'normal';

  return (
    <div className={s.smartFilterPage}>
      <h4>Smart Chat</h4>
      <div className={s.filterBar} style={style}>
        <SmartChat size={size} />
      </div>
 
    </div>
  );
};
