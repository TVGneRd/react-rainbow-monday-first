import { PropsWithChildren, ReactNode, RefObject } from 'react';
import { TriggerElementRefFunction } from '../InternalOverlay';
import { BaseProps } from '../types';

export interface InternalTooltipProps extends BaseProps {
    preferredPosition?: 'top' | 'bottom' | 'left' | 'right';
    isVisible?: boolean;
    triggerElementRef?: RefObject<HTMLElement> | TriggerElementRefFunction;
}

export default function(props: PropsWithChildren<InternalTooltipProps>): JSX.Element | null;
