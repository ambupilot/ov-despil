// src/data/ouderbijdrageConfig.js

const {
  OUDERBIJDRAGE_PAYMENT_URL,
  OUDERBIJDRAGE_QR_VALID_UNTIL,
  OUDERBIJDRAGE_AMOUNT,
  OUDERBIJDRAGE_QR_IMAGE,
} = process.env;

export const ouderbijdrageConfig = {
  paymentUrl:
    OUDERBIJDRAGE_PAYMENT_URL ||
    "https://bank.nl/voorbeelddemo-link",
  paymentButtonLabel: "Betaal de ouderbijdrage",
  qrImageSrc:
    OUDERBIJDRAGE_QR_IMAGE ||
    "/images/qr/ouderbijdrage-qr.png",
  contributionAmount:
    OUDERBIJDRAGE_AMOUNT || "€25,- per leerling",
  qrValidUntilText:
    OUDERBIJDRAGE_QR_VALID_UNTIL ||
    "QR-code geldig t/m 31 januari 2025",
  paymentNote:
    "Vermeld bij de betaling altijd de naam en groep van uw kind(eren).",
};
