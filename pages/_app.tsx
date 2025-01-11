import "../styles/globals.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Trigger the cron job by calling the API route
    fetch("/api/cron")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error starting cron job:", error));
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
