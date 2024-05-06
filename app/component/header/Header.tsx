import { createClient } from "@/prismicio";
import React from "react";

export default async function Header() {
  const client = createClient();

  const home = await client.getSingle("home");
  return (
    <div className="text-[30px] font-bold text-center py-8">
      {home.data.header}
    </div>
  );
}
