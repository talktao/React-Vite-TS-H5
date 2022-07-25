import { FC, useState } from "react";
import Tabbar from "@/component/tabbar";
import style from './index.module.less';

const Home: FC<any> = () => {

    return (
        <div className={style.home}>
            首页
            <Tabbar path='/home' />
        </div>
    );
};

export default Home;