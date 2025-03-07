import { useDispatch, useSelector } from "react-redux";
import { github } from "../../assets";
import { useEffect } from "react";
import { fetchMyGithubReposCount } from "../../store/slices/githubSlice";

export const Github = () => {
    const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
    const GITHUB_PROFILE_LINK = import.meta.env.VITE_GITHUB_PROFILE_LINK;
    const dispatch = useDispatch();
    const {repoCount,status} = useSelector((state) => state.github);
    let rightPostion = repoCount?.toString().length * 10;

    useEffect(() => {
        dispatch(fetchMyGithubReposCount(GITHUB_USERNAME));
    },[dispatch]);

    return(
        <div className="relative cursor-pointer z-20 animate-bounce" onClick={() => window.open(GITHUB_PROFILE_LINK,"_blank")}>
            <img src={github} alt='project_image' className='w-9 h-9 object-cover rounded-[50%] shadow-lg shadow-[#915EFF]' />
            <div className={`absolute top-[-20px] rounded-[50%] px-[5px] text-[#915EFF]`} style={{right: `-${rightPostion}px`}}>
                {status.repoCount === "succeeded" && repoCount}
            </div>
        </div>
    )
}