import { AuthRequestType } from "../types";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const authService = {
  async login(body: AuthRequestType) {
    const res = await this._authFetch(`${SERVER_URL}/auth/login`, body);
    if (!res.ok) await this._handleErrors(res);
    return await res.json();
  },

  async register(body: AuthRequestType) {
    const res = await this._authFetch(`${SERVER_URL}/auth/register`, body);
    if (!res.ok) await this._handleErrors(res);
    return await res.json();
  },

  async logout() {
    const res = await fetch(`${SERVER_URL}/auth/logout`, {
      credentials: "include",
    });
    if (!res.ok) await this._handleErrors(res);
    return await res.json();
  },

  async getProfile() {
    const res = await fetch(`${SERVER_URL}/auth/profile`, {
      credentials: "include",
    });
    if (!res.ok) return null;
    return await res.json();
  },

  async addFavorite(serverId: string) {
    const res = await fetch(`${SERVER_URL}/auth/favorites/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ serverId }),
      credentials: "include",
    });
    if (!res.ok) return null;
    return await res.json();
  },

  async removeFavorite(serverId: string) {
    const res = await fetch(`${SERVER_URL}/auth/favorites/remove`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ serverId }),
      credentials: "include",
    });
    if (!res.ok) return null;
    return await res.json();
  },

  async _authFetch(route: string, body: AuthRequestType) {
    return await fetch(route, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      credentials: "include",
    });
  },

  async _handleErrors(res: Response) {
    const errorData = await res.json();
    const errorMessages = Array.isArray(errorData.message)
      ? errorData.message
      : [errorData.message || "Request failed"];

    const error = new Error(errorMessages.join(", "));
    (error as any).messages = errorMessages;
    throw error;
  },
};
