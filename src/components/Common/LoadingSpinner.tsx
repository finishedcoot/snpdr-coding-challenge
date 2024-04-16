import React, {FC} from 'react';
import {cn} from "@/components/utils";
interface LoadingSpinner {
    className?: string
}
const LoadingSpinner:FC<LoadingSpinner> = ({ className}) => {
    return (
        <div data-testid='loading-spinner' className={cn('flex items-center justify-center min-h-[300px] w-full', className)}>
            <div className="loader"></div>
        </div>
    );
};

export default LoadingSpinner;