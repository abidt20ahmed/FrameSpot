'use client'
import React from 'react';
import { useRouter } from 'next/navigation'
const FullPage = () => {
const router = useRouter();
  const image = router.query;
  // console.log(image);
    return (
        <div>
           FullPage 
        </div>
    );
};

export default FullPage;