interface Props {
  title: string;
}

export default function Title({ title }: Props) {
  return <h2 className="text-4xl font-semibold text-center">{title}</h2>;
}
