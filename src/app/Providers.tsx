"use client";
//must have the clint Component

import React from "react";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "./store";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function Providers({ children }: { children: React.ReactNode }) {
  const initialOptions = {
    "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string,
    currency: "USD",
    intent: "capture",
  };
  return (
    <Provider store={store}>
      <PayPalScriptProvider options={initialOptions}>
        <SessionProvider>{children}</SessionProvider>
      </PayPalScriptProvider>
    </Provider>
  );
}

export default Providers;
