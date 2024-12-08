import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

interface StarRateComponentProps {
  rate: number | null;
  readonly?: boolean;
  onSelect?: Function;
  invalid?: boolean;
}

export const StarRateComponent = ({ rate, readonly = true, onSelect, invalid = false }: StarRateComponentProps) => {
  const [stars, setStars] = useState<boolean[]>([]);
  const [hasSelected, setHasSelected] = useState<boolean>(false);

  useEffect(() => {
    const data = getHighlightStars(rate);
    setStars(data);
  }, []);

  useEffect(() => {
    if (!hasSelected && onSelect) onSelect(0);
  }, [hasSelected]);

  const getHighlightStars = (rate: number | null): boolean[] => {
    const data: boolean[] = [];
    for (let i = 1; i <= 5; i++) {
      if (rate && i <= rate) data.push(true);
      else data.push(false);
    }
    return data;
  };

  const onStarHover = (key: number, isEnter: boolean) => {
    if (readonly || hasSelected) return;
    const data = getHighlightStars(isEnter ? key + 1 : null);
    setStars(data);
  };

  const onStarClick = (key: number) => {
    if (!onSelect) return;
    onSelect(key + 1);
    setHasSelected(true);
  };

  return (
    <>
      {stars.map((star, key) => {
        return (
          <FontAwesomeIcon
            key={key}
            icon={faStar}
            className={`transition-all  ${star && !invalid ? 'text-yellow-400' : 'text-gray-600'} ${
              invalid && 'text-red-400'
            } ${!readonly && 'hover:cursor-pointer'}`}
            onMouseEnter={() => {
              setHasSelected(false);
              onStarHover(key, true);
            }}
            onMouseLeave={() => onStarHover(key, false)}
            onClick={() => onStarClick(key)}
          />
        );
      })}
    </>
  );
};
