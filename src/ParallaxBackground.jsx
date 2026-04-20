import starIcon from './assets/star.svg';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const PARALLAX_STARS = [
  {
    id: 1,
    top: (scrollY) => clamp(200 - scrollY * 0.3, 0, 700),
    left: '5%',
    right: 'auto',
  },
  {
    id: 2,
    top: (scrollY) => clamp(400 - scrollY * 0.6, 100, 700),
    left: (scrollY) => clamp(700 - scrollY * 0.3, 450, 700),
    right: 'auto',
  },
  {
    id: 3,
    top: (scrollY) => clamp(49 - scrollY * 0.6, -1000, 49),
    left: 'auto',
    right: 450,
  },
  {
    id: 4,
    top: (scrollY) => clamp(100 - scrollY * 0.4, -1000, 100),
    left: 'auto',
    right: (scrollY) => clamp(300 - scrollY * 0.1, 100, 300),
  },
  {
    id: 5,
    top: (scrollY) => clamp(0 + scrollY * 0.2, 0, 150),
    left: 'auto',
    right: (scrollY) => clamp(200 - scrollY * 0.1, 150, 200),
  },
  {
    id: 6,
    top: '800px',
    left: '50%',
    right: 'auto',
    static: true,
  },
];

const imageStyles = {
  position: 'absolute',
  width: '150px',
  height: '150px',
  objectFit: 'cover',
  transition: 'transform 0.15s ease-in-out',
};

export function ParallaxBackground({ scrollY }) {
  return (
    <div className="background">
      {PARALLAX_STARS.map((star) => {
        const style = {
          ...imageStyles,
          top: typeof star.top === 'function' ? star.top(scrollY) : star.top,
          left: typeof star.left === 'function' ? star.left(scrollY) : star.left,
          right: typeof star.right === 'function' ? star.right(scrollY) : star.right,
        };

        return (
          <img
            key={star.id}
            src={starIcon}
            alt="Decorative star element"
            style={style}
          />
        );
      })}
    </div>
  );
}
