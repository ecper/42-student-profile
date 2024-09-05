// import Image from 'next/image';

type Props = {
  src: string;
  intra: string;
};

export default function ProfileImage({ src, intra }: Props) {
  return (
    <img
      src={src}
      width={250}
      height={250}
      alt={`${intra}'profile`}
      className='rounded-full'
    />
  );
}
