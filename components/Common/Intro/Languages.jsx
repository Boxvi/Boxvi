import { Progress } from "antd"
import { useEffect, useState } from "react"

const Languages = () => {

    const [espanol, setEspanol] = useState(0)
    const [english, setEnglish] = useState(0)
    const [portugues, setPortugues] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            if (espanol < 98) {
                setEspanol(prevCount => prevCount + 1);
            }
            if (english < 88) {
                setEnglish(prevCount => prevCount + 1);
            }
 
        }, 30);

        return () => clearInterval(timer);

    }, [espanol, english])

    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-Snow text-xs font-bold'>Languages</span>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <span className='text-xs font-bold text-Snow'>Espanol</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <span className='text-xs font-bold text-Snow'>Ingles</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Languages
//import { Progress } from "antd";
//import { useEffect, useState } from "react";
//
//const Languages = () => {

//
    
//
//    return (
//        <div className="flex flex-col space-y-1 pt-6">
//            <div className="flex flex-col gap-y-4">
//                <span className='text-Snow text-xs font-bold'>Idiomas</span>
//                <div className="flex flex-row items-center justify-center space-x-6">
//                    <div className="flex flex-col items-center justify-center gap-y-2">
//                        <Progress />
//                        <span className='text-xs font-bold text-Snow'>Espanol</span>
//                    </div>
//                    <div className="flex flex-col items-center justify-center gap-y-2">
//                        <Progress />
//                        <span className='text-xs font-bold text-Snow'>Ingles</span>
//                    </div>
//                </div>
//
//
//            </div>
//        </div>
//
//    )
//
//}
//
//export default Languages;

//                        <Progress strokeColor="#1fdf64" type="circle" percent={espanol} size={75} />
