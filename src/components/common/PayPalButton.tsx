// components/PayPalButtonComponent.tsx
"use client";

import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButtonComponent: React.FC = () => {
  return (
    <div>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "100.00", // Specify the amount here
                },
              },
            ],
          });
        }}
        onApprove={(data, actions: any) => {
          return actions.order.capture().then((details: any) => {
            alert(`Transaction completed by ${details.payer.name.given_name}`);
          });
        }}
      />
    </div>
  );
};

export default PayPalButtonComponent;
