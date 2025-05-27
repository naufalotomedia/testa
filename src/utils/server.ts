export const serverConfiguration = {
  pathApi: "https://api.otomedia.co.id/",
  pathPanel: "https://panel.otomedia.co.id/api/",
  pathWs: "https://ws.gooto.co.id/api/",
};

export const httpGet = async (route: string, token?: any) => {
  const timeout = (ms: number) =>
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("Server saat ini sedang sibuk!")), ms)
    );

  const TIMEOUT_MS = 15000;

  return Promise.race([
    fetch(serverConfiguration.pathApi + route, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then(async (response) => {
      const responseBody = await response.json();
      return responseBody;
    }),
    timeout(TIMEOUT_MS),
  ]).catch((error) => {
    return error;
  });
};

export const httpGetClient = async (route: string, token?: any) => {
  const timeout = (ms: number) =>
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("Server saat ini sedang sibuk!")), ms)
    );

  const TIMEOUT_MS = 15000;

  return Promise.race([
    fetch(serverConfiguration.pathPanel + route, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then(async (response) => {
      const responseBody = await response.json();
      return responseBody;
    }),
    timeout(TIMEOUT_MS),
  ]).catch((error) => {
    return error;
  });
};

export const httpPost = async (route: string, data: any, token?: any) => {
  const timeout = (ms: number) =>
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("Server saat ini sedang sibuk!")), ms)
    );

  const TIMEOUT_MS = 15000;

  return Promise.race([
    fetch(serverConfiguration.pathApi + route, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then(async (response) => {
      const responseBody = await response.json();
      return responseBody;
    }),
    timeout(TIMEOUT_MS),
  ]).catch((error) => {
    return error;
  });
};

export const httpPostClient = async (route: string, data: any, token?: any) => {
  const formData = new URLSearchParams(data).toString();

  const timeout = (ms: number) =>
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("Server saat ini sedang sibuk!")), ms)
    );

  const TIMEOUT_MS = 15000;

  return Promise.race([
    fetch(serverConfiguration.pathPanel + route, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }).then(async (response) => {
      const responseBody = await response.json();
      return responseBody;
    }),
    timeout(TIMEOUT_MS),
  ]).catch((error) => {
    return error;
  });
};

export const httpPostClientRaw = async (route: string, data: any) => {
  const TIMEOUT_MS = 15000;

  const timeout = (ms: number) =>
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("Server saat ini sedang sibuk!")), ms)
    );

  const headers: Record<string, string> = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  return Promise.race([
    fetch(serverConfiguration.pathPanel + route, {
      method: "POST",
      body: JSON.stringify(data),
      headers,
      credentials: "include", // Tambahkan agar cookie dikirim jika server membutuhkannya
    }).then(async (response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    }),
    timeout(TIMEOUT_MS),
  ]).catch((error) => {
    throw new Error(error.message || "Terjadi kesalahan pada permintaan.");
  });
};

export const httpPostWs = async (route: string, data: any) => {
  const TIMEOUT_MS = 15000;

  const timeout = (ms: number) =>
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("Server saat ini sedang sibuk!")), ms)
    );

  const headers: Record<string, string> = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  return Promise.race([
    fetch(serverConfiguration.pathWs + route, {
      method: "POST",
      body: JSON.stringify(data),
      headers,
      credentials: "include", // Tambahkan agar cookie dikirim jika server membutuhkannya
    }).then(async (response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    }),
    timeout(TIMEOUT_MS),
  ]).catch((error) => {
    throw new Error(error.message || "Terjadi kesalahan pada permintaan.");
  });
};

export const httpPostOtp = async (route: string) => {
  const TIMEOUT_MS = 15000;

  const timeout = (ms: number) =>
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("Server saat ini sedang sibuk!")), ms)
    );

  return Promise.race([
    fetch(serverConfiguration.pathPanel + route, {
      method: "POST",
    }).then(async (response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    }),
    timeout(TIMEOUT_MS),
  ]).catch((error) => {
    throw new Error(error.message || "Terjadi kesalahan pada permintaan.");
  });
};

export const httpPostFormData = async (
  route: string,
  data: FormData,
  token?: string
) => {
  const timeout = (ms: number) =>
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("Server saat ini sedang sibuk!")), ms)
    );

  const TIMEOUT_MS = 15000;

  return Promise.race([
    fetch(serverConfiguration.pathApi + route, {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token || ""}`,
      },
    }).then(async (response) => {
      const responseBody = await response.json();
      return responseBody;
    }),
    timeout(TIMEOUT_MS),
  ]).catch((error) => {
    return { error: error.message || "Unknown error" };
  });
};
