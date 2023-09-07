import React from 'react'

const Catalogue = (props) => {

    return (
        <div className='catalogue'>
            <CatalogueList></CatalogueList>
            <div className='catalogue_child'>
                <div className='catalogue-title'>
                    <h1>Không cần nỗi lo chi phí học IELTS</h1>
                    <div className='catalogue-title_btn'>
                        Trải nghiệm ngay
                    </div>
                </div>
                <img src="./banner-8.png" alt="" />
            </div> 
        </div>
    )
}

export default Catalogue

export const CatalogueList = (props) => {

    return (
        <div className='catalogue_list'>
            <CatalogueCard imageLink="../study-1.jpg" title='Làm đề thi'></CatalogueCard >
            <CatalogueCard imageLink="../study-2.jpg" title='Tìm kiếm tài liệu'></CatalogueCard >
            <CatalogueCard imageLink="../study-3.jpg" title='Chấm điểm writing tự động'></CatalogueCard >
            <CatalogueCard imageLink="../study-4.jpg" title='Thống kê kết quả luyện thi'></CatalogueCard >
        </div>
    )
}


export const CatalogueCard = (props) => {
    return (
        <div className='catalogue_card'>
            <img src={props.imageLink} alt="" />
            <div className='catalogue_card_title'>{props.title}</div>
            <div className='catalogue_card_decobar'></div>
        </div>
    )
}


