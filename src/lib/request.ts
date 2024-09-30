type RequestMethod = "GET" | "POST";

export interface RequestOptions {
  method?: RequestMethod;
  path: string;
  body?: any;
}

export interface RequestError {
  message?: string;
}

export async function request<T>({
  method = "GET",
  path,
  body,
}: RequestOptions): Promise<T | RequestError> {
  const base = process.env.BACKEND_API_URL;

  const requestUrl = `${base}/${path}`;

  const headers: Record<string, string> = {};

  if (method === "POST") {
    headers["Content-Type"] = "application/json";
  }

  const response = await fetch(requestUrl, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    return {
      message: response.statusText,
    };
  }

  const data: T = await response.json();

  return data;
}
