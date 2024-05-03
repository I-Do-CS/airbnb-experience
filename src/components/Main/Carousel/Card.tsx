import star from "../../../images/star.png";

export default function Card(props: experience) {
  const { title, rating, ratingCount, imgUrl, price, status } = props;

  return (
    <div className="flex w-[240px] flex-col gap-2">
      <div>
        <span className="relative left-3 top-3 rounded-[3px] bg-neutral-100 px-2 py-1 uppercase opacity-85">
          {status}
        </span>
        <img
          src={imgUrl}
          alt=""
          className="mt-[-24px] h-[350px] min-w-full cursor-pointer rounded-2xl object-cover"
        />
      </div>

      <div>
        <span className="flex items-center gap-2 tracking-tight">
          <img src={star} alt="" className="pb-1" />
          {rating}
          <span className="font-semibold text-gray-400">
            {" "}
            ({ratingCount}) &middot; USA
          </span>
        </span>

        <h2 className="text-gray-600">{title}</h2>

        <p>
          <span className="font-semibold">From ${price}</span>
          <span className="text-gray-600"> / person</span>
        </p>
      </div>
    </div>
  );
}
