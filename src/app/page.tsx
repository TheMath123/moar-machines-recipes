import * as React from 'react'
import { HomePage } from "./home-page";

export default function Home() {
  return <React.Suspense>
    <HomePage />
  </React.Suspense>;
};
