import React from "react";

function Cards({ item }) {
  return (
    <div className="mt-4 my-3 p-3">
      <>
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img
              src={item.image}
              className=" h-96 w-full object-cover"
              alt="This is Books"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title flex justify-between">
              <p className=" text-clip w-2/3 text-nowrap"> {item.name}</p>
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p
              className="h-20 text-ellipsis text-pretty
            "
            >
              {item.description}
            </p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Cards;
