import styled from 'styled-components'

export const MusicPlayListAppContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const SingerImgCard = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  width: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 40px;
  height: 350px;
  font-family: 'Roboto';
`
export const SingerName = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 0;
`
export const Text = styled.p`
  color: #cbd5e1;
  font-size: 20px;
`

export const MusicPlayListContainer = styled.div`
  background-color: #152850;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
`
export const TitleSearchCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-family: 'Roboto';
`
export const Title = styled.h1`
  color: #ffffff;
  font-size: 25px;
  font-weight: 500;
`
export const SearchCard = styled.div`
  border: 1px solid #cbd5e1;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  width: 30%;
`
export const InputCard = styled.input`
  border: none;
  outline: none;
  width: 90%;
  background-color: transparent;
  padding: 10px;
  color: #cbd5e1;
`
export const MusicPlayListCard = styled.ul`
  list-style-type: none;
  height: 300px;
  overflow-y: auto;
  padding-left: 0;
  display: flex;
  flex-direction: column;
`
export const NoSongsFound = styled.p`
  color: #ffffff;
  font-size: 35px;
  font-family: 'Roboto';
  text-align: center;
`
