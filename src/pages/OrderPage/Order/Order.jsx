import { useState } from 'react';
import Cover from '../../../Shared/Cover/Cover';
import orderCoverImg from '../../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salads = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");
    const drinks = menu.filter(item => item.category === "drinks");


    return (
        <div className='mb-10'>
            <div className='mb-10'>
                <Cover img={orderCoverImg} title={"ORDER FOOD"}/>
            </div>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items = {salads}/>
                </TabPanel>
                <TabPanel>
                    <OrderTab items = {pizza}/>
                </TabPanel>   
                <TabPanel>
                    <OrderTab items = {soup}/>
                </TabPanel>
                <TabPanel>
                    <OrderTab items = {desserts}/>
                </TabPanel>   
                <TabPanel>
                    <OrderTab items = {drinks}/>
                </TabPanel>   
            </Tabs>
        </div>
    );
};

export default Order;