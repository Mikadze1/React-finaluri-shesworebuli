import { useEffect, useState } from "react";
import styles from "./Stars.module.css";

const Star = ({
  index,
  setCount,
  setDrawCount,
  isEditable,
  isFull,
  starSize,
}) => {
  return (
    <button
      className={isEditable ? styles.hoverable : ""}
      type="button"
      onClick={() => isEditable && setCount(index + 1)}
      onMouseOver={() => isEditable && setDrawCount(index + 1)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={starSize}
        height={starSize}
        viewBox="0 0 24 24"
        fill={isFull ? "#FAD409" : "transparent"}
        stroke={isFull ? "#FAD409" : "#616161"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    </button>
  );
};

const Stars = ({
  count,
  setCount = null,
  maxCount = 5,
  starSize = "1.45rem",
  starGap = "0.4rem",
}) => {
  const editable = setCount !== null;

  const [drawCount, setDrawCount] = useState(count);
  useEffect(() => {
    setDrawCount(count);
  }, [count]);

  return (
    <div className={styles.starsContainer}>
      <p>{count} out of 5</p>
      <div
        className={styles.stars}
        style={{ gap: starGap }}
        onMouseLeave={() => editable && setDrawCount(count)}>
        {[...Array(maxCount)].map((_, index) => (
          <Star
            key={index}
            index={index}
            starSize={starSize}
            setCount={setCount}
            setDrawCount={setDrawCount}
            isEditable={editable}
            isFull={drawCount - index > 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Stars;
