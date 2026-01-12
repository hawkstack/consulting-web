"use client";

export default function RotatingCircle() {
  return (
    <div className="flex items-center justify-center mt-10">
      <div
        className="
          relative
          w-32 h-32
          rounded-full
          border-8 border-blue-500
          animate-rotate-slow
          pause-on-hover
        "
      >
        {/* Rotation indicator */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full" />
      </div>
    </div>
  );
}
