"use client";

import { useRef, useState } from "react";

const VIDEOS = [
  { src: "/videos/video-1.mp4", title: "UGC Example 1" },
  { src: "/videos/video-2.mp4", title: "UGC Example 2" },
  { src: "/videos/video-3.mp4", title: "UGC Example 3" },
  { src: "/videos/video-4.mp4", title: "UGC Example 4" },
  { src: "/videos/video-5.mp4", title: "UGC Example 5" },
  { src: "/videos/video-6.mp4", title: "UGC Example 6" },
  { src: "/videos/video-7.mp4", title: "UGC Example 7" },
  { src: "/videos/video-8.mp4", title: "UGC Example 8" },
];

function VideoCard({ video }: { video: (typeof VIDEOS)[number] }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  function handleClick() {
    const v = ref.current;
    if (!v) return;

    if (!playing) {
      v.muted = false;
      setMuted(false);
      v.play();
      setPlaying(true);
    } else if (muted) {
      v.muted = false;
      setMuted(false);
    } else {
      v.muted = true;
      setMuted(true);
    }
  }

  return (
    <div
      className="glow-card group bg-card border border-card-border rounded-2xl overflow-hidden hover:border-accent/30 transition-colors cursor-pointer"
      onMouseEnter={() => {
        if (!playing) {
          ref.current?.play();
          setPlaying(true);
        }
      }}
      onMouseLeave={() => {
        if (ref.current) {
          ref.current.pause();
          ref.current.currentTime = 0;
          ref.current.muted = true;
          setPlaying(false);
          setMuted(true);
        }
      }}
      onClick={handleClick}
    >
      <div className="video-card bg-card-border/40 relative">
        <video
          ref={ref}
          src={video.src}
          className="w-full h-full object-cover"
          playsInline
          muted
          loop
          preload="metadata"
        />

        {/* Play hint — shown when not playing */}
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white ml-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {/* Mute/unmute indicator — shown when playing */}
        {playing && (
          <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm rounded-full p-2 pointer-events-none">
            {muted ? (
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>
            )}
          </div>
        )}

        {/* Tap to unmute hint — shown briefly when playing and muted */}
        {playing && muted && (
          <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full animate-fade-in">
            Tap for sound
          </div>
        )}
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">
            My Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Top Performing Content
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Videos that drove real results — millions of impressions and
            thousands in GMV for the brands I partner with.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {VIDEOS.map((video) => (
            <VideoCard key={video.src} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
