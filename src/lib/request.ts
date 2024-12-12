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
  });

  // Handle empty responses
  const contentLength = response.headers.get("content-length");
  const hasNoContent = contentLength === "0" || response.status === 204;

  if (hasNoContent) {
    return {
      success: true,
      data: undefined as T,
    };
  }
  const data: Response<T> = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: data.message,
    };
  }

  return {
    success: true,
    data: data.data,
  };
}
