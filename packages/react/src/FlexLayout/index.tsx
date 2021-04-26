import React from 'react';
import { ReactNode } from 'react';

import {flexDirection, JustifyContent, FlexWrap, AlignItems} from "../sharedTypes"

interface FlexLayoutProps {
    children?: ReactNode;
    /** Container props
     ----------------------*/
    flexDirection?: flexDirection;
    justifyContent?: JustifyContent;
    flexWrap?: FlexWrap;
    alignItems?: AlignItems;
    /** Chlid props
     ----------------------*/
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: number;
    flex?: string;
}

const FlexLayout: React.FC<FlexLayoutProps> = ((
    {
        children,
        flexDirection = 'row',
        justifyContent,
        flexWrap,
        alignItems,
        flexGrow,
        flexShrink,
        flexBasis,
        flex
    }
) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: justifyContent,
                flexDirection: flexDirection,
                flexGrow: flexGrow,
                flexBasis: flexBasis,
                flexShrink: flexShrink,
                flexWrap: flexWrap,
                flex: flex,
                alignItems: alignItems
            }}
        >
            children = {children}
        </div>
    )
})


export default FlexLayout;


