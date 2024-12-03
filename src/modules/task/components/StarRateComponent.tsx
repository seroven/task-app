import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

interface StarRateComponentProps {
  rate: number | null;
  readonly: boolean;
}

export const StarRateComponent = ({
  rate,
  readonly
}: StarRateComponentProps) => {
  const [stars, setStars] = useState<boolean[]>([]);

  useEffect(() => {
    const data: boolean[] = [];
    for (let i = 1; i <= 5; i++) {
      if (rate && i <= rate) data.push(true);
      else data.push(false);
    }
    setStars(data);
  }, []);

  return (
    <>
      {stars.map((star, key) => {
        star;
        return (
          <FontAwesomeIcon
            key={key}
            icon={faStar}
            className={star ? 'text-yellow-400' : 'text-gray-600'}
          />
        );
      })}
    </>
  );
};
