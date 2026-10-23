'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="Dương Nguyễn - DevOps"
        width={160}
        height={48}
        priority
        className="h-10 w-auto object-contain"
      />
    </Link>
  )

}

export default Logo