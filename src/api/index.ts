const isProduction = process.env.NODE_ENV === "production";

export const server = !isProduction
  ? "https://sharades-server.herokuapp.com:7052"
  : "http://localhost:8000";

type RequestProps = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  params?: any;
};

type HeadersProps = {
  Accept: string;
  "Content-Type": string;
};

export const apiRequest = async ({ method, url, params }: RequestProps) => {
  const headers: HeadersProps = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  let response;

  try {
    response = await fetch(`/api/v1${url}`, {
      method,
      body: JSON.stringify(params),
      headers,
    });
  } catch (error) {
    throw new Error(error);
  }

  const headersType = response.headers.get("content-type");

  if (headersType && headersType.includes("application/json")) {
    const res = await response.json();
    return res;
  }
};
