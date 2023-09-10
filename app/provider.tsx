'use client'

import { createContext, useState } from 'react'

export const DetailHistory = createContext([]);
export const DispatchDetailHistory = createContext((value: any) => {});

export default function Provider({children}: {children: React.ReactNode}) {
    const [historyState, setHistoryState] = useState([]);

    return (
        <DetailHistory.Provider value={historyState}>
            <DispatchDetailHistory.Provider value={setHistoryState}>
                {children}
            </DispatchDetailHistory.Provider>
        </DetailHistory.Provider>
    )
}
