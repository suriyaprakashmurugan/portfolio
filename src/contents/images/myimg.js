import React, { useState } from 'react';
import { Image } from 'antd';

function MyImg () {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Image
        preview={{ visible: false }}
        width={200}
        src=""
        onClick={() => setVisible(true)}
      />
      <div style={{ display: 'none' }}>
        <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
          <Image src="" />
          <Image src="" />
          <Image src="" />
        </Image.PreviewGroup>
      </div>
    </>
  );
};

export default MyImg;