function CardRow({ name, value }) {
  return (
    <div className="tailwind.config.jsgrid tailwind.config.jsgrid-cols-[1fr_2fr] ">
      <span>{name}</span>
      <span className="tailwind.config.jsfont-medium">{value}</span>
    </div>
  );
}
export default CardRow;
