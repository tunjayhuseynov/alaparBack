import React, { useEffect, useState, useCallback } from 'react';
import { GET_STORIES } from '@/Constructions/const'
import { pagenames } from '@/controller'
import { AnimateSharedLayout, AnimatePresence, motion } from 'framer-motion'
import Stories from 'react-insta-stories';
import { Modal } from 'antd'
import { base } from '@/Constructions/const'
import router from 'next/router';
import {generate} from 'shortid'

function Story({ pagename }) {
    const [stories, setStories] = useState([])
    const [showenList, setShownList] = useState([])
    const [selectedStory, setSelectedStory] = useState(null)
    const [storyBodyPos, setStoryBodyPos] = useState({x: 0, y:0})
    const [storyWidth, setstoryWidth] = useState(432)
    const [storyHeight, setstoryHeight] = useState(768)

    useEffect(async () => {
        if (window.innerWidth < 768) {
            setstoryWidth(window.outerWidth)
            setstoryHeight(window.outerHeight)
        }
        const apiPagename = Object.keys(pagenames)[Object.values(pagenames).indexOf(pagename.toLowerCase())];
        const req = await fetch(GET_STORIES(apiPagename));
        const res = await req.json()

        const s = res?.map((w, i) => <motion.video key={generate()} layoutId={i} onClick={() => setSelectedStory(i)} preload='metadata' className="h-[100px] w-[100px] object-cover cursor-pointer rounded-full" id="v" src={`${w.videoPath}#t=1`} ></motion.video>)
        setStories(s)
        setShownList(res?.map(w => {
            return {
                url: `${base}${w?.videoPath}`,
                type: 'video',
                seeMore: () => window.open('https://mywebsite.url', '_blank'),
                seeMoreCollapsed: ({ toggleMore, action }) => {
                    return (
                        <div className="flex justify-center items-center gap-5">
                            {w?.link ? <h2 className="flex justify-center text-black rounded-lg p-2 text-xl bg-white" onClick={() => {
                                action('pause');
                                window.open(w?.link, '_blank');
                            }}>
                                Linkə Get
                            </h2> : null}
                            {w?.adId ? <h2 className="flex justify-center text-black rounded-lg p-2 text-xl bg-white" onClick={() => {
                                action('pause');
                                router.push(`${pagename}/get/${w.adId}`)
                            }}>
                                Elana Get
                            </h2> : null}
                            <div className="bg-white rounded-full w-6 h-6 p-2 font-bold flex justify-center items-center" onClick={() => setSelectedStory(null)}>X</div>
                        </div>
                    )
                }
            }
        }))
    }, [])

    useEffect(w => {
        if (selectedStory) {
            document.body.style.overflow = "hidden"
            if(document.getElementById("navbar")){
                document.getElementById("navbar").style.zIndex = "0";
            }
            setStoryBodyPos({
                x: scrollX,
                y: scrollY

            })
        } else {
            document.body.style.overflow = "auto"
            if(document.getElementById("navbar")){
                document.getElementById("navbar").style.zIndex = "50";
            }
        }
    }, [selectedStory])

    return <AnimateSharedLayout type="crossfade" className="relative">
        <motion.section className="py-10">
            <motion.div className="flex gap-7">
                {stories}
            </motion.div>
        </motion.section>
        <AnimatePresence>
            {selectedStory && <motion.div layoutId={selectedStory} className="z-[100] w-full h-screen absolute" style={{top: `${storyBodyPos.y}px`, left: `${storyBodyPos.x}px`}}>
                <motion.div className="w-full h-full bg-black opacity-30 absolute" onClick={() => setSelectedStory(null)}></motion.div>
                <motion.div className="flex justify-center items-center h-full w-full">
                    <Stories
                        stories={showenList}
                        width={storyWidth}
                        height={storyHeight}
                        currentIndex={selectedStory}
                    />
                </motion.div>

            </motion.div>}
        </AnimatePresence>
    </AnimateSharedLayout>

}

export default Story;
