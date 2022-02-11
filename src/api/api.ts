const BASE_URL = "http://localhost:3030";

export async function fetchAsync(
  method: "GET" | "POST" | "DELETE" | "PUT",
  url: string,
  body?: string,
  access_token?: string,
) {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  if (access_token) {
    headers.Authorization = `Token ${access_token}`;
  }

  const response = await fetch(`${BASE_URL}${url}`, {
    method,
    mode: "cors",
    headers,
    body,
  });

  const result = await response.json();

  if (!response.ok) {
    throw result;
  }
  // console.log(result);

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
