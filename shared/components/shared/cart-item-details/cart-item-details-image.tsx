import React from 'react';
import {cn} from '../../../lib/utils'
import Image from 'next/image';

interface Props {
    src: string;
    className?: string;
}

export const CartItemDetailsImage: React.FC<Props> = ({src, className}) => {
    return (
      <div className={cn('w-[90px] h-[90px] overflow-hidden', className)}>
          <Image
            alt="img"
            width={90}
            height={90}
            src={src}
            className="w-full h-full object-cover"
          />
      </div>
    );
};
