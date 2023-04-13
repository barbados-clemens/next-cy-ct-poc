import { NextLib } from '@next-ct-test/next-lib';
export default function Button(props: { text: string }) {
  return (
    <>
      <button>{props.text}</button>;
      <NextLib />
    </>
  );
}
