type RequestMethod = "GET" | "POST";

export interface RequestOptions {
  method?: RequestMethod;
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any;
}

export interface RequestError {
  success: false;
  message?: string;
}

export interface RequestSuccess<T> {
  success: true;
  data: T;
}

interface Response<T> {
  data: T;
  message?: string;
}

export async function request<T>({
  method = "GET",
  path,
  body,
}: RequestOptions): Promise<RequestSuccess<T> | RequestError> {
  const base = process.env.NEXT_PUBLIC_BACKEND_API_URL;

  const requestUrl = `${base}/${path}`;

  const headers: Record<string, string> = {};

  if (method === "POST") {
    headers["Content-Type"] = "application/json";
  }

  const response = await fetch(requestUrl, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
    cache: "no-store",
  });

  if (!response.ok) {
    return {
      success: false,
      message: response.statusText,
    };
  }

  const data: Response<T> = await response.json();

  return {
    success: true,
    data: data.data,
  };
}
