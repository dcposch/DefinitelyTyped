// Type definitions for React (react-addons-transition-group) 15.0
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ComponentClass, TransitionGroupProps } from "react";

declare module "react" {
    export interface HTMLTransitionGroupProps<T> extends HTMLAttributes<T> {
        component?: ElementType | undefined;
        childFactory?: ((child: ReactElement) => ReactElement) | undefined;
    }

    export interface TransitionGroupProps extends HTMLTransitionGroupProps<ReactTransitionGroup> {
    }
}

declare var ReactTransitionGroup: ReactTransitionGroup;
type ReactTransitionGroup = ComponentClass<TransitionGroupProps>;
export = ReactTransitionGroup;
