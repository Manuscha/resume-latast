import axios from './axios';

export default async function (url, { query, page, perPage, select, populate, orderBy, search, searchFields } = {}, queryParams) {
  let r = await axios.get(url, {
    params: {
      query,
      page,
      per_page: perPage,
      select, populate,
      order_by: orderBy,
      search,
      search_fields: searchFields,
      ...queryParams
    }
  })
  
  return {
    records: r.data,
    page: parseInt(r.headers['x-page']),
    perPage: parseInt(r.headers['x-per-page']),
    total: parseInt(r.headers['x-total']),
    totalPage: parseInt(r.headers['x-total-pages']),
    nextPage: parseInt(r.headers['x-next-page']),
    prevPage: parseInt(r.headers['x-prev-page']),
    // nextPage() {

    // },
    // prevPage() {

    // },
  }
}