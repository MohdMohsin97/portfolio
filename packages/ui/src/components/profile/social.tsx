import { Twitter } from 'lucide-react';
import { SocialType } from './profile' 

export const Social = ( {name, link, svg}: SocialType ): JSX.Element => {
  return <div>
        
       {svg}
  </div>;
};
