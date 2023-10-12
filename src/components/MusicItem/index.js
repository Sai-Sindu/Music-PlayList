import {AiOutlineDelete} from 'react-icons/ai'

import {
  MusicTrackCard,
  MusicItemCard,
  MusicImg,
  MusicTrackDetails,
  Name,
  Genre,
  DurationDeleteCard,
  Duration,
  DeleteButton,
} from './styledComponents'

const MusicItem = props => {
  const {musicItemDetails, deleteMusic} = props
  const {id, imageUrl, name, genre, duration} = musicItemDetails

  const onDeleteMusic = () => {
    deleteMusic(id)
  }

  return (
    <MusicTrackCard>
      <MusicItemCard>
        <MusicImg src={imageUrl} alt="track" />
        <MusicTrackDetails>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </MusicTrackDetails>
      </MusicItemCard>
      <DurationDeleteCard>
        <Duration>{duration}</Duration>
        <DeleteButton
          type="button"
          onClick={onDeleteMusic}
          data-testid="delete"
        >
          <AiOutlineDelete color="#cbd5e1" />
        </DeleteButton>
      </DurationDeleteCard>
    </MusicTrackCard>
  )
}

export default MusicItem
