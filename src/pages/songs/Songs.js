import React from 'react';
import './songs.css';

const Songs = () => {
  const lyrics = `Verse 1:
I've loved you since we were young
Playing together under the sun
But I never knew what it could mean
I thought of you as just a cousin, not a queen

Chorus:
But my heart beats for you
I want to be with you, it's true
I'll massage your feet, be by your side
Even if I can't be your honey

Verse 2:
You were always different to me
But I didn't understand what it could be
I loved being with you, every moment
I didn't know my love for you was potent

Chorus:
But my heart beats for you
I want to be with you, it's true
I'll massage your feet, be by your side
Even if I can't be your honey

Bridge:
Now your marriage is fixed in time
My heart feels like it's on the line
You held my hand and cried
My heart was shattered, it felt like I died

Chorus:
But my heart beats for you
I want to be with you, it's true
I'll massage your feet, be by your side
Even if I can't be your honey

Outro:
My love for you will never fade
Even if it's hidden, and never displayed
I'll always be here for you, my heart will stay
Forever and always, by your side every day.`;

  return (
    <div className='box rounded-lg my-4 mx-4'>
      <h1 className='text-2xl text-center font-bold underline py-3'> Tittle: <span className='text-primary font-extrabold'> YOU  </span></h1>
      <pre className='font-semibold bg-slate-800 text-info rounded-3xl py-4 sm:text-sm md:text-2xl'>{lyrics}</pre>
    </div>
  );
}

export default Songs;
