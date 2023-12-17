import instance from "./instance";

export const searchSidos = async () => {
  const response = await instance.get('/sidos');
  return response;
}

export const searchGuguns = async (sidoId: number) => {
  const response = await instance.get(`/sidos/${sidoId}/guguns`)
  return response;
}