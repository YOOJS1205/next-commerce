import React from "react";

export default function OrderDetails({ params }) {
  const { id } = params;
  return <div>{id}</div>;
}
