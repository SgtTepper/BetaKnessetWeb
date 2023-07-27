import { ComponentType } from "react";

declare global {
    namespace React {
        function lazy<T extends ComponentType<any>>(
            factory: () => Promise<{ default: T }>
        ): T;
    }
}
