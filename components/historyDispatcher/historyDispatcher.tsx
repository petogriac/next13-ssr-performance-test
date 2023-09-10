'use client';

import { useContext, useEffect } from 'react';
import { DispatchDetailHistory } from '@/app/provider';

export default function HistoryDispatcher({id}: {id: string}) {
    const dispatchHistory = useContext(DispatchDetailHistory);

    useEffect(() => dispatchHistory((history: any) => [...history, id]), []);

    return <></>
}
