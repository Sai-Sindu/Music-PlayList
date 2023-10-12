import styled from 'styled-components'

export const MusicTrackCard = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`
export const MusicItemCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
`
export const MusicImg = styled.img`
  height: 100px;
  width: 150px;
`
export const MusicTrackDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  margin-left: 10px;
`
export const Name = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
`
export const Genre = styled.p`
  font-size: 15px;
  color: #3b82f6;
`
export const DurationDeleteCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100px;
`
export const Duration = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
`
export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
