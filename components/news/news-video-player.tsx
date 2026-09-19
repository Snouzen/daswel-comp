"use client";

import * as React from "react";
import Image from "next/image";
import { Play, Video as VideoIcon } from "lucide-react";

interface NewsVideoPlayerProps {
  src: string;
  poster: string;
  title: string;
}

export function NewsVideoPlayer({ src, poster, title }: NewsVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  React.useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback if browser policies restrict unmuted playback
      });
    }
  }, [isPlaying]);

  return (
    <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-black shadow-lg border">
      {!isPlaying ? (
        <div
          onClick={handlePlay}
          className="relative w-full h-full cursor-pointer group select-none"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handlePlay();
            }
          }}
          aria-label={`Putar video liputan resmi ${title}`}
        >
          {/* Poster Image */}
          <Image
            src={poster}
            alt={title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 960px"
            className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          />

          {/* Dark scrim overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 group-hover:via-black/20 transition-colors" />

          {/* Top badge */}
          <div className="absolute top-4 left-4 z-10 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-black/75 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white shadow-md border border-white/10">
              <VideoIcon className="h-3.5 w-3.5 text-primary" />
              <span>Video Liputan Resmi</span>
            </span>
          </div>

          {/* Center Play Button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
            <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/90 ring-4 ring-white/20 group-hover:ring-primary/40">
              <Play className="h-7 w-7 sm:h-9 sm:w-9 fill-current ml-1" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-white/95 bg-black/60 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10 group-hover:bg-black/80 transition-colors">
              Klik untuk Putar Video Dokumentasi
            </span>
          </div>
        </div>
      ) : (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
}
