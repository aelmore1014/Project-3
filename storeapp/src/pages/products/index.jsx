import React from "react";
import Navbar from "../../components/navbar";
import Layout from "../../components/layout";

import Store from "../../components/store";

export default function ProductsPage() {
  return (
    <div>
    <Navbar />
    <Layout title="Available Products">
      <Store />
    </Layout>
    </div>
  );
}