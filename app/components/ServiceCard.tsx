type ServiceCardProps = {
  title: string;
  description: string;
  bullets: string[];
  price: string;
};

export default function ServiceCard({ title, description, bullets, price }: ServiceCardProps) {
  return (
    <article className="card">
      <h3 className="text-lg font-semibold text-gold">{title}</h3>
      <p className="text-sm text-gray-300 mt-2">{description}</p>
      <ul className="list-disc list-inside text-sm mt-2 text-gray-300">
        {bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="text-sm text-gray-300 mt-2 font-semibold">{price}</p>
    </article>
  );
}
