const BASE_URL = "http://localhost:3030";

// eslint-disable-next-line @typescript-eslint/naming-convention
let access_token: string | null =
  (window && window.localStorage && window.localStorage.getItem("jwt")) || "";

export function getToken() {
  return access_token;
}

export function setToken(token: string | null) {
  access_token = token;
  if (!window.localStorage) {
    return;
  }
  if (token) {
    window.localStorage.setItem("jwt", token);
  } else {
    window.localStorage.removeItem("jwt");
  }
}

export async function fetchAsync(
  method: "GET" | "POST" | "DELETE" | "PUT",
  url: string,
  body?: string,
) {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  if (access_token) {
    headers.Authorization = `Token ${access_token}`;
  }
  console.log("Token", access_token);
  const response = await fetch(`${BASE_URL}${url}`, {
    method,
    mode: "cors",
    headers,
    body,
  });

  if (response.status === 401) {
    setToken(null);
    throw new Error("401");
  }

  const result = await response.json();

  if (!response.ok) {
    throw result;
  }

  return result;
}

export function get<T>(url: string): Promise<T> {
  return fetchAsync("GET", url);
}

export function post<T>(url: string, body: string): Promise<T> {
  return fetchAsync("POST", url, body);
}

export function del(url: string) {
  return fetchAsync("DELETE", url);
}

export function put(url: string, body: string) {
  return fetchAsync("PUT", url, body);
}
