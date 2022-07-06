import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

import { Button } from './styles';

type SocialButtonProps = {
  provider: 'google' | 'facebook';
}

export function SocialButton({ provider }: SocialButtonProps) {
  return (
    <Button>
        {
          provider === 'google' ?
            <>
              <FcGoogle />
              <span>Entre com o Google</span>
            </> :
            <>
              <FaFacebook />
              <span>Entre com o FaceBook</span>
            </>
        }
    </Button>
  );
}