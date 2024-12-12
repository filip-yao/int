import Image from "next/image";

interface Props {
  title: string;
  subtitle: string;
  image: string;
}

export default function Project({ image, subtitle, title }: Props) {
  return (
    <div className="bg-red-500">
      <Image src={`/projects/${image}`} alt={image} width={200} height={0} />
    </div>
  );
}
