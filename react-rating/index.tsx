
import React from 'react';

interface StarProps {
  filledPercentage: number;
  id: number;
}

const Star: React.FC<StarProps> = ({ filledPercentage, id }) => {
  const getOffsetValue = (percentage: number) => {
    if (percentage === 0) return '0%';
    if (percentage < 37.5) return '25%';
    if (percentage < 62.5) return '50%';
    if (percentage < 100) return '75%';
    return '100%';
  };

  const offsetValue = getOffsetValue(filledPercentage);
  const gradientId = `grad-${id}`;

	return (
		<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
			<defs>
			<linearGradient id={gradientId}>
				<stop offset={offsetValue} stopColor="#FCD503"/>
				<stop offset={offsetValue} stopColor="#D9D9D9"/>
			</linearGradient>
			</defs>
			<path fill={`url(#${gradientId})`} d="M6.37125 0.638877C6.57808 0.222596 7.17192 0.222594 7.37875 0.638876L9.06793 4.03863C9.14983 4.20348 9.30721 4.31782 9.4893 4.34478L13.2447 4.9007C13.7045 4.96877 13.888 5.53354 13.556 5.85889L10.8446 8.51598C10.7131 8.64482 10.653 8.82983 10.6837 9.01133L11.3154 12.7547C11.3928 13.213 10.9123 13.5621 10.5003 13.3469L7.13542 11.5893C6.97227 11.5041 6.77773 11.5041 6.61458 11.5893L3.24967 13.3469C2.83766 13.5621 2.35724 13.213 2.43459 12.7547L3.06634 9.01133C3.09697 8.82983 3.03686 8.64482 2.90539 8.51598L0.194018 5.85889C-0.137975 5.53354 0.0455279 4.96877 0.505349 4.9007L4.2607 4.34478C4.44279 4.31782 4.60017 4.20348 4.68207 4.03863L6.37125 0.638877Z" />
		</svg>
	);
};	


const Rating = ({rating, reviews, platform} : {rating: number, reviews: number, platform: string}) => {

	const starsBase = 5

	const getStarPercentage = (index: number) => {
		const starNumber = index + 1;
		if (rating >= starNumber) {
		  return 100; // La estrella está completamente llena
		} else if (rating < starNumber - 1) {
		  return 0; // La estrella está vacía
		} else {
		  return (rating - (starNumber - 1)) * 100; // La estrella está parcialmente llena
		}
	  };

	return (
		<div className="rating">
			{Array.from({ length: starsBase }, (_, i) => (
				<Star key={i} id={i} filledPercentage={getStarPercentage(i)} />
			))}

		</div>
	);
};

export default Rating;