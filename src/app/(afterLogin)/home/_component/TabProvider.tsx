'use client';

import { createContext, useState, Dispatch, SetStateAction } from "react";

interface TabContextType {
    tab: 'rec' | 'fol';
    setTab: Dispatch<SetStateAction<'rec' | 'fol'>>;
  }

export const TabContext = createContext<TabContextType>({
    tab: 'rec',
    setTab: () => {},
});

interface Props {
    children: React.ReactNode;
};

export default function TabProvider({children}: Props) {
    const [tab, setTab] = useState<'rec' | 'fol'>('rec');

    return (
        <TabContext.Provider value={{tab, setTab}}>
            {children}
        </TabContext.Provider>
    )
}