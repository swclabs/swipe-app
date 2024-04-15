import { IPosts, productNews } from "@/interface/products";
import { Button, Card, CardHeader, Image } from "@nextui-org/react";
import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion"

export default function Posts({ data }: { data: IPosts[] }) {
    const ref = useRef<HTMLDivElement>(null);
    const scroll = (scrollOffset: number) => {
        if (ref.current) {
            ref.current.scrollLeft += scrollOffset
        }
    };
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
        >

            <div className="w-full pb-[10px]">
                <div
                    className=" relative flex 2xl:justify-between overflow-auto scroll-smooth"
                    style={{ scrollbarWidth: "none" }}
                    ref={ref}
                >
                    <div className=" sm:w-1/12 shrink-0 snap-center">
                        <div className="shrink-0"></div>
                    </div>
                    {data.map((value, index) => (
                        <div className="flex snap-center" key={index}>
                            <Card className="h-[700px] sm:w-[400px] m-5 w-[400px]">
                                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                    <div className={value.textcolor}>
                                        <p className=" text-base font-semibold">
                                            {value.title}
                                        </p>
                                        <h4 className="font-semibold text-3xl pt-2 pb-2">{value.subtitle}</h4>
                                    </div>
                                </CardHeader>
                                <Image
                                    removeWrapper
                                    alt="Card background"
                                    className="z-0 w-full h-full object-cover"
                                    src={value.img}
                                />
                            </Card>
                        </div>
                    ))}
                    <div className=" sm:w-1/12 shrink-0 snap-center">
                        <div className="shrink-0"></div>
                    </div>
                </div>
                <div className=" flex justify-end">
                    <Button radius="full" isIconOnly className=" mr-3" onClick={() => scroll(-400)}>
                        <FaAngleLeft />
                    </Button>
                    <Button radius="full" isIconOnly className=" mr-10" onClick={() => scroll(400)}>
                        <FaAngleRight />
                    </Button>
                </div>
            </div>
        </motion.div>
    )
}