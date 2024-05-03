import photoGrid from "../../images/photo-grid.png";
export default function Hero() {
  return (
    <div className="container mx-auto p-10 ">
      <div className="mx-auto ">
        <img src={photoGrid} alt="" className="mx-auto max-h-[40vh]" />
      </div>

      <div className="pt-12 ">
        <h1 className="text-4xl font-semibold md:text-6xl">
          Online Expreinces
        </h1>
        <p className="max-w-[55ch] py-4 text-lg md:text-2xl">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
