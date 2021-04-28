import React from 'react';
import { ReactNode } from 'react';

import { FlexDirection, JustifyContent, FlexWrap, AlignItems } from "../sharedTypes"

export type FlexLayoutProps {
   /** The children property sets the container for the flex item
    */
    children?: ReactNode;
    /** Container props
     ----------------------*/

    /** The flexDirection property sets how flex items are placed in the
     * flex container defining the main axis and the direction. value 'row'
     * as default
     */
    flexDirection?: FlexDirection;

    /** The justifyContent property defines how the browser distributes space
     * between and around content items along the flex container
     */
    justifyContent?: JustifyContent;

    /** The flexWrap property sets whether flex items are forced onto one line
     * or can warp onto multiple lines.
     */
    flexWrap?: FlexWrap;

    /** The alignItems items property controls the alignment of flex items on
     * the cross axis
     */
    alignItems?: AlignItems;

    /** Chlid props
     ----------------------*/

    /** The flexGrow property sets the flex grow factor of a flex item's
     * main size
     */
    flexGrow?: number;

    /** The flexShrink property sets the flex shrink of a flex item
     */
    flexShrink?: number;

    /** The flexBasis property sets the initial main size of a flex item.
     */
    flexBasis?: number;

    /** The flex property is a shorthand that sets a flex item will grow or
     * shrink to fit the space availables in its flex container
     */
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


