import React, { useState } from "react";
import Link from "next/link";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import SearchIcon from '@mui/icons-material/Search';

export const ChannelFilter = ({ channels }) => {
  const [search, setSearch] = useState("");

  const getFilteredChannels = () => {
    return channels.filter((channel) =>
      search === ""
        ? true
        : channel.author.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <div className="channelFilterPanel">
      <div className="channelFilterPanel_searchPanel">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="channelFilterPanel__search"
          placeholder="Search"
          
        />
        <SearchIcon className="searchIconPostion"/>
        
      </div>
   
     <div className="channelFilterPanel__channelList">
      
                  <div >
                    {getFilteredChannels().map((channel) => (
                      <Link href={`/channels/${channel.channelId}`}>
                        <div className="channelFilterPanel__channel">
                          <img
                            className="channelFilterPanel__thumbnail"
                            src={channel.authorThumbnail}
                          />
                          {channel.author}
                      
                        </div>
                      
                      </Link>
                    ))}
                  </div>
     </div>
    </div>
  );
};
