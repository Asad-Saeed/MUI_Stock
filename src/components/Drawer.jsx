import React from "react";
import ClippedDrawer from "./layouts/Drawars/ClippedDrawar";
import SimpleDrawer from "./layouts/Drawars/SimpleDrawer";
import MiniVariantDrawer from "./layouts/Drawars/MiniVariantDrawer";
import PhoneDrawer from "./layouts/Drawars/PhoneDrawer";
import PersistentDrawer from "./layouts/Drawars/PersistentDrawer";
import ResponsiveDrawer from "./layouts/Drawars/ResponsiveDrawer";

const Drawer = () => {
  return (
    <div>
      {/* <SimpleDrawer /> */}
      {/* <ClippedDrawer /> */}
      <MiniVariantDrawer />
      {/* <ResponsiveDrawer /> */}
      {/* <PersistentDrawer /> */}
      {/* <PhoneDrawer /> */}
    </div>
  );
};

export default Drawer;
