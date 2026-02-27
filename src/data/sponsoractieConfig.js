// src/data/sponsoractieConfig.js

// 1: https://www.ing.nl/payreq/m/?trxid=6p1z8a4WRw5hOYAgreBhyBKD2i8YD4He
// 2: https://www.ing.nl/payreq/m/?trxid=KKHqMSpXDEdqYpTzsGKJPRfq5tjxdydO
// 3: https://www.ing.nl/payreq/m/?trxid=DnLNcDwRBkvQgNE1j0Ilf11RRrCAgDjo
// 4: https://www.ing.nl/payreq/m/?trxid=p083zppsFkbzKZa9s0rWHQ9fJTfjg85Y
// 5: https://www.ing.nl/payreq/m/?trxid=ooM4UoaAp80AoWz1xwQj4MgYlrx4dcS1
//
// geldig tot: 1 aapril 2026


const {
  NEXT_PUBLIC_SPONSOR_PAYMENT_URL_1,
  NEXT_PUBLIC_SPONSOR_PAYMENT_URL_2,
  NEXT_PUBLIC_SPONSOR_PAYMENT_URL_3,
  NEXT_PUBLIC_SPONSOR_PAYMENT_URL_4,
  NEXT_PUBLIC_SPONSOR_PAYMENT_URL_5,
} = process.env;

export const sponsoractieConfig = {
  paymentUrls: [
    NEXT_PUBLIC_SPONSOR_PAYMENT_URL_1,
    NEXT_PUBLIC_SPONSOR_PAYMENT_URL_2,
    NEXT_PUBLIC_SPONSOR_PAYMENT_URL_3,
    NEXT_PUBLIC_SPONSOR_PAYMENT_URL_4,
    NEXT_PUBLIC_SPONSOR_PAYMENT_URL_5,
  ].filter(Boolean),
  buttonLabel: "Doneer voor de sponsoractie",
};