"use client"
import React from 'react';
import Banner from "@/components/banner"
import News from '@/components/iphone/news';
import Accessories from '@/components/iphone/accessories';
import Product from '@/components/accessories/product';
import Welcome from '@/components/common/welcome-section';
import Posts from '@/components/posts';
import posts from '@/faker/posts';
import { Image } from '@nextui-org/react';
import AccessoryIphone from '@/components/accessories/iphone-accessories';
import AccessoryWatch from '@/components/accessories/watch-accessories';

function AccessoriesPage() {
    return (
        <>
            {/* 
            |
            |--- news 
            |
            |--- sản phẩm cụ thể
            |
            |--- phụ kiện cho sản phẩm
            |
            */}

            <div className=" w-full bg-white">
                {/* <ProductBar /> */}
                <Banner />

                {/* Section Welcome */}
                {/* <Welcome title='iPhone' subtitle='Được thiết kế mà ai cũng mê' /> */}

                {/* Posts Section */}
                {/* <Posts data={posts} /> */}

                {/* News */}
                {/* <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                        <span className=" text-xl sm:text-5xl font-medium">Tin tức.</span>
                        <span className=" text-xl sm:text-5xl font-medium text-gray-500">Tìm hiểu thêm về iPhone</span>
                    </div>
                </div>

                <News /> */}

                {/* Section Search Products */}
                <div className="flex flex-col justify-center items-center mb-12">
                    <div className=" pt-12 pb-12">
                        <span className=" text-4xl font-semibold">Tìm phụ kiện mong muốn.</span>
                    </div>
                    <span

                        className='w-[580px] px-4 py-2 border border-gray-300 rounded-md flex items-center'
                    >
                        <Image
                            alt='search-icon'
                            src="/img/accessory/search-svgrepo-com.svg"
                            className='w-6 h-6'
                        >
                        </Image>
                        <input
                            placeholder='Tìm kiếm phụ kiện'
                            type='text'
                            className='text-lg w-full p-2 outline-none border-none bg-transparent'
                        />
                    </span>
                </div>

                {/* Section Products */}
                <Product />


                {/* Section Accessories */}
                <div className="flex justify-center mt-12">
                    <div className=" pt-12 pb-12">
                        <span className=" text-xl sm:text-5xl font-medium">Phụ kiện iPhone nổi bật</span>
                    </div>
                </div>

                <AccessoryIphone />

                <div className="flex justify-center mt-12">
                    <div className=" pt-12 pb-12">
                        <span className=" text-xl sm:text-5xl font-medium">Dây Đeo Apple Watch</span>
                    </div>
                </div>

                <AccessoryWatch />

                <div className="flex justify-center mt-12">
                    <div className=" pt-12 pb-12">
                        <span className=" text-xl sm:text-5xl font-medium">Phụ Kiện Thiết Yếu Cho Âm Thanh</span>
                    </div>
                </div>

                <AccessoryIphone />

                <div className="flex justify-center mt-12">
                    <div className=" pt-12 pb-12">
                        <span className=" text-xl sm:text-5xl font-medium">Các Phụ Kiện Mac Nổi Bật</span>
                    </div>
                </div>

                <AccessoryIphone />

                <div className="flex justify-center mt-12">
                    <div className=" pt-12 pb-12">
                        <span className=" text-xl sm:text-5xl font-medium">AirTag</span>
                    </div>
                </div>

                <AccessoryIphone />

                <div className='w-full bg-gray-100'>
                    <div className='w-1/2 m-auto mt-12'>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='flex justify-center items-center w-[216px]'>
                                <Image
                                    alt=''
                                    className='w-[44px] h-[56px] object-cover'
                                    src="/img/accessory/icon-shipping-grey-2017.png"
                                />
                            </div>
                            <div className='flex justify-center items-center w-[216px]'>
                                <p className='text-center'>
                                    Giao hàng miễn phí ngày làm việc tiếp theo
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default AccessoriesPage;