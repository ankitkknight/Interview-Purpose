"use client";
import React, { useState, useEffect, use } from "react";
import { Box } from "@mui/material";
import UpperText from "@/components/shoppingCartComponents/upperTexts";
import ShoesData from "@/components/shoppingCartComponents/shoesData";
import CheckoutContainer from "@/components/shoppingCartComponents/checkoutContainer";
import SaveForLater from "@/components/shoppingCartComponents/saveForLater";
import Subscribe from "@/components/HomePage/Subscribe";
import { MobileShoesData } from "@/components/shoppingCartComponents/mobileView";
import { WishListData } from "@/components/shoppingCartComponents/helperData";

const ShoppingCart = () => {
  const [wishListData, setWishListData] = useState([WishListData]);
  const [selectedId, setSelectedId] = useState("");
  // console.log(selectedId);

  useEffect(() => {
    handleSaveForLater(selectedId);
  }, [selectedId]);

  const [saveForLaterData, setSaveForLaterData] = useState([]);
  const handleSaveForLater = () => {
    if (selectedId === "") return;
    const item = wishListData[0].find((item) => item.id === selectedId);
    console.log(item);
    setSaveForLaterData([...saveForLaterData, item]);
    setWishListData([wishListData[0].filter((item) => item.id !== selectedId)]);
  };
  const styles = {
    subscribe: {
      marginLeft: { lg: "2%" },
      width: { lg: "96%" },
    },
  };
  return (
    <Box sx={{ width: "100%" }}>
      <UpperText />
      <ShoesData data={wishListData[0]} setSelectedId={setSelectedId} />

      {saveForLaterData.length > 0 && <h1> Save Later Product</h1>}
      {console.log(saveForLaterData)}
      <SaveForLater data={saveForLaterData} />

      <MobileShoesData Price={"1250"} />
      <CheckoutContainer />
      {/* <Box sx={styles.subscribe}>
        <Subscribe />
      </Box> */}
    </Box>
  );
};

export default ShoppingCart;
