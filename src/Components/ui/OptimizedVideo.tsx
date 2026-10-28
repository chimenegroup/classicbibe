import React from 'react';

interface OptimizedVideoProps {
    src: string;
    poster?: string;
    className?: string;
}

export const OptimizedVideo: React.FC<OptimizedVideoProps> = ({
                                                                  src,
                                                                  poster,
                                                                  className = ''
                                                              }) => {
    return (
        <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={poster}
            className={`w-full h-full object-cover ${className}`}
        >
            <source src={src} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de cette vidéo.
        </video>
    );
};