
interface CardProps {
  image: string;
  title: string;
  text: string;
}

export default function Card ({ image, title, text }:CardProps) {
  return (
    <div className="w-64 bg-white rounded-xl border-2  border-black p-1">
      <img src={image} alt="Imagem" className="w-full rounded-xl" />
      <h2 className="flex justify-center text-xl font-bold mt-4 text-black">{title}</h2>
      <p className="text-center mt-2 text-black">{text}</p>
    </div>
  );
}

