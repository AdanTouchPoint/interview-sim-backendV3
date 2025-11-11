

import React from 'react';
export default function VideoField({ data }: { data: string }) {
  console.log(data);
  const URL_SERVICE = process.env.NEXT_PUBLIC_URL_SERVICE || '';
  const getVideo = async ()  => {   
  //const idVideo = data.videoId;
  const req = await fetch(URL_SERVICE, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ objectName: idVideo }),
})
if (req.status === 200) {
  const signedUrl  = await req.json();
  window.open(signedUrl[0].signedUrl, '_blank');
}
  }
  return (
    <div>
      {data ? <button onClick={getVideo}> Ver video </button> : 'No hay video'}
    </div>
  )
}   