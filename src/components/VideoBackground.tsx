import { useState, useRef, useEffect } from 'react';

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  className?: string;
  overlayClassName?: string;
  fallbackImage?: string;
  layout?: 'cover' | 'contained';
  glowColor?: string;
}

const VideoBackground = ({
  src,
  poster,
  className = "absolute inset-0 w-full h-full object-cover",
  overlayClassName = "absolute inset-0 bg-black/30",
  fallbackImage,
  layout = 'cover',
  glowColor,
}: VideoBackgroundProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay blocked or error - will show poster
      });
    }
  }, []);

  // Contained layout: portrait frame with glow
  if (layout === 'contained') {
    if (hasError && fallbackImage) {
      return (
        <div className="relative" style={{ width: 'clamp(240px, 50vw, 380px)' }}>
          {glowColor && (
            <div
              className="absolute -inset-8 rounded-3xl blur-2xl opacity-30"
              style={{ backgroundColor: glowColor }}
            />
          )}
          <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <img src={fallbackImage} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      );
    }

    return (
      <div className="relative" style={{ width: 'clamp(240px, 50vw, 380px)' }}>
        {glowColor && (
          <div
            className="absolute -inset-8 rounded-3xl blur-2xl opacity-30"
            style={{ backgroundColor: glowColor }}
          />
        )}
        <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster={poster}
            className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoadedData={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            preload="metadata"
          >
            <source src={src} type="video/mp4" />
          </video>

          {!isLoaded && poster && (
            <img
              src={poster}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            />
          )}

          {/* Bottom gradient inside frame */}
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </div>
    );
  }

  // Cover layout (original behavior)
  if (hasError && fallbackImage) {
    return (
      <div className="absolute inset-0">
        <img
          src={fallbackImage}
          alt=""
          className={className}
        />
        <div className={overlayClassName} />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        className={`${className} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoadedData={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
      </video>

      {!isLoaded && poster && (
        <img
          src={poster}
          alt=""
          className={`${className} transition-opacity duration-500`}
        />
      )}

      <div className={overlayClassName} />
    </div>
  );
};

export default VideoBackground;
