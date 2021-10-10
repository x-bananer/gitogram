import { makeRequest } from '../request'

export const getIssue = ({ owner, repo }) => {
  const contentHeader = 'application/vnd.github.v3.html+json'
  return makeRequest({
    url: `/repos/${owner}/${repo}/issues`,
    headers: {
      accept: contentHeader
    }
  })
}
