export class GsiPayload {

  private _aud: string;
  private _azp: string;
  private _email: string;
  private _email_verified: boolean;
  private _exp: number;
  private _given_name: string;
  private _iat: number;
  private _iss: string;
  private _jti: string;
  private _name: string;
  private _nbf: number;
  private _picture: string;
  private _sub: string;


  constructor(aud: string, azp: string, email: string, email_verified: boolean, exp: number, given_name: string, iat: number, iss: string, jti: string, name: string, nbf: number, picture: string, sub: string) {
    this._aud = aud;
    this._azp = azp;
    this._email = email;
    this._email_verified = email_verified;
    this._exp = exp;
    this._given_name = given_name;
    this._iat = iat;
    this._iss = iss;
    this._jti = jti;
    this._name = name;
    this._nbf = nbf;
    this._picture = picture;
    this._sub = sub;
  }


  get aud(): string {
    return this._aud;
  }

  set aud(value: string) {
    this._aud = value;
  }

  get azp(): string {
    return this._azp;
  }

  set azp(value: string) {
    this._azp = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get email_verified(): boolean {
    return this._email_verified;
  }

  set email_verified(value: boolean) {
    this._email_verified = value;
  }

  get exp(): number {
    return this._exp;
  }

  set exp(value: number) {
    this._exp = value;
  }

  get given_name(): string {
    return this._given_name;
  }

  set given_name(value: string) {
    this._given_name = value;
  }

  get iat(): number {
    return this._iat;
  }

  set iat(value: number) {
    this._iat = value;
  }

  get iss(): string {
    return this._iss;
  }

  set iss(value: string) {
    this._iss = value;
  }

  get jti(): string {
    return this._jti;
  }

  set jti(value: string) {
    this._jti = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get nbf(): number {
    return this._nbf;
  }

  set nbf(value: number) {
    this._nbf = value;
  }

  get picture(): string {
    return this._picture;
  }

  set picture(value: string) {
    this._picture = value;
  }

  get sub(): string {
    return this._sub;
  }

  set sub(value: string) {
    this._sub = value;
  }
}
