import { useEffect, useState } from 'react';
import * as React from 'react';

export default function RedoclyLogo(): JSX.Element | null {
  const [isDisplay, setDisplay] = useState(false);

  useEffect(() => {
    setDisplay(true);
  }, []);

  return isDisplay ? (
    <img
      alt={'redocly logo'}
      onError={() => setDisplay(false)}
      src={
        'https://media.licdn.com/dms/image/C4E0BAQGmnkpPk41dzw/company-logo_200_200/0/1678977923845?e=1727308800&v=beta&t=39swqypU4t7ncAVhkKIKc2SQ1pYcmNaajs_G30nerV8'
      }
    />
  ) : null;
}
