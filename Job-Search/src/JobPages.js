import React from 'react'
import { Pagination } from 'react-bootstrap'

export default function JobPages({page, setPage, hasNextPage}) {
    return (
        <Pagination>
            { page !== 1 && <Pagination.Prev />}
            { page !== 1 && <Pagination.Item>{page-1}</Pagination.Item>}
            { page > 2 && <Pagination.Item>1</Pagination.Item>}
            { page > 2 && <Pagination.Ellipsis />}
            <Pagination.Item>{page}</Pagination.Item>
            {hasNextPage && <Pagination.Item>{page+1}</Pagination.Item> }
            {hasNextPage && <Pagination.Next /> }

        </Pagination>
    )
}
