'use client';
import './style.css'
import productNews from "@/faker/product-news";
import ListCard from "../common/card-section";

export default function News() {
    return (
        <div className='bg-white'>
            <ListCard data={productNews} />
        </div>
    )
}