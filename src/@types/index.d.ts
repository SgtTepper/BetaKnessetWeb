import { ComponentType } from "react";

declare global {
    declare namespace React {
        function lazy<T extends ComponentType<any>>(
            factory: () => Promise<{ default: T }>
        ): T;
    }
}
