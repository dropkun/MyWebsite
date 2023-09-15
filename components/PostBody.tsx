import React, { ReactNode, HTMLAttributes } from 'react';
import { LayoutProps } from '@/.next/types/app/layout';

export default function PostBody({ children }: LayoutProps) {
    return (
        <div>
            {React.Children.map(children, (child: ReactNode) => {
                if (React.isValidElement(child)) {
                    if (child.type === 'h2') {
                        return React.cloneElement(child, { className: 'mt-8' } as HTMLAttributes<HTMLElement>);
                    } else if (child.type === 'h3') {
                        return React.cloneElement(child, { className: 'mt-6' } as HTMLAttributes<HTMLElement>);
                    }
                }
                return child;
            })}
        </div>
    );
}
