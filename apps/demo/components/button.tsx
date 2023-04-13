import { NextLib } from '@next-ct-test/next-lib';

export default function Button(props: { text: string }) {
  return (
    <>
      <p className="text-blue-600">Button</p>
      <button className="text-white bg-black p-4">{props.text}</button>
      <NextLib />
    </>
  );
}
