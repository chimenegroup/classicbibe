import React, { useState } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    className?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
                                                                  src,
                                                                  alt,
                                                                  className = '',
                                                                  ...props
                                                              }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`relative overflow-hidden bg-slate-800/50 ${className}`}>
            {/* Squelette de chargement en arrière-plan */}
            {!isLoaded && (
                <div className="absolute inset-0 bg-slate-800 animate-pulse rounded-inherit" />
            )}

            <img
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                onLoad={() => setIsLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                {...props}
            />
        </div>
    );
};