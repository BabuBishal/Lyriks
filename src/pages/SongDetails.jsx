import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components'

import { setActiveSong, playPause } from '../redux/features/playerSlice';

const { data, isFetching, error } = useGetTopChartsQuery();
   console.log(data)

    if(isFetching) return <Loader title='Loading songs...' />;

    if (error) return <Error />

const SongDetails = () => {
    const dispatch = useDispatch();
    const { songid } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);

return (
    <div>
        <div>
            <h3></h3>
        </div>
    </div>
)
}

export default SongDetails;
