import React from 'react'

const Playlist = () => {
  return (
    <div className='playlist'>
        <ul>
            {new Array(40).fill(
                <li>
                <a href="#">My Playlist #1</a>
            </li>
            )}
        </ul>
    </div>
  )
}

export default Playlist