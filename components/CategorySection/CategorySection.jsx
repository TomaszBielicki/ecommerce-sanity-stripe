import React from "react";
import {
  CategoryWrapper,
  CategoryTile,
  Text,
  TxtWrapper,
} from "./CategorySection.style";
import { braCategoryImg } from "../../images/index";
function CategorySection() {
  return (
    <CategoryWrapper>
      <CategoryTile>
        {/* <img src={braCategoryImg} /> */}
        <TxtWrapper>
          <Text>Category #1</Text>
        </TxtWrapper>
      </CategoryTile>
      <CategoryTile>
        <TxtWrapper>
          <Text>Category #2</Text>
        </TxtWrapper>
      </CategoryTile>
      <CategoryTile>
        <TxtWrapper>
          <Text>Category #3</Text>
        </TxtWrapper>
      </CategoryTile>
    </CategoryWrapper>
  );
}

export default CategorySection;
