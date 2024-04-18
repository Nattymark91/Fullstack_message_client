import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";

const Pages = observer(() => {
    const {answer} = useContext(Context)
    const pageCount = Math.ceil(answer.totalCount / answer.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination className="mt-4" >
            {pages.map(page =>
                <Pagination.Item
                    variant="dark"
                    key={page}
                    active={answer.page === page}
                    activeLabel=''
                    onClick={() => answer.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;