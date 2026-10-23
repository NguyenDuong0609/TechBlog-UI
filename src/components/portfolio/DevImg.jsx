import React from 'react';
import Image from 'next/image';

const DevImg = ({ containerStyles, imgSrc, imgClasses }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt='' className={`object-cover ${imgClasses || ''}`} />
    </div>
  )
}

export default DevImg