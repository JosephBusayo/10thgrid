export default function Heading({ text, highlight, className = "" }) {
  return (
    <h2
      className={`text-[38px] md:text-[48px] text-center max-w-[245px] md:max-w-[290px] mx-auto leading-[38px] pb-6 tracking-[-4%] ${className}`}
    >
      {text} <span className="font-goudy italic">{highlight}</span>
    </h2>
  );
}
