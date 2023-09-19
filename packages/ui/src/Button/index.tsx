import { ButtonHTMLAttributes } from 'react';

function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} />;
}

export { Button };
