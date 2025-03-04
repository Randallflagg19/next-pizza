import React from 'react';
import Image from 'next/image';

interface Props {
	imageUrl: string;
	className?: string;
	size: 20 | 30 | 40;
}

const sizeMap = {
	20: 300,
	30: 400,
	40: 500,
};

export const PizzaImage: React.FC<Props> = ({ imageUrl, className, size }) => {
	const imageSize = sizeMap[size];
	const outerCircleSize = 370;
	const innerCircleSize = 450;

	return (
		<div className="flex items-center justify-center flex-1 relative">
			<Image
				width={imageSize}
				height={imageSize}
				src={imageUrl}
				alt="logo"
				className="relative left-[10px] top-[10px] transition-all z-10 duration-300 rounded-full object-cover max-w-full max-h-full"
			/> 
			<div
				className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted border-2 rounded-full bg-gray-100"
				style={{ width: innerCircleSize, height: innerCircleSize }}
			></div>
			<div
				className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full bg-gray-200"
				style={{ width: outerCircleSize, height: outerCircleSize }}
			></div>
		</div>
	);
};
