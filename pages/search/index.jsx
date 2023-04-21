import MainLayout from "@/components/layouts/main";
import React from "react";

export default function Search() {
  return <div>Search</div>;
}

Search.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
