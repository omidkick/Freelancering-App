import http from "./httpService";

export async function changeProposalStatusApi({ proposalId, ...rest }) {
  return http
    .patch(`/proposal/${proposalId}`, rest)
    .then(({ data }) => data.data);
}
export async function getProposalsApi() {
  return http.get(`/proposal/list`).then(({ data }) => data.data);
}
export async function createProposalApi(data) {
  return http.post(`/proposal/add`, data).then(({ data }) => data.data);
}
