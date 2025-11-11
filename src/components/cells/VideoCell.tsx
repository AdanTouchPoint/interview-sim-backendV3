'use client'

import React from 'react';

export default function VideoCell({ cellData }: { cellData: string }) {
  console.log(cellData);
  const URL_SERVICE = process.env.NEXT_PUBLIC_URL_SERVICE || '';
  const getVideo = async ()  => {   
console.log('video id', cellData);
const req = await fetch(URL_SERVICE, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ objectName: cellData }),
})
if (req.status === 200) {
  const signedUrl  = await req.json();
  window.open(signedUrl[0].signedUrl, '_blank');
}
  }
  return (
    <div>
      {cellData ? <button onClick={getVideo}> Ver video </button> : 'No hay video'}
    </div>
  )
}   