const BASE_URL = "https://baby-server.herokuapp.com";

export async function fetchAsync(
  method: "GET" | "POST" | "DELETE" | "PUT",
  url: string,
  body?: string,
  accessToken?: string,
) {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  if (accessToken) {
    headers.Authorization = `Token ${accessToken}`;
    console.log(headers);
  }

  const response = await fetch(`${BASE_URL}${url}`, {
    method,
    mode: "cors",
    headers,
    body,
  });
  if (response.status === 422) {
    alert("Введены неверные данные");
  }
  const result = await response.json();

  if (!response.ok) {
    throw result;
  }
  // console.log(result);

  return result;
}

export function get<T>(url: string, accessToken?: string): Promise<T> {
  return fetchAsync("GET", url, undefined, accessToken);
}

export function post<T>(
  url: string,
  body: string,
  accessToken?: string,
): Promise<T> {
  return fetchAsync("POST", url, body, accessToken);
}

export function del(url: string, accessToken: string) {
  return fetchAsync("DELETE", url, accessToken);
}

export function put(url: string, body: string) {
  return fetchAsync("PUT", url, body);
}
