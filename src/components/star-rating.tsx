import { StarIcon } from "lucide-react";

export interface StarRatingProps {
  rating: number;
}

export const StarRating = (props: StarRatingProps) => {
  const numStars = Math.round(props.rating / 2);

  const fullStars = [];
  const emptyStars = [];

  for (let i = 0; i < 5; i++) {
    if (i < numStars) {
      fullStars.push(i);
    } else {
      emptyStars.push(i);
    }
  }

  return (
    <div className="flex items-center justify-center gap-px">
      {fullStars.map((index) => (
        <StarIcon
          key={index}
          className="size-4 fill-yellow-500 text-yellow-500"
        />
      ))}
      {emptyStars.map((index) => (
        <StarIcon key={index} className="size-4 text-yellow-500" />
      ))}
    </div>
  );
};
