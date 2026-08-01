import styles from './CoverImage.module.css';

// Renders an image cropped to fill its container, optionally offset/zoomed
// to a stored focal point ({ x, y, sx, sy }, percents from center).
export default function CoverImage({ src, alt = '', focal, radius = 0, className = '', style }) {
  const { x = 0, y = 0, sx = 1, sy = 1 } = focal ?? {};
  return (
    <div className={`${styles.frame} ${className}`} style={{ borderRadius: radius, ...style }}>
      <img
        src={src}
        alt={alt}
        style={{
          objectPosition: `${50 + x}% ${50 + y}%`,
          transform: sx !== 1 || sy !== 1 ? `scale(${sx}, ${sy})` : undefined,
        }}
      />
    </div>
  );
}
