'use client';

import { useEffect } from "react";

export const MswComponent = () => {

    useEffect(() => {
        // window인 경우 브라우저가 존재.
        if(typeof window !== 'undefined') {
            if(process.env.NEXT_PUBLIC_API_MOCKING === 'enabled'){
                // eslint-disable-next-line @typescript-eslint/no-require-imports
                require("@/mocks/browser");
            }
        }
    },[])

    return null;
}