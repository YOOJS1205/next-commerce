import React from "react";

export default function OrderDetails({ params, searchParams }) {
  const { id } = params;
  const { hello } = searchParams;

  console.log(id, hello);
  return (
    <div>
      {id} {hello}
    </div>
  );
}
