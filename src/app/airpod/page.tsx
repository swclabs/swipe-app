"use client"
import React from 'react';
import Banner, { BannerPlugin } from "@/components/ui-app/banner"
import ProductBar from '@/components/airpod/product-bar';
import News from '@/components/airpod/news';
import Product from '@/components/airpod/product';
import Accessories from '@/components/airpod/accessories';
import Service from "@/components/store/service";
import { motion } from "framer-motion"
import Welcome from '@/components/ui-app/common/welcome-section';
import ProductAirpodTypes from '@/components/airpod/product-types';

function IphonePage() {
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
            |--- dịch vụ
            |
            */}

            <div className=" w-full bg-white">
                <div className=' w-full flex justify-center p-5 bg-gray-50'>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.75 }}
                        className='w-4/5'
                    >
                        <ProductAirpodTypes />
                    </motion.div>
                </div>
                <BannerPlugin />

                {/* Section Welcome */}
                <Welcome title='Airpods' subtitle='Nơi âm nhạc trở nên sống động.' />

                {/* News */}
                <div className="flex justify-center text-center">
                    <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                        <span className=" text-lg sm:text-6xl font-semibold">
                            Kết nối tuyệt diệu với <br />
                            các thiết bị của bạn.
                        </span>
                    </div>
                </div>

                <News />

                {/* Section Products */}
                <div className="flex justify-center text-center">
                    <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                        <span className=" text-lg sm:text-6xl font-semibold">
                            AirPods nào <br />
                            phù hợp với bạn?
                        </span>
                    </div>
                </div>

                <Product />

                {/* Section Service */}
                <Service />

                {/* Section Accessories */}
                <div className="flex justify-center">
                    <div className=" sm:w-4/5 sm:p-12 pt-10 pb-10">
                        <span className=" text-xl sm:text-5xl font-medium">Phụ kiện thiết yếu cho Airpod.</span>
                    </div>
                </div>

                <Accessories />
            </div>
        </>
    );
};

export default IphonePage;