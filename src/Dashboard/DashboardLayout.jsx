import React from 'react'

import Graph from './Graph'
import {useStoreContext} from '../contextApi/ContextApi'
import { useFetchTotalClicks } from '../Hooks/useQuery'
import { dummyData } from '../DummyData/data';

export function DashboardLayout(props) {
    const {token}=useStoreContext();
    function onError(){
        console.log("ERROR");
    }
  //  console.log(useFetchTotalClicks(
    //    token,onError
    //));
    const {isLoading: loader, data: totalClicks} = useFetchTotalClicks(token, onError)
    return (
        <>
          <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
                <div className="lg:w-[90%] w-full mx-auto py-16">
                    <div className="h-96 relative">
                        <Graph graphData={dummyData} />
                    </div>
                </div>
            </div>
            <div className='py-5 sm:text-end text-center'>
                <button className='bg-custom-gradient px-4 py-2 rounded-md text-white'>
                    Create a new Short URL

                </button>

            </div>
            
        </>
    )
}
