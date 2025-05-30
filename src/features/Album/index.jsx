import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./component/AlbumList";

AlbumFeature.propTypes = {
  AlbumFeature: PropTypes.array,
};

function AlbumFeature(props) {
  //khởi tảo mảng opject
  const albumList = [
    {
      id: 1,
      name: "lofi gay nghien",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/b/1/3/0/b130381bdaed5df3ddfff9549d859510.jpg",
    },
    {
      id: 2,
      name: "nhac chill ngay nay",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/b/2/d/5b2db8554a643325c438c565db6c7642.jpg",
    },
    {
      id: 3,
      name: "lofi mot chut thoi",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/2/4/5/3/24538985249cd4d3b324b4a4a09ad288.jpg",
    },
  ];
  return (
    <div>
      <h2>Co le ban se thich</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
