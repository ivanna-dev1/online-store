export const PLACEHOLDER_IMAGE = "/img/mainimg.png";

export const ProductImage = ({ src, alt, className }) => (
  <img
    className={className}
    src={src || PLACEHOLDER_IMAGE}
    alt={alt}
    loading="lazy"
    onError={(e) => {
      if (!e.currentTarget.src.endsWith(PLACEHOLDER_IMAGE)) {
        e.currentTarget.src = PLACEHOLDER_IMAGE;
      }
    }}
  />
);
