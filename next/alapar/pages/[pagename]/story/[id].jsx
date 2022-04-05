import Stories from 'react-insta-stories';
import { GET_STORY, base } from '@/Constructions/const'
import { labelNames, pagenames } from '@/controller'
import {useEffect, useState} from 'react'


function Index({ video = null}) {
    const [timer, setTimer] = useState(false)

    const stories = [
        {
            url: base + video.videoPath,
            type: 'video',
            duration: 15000

        }
    ]
    
    useEffect(()=>{
        setTimeout(() => {
            setTimer(true)
        }, 1000);
    },[])

    return <>
        <div className="flex justify-center">
            {timer? <Stories
                stories={stories}
                width={432}
                height={768}
               // isPaused={true}
            />:null}
        </div>
    </>
}


export default Index;

export async function getServerSideProps(context) {
    let pagename = context.params.pagename.toLowerCase();
    const apiPagename = Object.keys(pagenames)[Object.values(pagenames).indexOf(pagename.toLowerCase())];
    const req = await fetch(GET_STORY(context.params.id, apiPagename));
    const story = {}
    if (req.ok) {
        const res = await req.json()
        story.video = res;
    }
    return {
        props: {
            ...story,
            pagename: pagename,
            apiPagename,
            color: labelNames[pagename]?.mainColor,
        },
    }
}

