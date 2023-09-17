import { Input } from 'ui';
import { useInput } from 'hooks';

export default function Home() {
  const [value, onChange] = useInput('app1');

  return (
    <>
      <Input value={value} onChange={onChange} />
      {value}
    </>
  );
}
