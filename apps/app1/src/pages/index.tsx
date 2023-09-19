import { Input } from 'ui';
import { useInput } from 'hooks';

export default function Home() {
  const [value, onInput] = useInput('');

  return (
    <div>
      <Input onChange={onInput} value={value} />
      {value}
    </div>
  );
}
