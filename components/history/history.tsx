'use client'
import { useContext } from 'react';
import { DetailHistory } from '@/app/provider';

export default function History() {
    const historyState = useContext(DetailHistory);

    return (
        <div style={{marginBottom: '20px'}}>
            Last visited articles:
            {historyState.map((item: string, index) => {
                    if (index < historyState.length - 1) {
                        return (
                            <span key={item}>{item}, </span>
                        )
                    }
                    return (
                        <span key={item}>{item}</span>
                    )
                }
            )}
        </div>
    )
}
