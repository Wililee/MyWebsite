import { useState, Children } from 'react';

export const TabContainer = ({tabs}) => {

    const [currentTab, setCurrentTab] = useState('1');


    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className='w-10/12 pt-12 m-auto'>
            <div className='flex justify-between text-xl'>
                {tabs.map((tab, i) =>
                    <button 
                    key={i} 
                    id={tab.id} 
                    disabled={currentTab === `${tab.id}`} 
                    onClick={(handleTabClick)}
                    className='bg-gray-300 border-t-2 border-x-2 p-6 w-full hover:bg-gray-500  disabled:bg-white border-black rounded-t-3xl'>
                        {tab.tabTitle}
                    </button>
                )}
            </div>
            <div className='text-lg p-4 border-x-2 border-b-2 border-x-black border-b-black'>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <div><p className='title'>{tab.title}</p>
                            <div>{tab.content}</div>
                        </div>}
                    </div>
                )}
            </div>
        </div>
    );
}
