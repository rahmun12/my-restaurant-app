export default function CardProduct({
    title,
    price,
    category,
    description,
    image,
  }) {
    try {
      return (
        <div className="card bg-base-100 w-96 h-full shadow-xl">
          <figure>
            <img
              className="w-[320px] h-[160px] object-contain"
              src={image}
              alt={title}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {title}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="line-clamp-2">{description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{price}</div>
              <div className="badge badge-outline">{category}</div>
            </div>
          </div>
        </div>
      );
    } catch (error) {
      console.log(error);
    }
  }